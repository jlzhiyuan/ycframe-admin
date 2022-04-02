/**
 * 饼图专题图
 * @param datasourceName {String} 所要查询的数据源名称
 * @param usualField {String} 通用的字段名称
 * @param fields {Object} 所要查询的字段名称
 * @param map {GeoX.Map} 地图初始化的map对象
 */

GeoX.Layer.Pie = function(datasourceName,usualField,fields,map){
	
	this.datasourceName=datasourceName;
	this.usualField=usualField;
	this.fields=fields;
	this.map=map;
	
	var ds=null;
	var pixArr = new Array();
	var idArr = new Array();
	var dataname = new Array();
	var piearry = new Array();
	var usualFieldValue = "";
	var fieldsValue = "";
	var datas =[];
	
	/**
	 * 设置饼图样式方法
	 * @param width {String} 修改饼图的宽度
	 * @param height {String} 修改饼图的高度
	 * @param sectorStyleByFields {Object} 饼图扇形颜色设置(样式与fields数组中的字段名称一一对应)
	 */
	this.chartsSetting=function(width,height,sectorStyleByFields){
		var sop = this;
		var mousePosition = new GeoX.Control.MousePosition();
		sop.map.addControl(mousePosition);
		sop.map.addEventListener("moveend",querybounds);
		
		function conn(){
	 		var conncallback=function(d){
	 			alert("数据源连接成功！");	
	 			queryfeature();
	 			
	 		};
	 		//平台数据源实例
			ds=new GeoX.Data.DataSource(sop.datasourceName,conncallback);
			//初始化，连接服务，验证是否存在数据源
			ds.conn();  
			
		}
	      
		conn();
		
		function queryfeature()
		{
			if(ds.isSucceed())
			{ 
				//属性查询参数
				var param=new GeoX.Data.AttributeParameter("fid>500");
				//根据当前bounds查询数据源信息
//				var location = sop.map.getBounds();
//				var bounds=new GeoX.Geometry.Bounds(location.left,location.bottom,location.right,location.top);
//				var param=new GeoX.Data.BoundsParameter(bounds);
				//查询数据功能
				var query=new GeoX.Data.QueryData(ds,param);
				query.submit(submitSucceed); 
			}
		}
		
		
		function submitSucceed(d){
			Lemon.MSG.MsgPanel.Debug(d);	
			
				if(d.chains.length != 0){
					for(var i=0;i<d.chains.length;i++)
					{
						if(d.chains[i].geometry)
							{
							//获取经纬度并转换成像素
							var lonlat = new GeoX.Mapping.LonLat(d.chains[i].geometry.coordinates[0],d.chains[i].geometry.coordinates[1]);
						    pixArr[i] = map.getPixelFromLonLat(lonlat);
						    //获取fid作为动态创建div的id
						    idArr[i]=d.chains[i].fid;
						    //创建div 用承载饼图
						    var divChild = document.createElement("Div");
							  divChild.id=idArr[i];
							  divChild.style.width=width;
							  divChild.style.height=height;
							
							  divChild.style.left=pixArr[i].x-54+"px";//因为offsetLeft是只读属性所以要通过left属性设置。而且还要设置绝对定位。
							  divChild.style.top =pixArr[i].y-33+"px";
							  
							  /*divChild.style.left=pixArr[i].x-(parseInt(divChild.style.width)*54/120)+"px";//因为offsetLeft是只读属性所以要通过left属性设置。而且还要设置绝对定位。
							  divChild.style.top =pixArr[i].y-(parseInt(divChild.style.width)*33/120)+"px";*/
							 
							  divChild.style.position="absolute";
							  divChild.style.background="#fff";
							  divChild.style.zIndex=99999;
							  mapview.appendChild(divChild);
							  
							 
							  var myChart = echarts.init(document.getElementById(idArr[i]));
							  
							  //获取通用字段value
							    var str = JSON.stringify(d.chains[i]);
						    	var str1 = JSON.parse(str);
						    	for(var key in str1){
						    		if(key==usualField){
						    			usualFieldValue=str1[key];
						    		}
						    	}
						     
						    	
						      //获取查询字段value					      
						      for(var j=0;j<fields.length;j++){
						    	  var str2 = JSON.stringify(d.chains[i]);
							      var str3 = JSON.parse(str2);
							      for(var key in str3){
							    	  if(key==fields[j]){
							    		  fieldsValue=str3[key];
							    		  var strs = {'value':fieldsValue,'name':fields[j]};
							    		  datas.push(strs);
							    	  }							    	   
							      }
						      }
						      
						    	
						        // 指定图表的配置项和数据
							  option = {
									 
								    tooltip : {
								        trigger: 'item',
								        formatter:''+usualField+':'+usualFieldValue+'</br>{b}:{c}'
								    },
								    
								    series : [
								        {
								        	type: 'pie',
								            label:{
								            	normal:{
								            		show:false,
								            	}
								            },
								            //color:['#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
								            color:sectorStyleByFields,
								            radius : '80%',
								            center: ['50%', '50%'],
								            /*data:[				                
								                {value:335, name:d.chains[i].code},
								                {value:234, name:d.chains[i].code},
								                {value:310, name:d.chains[i].name},
								                {value:335, name:d.chains[i].fid},
								                {value:234, name:d.chains[i].code}				            
								                
								            ],*/
								            								            
								            data:datas,
			
								            itemStyle: {
								                emphasis: {
								                    shadowBlur: 10,
								                    shadowOffsetX: 0,
								                    shadowColor: 'rgba(0, 0, 0, 0.5)'
								                }
								            }
								        }					        
								    ]
								};
							  
						        //使用刚指定的配置项和数据显示图表。
						        myChart.setOption(option);
						        piearry.push(myChart);
							}else
								
							{
								alert(d.chains[i]);
								
							}
					}
					// alert(pixArr.length);
				}else if(d.msg != ""){
					alert("表中fid>0的数据有"+d.chains.length+"条");
				}

		}
		//地图bounds改变监听事件
		function querybounds(e){
			//清空数组
			datas=[];
			if(ds&&ds.isSucceed())
			{
				 removeallPie();
				 queryfeature();
			}
		};
		
		function removeallPie()
		{
			//移除所有pie
			for(var i=0;i<piearry.length;i++)
				{
				piearry[i].clear();
				}
			//移除所有div
			var d1=document.getElementById('mapview'); 
			 
			
			for(var i=0;i<idArr.length;i++)
			{
				var d2=document.getElementById(idArr[i]);
				d1.removeChild(d2); 
			}
			idArr.length =0;		
		}	
	}
}



