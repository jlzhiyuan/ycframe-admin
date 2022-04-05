package com.ycframe.web.admin.user.webdo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.admin.common.webdo.AbstractWebDo;
import com.ycframe.web.admin.user.service.UserService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog; 

@Webdo(url = "/user")
public class User extends AbstractWebDo {
	String[] function = new String[]{"系统维护", "用户管理"};
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public Result getUserDetail() throws Exception{  
		Map<String, Object> inputData = new HashMap();
		UserInfo userInfo =  this.getUserInfo();
		String jlid = userInfo.getUserinfoid();
		String idString = userInfo.getUserid();
		String userName = userInfo.getXingming();
		String loginName = userInfo.getUsername();
		UserService userService = new UserService();
		String tj = "";
		
		DBMap fh = null;
		try {
			fh = userService.getUserByName(loginName);
		} catch (Exception e) { 
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("error");
		}
  
		Map data=new HashMap();
		if (fh!=null) {
			String jgmc =fh.getString("jgmc", "");
			String bm = fh.getString("bm", "");
			String mmcodersa = fh.getString("mmcodersa", "");
			String Rmmcodersa = fh.getString("mmcodersa", "");
			String sex = fh.getString("sex", "");
			String telephone1 = fh.getString("telephone1", "");
			String telephone2 = fh.getString("telephone2", "");
			String zy = fh.getString("zy", "");
			//获取原密�?
			//mmcodersa = PasswordService.getUserPassword(mmcodersa);
			
			// String newmmcodersa = new
			// StringBuffer(mmcodersa).reverse().toString();
			// mmcodersa = PasswordService.getScrectPassword(mmcodersa);
			data.put("userId", idString);
			data.put("ryid", jlid);
			data.put("bmmc", jgmc);
//			if(zy!=null&&!"null".equals(zy)&&!"".equals(zy)){
//				data.put("userName", userName+"("+loginName+")"+"-"+zy);
//			}else{
				data.put("userName", userName+"("+loginName+")");
//			}
			data.put("loginName", loginName);
			data.put("realName", userName);
			data.put("newPwd", mmcodersa);//新密�?
			data.put("confirmPwd", mmcodersa);//确认密码
			data.put("jsid", userInfo.getJueseId());
			data.put("Telephone1", telephone1);
			data.put("Telephone2", telephone2);
			data.put("sex", sex);
			data.put("zy", zy);
		}
		return JsonResult.Result(data).setCode(0).setMessage("");
	}
	
	public Result getTree() {
		try {
			UserService service = new UserService();
			String tj = "";
			List<DBMap>  data =service.listOrg("");
			return JsonResult.Result(data).setCode(0); 
			
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
		
	}
	
	
public Result getTableData() {
	HashMap<String, String> inputData = new HashMap();
	
		try { 
			UserService service = new UserService();
 			String orderCol = this.getParam("orderCol");
			String orderType = this.getParam("orderType");
			String row = this.getParam("row");
			String page = this.getParam("page");
			String userName = (String) this.getParam("userName");
			String empCode = (String)this.getParam("empCode");
			String sex = (String) this.getParam("sex");
			String telepone1 = (String) this.getParam("jc");
			String jsmc = this.getParam("JSMC").toString();
			String yhzt = (String) this.getParam("YHZT");
			String treeid = (String) this.getParam("treeid");
			HashMap<String,String> params = new HashMap();
			
			params.put("orderCol", orderCol);
			params.put("orderType", orderType);
			params.put("row", row);
			params.put("page", page);
			params.put("userName", userName);
			params.put("empCode", empCode);
			params.put("sex", sex);
			params.put("telepone1", telepone1);
			params.put("jsmc", jsmc);
			params.put("yhzt", yhzt);
			params.put("treeid", treeid);
			inputData=params;
			int irows = 0;
			int ipages = 0;
			if (com.ycframe.utils.StringUtils.isNoneBlank(row)) {
				irows = Integer.parseInt(row);
			}
			if (com.ycframe.utils.StringUtils.isNoneBlank(page)) {
				ipages = Integer.parseInt(page);
			}
			HashMap<String, UserInfo> onlines = App.getApp().getOnlineUserInfo();
			HashMap data = new HashMap();
			 if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				   data = service.getRyglService(params, irows, ipages,onlines);
			   }else{
				   data = service.getRyglServiceOrder(params,orderCol,orderType,irows,ipages,onlines);
			   }
			 SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 列表查询成功！",getRequest());	

			return JsonResult.Result(data).setCode(0); 
 
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 列表查询失败！"+e.getMessage(),getRequest());	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}


	public Result getRoleSelect() { 
		try {
			UserService service = new UserService();
			List<DBMap> data = service.listRole();
			return JsonResult.Result(data).setCode(0); 
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
		
	}
	
	public Result close(String[] ids) { // 详细信息反填
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", ids);
		try {
			UserService service = new UserService();
			boolean succes = service.close(ids);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "禁用",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 禁用成功！",getRequest());	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "禁用",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 禁用失败！"+e.getMessage(),getRequest());	

			 return JsonResult.Result( null).setCode(1).setMessage("发生错误!");
		}		
	}
	
	public Result open(String[] ids) { // 详细信息反填
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", ids);
		try {
			UserService service = new UserService();
			boolean succes = service.open(ids);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "启用",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 启用成功！",getRequest());	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "启用",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 启用失败！"+e.getMessage(),getRequest());	

			 return JsonResult.Result( null).setCode(1).setMessage("发生错误!");
		}		
	} 
	
	public Result logout(String id) { // 详细信息反填
		try {
			UserService service = new UserService();
			DBMap user = service.getUserById(id);
			String yhm = user.getString("yhm");
			App.getApp().logoutUser(yhm); 
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			 return JsonResult.Result( null).setCode(1).setMessage(e.getMessage());
		}		
	} 
	
	
	public Result getRoleData(@Param(name="pagesize")String pagesize, @Param(name="page")String page,@Param(name="id")String id) { 
		try {
			int ipagesize = 0;
			int ipages = 0;
			if (StringUtils.isNoneBlank(pagesize)) {
				ipagesize = Integer.parseInt(pagesize);
			}
			if (StringUtils.isNoneBlank(page)) {
				ipages = Integer.parseInt(page);
			}
			UserService service = new UserService();
			Map data = service.getRoleData(id, ipagesize, ipages);
			
			return JsonResult.Result(data).setCode(0); 
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage()); 
		}
	}
	
