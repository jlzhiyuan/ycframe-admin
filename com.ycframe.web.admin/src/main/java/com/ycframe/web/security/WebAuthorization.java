package com.ycframe.web.security;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ycframe.security.auth.Authorization;
import com.ycframe.security.auth.Entity;
import com.ycframe.web.security.service.AuthService;
public class WebAuthorization implements Authorization {
	private Object lock1 = new Object(); 
	public List<String> getPermissions(Entity user){
		List<String> permissions = new ArrayList<String>();
		AuthService loginservice = new AuthService();
		String username = user.getUsername(); 
		try {
			permissions = loginservice.getPermissions(username);
		} catch (SQLException e) {
			e.printStackTrace();
			return new ArrayList<String>();
		} 
		return permissions; 
//		if(WebContext.getContext() == null){
//			return permissions;
//		}
//		 
//		UserInfo ui = App.getApp().getUserInfo(WebContext.getContext().getRequest());
//		if(!ui.isLogined()){
//			return permissions;
//		}
//		HttpSession session = WebContext.getContext().getRequest().getSession();
//		Cache dataaccess = WebContext.getCacheManager().getCache("Permissions", 120, Type.Live);
//		Object obj = dataaccess.get(session.getId());
//		
//		if(obj == null){
//			synchronized(lock1){
//				Object objs = dataaccess.get(session.getId());
//				if(obj != null){
//					return (List<String>)objs;
//				}
//				String jString = ui.getJueseId(); 
//				if(YC.Frame.Utils.StringUtils.isBlank(jString)){
//					return permissions;
//				}
//				String[] jss = YC.Frame.Utils.StringUtils.split(jString,','); 
//				Manager manager = new Manager();
//				try {
//					manager.Load();
//				} catch (Exception e) { 
//					e.printStackTrace();
//				}
//				AuthDAO adao = null;
//				try {
//					adao = manager.getDao(AuthDAO.class);
//				} catch (Exception e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//				for (int i = 0; i < jss.length; i++) {
//					List<DBMap> lmap = adao.getPermissions(jss[i]);
//					if(lmap!=null){
//						for(DBMap map:lmap){
//							String anid = map.getString("anid", "");
//							String gnid = map.getString("gnid", "");
//							String gndz = map.getString("gndz", "");
//							if(YC.Frame.Utils.StringUtils.isNotBlank(gnid)){
//								permissions.add("BUTTON:"+gnid+":"+anid);
//							}
//							if(YC.Frame.Utils.StringUtils.isNotBlank(gndz)){
//								permissions.add("BUTTON:"+gndz+":"+anid);
//							} 
//						}
//					}
//				}
//				
//				dataaccess.put(session.getId(),permissions);
//				return permissions;
//			}
//		}else{
//			return (List<String>)obj;
//		} 
	}

	public List<String> getRoles(Entity user) {
		AuthService loginservice = new AuthService();
		String username = user.getUsername();
		List<String> Roles = null;
		try {
			Roles = loginservice.getRoles(username);
		} catch (SQLException e) {
			e.printStackTrace();
			return new ArrayList<String>();
		}
		return Roles;
	}
}
