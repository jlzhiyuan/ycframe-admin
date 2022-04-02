var PoiTest = PoiTest || {};

PoiTest.addPoint=function(){
	//存储poi借口返回对象信息
	var datas = [];
	var pageNum = 0;
	var poiNum = 0;
	var allNum = 0;
	var string = "";
	var datasNew = [];
	
	var key = $('#key').val();
	var city = $('#city').val();

	AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            city: city //城市
        });
        //关键字查询
        placeSearch.search(key, function(status, result) {
          alert(result.poiList.count);
          pageNum = Math.ceil(result.poiList.count/50);
          for(var i=1;i<=pageNum;i++){
          //for(var i=1;i<=1;i++){
        	  var placeSearch1 = new AMap.PlaceSearch({ //构造地点查询类
        		  pageSize: 50,
        		  pageIndex: i,
        		  city: city//城市
        	  });
          
        	  placeSearch1.search(key, function(status, result) {
        		  allNum+=result.poiList.pois.length;
        		  //allNum+=15;
        		  //alert(result.poiList.pois.length);
        		  for(var j=0;j<result.poiList.pois.length;j++){
        		  //for(var j=0;j<15;j++){
        			  poiNum++;
        			  var lonIn=result.poiList.pois[j].location.lng;
			          var latIn=result.poiList.pois[j].location.lat;
			         
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
					   result.poiList.pois[j].location.lng = lonOut;
			    	   result.poiList.pois[j].location.lat = latOut;
			    	   //datas.push(result.poiList.pois[j]);

			    	   datas.push(result.poiList.pois[j].name+","+result.poiList.pois[j].address);
			    	   
			    	   //datas.push(result.poiList.pois[17].name+","+result.poiList.pois[17].address);
			    	   //datas.push("啊啊啊啊啊啊"+","+"嘤嘤嘤嘤嘤嘤嘤");
			    	   if(poiNum == allNum && Math.ceil(allNum/50) == pageNum){
			    	   //if(poiNum == allNum && Math.ceil(allNum/50) == 1){
			    		  //alert("aaa"+poiNum);
			    		  importPoi(datas);  
			    		   //importPoi(string,poiNum);
			    		   //datasNew.push(datas[301]);
			    		   //datasNew.push("清河燕渟体育文化公园,学府树北街与毛纺路交叉口东南100米");
			    		   //importPoi(datasNew);
			    		   
			    	   }
			    	   //importPoi("一,二,三,四,五",poiNum);
  
        		  }
        		  
        	  });
          }

        });
    });
}

function importPoi(datas1){
	var obj = {};
	obj.datas = datas1;
	var pcb = function(resultobj){
		
	};
	var pm = new Lemon.LemonModule("ExcelImput");
    pm.addPar("list",obj);
	//pm.addPar("list",datas1);
	//pm.addPar("nums",num);
	var cai = new Lemon.CaiJSON(pcb);
	var sai = new Lemon.SaiTier(GeoX.SIC,cai,pm);
	sai.launch(Lemon.DoType.Post);
}
