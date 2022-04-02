var system = system || {};
var ds=null;
var n=null;
var pixArr = new Array();
var idArr = new Array();
var dataname = new Array();
var piearry = new Array();

var fidValue = "";

system.init = function() {
		function viewmap(e){
			if(e.state==1)
			{
				alert("验证用户标识异常");
				return;
			}
			//创建一个map地图对象
			map = new GeoX.Map("mapview"); 
			var sicmapnames=map.getSicMapNames()
			map.showSicMapOfName(sicmapnames[0]);
							
			map.addControl(new GeoX.Control.ScaleLine()); 
 			var mousePosition = new GeoX.Control.MousePosition();
 			map.addControl(mousePosition);
 			
 		
 			var params = {
 					layers: 'admin_BuildingPoint',
 			        format: 'image/png',
 			        transparent: true
 			};
 			//wms选项
 			var options = {
 					buffer: 0,
 				    displayOutsideMaxExtent: true,
 				    isBaseLayer: false,
 				    opacity: 1
 			};

 			//创建wms图层  
 		    //var	WMSlayer = new GeoX.Layer.WMS("admin_BuildingPoint","http://"+(window.location.host.split(':')[0])+":8090/GeoXServer/admin/wms",params,options);
 		    var	WMSlayer = new GeoX.Layer.WMS("admin_BuildingPoint","http://"+(window.location.host.split(':')[0])+":8099/GeoXServer/admin/wms",params,options);
 		    //添加wms图层
 			map.addLayer(WMSlayer);
 			map.addEventListener("moveend",querybounds);


 			
		}; 
		//验证用户标识，成功后回调
		GeoX.Verify.VerifyKey("2da73f2f-6485-479b-9e0c-da85b49d370c",viewmap); 
	 	
	};
	
	system.addPie=function(s)
	{
		 queryfeature();
		
	    }
	function conn(){
 		var conncallback=function(d){
 			alert("数据源连接成功！");
 		};
 		//平台数据源实例
		ds=new GeoX.Data.DataSource("admin_BuildingPoint",conncallback);
		//初始化，连接服务，验证是否存在数据源
		ds.conn();  
		
	}
	function queryfeature()
	{
		if(ds.isSucceed())
		{ 
			//alert("123");
			//属性查询参数
			var param=new GeoX.Data.AttributeParameter("fid==2");
			//var param=new GeoX.Data.AttributeParameter("fid>500");
			//根据当前bounds查询数据源信息
			/*var location = map.getBounds();
			var bounds=new GeoX.Geometry.Bounds(location.left,location.bottom,location.right,location.top);
			var param=new GeoX.Data.BoundsParameter(bounds);*/
			//查询数据功能
			var query=new GeoX.Data.QueryData(ds,param);
			query.submit(submitSucceed); 
		}
	}
	
	
	function submitSucceed(d){
		Lemon.MSG.MsgPanel.Debug(d);	
		//只在查询时进行此操作 
			if(d.chains.length != 0){
				dataname =[d.chains[0].fid,d.chains[0].name,d.chains[0].code];
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
						  divChild.style.width="120px";
						  divChild.style.height="120px";
						
						  divChild.style.left=pixArr[i].x-54+"px";//因为offsetLeft是只读属性所以要通过left属性设置。而且还要设置绝对定位。
						  divChild.style.top =pixArr[i].y-33+"px";
						  
						  /*divChild.style.left=pixArr[i].x-(parseInt(divChild.style.width)*54/120)+"px";//因为offsetLeft是只读属性所以要通过left属性设置。而且还要设置绝对定位。
						  divChild.style.top =pixArr[i].y-(parseInt(divChild.style.width)*33/120)+"px";*/
						 
						  divChild.style.position="absolute";
						  divChild.style.background="#fff";
						  divChild.style.zIndex=99999;
						  mapview.appendChild(divChild);
						  
						 // ch.value=(parseInt(divChild.offsetTop)-parseInt(father.offsetTop))+"--"+(parseInt(divChild.offsetLeft)-parseInt(father.offsetLeft));
						  var myChart = echarts.init(document.getElementById(idArr[i]));
						  
						  var str = JSON.stringify(d.chains[i]);
					    	var str1 = JSON.parse(str);
					    	for(var key in str1){
					    		if(key=="fid"){
					    			fidValue=str1[key];
					    			alert(fidValue);
					    		}
					    	}
					    	
						  //为饼图显示多条数据暂用html格式传值
						  //var contentHTML='{b}:{c}<table><tr><td>fid</td><td>'+d.chains[i].fid+'</td></tr><tr><td>name</td><td>'+d.chains[i].name+'</td></tr></table>'
					        // 指定图表的配置项和数据
					  option = {
							 
					    tooltip : {
					        trigger: 'item',
					        formatter: 'fid:'+fidValue+'</br>{b}:{c}(万元)'
					        //formatter: contentHTML
					    },
					    
					    series : [
					        {
					        	type: 'pie',
					            label:{
					            	normal:{
					            		show:false,
					            	}
					            },
					            color:['#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
					            radius : '80%',
					            center: ['50%', '50%'],
					            data:[				                
					                {value:335, name:d.chains[i].code},
					                {value:234, name:d.chains[i].code},
					                {value:310, name:d.chains[i].name},
					                {value:335, name:d.chains[i].fid},
					                {value:234, name:d.chains[i].code}				            
					                
					            ],
					            

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

					        // 使用刚指定的配置项和数据显示图表。
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