/*
创建人：张继伟
日期：2017-11-2
*/



var dv = 'menu';
var sxlx = 'road';
var map;
var markers = null;
var marker = null;
var lonlat = null;
var lon = '125.379344';
var lat = '43.874040';
var markerLonLat = null;
var id = null;
var ds=null;
var vectorlayer=null;
var n=null;
var timerOnemap;//定时器
var layer=null;
var judgment = [];
var datas = [];
var yjzdGPS;
var yjzdData;
var yjwzData;
var hoverFeature;
var dlldys=['#C71585','#4EEE94','#0000CD'];
var dllaysss = 0;
var yjwzdata;
var yxjboxid=[];
var yjsjdata;

function jcjldw(data){
	cxclear();
	$(data).each( function (i, item) {   
 		if(item.startGPS!=null&&item.startGPS!=""&&item.startGPS!="null")
		{
			if(i==0&&item.startGPS.indexOf(',')>0){
				lon =item.startGPS.split(",")[0] ;
				lat =item.startGPS.split(",")[1] ;
				var location=new GeoX.Mapping.LonLat(lon, lat);
				//设置地图中心点(移动地图)
				map.setCenter(location,3);
			}
			gisdw(item.startGPS.split(",")[0],item.startGPS.split(",")[1],item.id,item.Disease);
		}
	})
}

function yjsjdwff(data) {

    markers.clearMarkers();
    data = data[0];
    if (data.startGPS != null && data.startGPS != "" && data.startGPS != "null") {
        if (i == 0 && data.startGPS.indexOf(',') > 0) {
            lon = data.startGPS.split(",")[0];
            lat = data.startGPS.split(",")[1];
            var location = new GeoX.Mapping.LonLat(lon, lat);
            //设置地图中心点(移动地图)
            map.setCenter(location, 3);
        }
	        gisdw(data.startGPS.split(",")[0], data.startGPS.split(",")[1], data.id, data.Descript);
    }
}

		//鼠标进入
		function hoverFeature1(e) {
		
			var split = e.id.split("_")[e.id.split("_").length - 1];
			//添加气泡状态，并做判断
			if (judgment[split] = "false") {
				judgment[split] = "true";
			}
			if (judgment[split]) {
				e.popup.popup.show();
			}	
		}
		
		//鼠标退出
		function hoverFeature2(e) {
			var popup_id = e.popup.popup.id.replace("123_","");
					layer.layer.features[popup_id].popup.popup.hide();
			
			if (judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length - 1]] ==
				"true") {
				judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length - 1]] =
					"false";
			}
		}
		
		
function yjzddwff(data) {

    vectorlayer.removeAllFeatures();
    //layer图层移除所有元素
    layer.removeAllFeatures();


    var num = map.layerset.map.popups.length;
    if (map.layerset.map.popups.length) {
        for (var i = num; i > 0; i--) {
            //销毁气泡 
            map.layerset.map.popups[(i - 1)].destroy();
        }
    }



    var k = map.getLayer("layerVector");
    if (k) {
        map.removeLayer(layer);
    }
    layer = new GeoX.Layer.Vector("layerVector");
    map.addLayer(layer);


    hoverFeature = new GeoX.Control.HoverFeature(layer, hoverFeature1, hoverFeature2);
    map.addControl(hoverFeature);
    hoverFeature.activate();


    //要素集合(根据feature.id结尾数字添加要素)
    datas = [];
    judgment = [];

    var i = 0;
    var style = new GeoX.Mapping.Style();
    style.pointRadius = 10;
    style.fillOpacity = 1;
    style.externalGraphic = "Frame/img/yjzd.gif";
    var point, feature, popupFeature, lonlat, lonIn, latIn, contentSize, contentHTML, pixel;
    datas = data;

    Gisrunserver.getyjzdwz("",
        function (Zdata) {
            yjwzData = Zdata;
            for (var i = 0; i < datas.length; i++) {
                contentSize = null;
                var wz = "";


                $(yjwzData).each(function (iz, itemz) {
                    if (itemz.id == datas[i].id) {
                        var wzmc = "";
                        var wzxh = "";
                        var wzsl = "";
                        if (itemz.wzmc != null && itemz.wzmc != "undefined") {
                            wzmc = itemz.wzmc;
                        }
                        if (itemz.wzxh != null && itemz.wzxh != "undefined") {
                            wzxh = itemz.wzxh;
                        }
                        if (itemz.wzsl != null && itemz.wzsl != "undefined") {
                            wzsl = itemz.wzsl;
                        }
                        if (wzmc != "" && wzxh != "") {


                            wz += '<p class="orangeColor">名称:' + wzmc + '</p>' +
                                '<p class="orangeColor">型号:' + wzxh + '</p>' +
                                '<p class="orangeColor">数量:' + wzsl + '</p>';
                        }
                    }
                })


                if (wz == "") {
                    wz = "本站无物资！";
                }


                //气泡中显示的内容
                contentHTML = '<html><head><meta charset="utf-8">' +
                    '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
                    '<title>演示</title></head>' +
                    '<body><span style="font-size:1px;">' +
                    '<div class="test newBG">' +
                    '<span class="bot2"></span>' +
                    '<span class="top2"></span>' +
                    '<a onclick="closePopup(\'' + i +
                    '\');"><img src="pages/GIS/delete.png" style="position:absolute; left:75px; top:1px; " /></a>' +
                    wz +
                    '</div></span>' +
                    '</body><html>';

                lonIn = datas[i].startGPS.split(",")[0];
                latIn = datas[i].startGPS.split(",")[1];
                //创建地图位置对象(经度,纬度)
                lonlat = new GeoX.Mapping.LonLat(lonIn, latIn);
                //点
                point = new GeoX.Geometry.Point(lonIn, latIn);
                //空间要素
                feature = new GeoX.Feature(point, null, style);
                
                //创建普通气泡
                feature.popup = new GeoX.Mapping.Popup("123_" + i, lonlat, contentSize, null, contentHTML, false);
                feature.popup.popup.backgroundColor = "none";
                //该属性为true时，系统自动匹配气泡大小
                feature.popup.popup.autoSize = "true";
                //添加气泡(仅为获取动态的气泡大小)
                map.layerset.map.addPopup(feature.popup.popup);
                pixel = map.getPixelFromLonLat(lonlat);
                pixel.x = pixel.x - feature.popup.popup.size.w / 2 + 20;
                pixel.y = pixel.y - feature.popup.popup.size.h + 5;
                lonlat = map.getLonLatFromPixel(pixel);
                //销毁该气泡
                map.layerset.map.popups[map.layerset.map.popups.length - 1].destroy();
                //重复上一过程，添加偏移后的气泡
                feature.popup = new GeoX.Mapping.Popup("123_" + i, lonlat, contentSize, null, contentHTML, false);
                feature.popup.popup.backgroundColor = "none";
                feature.popup.popup.autoSize = "true";
                //添加元素
                layer.addFeatures(feature);
                //添加气泡
                map.layerset.map.addPopup(feature.popup.popup);
                feature.popup.popup.hide();

                var split = feature.id.split("_")[feature.id.split("_").length - 1];
                //添加气泡状态，并做判断
                if (judgment[split] == "" || judgment[split] == null) {
                    judgment[split] = "false";
                } else if (judgment[split] == "true") {
                    judgment[split] = "false";
                }
            }
        })
}



