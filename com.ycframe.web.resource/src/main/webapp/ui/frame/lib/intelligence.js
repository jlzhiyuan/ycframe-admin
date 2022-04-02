 	 
 	 var intelligenceCollect,intelligenceCode,intelligencePublish;
 	 var Search = Search||{};
     
     /**
      * 开始搜索任务
      */
     Search.startCollect = function(){
    	 
    	 if($('#keyWord').val() == ""){
 			alert("关键字不能为空！");
 			return;
 		 }
 		
    	 intelligenceCollect = new GeoX.Intelligence.IntelligenceCollect();
		 //intelligence.startCollect("2da73f2f-6485-479b-9e0c-da85b49d370c",document.getElementById("keyWord").value,1,1,function (e){
    	 //2017.05.05默认修改关键字为医院  
    	 intelligenceCollect.startCollect("2da73f2f-6485-479b-9e0c-da85b49d370c","医院",1,1,function (e){
			 intelligenceCode = e;
			document.getElementById("code").value=intelligenceCode;
		 }); 

     }
     
     /**
      * 判断数据源是否存在
      */
     //2017.05.05默认修改关键字为医院  
     /*Search.uploadFileCheck = function(){
 		var callback=function(resultobj){
 			if (resultobj == null) return;
 			var iftrue = resultobj[0].data;
 			if(iftrue=="true"){
 				var str = "数据源名称已存在，请重新创建!";
 				alert(str);
 				document.getElementById("startCollect").disabled=true;
 			}
 		    if(iftrue=="false"){
 				document.getElementById("startCollect").disabled=false;
 			}
 		    
 		}
 		var param=new Lemon.LemonModule("getDataIntelligenceName");
 		param.addPar("address", GeoX.ServerIp);
 		param.addPar("mapnames",$('#keyWord').val());
 		var cai=new Lemon.CaiJSON(callback);
 		var sai=new Lemon.SaiTier(GeoX.SIC,cai,param);
 		sai.launch(Lemon.DoType.Get);	
     }*/
     
     /**
      * 查询搜索及数据状态
      */
	 Search.state = function(){ 
		 var callback = function (e) {
			 if (e == null) return;
	         var objs = e[0].data;
	         var code = document.getElementById("code").value;
	         for (var i = 0; i < objs.length; i++) {
	        	 for(var j = 0;j < objs[i].datasInfo.length;j++){
	        		 if(objs[i].datasInfo[j].name.split("_")[1]== code.split("_")[0] && objs[i].datasInfo[j].wkname == code.split("_")[2]){
	        			 
	        			 if (objs[i].datasInfo[j].state == "runState") {
	        				 document.getElementById("searchState").value = "进行中";
	                     } 
	                     else {
	                    	 document.getElementById("searchState").value = "已完成";
	                     }
	        			 if (objs[i].datasInfo[j].ispub) {
	        				 document.getElementById("dataState").value = "已发布";	
	                     }
	                     else {
	                    	 document.getElementById("dataState").value = "未发布";
	                     }	
	        			 return;
	        		 }
	        	 }
	         }   
		 }
		 
		 var pm = new Lemon.LemonModule("getDataIntelligence");
	     pm.addPar("address", GeoX.ServerIp);
	     pm.addPar("port", GeoX.webPort);
	     var cai = new Lemon.CaiJSON(callback);
	     var sai = new Lemon.SaiTier(GeoX.SIC, cai, pm);
	     sai.launch(Lemon.DoType.Post);
     }
	 
	 /**
      * 停止搜索
      */
     Search.stop = function(){
    	 intelligenceCollect = new GeoX.Intelligence.IntelligenceCollect();
    	 intelligenceCollect.stopCollect(document.getElementById("code").value,function (e){
			var result = e;
			alert(result);
		});
     }
	 
	 
	 /**
	  * 上传数据源
	  */
	 Search.loadIntelligenceDb = function (){ 
		 var uniquecode = document.getElementById("code").value;
		 intelligencePublish = new GeoX.Intelligence.IntelligencePublis();
		 intelligencePublish.loadIntelligenceDb(uniquecode,function (e){
			var result = e;
			alert(result);
		});
	 };
	 
	 /**
	  * 删除数据源
	  */
     Search.deleteData = function(){
    	 var uniquecode = document.getElementById("code").value;
    	 intelligenceCollect = new GeoX.Intelligence.IntelligenceCollect();
    	 intelligenceCollect.deleteData(uniquecode,function (e){
			var result = e;
			alert(result);
		});
     }
     
     /**
	  * 显示数据源
	  */
     Search.showAll = function(cb){
    	 
    	 var code = document.getElementById("code").value;
    	 intelligencePublish = new GeoX.Intelligence.IntelligencePublis();
    	 intelligencePublish.show(code,cb);
     }
     
     /**
	  * 显示属性表
	  */
    /*Search.showList = function(){
    	
    	var code = document.getElementById("code").value; 
    	var str = "";
    	var str1 = "";

    	var pcb = function(result){
			if(result==null) return;				
			var lists = result[0].data;
			
			$('#table-cont').show();
			for(var i =0;i<lists.length;i++){
	    		str1+='<tr>'
	        		+'<td><span>'+lists[i].name+'</span></td>'
	        		+'<td><span>'+lists[i].geometry.coordinates[0]+'</span></td>'
	        		+'<td><span>'+lists[i].geometry.coordinates[1]+'</span></td>'
	        		+'<td><span>'+lists[i].address+'</span></td>'
	        		+'<td><span>'+lists[i].keyword+'</span></td>'
	        		+'</tr>'
	    	}	    		
	    	str+='<div class="panel-heading">属性表<button type="button" onclick="$(\'#table-cont\').hide();" class="close" style="color:#fff;opacity:1;margin-top:-5px;" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
		    	+'<div class="panel-body" style="height:350px;overflow-y: auto;">'
		    	+'<table class="table table-bordered table-hover">'
		    	+'<thead>'
		    	+'<tr>'
		    	+'<th>name</th>'
		    	+'<th>lon</th>'
		    	+'<th>lat</th>'
		    	+'<th>address</th>'
		    	+'<th>keyword</th>'
		    	+'</tr>'
		    	+'</thead>'
		    	+'<tbody>'
		    	+str1
		    	+'</tbody>'
		    	+'</table>'    					
		    	+'</div>'
			document.getElementById("table-cont").innerHTML=str;
			
			
		}
		var pm = new Lemon.LemonModule("queryAllIntelligence"); 
		pm.addPar("code",code);
		var cai = new Lemon.CaiJSON(pcb);
		var sai = new Lemon.SaiTier(GeoX.SIC, cai, pm);
		sai.launch(Lemon.DoType.Get);
     }*/
     
     
    