package com.ycframe.web.admin.code.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.alibaba.druid.support.json.JSONUtils;
import com.ycframe.danymicmodule.DanymicModuleFactoryImpl;
import com.ycframe.database.Manager;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.IDUtils;
import com.ycframe.utils.StringUtils;
import com.ycframe.utils.map.ConvertHashMap;
import com.ycframe.web.admin.code.dao.CodeDao;


public class CodeService {
	String[] function = new String[]{"统计管理", "隐患统计"};

	
	public Map init(String orderCol,String orderType,String model_name, String model_code, String model_describe, int page, int pageSize) {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		try {
			manager.load();
			dao = manager.getDao(CodeDao.class);
			QueryInterface qif = dao.init();
			//默认查询条件
			qif.andEq("jlzt", "0");//0未删除，1已删除
			
			
			if(StringUtils.isNoneBlank(model_name)){
				qif.andLike("model_name", "%"+model_name+"%");
			}
			if(StringUtils.isNoneBlank(model_code)){
				qif.andLike("model_code", "%"+model_code+"%");
			}
			if(StringUtils.isNoneBlank(model_describe)){
				qif.andLike("model_describe", "%"+model_describe+"%");
			}
			map.put("total", qif.select().size());
			if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
			   }else{
				   if(orderType.equals("desc")){
					   qif.desc(orderCol);
				   }else if(orderType.equals("asc")){
					   qif.asc(orderCol);
				   }
			   }
			qif.descorderBy("jlsj");
			qif.printSql();
			List<DBMap> list = qif.limit((page-1)*pageSize, pageSize).select();
			map.put("data", list);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}
	
	public Map initmx(String id) {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
		try {
			manager.load();
			dao = manager.getDao(CodeDao.class);
			QueryInterface qif = dao.initmx();
			//默认查询条件
			qif.andEq("jlzt", "0");//0未删除，1已删除
			qif.andEq("sfqy", "true");
			qif.andEq("zjlid", id);
			List<DBMap> list = qif.select();
			map.put("data", list);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}

	/**
	 * 初始化列表页查询方法
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public int save(Map params) throws Exception {
		int success=0;
		Manager manager = new Manager();
		CodeDao dao = null;
		manager.load();
		dao = manager.getDao(CodeDao.class);
		try{ 
			ConvertHashMap map1 = new ConvertHashMap();
			map1.putAll(params);
			HashMap map = new HashMap();
			manager.startTransaction();
			String id = map1.getString("id", "");
			String model_name = map1.getString("model_name", "");
			String model_code = map1.getString("model_code", "");
			String model_describe = map1.getString("model_describe", "");
//			String versionid = map1.getStr("versionid", "");
//			String cjr = map1.getStr("cjr", "");
//			String cjsj = map1.getStr("cjsj", "");
//			String versiondescribe = map1.getStr("versiondescribe", "");
//			String sfqy = map1.getStr("sfqy", "");
			QueryInterface qif = dao.selectCode();//获取版本
			qif.andEq("id", id);
			List<DBMap> list = qif.select();
			QueryInterface qif1 = dao.queryCode();//获取模块编码
			qif1.andEq("jlzt", "0");
			List<DBMap> list1 = qif1.select();
			int pd=0;
			for(int i=0;i<list1.size();i++){
				if(list1.get(i).getString("model_code", "").equals(model_code) && !list1.get(i).getString("id", "").equals(id)){
					pd=1;
				}
			}
			if(pd==0){
				if(list.size()>0){
					dao.updateCode(model_name,model_code,model_describe,id);
				}else{
					dao.insertCode(id,model_name,model_code,model_describe,"0");
				}
				success=0;
			}else{
				success=1;
			}
			
//			
//			if (!StringUtils.isNoneBlank(id)) {
//				id=IDUtils.GUID();
//				dao.insertCode(id,model_name,model_code,model_describe,"0");
//				if (StringUtils.isNoneBlank(versionid)) {
//					Date date=new Date(cjsj);
////					QueryInterface qif = dao.queryVersion();//获取版本
////					qif.andEq("zjlid", id);
////					List<DBMap> list = qif.select();
////					String version =this.getLsh(list);
//					dao.insertVersion(id,versionid,"1",cjr,date,versiondescribe,code,sfqy,"0");
//				}
//			}else{
//				if (!StringUtils.isNoneBlank(versionid)) {
//					Date date=new Date(cjsj);
//					QueryInterface qif = dao.queryVersion();//获取版本
//					qif.andEq("zjlid", id);
//					List<DBMap> list = qif.select();
//					String version =this.getLsh(list);
//					dao.insertVersion(id,versionid,version,cjr,date,versiondescribe,code,sfqy,"0");
//				}else{
//					dao.updateVersion(versiondescribe,code,sfqy,versionid);
//				}
//			} 
			
		} catch (Exception e) {
			e.printStackTrace();
			manager.rollback();
			return 2;
		}
		manager.commit();
		return success;
	}
	
	/**
	 * 列表页删除
	 * @param xmlbid项目类别id
	 * @return
	 * @throws Exception
	 */
	public boolean delcode(String id) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;
		manager.load();
		dao = manager.getDao(CodeDao.class);
		int	i = dao.delCode(id);
		if (i > 0) {
			return true;
		} else {
			return false;
		}
	}
	
