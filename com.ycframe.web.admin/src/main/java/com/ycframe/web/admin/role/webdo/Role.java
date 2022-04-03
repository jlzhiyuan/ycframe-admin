package com.ycframe.web.admin.role.webdo;

import java.util.HashMap;
import java.util.Map;

import com.ycframe.utils.StringUtils;
import com.ycframe.validator.MapValidator;
import com.ycframe.web.App;
import com.ycframe.web.admin.role.service.RoleService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog; 

@Webdo(url="/role")
public class Role  extends WebDo{
	String[] function = new String[]{"系统维护", "角色管理"};
	public Result init(@Param(name="orderCol")String orderCol,
			@Param(name="orderType")String orderType,
			@Param(name="row")String row,
			@Param(name="page")String page){
		HashMap data = new HashMap();
		Map<String, Object> inputData = new HashMap();
		inputData.put("orderCol", orderCol);
		inputData.put("orderType", orderType);
		inputData.put("row", row);
		inputData.put("page", page);
		try {
			RoleService service = new RoleService();
			String rows = row;
			String pages = page;
			int irows = 0;
			int ipages = 0;
			if(StringUtils.isNoneBlank(rows))
			   {
			   	irows = Integer.parseInt(rows);
			   }
			   if(StringUtils.isNoneBlank(page))
			   {
			  	ipages = Integer.parseInt(page);
			   }
			   if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				   data = service.init(irows,ipages);
			   }else{
				   data = service.initOrder(orderCol,orderType,irows,ipages);
			   }
			   SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 查询成功！",App.getApp().getIp(getRequest()));	

			 return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			// TODO: handle exception
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(data).setCode(0).setMessage(e.getMessage());
		}
	} 
	
	public Result getTableData(@Param(name="orderCol")String orderCol,
			@Param(name="orderType")String orderType,
			@Param(name="row")int row,
			@Param(name="page")int page,
			@Param(name="jsid")String jsid,
			@Param(name="XM")String XM,
			@Param(name="YHM")String YHM,
			@Param(name="treeid")String treeid) {
		
		try {
			RoleService service = new RoleService();
			HashMap data = service.getTableData(XM, YHM,treeid,jsid, orderCol,orderType,row, page);
			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(0).setMessage(e.getMessage());
		}
		
	}
	
	
	public Result saveData(@Param(name="id")String id,@Param(name="JSMC")String jsmc,
			@Param(name="LX")String lx,@Param(name="MS")String ms) throws Exception{
		Map<String, Object> inputData = new HashMap();
		inputData.put("id", id);
		inputData.put("jsmc", jsmc);
		inputData.put("lx", lx);
		inputData.put("ms", ms);
		inputData.put("ZT", 0);
		
		 
		MapValidator validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		validator.NotBlank("jsmc");
		Map a = validator.valid(inputData);
		if(a.size()>0){
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！",App.getApp().getIp(getRequest()));	
			return JsonResult.Result(a).setCode(1);
		}

		try {
			RoleService service = new RoleService();
			String yjlidpd = id;
			String ZT = "0";
			boolean data = service.savedata(yjlidpd,id,jsmc,lx,ms,ZT);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) { 
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	}
	
	public Result open(String[] ids){ 
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", ids);
		try {
			
			RoleService service = new RoleService();
			service.open(ids);
			
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),"启用",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 启用成功！",App.getApp().getIp(getRequest()));	
			
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "启用",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 启用失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			e.printStackTrace();
			return JsonResult.Result(null).setMessage(e.getMessage());
		}
	}
	
	public Result close(String[] ids){ 
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", ids);
		try {
			RoleService service = new RoleService();
			service.close(ids);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),"禁用",SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 禁用成功！",App.getApp().getIp(getRequest()));	
			
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), "禁用",SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 禁用失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	} 
	
	
	public Result deleteData(String[] id){
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", id.toString());
		try { 
 			RoleService service = new RoleService();
			if(id!=null && !"".equals(id)){
				boolean success = service.deleteJueses(id);
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"),SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",App.getApp().getIp(getRequest()));	
				return JsonResult.Result(null).setCode(0);
			}else
			return JsonResult.Result(null).setCode(1);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
	} 
	
 	public Result addryjs(@Param(name="ryid")String ryid,@Param(name="jsid")String jsid){
 		Map<String, Object> inputData = new HashMap();
		inputData.put("ryid", ryid);
		inputData.put("jsid", jsid);
 		try {
 			RoleService service = new RoleService(); 
			boolean map = service.addRyjs(ryid,jsid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_新增人员角色",SystemInfoLog.ADD,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 新增成功！",App.getApp().getIp(getRequest()));	
			
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) { 
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_新增人员角色", SystemInfoLog.ADD,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 新增错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	}
	
 	public Result deleteryjs(@Param(name="ryid")String ryid,@Param(name="jsid")String jsid){
 		Map<String, Object> inputData = new HashMap();
		inputData.put("ryid", ryid);
		inputData.put("jsid", jsid);
 		try {
			RoleService service = new RoleService();
			boolean success = service.deleteRyjs(ryid,jsid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_删除人员角色",SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",App.getApp().getIp(getRequest()));	
			
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) { 
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_")+"_删除人员角色", SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	}


	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}
}