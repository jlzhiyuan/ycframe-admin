package com.ycframe.web.admin.login.webdo;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.util.AntPathMatcher;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.database.util.DBMap;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.security.auth.Auth;
import com.ycframe.security.auth.Entity;
import com.ycframe.security.auth.Passport;
import com.ycframe.utils.ArrayUtils;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.admin.common.webdo.AbstractWebDo;
import com.ycframe.web.admin.login.service.LoginService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.security.WebUrlAuthorization;
import com.ycframe.web.security.auth.UrlAuthConfig;
import com.ycframe.web.security.service.AuthService;
import com.ycframe.web.utils.JsonUtils;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url = "/login")
public class Login extends AbstractWebDo {
	Logger logger = LoggerFactory.getLogger(getClass());
	String[] function = new String[] { "系统功能", "login" };
	public Result logout() throws Exception {
		Map inputData = new HashMap();
		HttpSession session = this.getSession();
		
	

//		HashMap<String, UserInfo> map = App.getApp()
//				.getUsersStatewithSessionId();
//		if (map != null) {
//			UserInfo golui = map.get(session.getId());
//			if (golui != null) {
//				golui.setLogined(false);
//				golui.setExpre(true);
//			}
//			map.remove(session.getId());
//			//App.getApp().setUsersStatewithSessionId(map);
//		}
		//App.getApp().removeMainUserInfo(session);
		HttpServletRequest request=this.getRequest();
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		try {
			Auth auth = sm.getAuth();
			if (auth != null) {
				Passport passport = auth.getPassport();
				if (passport != null) {
					Entity en = passport.getUser();
					if (en != null) {
						SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),"退出登录",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 退出登录成功！",getRequest());	
							
						sm.getAuth().logout();
					
					}
				}
			}
		} catch (Exception e1) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),"退出登录",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 退出登录错误！"+e1.getMessage(),getRequest());	
			
			// TODO Auto-generated catch block
			e1.printStackTrace();
	
		}

		try {
			session.invalidate();
		} catch (Exception e) {
		}
		
		
		Map map1 = new HashMap();
		map1.put("state", "success");
		map1.put("status", 1);
		return JsonResult.Result(map1).setCode(0);
	}

	public Result login(@Param(name = "username") String username,
			@Param(name = "passwordcode") String[] passwordcode,@Param(name="rememberMe",defaultvalue="false") boolean rememberMe) throws Exception {
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
		user.setRememberMe(rememberMe);
		LoginService loginservice = new LoginService(); 
		String remoteip = loginservice.getRealIp(this.getRequest());
		
		
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		Passport pp = null;
		try {
			pp = sm.getAuth().login(user);
			
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "登录",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 登录错误！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1).setMessage("系统错误");
		}
		
		if(!pp.getUser().isLogined()){
			SystemInfoLog.actionLog(username, "登录", pp.getUser().getLogininfo(),remoteip);
			
			return JsonResult.Result(null).setCode(1).setMessage(pp.getUser().getLogininfo());
		}else{
			UserInfo userinfo = App.getApp().getUserInfoByName(username);
			if (!loginservice.checkUserLoginIP(userinfo, remoteip)) {
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "登录",SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 登录失败！不同ip登录",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("不同IP登录");
			} 
			
			String tips = loginservice.checkUserConfig(username,remoteip);
			if (tips != null) {
				return JsonResult.Result(null).setCode(1).setMessage(tip);
			}

			UserInfo userInfo = App.getApp().getUserInfo(this.getRequest());
			userInfo.setLogined(true);
			userInfo.setLoginedTime(new java.util.Date());
			userInfo.setUsername(username);
			userInfo.setLoginIP(remoteip);
			userInfo.setLoginMac("");
			App.getApp().resetUserLoginPassWordError(username);
			App.getApp().updateUserState(username, "正常");
			loginservice.logined(userInfo, this.getRequest()); 
			App.getApp().setMainUserInfo(this.getRequest(),userInfo); 
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "登录",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 登录成功！",getRequest());	

			return JsonResult.Result(userInfo).setCode(0).setMessage("登录成功");
		} 
	}
	
	
	public Result isLogin() throws Exception{
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		boolean authenticated = sm.getAuth().isAuthenticated();
		return JsonResult.Result(authenticated).setCode(0).setMessage("");
	}
	
	public Result isPermitted(@Param(name = "permission") String permission) throws Exception{
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		Passport passport = sm.getAuth().getPassport();
		boolean authenticated = sm.getAuth().isPermitted(passport, permission);
		return JsonResult.Result(authenticated).setCode(0).setMessage("");
	} 
	
	public Result urlallowAccess(@Param(name = "url") String url) throws Exception{
		com.ycframe.security.auth.SecurityManager sm = this.getContext()
				.getWebContext().getSecurityManager();
		AntPathMatcher matcher = new AntPathMatcher("/");  
		WebUrlAuthorization wura = new WebUrlAuthorization();
		Map<String, UrlAuthConfig> urls = wura.getUrlPermissions(); 
		boolean allow = false;
		for(Entry<String, UrlAuthConfig> keyset : urls.entrySet()){
			String key = keyset.getKey();
			if(matcher.match(key, url)){
				UrlAuthConfig config = keyset.getValue();
				if("anon".equals(config.getFilterName())){
					allow = true;
					break;
				}else if("user".equals(config.getFilterName()) || "authc".equals(config.getFilterName())){
					allow = sm.getAuth().isAuthenticated();
 					continue;
				} else  if("anyroles".equals(config.getFilterName())){ 
						if(sm.getAuth().isAuthenticated()){
							
							AuthService auservice = new AuthService(); 
							List<String> roles = auservice.getRoles(sm.getAuth().getPassport().getUser().getUsername());
							List<String> lists = Arrays.asList(StringUtils.split(config.getConfig(), ","));
							boolean temphasrole = false;
							for (int i = 0; i < lists.size(); i++) {
								boolean has = sm.getAuth().hasRole(sm.getAuth().getPassport(), lists.get(i));
								if(has){ 
									allow = true; 
									break;
								}
							}
						} 
						break; 
					 
				} else  if("roles".equals(config.getFilterName())){ 
					if(sm.getAuth().isAuthenticated()){
						
						AuthService auservice = new AuthService(); 
						List<String> roles = auservice.getRoles(sm.getAuth().getPassport().getUser().getUsername());
						List<String> lists = Arrays.asList(StringUtils.split(config.getConfig(), ","));
						 
						boolean has = sm.getAuth().hasAllRoles(sm.getAuth().getPassport(), lists);
						if(has){
							allow = true; 
							break;
						}
					}
				}
			}	 
		}
		 
		return JsonResult.Result(allow).setCode(0).setMessage("");
	}
	
	
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}

}