function showMapPopup() {


    if (layer.layer.features.length != 0) {
        var num = layer.layer.features.length;
        var features = layer.layer.features;

        if (map.layerset.map.popups.length) {
            for (var i = num; i > 0; i--) {
                map.layerset.map.popups[(i - 1)].destroy();
            }
        }
        var lonlat, contentSize, contentHTML, pixel;
        var kl = 0;
        for (var i = 0; i < num; i++) {
            contentSize = null;
            var wz = "";
            $(yjwzData).each(function (iz, itemz) {
                if (itemz.id == datas[i].id) {
                    var wzmc = "";
                    var wzxh = "";
                    var wzsl = "";
                    if (itemz.wzmc != null && itemz.wzmc != "undefined") {
                        wzmc = itemz.wzmc;
                    }
                    if (itemz.wzxh != null && itemz.wzxh != "undefined") {
                        wzxh = itemz.wzxh;
                    }
                    if (itemz.wzsl != null && itemz.wzsl != "undefined") {
                        wzsl = itemz.wzsl;
                    }
                    if (wzmc != "" && wzxh != "") {


                        wz += '<p class="orangeColor">名称:' + wzmc + '</p>' +
                            '<p class="orangeColor">型号:' + wzxh + '</p>' +
                            '<p class="orangeColor">数量:' + wzsl + '</p>';
                    }
                }
            })


            if (wz == "") {
                wz = "本站无物资！";
            }

            contentHTML = '<html><head><meta charset="utf-8">' +
                '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">' +
                '<title>演示</title></head>' +
                '<body><span style="font-size:1px;">' +
                '<div class="test newBG">' +
                '<span class="bot2"></span>' +
                '<span class="top2"></span>' +
                '<a onclick="closePopup(\'' + i +
                '\');"><img src="pages/GIS/delete.png" style="position:absolute; left:75px; top:1px; " /></a>' +
                wz +
                '</div></span>' +
                '</body><html>';
            lonlat = new GeoX.Mapping.LonLat(features[i].geometry.x, features[i].geometry.y);
            features[i].popup = new GeoX.Mapping.Popup("123_" + i, lonlat, contentSize, null, contentHTML, false);
            features[i].popup.popup.backgroundColor = "none";
            features[i].popup.popup.autoSize = "true";
            map.layerset.map.addPopup(features[i].popup.popup);
            pixel = map.getPixelFromLonLat(lonlat);
            pixel.x = pixel.x - features[i].popup.popup.size.w / 2 + 20;
            pixel.y = pixel.y - features[i].popup.popup.size.h + 5;
            lonlat = map.getLonLatFromPixel(pixel);
            map.layerset.map.popups[i].destroy();
            features[i].popup = new GeoX.Mapping.Popup("123_" + i, lonlat, contentSize, null, contentHTML, false);
            features[i].popup.popup.backgroundColor = "none";
            features[i].popup.popup.autoSize = "true";
            map.layerset.map.addPopup(features[i].popup.popup);
            features[i].popup.popup.hide();

            if (judgment[features[i].id.split("_")[features[i].id.split("_").length - 1]] == "true") {
                features[i].popup.popup.show();
            } else if (judgment[features[i].id.split("_")[features[i].id.split("_").length - 1]] == "false") {
                features[i].popup.popup.hide();
            }
        }
    }
}


function jszkdw(data){
	vectorlayer.removeAllFeatures(GeoX.MeasureStyle);
	$(data).each( function (i, item) {   
 		if(item.startGPS!=null&&item.startGPS!=""&&item.startGPS!="null")
		{
			if(i==0&&item.startGPS.indexOf(',')>0){
				lon =item.startGPS.split(",")[0] ;
				lat =item.startGPS.split(",")[1] ;
				var location=new GeoX.Mapping.LonLat(lon, lat);
				//设置地图中心点(移动地图)
				map.setCenter(location,3);
				
			}
			roadjsselect(item.startGPS,item.jsjdys);
		}
	})
	start();
	
}

