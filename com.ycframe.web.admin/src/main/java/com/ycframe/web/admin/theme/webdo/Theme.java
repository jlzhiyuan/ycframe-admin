package com.ycframe.web.admin.theme.webdo;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.ycframe.database.Manager;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.web.App;
import com.ycframe.web.admin.theme.service.ThemeService;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.common.webdo.AbstractWebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.ex.render.FreemarkerResult; 
 
@Webdo(url = "/theme")
public class Theme extends AbstractWebDo {
	Manager database;
	public Manager getDatabase() {
		return database;
	}

	public void setDatabase(Manager database) {
		this.database = database;
	}

	Logger logger = LoggerFactory.getLogger(getClass());
	@Override
	public Result index() {
		try {
			String loginuser = App.getApp().getLoginUser();
			return  JsonResult.Result(null).setCode(0).setMessage("User is "+loginuser); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return  JsonResult.Result(null).setCode(0).setMessage("Theme is ok"); 
	}
 
	public Result getStyle(){ 
		ThemeService service = new ThemeService(); 
		Map map; 
		try {
			UserInfo user = this.getUserInfo();
			map = service.getStyle(user.getUsername());
			if(map!=null){
				for(Object key:map.keySet()){
					if(map.get(key) == null || com.ycframe.utils.StringUtils.isBlank(map.get(key).toString())){
						map.put(key, null);
					}
				}
			}
		} catch (Exception e) { 
			e.printStackTrace();
			return FreemarkerResult.Result(null, "/pages/system/theme/style2.ftl");

		}
		return FreemarkerResult.Result(map, "/pages/system/theme/style2.ftl");
	}
	
	public Result init(){ 
		ThemeService service = new ThemeService(); 
		Map map;
		try {
			UserInfo user = this.getUserInfo();
			map = service.getStyle(user.getUsername());
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
  
	public Result update(){
		try { 
			ThemeService service = new ThemeService();
 
			Map themedata = new HashMap();
			themedata.put("programName", this.getParam("programName"));
			themedata.put("regularTextColor", this.getParam("regularTextColor"));
			themedata.put("secondaryTextColor", this.getParam("secondaryTextColor"));
			themedata.put("placeholderTextColor", this.getParam("placeholderTextColor"));
			themedata.put("baseColor", this.getParam("baseColor"));
			themedata.put("lightColor", this.getParam("lightColor"));
			themedata.put("lighterColor", this.getParam("lighterColor"));
			themedata.put("extraLightColor", this.getParam("extraLightColor"));
			themedata.put("baseWhite", this.getParam("baseWhite"));
			themedata.put("baseBlack", this.getParam("baseBlack"));
			themedata.put("baseBackground", this.getParam("baseBackground"));
			themedata.put("isShowMainMenu", this.getParam("isShowMainMenu"));
			themedata.put("primaryColor", this.getParam("primaryColor"));
			themedata.put("successColor", this.getParam("successColor"));
			themedata.put("warningColor", this.getParam("warningColor"));
			themedata.put("dangerColor", this.getParam("dangerColor"));
			themedata.put("infoColor", this.getParam("infoColor"));
			themedata.put("primaryTextColor", this.getParam("primaryTextColor"));
			themedata.put("headerColor", this.getParam("headerColor"));
			themedata.put("menuColor", this.getParam("menuColor"));
			themedata.put("programName", this.getParam("programName"));
			themedata.put("programName", this.getParam("programName"));

			String jdata = com.ycframe.web.utils.JsonUtils.toString(themedata);
			int count = 0;
			
			UserInfo user = App.getApp().getUserInfo(this.getRequest());
			boolean success = service.update(user.getUsername(),jdata);
 			 
			
			if(success){
				return JsonResult.Result(null).setCode(0);
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("部分保存发生错误!");
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
}
