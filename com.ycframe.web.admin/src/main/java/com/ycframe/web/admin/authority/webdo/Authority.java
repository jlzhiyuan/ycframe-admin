package com.ycframe.web.admin.authority.webdo;

import java.util.HashMap;
import java.util.List;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.authority.service.AuthorityService;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.annotation.Param;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.utils.JsonUtils;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url="/authority")
public class Authority  extends WebDo{
	
	String[] function = new String[] { "系统维护", "操作权限" };
 	public Result getAnxx(@Param(name="size")String size,@Param(name="page")String page,@Param(name="jsid")String jsid,@Param(name="gnid")String gnid){
		HashMap data = new HashMap();
		
		HashMap inputData = new HashMap();
		inputData.put("size", size);
		inputData.put("page", page);
		inputData.put("jsid", jsid);
		inputData.put("gnid", gnid);
		
		try {
			AuthorityService service = new AuthorityService();
			jsid = jsid.trim();
			gnid = gnid.trim();
			String tj = "";
			String sizes = size;
			String pages = page;
			int irows = 0;
			int ipages = 0;
			if(StringUtils.isNoneBlank(sizes))
			   {
			   	irows = Integer.parseInt(sizes);
			   }
			   if(StringUtils.isNoneBlank(pages))
			   {
			  	ipages = Integer.parseInt(pages);
			   } 
		    data = service.getAnxx(irows,ipages,jsid,gnid,tj);
		  
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 查询成功！",App.getApp().getIp(getRequest()));	
			
		    return JsonResult.Result( data).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	
			
			 return JsonResult.Result( null).setCode(1).setMessage(e.getMessage());
		}
		
	}
	
	public Result getCzqxxx(@Param(name="orderCol")String orderCol,@Param(name="orderType")String orderType,@Param(name="jsids")String jsids){
		
		HashMap inputData = new HashMap();
		inputData.put("orderCol", orderCol);
		inputData.put("page", orderType);
		inputData.put("jsids", jsids);
		try {
			
	
			AuthorityService service = new AuthorityService();
			if("null".equals(jsids)||null==jsids){
				jsids = "";
			}else{
				jsids = jsids.trim();
			}
			String tj ="";
			String tj1 ="";
			String tj2 ="";
			if(!"".equals(jsids)&&jsids!=null&!"null".equals(jsids) ){
				tj+="and JSZID = '"+jsids.trim()+"' ";
				tj1+="and jsid = '"+jsids.trim()+"' ";
				tj2+="and jsgn.jszid = '"+jsids.trim()+"' ";
			}
			
			List<DBMap> data;
			if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
			    data = service.getCzqxxx(jsids,"");
		    }else{
			    data = service.getCzqxxx(jsids," order by "+orderCol+" "+orderType);
		    }
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 操作权限查询成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
		
	}
	