function gisdw(x,y,idcz,bjxx){
		 //普通气泡(是否显示关闭气泡按钮)
		 var popclass = GeoX.Mapping.Popup.Class(true);
		 if(id != idcz){
			 id = idcz;
		 }else{
		 	 id= null;	
		     id = idcz;
			 //alert("该ID已存在！请重新输入ID");
			 //return;
		 }
	
		 var lonIn =x;
		 var latIn=y;
		 //var lonIn = parseFloat($('#lon').val());   
		// var latIn = parseFloat($('#lat').val());
		 //创建地图位置对象(经度,纬度)
		 
		 markerLonLat = new GeoX.Mapping.LonLat(lonIn,latIn);
		//设置地图中心点(移动地图)
		map.setCenter(markerLonLat);
		 //尺寸
		 var size = new GeoX.Mapping.Size(21,25);
		 //像素点
		 var offset = new GeoX.Mapping.Pixel(-(size.w/2), -size.h);
		 //图标(图片路径,尺寸,偏移量)
		  var icon =null;
	
		if (sxlx == "wxxx") {
			icon = new GeoX.Theme.Icon('Frame/img/gis-dwwx.png', size, offset);
		} else if (sxlx == "yjzd") {
			icon = new GeoX.Theme.Icon('Frame/img/yjzd.gif', size, offset);
		} else if (sxlx == "yjsj") {
			icon = new GeoX.Theme.Icon('Frame/img/yjsj.gif', size, offset);
		} else{
			icon = new GeoX.Theme.Icon('Frame/img/gis-dw.png', size, offset);
		}
		 //普通要素(标注图层,经纬度)
		 var feature = new GeoX.FeatureOrdinary(markers, markerLonLat); 
		 //是否显示关闭气泡按钮
 		 feature.closeBox = true;
		 //气泡的类型
 	     feature.popupClass = popclass;
		 //内容溢出元素框时发生的事件(内容被修剪,浏览器会显示滚动条以便查看其余的内容;内容会被修剪,其余内容是不可见)
 	     feature.data.overflow = (true) ? "auto" : "hidden"; 
 	     //气泡的图标
 	     feature.data.icon = icon;
 	     //气泡的id
 	     feature.data.id = id;

 	     //创建标记对象
 	     marker = feature.createMarker();
 	     //标记元素名称
 	     marker.events.element.title =bjxx;
 	     //标记事件注册 (按下鼠标按键)
 	      if(sxlx=="wxxx"){ 	
		 marker.events.register("mousedown",feature,function(evt){
		
		
		 		$("#rtwxbtbox").show();
		  	 	var dataxx=bjxx.split(",");
				if(dataxx.length >0  ){
		 		if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#wxbmname").html(dataxx[0]) ;}else{$("#wxbmname").html("") ; }
				if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#wxfzr").html(dataxx[1]) ;}else{$("#wxfzr").html("0") ; }
				if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#wxksrq").html(dataxx[2]) ;}else{$("#wxksrq").html("0") ; }
				if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#wxwcrq").html(dataxx[3]) ;}else{$("#wxwcrq").html("0") ; }
				if(dataxx[4]!=null &&dataxx[4]!=""&&dataxx[4]!="null" ){$("#wxsfyj").html(dataxx[4]) ;}else{$("#wxsfyj").html("0") ; }
				}
		  

		 });
		 }	
		 
		 
			if(sxlx=="yjzd"){
				marker.events.register("mouseover",feature,function(evt){
					var id = "rt"+idcz;
					$("#"+id).show();
			    });
			    
			   marker.events.register("mouseout",feature,function(evt){
			    	var id = "rt"+idcz;
					$("#"+id).hide();
			    });
			}
			
			if(sxlx=="yjzd"){
				yxjboxid.push(idcz);
			}
			
		 marker.events.element.id=id;
		 //标注图层添加标记 
         markers.addMarker(marker);
	};
	
	
	
	controls.getMarkerById=function(){
		var allMarker=markers.layer.markers;
		var id = $('#getMarkerById').val();
		for(var i = 0;i < allMarker.length;i++){
			if(id == allMarker[i].events.element.id){
				allMarker[i].setUrl("../img/marker-green.png");
			}else{
				allMarker[i].setUrl("../img/marker-gold.png");
			}
		}
	};
	controls.getAllMaker=function(){
		var allMarker=markers.layer.markers;
		for(var i = 0;i < allMarker.length;i++){
			allMarker[i].setUrl("../img/marker-green.png");
		}
	};
	






		function closePopup(popup_id) {
			layer.layer.features[popup_id].popup.popup.hide();
			
			if (judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length - 1]] ==
				"true") {
				judgment[layer.layer.features[popup_id].id.split("_")[layer.layer.features[popup_id].id.split("_").length - 1]] =
					"false";
			}
		};





















	
	//修改样式 
		function modifyStyle(strokecolor,fillcolor,opacity){
		
			if($('#fill_color').val()==""&&$('#outline_color').val()==""&&$('#opacity').val()==""){
				return "修改样式不能同时为空！";
			}
			
			//var fillcolor = $('#fill_color').val();
			//var strokecolor = $('#outline_color').val();
			//var opacity = $('#opacity').val();
			style_green = { 
					strokeOpacity:1,
					strokeColor: strokecolor, 
					strokeWidth: 2,  
					strokeLinecap:"round",
					pointRadius: 4, 
					pointerEvents: "visiblePainted" ,
					fillOpacity:opacity,
					fillColor:fillcolor, 
					graphicOpacity:0.1
				}; 
					//配置样式 
				for(var i = 0; i<vectorlayer.layer.features.length; i++){
					
						vectorlayer.layer.features[i].style=style_green;
					
				}
				vectorlayer.layer.redraw();		

				//var cd=vectorlayer.layer.features.length-1;
				//if(vectorlayer.layer.features[cd]){
				//	vectorlayer.layer.features[cd].style=style_green;
				//} 
				//vectorlayer.layer.redraw();		
			
		};
		
		function modifyStylelast(strokecolor,fillcolor,opacity){
			if($('#fill_color').val()==""&&$('#outline_color').val()==""&&$('#opacity').val()==""){
				return "修改样式不能同时为空！";
			}
			style_green = { 
					strokeOpacity:1,
					strokeColor: strokecolor, 
					strokeWidth: 2,  
					strokeLinecap:"round",
					pointRadius: 4, 
					pointerEvents: "visiblePainted" ,
					fillOpacity:opacity,
					fillColor:fillcolor, 
					graphicOpacity:0.1
				}; 
					//配置样式 
				//for(var i = 0; i<vectorlayer.layer.features.length; i++){
				//		vectorlayer.layer.features[i].style=style_green;
				//}
				//vectorlayer.layer.redraw();		

			    var cd=vectorlayer.layer.features.length-1;
				if(vectorlayer.layer.features[cd]){
					vectorlayer.layer.features[cd].style=style_green;
				} 
				vectorlayer.layer.redraw();		
			
		};	
			
		//开始定时器	
		function start(){
			if(timerOnemap!=null)
			{
				clearInterval(timerOnemap);
			}
			timerOnemap = setInterval(function() {
				//起始样式
				if(!style_green){
					modifyStyle("#00ff00","#00ff00",1);
				}else if(style_green.fillColor == "#ff0000"){
					modifyStyle("#00ff00","#00ff00",1);
				}else{//改变样式 
					modifyStyle("#ff0000","#ff0000",1);
				}
		    }, 500);
			
		}
		//停止定时器 
		function stop(){
				clearInterval(timerOnemap);
				vectorlayer.removeAllFeatures(GeoX.MeasureStyle);
				for(var i = 0; i<vectorlayer.layer.features.length; i++){
				//if(vectorlayer.layer.features[i].id == $('#data_fid').val()){
					//恢复默认样式 (去除要素样式)
					vectorlayer.layer.features[i].style=null;					
					vectorlayer.layer.redraw();	
				//}
			}
		}
			
	
		function showmapname()
		{
			  map.showSicMapOfName("dccs");    //图层集名称-------------------
		}
		
		
		/**
		 * 线形定位
		 */
		function xxdw(xy) {
		
		    var points = [];
		    var point = null;
		    var data = xy.split(",");
			var location=new GeoX.Mapping.LonLat(data[0], data[1]);
			//设置地图中心点(移动地图)
			map.setCenter(location,3);
		    for (var i = 0; i < data.length;) {
		        point = new GeoX.Geometry.Point(data[i], data[i + 1]);
		        points.push(point);
		        i = i + 2;
		    }
		    //线串
		    var geoLine = new GeoX.Geometry.LineString(points);
		    //空间要素
		    var feature = new GeoX.Feature(geoLine);
		    vectorlayer.addFeatures(feature);
		
		}
		
		function roadselect(xy) {
		    var points = [];
		    var point = null;
		    var datafz = xy;
		    if (datafz != null && datafz != "" && datafz != "null") {
		    
		        xxdw(datafz);
		        if (sxlx == 'jsroad') {
		            modifyStyle("#00ff00", "#00ff00", 1);
		        } else if (sxlx == 'jsql') {
		
		            modifyStyle("#00ff00", "#00ff00", 1);
		        } else {
		            modifyStyle("#00ff00", "#00ff00", 1);
		        }
		    } else {
		        stop();
		    }
		}
		
		
		function roadjsselect(xy,jscolor)
		{
			//console.log(xy);
			//console.log(jscolor);
		 	var points = [];
		 	var point=null;
	     	var datafz = xy;
	     	var flag = 0;
	     	if(datafz!=null&&datafz!=""&&datafz!="null")
	     	{
	     		var data=datafz.split(",");
	     		for(var i = 0;i < data.length;){
				 point = new GeoX.Geometry.Point(data[i],data[i+1]);
				 points.push(point);
				 i=i+2;
				}
	     		//线串
				var geoLine = new GeoX.Geometry.LineString(points);
				//空间要素#00ff00
				var feature = new GeoX.Feature(geoLine); 
				vectorlayer.addFeatures(feature);
				modifyStylelast(jscolor,jscolor,1);	
	     	}
		}
		
		
		
		function dlldselect(xy, jscolor) {
			console.log(xy);
			console.log(jscolor);
		    var data = xy.split(",");
		    console.log(data[0]+data[1]);
		    var point = new GeoX.Geometry.Point(xy);
		    points.push(point);
		    var geoLine = new GeoX.Geometry.LineString(points);
		    var feature = new GeoX.Feature(geoLine);
		    vectorlayer.addFeatures(feature);
		    modifyStylelast(jscolor, jscolor, 1);
		    alert("aa");
		}
		
		
		/** 
		* 
		*	显示查询条件
		*/
		function showselect() {
			if ($("#downboxpanel1").is(":hidden")) {
				$("#downboxpanel1").show(); //如果元素为隐藏,则将它显现
				
				if($("#gisul li").length>0){
					$("#cxtjtp").hide();
				}
				$("#trdlmc").hide();
				$("#trldmc").hide();
				$("#trxjnd").hide();
				$("#trqlmc").hide();
				$("#trsdmc").hide();
				$("#trpddj").hide();
				$("#trpdsj").hide();
				$("#trjcrq").hide();
				$("#trbm").hide();
				$("#trxcr").hide();
				$("#trxcrq").hide();
				$("#trgydw").hide();
				$("#trxclx").hide();
				$("#trwxdw").hide();
				$("#trwxsslx").hide();
				$("#trwxzt").hide();
				$("#trxsfyj").hide();
				if (sxlx == 'road' || sxlx == 'ql'|| sxlx == 'sd'|| sxlx == 'ld'|| sxlx == 'dlld') {
					$("#trdlmc").show();
					$("#trxjnd").show();
					$("#trgydw").show();
				}
				if (sxlx == 'jcj' || sxlx == 'bf') {
					$("#trdlmc").show();
					$("#trgydw").show();
				}
				if (sxlx == 'jsroad') {
					$("#trdlmc").show();
					$("#trldmc").show();
					$("#trpddj").show();
					$("#trpdsj").show();
				}
				
				if (sxlx == 'jsql') {
					$("#trqlmc").show();
					$("#trpddj").show();
					$("#trpdsj").show();
					
				}
				if (sxlx == 'jssd') {
					$("#trsdmc").show();
					$("#trpddj").show();
					$("#trpdsj").show();
					
				}
				if (sxlx == 'rygj') {
					$("#trbm").show();
					$("#trxcr").show();
					$("#trxcrq").show();
					$("#trxclx").show();
				}
				if (sxlx == 'ssjc') {
					$("#trdlmc").show();
					$("#trgydw").show();
				}
				if (sxlx == 'wxxx') {
					$("#trwxdw").show();
					$("#trwxsslx").show();
					$("#trwxzt").show();
					$("#trxsfyj").show();
				}
				if (sxlx == 'jcroad') {
					$("#trdlmc").show();
					$("#trjcrq").show();
					$("#trgydw").show();
				}
				
				if ( sxlx == 'jcql' ) {
					$("#trqlmc").show();
					$("#trjcrq").show();
					$("#trgydw").show();
				}
				
				if ( sxlx == 'jcsd') {
					$("#trsdmc").show();
					$("#trjcrq").show();
					$("#trgydw").show();
				}
				
			} else {
				$("#downboxpanel1").hide(); //如果元素为显现,则将其隐藏
			}
		}
		
		
		
		　
	function addElementImg(m, n, dlcd, dldate, x, xx) {

	    var ul = document.getElementById("gisul");　　　　 //添加 li
	    　　　
	    var li = document.createElement("li");
	    li.setAttribute("id", "gisli" + m);
	    li.setAttribute("class", "poibox poibox-normal amap-marker");
	    li.setAttribute("data-xy", x);
	    li.setAttribute("data-xx", xx);

	    // li.setAttribute("onclick", "dw("+"gisli"+m+")");

	    //li.setAttribute("name", "G102 京抚线");
	    li.setAttribute("style", "min-height: 60px;max-height: 650px;");
	    var tp = document.createElement("span");
	    tp.setAttribute("class", "marker-" + m + " marker-normal");
	    tp.setAttribute("style", "color:#36C!important;");
	    tp.setAttribute("id", "tp" + m);


	    var h5 = document.createElement("h5");
	    h5.setAttribute("style", "font-size:14px;");
	    h5.setAttribute("class", "poi-title");

	    var h5span = document.createElement("span");
	    h5span.setAttribute("class", "poi-name");
	    h5span.setAttribute("style", "color:#36C!important;");
	    h5span.innerHTML = n;
	    h5span.setAttribute("title", n);

	    var divxx = document.createElement("div");
	    divxx.setAttribute("class", "poi-info");
	    var divp = document.createElement("p");
	    divp.setAttribute("style", "font-size:8px");
	    //divp.setAttribute("title", "起点桩号：1181.70 终点桩号：1214.7520 路线走向：东");
	    var dlxx = '';
	    if (sxlx == 'road' || sxlx == 'jsroad') {
	        dlxx = "道路长度:" + dlcd + "km 建造日期:" + dldate + "年...";
	    } else if (sxlx == 'ql') {
	        dlxx = "桥梁长度:" + dlcd + "km 建造日期:" + dldate + "年...";
	    } else if (sxlx == 'jcj') {
	        dlxx = "检查井类型:" + dlcd + " 段内桩号:" + dldate + "...";
	    }else if (sxlx == 'sd') {
	        dlxx = "隧道长度:" + dlcd + " 建造日期：" + dldate + "...";
	    }else if (sxlx == 'ld') {
	        dlxx = "路段长度:" + dlcd + " 设计年限：" + dldate + "年...";
	    }else if (sxlx == 'dlld') {
	    	li.setAttribute("data-id", xx);
	        dlxx = "路段长度:" + dlcd + " 设计年限：" + dldate + "年...";
	    }

	    divp.innerHTML = dlxx;　　　　 //添加 img
	    li.appendChild(tp); //添加图片
	    h5.appendChild(h5span); //添加文字
	    li.appendChild(h5);


	    divxx.appendChild(divp);
	    li.appendChild(divxx);
	    ul.appendChild(li);　　
	    

	}
	
	

