package com.ycframe.web.admin.code.webdo;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.ycframe.database.Manager;
import com.ycframe.log.Logger;
import com.ycframe.log.LoggerFactory;
import com.ycframe.web.App;
import com.ycframe.web.admin.code.service.CodeService;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.web.common.webdo.AbstractWebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog;

 
@Webdo(url = "/code")
public class CodeWebdo extends AbstractWebDo {
	
	String[] function = new String[] { "系统维护", "代码维护" };
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
		return Result.success("");
	}
	
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 * @throws Exception 
	 */
	public Result init() throws Exception{ 
		CodeService service = new CodeService();
		Map map;
		UserInfo userinfo = this.getUserInfo();
		String jsid = userinfo.getJueseId();
		HashMap inputData = new HashMap();
	
		try {
			String model_name = this.getParam("model_name");
			String model_code = this.getParam("model_code");
			String model_describe = this.getParam("model_describe");
			int page = Integer.parseInt(this.getParam("page"));//页数
			int pageSize = Integer.parseInt(this.getParam("pageSize"));//条数
			String orderCol = this.getParam("orderCol");
			String orderType = this.getParam("orderType");
			
			inputData.put("model_name", model_name);
			inputData.put("model_code", model_code);
			inputData.put("model_describe", model_describe);
			inputData.put("model_describe", model_describe);
			inputData.put("page", page);
			inputData.put("pageSize", pageSize);
			
			inputData.put("orderCol", orderCol);
			inputData.put("orderType", orderType);
			
			map = service.init(orderCol,orderType,model_name,model_code,model_describe,page,pageSize);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 获取列表页查询成功！",getRequest());	
			
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 列表页查询失败！"+e.getMessage(),getRequest());	

			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 * @throws Exception 
	 */
	public Result initmx() throws Exception{ 
		CodeService service = new CodeService();
		Map map;
		UserInfo userinfo = this.getUserInfo();
		String jsid = userinfo.getJueseId();
		try {
			String id = this.getParam("id");
			map = service.initmx(id);
			
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	
	/**
	 * 列表页删除删除数据方法
	 * @return
	 */
	public Result delcode(){
		HashMap inputData = new HashMap();
		try { 
			CodeService service = new CodeService();
			

			Map xmlbdata = new HashMap();
			String id = this.getParam("id");
	
			inputData.put("id", id);

			boolean success = service.delcode(id);
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！",getRequest());	
				

				return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询发生错误！"+e.getMessage(),getRequest());	
			
			return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!"+e.getCause());
		}
		
	}
	
	/**
	 * 获取当前登陆人及当前时间
	 * @return
	 */
	public Result getUser(){ 
		CodeService service = new CodeService();
		Map map=new HashMap();
		try {
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid=userinfo.getUserid();
			String username=userinfo.getXingming();
			Date date=new Date();
			SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd");
			String cjsj=sdf.format(date);
			map.put("userid", userid);
			map.put("username", username);
			map.put("cjsj", cjsj);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	/**
	 * 保存
	 * @return
	 */
	public Result save(){ 
		CodeService service = new CodeService();
		Map inputData = new HashMap();
		try {
			String form = this.getParam("form");
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			Map fh =  com.ycframe.web.utils.JsonUtils.toMap(form);
			inputData= fh;
			
			int success = service.save(fh);
			if(success==0){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SAVE,"输入数据 : "+inputData+"\r\n输出数据  : 保存成功！",getRequest());	

				return JsonResult.Result(null).setCode(0);
			}else if(success==1){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！模块编码重复!",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("模块编码重复!");
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！!",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),getRequest());	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
	/**
	 * 删除数据方法
	 * @return
	 */
	public Result del(){
		Map inputData = new HashMap();
		try { 
			CodeService service = new CodeService();

			Map xmlbdata = new HashMap();
			String form = this.getParam("form");
			
			Map fh =  com.ycframe.web.utils.JsonUtils.toMap(form);
			inputData=fh;
			boolean success = service.del(fh);
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  删除成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  删除失败！",getRequest());	
				
				return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!"+e.getCause());
		}
		
	}
	
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 */
	public Result getVersion(){ 
		CodeService service = new CodeService();
		Map map;
		Map inputData = new HashMap();
		try {
			String zjlid = this.getParam("zjlid");
			inputData.put("zjlid", zjlid);
			map = service.getVersion(zjlid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_初始化列表", SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 查询成功！",getRequest());	

			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_初始化列表", SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),getRequest());	

			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	/**
	 * 版本新增
	 * @return
	 */
	public Result saveVersion(){ 
		CodeService service = new CodeService();
		Map inputData = new HashMap();
		try {
			String form = this.getParam("form");
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			Map fh =  com.ycframe.web.utils.JsonUtils.toMap(form);
			inputData=fh;
			int success = service.saveVersion(fh);
			if(success==1){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本成功！",getRequest());	

				return JsonResult.Result(null).setCode(0);				
			}else if(success==2){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本失败！当前无启用版本！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("当前无启用版本!");
			}else if(success==3){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本失败！当前启用版本超过1个请检查!！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("当前启用版本超过1个请检查!");
			}else if(success==4){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本失败！版本只能启用1个请检查!！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("版本只能启用1个请检查!");
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本失败！！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本错误！！"+e.getMessage(),getRequest());	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
	
	/**
	 * 版本修改
	 * @return
	 */
	public Result updateVersion(){ 
		CodeService service = new CodeService();
		Map inputData = new HashMap();
		try {
			String form = this.getParam("form");
			String code = this.getParam("code");
			inputData.put("form", form);
			inputData.put("code", code);
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			Map fh =  com.ycframe.web.utils.JsonUtils.toMap(form);
			boolean success = service.updateVersion(fh,code);
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本成功！",getRequest());	

				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本失败！！",getRequest());	

				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存版本错误！！"+e.getMessage(),getRequest());	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 */
	public Result getVersionXx(){ 
		CodeService service = new CodeService();
		Map map;
		try {
			String versionid = this.getParam("versionid");
			map = service.getVersionXx(versionid);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 */
	public Result perform(){ 
		CodeService service = new CodeService();
		Map map;
		try {
			String form = this.getParam("form");
			Map fh =  com.ycframe.web.utils.JsonUtils.toMap(form);
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			map = service.perform(fh,userid);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 */
	public Result getLog(){ 
		CodeService service = new CodeService();
		Map map;
		try {
			String zxr = this.getParam("zxr");
			String zxsj = this.getParam("zxsj");
			String versionid = this.getParam("versionid");
			String orderCol = this.getParam("orderCol");
			String orderType = this.getParam("orderType");
			map = service.getLog(orderCol,orderType,zxr,zxsj,versionid);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
 
	/**
	 * 列表页删除删除数据方法
	 * @return
	 */
	public Result delLog(){
		try { 
			CodeService service = new CodeService();

			Map xmlbdata = new HashMap();
			String id = this.getParam("id");
			boolean success = service.delLog(id);
			if(success){
				return JsonResult.Result(null).setCode(0);
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!");
			}
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage("删除发生错误!"+e.getCause());
		}
		
	}
}
