package com.ycframe.web;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;
import java.util.regex.Matcher;
import java.util.regex.Pattern; 
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;  
import com.ycframe.cache.Cache;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.security.auth.Entity;
import com.ycframe.security.auth.passport.Passport;
import com.ycframe.web.admin.login.service.LoginService;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.common.pojo.UserOnlineInfo;
import com.ycframe.web.context.WebContext;
import com.ycframe.web.exception.WebException; 
public class App {
	
public  String mainAppname = "/hdsysglx"; 
	public  String userinfoKey = "userinfo";	
	public  ThreadLocal<String> RunningFunction = new ThreadLocal<String>();
	WebContext context=null;
	private Logger logger;
	public static App gyfunction;
	public static final App getApp(){  
		return gyfunction; 
	}
	
	public static final App initApp(WebContext context){
		if(gyfunction==null){
			synchronized(App.class){
				if(gyfunction==null){
					gyfunction = new App(context); 
				}
			}
		}
		return gyfunction; 
	}
	private App(WebContext context)
	{
		logger = LoggerFactory.getLogger("App");
		this.context=context; 
	}
	
	public WebContext getContext(){
		return this.context;
	}
	
	public  String getRunningFunction(){
		return RunningFunction.get();
	}
 
	public  boolean isNumeric(String str)
	{
		Pattern pattern = Pattern.compile("^-?\\d+$");
		Pattern pattern2 = Pattern.compile("^(-?\\d+)(\\.\\d+)?$");
		Matcher isNum = pattern.matcher(str);
		Matcher isNum2 = pattern2.matcher(str);
		if(!isNum.matches() && !isNum2.matches())
		{
			return false;
		}
		return true;
	} 
	
	public  String FormatNumerc(double sorc,int plot)
	{
		return String.format("%."+String.valueOf(plot)+"f", sorc);
	}
 
 
	public  boolean checkUserLoginSameIP(String username,String ip) throws Exception
	{
		
		HashMap<String,UserInfo> map = this.getOnlineUserInfo();
		UserInfo userinfo = map.get(username);
		if(userinfo!=null)
		{
			if(userinfo.isLogined())
			{
				if(userinfo.getLoginIP().equals(ip))
				{
					return true;
				}
			}
		}
		
		for(UserInfo ui:map.values())
		{
			if(com.ycframe.utils.StringUtils.equals(ui.getLoginIP(),ip))
			{
				 if(!com.ycframe.utils.StringUtils.equals(ui.getUsername(), username))
				 {
					return false; 
				 }
			}
		}
		return true;
	}
	private  ReentrantLock lock = new ReentrantLock();
	public  void UserLoginPassWordError(String user)
	{
		Map<String,Object> application = this.context.getCacheManager().getCache("UserState");
		Object upec = application.get("UserPasswordErrorCounter");
		HashMap<String,UserOnlineInfo> hm =new HashMap<String,UserOnlineInfo>(); 
		if(upec==null)
		{
			 application.put("UserPasswordErrorCounter",hm);
		}else
		{
			hm = (HashMap<String,UserOnlineInfo>)upec;
		}
		lock.lock();
		Integer count=0;
		UserOnlineInfo uoi = null;
		if(hm.containsKey(user))
		{
			uoi = (UserOnlineInfo)hm.get(user);
			count = uoi.getPasswordErrorCount();
		}else
		{
			uoi = new UserOnlineInfo();
			uoi.setUserName(user);
			uoi.setPasswordErrorCount(0);
		}
		count=count+1;
		uoi.setPasswordErrorCount(count);
		uoi.setPasswordErrorLastTime(new Date());
		hm.put(user, uoi);		
		lock.unlock();
	}
	public  UserOnlineInfo getUserLoginPassWordErrorCount(String user)
	{
		Object upec = GetGlobalAttribute("UserPasswordErrorCounter");
		HashMap<String,UserOnlineInfo> hm =new HashMap<String,UserOnlineInfo>(); 
		if(upec==null)
		{
			SetGlobalAttribute("UserPasswordErrorCounter",hm);
		}else
		{
			hm = (HashMap<String,UserOnlineInfo>)upec;
		}
		lock.lock();
		Integer count = 0;UserOnlineInfo uoi = null;
		if(hm.containsKey(user))
		{
			uoi = (UserOnlineInfo)hm.get(user);
		}
		else
		{
			uoi = new UserOnlineInfo();
			uoi.setUserName(user);
			hm.put(user,uoi);
		}
		lock.unlock();
		return uoi;
	}
	
