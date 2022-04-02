var system = system || {};
var map,action,layerP,vectorlayer,bounds,markers,layer,latOut,lonOut,contentSize,contentHTML;
//要素集合(根据feature.id结尾数字添加要素)
var popupobjs = [];
//要素数字集合(对应popupobjs中的要素保存feature.id末尾数字即popupobjs中的要素的数组下标)
var popupobjsnum = [];
//判断集合(保存要素的状态，开启时为true，关闭时为false)
var judgment =[];
//保存带有气泡的要素的id末尾数字(在生成气泡时返回对应feature.id末尾数值所对应的数组下标作为closePopup(popup_id)方法中气泡的id值)
var popupnum = [];
system.init = function() {
	
		function viewmap(e){
			if(e.state==1)
			{
				alert("验证用户标识异常");
				return;
			}
			//创建一个map地图对象
			map = new GeoX.Map("mapview");  
			//设置地图范围
			//var bounds=new GeoX.Geometry.Bounds(125.17265536606311,43.81008883204282,125.41941643473211,43.96259948708587);
			//根据范围显示地图
			//map.showOfBounds(bounds);
			var sicmapnames=map.getSicMapNames();
			map.showSicMapOfName("world");
			map.zoomTo(5);
			var location=new GeoX.Mapping.LonLat(123.38333, 41.80000);
            map.setCenter(location);
		
			//添加图层 
    		//map.addLayer(layerP);
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
            map.addEventListener("zoomend", showMapPopup);
    		//建立动作
			action = map.createAction(); 		
			
			
		}; 
		//验证用户标识，成功后回调
		GeoX.Verify.VerifyKey("2da73f2f-6485-479b-9e0c-da85b49d370c",viewmap); 
	 	
	};
	
	var poiList; 
	system.addPoint=function(){
		//count=-1;
		//vectorlayer图层移除所有元素
        vectorlayer.removeAllFeatures();
        //layer图层移除所有元素
        layer.removeAllFeatures();
        //销毁所有气泡
        var num = map.layerset.map.popups.length;
        if (map.layerset.map.popups.length) {
            for (var i = num; i > 0; i--) {
                map.layerset.map.popups[(i - 1)].destroy();
            }
        }
        
        //包围盒查询
		action.createBox(vectorlayer,function(e){
		//每次查询时，以下数组均初始化
		popupobjs = [];
		popupobjsnum = [];
		popupnum = [];
		judgment = [];
		
		//回调函数,获取兴趣点对象信息
		var callback=function(resultobj){
    		if(resultobj==null || resultobj[0] == null){
    			return;
    		}
    		//兴趣点对象集合
    		poiList = resultobj[0].data;
    		for(var i=0;i<poiList.length;i++){
    			var lonIn=poiList[i].lon;
    			var latIn=poiList[i].lat;
    			
    			//火星-->84-->json串
	        	var GCJ = GPS.gcj_decrypt(latIn,lonIn);
			 	var str = JSON.stringify(GCJ);
		    	var str1 = JSON.parse(str);
		    	
		    	//key,value取值
		    	for(var key in str1){
			    	if(key=='lat'){
			    		latOut=str1[key];
			    	}
					if(key=='lon'){
			    		lonOut=str1[key];
			    	}
			    }
		    	
		    	
		    	//设置范围(根据范围筛选对象)
				bounds=new GeoX.Geometry.Bounds(e.left,e.bottom,e.right,e.top);
				if((e.left<=lonOut) && (lonOut<=e.right) && (e.bottom<=latOut) && (latOut<=e.top)){
					    
						var style = new GeoX.Mapping.Style();
						style.pointRadius = 10;
						style.fillOpacity=1;
			            style.externalGraphic="../img/marker-gold.png";
			            var point,feature;
						//点
						point = new GeoX.Geometry.Point(lonOut,latOut);
						//空间要素
						feature = new GeoX.Feature(point,null,style);
						//添加元素
						layer.addFeatures(feature);
						//分割字符串获取末尾数字(feature.id)
						var split = feature.id.split("_")[feature.id.split("_").length-1];
						//添加要素
						popupobjs[split]=poiList[i];
						//添加要素数字信息
						popupobjsnum.push(split);
						
				}
		    	
    		}
    		
    	}
		
    	//var svr =new Lemon.LemonServer("192.168.1.117","6060","default");	
    	var param=new Lemon.LemonModule("getPoiAddress");
    	param.addPar("name", $('#information').val());
    	param.addPar("Ip", GeoX.ServerIp);
		var cai = new Lemon.CaiJSON(callback);
		var sai = new Lemon.SaiTier(GeoX.SIC,cai,param);
		sai.launch(Lemon.DoType.Get);
		
		});
	}	
		
	//为count获取popupnum数组下标，并作为气泡id
	function getIndex(num){
		var number=num;
		var j=0;
		for(var i=0;i<popupobjsnum.length;i++){
			if(popupobjsnum[i]==number){
			   return i;
			}
		}
	};  
	
	//关闭气泡
	function closePopup(popup_id){
		layer.layer.features[popup_id].popup.popup.hide(); 
		if(judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length-1]]=="true"){
			judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length-1]]="false";
		}
	};
		
	//选取要素的点击事件
	function clickfeature(e) {
		//若该要素气泡已存在，不再添加气泡，直接调用e.popup.popup.show()方法
		function contains(arr, int) {  
		    var i = arr.length;  
		    while (i--) {  
		        if (arr[i] == int) {  
		            return false;  
		        }  
		    }  
		    return true;  
		}  
		//防止要素气泡的反复添加
		if(contains(popupnum, e.id.split("_")[e.id.split("_").length-1])){
			popupnum.push(e.id.split("_")[e.id.split("_").length-1]);
			//map.layerset.map.popups[(i-1)].destroy();
			var count = getIndex(e.id.split("_")[e.id.split("_").length-1]);
			var newfeaturename = popupobjs[e.id.split("_")[e.id.split("_").length-1]].name;
			var newfeatureaddress = popupobjs[e.id.split("_")[e.id.split("_").length-1]].addressName;
//			var lon = popupobjs[e.id.split("_")[e.id.split("_").length-1]].lon;
//			var lat = popupobjs[e.id.split("_")[e.id.split("_").length-1]].lat;
			var lon = e.geometry.x;
			var lat = e.geometry.y;
			//创建地图位置对象(经度,纬度)
			lonlat = new GeoX.Mapping.LonLat(lon,lat);
			contentSize = null;
			contentHTML = '<html><head><meta charset="UTF-8">'+
	    	'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'+  
	    	'<title>演示</title></head>'+  
	    	'<body><span style="font-size:1px;">'+  
			'<div class="test newBG">'+  
			'<span class="bot2"></span>'+  
			'<span class="top2"></span>'+ 
			'<a href="#" onclick="closePopup(\''+count+'\');"><img src="../img/delete.png" style="position:absolute; left:75px; top:1px; " /></a>'+
			'<p class="orangeColor">名称:'+newfeaturename+'</p>'+ 
			'<p class="orangeColor">地址:'+newfeatureaddress+'</p>'+
			'</div></span>'+	
			'</body><html>';

			e.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
			e.popup.popup.backgroundColor="none";
			//该属性为true时，系统自动匹配气泡大小
			e.popup.popup.autoSize="true";
		    //添加气泡(仅为获取动态的气泡大小)
			map.layerset.map.addPopup(e.popup.popup);
			pixel = map.getPixelFromLonLat(lonlat);
			pixel.x = pixel.x-e.popup.popup.size.w/2+20;
			pixel.y = pixel.y-e.popup.popup.size.h+5;
			lonlat = map.getLonLatFromPixel(pixel);
			//销毁该气泡
			map.layerset.map.popups[map.layerset.map.popups.length-1].destroy();
			//重复上一过程，添加偏移后的气泡
			e.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
			e.popup.popup.backgroundColor="none";
			e.popup.popup.autoSize="true";
			map.layerset.map.addPopup(e.popup.popup);
		}
		else{
			e.popup.popup.show();
		}
		
		var split = e.id.split("_")[e.id.split("_").length-1];
		//添加气泡状态，并做判断
		if(judgment[split]=="" || judgment[split]==null){
			judgment[split]="true";
		}else if(judgment[split]=="false"){
			judgment[split]="true";
		}
		
    }
	
	//气泡重绘
	function showMapPopup(){
		
		if(layer.layer.features.length!=0){
			var num=[];
			var features = layer.layer.features;
			if(map.layerset.map.popups.length){
				//获取气泡状态为true的对应数组下标
				for(var k=0;k<judgment.length;k++){
					if(judgment[k]=="true"){
						num.push(k);
					}
				}
				for(var l=map.layerset.map.popups.length;l>0;l--){
					map.layerset.map.popups[l-1].destroy();
				}
				popupnum = [];
			}
				
			var lonlat,contentSize,contentHTML,pixel;
			for(var i=0;i<num.length;i++){
				function containss(arr, int) {  
				    var j = arr.length;  
				    while (j--) {  
				        if (arr[j].id.split("_")[arr[j].id.split("_").length-1] == int) {
				            return j;  
				        }  
				    }  
				}
				
			    var newfeature = features[containss(features, num[i])];
			    var count = getIndex(newfeature.id.split("_")[newfeature.id.split("_").length-1]);
				var newfeaturename = popupobjs[newfeature.id.split("_")[newfeature.id.split("_").length-1]].name;
				var newfeatureaddress = popupobjs[newfeature.id.split("_")[newfeature.id.split("_").length-1]].addressName;
				
				contentSize = null;
				contentHTML = '<html><head><meta charset="UTF-8">'+
	        	'<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'+  
	        	'<title>演示</title></head>'+  
	        	'<body><span style="font-size:3px;">'+  
				'<div id="div1" class="test newBG">'+  
				'<span class="bot2"></span>'+  
				'<span class="top2"></span>'+ 
				'<a href="#" onclick="closePopup(\''+count+'\');"><img src="../img/delete.png" style="position:absolute; left:75px; top:1px; " /></a>'+
				'<p class="orangeColor">名称:'+newfeaturename+'</p>'+ 
				'<p class="orangeColor">地址:'+newfeatureaddress+'</p>'+
				'</div></span>'+	
				'</body><html>'; 
				
	        	lonlat = new GeoX.Mapping.LonLat(newfeature.geometry.x,newfeature.geometry.y);
	        	newfeature.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
	        	newfeature.popup.popup.backgroundColor="none";
	        	newfeature.popup.popup.autoSize="true";
				map.layerset.map.addPopup(newfeature.popup.popup);
				
				pixel = map.getPixelFromLonLat(lonlat);
				pixel.x = pixel.x-newfeature.popup.popup.size.w/2+20;
				pixel.y = pixel.y-newfeature.popup.popup.size.h+5;
				lonlat = map.getLonLatFromPixel(pixel);
				map.layerset.map.popups[i].destroy();
				newfeature.popup = new GeoX.Mapping.Popup("123_"+count,lonlat,contentSize,null,contentHTML,false);
				newfeature.popup.popup.backgroundColor="none";
				newfeature.popup.popup.autoSize="true";
				map.layerset.map.addPopup(newfeature.popup.popup);
				
				newfeature.popup.popup.hide();
				if(judgment[newfeature.id.split("_")[newfeature.id.split("_").length-1]]=="true"){
					newfeature.popup.popup.show();
				}else if(judgment[newfeature.id.split("_")[newfeature.id.split("_").length-1]]=="false"){
					newfeature.popup.popup.hide();
				}
				
			}
		}
			
	}
	
	