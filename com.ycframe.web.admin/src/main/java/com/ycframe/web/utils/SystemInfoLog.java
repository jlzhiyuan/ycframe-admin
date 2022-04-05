package com.ycframe.web.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.print.attribute.standard.DateTimeAtCompleted;
import javax.servlet.http.HttpServletRequest;

import com.squareup.okhttp.Request;
import com.ycframe.database.Manager;
import com.ycframe.key.HttpRequest;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.utils.DateUtil;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.utils.JsonUtils;

import eu.bitwalker.useragentutils.UserAgent;  

public class SystemInfoLog {
	
	public static final String IMPORT = "导入";
	public static final String EXPORT = "导出";
	
	public static final String UPLOADFILE = "上传附件";
	
	public static final String DELETEFILE = "删除附件";
	
	public final static String SUCCESS="成功";
	
	public final static String ERROR="错误";
	
	public final static String  FAIL="失败";
	
	public final static String  ADD="新增";
	
	public final static String  DEL="删除";
	
	public final static String  SELECT="查询";
	public final static String   DOWNLOAD="下载";
	
	public final static String  UPDATA="修改";
	public final static String  SAVE="保存";
	
	
	/**
	 * log 系统审计日志
	 * @param gnid 功能数组
	 * @param note  事件
	 * @param result   结果
	 * @param ip  ip地址
	 */
	public static void actionLog(String username,String gnid,String data,String ip){
		Logger logger = LoggerFactory.getLogger("ActionLog");
		Map log = new HashMap();
		log.put("username", username);
		log.put("module", gnid);
		log.put("data", data);
		log.put("ip", ip);
		log.put("datetime", new Date()); 
		String logstr = JsonUtils.toString(log); 
 		logger.info(logstr);
	}
	

	/**
	 * log 系统审计日志
	 * @param username 用户名
	 * @param modulename 模块名
	 * @param actionname 动作名
	 * @param state 状态
	 * @param data  数据 
	 * 
	 */
	public static void actionLog(String username,String  modulename,String  actionname,String state,String  data){
		Logger logger = LoggerFactory.getLogger("ActionLog");
		String ip = "internal unknown";
		Map log = new HashMap();
		log.put("username", username);
		log.put("module", modulename);
		log.put("data", data);
		log.put("ip", ip);
		log.put("datetime", new Date()); 
		
		String logstr = JsonUtils.toString(log); 
 		logger.info(logstr);
 		
 		String uuid = UUID.randomUUID().toString();
		SystemInfoLotgDao dao = null;
		Manager manager = new Manager();
		try {
			manager.load();
			dao = manager.getDao(SystemInfoLotgDao.class);
	       
			dao.insertData(uuid,username,modulename,actionname,data,"","",ip,state);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * log 系统审计日志
	 * @param username 用户名
	 * @param modulename 模块名
	 * @param actionname 动作名
	 * @param state 状态
	 * @param data  数据
	 * @param ip     IP地址
	 * 
	 */
	public static void actionLog(String username,String  modulename,String  actionname,String state,String  data,HttpServletRequest request){
		Logger logger = LoggerFactory.getLogger("ActionLog");
		String userAgentstr=request.getHeader("User-Agent");
		UserAgent userAgent = UserAgent.parseUserAgentString(userAgentstr);
		String ip = AppUtils.getIpAddress(request);
		Map log = new HashMap();
		log.put("username", username);
		log.put("module", modulename);
		log.put("data", data);
		log.put("ip", ip);
		log.put("browser", userAgent.getBrowser().getName() + userAgent.getBrowserVersion().getVersion()); 
		log.put("osname", userAgent.getOperatingSystem().getName()); 
		log.put("datetime", new Date()); 
		String logstr = JsonUtils.toString(log); 
 		logger.info(logstr);
 		
 		String uuid = UUID.randomUUID().toString();
		SystemInfoLotgDao dao = null;
		Manager manager = new Manager();
		try {
			manager.load();
			dao = manager.getDao(SystemInfoLotgDao.class);
	       
			dao.insertData(uuid,username,modulename,actionname,data,log.get("osname").toString(),log.get("browser").toString(),ip,state);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * log 系统审计日志
	 * @param gnid 功能数组
	 * @param note  事件
	 * @param result   结果
	 * @param ip  ip地址
	 */
	public static void systemLog(String gnid,String data){
		Logger logger = LoggerFactory.getLogger("SystemLog");
		Map log = new HashMap(); 
		log.put("module", gnid);
		log.put("data", data); 
		log.put("datetime", new Date()); 
		String logstr = JsonUtils.toString(log); 
 		logger.info(logstr);
	} 
}