//自适应IFRAME高度  
function setIframeHeight(iframe) {
if (iframe) {
var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
if (iframeWin.document.body) {
iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
}}}


//控制左上角菜单显示和隐藏
   function menucl ()
   {
   	   			
   if(dv=='menu')
	{
		document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="";
		 if($("#divmenu").is(":hidden")){
		 $("#divmenu").show();
		}else{
      		$("#divmenu").hide();   //如果元素为显现,则将其隐藏
		}
		
		

	}
	else if ((dv=='select'))
	{
		  if($("#amapbox").is(":hidden")){
		   $("#amapbox").show();    //如果元素为隐藏,则将它显现
			}else{
		   $("#amapbox").hide();     //如果元素为显现,则将其隐藏
		}
	}
  }




 
  //控制左上角菜单中返回按钮
 function menufh(){
 	dv='menu';
    $("#divmenu").show();
    $("#page").hide();
    $("#amapbox").hide();
    $("#rtbtbox").hide();
    $("#rtqlbtbox").hide();
    $("#rtjcjbtbox").hide();
    $("#rtbfbtbox").hide();
    $("#rtsdbtbox").hide();
    $("#downboxpanel1").hide();
    
    $("#btboxjcjl").hide();
    $("#btboxjcjlQL").hide();
    $("#btboxjcjlSD").hide();
    $("#btboxjszkql").hide();
    $("#btboxjszksd").hide();
    
    $("#btbox").hide();
    $("#btbox1").hide();
    stop();//停止闪烁
 	document.getElementById("search-panel").style.minHeight="330px";
 	document.getElementById("search-panel").style.height="";
    vectorlayer.removeAllFeatures(GeoX.MeasureStyle);
    var ul = document.getElementById("gisul");
	for(var i = 0, num = ul.childNodes.length; i < num; i++)
	{ul.removeChild(ul.childNodes[0]);} 
 }
   //控制正下方列表收起
 function sqlb(){
   	 $("#btboxxia").hide();
     $("#btboxshang").show();
     $("#btbox1").hide();
     
     $("#btboxjcjl").hide();
     $("#btboxjcjlQL").hide();
     $("#btboxjszkql").hide();
     $("#btboxjcjlSD").hide();
     $("#btboxjszksd").hide();
     $('#btbox').css({'bottom':'0px'});
 }
    //控制正下方列表展开
 function zklb(){
     $("#btboxxia").show();
     $("#btboxshang").hide();
     
     
     if(sxlx == "jcql"){
     
     	$("#btboxjcjlQL").show();
     }else if(sxlx == "jcroad"){
     
     	$("#btboxjcjl").show();
     }else if(sxlx == "jsql"){
     	
     	 $("#btboxjszkql").show();
     }else if(sxlx == "jsroad"){
     	
     	$("#btbox1").show();
     }else if(sxlx == "jcsd"){
     	
     	$("#btboxjcjlSD").show();
     }else if(sxlx == "jssd"){
     	
     	$("#btboxjszksd").show();
     }
     $('#btbox').css({'bottom':'250px'});
 }
    //左侧查询结果的点击方法
 function liclick(){      //只需要找到你点击的是哪个ul里面的就行
	vectorlayer.removeAllFeatures(GeoX.MeasureStyle);
     var datafz = $(this).data("xy");
     var dataxxxx = $(this).data("xx");
     var data=datafz.split(",");
   
   	if(sxlx =="ql" ){
   	    ddclear();
		gisdw(data[0],data[1],data[0],dataxxxx.split(",")[0]);
		var dataxx=dataxxxx.split(",");
		$("#rtqlbtbox").show();
		if(dataxx.length >0  ){
		if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#spqlname").html(dataxx[0]) ;}else{$("#spqlname").html("") ; }
		if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#spqllen").html(dataxx[1]) ;}else{$("#spqllen").html("0") ; }
		if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#spqlxjnx").html(dataxx[2]) ;}else{$("#spqlxjnx").html("0") ; }
		if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#spqlkjzh").html(dataxx[3]) ;}else{$("#spqlkjzh").html("0") ; }
		if(dataxx[4]!=null &&dataxx[4]!=""&&dataxx[4]!="null" ){$("#spqljglx").html(dataxx[4]) ;}else{$("#spqljglx").html("0") ; }
		if(dataxx[5]!=null &&dataxx[5]!=""&&dataxx[5]!="null" ){$("#spqlgydw").html(dataxx[5]) ;}else{$("#spqlgydw").html("") ; }
		if(dataxx[6]!=null &&dataxx[6]!=""&&dataxx[6]!="null" ){$("#spqlzt").html(dataxx[6]) ;}else{$("#spqlzt").html("") ; }
		}
     }
     else if(sxlx =="jcj" ){
   	   ddclear();
		gisdw(data[0],data[1],data[0],dataxxxx.split(",")[0]);
		var dataxx=dataxxxx.split(",");
		$("#rtjcjbtbox").show();
		if(dataxx.length >0){
		if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#spjcjname").html(dataxx[0]) ;}else{$("#spjcjname").html("") ; }
		if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#spjcjlx").html(dataxx[1]) ;}else{$("#spjcjlx").html("0") ; }
		if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#spjcjdnzh").html(dataxx[2]) ;}else{$("#spjcjdnzh").html("0") ; }
		if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#spjcjwzms").html(daHtaxx[3]) ;}else{$("#spjcjwzms").html("0") ; }
		if(dataxx[4]!=null &&dataxx[4]!=""&&dataxx[4]!="null" ){$("#spjcjlszk").html(dataxx[4]) ;}else{$("#spjcjlszk").html("0") ; }
		if(dataxx[5]!=null &&dataxx[5]!=""&&dataxx[5]!="null" ){$("#spjngdxs").html(dataxx[5]) ;}else{$("#spjngdxs").html("") ; }
		if(dataxx[6]!=null &&dataxx[6]!=""&&dataxx[6]!="null" ){$("#spjcjjsxs").html(dataxx[6]) ;}else{$("#spjcjjsxs").html("") ; }
		}
     }
    else if(sxlx =="bf" ){
   	    ddclear();
		gisdw(data[0],data[1],data[0],dataxxxx.split(",")[0]);
		var dataxx=dataxxxx.split(",");
		$("#rtbfbtbox").show();
		if(dataxx.length >0){
		if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#spbfname").html(dataxx[0]) ;}else{$("#spbfname").html("") ; }
		if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#spbflx").html(dataxx[1]) ;}else{$("#spbflx").html("0") ; }
		if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#spbfdnzh").html(dataxx[2]) ;}else{$("#spbfdnzh").html("0") ; }
		if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#spbfwzms").html(dataxx[3]) ;}else{$("#spbfwzms").html("0") ; }
		if(dataxx[4]!=null &&dataxx[4]!=""&&dataxx[4]!="null" ){$("#spbfjcsw").html(dataxx[4]) ;}else{$("#spbfjcsw").html("0") ; }
		}
     }  
     else {
     		if(sxlx != "dlld"){
     		
     			xxdw(datafz);
     		}
			
			if(sxlx =="dlld" ){
				var id = $(this).data("id");
	            Gisrunserver.getdlld(id,
	                function (data) {
	                		
	                	var xy = [];
	                	var flag = 0;
						$(data).each(function (i, item) {
							xy.push(item.GPS);
						})
						for(var i=0; i<xy.length; i++){
							if(typeof(dlldys[flag])!="undefined"){
							
								roadjsselect(xy[i],dlldys[flag]);
							}else{
								flag = 0;
								roadjsselect(xy[i],dlldys[flag]);
							}
							flag++;
						}
						
	                }
	            );
			}
			if(sxlx =="road" ){
			 	var dataxx=dataxxxx.split(",");
				start();	
				$("#rtbtbox").show();
				if(dataxx.length >0  ){	
				if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#sproadname").html(dataxx[0]) ;}else{$("#sproadname").html("") ; }
				if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#sproadlen").html(dataxx[1]) ;}else{$("#sproadlen").html("0") ; }
				if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#sproadxjnx").html(dataxx[2]) ;}else{$("#sproadxjnx").html("0") ; }
				if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#sproadcdsl").html(dataxx[3]) ;}else{$("#sproadcdsl").html("0") ; }
				if(dataxx[4]!=null &&dataxx[4]!=""&&dataxx[4]!="null" ){$("#sproadlmlx").html(dataxx[4]) ;}else{$("#sproadlmlx").html("0") ; }
				if(dataxx[5]!=null &&dataxx[5]!=""&&dataxx[5]!="null" ){$("#sproadqdmc").html(dataxx[5]) ;}else{$("#sproadqdmc").html("") ; }
				if(dataxx[6]!=null &&dataxx[6]!=""&&dataxx[6]!="null" ){$("#sproadzdmc").html(dataxx[6]) ;}else{$("#sproadzdmc").html("") ; }
				if(dataxx[7]!=null &&dataxx[7]!=""&&dataxx[7]!="null" ){$("#sproadzt").html(dataxx[7]) ;}else{$("#sproadzt").html("") ; }
				}
			}
			
			if(sxlx =="sd" ){
			 	var dataxx=dataxxxx.split(",");
				start();	
				$("#rtsdbtbox").show();
				if(dataxx.length >0  ){
				if(dataxx[0]!=null &&dataxx[0]!=""&&dataxx[0]!="null" ){$("#sdname").html(dataxx[0]) ;}else{$("#sdname").html("") ; }
				if(dataxx[1]!=null &&dataxx[1]!=""&&dataxx[1]!="null" ){$("#sdcd").html(dataxx[1]) ;}else{$("#sdcd").html("0") ; }
				if(dataxx[2]!=null &&dataxx[2]!=""&&dataxx[2]!="null" ){$("#sdkd").html(dataxx[2]) ;}else{$("#sdkd").html("0") ; }
				if(dataxx[3]!=null &&dataxx[3]!=""&&dataxx[3]!="null" ){$("#jsnx").html(dataxx[3]) ;}else{$("#sproadcdsl").html("") ; }
	
				}
			}
			if(sxlx =="ld" ){
				start();
			}
		 }
	}
	
	//控制左上角轨迹查询条件