	public static String getLsh(List<DBMap> list) {
		DBMap map = new DBMap();
		String lsh="";//下发通知单流水号
		String lsh2="";
		if(list.size()==0){
			lsh="1";
		}else{
			List dlist=new ArrayList();
			for(int j=0;j<list.size();j++){
				String version=list.get(j).getString("version", "");
				int lsh1=Integer.valueOf(version);
				dlist.add(lsh1);
			}
			int max = Integer.valueOf((String) dlist.get(0));    
	        int min = Integer.valueOf((String) dlist.get(0));
			for (int i = 0; i < dlist.size(); i++) {          
	           if (max < Integer.valueOf((String) dlist.get(i))) max = Integer.valueOf((String) dlist.get(i));        
	        }
			lsh2=String.valueOf(max+1);
			
			lsh=lsh2;
		}
		return lsh;
	}
	
	/**
	 * 删除
	 * @param xmlbid项目类别id
	 * @return
	 * @throws Exception
	 */
	public boolean del(Map params) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;
		ConvertHashMap map1 = new ConvertHashMap();
		map1.putAll(params);
		String versionid = map1.getString("versionid", "");
		manager.load();
		dao = manager.getDao(CodeDao.class);
		int i = 0;
		if (StringUtils.isNoneBlank(versionid)) {
			i = dao.delVersion(versionid);
		} 
		if (i > 0) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * 初始化列表页查询方法
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public Map getVersion(String zjlid) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;

