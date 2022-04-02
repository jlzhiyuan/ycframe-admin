var PC = PC || {};
var map,action,layerP,vectorlayer,bounds,markers,layer,latOut,lonOut;
var datas = [];
var datas1 = [];
var judgment =[];

PC.init = function() {
	
		function viewmap(e){
			if(e.state==1)
			{
				alert("验证用户标识异常");
				return;
			}
			//创建一个map地图对象
			map = new GeoX.Map("mapview");  
			var sicmapnames=map.getSicMapNames();
			map.showSicMapOfName("world");
			map.zoomTo(2);
			var location=new GeoX.Mapping.LonLat(109.10938202120289, 34.220870971679744);
            map.setCenter(location);
		
            //创建矢量图层vectorlayer
			vectorlayer = new GeoX.Layer.Vector("vector");
			//添加图层
			map.addLayer(vectorlayer);
			
			//创建矢量图层layer
			layer = new GeoX.Layer.Vector("layerVector");
			map.addLayer(layer);
    	
			//添加控件(选择要素控件) 
            var selectClick = new GeoX.Control.SelectFeature(layer,clickfeature);
            map.addControl(selectClick);
            selectClick.activate();
            
            //添加监听事件 
			map.addEventListener("zoomend",showMapPopup);
			
			
		}; 
		//验证用户标识，成功后回调
		GeoX.Verify.VerifyKey("2da73f2f-6485-479b-9e0c-da85b49d370c",viewmap); 
	 	
	};

	
	PC.addPoint=function(){
		//vectorlayer图层移除所有元素
		vectorlayer.removeAllFeatures();
		//layer图层移除所有元素
		layer.removeAllFeatures();
		var num = map.layerset.map.popups.length;
		if(map.layerset.map.popups.length){
			for(var i = num;i>0;i--){
				//销毁气泡 
				map.layerset.map.popups[(i-1)].destroy();
			}
		}
		
		
		var count =0;
		var num1 =0;
		datas = [];
		datas1 = [];
		var names=new Array();
		//var list = ["沈阳市","沈阳市沈河区","沈阳市沈河区点中街","沈阳市沈河区点中街171号","沈阳市沈河区点中街12001854号","沈阳市沈河区站点中街","沈阳市沈河区站点中街171号","沈阳市沈河区站点中街12001854号","北京市","北京市东城区","北京市居住区","北京市开放区","北京市缓冲区","北京市北京市区","北京市北京市区内廷东路1号"];
		var list = ["沈阳市","沈阳市沈河区","沈阳市沈河区点中街","沈阳市沈河区点中街171号","沈阳市沈河区点中街12001854号"];
		var point,feature,popupFeature,lonlat,lonIn,latIn,contentSize,contentHTML,pixel;
		var style = new GeoX.Mapping.Style();
		style.pointRadius = 10;
		style.fillOpacity=1;
        style.externalGraphic="../img/marker-gold.png";
			for(var i=0;i<list.length;i++){
				//调用高德接口查询经纬度 
			    AMap.service(["AMap.PlaceSearch"], function() {
			        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
			            pageSize: 1,
			            pageIndex: 1,
			        });
			       
			        //关键字查询
			        placeSearch.search(list[i], function(status, result) {	
			        		num1++;
			        		
			        		var name=result.poiList.pois[0].name;  
				        	//调用高德API查询实为模糊查询，为避免生成点坐标重复，先根据name字段判断后再获取经纬度
				        	if(names.toString().indexOf(name)==-1 || num1==list.length){
				        		if(num1==list.length){
					    	    	alert(num1+","+list.length);
					    	    	importPoi(datas1);
					    	    	return;
					    	    }
				        		names.push(name);
				        		var lonIn=result.poiList.pois[0].location.lng;
					        	var latIn=result.poiList.pois[0].location.lat;
					        	
					        	//火星-->84
					        	var GCJ = GPS.gcj_decrypt(latIn,lonIn);
							 	var str = JSON.stringify(GCJ);
						    	var str1 = JSON.parse(str);
						    	
							    for(var key in str1){
							    	if(key=='lat'){
							    		latOut=str1[key];
							    	}
									if(key=='lon'){
							    		lonOut=str1[key];
							    	}
							    }	

							    result.poiList.pois[0].location.lng = lonOut;
					    	    result.poiList.pois[0].location.lat = latOut;
					    	    
					    	    datas.push(result.poiList.pois[0]);
					    	    //判断循环执行次数，最后一次执行时返回datas数组
					    	    datas1.push(result.poiList.pois[0].name+","+result.poiList.pois[0].location.lng+","+result.poiList.pois[0].location.lat+","+result.poiList.pois[0].address);
				    	    
					    	    contentSize = null;
						    	//气泡中显示的内容
						    	contentHTML = '<html><head><meta charset="UTF-8">'+
						    	'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'+  
						    	'<title>演示</title></head>'+  
						    	'<body><span style="font-size:1px;">'+  
								'<div class="test newBG">'+  
								'<span class="bot2"></span>'+  
								'<span class="top2"></span>'+ 
								'<a href="#" onclick="closePopup(\''+count+'\');"><img src="../img/delete.png" style="position:absolute; left:75px; top:1px; " /></a>'+
								'<p class="orangeColor">名称:'+result.poiList.pois[0].name+'</p>'+ 
								'<p class="orangeColor">lon:'+result.poiList.pois[0].location.lng+'</p>'+
								'<p class="orangeColor">lat:'+result.poiList.pois[0].location.lat+'</p>'+
								'<p class="orangeColor">地址:'+result.poiList.pois[0].address+'</p>'+ 
								'</div></span>'+	
								'</body><html>';
								lonIn = result.poiList.pois[0].location.lng;
								latIn = result.poiList.pois[0].location.lat;
								//创建地图位置对象(经度,纬度)
								lonlat = new GeoX.Mapping.LonLat(lonIn,latIn);
								//点
								point = new GeoX.Geometry.Point(lonIn,latIn);
								//空间要素
								feature = new GeoX.Feature(point,null,style);
								//创建普通气泡
								feature.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
								feature.popup.popup.backgroundColor="none";
								//该属性为true时，系统自动匹配气泡大小
								feature.popup.popup.autoSize="true";
							    //添加气泡(仅为获取动态的气泡大小)
								map.layerset.map.addPopup(feature.popup.popup);
								pixel = map.getPixelFromLonLat(lonlat);
								pixel.x = pixel.x-feature.popup.popup.size.w/2+20;
								pixel.y = pixel.y-feature.popup.popup.size.h+5;
								lonlat = map.getLonLatFromPixel(pixel);
								//销毁该气泡
								map.layerset.map.popups[map.layerset.map.popups.length-1].destroy();
								//重复上一过程，添加偏移后的气泡
								feature.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
								feature.popup.popup.backgroundColor="none";
								feature.popup.popup.autoSize="true";
								//添加元素
								layer.addFeatures(feature);
								//添加气泡
								map.layerset.map.addPopup(feature.popup.popup);
						    	feature.popup.popup.hide();
						    	
						    	var split = feature.id.split("_")[feature.id.split("_").length-1];
								//添加气泡状态，并做判断
								if(judgment[split]=="" || judgment[split]==null){
									judgment[split]="false";
								}else if(judgment[split]=="true"){
									judgment[split]="false";
								}
								count++; 
				        	}				  							
			        });
			    }); 
			 }
		}

	//数据库存储方法
	function importPoi(datas3){
//		for(var i=0;i<datas3.length;i++){
//			alert(datas3[i]);
//		}
		var pcb = function(resultobj){
			
		};
		var pm = new Lemon.LemonModule("LoadInformToDb");
	    pm.addPar("datas",datas3);
	    pm.addPar("name","test_poi");
		var cai = new Lemon.CaiJSON(pcb);
		var sai = new Lemon.SaiTier(GeoX.SIC,cai,pm);
		sai.launch(Lemon.DoType.Post);
	}
	
	
	//关闭气泡
	function closePopup(popup_id){
		layer.layer.features[popup_id].popup.popup.hide(); 
		if(judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length-1]]=="true"){
			judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length-1]]="false";
		}
	};
	
	//选取要素的点击事件
	function clickfeature(e) {
		var split = e.id.split("_")[e.id.split("_").length-1];
		//添加气泡状态，并做判断
		if(judgment[split]="false"){
			judgment[split]="true";
		}
		if(judgment[split]){
			e.popup.popup.show();
		}
	}
	
	//气泡重绘
	function showMapPopup(){
		if(layer.layer.features.length!=0){
			var num = layer.layer.features.length;
			var features = layer.layer.features;
			if(map.layerset.map.popups.length){
				for(var i = num;i>0;i--){
					map.layerset.map.popups[(i-1)].destroy();
				}
			}
			var lonlat,contentSize,contentHTML,pixel;
			for(var i=0;i<num;i++){
				contentSize = null;
				contentHTML = '<html><head><meta charset="UTF-8">'+
		    	'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'+  
		    	'<title>演示</title></head>'+  
		    	'<body><span style="font-size:1px;">'+  
				'<div class="test newBG">'+  
				'<span class="bot2"></span>'+  
				'<span class="top2"></span>'+ 
				'<a href="#" onclick="closePopup(\''+i+'\');"><img src="../img/delete.png" style="position:absolute; left:75px; top:1px; " /></a>'+
				'<p class="orangeColor">名称:'+datas[i].name+'</p>'+ 
				'<p class="orangeColor">lon:'+datas[i].location.lng+'</p>'+
				'<p class="orangeColor">lat:'+datas[i].location.lat+'</p>'+
				'<p class="orangeColor">地址:'+datas[i].address+'</p>'+
				'</div></span>'+	
				'</body><html>';
	        	lonlat = new GeoX.Mapping.LonLat(features[i].geometry.x,features[i].geometry.y);
				features[i].popup = new GeoX.Mapping.Popup("123_"+i,lonlat,contentSize,null,contentHTML,false);
				features[i].popup.popup.backgroundColor="none";
				features[i].popup.popup.autoSize="true";
				map.layerset.map.addPopup(features[i].popup.popup);					
				pixel = map.getPixelFromLonLat(lonlat);
				pixel.x = pixel.x-features[i].popup.popup.size.w/2+20;
				pixel.y = pixel.y-features[i].popup.popup.size.h+5;
				lonlat = map.getLonLatFromPixel(pixel);
				map.layerset.map.popups[i].destroy();
				features[i].popup = new GeoX.Mapping.Popup("123_"+i,lonlat,contentSize,null,contentHTML,false);
				features[i].popup.popup.backgroundColor="none";
				features[i].popup.popup.autoSize="true";
				map.layerset.map.addPopup(features[i].popup.popup);					
	        	features[i].popup.popup.hide();
	        	
	        	if(judgment[features[i].id.split("_")[features[i].id.split("_").length-1]]=="true"){
	        		features[i].popup.popup.show();
				}else if(judgment[features[i].id.split("_")[features[i].id.split("_").length-1]]=="false"){
					features[i].popup.popup.hide();
				}
			}
		}
	}