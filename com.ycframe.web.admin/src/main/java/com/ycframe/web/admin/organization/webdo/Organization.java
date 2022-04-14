package com.ycframe.web.admin.organization.webdo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ycframe.database.util.DBMap;
import com.ycframe.event.EventManager;
import com.ycframe.utils.map.ConvertHashMap;
import com.ycframe.validator.MapValidator;
import com.ycframe.web.App;
import com.ycframe.web.admin.organization.service.OrganizationService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.common.event.SaveDataEvent;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog;  

@Webdo(url = "/organization")
public class Organization extends WebDo {
	
	String[] function = new String[]{"系统维护", "部门管理"};
	public Result getOranizations(@Param(name = "orderCol")String orderCol,@Param(name = "orderType")String orderType) {
		
		ConvertHashMap paramMap = this.getParamMap();
		String order = paramMap.getString("orderCol");
		
		Map<String, Object> inputData = new HashMap();
		inputData.put("orderCol", orderCol);
		inputData.put("orderType", orderType);
		try {
			OrganizationService service = new OrganizationService();
			String tj = "";
			 List<DBMap> data;
			if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
					data = service.getOrgList("","");
			   }else{
				   data = service.getOrgList(orderCol,orderType); 
			   }
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 查询成功！",getRequest());	
 
				 return JsonResult.Result(data).setCode(0).setMessage("success"); 
			 
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),getRequest());	

			e.printStackTrace();
			 return JsonResult.Result(null).setCode(1).setMessage("发生错误!"); 
		} 
	}
	
	// 添加方法
 	public Result saveData() {
 		ConvertHashMap paramMap = this.getParamMap();
 		MapValidator validator = null;
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		Map<String,String> map = validator.NotNull("deptName","必须填写机构名称").NotBlank("deptName","机构名称不能为空字符串").valid(paramMap);
		if(map.size()>0){
			Object[] messagesobj = map.values().toArray();
			String messages = com.ycframe.web.utils.JsonUtils.toString(messagesobj);
			String paramMapJson = com.ycframe.web.utils.JsonUtils.toString(paramMap);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+paramMapJson+"\r\n输出数据  : "+messages,getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(messages);
		}
		String inputData = com.ycframe.web.utils.JsonUtils.toString(paramMap);
 		try {
			String id = paramMap.getString("id");  			
			String fjgbh = paramMap.getString("parentID");// 上级部门			
			String deptName = paramMap.getString("deptName");// 部门名称			
			String deptnobm = paramMap.getString("deptnobm"); // 部门编号 			
			String memo = paramMap.getString("memo"); // 备注
			String jc = paramMap.getString("jc");
 			int px = paramMap.getInteger("px",0); 
			OrganizationService service = new OrganizationService(); 
			boolean success = service.saveOrg(id, deptName, fjgbh,memo,  deptnobm, jc,px);
			if (success) {
				SystemInfoLog.actionLog(
						App.getApp().getUserInfo(getRequest()).getUsername(),
						com.ycframe.utils.StringUtils.join(function, "_"),
						SystemInfoLog.SAVE, SystemInfoLog.SUCCESS,
						"输入数据 : " + inputData + "\r\n输出数据  : 保存成功！",
						getRequest());

				return JsonResult.Result(null).setCode(0).setMessage("success");
			} else {
				SystemInfoLog.actionLog(
						App.getApp().getUserInfo(getRequest()).getUsername(),
						com.ycframe.utils.StringUtils.join(function, "_"),
						SystemInfoLog.SAVE, SystemInfoLog.FAIL,
						"输入数据 : " + inputData + "\r\n输出数据  : 保存失败！",
						getRequest());

				return JsonResult.Result(null).setCode(1).setMessage("保存失败");
			}
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存错误！"+e.getMessage(),getRequest());	
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存失败"+e.getMessage());
		}
		
	}

	// 删除
	public Result deleteData(String[] ids) { 
		Map<String, Object> inputData = new HashMap();
		inputData.put("ids", ids);
		
		try { 
			HashMap<String,Integer> sres=new HashMap<String,Integer>();
			boolean success = false;
			OrganizationService service = new OrganizationService(); 
			if (ids != null && !"".equals(ids)&&ids!=null) {
				   sres= service.delOrg(ids);
			}
			if(sres.get("is") == 1 && sres.get("delcount")>0)
			{	SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : "+"部分删除成功，数量"+sres.get("delcount")+"！某些部门下有人员，未被删除",getRequest());	
			
				return JsonResult.Result(null).setCode(0).setMessage("部分删除成功，数量"+sres.get("delcount")+"！某些部门下有人员，未被删除");
			}
			else if(sres.get("is") == 0 && sres.get("delcount")>0) 
			{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",getRequest());	
				
				return JsonResult.Result(null).setCode(0).setMessage("删除成功!");
			}else 
			{  SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 删除失败！请检查所选部门下是否有人员",getRequest());	
			
				return JsonResult.Result(null).setCode(1).setMessage("删除失败!请检查所选部门下是否有人员");
			}
			
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),getRequest());	

			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("删除错误！"+e.getMessage());
		}		
	}

	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}

	

}
