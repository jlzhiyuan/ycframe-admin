package com.ycframe.web.admin.login.webdo;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.security.auth.Auth;
import com.ycframe.security.auth.Entity;
import com.ycframe.security.auth.passport.Passport;
import com.ycframe.security.auth.exceptions.AuthenticationException;
import com.ycframe.web.App;
import com.ycframe.web.admin.login.service.LoginService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.common.webdo.AbstractWebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.context.result.UrlResult;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url = "/")
public class Index extends AbstractWebDo {
	Logger logger = LoggerFactory.getLogger(getClass()); 
	@Override
	public Result index() {
		com.ycframe.security.auth.SecurityManager sm = this.getContext().getWebContext().getSecurityManager();
		Auth auth = null;
		try {
			auth = sm.getAuth();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			if(auth.isAuthenticated()){
				return UrlResult.Result("/main.html");
			}
			else{
				return UrlResult.Result("/login.html");
			}
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			return UrlResult.Result("/login.html");
		}
	} 
}