package com.ycframe.web.admin.rzgl.webdo;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ycframe.database.Manager;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.pojo.UserInfo;
import com.ycframe.web.admin.common.webdo.AbstractWebDo;
import com.ycframe.web.admin.rzgl.dao.RzglDao;
import com.ycframe.web.admin.rzgl.service.RzglService;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;

@Webdo(url = "/rzgl")
public class Rzgl extends AbstractWebDo {

	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}
	
	/**
	 * 初始化查询方法，获取列表页内容
	 * @return
	 * @throws Exception 
	 */
	public Result init() throws Exception{ 
		RzglService service = new RzglService();
		Map map;
		try {
			String model = this.getParam("model");
			String username = this.getParam("username");
			String jlsj1 = this.getParam("jlsj1");
			String jlsj2 = this.getParam("jlsj2");
			String model_handle = this.getParam("model_handle");
			String message = this.getParam("message");
			String ip = this.getParam("ip");
			int page = Integer.parseInt(this.getParam("page"));//页数
			int pageSize = Integer.parseInt(this.getParam("pagesize"));//条数
			String orderCol = this.getParam("orderCol");
			String orderType = this.getParam("orderType");
			
			map = service.init(orderCol,orderType,model,username,jlsj1,jlsj2,page,pageSize,model_handle,message,ip);
			
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
	public Result getDemoData(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		try {
			HashMap map = new HashMap();
			Manager manager = new Manager();
			manager.load();
			RzglDao dao = null ; 
			dao = manager.getDao(RzglDao.class);	
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String jsid = userinfo.getJueseId();
			String userid = userinfo.getUserid();
			String model = this.getParam("model");
			String username = this.getParam("username");
			String zxsj = this.getParam("zxsj");
			String model_handle = this.getParam("model_handle");
			String message = this.getParam("message");
			String jlsj1 = this.getParam("jlsj1");
			String jlsj2 = this.getParam("jlsj2");
			String ip = this.getParam("ip");
			String captions = this.getParam("captions");
			String captions1 = this.getParam("captions1");
			String ydl = this.getParam("ydl");
			List<Map> listdate=null;
			if(StringUtils.isNoneBlank(ydl)){
				listdate = com.ycframe.web.utils.JsonUtils.toList(ydl);
			}
			QueryInterface qif = dao.init1();
//			if(StringUtils.isNoneBlank(zxsj)&&!"[]".equals(zxsj)&&!"null".equals(zxsj)){
//				zxsj = zxsj.replace("\"", "");
//				zxsj = zxsj.replace("[", "");
//				zxsj = zxsj.replace("]", "");
//				String[] fxsjarr = zxsj.split(",");
//				qif = qif.andGreatEq("jlsj", transDate2qs(fxsjarr[0],1) );
//				if(fxsjarr.length>1){
//					qif = qif.andLessEq("jlsj", transDate2js(fxsjarr[1],1) );
//				}
//			}
			if(StringUtils.isNoneBlank(jlsj1)){
				qif = qif.andGreatEq("jlsj", jlsj1 );
			}
			if(StringUtils.isNoneBlank(jlsj2)){
				qif = qif.andLessEq("jlsj", jlsj2);
			}
			if(StringUtils.isNoneBlank(model)){
				qif.andLike("model", "%"+model+"%");
			}
			if(StringUtils.isNoneBlank(username)){
				qif.andLike("username", "%"+username+"%");
			}
			if(StringUtils.isNoneBlank(model_handle)){
				qif.andLike("model_handle", "%"+model_handle+"%");
			}
			if(StringUtils.isNoneBlank(message)){
				qif.andLike("message", "%"+message+"%");
			}
			if(StringUtils.isNoneBlank(ip)){
				qif.andLike("ip", "%"+ip+"%");
			}
			
			List<DBMap> dataFromDB = qif.select();
			List<DBMap> displayData = new ArrayList<DBMap>();
			int ss=0;
			if(dataFromDB.size()>0){
				for (DBMap dbMap : dataFromDB) {
					DBMap dbmap2 = new DBMap();
					dbmap2.put("执行时间", dbMap.get("jlsj"));
					dbmap2.put("用户名", dbMap.get("username"));
					dbmap2.put("操作模块", dbMap.get("model"));
					dbmap2.put("执行动作", dbMap.get("model_handle"));
					dbmap2.put("执行状态", dbMap.get("message"));
					dbmap2.put("IP地址", dbMap.get("ip"));
					dbmap2.put("执行次数", dbMap.get("jlzt"));
					displayData.add(dbmap2);
				}
			}else{
				DBMap dbmap2 = new DBMap();
				dbmap2.put("执行时间", "");
				dbmap2.put("用户名", "");
				dbmap2.put("操作模块", "");
				dbmap2.put("执行动作", "");
				dbmap2.put("执行状态", "");
				dbmap2.put("IP地址", "");
				dbmap2.put("执行次数", "");
				displayData.add(dbmap2);
			}
			Map dataToWeb = new HashMap();
			dataToWeb.put("data", displayData);
			
			
			Map configToWeb = new HashMap();
			//设置默认展示视图为经典模式，key值可替换为compact（紧凑）和flat（平铺）
			configToWeb.put("type", "classic");
			//设置可选择（可拖拽）过滤条件,这些字段将显示在表格上方
			List dataOnTop = new ArrayList();
			String onTopStr="";
			if(captions.equals("")){
				 onTopStr = "执行动作,用户名,执行时间,执行状态,IP地址";//执行次数,
			}else if(captions.equals("查询后上方无字段")){
				onTopStr = "";
			}else{
				onTopStr=captions;
			}
			//String onTopStr = "电压等级,线路名称,设备名称隐患数量,治理部门、单位,督办单位,填写人,督办人,整改计划完成时间,是否完成整改,整改实际完成时间";
			for(int i = 0;i<onTopStr.split(",").length;i++){
				Map data = new HashMap();
				data.put("uniqueName", onTopStr.split(",")[i]);
				dataOnTop.add(data);
			}
			configToWeb.put("reportFilters",dataOnTop);
			//设置默认显示的字段
			List dataOnLeft = new ArrayList();
			String onLeftStr = "";
			if(captions1.equals("")){
				onLeftStr = "操作模块";			
			}else{
				onLeftStr=captions1;
			}
			//String onLeftStr = "单位,专业";
			for(int i = 0;i<onLeftStr.split(",").length;i++){
				Map data = new HashMap();
				data.put("uniqueName", onLeftStr.split(",")[i]);
				dataOnLeft.add(data);
			}
			configToWeb.put("rows", dataOnLeft);
			//添加数据统计模式列（Measures）为默认值
			List columns = new ArrayList();
			Map data = new HashMap();
			data.put("uniqueName","Measures");
			columns.add(data);
			if(listdate !=null){
				if(listdate.size()>0){
					for(int k=0;k<listdate.size();k++){
						if(!listdate.get(k).get("caption").equals("Measures")){
							Map yclx1 = new HashMap();
							yclx1.put("uniqueName",listdate.get(k).get("caption"));
							columns.add(yclx1);
						}
					}
				}	
				
			}
//			Map yclx1 = new HashMap();
//			yclx1.put("uniqueName","整改实际完成时间");
//			columns.add(yclx1);
			
			List measures = new ArrayList();
			configToWeb.put("columns", columns); 
			//设置列统计方式
			Map yclx = new HashMap();
			yclx.put("uniqueName","执行次数");
			yclx.put("aggregation","sum");//sum表示求和
			measures.add(yclx);
			
			
			
			configToWeb.put("measures", measures);
			
			//设置默认展开项
			Map expands = new HashMap();
			
			List rows = new ArrayList();
			Map tuple = new HashMap();
			List gdgsCc = new ArrayList();
//			gdgsCc.add("单位.九台区供电公司");
			tuple.put("tuple",gdgsCc);
			rows.add(tuple);
			expands.put("rows", rows);
			
			configToWeb.put("expands", expands);
			dataToWeb.put("config",configToWeb);
			return JsonResult.Result( dataToWeb).setCode(0);
		} catch (Exception e) {
			List<DBMap> list = new ArrayList();
			e.printStackTrace();
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1); 
		} 
	}
	
	/**
	 * 动态统计查询模式保存
	 * @return
	 */
	public Result savedtttj(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		RzglService service = new RzglService();
		try {
			String captions = this.getParam("captions");//上方可拖拽字段
			String mrxszd = this.getParam("captions1");//默认显示字段
			String cjxsdd = this.getParam("ydl");//表格中层级显示字段
			String xlmc = this.getParam("xlmc");//类别id
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			boolean success = service.savedtttj(captions,mrxszd,cjxsdd,xlmc,userid);
			if(success){
				return JsonResult.Result(null).setCode(0);
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
	public Date transDate(String date_){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();  
		Date date = null;
		try {
			if(date_.indexOf("T")!=-1){
				date_ = date_.replace("T", " ");
				date_ = date_.replace(".000Z", "");
				date = sdf.parse(date_);
				c.setTime(date);  
		        c.add(Calendar.DAY_OF_MONTH, 1); 
		        date = c.getTime();
			}else{
				date = sdf.parse(date_);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return date;
	}
	public String transDate2qs(String date_,int ts){
		SimpleDateFormat sdf = null;
		if(date_.length()>10){
			sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		}else{
			sdf = new SimpleDateFormat("yyyy-MM-dd");
		}
		Calendar c = Calendar.getInstance();  
		Date date = null;
		try {
			if(date_.indexOf("T")!=-1){
				date_ = date_.replace("T", " ");
				date_ = date_.replace(".000Z", "");
				date = sdf.parse(date_);
				date = new Date(date.getTime()+8*60*60*1000);
				c.setTime(date);  
//		        c.add(Calendar.HOUR_OF_DAY, 8); 
		        date = c.getTime();
			}else{
				date = sdf.parse(date_);
				date = new Date(date.getTime()+8*60*60*1000);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(date == null){
			return "";
		}else{
			return sdf.format(date);
		}
	}
	
	public String transDate2js(String date_,int ts){
		SimpleDateFormat sdf = null;
		if(date_.length()>10){
			sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		}else{
			sdf = new SimpleDateFormat("yyyy-MM-dd");
		}
		Calendar c = Calendar.getInstance();  
		Date date = null;
		try {
			if(date_.indexOf("T")!=-1){
				date_ = date_.replace("T", " ");
				date_ = date_.replace(".000Z", "");
				date = sdf.parse(date_);
				date = new Date(date.getTime()+(32*60*60*1000-1));
				c.setTime(date);  
//		        c.add(Calendar.HOUR_OF_DAY, 8); 
		        date = c.getTime();
			}else{
				date = sdf.parse(date_);
				date = new Date(date.getTime()+8*60*60*1000);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(date == null){
			return "";
		}else{
			return sdf.format(date);
		}
	}
	
	/**
	 * 查询模式查询
	 * @return
	 */
	public Result getmsCxms(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		RzglService service = new RzglService();
		Map map;
		try {
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			map = service.getmsCxms(userid);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	/**
	 * 动态统计查询模式修改
	 * @return
	 */
	public Result updatetttj(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		RzglService service = new RzglService();
		try {
			String id = this.getParam("id");
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			boolean success = service.updatetttj(id,userid);
			if(success){
				return JsonResult.Result(null).setCode(0);
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}
	
	/**
	 * 动态统计查询模式删除
	 * @return
	 */
	public Result deltetttj(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		RzglService service = new RzglService();
		try {
			String id = this.getParam("id");
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			boolean success = service.deltetttj(id);
			if(success){
				return JsonResult.Result(null).setCode(0);
			}else{
				return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage("保存发生错误!"+e.getCause());
		}
		
	}

	/**
	 * 查询模式查询
	 * @return
	 */
	public Result getCxms(){ 
		UserInfo ui = App.getApp().getUserInfo(this.getRequest());
		RzglService service = new RzglService();
		Map map;
		try {
			String xlmc = this.getParam("xlmc");
			UserInfo userinfo = App.getApp().getUserInfo(this.getRequest());
			String userid = userinfo.getUserid();
			map = service.getCxms(xlmc,userid);
			return JsonResult.Result(map).setCode(0).setMessage(""); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return JsonResult.Result(null).setCode(1).setMessage(""); 
		}
		
	}
	
}
