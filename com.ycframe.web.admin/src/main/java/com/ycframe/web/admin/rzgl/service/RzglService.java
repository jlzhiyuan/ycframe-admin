package com.ycframe.web.admin.rzgl.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ycframe.utils.IDUtils;
import com.ycframe.utils.StringUtils;
import com.ycframe.database.Manager;
import com.ycframe.database.exception.DaoTypeErrorException;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap;
import com.ycframe.web.admin.common.exception.ServiceException;
import com.ycframe.web.admin.rzgl.dao.RzglDao;

public class RzglService {

	public Map init(String orderCol,String orderType,String model, String username,String jlsj1,String jlsj2,int page, int pageSize,String model_handle,String message,String ip) {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		RzglDao dao = null;
		try {
			manager.load();
			dao = manager.getDao(RzglDao.class);
			QueryInterface qif = dao.init();
			//默认查询条件
	//		qif.andEq("jlzt", "0");//0未删除，1已删除
			
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

	public void clean() throws ServiceException{
		Manager manager = new Manager();
		RzglDao dao = null;
		try {
			manager.load();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("数据源发生错误。"); 
		}
		try {
			dao = manager.getDao(RzglDao.class); 
		} catch (DaoTypeErrorException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("接口发生错误。"); 
		}
		try {
			dao.clean(); 
		}catch (Exception e) {
			throw new ServiceException("执行清除发生错误。"); 
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
	 * 初始化列表页查询方法
	 * @param xmlb
	 * @param page页数
	 * @param pageSize总条数
	 * @return
	 * @throws Exception
	 */
	public boolean savedtttj(String captions,String mrxszd,String cjxsdd,String xlmc,String userid) throws Exception {
		int k=0;
		try{
			HashMap map = new HashMap();
			Manager manager = new Manager();
			RzglDao dao = null;
			manager.load();
			dao = manager.getDao(RzglDao.class);
			String id=IDUtils.GUID();
			
			k=dao.insertDttj(id,userid,captions,mrxszd,cjxsdd,xlmc,"1","0");
		
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		if(k>0){
			return true;
		}else{
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
	public Map getmsCxms(String userid) throws Exception {

		HashMap map = new HashMap();
		Manager manager = new Manager();
		RzglDao dao = null;
		List<DBMap> list=null;
		manager.load();
		dao = manager.getDao(RzglDao.class);
		QueryInterface qif = dao.getCxms();
		qif.andEq("ryid", userid);
		qif.andEq("jlzt", "0");
		qif.andEq("sfqy", "0");
		list = qif.select();
		qif.printSql();
		map.put("data", list);
		return map;

	}
	
	 /**
		 * 动态统计模式修改方法
		 */
		public boolean updatetttj(String id,String userid) throws Exception {
			int k=0;
			try{
				HashMap map = new HashMap();
				Manager manager = new Manager();
				RzglDao dao = null;
				manager.load();
				dao = manager.getDao(RzglDao.class);
				int k1=dao.updateDttj1("1",userid);
				if(k1>0){
					k=dao.updateDttj("0",id);
				}
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
			if(k>0){
				return true;
			}else{
			 return false;
			}
		}
		
		/**
		 * 动态统计模式修改方法
		 */
		public boolean deltetttj(String id) throws Exception {
			int k=0;
			try{
				HashMap map = new HashMap();
				Manager manager = new Manager();
				RzglDao dao = null;
				manager.load();
				dao = manager.getDao(RzglDao.class);
				
				k=dao.deleteDttj(id);
			
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
			if(k>0){
				return true;
			}else{
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
		public Map getCxms(String xlmc,String userid) throws Exception {

			HashMap map = new HashMap();
			Manager manager = new Manager();
			RzglDao dao = null;
			List<DBMap> list=null;
			manager.load();
			dao = manager.getDao(RzglDao.class);
			QueryInterface qif = dao.getCxms();
			if(StringUtils.isNoneBlank(xlmc)){
				qif.andLike("cxmsmc", "%"+xlmc+"%");
			}
			qif.andEq("ryid", userid);
			qif.andEq("jlzt", "0");
			list = qif.select();
			map.put("data", list);
			return map;

		}
	
}
