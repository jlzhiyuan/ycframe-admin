(function() {
    ycframe.web.setAppName("");
    ycframe.app.connect.addhook({
        //拦截回调
        onreadystatechange: function(xhr) {
            //console.log("onreadystatechange called: %O", xhr.responseText)
        },
        onload: function(xhr) {
            //console.log("onload called: %O",xhr.responseText)
        },
        //拦截方法
        open: function(arg, xhr) {
            this._url = arg[1];
            //console.log("onload open: %O",xhr.responseText)
        },
        //拦截方法
        send: function(arg, xhr) {
            //console.log("send called;%s,%s",arg[0],xhr);
            // var params = arg[0];
            // if(params){
            // 	var ss = ycframe.secure.encryptRSA(arg[0]);
            // 	xhr.setRequestHeader("ycframeheaderenstr",ss);
            // 	//console.log("send called;%s",ss);
            // }else{ 
            // 	xhr.setRequestHeader("ycframeheaderenstr","");
            // }
            // var timestamp = (new Date()).getTime();
            // xhr.setRequestHeader("ycframeheadertime",ycframe.secure.encryptRSA(timestamp.toString())); 
        }
    });
	//allowAccess  检测是否允许访问该链接，true允许，false不允许  
	ycframe.app.allowAccess = function(targetUrl){
		var allowAccess = true;
		var aaa= $.ajax({
            url: 'login/urlallowAccess',
            type: 'POST',
			async: false,
            dataType: "JSON",
			data:{url:targetUrl},
            success: function(result, status, xhr) {
                if (result.code == 0) {
                    if (result.data == false) {
                         allowAccess = false;
                    }
                } else {
                     allowAccess = true;
                }
            },
            error: function() {
                 allowAccess = false;
            }
        });
		return allowAccess;
	};
	
	//检测是否已经登录 如果未登录会自动跳转到登录页面
    ycframe.app.checkLogined = function() {
        var logined = true;
		var a= $.ajax({
            url: 'login/isLogin',
            type: 'GET',
			async: false,
            dataType: "JSON",
            success: function(result, status, xhr) {
                if (result.code == 0) {
                    if (result.data == false) {
                        logined = false;
                        ELEMENT.MessageBox.alert('您已退出系统,需要重新登录!', '错误', {
                            type: 'error',
                            iconClass: 'el-icon-error',
                            confirmButtonText: '确定',
                            callback: action => {
                                window.location = ycframe.app.rootpath;
                            }
                        });
                    }
                } else {
                    logined = false;
                }
            },
            error: function() {
                logined = false;
                ELEMENT.MessageBox.alert('网络连接出现问题,请检查网络是否断开，如网络正常请稍后重试或联系客服处理!', '错误', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
            }
        });
		
		
		
		
        var a= $.ajax({
            url: 'login/isLogin',
            type: 'GET',
			async: false,
            dataType: "JSON",
            success: function(result, status, xhr) {
                if (result.code == 0) {
                    if (result.data == false) {
                        logined = false;
                        ELEMENT.MessageBox.alert('您已退出系统,需要重新登录!', '错误', {
                            type: 'error',
                            iconClass: 'el-icon-error',
                            confirmButtonText: '确定',
                            callback: action => {
                                window.location = ycframe.app.rootpath;
                            }
                        });
                    }
                } else {
                    logined = false;
                }
            },
            error: function() {
                logined = false;
                ELEMENT.MessageBox.alert('网络连接出现问题,请检查网络是否断开，如网络正常请稍后重试或联系客服处理!', '错误', {
                    confirmButtonText: '确定',
                    callback: action => {}
                });
            }
        });
		a.always(function() {
					//console.log("call fun always"); 
				}); 
        return logined;
    };
})();