	public Result getSjqxList(@Param(name="orderCol")String orderCol,@Param(name="orderType")String orderType,@Param(name="jsid")String jsid){ 
		try {
			AuthorityService service = new AuthorityService();
			int irows = 0;
			int ipages = 0;
			if("null".equals(jsid)||null==jsid){
				jsid = "";
			}else{
				jsid = jsid.trim();
			}
			 List<DBMap> data;
			if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				   data = service.getSjqxxx1(jsid,"");
			   }else{
				   data = service.getSjqxxx1(jsid," order by "+orderCol+" "+orderType);
			   }
			 return JsonResult.Result(data).setCode(0);
		} catch (Exception e) {
			return JsonResult.Result(null).setMessage(e.getMessage());
		}
		
	}
	
	/*@JavaScriptFunction(FunctionName="savexzsjqxdata",Params={"jsid:java.lang.String","gnid:java.lang.String","xzsjqxid:java.lang.String"})
	public String savexzsjqxdata(String jsid,String gnid,String xzsjqxid){ 
		String id = null;
		String success = null;
			AuthorityService service = new AuthorityService();
			success = service.savedata(id,jsid,gnid,xzsjqxid);
//		}
		return success;
	}*/
	
	/*@JavaScriptFunction(FunctionName="savexzczandata",Params={"checkedvalue:java.lang.String","jsid:java.lang.String","gnid:java.lang.String"})
	public Result savexzczandata(String checkedvalue,String jsid,String gnid){ 

		HashMap success = new HashMap();
		try {
			String anids = "";
			String[] ids;
			if(!checkedvalue.equals("[]")){
				ids = YC.Frame.Web.Utils.JsonUtils.toObject(checkedvalue,String[].class);
				for(int i=0; i<ids.length; i++){
					if(i==(ids.length-1)){
						anids+=ids[i];
					}else{
						anids+=ids[i]+",";
					}
				}
			}
			jsid = jsid.trim();
			AuthorityService service = new AuthorityService();
			success = service.saveczandata(anids,jsid,gnid);
			return JsonResult.Result(JsonResult.SUCCESS, null, null);
		} catch (Exception e) {
			return JsonResult.Result(JsonResult.ERROR, null, "发生错误!");
		}
		
	}*/
	
	public Result savexzczandata(@Param(name="checkedvalue")String anid,@Param(name="jsid")String jsid,@Param(name="gnid")String gnid){ 
		
		HashMap inputData = new HashMap();
		inputData.put("anid", anid);
		inputData.put("gnid", gnid);
		inputData.put("jsid", jsid);
		
		try {
			AuthorityService service = new AuthorityService();
			boolean data = service.saveczandata(anid,jsid,gnid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 保存成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 查询错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
	
	public Result deletedata(@Param(name="jsid")String jsid,@Param(name="gnid")String gnid,@Param(name="xzsjqxid")String xzsjqxid){
		HashMap inputData = new HashMap();
		inputData.put("jsid", jsid);
		inputData.put("gnid", gnid);
		inputData.put("xzsjqxid", xzsjqxid);
		
		try {
			AuthorityService service = new AuthorityService();
			boolean data = service.deletedata(jsid,gnid,xzsjqxid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 删除成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(0);
		
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.DEL,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  : 删除错误！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	} 
	
/*	@JavaScriptFunction(FunctionName="deleteczandata",Params={"jsid:java.lang.String","gnid:java.lang.String","xzczanid:java.lang.String"})
	public String deleteczandata(String jsid,String gnid,String xzczanid){
	
		 
		String success = null;
		
		AuthorityService service = new AuthorityService();
		success = service.deleteczandata(jsid,gnid,xzczanid);
			
		return success;
	} */
	
	public Result savegnids(@Param(name="checkedvalue[]")String[] checkedvalue,@Param(name="jsid")String jsid){ 
		HashMap inputData = new HashMap();
		inputData.put("checkedvalue", checkedvalue);
		inputData.put("jsid", jsid);
		
		try {
			String gnids = "";
			String[] ids = checkedvalue; 
			jsid = jsid.trim(); 	
			AuthorityService service = new AuthorityService();
			boolean data = service.savegnids(ids,jsid);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  ：保存角色功能成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SAVE,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据  ：保存角色功能失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
	}
	
 	public Result savesjqxs(@Param(name="checkedvalue[]")String[] checkedvalue,@Param(name="jsid")String jsid){ 
		try {
			String sjqxs = ""; 
			jsid = jsid.trim(); 
			com.ycframe.web.admin.authority.service.AuthorityService service = new AuthorityService();
			boolean data = service.savesjqxs(checkedvalue,jsid);
			return JsonResult.Result(null).setCode(0);
		} catch (Exception e) {
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}
 	public Result getZzjgtree() {
 		HashMap inputData = new HashMap();
	
 		
		//System.out.println(System.currentTimeMillis());
		try { 
			UserInfo user = App.getApp().getMainUserInfo(this.getRequest());
			String success = "";
			AuthorityService service = new AuthorityService();
			String lsits = service.dgzzjgtree(); 
			String json = "[" + lsits + "]";
			List list = JsonUtils.toList(json);
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputData+"\r\n输出数据  : 组织机构查询成功！",App.getApp().getIp(getRequest()));	

			return JsonResult.Result(list).setCode(0);
		} catch (Exception e) {
			SystemInfoLog.actionLog(App.getApp().getUserInfo( getRequest()).getUsername(),com.ycframe.utils.StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputData+"\r\n输出数据 ：: 组织机构查询失败！"+e.getMessage(),App.getApp().getIp(getRequest()));	

			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		}
		
	}

	
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
