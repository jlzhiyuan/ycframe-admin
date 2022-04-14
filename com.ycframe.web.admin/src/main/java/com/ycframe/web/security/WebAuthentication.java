package com.ycframe.web.security;

import java.util.HashMap;
import java.util.Map;
import com.ycframe.security.auth.Authentication;
import com.ycframe.security.auth.Entity; 
import com.ycframe.security.auth.exceptions.AuthenticationException;
import com.ycframe.web.App;
import com.ycframe.web.security.service.AuthService;
import com.ycframe.web.utils.SystemInfoLog;

public class WebAuthentication implements Authentication {
	/* (non-Javadoc)
	 * @see com.system.Auth.Utils.IAuthentication#Login(com.system.Auth.User)
	 */
	public void login(Entity user) throws AuthenticationException{
		 
		try {
			dologin(user.getUsername(),user.getPassword()); 
		} catch (Exception e) {
			throw new com.ycframe.security.auth.exceptions.AuthenticationException(e.getMessage());
		} 
	}
	
	private boolean dologin(String username,String passwordcode) throws Exception{
		boolean passed = false;
		Map<String, Object> inputData = new HashMap<String, Object>();
		inputData.put("username", username);
		AuthService loginservice = new AuthService();
		long count = App.getApp().getOnlineUserCount();
		if (!loginservice.checkAllowOnlineMaxUser(count)) {
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！并发访问达到限制");	
			throw new Exception("并发访问达到限制");
		}
		String userstate = loginservice.getUserState(username);
		// 正常、初始�?�用户锁定�?�异常锁定�?�注�?
		
		
		if ("注销".equals(userstate)) { 
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！已注销用户登录");	
			throw new Exception("已注销用户无法登录");
		} else if ("初始".equals(userstate)) { 
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！初始用户登录");
			throw new Exception("初始用户登录");
		} else if ("用户锁定".equals(userstate)) { 
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！锁定用户登录");	
			throw new Exception("锁定用户无法登录");
		}

		if (!loginservice.checkUserLoginPasswordError(username)) { 
			App.getApp().UserLoginPassWordError(username);
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！密码错误次数过多");	
			throw new Exception("错误密码次数过多");
		}
		passed = loginservice.CheckPassword(username, passwordcode);

		if (passed) {
			App.getApp().resetUserLoginPassWordError(username);
			App.getApp().updateUserState(username, "正常"); 
			return true;
		} else { 
			//SystemInfoLog.actionLog(username,"login", "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！用户名或密码错误");	
			App.getApp().UserLoginPassWordError(username);
			throw new Exception("用户名密码错误");
		}
	}

	@Override
	public Map getUserInfo(Entity arg0) throws AuthenticationException {
		// TODO Auto-generated method stub
		return null;
	}

}
