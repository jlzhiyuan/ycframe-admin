package com.ycframe.web.admin.organization.webdo;

import java.lang.annotation.Annotation;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Payload;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.hibernate.validator.constraints.Length;

import com.ycframe.database.util.DBMap;
import com.ycframe.validator.MapValidator;
import com.ycframe.web.App;
import com.ycframe.web.admin.organization.service.OrganizationService;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.SystemInfoLog;  

@Webdo(url = "/organization")
public class Organization extends WebDo {
	
	String[] function = new String[]{"系统维护", "部门管理"};
	public Result getOranizations(@Param(name = "orderCol")String orderCol,@Param(name = "orderType")String orderType) {
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
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 查询成功！",App.getApp().getIp(getRequest()));	

				 return JsonResult.Result(data).setCode(0).setMessage("success"); 
			 
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			e.printStackTrace();
			 return JsonResult.Result(null).setCode(1).setMessage("发生错误!"); 
		} 
	}
	
	// 添加方法
 	public Result saveData() {
 		Map<String, Object> inputData = new HashMap();
		try {
			String id = "";
			// 行政区划
			String areaCode = "";
			// 部门类型
			String deptType = "";
			// 上级部门
			String fjgbh = "";
			// 部门名称
			String deptName = "";
			// 部门编号
			String deptnobm = "";
			// 管养单位
			String JGDJ = "";
			// 备注
			String memo = "";
			// 所属管养单位
			String ssgydw = "";
			String jc = "";
			String yjlidpd = "";
			int px = 0;
  
				id = (String) this.getParam("id");
				// 上级部门
				fjgbh = (String) this.getParam("parentID");
				deptName = (String) this.getParam("deptName");
				deptnobm = this.getParam("deptnobm");
				memo = this.getParam("memo");
				jc = this.getParam("jc");
				px = Integer.parseInt(this.getParam("px"));
				OrganizationService service = new OrganizationService();
				inputData.put("id", id);
				inputData.put("deptName", deptName);
				inputData.put("fjgbh", fjgbh);
				inputData.put("memo", memo);
				inputData.put("deptnobm", deptnobm);
				inputData.put("jc", jc);
				inputData.put("px", px);
				MapValidator validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
				Map<String,String> map = validator.NotNull("deptName","必须填写机构名称").NotBlank("deptName","机构名称不能为空字符串").valid(inputData);
				if(map.size()>0){
					Object[] messagesobj = map.values().toArray();
					String messages = com.ycframe.web.utils.JsonUtils.toString(messagesobj);
					SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : "+messages,App.getApp().getIp(getRequest()));	
					return JsonResult.Result(null).setCode(1).setMessage(messages);
				}
				
				boolean success = service.saveOrg(id, deptName, fjgbh,
						memo,  deptnobm, jc,px);
			 if(success)
				 {
				 SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存成功！",App.getApp().getIp(getRequest()));	

				 return JsonResult.Result(null).setCode(0).setMessage("success");
				 }else {
					 SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 保存失败！",App.getApp().getIp(getRequest()));	
						
				 return JsonResult.Result(null).setCode(1).setMessage("保存失败");
				 }
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 保存错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	
			
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
			{	SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : "+"部分删除成功，数量"+sres.get("delcount")+"！某些部门下有人员，未被删除",App.getApp().getIp(getRequest()));	
			
				return JsonResult.Result(null).setCode(0).setMessage("部分删除成功，数量"+sres.get("delcount")+"！某些部门下有人员，未被删除");
			}
			else if(sres.get("is") == 0 && sres.get("delcount")>0) 
			{
				SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",App.getApp().getIp(getRequest()));	
				
				return JsonResult.Result(null).setCode(0).setMessage("删除成功!");
			}else 
			{  SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.FAIL,"输入数据 : "+inputData+"\r\n输出数据  : 删除失败！请检查所选部门下是否有人员",App.getApp().getIp(getRequest()));	
			
				return JsonResult.Result(null).setCode(1).setMessage("删除失败!请检查所选部门下是否有人员");
			}
			
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	

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
