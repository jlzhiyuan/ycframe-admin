package com.ycframe.web.admin.login.service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.ycframe.common.utils.DbUtils;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.database.exception.DaoTypeErrorException;
import com.ycframe.database.query.Query;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.DateUtil;
import com.ycframe.web.admin.login.pojo.UserConfig;
import com.ycframe.web.admin.user.dao.UserDao;
import com.ycframe.web.common.exception.ServiceException;
import com.ycframe.web.common.pojo.UserInfo;

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
  
	private UserConfig SystemUserConfig(String username) {
		Manager manager = DbUtils.getDatabase(); 
		UserDao user = null;
		try {
			user = manager.getDao(UserDao.class);
		} catch (DaoTypeErrorException e1) { 
			e1.printStackTrace();
			new ServiceException("数据库错误");
		}
		Query Queryuser = user.getSystemUser();
		List result;
		try {
			result = Queryuser.andEq("yhm", username).select();
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
			e.printStackTrace();
		}
		return new UserConfig();
	}

	
	public void logined(UserInfo uinfo,
			HttpServletRequest request)
	{
		Manager manager = DbUtils.getDatabase();    
		boolean er = false;
		String yhid = "";
		String gsmc = "";
		String gsbm = "";
		String bmmc = "";
		String yhzz = "";  
		UserDao user = null;
		try {
			user = manager.getDao(UserDao.class);
		} catch (DaoTypeErrorException e1) { 
			e1.printStackTrace(); 
			new ServiceException("数据库错误");
		}
		
	 
		try {
			Query SystemUserInfo = user.getSystemUserInfo(uinfo.getUsername());
			List<DBMap> datas = SystemUserInfo.select();
			if(datas.size()<1){
				new ServiceException("用户不存在");
			}
		    DBMap data = datas.get(0);
			String glry= data.getString("glry");
			gsbm= data.getString("dwbm");
			gsmc= data.getString("dwmc"); 
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