	public Result saveData(@Param(name="ids[]")String[] ids) {
		Map<String, Object> inputData = new HashMap();
		try {
 			String id = (this.getParam("id")).trim();
			String deptID = (this.getParam("deptId")).trim();
			String userName = (this.getParam("userName")).trim();//人名
			String YHM = (this.getParam("YHM")).trim();//登录名
			String empCode = (this.getParam("empCode").toString()).trim();
			String sex = (this.getParam("sex")).trim();
			String zy = (this.getParam("zy")).trim();//专业
			String Telepone1 = (this.getParam("Telepone1").toString()).trim();
			String Telepone2 = (this.getParam("Telepone2").toString()).trim();
			UserService service = new UserService();
			inputData.put("ids", ids);
			inputData.put("id", id);
			inputData.put("deptID", deptID);
			inputData.put("userName", userName);
			inputData.put("YHM", YHM);
			inputData.put("sex", sex);
			inputData.put("zy", zy);
			inputData.put("Telepone1", Telepone1);
			inputData.put("Telepone2", Telepone2);

			boolean success = service.savedata(id, deptID, userName, YHM,  empCode, sex, Telepone1, Telepone2,zy, ids);
			 
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  :保存成功！",getRequest());	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！"+e.getMessage(),getRequest());	
			
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
	
	/**
	 * 修改当前登录人密码
	 * @return
	 * @throws Exception
	 */
	public Result mmxg() {
		Map<String, Object> inputData = new HashMap();
	
		try { 
			 UserInfo userinfo = this.getUserInfo();
				inputData.put("userinfo", userinfo);
			 String userid = userinfo.getUserid();
			UserService service = new UserService();
			String mm = (this.getParam("mm")).trim();
			boolean success = service.mmxg(userid,mm);
			 
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据 修改成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改失败！",getRequest());	
				
				return JsonResult.Result(null).setCode(1).setMessage("修改密码失败，请稍后重试！");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改错误！"+e.getMessage(),getRequest());	
			
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
	
	/**
	 * 修改当前登录人个人信息
	 * @return
	 * @throws Exception
	 */
	public Result grxxxg() { 
		Map<String, Object> inputData = new HashMap();
	
		try {
			UserInfo userinfo = this.getUserInfo();
			String userid = userinfo.getUserid();
			inputData.put("userid", userid);
			UserService service = new UserService();
			String tel1 = (this.getParam("tel1")).trim();
			String tel2 = (this.getParam("tel2")).trim();
			String name = (this.getParam("name")).trim();
			boolean success = service.grxxxg(userid,tel1,tel2,name);
			 
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改个人信息", SystemInfoLog.UPDATA,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据 修改成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改个人信息", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改失败！",getRequest());	
				
				return JsonResult.Result(null).setCode(1).setMessage("修改密码失败，请稍后重试！");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改个人信息", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改错误！"+e.getMessage(),getRequest());	
			
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
	
	public Result updatePassword() {
		Map<String, Object> inputData = new HashMap();
	
		try {
			UserInfo userinfo = this.getUserInfo();
			inputData.put("userinfo", userinfo);
			String userid = userinfo.getUserid();
			UserService service = new UserService();
			String ids = (this.getParam("ids")).trim();
			boolean success = service.updatePassword(ids);
			 
			if(success){
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据 修改成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0);
			}else{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改失败！",getRequest());	
				
				return JsonResult.Result(null).setCode(1).setMessage("修改密码失败，请稍后重试！");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_修改密码", SystemInfoLog.UPDATA,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 修改错误！"+e.getMessage(),getRequest());	
			
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
}
