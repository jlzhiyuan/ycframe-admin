package com.ycframe.web.security;

import java.util.LinkedHashMap;
import java.util.Map;

import com.ycframe.cache.Cache;
import com.ycframe.cache.CacheManager.Type;
import com.ycframe.web.security.auth.UrlAuthConfig;
import com.ycframe.web.security.auth.UrlAuthorization;
import com.ycframe.web.security.service.AuthService;

public class WebUrlAuthorization implements UrlAuthorization {

	public String getLoginUrl() {
		// TODO Auto-generated method stub
		return "/login.html";
	}

	public String getUnauthorizedUrl() {
		// TODO Auto-generated method stub
		return "/login.html";
	}
	
	private Map<String, UrlAuthConfig> getUrls() {
		Map<String, UrlAuthConfig> urls = new LinkedHashMap<String, UrlAuthConfig>(); 
		AuthService auservice = new AuthService(); 
		try {
			Map<String, UrlAuthConfig>  urlsets = auservice.getResources();
			urls.putAll(urlsets);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//urls.put("/", new UrlAuthConfig("user",""));
		
		urls.put("/user/getUserDetail",  new UrlAuthConfig("user",""));   //登录后都允许获取 当前用户信息
		urls.put("/modules/getComponent", new UrlAuthConfig("user",""));  //登录后都允许获取 组件
		urls.put("/modules/menu", new UrlAuthConfig("user",""));  //登录后都允许获取 组件 
		
		urls.put("/main.js", new UrlAuthConfig("user",""));
		urls.put("/main.html", new UrlAuthConfig("user",""));
		urls.put("/RsaCrypt/*", new UrlAuthConfig("anon",""));
		urls.put("/login*",new UrlAuthConfig("anon","")); 
//		urls.put("/Frame/**", new UrlAuthConfig("anon",""));
//		urls.put("/common/**", new UrlAuthConfig("anon",""));
		urls.put("/ui/**", new UrlAuthConfig("anon",""));
		urls.put("/", new UrlAuthConfig("anon",""));
		
		urls.put("/page/**", new UrlAuthConfig("user",""));
		urls.put("/**/*.css", new UrlAuthConfig("anon",""));
		urls.put("/**/*.js", new UrlAuthConfig("anon",""));
		urls.put("/**/*.html", new UrlAuthConfig("anon","")); 
		urls.put("/**/*.jpg", new UrlAuthConfig("anon","")); 
		urls.put("/**/*.jpeg", new UrlAuthConfig("anon","")); 
		
		urls.put("/favicon.ico", new UrlAuthConfig("anon","")); 
		urls.put("/login/*", new UrlAuthConfig("anon",""));
		urls.put("/**", new UrlAuthConfig("roles","ROOT"));
		
		System.out.println("reload urlfilter ...............");
		return urls;
	}
	
	public Map<String, UrlAuthConfig> getUrlPermissions() {
		//urls.put("/XTGL/**", new UrlAuthConfig("user",""));//login
//		urls.put("/page.html", new UrlAuthConfig("anon",""));
//		urls.put("/ScriptRouter/**", new UrlAuthConfig("anon",""));
//		urls.put("/pages/components/**",new UrlAuthConfig("anon","")); 
//		urls.put("/pages/expages/**", new UrlAuthConfig("anon",""));
//
//		urls.put("/DataFlowInterface/*", new UrlAuthConfig("anon",""));
//		
//		urls.put("/uploaddoc/**", new UrlAuthConfig("anon",""));
//		
// 		urls.put("/login/*", new UrlAuthConfig("anon",""));
//		urls.put("/Login*", new UrlAuthConfig("anon",""));
//      urls.put("/organization/getOranizations", new UrlAuthConfig("anyroles","系统管理员,ROOT"));
		
		final Cache staticcache = com.ycframe.Context.getContext().getCacheManager().getCache("static");
		final Cache cache = com.ycframe.Context.getContext().getCacheManager().getCache("urlfilter", 60, Type.Live);
		if(!cache.containsKey("urls")){
			synchronized(WebUrlAuthorization.class){
				if(!cache.containsKey("urls")){ 
					if(!staticcache.containsKey("urls")){
						Map<String, UrlAuthConfig> surls = getUrls();
						cache.put("urls", surls);
						staticcache.put("urls", surls);
					}else{
						Thread thread = new Thread(new Runnable(){ 
							public void run() {
								Map<String, UrlAuthConfig> surls = getUrls();
								cache.put("urls", surls);
								staticcache.put("urls", surls);
							} 
						}); 
						thread.start();
					} 
				}
			}
		}
		Object uuurls = staticcache.get("urls");
		return (Map<String, UrlAuthConfig>)uuurls;
		
//		urls.put("/*", new UrlAuthConfig("authc",""));
//		urls.put("/pages/**", new UrlAuthConfig("authc",""));
		// urls.put("/**", new UrlAuthConfig("user",""));
		 
		//anon  
		//authenticated=authc  
		//roles[admin]  
		//perms["user:create"]    
		
//		for( Entry<String, UrlAuthConfig> en: urls.entrySet()){
//			String k = en.getKey();
//			System.out.println(k);
//		}
		//return urls; 
	}
 

}
