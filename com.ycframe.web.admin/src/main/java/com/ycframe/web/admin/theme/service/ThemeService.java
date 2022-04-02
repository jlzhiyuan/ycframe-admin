package com.ycframe.web.admin.theme.service;

import java.util.HashMap;
import java.util.Map; 
import javax.servlet.http.HttpServletRequest; 
import com.ycframe.database.Manager;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.IDUtils;
import com.ycframe.web.admin.theme.dao.ThemeDao;
import com.ycframe.web.context.WebContext;
import com.ycframe.web.utils.JsonUtils;

public class ThemeService {
	String[] function = new String[]{"系统维护", "主题管理"};

	public Map getStyle(String username) throws Exception {

		HashMap map = new HashMap();

		Manager manager = new Manager();
		ThemeDao dao = null;

		manager.load();
		dao = manager.getDao(ThemeDao.class);

		DBMap data = dao.getStyle(username);
		if (data == null) {
			return new HashMap();
		}
		Map dataMap = null;
		String stylestr = data.getString("paramValue");
		dataMap = JsonUtils.toMap(stylestr);

		/*
		 * YC.Frame.Web.WebContext.getContext().getRequest().getScheme()+"://"+
		 * YC.Frame.Web.WebContext.getContext().getRequest().getServerName()+":"
		 * +YC.Frame.Web.WebContext.getContext().getRequest().getServerPort() +
		 * YC.Frame.Web.WebContext.getContext().getRequest().getContextPath()+
		 * "/Uploaddoc/"+
		 */
//		String iconUrl = dataMap.containsKey("programIcon")?(String)dataMap.get("programIcon"):"";
//		WebContext context = (WebContext) com.ycframe.Context.getContext();
//		HttpServletRequest request = context.getContext().getRequest();
		//dataMap.put("programIcon",iconUrl);
		// if(dataMap.get("isShowMainMenu").equals("true")){
		// dataMap.put("isShowMainMenu", true);
		// }else{
		// dataMap.put("isShowMainMenu", false);
		// }
		return dataMap;
	}

	public boolean update(String username, String style) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		ThemeDao dao = null;

		manager.load();
		dao = manager.getDao(ThemeDao.class);
		long c = dao.queryStyle().andEq("paramName", username).count();
		int i = 0;
		if (c > 0) {
			i = dao.updateStyle(style, username);
		} else {
			i = dao.addStyle(IDUtils.GUID(), username, style);
		}

		if (i > 0) {
			return true;
		} else {
			return false;
		}

	}

}