function slgjcx(){
   $("#divmenu").hide();
   dv='select';
	document.getElementById("search-panel").style.minHeight="";
   document.getElementById("search-panel").style.height="220px";
   $("#amapbox").show();
   sxlx='rygj';
 	$(':radio[name="cxlx"]').eq(0).attr("checked",true);
 	showselect();
 }
	
	
	//控制左上角维修信息查询条件
function slwxxx(){
	$('#downspan').attr('disabled',"true");
   $("#divmenu").hide();
   dv='select';
   $("#amapbox").show();
   sxlx='wxxx';
   			  	document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="225px";
 	showselect();
 }

 //控制左上角设施监测条件
function slssjc (){
	
   $("#divmenu").hide();
   dv='select';
   $("#amapbox").show();
   sxlx='ssjc';
   			  	document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="155px";
   showselect();
 } 
 
 
 		
 
		 //点击菜单中道路按钮
 		function roadclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='road';
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			  $("#downboxpanel1").hide(); 
			 }
			 
 		function dlldclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='dlld';
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			  $("#downboxpanel1").hide(); 
			 }
			
			 
	    //点击菜单中基本信息桥梁按钮
 		function qlclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='ql';
			var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			 var vdata=Ggffrunserver.getqlname(data);//java代码   到后台代码中查看
			 return vdata;}});	
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			 $("#downboxpanel1").hide(); 
			 }
 	    //点击菜单中基本信息路段按钮
 		function ldclick() {
 			$("#resultgs").html("");
			dv='select';
			sxlx='ld';
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			 $("#downboxpanel1").hide(); 
		 }
 	    //点击菜单中基本信息桥梁按钮
 		function sdclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='sd';
    			var A_TunnelNamez = new UI.Input.SuperSelect("#roadname",{  
				getdata:function(data){
					var vdata=Sdjcjhglrunserver.getSdmc(data);//java代码   到后台代码中查看
					return vdata;
				}
  			});	
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			 $("#downboxpanel1").hide(); 
			 }	 
		  //点击菜单中基本信息检查井按钮
 		function jcjclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='jcj';	
			 var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			 var vdata=Ggffrunserver.getroadname(data);//java代码   到后台代码中查看
			 return vdata;}});	
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect(); 
			 $("#downboxpanel1").hide(); 
			 
			 }		 
		//点击菜单中基本信息泵房按钮
 		function bfclick() {
 			if(!$("#gisul li").length>0){
 				$("#cxtjtp").show();
			}
 			$("#resultgs").html("");
			dv='select';
			sxlx='bf';
			 var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			 var vdata=Ggffrunserver.getroadname(data);//java代码   到后台代码中查看
			 return vdata;}});		
			 $("#amapbox").show();
			 $("#divmenu").hide(); 
			 showselect();
			 $("#downboxpanel1").hide(); 
			 }	
		 //点击菜单中技术道路按钮
 		function jsroadclick(){
			  	dv='select';
			  	sxlx='jsroad';
			  	document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="228px";
			  	$("#amapbox").show();
			    $("#divmenu").hide(); 
			    showselect(); }
		//点击菜单中技术桥梁按钮    
  		function jsqlclick(){
			  	dv='select';
			  	sxlx='jsql';
			  	 document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="190px";
			  	$("#amapbox").show();
			    $("#divmenu").hide(); 
			    showselect(); 
			    }
			    
   		function jssdclick(){
			  	dv='select';
			  	sxlx='jssd';
			  	 document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="185px";
			  	$("#amapbox").show();
			    $("#divmenu").hide(); 
			    showselect(); 
			    }
		//点击菜单中检查道路按钮    
		function  jcroadclick(){
			  	dv='select';
			  	sxlx='jcroad';
			 var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			 var vdata=Ggffrunserver.getroadname(data);//java代码   到后台代码中查看
			 return vdata;}});	
 			    document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="190px";
			  	$("#amapbox").show();
			    $("#divmenu").hide();
			    showselect();}	
		//点击菜单中检查桥梁按钮    
		function  jcqlclick(){
			  	dv='select';
			  	sxlx='jcql';
			  var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			   var vdata=Ggffrunserver.getqlname(data);//java代码   到后台代码中查看
			    return vdata;}});	
   			    document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="190px";
			  	$("#amapbox").show();
			    $("#divmenu").hide(); 
			    showselect();}	 
			    
   		function  jcsdclick(){
			  	dv='select';
			  	sxlx='jcsd';
			  var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			   var vdata=Ggffrunserver.getqlname(data);//java代码   到后台代码中查看
			    return vdata;}});	
   			    document.getElementById("search-panel").style.minHeight="";
			    document.getElementById("search-panel").style.height="190px";
			  	$("#amapbox").show();
			    $("#divmenu").hide(); 
			    showselect();}	
			      	
		//查询按钮清空原始数据	    
		function cxclear() {
		
			ddclear();
            
            
		    var k = map.getLayer("layerVector");
		    
		    if (k != "") {
		        map.removeLayer(layer);
		    }

		    vectorlayer.removeAllFeatures(GeoX.MeasureStyle);
		    //vectorlayer图层移除所有元素
		    vectorlayer.removeAllFeatures();
		    //layer图层移除所有元素
		  	 layer.removeAllFeatures();

		    var num = map.layerset.map.popups.length;
		    if (map.layerset.map.popups.length) {
		        for (var i = num; i > 0; i--) {
		            //销毁气泡 
		            map.layerset.map.popups[(i - 1)].destroy();
		        }
		    }

		    var ul = document.getElementById("gisul");
		    for (var i = 0, num = ul.childNodes.length; i < num; i++) {
		        ul.removeChild(ul.childNodes[0]);
		    }
		    $("#rtwxbtbox").hide();
		}
		function ddclear(){
					var allMarker = markers.layer.markers;
			
			
			
			for (var i = 0; i < allMarker.length; i++) {
				var flag = true;
				for (var j = 0; j < yxjboxid.length; j++) {
                	if(allMarker[i].events.element.id == yxjboxid[j]){
                		flag = false;
                	}
            	}
            	if(flag){
            		markers.removeMarker(allMarker[i]);
            	}
            }
		
		}
  				
  		//加载控件	
  		function ymload(){
  		
  			if(sxlx =="road"){
   			var roadname = new  UI.Input.SuperSelect("#roadname",{  
   			    allowClear: true, 
				getdata:function(data){
					var vdata = Ggffrunserver.getroadname(data);
					return vdata;
				}
 			});	
 			
 	      var qlname = new  UI.Input.SuperSelect("#qlname",{  
			getdata:function(data){
				var vdata =  GGQlxxrunserver.getBridgeName(data)//java代码   到后台代码中查看
				return vdata;  
				}
  			});
  			var roadSectionName = new  UI.Input.SuperSelect("#jszkld",{  
				relationObject:roadname, 
				getdata:function(data){
					var vdata=Ggffrunserver.getRoadSection(data)
					return vdata;
				}
  			}); 
			 }else if(sxlx =="ql"){
			 	//绑定桥梁下拉
			 var roadname = new  UI.Input.SuperSelect("#roadname",{getdata:function(data){
			 var vdata=Ggffrunserver.getqlname(data);//java代码   到后台代码中查看
			 return vdata;}});	
			 }
			 
   			var A_TunnelNamez = new UI.Input.SuperSelect("#sdnamez",{  
				getdata:function(data){
					var vdata=Sdjcjhglrunserver.getSdmc(data);//java代码   到后台代码中查看
					return vdata;
				}
  			});	
		 //管养单位下拉
			 var zzjgdata=Ggffrunserver.getzzjg(JSON.stringify("1303"));
		  	 treeselect = new UI.Input.TreeSelect("#gydwname",{data:zzjgdata});
		  	 
				  	 var zzjgdata = Ggffrunserver.getzzjgqb(JSON.stringify("1303"));
	  	 treeselect = new UI.Input.TreeSelect("#bm", {
	  	 	data: zzjgdata
	  	 });
	  	 
	   
	  	 var xcgjxcr = new UI.Input.SuperSelect("#xcr", {
	  	 	getdata: function (data) {
	  	 			var bm111 = $('#bm').val();
	  	 		var vdata = Gisrunserver.getscgjry(data, bm111);
	  	 		return vdata;
	  	 	}
	  	 });		  	 
		  	//var zzjgdata=Ggffrunserver.getzzjg(JSON.stringify("1303"));
  			//treeselect = new UI.Input.TreeSelect("#manageDeptID",{data:zzjgdata});
  			//维修单位
  			treeselect = new UI.Input.TreeSelect("#wxdwname",{data:zzjgdata});
  			
  			var wxsslx  = new UI.Input.SuperSelect("#wxsslx",{ 
				getdata:function(data){var vdata = Rcjcxmbrunserver.getCheckType(data);
					return vdata;}});
			var wxrwdzt = new UI.Input.SuperSelect("#wxrwdzt",{  getdata:function(data){
					var vdata = Wxrwglrunserver.getrwdzt(data);return vdata;}});		
					
		  	 
		 //评定等级下拉
			 var pddjname = new  UI.Input.SuperSelect("#pddjname",{getdata:function(data){
			 var vdata=Gisrunserver.getjszkpddj(data);//java代码   到后台代码中查看
			 return vdata;}});	
		//绑定人员定位巡查时间
		 	var xjndqDate = new UI.Input.DateSelect('#xjndqDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  建造日期
		 	var xjndzDate = new UI.Input.DateSelect('#xjndzDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  建造日期
		 	var pdsjqDate = new UI.Input.DateSelect('#pdsjqDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  评定时间
		 	var pdsjzDate = new UI.Input.DateSelect('#pdsjzDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  评定时间
		 	var jcrqzDate = new UI.Input.DateSelect('#jcrqzDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  检查日期
		 	var jcrqqDate = new UI.Input.DateSelect('#jcrqqDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  检查日期
		    var xcrqqDate = new UI.Input.DateSelect('#xcrqqDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  巡查日期
		 	var xcrqzDate = new UI.Input.DateSelect('#xcrqzDate',{format:'YYYY-MM-DD'});    //构建时间选择控件  巡查日期
  		}
  		
  		
  		
  	
  	
  	
  			
  		
		    