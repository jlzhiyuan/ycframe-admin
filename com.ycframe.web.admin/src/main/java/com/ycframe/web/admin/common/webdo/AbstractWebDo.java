package com.ycframe.web.admin.common.webdo;

import javax.servlet.http.HttpServletRequest;

import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.Result;

public abstract class AbstractWebDo extends WebDo {
	public UserInfo getUserInfo() throws Exception{
		HttpServletRequest request = this.getContext().getRequest();
		UserInfo userinfo = App.getApp().getUserInfo(request);
		return userinfo;
	}
	
	
}
