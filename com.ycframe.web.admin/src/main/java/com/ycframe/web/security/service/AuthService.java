package com.ycframe.web.security.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.database.util.DBMap;
import com.ycframe.security.crypto.CryptoAdapterResult;
import com.ycframe.security.crypto.Decrypt;
import com.ycframe.utils.DateUtil;
import com.ycframe.utils.time.DateUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.login.pojo.SystemXtpz;
import com.ycframe.web.admin.login.pojo.UserConfig;
import com.ycframe.web.admin.modules.service.ModulesService;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.common.pojo.UserOnlineInfo;
import com.ycframe.web.security.auth.UrlAuthConfig;
import com.ycframe.common.utils.DbUtils;

public class AuthService {
	
	/**
	 * 系统登录人数上限检测
	 * @param onlineUser
	 * @return
	 */
	public boolean checkAllowOnlineMaxUser(long onlineUser) {
		SystemXtpz xptz = getSystemConfig();
		if (onlineUser >= xptz.getDTYHBFS()) {
			return false;
		} else {
			return true;
		}
	}

	public boolean checkUserLoginIP(UserInfo userinfo, String ip) {
		if (userinfo == null) {
			return true;
		} else {
			if (userinfo.isLogined() && !userinfo.isExpre()) {
				if (ip.equals(userinfo.getLoginIP())) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
	}

	public SystemXtpz getSystemConfig() {
		Manager manager = DbUtils.getDatabase();
		Executor executor = manager.getExecutor();
		String sql = "select * from systemxtpz";
		List result;
		try {
			result = executor.query(sql);
			if (result.size() > 0) {
				SystemXtpz xtpz = new SystemXtpz();
				Map data = (Map) result.get(0);
				/*
				 * xtpz.setYXLXDLSBCS((Integer)data.get("YXLXDLSBCS"));
				 * xtpz.setDLSBHSDSJ((Integer)data.get("DLSBHSDSJ"));
				 * xtpz.setDTYHBFS((Integer)data.get("DTYHBFS"));
				 * xtpz.setSSSXSJ((Integer)data.get("SSSXSJ"));
				 */
				xtpz.setYXLXDLSBCS(
						Integer.parseInt(data.get("YXLXDLSBCS").toString()));
				xtpz.setDLSBHSDSJ(
						Integer.parseInt(data.get("DLSBHSDSJ").toString()));
				xtpz.setDTYHBFS(
						Integer.parseInt(data.get("DTYHBFS").toString()));
				xtpz.setSSSXSJ(Integer.parseInt(data.get("SSSXSJ").toString()));
				return xtpz;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new SystemXtpz();
	}
  
	public String getUserState(String usname) {
		Manager manager = DbUtils.getDatabase();
		String sql = "SELECT ry.id id,ry.yhzt yhzt from systemry ry where ry.yhm = ?";
		Executor executor = manager.getExecutor();
		try {
			List ls = executor.query(sql, usname);
			if (ls != null && ls.size() > 0) {
				Map data = (Map) ls.get(0);
				String yhzt = data.get("yhzt").toString();
				return yhzt;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}
	// true pass
	public boolean checkUserLoginPasswordError(String user) {
		SystemXtpz xtpx = getSystemConfig();
		UserOnlineInfo uoi = App.getApp().getUserLoginPassWordErrorCount(user);
		if (uoi.getPasswordErrorLastTime() == null)
			uoi.setPasswordErrorLastTime(new Date());
		Date unlock = DateUtils.addMinutes(uoi.getPasswordErrorLastTime(),
				xtpx.getDLSBHSDSJ());
		if (uoi.getPasswordErrorCount() >= xtpx.getYXLXDLSBCS()
				&& unlock.after(new Date())) {
			String us = getUserState(user);
			if ((uoi.getPasswordErrorCount() - xtpx.getYXLXDLSBCS()) >= 1
					&& !"正常".equals(us)) {
				App.getApp().resetUserLoginPassWordError(user);
				return true;
			}

			if (!"正常".equals(us)) {
				App.getApp().updateUserState(user, "正常");
			}

			return false;
		}
		return true;
	}

	public boolean CheckPassword(String username, String inputmmcode) {
		boolean tem = false;
		String sql = "SELECT ry.yhm as yhm,ry.mmcodersa,ry.mmcode,ry.ecccode as ecccode from systemry ry "
				+ " WHERE ry.yhm = ? ";
		Manager manager = DbUtils.getDatabase();
		Executor executor = manager.getExecutor();
		List ls = null;
		try {
			ls = executor.query(sql, username);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if (ls != null && ls.size() > 0) {
			Map data = (Map) ls.get(0);
			String datammcode = (String) data.get("mmcodersa");
			String mmcode = (String) data.get("mmcode"); 
			String datapassword = com.ycframe.web.utils.PasswordUtils.getUserPassword(datammcode);
			String checkpassword = com.ycframe.web.utils.PasswordUtils.getUserPassword(inputmmcode);
			if (datapassword.equals(checkpassword) && StringUtils.isNotBlank(checkpassword)) {
				return true;
			} else {
				return false;
			}

		}
		return tem;
	}

	private UserConfig SystemUserConfig(String username) {
		Manager manager = DbUtils.getDatabase();
		Executor executor = manager.getExecutor();
		String sql = "SELECT ry.fwipq ipq,ry.fwipz ipz,ry.fwsjq sjq,ry.fwsjz sjz,yxrq yxrq from systemry ry where ry.yhm=?";
		List result;
		try {
			result = executor.query(sql, username);
			if (result.size() > 0) {
				UserConfig uc = new UserConfig();
				Map data = (Map) result.get(0);
				uc.setIpq((String) data.get("ipq"));
				uc.setIpz((String) data.get("ipz"));
				uc.setSjq((String) data.get("sjq"));
				uc.setSjz((String) data.get("sjz"));
				uc.setYxrq((String) data.get("yxrq"));
				return uc;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new UserConfig();
	}
	public String checkUserConfig(String username,
			String remoteip) {
		String message = "";
		Boolean result = true;
		UserConfig uc = SystemUserConfig(username);

		String ipq = uc.getIpq();
		String ipz = uc.getIpz();
		String sjq = uc.getSjq();
		String sjz = uc.getSjz();
		String yxrq = uc.getYxrq();

		if (!com.ycframe.utils.StringUtils.isEmpty(yxrq)) {
			Date dateyxrq = DateUtil.StringtoDate(yxrq, "yyyy-MM-dd");
			Date now = new Date();

			if (dateyxrq != null && now.after(dateyxrq)) {
				return "超出有效日期";
			}
		}

		if (!com.ycframe.utils.StringUtils.isEmpty(ipq)
				&& !com.ycframe.utils.StringUtils.isEmpty(ipz)) {
			long intipq = ipConvert(ipq);
			long intipz = ipConvert(ipz);
			long intremoteip = ipConvert(remoteip);
			if (intipq > intremoteip || intremoteip > intipz) {
				return "超出IP范围";
			}
		}

		if (!com.ycframe.utils.StringUtils.isEmpty(sjq)
				&& !com.ycframe.utils.StringUtils.isEmpty(sjz)) {
			int intsjq = hmConvert(sjq);
			int intsjz = hmConvert(sjz);
			Date now = new Date();
			String hhmm = com.ycframe.utils.DateUtil.DatetoString(now, "HH:mm");
			int inthhmm = hmConvert(hhmm);
			if (intsjq > inthhmm || inthhmm > intsjz) {
				return "不在登录时间内";
			}
		}

		return null;
	}
	

	private long ipConvert(String ip) {
		String[] ipqpo = com.ycframe.utils.StringUtils.split(ip, ".");
		String Stripq = "";
		for (int i = 0; i < ipqpo.length; i++) {
			String poi = String.format("%03d", Integer.parseInt(ipqpo[i]));
			Stripq = Stripq + poi;
		}
		return Long.parseLong(Stripq);
	}

	private int hmConvert(String sj) {
		String csj = sj.replace(":", "");
		return Integer.parseInt(csj);
	}
	
	public List<String> getRoles(String username) throws SQLException{
		Manager manager = DbUtils.getDatabase();
		Executor executor = manager.getExecutor();
		String sql = "select jsz.jsmc jsmc,jsz.id jsid from systemjsz jsz inner JOIN systemryjs ryjs on jsz.ID = ryjs.JSZID inner JOIN systemry ry on ryjs.RYID = ry.id and ry.yhm=?";
		List<DBMap> maps = executor.query(sql,username);
		List<String> roles = new ArrayList<String>();
		for(DBMap map : maps){
			String jsid = map.getString("jsid");
			roles.add(jsid);
		}
		//QueryInterface query = new com.ycframe.database.query.Query().createQueryFromScript(sql);
		return roles;		
	}

	//获取用户操作权限
	public List<String> getPermissions(String username)  throws Exception{
		List<String> resultpermissions =  new ArrayList<String>();
		ModulesService modulesService = new ModulesService();
		List<DBMap> permissions = modulesService.getPermissions(username);
		for(DBMap amap:permissions){
			String permission = amap.getString("permission"); 
			resultpermissions.add(permission);
		}
		return resultpermissions; 
	}
	public Map<String, UrlAuthConfig>  getResources()  throws Exception{
		ModulesService modulesService = new ModulesService();
		Map<String,UrlAuthConfig> urls = new HashMap<String,UrlAuthConfig>();
		
		List<DBMap> guestresources = modulesService.getResourcesOfGuest();
		for(DBMap amap:guestresources){
			String gndz = amap.getString("gndz"); 
			UrlAuthConfig config = new UrlAuthConfig("anon",""); 
			urls.put(gndz, config);
		}
		
		List<DBMap> resources = modulesService.getResourcesRoles();
		for(DBMap amap:resources){
			String gndz = amap.getString("gndz");
 			int resourcetype = amap.getInteger("gnlx");
 			String roles = amap.getString("roles"); 
 			if(urls.containsKey(gndz)){
				continue;
			}
			if(resourcetype == 1){
				UrlAuthConfig config = new UrlAuthConfig("jwtroles",roles+",0"); 
				urls.put(gndz, config);
			}else{
				UrlAuthConfig config = new UrlAuthConfig("anyroles",roles+",0"); 
				urls.put(gndz, config);
			}		
		}
		return urls;
	}
}
