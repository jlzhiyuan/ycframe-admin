package com.ycframe.web.admin.login.webdo;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.security.auth.Entity;
import com.ycframe.security.auth.passport.Passport;
import com.ycframe.web.App;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url = "/apilogin")
public class ApiLogin extends WebDo {
	Logger logger = LoggerFactory.getLogger(getClass());
	String[] function = new String[] { "系统功能", "apilogin" };
  
	public Result sign(@Param(name = "username") String username,
			@Param(name = "passwordcode") String[] passwordcode) throws Exception {
		boolean passed = false;
		HttpSession session = this.getSession();
		Object flag = session.getAttribute("attributeflag");
		String tip = "";
		Map inputData = new HashMap();
		inputData.put("username", username);
		
		Entity user = new Entity();
		user.setUsername(username);
		user.setPassword(passwordcode[0]);
		user.setPasswordecc(""); 
		user.setLoginType("jwt");
		
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		Passport pp = null;
		try {
			pp = sm.getAuth().login(user);
			
		} catch (com.ycframe.security.auth.exceptions.AuthenticationException e) {
 			SystemInfoLog.actionLog(user.getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "sign",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  :"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
		UserInfo userinfo = App.getApp().getUserInfoByName(username);
		Object JwtSecret = pp.getInfos().get("JwtSecret");
		SystemInfoLog.actionLog(user.getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "sign",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  :获取秘钥成功",getRequest());
		return JsonResult.Result(JwtSecret).setCode(0).setMessage("signed");
	}
	 
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}

}