	/**
	 * 閲嶇疆瀵嗙爜閿欒閿佸畾
	 * @param user
	 */
	public  void resetUserLoginPassWordError(String user)
	{ 
		Object upec = GetGlobalAttribute("UserPasswordErrorCounter");
		HashMap<String,UserOnlineInfo> hm =new HashMap<String,UserOnlineInfo>(); 
		if(upec==null)
		{
			SetGlobalAttribute("UserPasswordErrorCounter",hm);
		}else
		{
			hm = (HashMap<String,UserOnlineInfo>)upec;
		}
		lock.lock();
		Integer count=0;
		UserOnlineInfo uoi = new UserOnlineInfo();
		uoi.setPasswordErrorCount(0);
		uoi.setUserName(user);
		hm.put(user, uoi);		
		lock.unlock();
	}
	
	/**
	 * 淇敼鐢ㄦ埛鐘舵��
	 * @param yhm
	 * @param state
	 */
	public  void updateUserState(String yhm,String state)
	{
		Manager manager = new Manager(); 
		Executor executor = manager.getExecutor();
		String sql = "update systemry set yhzt=? where yhm=?";
		
		try {
			int ls = executor.update(sql,state,yhm);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	//杩囨湡杩斿洖true
	public  boolean CheckExpre(HttpSession session){
		Long last = 0L;
		try{
			last = session.getLastAccessedTime();
		}
		catch(Exception e){
			return true;
		}
		Long now = System.currentTimeMillis();
		int max = session.getMaxInactiveInterval() * 1000;
		Long end = last+max;
		boolean  expre = now > end;
		return expre;		
	}
	  
	
	/**
	 * 鑾峰彇鎵�鏈夌敤鎴风殑鐢ㄦ埛淇℃伅
	 * @return
	 * @throws Exception 
	 */
	public  HashMap<String, UserInfo> getUserState(HttpServletRequest request) throws Exception
	{ 
		HashMap<String, UserInfo> users = getOnlineUserInfo(); 
		return users;
	}
	
//	public  void setUserState(HttpServletRequest request,String username,UserInfo userinfo)
//	{ 
//		HashMap<String, UserInfo> users =  getUsersStatewithUsername();
//		HashMap<String, UserInfo> sessionusers = getUsersStatewithSessionId();
//		if(users==null){
//			users = new HashMap<String,UserInfo>();
//			//setUsersStatewithUsername(users);
//		}
//		
//		if(sessionusers==null){
//			sessionusers = new HashMap<String,UserInfo>();
//			//setUsersStatewithUsername(users);
//		}
//		
//		if(userinfo!=null && com.ycframe.utils.StringUtils.isNotBlank(username)){
//			users.put(username, userinfo);
//			setUsersStatewithUsername(users);
//			if(request!= null){
//				String sessionid =request.getSession().getId();
//				sessionusers.put(sessionid, userinfo);
//				setUsersStatewithSessionId(sessionusers);
//			}
//		}
//		
//	}
	 
	
	public  UserInfo getUserInfoByName(String name)
	{
		HashMap<String,String> users = (HashMap<String, String>) GetGlobalAttribute("users");
		if(users == null){
			return new UserInfo();
		}else{
			String ui = users.get(name);
			return UserInfo.FromJson(ui);
		} 
	}
	
//	public  HashMap<String,UserInfo> getUsersStatewithUsername()
//	{
//		HashMap<String,String> users = (HashMap<String, String>) GetGlobalAttribute("users");
//		if(users == null){
//			return new HashMap<String,UserInfo>();
//		}else{
//			 HashMap<String,UserInfo> userinfo = new HashMap<String,UserInfo>();
//			 for(String key:users.keySet()){
//				 String ui = users.get(key);
//				 userinfo.put(key, UserInfo.FromJson(ui));
//			 }
//			 return userinfo;
//		} 
//	}
//	
//	public  HashMap<String,UserInfo> getUsersStatewithSessionId()
//	{
//		HashMap<String,UserInfo> users = (HashMap<String, UserInfo>) GetGlobalAttribute("sessions");
// 
//		return users;
//	}
	
	/**
	 * 鑾峰彇鎵�鏈夊湪绾跨敤鎴�
	 * @return
	 * @throws Exception 
	 */
	public  HashMap<String,UserInfo> getOnlineUserInfo() throws Exception {
		List<Passport> passports = null;
		HashMap<String,UserInfo> onlineusers = new HashMap<String,UserInfo>();
		try {
			passports = this.context.getSecurityManager().getAuth().listPassport();
		} catch (Exception e) {
			e.printStackTrace();
		}
		for (Passport passport : passports) {
			Entity en = passport.getUser();
			String username = en.getUsername();
			onlineusers.put(username, (UserInfo)passport.getSession().getAttribute(userinfoKey));
		} 
		return onlineusers;
	}
	
	public long getOnlineUserCount() throws Exception{
		Map<String,UserInfo> map = this.getOnlineUserInfo();
		if(map == null){
			return 0;
		}
		long onlineUser = 0;
		for(String user:map.keySet())
		{
			UserInfo userinfo = map.get(user);
			if(userinfo!=null)
			{
				if(userinfo.isLogined() && !userinfo.isExpre())
				{
					onlineUser++;
				}
			}
		}
		return onlineUser;
	}
	
	/**
	 * 寮哄埗閫�鍑虹櫥褰曟煇涓敤鎴�
	 * @param username
	 * @throws WebException 
	 * @throws Exception 
	 */
	public  void logoutUser(String username) throws WebException{
	
		com.ycframe.security.auth.SecurityManager sm = context.getSecurityManager();
		try {
			sm.getAuth().logout(new Entity(username,"",""));  
//			HashMap<String,UserInfo> users = getUsersStatewithUsername();
//			UserInfo ui = users.get(username);
//			if(ui != null){
//				ui.setLogined(false); 
//			}
			//users.remove(username);
		} catch (Exception e) { 
			e.printStackTrace();
			throw new WebException("系统错误");
		} 
	}
	
//	
//	public  void setUsersStatewithSessionId(HashMap<String, UserInfo> users)
//	{
//		SetGlobalAttribute("sessions",users);  
//	}
	
//	public  void setUsersStatewithUsername(HashMap<String, UserInfo> users)
//	{
//	 
//		HashMap<String,String> onlineusers = new HashMap<String,String>();
//		if(users!=null){
//			for(String key:users.keySet())
//			{ 
//				UserInfo userinfo = users.get(key);
//				if(userinfo.isLogined()){
//					onlineusers.put(key, userinfo.toJson());
//				}
//			}
//		}
//		
//		SetGlobalAttribute("users",onlineusers);  
//	}

//	public  void logoutbyUsername(HttpServletRequest request,String username)
//	{
//		HashMap<String,UserInfo> users = getUsersStatewithUsername();
//		HashMap<String,UserInfo> usersessions = getUsersStatewithSessionId();
//		DefaultSecurityManager securityManager = (DefaultWebSecurityManager) SecurityUtils
//				.getSecurityManager();
//		DefaultWebSessionManager sessionManager = (DefaultWebSessionManager) securityManager
//				.getSessionManager(); 
//		UserInfo ui = users.get(username);
//		if(ui!=null)
//		{
//			ui.setLogined(false);
//			//setUserState(request,ui.getUsername(),ui);
//			//usersessions.get(ui.getSessionid());
//		}
//	}
  
	public  void setMainUserInfo(HttpServletRequest request,UserInfo userinfo) throws Exception{
		com.ycframe.security.auth.SecurityManager sm = this.context.getSecurityManager();
		sm.getAuth().getPassport().getSession().setAttribute(userinfoKey, userinfo);		
	}
	
//	public  void removeMainUserInfo(HttpSession session)
//	{ 
//		Object userinfo = null;
//		try{
//			userinfo = session.getAttribute(userinfoKey);
//		}
//		catch(Exception e){
//			return ;
//		}
//		
//		if(userinfo==null){
//			return;
//		}
//		UserInfo uinfo = UserInfo.FromJson((String)userinfo);
//		String username = uinfo.getUsername();
//		if(userinfo!=null)
//		{
//			HashMap<String, UserInfo> users =  getUsersStatewithUsername();
//			
//			HashMap<String, UserInfo> sessionusers =  getUsersStatewithSessionId();
//			
//			if(users==null){ 
//				return;
//			}
//			if(userinfo!=null && com.ycframe.utils.StringUtils.isNotBlank(username)){
//				users.remove(username); 
//				setUsersStatewithUsername(users);
//			}
//			sessionusers.remove(session.getId());
//			setUsersStatewithSessionId(sessionusers);
////			UserInfo ui = (UserInfo)userinfo;
////			ui.setLogined(false);
////			setUserState(ui.getUsername(),ui);
//		}
//		session.removeAttribute(userinfoKey);
//	}
	
	/**
	 * 鑾峰彇褰撳墠鐢ㄦ埛锛岄�氳繃request
	 * @param session
	 * @return
	 * @throws Exception 
	 */
	public  UserInfo getUserInfo(HttpServletRequest request){
		com.ycframe.security.auth.SecurityManager sm = this.context.getSecurityManager(); 
		UserInfo userinfo = null;
		try {
			Passport passport = sm.getAuth().getPassport();
			if(passport == null){
				userinfo = null;
			}else{
				Entity user = passport.getUser();
				userinfo = (UserInfo) passport.getSession().getAttribute(userinfoKey);
				if(userinfo==null && (passport.isAuthenticated() == false && user.isRememberMe() == true)){
					LoginService service = new LoginService();
					userinfo = new UserInfo();
					userinfo.setUsername(user.getUsername());
					service.logined(userinfo, request); 
					App.getApp().setMainUserInfo(request, userinfo);
				}else{
					userinfo = (UserInfo) passport.getSession().getAttribute(userinfoKey);
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(userinfo == null)
		{
			return new UserInfo();
		}
		return userinfo;
	}
	
	 
 
 
	public  void SetGlobalAttribute(String key,Object value)
	{
		//System.out.println("Start SetGlobalAttribute:"+key+"--"+com.ycframe.utils.DateUtil.DatetoStringMS(new Date()));
		String cachename = (String) this.context.getParam("ycframe.ServerName"); 
		Cache cache = this.context.getCacheManager().getCache(cachename);
		cache.put(key, value);
		//System.out.println("End SetGlobalAttribute:"+key+"--"+com.ycframe.utils.DateUtil.DatetoStringMS(new Date()));
	}
	public  <T> T GetGlobalAttribute(String key)
	{
		//System.out.println("Start GetGlobalAttribute:"+key+"--"+com.ycframe.utils.DateUtil.DatetoStringMS(new Date()));
		String cachename = (String) this.context.getParam("ycframe.ServerName");
		Cache<String,T> cache = this.context.getCacheManager().getCache(cachename);
		//System.out.println("End GetGlobalAttribute:"+key+"--"+com.ycframe.utils.DateUtil.DatetoStringMS(new Date()));
 
		T sss = cache.get(key);
		return 	sss;	
	}
	
	public String getLoginUser() throws Exception{
		com.ycframe.security.auth.SecurityManager sm = this.context.getSecurityManager(); 
		Passport passport = sm.getAuth().getPassport();
		String username = passport.getUser().getUsername();
		return username;
	}
 
	public  UserInfo getMainUserInfo(HttpServletRequest request) throws Exception
	{
		com.ycframe.security.auth.SecurityManager sm = this.context.getSecurityManager(); 
		UserInfo userinfo = (UserInfo) sm.getAuth().getPassport().getSession().getAttribute(userinfoKey);
		if(userinfo == null)
		{
			return new UserInfo();
		}
		return userinfo; 
	}
	public  String getMACAddress(String ip) throws UnknownHostException{ 
		
		if ("127.0.0.1".equals(ip)) {
			InetAddress address = InetAddress.getLocalHost();
			if (address!=null) {
				ip = address.toString().split("/")[1];
			}
		}
		
        String str = ""; 
        String macAddress = ""; 
        try { 
            Process p = Runtime.getRuntime().exec("nbtstat -A " + ip); 
            InputStreamReader ir = new InputStreamReader(p.getInputStream()); 
            LineNumberReader input = new LineNumberReader(ir); 
            for (int i = 1; i < 100; i++) { 
                str = input.readLine(); 
                if (str != null) { 
                    if (str.indexOf("MAC Address") > 1) { 
                        macAddress = str.substring(str.indexOf("MAC Address") + 14, str.length()); 
                        break; 
                    } 
                  if (str.indexOf("MAC 鍦板潃 = ") > 1) { 
                        macAddress = str.substring(str.indexOf("MAC 鍦板潃 = ") + "MAC 鍦板潃 = ".length(), str.length()); 
                        System.out.println("******************************"+macAddress);
                        break; 
                    }
                } 
            } 
        } catch (IOException e) { 
            e.printStackTrace(System.out); 
        } 
        return macAddress; 
	    }
  
 
}

