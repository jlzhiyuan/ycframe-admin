 
function inputScript(filePath) {
    var script = '<' + 'script type="text/javascript" src="' + filePath + '"' + '><' + '/script>';
    document.writeln(script);
}

inputScript("http://webapi.amap.com/maps?v=1.3&key=389880a06e3f893ea46036f030c94700");
inputScript("Frame/js/lib/jquery-1.11.1.js");
inputScript("Frame/js/lib/json2.js"); 
inputScript("Frame/js/lib/jquery.cookie.js");
inputScript("Frame/js/lib/jQuery.md5.js");
inputScript("Frame/js/lib/geox.min.js");
//inputScript("../src/OpenLayers.debug.js");
//inputScript("http://192.168.1.100:6060/fjts/fjts/getspgisjs?ldomnlkweioi32kioli3=default");
//http://183.250.187.97:6060/fjts/fjts/getspgisjs?ldomnlkweioi32kioli3=default

//function initMap(func){
//	jQuery.support.cors = true;
//	//return;
//	$.ajax({  
//	    type:'post',      
//	    url:'http://192.168.1.112:6060/fjts/fjts/getspgisjs?ldomnlkweioi32kioli3=default',    
//	    cache:false,  
//	    async : false,
//	    complete:function(XHR, TS)
//	    { 
//	   	  var script = '<script type="text/javascript">'+XHR.responseText+'<\/script>';
//	   	  document.writeln(script);
//	   	 func();
//	    }
//	 }); 
//};
//function initMap(func){
//	func();
//}

//inputScript("http://192.168.1.100:6060/fjts/fjts/getspgisjs?ldomnlkweioi32kioli3=default"); 
  //基础
//inputScript("../src/OpenLayers.debug.js");
//inputScript("../src/lemonade.min.js"); 
//inputScript("../src/zF/GeoX.js"); 
// //资源 
//inputScript("../src/Resource/Resource.js");
// //系统
//inputScript("../src/Base/Chars.js");
//inputScript("../src/Base/System.js");
// //图层  
//inputScript("../src/Layer/LayerType.js");
//inputScript("../src/Layer/HeatLayer.js");
//inputScript("../src/Layer/BaseLayer.js");
//inputScript("../src/Layer/ImageLayer.js");
//inputScript("../src/Layer/LayerSet.js"); 
//inputScript("../src/Layer/LayerSicInfo.js")
//inputScript("../src/Layer/Markers.js");
//inputScript("../src/Layer/Vector.js");
//inputScript("../src/Layer/WMS.js");
//inputScript("../src/Layer/WMTS.js");  
//inputScript("../src/Layer/HeatPoint.js");
// //地图
//inputScript("../src/Mapping/Map.js");  
//inputScript("../src/Mapping/Projection.js");
//inputScript("../src/Mapping/LonLat.js"); 
//inputScript("../src/Mapping/Pixel.js"); 
//inputScript("../src/Mapping/Marker.js"); 
//inputScript("../src/Mapping/Size.js");  
//inputScript("../src/Mapping/Action.js"); 
//inputScript("../src/Mapping/ScreenShot.js");  
//inputScript("../src/Mapping/StyleMap.js");
//inputScript("../src/Mapping/Popup.js"); 
//inputScript("../src/Mapping/Style.js"); 
// //几何对象 
//inputScript("../src/Geometry/Point.js"); 
//inputScript("../src/Geometry/Bounds.js"); 
//inputScript("../src/Geometry/LinearRing.js"); 
//inputScript("../src/Geometry/LineString.js");  
//inputScript("../src/Geometry/Polygon.js");
//inputScript("../src/Geometry/Curve.js");
//inputScript("../src/Geometry/RegularPolygon.js");  
// //数据
//inputScript("../src/Data/AccessResult.js"); 
//inputScript("../src/Data/Point.js"); 
//inputScript("../src/Data/MultiPolygon.js"); 
//inputScript("../src/Data/DataSourceType.js");   
//inputScript("../src/Data/DataSource.js");  
//inputScript("../src/Data/DataOperate.js");   
//inputScript("../src/Data/TransitionSpation.js"); 
// //数据-查询
//inputScript("../src/Data/query/AnalysisType.js"); 
//inputScript("../src/Data/query/QueryData.js"); 
//inputScript("../src/Data/query/AttributeParameter.js");
//inputScript("../src/Data/query/funs/BoundsParameter.js");
//inputScript("../src/Data/query/funs/PolygonParameter.js");
// //数据-编辑
//inputScript("../src/Data/edit/EditData.js");   
//inputScript("../src/Data/edit/EditType.js"); 
//inputScript("../src/Data/edit/EditParameter.js");  
//inputScript("../src/Data/edit/funs/InsertParameter.js");
//inputScript("../src/Data/edit/funs/DeleteParameter.js");
//inputScript("../src/Data/edit/funs/UpdateParameter.js");
//inputScript("../src/Data/edit/funs/GeoParameter.js");
// //要素
//inputScript("../src/Feature/Feature.js"); 
//inputScript("../src/Feature/Search.js"); 
//inputScript("../src/Feature/Spatial.js");
// //控件
//inputScript("../src/Control/Control.js");
//inputScript("../src/Control/ClickControl.js"); 
//inputScript("../src/Control/DragFeature.js"); 
//inputScript("../src/Control/LayerSwitcher.js"); 
//inputScript("../src/Control/Measure.js"); 
//inputScript("../src/Control/ModifyFeature.js"); 
//inputScript("../src/Control/MousePosition.js"); 
//inputScript("../src/Control/Navigation.js"); 
//inputScript("../src/Control/OverviewMap.js"); 
//inputScript("../src/Control/PanPanel.js"); 
//inputScript("../src/Control/PanZoom.js"); 
//inputScript("../src/Control/PanZoomBar.js"); 
//inputScript("../src/Control/ScaleLine.js"); 
//inputScript("../src/Control/SelectFeature.js"); 
//inputScript("../src/Control/WMSGetFeatureInfo.js"); 
//inputScript("../src/Control/Zoom.js"); 
//inputScript("../src/Control/ZoomIn.js"); 
//inputScript("../src/Control/ZoomOut.js"); 
// //验证
//inputScript("../src/Verify/PortalAdmin.js"); 
//inputScript("../src/Verify/VerifyKey.js"); 
////专题
//inputScript("../src/Theme/HeatChart.js");
//inputScript("../src/Theme/HeatShow.js");
//inputScript("../src/Theme/Icon.js"); 
//inputScript("../src/Theme/MigrateChart.js");
//inputScript("../src/Theme/MigrateChartByName.js");
//inputScript("../src/Theme/Style.js");
//inputScript("../src/Theme/ViewFilter.js"); 