		manager.load();
		dao = manager.getDao(CodeDao.class);
		QueryInterface qif = dao.queryVersion();
		//默认查询条件
		qif.andEq("jlzt", "0");//0未删除，1已删除
		qif.andEq("zjlid", zjlid);//0未删除，1已删除
		qif.descorderBy("version+0");
		List<DBMap> list = qif.select();
		qif.printSql();
		map.put("data", list);
		return map;

	}
	
	/**
	 * 版本新增
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public int saveVersion(Map params) throws Exception {
		int success=0;
		Manager manager = new Manager();
		CodeDao dao = null;
		manager.load();
		dao = manager.getDao(CodeDao.class);
		try{
			ConvertHashMap map1 = new ConvertHashMap();
			map1.putAll(params);
			HashMap map = new HashMap();
			String id = map1.getString("id", "");
			String versionid = map1.getString("versionid", "");
			String cjr = map1.getString("cjr", "");
			String cjsj = map1.getString("cjsj", "");
			String versiondescribe = map1.getString("versiondescribe", "");
			String sfqy = map1.getString("sfqy", "");
//			SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd");
//			Date date=sdf.parse(cjsj);
			QueryInterface qif = dao.queryVersion();//获取版本
			qif.andEq("zjlid", id);
			qif.descorderBy("version+0");
			List<DBMap> list = qif.select();
//			String version =this.getLsh(list);
			String version="";
			if(list.size()==0){
				version="1";
			}else{
				version=String.valueOf(list.get(0).getInt("version", 0)+1);
			}
			int sfqypd=0;
			for(int i=0;i<list.size();i++){
				if(list.get(i).getString("sfqy", "").equals("true")){
					sfqypd++;
				}
			}
			if((sfqypd==0 && sfqy.equals("true")) || (sfqypd==1 && sfqy.equals("false"))){
				dao.insertVersion(id,versionid,version,cjr,new Date(),versiondescribe,"",sfqy,"0");
				success=1;
			}else if(sfqypd==0 && sfqy.equals("false")){
				success=2;//当前无启用版本
			}else if(sfqypd==1 && sfqy.equals("true")){
				success=4;//版本只能启用1个请检查
			}else if(sfqypd>1){
				success=3;//当前启用版本超过1个请检查
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			manager.rollback();
			return success;
		}
		manager.commit();
		return success;
	}
	
	/**
	 * 版本新增
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public boolean updateVersion(Map params,String code) throws Exception {
		Manager manager = new Manager();
		CodeDao dao = null;
		manager.load();
		dao = manager.getDao(CodeDao.class);
		try{
			ConvertHashMap map1 = new ConvertHashMap();
			map1.putAll(params);
			HashMap map = new HashMap();
			String id = map1.getString("id", "");
			String versionid = map1.getString("versionid", "");
//			String cjr = map1.getStr("cjr", "");
//			String cjsj = map1.getStr("cjsj", "");
			String versiondescribe = map1.getString("versiondescribe", "");
			String sfqy = map1.getString("sfqy", "");
			if(sfqy.equals("true")){
				dao.updateVersionSfqy("false",id);
			}
			dao.updateVersion(versiondescribe,code,sfqy,versionid);
		} catch (Exception e) {
			manager.rollback();
			return false;
		}
		return true;
	}
	
	/**
	 * 查询版本信息
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public Map getVersionXx(String id) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;

		manager.load();
		dao = manager.getDao(CodeDao.class);
		QueryInterface qif = dao.queryVersionxx();
		//默认查询条件
		qif.andEq("b.jlzt", "0");//0未删除，1已删除
		qif.andEq("b.id", id);
		List<DBMap> list = qif.select();
		qif.printSql();
		map.put("data", list);
		return map;

	}
	
	/**
	 * 初始化列表页查询方法
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public Map perform(Map params,String userid) throws Exception {
			HashMap map = new HashMap();
		try{
			Manager manager = new Manager();
			CodeDao dao = null;
	
			manager.load();
			dao = manager.getDao(CodeDao.class);
			ConvertHashMap map1 = new ConvertHashMap();
			map1.putAll(params);
			String code = map1.getString("code", "");//写的代码
			String input = map1.getString("input", "");//输入
			String output = map1.getString("output", "");//输出
			String versionid = map1.getString("versionid", "");//版本id
			String model_code = map1.getString("model_code", "");//模塊編碼
			
			String tj=code+input;
//			List<DBMap> data = dao.ceshi(tj);
//			map.put("data", data);
			
			
//			1、新建立一个类，继承并实现DanymicModuleFactory。其中实现 getDanymicModule(String code)方法，
//			用于传入 动态模块编码，从数据库中读取动态模块的数据，返回动态模块编码DanymicModule实体bean。
//			2、在下面的代码前实例化新建立的类，用setDanymicModuleFactory设置到DanymicModuleExecuterFactory实例中。
			
			com.ycframe.danymicmodule.DanymicModuleFactoryImpl modulefactory = new DanymicModuleFactoryImpl();
		
		 
			com.ycframe.danymicmodule.DanymicModuleExecuterFactory factory = new com.ycframe.danymicmodule.DanymicModuleExecuterFactory();
			factory.setDanymicModuleFactory(modulefactory);
			
			//获取动态代码执行器，传入参数是 动态代码模块的编码
			com.ycframe.danymicmodule.DanymicModuleExecuter module = factory.getModule(versionid);
			
			//执行动态模块，传入参数params 
			Map pa = com.ycframe.web.utils.JsonUtils.toMap(input);
			Object result = module.execute(pa);
			dao.insertPerform(IDUtils.GUID(),versionid,userid,new Date(),input,JSONUtils.toJSONString(result),"0");
			map.put("data", result);
			//以后下面这样的 catch不允许这样写。  自欺欺人啊？不允许报错？
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;

	}
	
	/**
	 * 查询日志信息
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public Map getLog(String orderCol ,String orderType,String zxr,String zxsj,String versionid) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;

		manager.load();
		dao = manager.getDao(CodeDao.class);
		QueryInterface qif = dao.getLog();
		//默认查询条件
		qif.andEq("a.jlzt", "0");//0未删除，1已删除
		if(StringUtils.isNoneBlank(zxsj)&&!"[]".equals(zxsj)&&!"null".equals(zxsj)){
			zxsj = zxsj.replace("\"", "");
			zxsj = zxsj.replace("[", "");
			zxsj = zxsj.replace("]", "");
			String[] fxsjarr = zxsj.split(",");
			qif = qif.andGreatEq("c.use_time", transDate2qs(fxsjarr[0],1) );
			if(fxsjarr.length>1){
				qif = qif.andLessEq("c.use_time", transDate2js(fxsjarr[1],1) );
			}
		}
		if(StringUtils.isNoneBlank(zxr)){
			qif.andLike("ry.xm", "%"+zxr+"%");
		}
		if(StringUtils.isNoneBlank(versionid)){
			qif.andEq("c.versionid", versionid);
		}
		if(StringUtils.isNoneBlank(versionid)&& StringUtils.isNoneBlank(orderType)){
			   if(orderType.equals("desc")){
				   qif.desc(orderCol);
			   }else if(orderType.equals("asc")){
				   qif.asc(orderCol);
			   }
		   }
//		if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
//		   }else{
//			   if(orderType.equals("desc")){
//				   qif.desc(orderCol);
//			   }else if(orderType.equals("asc")){
//				   qif.asc(orderCol);
//			   }
//		   }
		List<DBMap> list = qif.select();
		qif.printSql();
		map.put("data", list);
		return map;

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
			
		} catch (ParseException e) {
			
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
			
		} catch (ParseException e) {
			
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
			
		} catch (ParseException e) {
			
		}
		if(date == null){
			return "";
		}else{
			return sdf.format(date);
		}
	}
	
	/**
	 * 列表页删除
	 * @param xmlbid项目类别id
	 * @return
	 * @throws Exception
	 */
	public boolean delLog(String id) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		CodeDao dao = null;
		manager.load();
		dao = manager.getDao(CodeDao.class);
		int	i = dao.delLog(id);
		if (i > 0) {
			return true;
		} else {
			return false;
		}
	}
}
