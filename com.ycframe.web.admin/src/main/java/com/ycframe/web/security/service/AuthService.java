package com.ycframe.web.security.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap;
import com.ycframe.security.crypto.CryptoAdapterResult;
import com.ycframe.security.crypto.Decrypt;
import com.ycframe.utils.DateUtil;
import com.ycframe.utils.time.DateUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.admin.common.pojo.UserOnlineInfo;
import com.ycframe.web.admin.login.dao.LoginDao;
import com.ycframe.web.admin.login.pojo.SystemXtpz;
import com.ycframe.web.admin.login.pojo.UserConfig;
import com.ycframe.web.admin.modules.service.ModulesService;
import com.ycframe.web.security.auth.UrlAuthConfig;

public class AuthService {
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
		Manager manager = new Manager();
		try {
			manager.load();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

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
		Manager database = new Manager();
		try {
			database.load();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String sql = "SELECT ry.id id,ry.yhzt yhzt from systemry ry where ry.yhm = ?";
		Executor executor = database.getExecutor();
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

	public boolean CheckPassword(String username, String mmcode) {
		boolean tem = false;
		String sql = "SELECT ry.yhm as yhm,ry.mmcodersa,ry.ecccode as ecccode from systemry ry "
				+ " left join systemrygl_ryjl ryxx on ry.id=ryxx.glry"
				+ " WHERE ry.yhm = ? ";
		Manager manager = new Manager();
		try {
			manager.load();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
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
			String dataecccode = (String) data.get("ecccode");

			String datapassword = getPassword(datammcode);
			String checkpassword = getPassword(mmcode);
			if (datapassword.equals(checkpassword)) {
				return true;
			} else {
				return false;
			}

		}
		return tem;
	}

	private String getPassword(String mmcode) {
		Decrypt rsa2 = new com.ycframe.security.crypto.rsa2.RSAAdapter();
		try {
			CryptoAdapterResult DecResult = rsa2.Decrypt(mmcode);
			String sourceMM = DecResult.getText();
			return sourceMM;
		} catch (Exception e) {
			// logger.error("rsa2 Decrypt Error:" + e.getMessage());
			return "";
		}
	}

	private UserConfig SystemUserConfig(String username) {
		Manager manager = new Manager();
		try {
			manager.load();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

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
		Manager manager = new Manager();
		try {
			manager.load();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		Executor executor = manager.getExecutor();
		String sql = "select jsz.jsmc jsmc from systemjsz jsz inner JOIN systemryjs ryjs on jsz.ID = ryjs.JSZID inner JOIN systemry ry on ryjs.RYID = ry.id and ry.yhm=?";
		List<DBMap> maps = executor.query(sql,username);
		List<String> roles = new ArrayList<String>();
		for(DBMap map : maps){
			String jsid = map.getString("jsmc");
			roles.add(jsid);
		}
		//QueryInterface query = new com.ycframe.database.query.Query().createQueryFromScript(sql);
		return roles;		
	}

	public List<String> getPermissions(String username)  throws SQLException{
		// TODO Auto-generated method stub
		return new ArrayList<String>();
	}
	
	
	public Map<String, UrlAuthConfig>  getResources()  throws Exception{
		ModulesService modulesService = new ModulesService();
		Map<String,UrlAuthConfig> urls = new HashMap<String,UrlAuthConfig>();
		//
		List<DBMap> resources = modulesService.getResourcesRoles();
		for(DBMap amap:resources){
			String gndz = amap.getString("gndz");
			String roles = amap.getString("roles");
			UrlAuthConfig config = new UrlAuthConfig("anyroles",roles+",ROOT"); 
			urls.put(gndz, config);
		}
		return urls;
	}
}
