package com.ycframe.web.admin.login.service;

import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
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

public class LoginService {
	 

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
 

	public String getRealIp(HttpServletRequest request) {
		String remoteip = request.getHeader("x-forwarded-for");
		if (remoteip == null || remoteip.length() == 0
				|| "unknown".equalsIgnoreCase(remoteip)) {
			remoteip = request.getHeader("Proxy-Client-IP");
		}
		if (remoteip == null || remoteip.length() == 0
				|| "unknown".equalsIgnoreCase(remoteip)) {
			remoteip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (remoteip == null || remoteip.length() == 0
				|| "unknown".equalsIgnoreCase(remoteip)) {
			remoteip = request.getHeader("HTTP_CLIENT_IP");
		}
		if (remoteip == null || remoteip.length() == 0
				|| "unknown".equalsIgnoreCase(remoteip)) {
			remoteip = request.getHeader("HTTP_X_FORWARDED_FOR");
		}
		if (remoteip == null || remoteip.length() == 0
				|| "unknown".equalsIgnoreCase(remoteip)) {
			remoteip = request.getRemoteAddr();
		}
		return remoteip;
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

	
	public void logined(UserInfo uinfo,
			HttpServletRequest request)
	{
		Manager database = new Manager();
		try {
			database.load();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    
		boolean er = false;
		String yhid = "";
		String gsmc = "";
		String gsbm = "";
		String bmmc = "";
		String yhzz = "";  
		String sql0old = "SELECT ry.id yhid,ryxx.glry glry,ryxx.dwbm dwbm,gs.jgmc dwmc,bm.jgmc bmmc,ry.yhzt yhzt FROM systemrygl_ryjl ryxx " +
				" INNER JOIN systemry ry on ry.id = ryxx.glry " +
				" Left JOIN systemzzjg gs on gs.BM = ryxx.dwbm "+
				" Left JOIN systemzzjg bm on bm.BM = ryxx.ejdwbm "+
				" WHERE ry.xm=?  AND ry.jlzt=1";
		String sql0 = "SELECT ry.id yhid,ryxx.id ryxxid,ryxx.xm xingming,ryxx.zybm zybm,ryxx.glry glry,ryxx.dwbm dwbm,gs.jgmc dwmc,bm.bm bmbm,bm.ssgydw ssgydw,bm.jgmc bmmc,gw.bm gwbm,gw.gwmc gwmc,ry.yhzt yhzt,GROUP_CONCAT(js.ID)  jsid, GROUP_CONCAT(js.jsmc) jsmc  FROM systemrygl_ryjl ryxx " + 
		"INNER JOIN systemry ry on ry.id = ryxx.glry  " +
		"Left JOIN systemzzjg gs on gs.BM = ryxx.dwbm  " +
		"Left JOIN systemzzjg bm on bm.BM = ryxx.ejdwbm  " +
		"Left JOIN systemryjs ryjs on ryjs.RYID = ry.ID  " +
		"Left JOIN systemjsz js on  js.jlzt='未删除' and js.ID = ryjs.JSZID  " +
		"LEFT JOIN systemgw_ry gwry on ry.id = gwry.ryid " +
		"LEFT JOIN systemgw gw on gwry.gwid=gw.id " +
		"WHERE ry.yhm=?  AND ry.jlzt=1 "+
		" group by   ry.id, ryxx.id, ryxx.xm, ryxx.zybm, ryxx.glry, ryxx.dwbm , gs.jgmc , bm.bm , bm.ssgydw, bm.jgmc, gw.bm, gw.gwmc , ry.yhzt "; 
		
	/*	String sql0 = "SELECT ry.id yhid,ryxx.id ryxxid,ryxx.glry glry,ryxx.dwbm dwbm,gs.jgmc dwmc,bm.bm bmbm,bm.ssgydw ssgydw,bm.jgmc bmmc,gw.bm gwbm,gw.gwmc gwmc,ry.yhzt yhzt,GROUP_CONCAT(js.ID order by js.ID asc) jsid,GROUP_CONCAT(js.jsmc) jsmc,GROUP_CONCAT(DISTINCT r.name) xm ,GROUP_CONCAT(DISTINCT r.id) ryxxbid  FROM systemrygl_ryjl ryxx " + 
		"INNER JOIN systemry ry on ry.id = ryxx.glry  " +
		"Left JOIN systemzzjg gs on gs.BM = ryxx.dwbm  " +
		"Left JOIN systemzzjg bm on bm.BM = ryxx.ejdwbm  " +
		"Left JOIN systemryjs ryjs on ryjs.RYID = ry.ID  " +
		"Left JOIN systemjsz js on  js.jlzt='未删�?' and js.ID = ryjs.JSZID  " +
		"LEFT JOIN systemgw_ry gwry on ry.id = gwry.ryid " +
		"LEFT JOIN systemgw gw on gwry.gwid=gw.id " +
		"LEFT JOIN ryxx  r  ON r.ryid = ryxx.id AND r.jlzt = 1  " +
		"WHERE ry.xm=? AND ry.xm = r.name AND ry.jlzt='未删�?'  ";*/
		Executor executor0 = database.getExecutor();
		try {
			List<DBMap> ls0  =  executor0.query(sql0,uinfo.getUsername());
			if(ls0!=null && ls0.size()>0)
			{
				DBMap data =  ls0.get(0);
				 
				    DBMap obj0 = data;
					String glry= obj0.getString("glry");
					gsbm= obj0.getString("dwbm");
					gsmc= obj0.getString("dwmc"); 
					yhid = data.getString("yhid");
					bmmc = data.getString("bmmc");
					yhzz = data.getString("yhzt");
					String jsid = data.getString("jsid");
					String bmbm = data.getString("bmbm");
					String ryxxid = data.getString("ryxxid");
					//String ryxxbid = data.getString("ryxxbid");
					String ssgydw = data.getString("ssgydw"); //获取部门�?属管养单�?
					String gwmc =  data.getString("gwmc");
					String gwbm =  data.getString("gwbm")==null?"":data.getString("gwbm").toString();
					String jsmc =  data.getString("jsmc");
					String xingming =  data.getString("xingming");
					String zybm =  data.getString("zybm");
					
				//UserInfo userInfo = App.getApp().getUserInfo();
				UserInfo userInfo = uinfo;
				userInfo.setGsmc(gsmc);
				userInfo.setGsbm(gsbm);
				userInfo.setBmmc(bmmc);
				userInfo.setBmbm(bmbm);
				userInfo.setGwbm(gwbm);
				userInfo.setGwmc(gwmc);
				userInfo.setXingming(xingming);
				userInfo.setSsgydw(ssgydw); //获取部门�?属管养单�?
				userInfo.setUserid(yhid);
				userInfo.setUserinfoid(ryxxid);
				userInfo.setUsername(userInfo.getUsername());
				userInfo.setUserState(yhzz);
				userInfo.setJueseId(jsid);		
				userInfo.setZzbm(zybm);
				//userInfo.setRyxxbid(ryxxbid);
				userInfo.setLogined(true);		 
				
				HttpSession session = request.getSession();  
				session.setAttribute("yhmc",userInfo.getUsername());
				session.setAttribute("yhxm",xingming);
				session.setAttribute("yhgsbm",gsbm);
				session.setAttribute("yhbmbm",bmbm);
				session.setAttribute("yhjlid",ryxxid);
				session.setAttribute("yhgwbm",gwbm);
				session.setAttribute("yhzybm",zybm);
				session.setAttribute("yhid",yhid);
				
				if(jsmc!=null && !"".equals(jsmc) && !"null".equals(jsmc))
				{
					if(jsmc.split(",").length>1)
					{
						session.setAttribute("yhjsmc",jsmc.split(",")[0].trim());
					}
					else
					{
						session.setAttribute("yhjsmc",jsmc);
					}
				}
				else
				{
					session.setAttribute("yhjsmc","");
				}
				
				session.setAttribute("loginedyhjs",jsid);
				session.setAttribute("loginedyhid",yhid);
				
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
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
}
