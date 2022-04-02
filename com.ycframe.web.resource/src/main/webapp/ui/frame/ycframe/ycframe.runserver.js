/**
 * 
 */
(function( window, undefined ) {
	
	yc= window.yc || {};
	ycframe= ycframe || {};
	ycframe.web = ycframe.web || {};
	ycframe.web.runserver = ycframe.web.runserver || {}; 
	
	ycframe.web.getAppName = function(){
		return ycframe.web.appName;
	}
	
	ycframe.web.setAppName = function(name){
		ycframe.web.appName = name;
	}
	
	const RunServerException = function(message, code)
	{
			this.message = message;
			this.code = code;
	}

	const fun = function(name){
		var onfun=function(){
			var url = "";
			var postData=undefined;
			var successCallback = undefined;
			var errorCallback = undefined;
			
			//var logined = ycframe.app.checkLogined();
			
			/*var allowAccess = ycframe.app.allowAccess(onfun.funcationname);
			if(allowAccess){
				
			}else{
				logined = ycframe.app.checkLogined();
			}
			
			if(allowAccess==false && logined==true){
				ELEMENT.MessageBox.alert('无访问权限，请重新登录或联系系统管理员授权!', '错误', {
                            type: 'error',
                            iconClass: 'el-icon-error',
                            confirmButtonText: '确定',
                            callback: action => {
                                
                            }
                        });
				return;
			}*/
			if(!onfun.funcationname){
				url = arguments[0];
				if(typeof arguments[0] != "string"){
					throw new RunServerException('$$ arguments must be string.',2);
				}
				postData = arguments[1];
				if(typeof arguments[1] == "object"){ 
					postData = (typeof arguments[1]["data"] == "object")?arguments[1]["data"]:undefined;
					successCallback =  (typeof arguments[1]["success"] == "function")?arguments[1]["success"]:undefined;
					errorCallback   =  (typeof arguments[1]["error"] == "function")?arguments[1]["error"]:undefined;
				}
				
			}else{
				url = ycframe.web.getAppName()+onfun.funcationname;
				postData = arguments[0];
				if(typeof arguments[0] == "object"){ 
					postData = (typeof arguments[0]["data"] == "object")?arguments[0]["data"]:undefined;
					successCallback =  (typeof arguments[0]["success"] == "function")?arguments[0]["success"]:undefined;
					errorCallback   =  (typeof arguments[0]["error"] == "function")?arguments[0]["error"]:undefined;
				}
			}
			
			if(successCallback == undefined){
				var a = $.ajax({ url: url,
					async: false,
					dataType:"JSON",
					type: "POST",
					data: postData==undefined?{}:postData
					}
				);  
				a.always(function() {
					//console.log("call fun always"); 
				}); 
				//console.log(a.getAllResponseHeaders());
				if("success"===a.statusText){
					var data = JSON.parse(a.responseText);
					return data;
				}else{
					return a.responseText;
				}
			}else{
				$.ajax({ url: url,
					async: true,
					dataType:"JSON",
					type: "POST",
					data: postData==undefined?{}:postData,
					success: function (data) {
						result = data;  
						successCallback(result);
					} ,
					error: function (data) { 
					
						if(data.status==401){
							ELEMENT.MessageBox.alert('无访问权限，请重新登录或联系系统管理员授权!', '错误', {
								type: 'error',
								iconClass: 'el-icon-error',
								confirmButtonText: '确定',
								callback: action => {
									
								}
							});
							return;
						}else
						if("parsererror"===data.statusText){
							result = data; 
							successCallback(result.responseText);
						}else{
							if(errorCallback!=undefined){
								errorCallback(data);
							}
						} 
					}  
				});
				return;
				
			}
		}
		onfun.funcationname = name;
		return onfun;  
	}
	
	function makeFunctionProxy(func){
		  var proxyFunction = new Proxy(func, {
			  apply:function(funtarget, thisArg, argumentsList) {
	 		    return funtarget.apply(thisArg, argumentsList)
			  },
			  get:function(funtarget,cprop,recevier){ 
				  return makeFunctionProxy(new fun(funtarget.funcationname+'/'+cprop))
			  }
			})
		  return proxyFunction;
	} 
	
	proxy = makeFunctionProxy(new fun("")); 
	Object.preventExtensions(proxy);
	Object.defineProperty(window, "$$", { 
		value:proxy,
		writable: false,
		configurable: false
	} );
	ycframe.web.runserver.proxy = proxy;
})(window)
