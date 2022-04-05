package com.ycframe.web.admin.modules.webdo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ycframe.database.util.DBMap;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.admin.common.webdo.AbstractWebDo;
import com.ycframe.web.admin.modules.service.ModulesService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.JsonUtils;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url = "/modules")
public class Modules extends AbstractWebDo {
	String[] function = new String[]{"系统维护", "模块管理"};
	// 启用
	public Result init(String orderCol, String orderType) {
		java.util.Map<String,Object> inputData = new HashMap();
		inputData.put("orderCol", orderCol);
		inputData.put("orderType", orderType);
		
		try {
			ModulesService service = new ModulesService();
			List<DBMap> data;
			UserInfo userinfo = getUserInfo();

			if (orderCol == null && orderType == null
					|| orderCol.equals("") && orderType.equals("")) {
				data = service.getModules("", "", userinfo.getJueseId());
			} else {
				data = service.getModules(orderCol, orderType,
						userinfo.getJueseId());
			}
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),"启用",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 操作权限查询成功！",getRequest());	

			return JsonResult.Result(data).setCode(0).setMessage("ok");
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "启用",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 启用失败！"+e.getMessage(),getRequest());	

			return JsonResult.Result(e.fillInStackTrace()).setCode(1)
					.setMessage("error");
		}
	}

	public Result getTreeSelect() {
		try {
			ModulesService service = new ModulesService();
			HashMap data = service.getTreeSelect();
			if (data.get("state").equals("success")) {
				return JsonResult.Result(data.get("list"));
			} else {
				return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}

	}

	public Result getComponent() {
		try {
			ModulesService service = new ModulesService();
			UserInfo info = this.getUserInfo();
			String jsid = info.getJueseId();
			String[] jsidarray = jsid.split(",");
			List<DBMap> data = service.getComponent(jsidarray);
			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}

	}
	
	
	public Result getResources() {
		try {
			ModulesService service = new ModulesService();
			UserInfo info = this.getUserInfo();
			String jsid = info.getJueseId();
			String[] jsidarray = jsid.split(",");
			List<DBMap> data = service.getComponent(jsidarray);
			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}

	}

	public Result menu() {
		try {
			ModulesService service = new ModulesService();
			UserInfo info = this.getUserInfo();
			String userid = info.getUserid();
			List<DBMap> data = service.getMenu(userid);
			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}
	}

	// 是否启用下拉选
	public Result getStateData() { // 是否下拉选

		String select =

		"[" + "{" + " \"id\": \"T\"," + " \"text\": \"是\"" + " }"
				 + ",{"
				+ " \"id\": \"F\"," + " \"text\": \"否\"" + " }" + " ]";
		List list = JsonUtils.toList(select);

		return JsonResult.Result(list).setMessage("").setCode(0);
	}

	// 新增按钮保存
	public Result rightUpdate(String anid, String gnid) {
		try {
			anid = anid.substring(0, anid.length() - 1);
			ModulesService service = new ModulesService();
			HashMap map = service.insertAnmc(gnid, anid);
			if (map.get("state").equals("success")) {
				return JsonResult.Result(null).setMessage("").setCode(0);
			} else {
				return JsonResult.Result(null)
						.setMessage(map.get("note").toString()).setCode(1);
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}
	}

	// 删除
	public Result leftUpdate(String anid, String gnid) {
		try {
			anid = anid.substring(0, anid.length() - 1);
			ModulesService service = new ModulesService();
			HashMap map = service.deleteData(anid, gnid);
			if (map.get("state").equals("success")) {
				return JsonResult.Result(null).setMessage(null).setCode(1);
			} else {
				return JsonResult.Result(null)
						.setMessage(map.get("note").toString()).setCode(1);
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1);
		}
	}

	public Result getLinkUrl(String gnmc) {

		try {
			ModulesService service = new ModulesService();
			HashMap map = service.getLinkUrl(gnmc);
			if (map.get("state").equals("success")) {
				return JsonResult.Result(map.get("url")).setMessage("")
						.setCode(0);

			} else {
				return JsonResult.Result(null)
						.setMessage(map.get("note").toString()).setCode(1);
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("").setCode(1);
		}

	}

	public Result initNecessaryDataTable() {

		try {
			ModulesService service = new ModulesService();
			HashMap map = service.initNecessaryDataTable();
			if (map.get("state").equals("success")) {
				return JsonResult.Result(null).setMessage("").setCode(0);
			} else {
				return JsonResult.Result(null)
						.setMessage(map.get("note").toString()).setCode(1);
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage("发生错误").setCode(1);
		}
	}

	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}
	public Result insert() {
		Map<String, Object> inputData = new HashMap();
		try {
			String id = null;
			String FGNID = null;
			String GNMC = null;
			String SFXS = null;
			String GNDZ = null;
			String JDMS = null;
			String gnbh = null;
			String SXBH = null;
			String icon = null;
			String component = null;
			String jsPath = null;
			boolean isComponent = false;
			String linkUrl = null;
			String gnlx="0";
			// String yjlidpd=""; //是否为新增

			id = (String) this.getParam("id");
			// yjlidpd=id;
			FGNID = (String) this.getParam("parent");
			GNMC = (String) this.getParam("GNMC");
			SFXS = (String) this.getParam("SFXS");
			GNDZ = (String) this.getParam("GNDZ");
			JDMS = (String) this.getParam("JDMS");
			gnbh = (String) this.getParam("gnbh");
			SXBH = this.getParam("SXBH").toString();
			icon = (String) this.getParam("ICON");
			gnlx = (String) this.getParam("gnlx");
			System.out.println(gnlx);
			component = (String) this.getParam("COMPONENT");
			jsPath = (String) this.getParam("JSPATH");
			isComponent = Boolean.valueOf(this.getParam("isComponent"));
			linkUrl = (String) this.getParam("linkUrl");
			
			inputData.put("FGNID", FGNID);
			inputData.put("GNMC", GNMC);
			inputData.put("SFXS", SFXS);
			inputData.put("GNDZ", GNDZ);
			inputData.put("JDMS", JDMS);
			inputData.put("gnbh", gnbh);
			inputData.put("SXBH", SXBH);
			inputData.put("icon", icon);
			
			inputData.put("component", component);
			inputData.put("jsPath", jsPath);
			inputData.put("isComponent", isComponent);
			inputData.put("linkUrl", linkUrl);

			
			
			ModulesService service = new ModulesService();

			service.insert(id, FGNID, GNMC, SFXS, GNDZ, JDMS, gnbh, SXBH, icon,
					component, jsPath, isComponent, linkUrl,gnlx);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.ADD,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 新增成功！",getRequest());	

			return JsonResult.Result(null).setCode(0);

		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.ADD,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 新增错误！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1)
					.setMessage(e.getMessage());
		}
	}

	public Result update(String params) {
		Map<String, Object> inputData = new HashMap();
		try {

			String id = (String) this.getParam("id");
			// yjlidpd=id;
			String FGNID = (String) this.getParam("parent");
			String GNMC = (String) this.getParam("GNMC");
			String SFXS = (String) this.getParam("SFXS");
			String GNDZ = (String) this.getParam("GNDZ");
			String JDMS = (String) this.getParam("JDMS");
			String gnbh = (String) this.getParam("gnbh");
			String SXBH = this.getParam("SXBH").toString();
			String icon = (String) this.getParam("ICON");
			String component = (String) this.getParam("COMPONENT");
			String jsPath = (String) this.getParam("JSPATH");
			String gnlx=(String)this.getParam("gnlx");
			Boolean isComponent = Boolean
					.parseBoolean(this.getParam("isComponent"));
			String linkUrl = (String) this.getParam("linkUrl");
			ModulesService service = new ModulesService();
			inputData.put("FGNID", FGNID);
			inputData.put("GNMC", GNMC);
			inputData.put("SFXS", SFXS);
			inputData.put("GNDZ", GNDZ);
			inputData.put("JDMS", JDMS);
			inputData.put("gnbh", gnbh);
			inputData.put("SXBH", SXBH);
			inputData.put("icon", icon);
			
			inputData.put("component", component);
			inputData.put("jsPath", jsPath);
			inputData.put("isComponent", isComponent);
			inputData.put("linkUrl", linkUrl);

			
			service.update(FGNID, GNMC, SFXS, GNDZ, JDMS, gnbh, SXBH, id, icon,
					component, jsPath, isComponent, linkUrl,gnlx);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.UPDATA,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 修改成功！",getRequest());	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改错误！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1)
					.setMessage(e.getMessage());
		}

	}
	 
	//列表页删除
	public Result deleteData(@Param(name="id") String id){ 
		Map<String, Object> inputData = new HashMap();
		try { 
 			String sid=""; 
			ModulesService service = new ModulesService();
			inputData.put("id", id);
			boolean success = service.delete(id.split(","));
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",getRequest());	

				 return JsonResult.Result(null).setCode(0); 
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  :删除失败 ！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("保存错误"); 
			}
			
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
		
	}	
	
	
	public Result open(@Param(name="id") String[] ids){ 
		try { 
			ModulesService service = new ModulesService();
			boolean success = service.open(ids);
			if(success){
				 return JsonResult.Result(null).setCode(0); 
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("保存错误"); 
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
	
	}
	
	public Result close(@Param(name="id") String[] ids){ 
		try { 
			ModulesService service = new ModulesService();
			boolean success = service.close(ids);
			if(success){
				 return JsonResult.Result(null).setCode(0); 
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("保存错误"); 
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
	}

}