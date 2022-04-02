package com.ycframe.web.admin.modules.service;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import com.ycframe.YCObject;
import com.ycframe.database.Executor;
import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.exception.DaoTypeErrorException;
import com.ycframe.database.query.QueryCondition;
import com.ycframe.database.query.Update;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.admin.common.exception.ServiceException;
import com.ycframe.web.admin.modules.dao.ModulesDao; 
public class ModulesService {
	String[] function = new String[] { "系统维护", "模块管理" };

	public List<DBMap> getModules(String orderCol,String orderType,String jsid) throws Exception { 
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			DaoPage dp = null;
			if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				 dp = dao.getMkgl(jsid,"ORDER BY gn.SXBH");
			 }else{
				 dp = dao.getMkgl(jsid," order by "+orderCol+" "+orderType);
			 }
			dp.setUseCache(false);
			List<DBMap> list = dp.getResults();
			List<DBMap> list2 = new ArrayList<DBMap>();
			if (list.size() > 0) {
				for (int i = 0; i < list.size(); i++) {
					DBMap dbMap = list.get(i);
					int parents = 0;
					if(dbMap.get("anmc")!=null && !dbMap.get("anmc").equals("")){
						String str = dbMap.get("anmc").toString().substring(0, dbMap.get("anmc").toString().length());
						List strlist = new ArrayList();
						String[] strArr = str.split(",");
						for(int j = 0; j < strArr.length; j++){
							strlist.add(strArr[j]);
						}
						dbMap.remove("anmc");
						dbMap.put("anmc", strlist);
					}
					String id =	dbMap.getString("ID", "");
					if(dbMap.getString("isComponent").equals("1")){
						dbMap.put("isComponent", true);
					}else{
						dbMap.put("isComponent", false);
					}
					String parent = dbMap.getString("parent", "");
					if (parent != null && !"".equals(parent) && !"null".equals(parent)) {
						parents = Integer.parseInt(parent);
					}
					dbMap.put("id", id);
					dbMap.put("parent", parents);
					list2.add(dbMap);
					
				}
			}
			List<DBMap> list3 = new ArrayList<DBMap>();
			for(int i = 0; i < list2.size(); i++){
				DBMap dbMap = list2.get(i);
				list3.add(dbMap);
			}
			List<DBMap> listStr = new ArrayList<DBMap>();
			for (int i = 0; i < list3.size(); i++) {
				if(list3.get(i).getString("parent").equals("1")){
					listStr.add(list3.get(i));
				}
				List<DBMap> list4 = new ArrayList<DBMap>();
				for (int j = 0; j < list2.size(); j++) {
					String a = list2.get(j).getString("parent");
					String b = list3.get(i).getString("id");
					if(a.equals(b)){
						list4.add(list2.get(j));
					}
				}
				list3.get(i).put("children", list4);
			} 
			return  listStr;
		} catch (Exception e) {
			throw new Exception(e.getCause());
		}
		
	}
	
	public HashMap getTreeSelect() {
		HashMap hashMap = new HashMap();
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			DaoPage dp = null;
			dp = dao.getMkgl();

			dp.setUseCache(false);
			List<DBMap> list = dp.getResults();
			List<DBMap> list2 = new ArrayList<DBMap>();
			if (list.size() > 0) {
				for (int i = 0; i < list.size(); i++) {
					DBMap dbMap = list.get(i);
					String a = dbMap.getString("GNDZ");
			/*		if(a==null || a.equals("")){*/
					
						//所有 除链接外树
						int parents = 0;
						String id =	dbMap.getString("ID", "");
						String parent = dbMap.getString("parent", "");
						if (parent != null && !"".equals(parent) && !"null".equals(parent)) {
							parents = Integer.parseInt(parent);
						}
						dbMap.put("id", id);
						dbMap.put("parent", parents);
						list2.add(dbMap);
				/*	}*/
					
					
				}
			}
			List<DBMap> list3 = new ArrayList<DBMap>();
			for(int i = 0; i < list2.size(); i++){
				DBMap dbMap = list2.get(i);
				String a = dbMap.getString("GNDZ");
				if(a==null || a.equals("")){
					list3.add(dbMap);
				}
				
			}
			List<DBMap> listStr = new ArrayList<DBMap>();
			for (int i = 0; i < list3.size(); i++) {
				if(list3.get(i).getString("parent").equals("0")){
					listStr.add(list3.get(i));
				}
				List<DBMap> list4 = new ArrayList<DBMap>();
				for (int j = 0; j < list2.size(); j++) {
					String a = list2.get(j).getString("parent");
					String b = list3.get(i).getString("id");
					if(a.equals(b)){
						list4.add(list2.get(j));
					}
				}
				list3.get(i).put("children", list4);
			}
			
			hashMap.put("list", listStr);
			hashMap.put("state", "success");
			return hashMap;
		} catch (Exception e) {
			hashMap.put("state", "fail");
			return hashMap;
		}
		
	}
	
	public List<DBMap> getMenu(String userid) throws Exception {
		HashMap hashMap = new HashMap();
		Manager manager = new Manager();
		ModulesDao dao = null;
		manager.load();
		dao = manager.getDao(ModulesDao.class);
		DaoPage dp = null;
		 
		List<DBMap> jsids = dao.getJsids(userid);

		StringBuffer sb = new StringBuffer("(");
		for (int i = 0; i < jsids.size(); i++) {
			if (i == 0) {
				sb.append("'" + jsids.get(i).getString("JSZID") + "'");
			} else {
				sb.append(",'" + jsids.get(i).getString("JSZID") + "'");
			}
		}
		sb.append(")");
		dp = dao.Menu(sb.toString());

		dp.setUseCache(false);
		List<DBMap> list = dp.getResults();
		List<DBMap> list2 = new ArrayList<DBMap>();
		if (list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				DBMap dbMap = list.get(i);
				int parents = 0;

				String id = dbMap.getString("ID", "");
				String parent = dbMap.getString("parent", "");
				if (parent != null && !"".equals(parent)
						&& !"null".equals(parent)) {
					parents = Integer.parseInt(parent);
				}
				dbMap.put("id", id);
				dbMap.put("parent", parents);
				list2.add(dbMap);

			}
		}
		List<DBMap> list3 = new ArrayList<DBMap>();
		for (int i = 0; i < list2.size(); i++) {
			DBMap dbMap = list2.get(i);
			Map map = new HashMap();
			map.put("title", dbMap.get("title"));
			map.put("icon", dbMap.get("icon"));
			dbMap.put("meta", map);
			dbMap.remove("title");
			dbMap.remove("icon");
			list3.add(dbMap);
		}
		List<DBMap> listStr = new ArrayList<DBMap>();
		for (int i = 0; i < list3.size(); i++) {
			if (list3.get(i).getString("parent").equals("1")) {
				listStr.add(list3.get(i));
			}
			List<DBMap> list4 = new ArrayList<DBMap>();
			for (int j = 0; j < list2.size(); j++) {
				String a = list2.get(j).getString("parent");
				String b = list3.get(i).getString("id");
				if (a.equals(b)) {
					list4.add(list2.get(j));
				}
			}
			list3.get(i).put("children", list4);
		}

		return listStr;

	}
	
	public List<DBMap> getComponent(String[] jsids) throws Exception {
 
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class); 
			List<DBMap> list =dao.getComponent().andIn("jsgn.jszid", Arrays.asList(jsids) ).andEq("gnlx", "0").select(); 
			List<DBMap> list3 = new ArrayList<DBMap>();
			for(int i = 0; i < list.size(); i++){
				DBMap dbMap = list.get(i);
				String a = dbMap.getString("path");
				if(a!=null && !a.equals("")){
					Map map = new HashMap();
					map.put("title", dbMap.get("title"));
					dbMap.put("meta", map);
					dbMap.put("name", dbMap.get("component"));
					dbMap.remove("title");
					list3.add(dbMap);
				}
			} 
			return list3;
		
	}

	
	
	/**
	 * 获取所有资源及所授予角色
	 * @return   gndz：功能地址     roles：角色名逗号分开
	 * @throws Exception
	 */
	public List<DBMap> getResourcesRoles() throws Exception {
		Manager manager = new Manager();
		ModulesDao dao = null;
		manager.load();
		dao = manager.getDao(ModulesDao.class); 
		List<DBMap> list =dao.getResourcesRoles().select();  
		return list; 
	}
	
	// 新增
	public boolean insert(String id, String FGNID, String GNMC, String SFXS, String GNDZ, String JDMS, String gnbh,
			String SXBH,String icon,String component,String jsPath,Boolean isComponent,String linkUrl,String gnlx) throws Exception {
		 
			String success = null;
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			String tj = "";
			tj += " and id= '" + FGNID.trim() + "' ";
			List<DBMap> data1 = dao.getGnbh(tj);
			String sjgnbh = data1.get(0).getString("gnbh");
			List<DBMap> data2 = dao.getID();
			String gnids = data2.get(0).getString("id");
			int gnid = Integer.parseInt(gnids);
			int ids = gnid + 1;
			id = Integer.toString(ids);
			gnbh = sjgnbh + "-" + id;
			int ii = dao.checkName(GNMC);
			if(ii>0){
				throw new Exception("功能名称不能重复！"); 
			}
			int i = dao.insertData(id, FGNID, GNMC, SFXS, GNDZ, JDMS, gnbh, SXBH,icon,component,jsPath,isComponent,linkUrl,gnlx);
			if (i > 0) {
				return true;
			}else{
				throw new Exception("数据保存错误！"); 
			} 
	}

	// 修改

		public boolean update(String FGNID, String GNMC, String SFXS, String GNDZ, String JDMS, String gnbh, String SXBH,
				String id,String icon,String component,String jsPath,Boolean isComponent,String linkUrl,String gnlx) throws Exception {
	 		try {
				String success = null;
				Manager manager = new Manager();
				ModulesDao dao = null;
				manager.load();
				dao = manager.getDao(ModulesDao.class); 
				String tj = "";
				if (id != null && !"".equals(id) && !"null".equals(id)) {
					tj += " and id= '" + FGNID.trim() + "'";
				}
				List<DBMap> data1 = dao.getGnbh(tj);
				String sjgnbh = data1.get(0).getString("gnbh");
				gnbh = sjgnbh + "-" + id;
				int ii = dao.checkName(GNMC,id);
				if(ii>0){
					throw new ServiceException( "功能名称已存在！"); 
				}
				int i = dao.updateData(FGNID, GNMC, SFXS, GNDZ, JDMS, gnbh, SXBH,icon,component,jsPath,isComponent,linkUrl,gnlx, id);
				if (i > 0) {
					return true;
				}else{
					throw new ServiceException( "数据保存错误！"); 
				}
				 
			} catch (Exception e) {
				throw new Exception("发生错误!"+e.getCause());  
			}
	}

	public boolean delete(String[] ids) throws Exception{
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			Update update = dao.deleteData();
//			QueryCondition child = new QueryCondition();
//			update.andEq("BA", 3).and(child.andEq("a", 1).andGreat("b", 5)).andGreat("BB", 4);
//			update.or(condition);
//			ba=3 or (a=1 and b >5) and bb>4
//			
			long count; 
			

			count = update.andIn("id", Arrays.asList(ids)).update(); 
			if(count>0)
				return true;
			else
				return false;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception("数据保存错误！");
		}
	}
	
	public boolean open(String[] ids) throws Exception{
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			Update update = dao.updateData(); 
			long count; 
			count = update.set("SFXS", "T").andIn("id", Arrays.asList(ids)).update(); 
			if(count>0)
				return true;
			else
				return false;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception("数据保存错误！");
		}
	}
	
	public boolean close(String[] ids) throws Exception{
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			Update update = dao.updateData(); 
			long count; 
			count = update.set("SFXS", "F").andIn("id", Arrays.asList(ids)).update(); 
			if(count>0)
				return true;
			else
				return false;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception("数据保存错误！");
		}
	}
	// 新增按钮保存

	public HashMap insertAnmc(String gnid, String anid) {
		HashMap map = new HashMap();
		try {
		String tj = "";
		int count = 0;

		if (!"".equals(anid) && anid != null && !"null".equals(anid)) {
			if (StringUtils.isNotBlank(gnid) && !"null".equals(gnid)) {

				Manager manager = new Manager();
				ModulesDao dao = null;
				
					manager.load();
					dao = manager.getDao(ModulesDao.class);
				
				for (int i = 0; i < anid.split(",").length; i++) {
					tj = " VALUES('" + UUID.randomUUID().toString() + "','" + gnid.trim() + "','" + anid.split(",")[i].trim() + "') ";
 					count += dao.insertAnmc(tj);
				}
				
			}
		}

		if (anid.split(",").length == count && count != 0) {
			map.put("state", "success");
			map.put("note", "none");
			//SystemInfoLog.log(function, SystemInfoLog.FPAN, SystemInfoLog.SUCESS, getIp());
		}

		else {
			map.put("state", "fail");
			map.put("note", "请先选择按钮!");
		}
		return map;
		} catch (Exception e) {
			map.put("state", "fail");
			map.put("note", "发生错误!");
			return map;
		}
	}

		// 删除
	public HashMap deleteData(String id, String gnid) {
		HashMap map = new HashMap();
		
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			String tj1 = "";
			if (gnid != null && !"".equals(gnid) && !"null".equals(gnid)) {
				tj1 += " and gnid in ('" + gnid.trim() + "')";
			}
			String tj = "";
			if (id != null && !"".equals(id) && !"null".equals(id)) {
				if (id.split(",").length > 1) {
					for (int i = 0; i < id.split(",").length; i++) {
						if ("".equals(tj)) {
							tj += "'" + id.split(",")[i].trim() + "'";
						} else {
							tj += ",'" + id.split(",")[i].trim() + "'";
						}

					}
				} else {
					tj = "'" + id.trim() + "'";
				}
			} else {
				tj = "''";
			}
			int i = dao.deleteData(tj, tj1);
			if(i>0){
				int ii = dao.deleteButonOperat(tj, tj1);
				if(ii>0){
					map.put("state", "success");
					map.put("note", "none");
				}else{
					map.put("state", "fail");
					map.put("note", "发生错误!");
				}
				
			}else{
				map.put("state", "fail");
				map.put("note", "发生错误!");
			}
			return map;
		} catch (Exception e) {
			map.put("state", "fail");
			map.put("note", "发生错误!");
			return map;
		}
		
	}
	
	public HashMap getLinkUrl(String gnmc) {
		HashMap map = new HashMap();
		
		try {
			Manager manager = new Manager();
			ModulesDao dao = null;
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			String i = dao.getLinkUrl(gnmc);
			map.put("state", "success");
			map.put("url", i);
			return map;
		} catch (Exception e) {
			map.put("state", "fail");
			map.put("note", "发生错误!");
			return map;
		}
	}
	
	public static String readFileContent(String fileName) {
	    File file = new File(fileName);
	    BufferedReader reader = null;
	    StringBuffer sbf = new StringBuffer();
	    try {
	        reader = new BufferedReader(new FileReader(file));
	        String tempStr;
	        while ((tempStr = reader.readLine()) != null) {
	            sbf.append(tempStr);
	        }
	        reader.close();
	        return sbf.toString();
	    } catch (IOException e) {
	        e.printStackTrace();
	    } finally {
	        if (reader != null) {
	            try {
	                reader.close();
	            } catch (IOException e1) {
	                e1.printStackTrace();
	            }
	        }
	    }
	    return sbf.toString();
	}
	
	public HashMap initNecessaryDataTable() {
		HashMap map = new HashMap();
		
		try {
			Manager managerd = new Manager();
			Executor esx = managerd.getExecutor();
			String pathBody =	YCObject.getProjectClassPath();
			String sqlString = readFileContent(pathBody + "all_datatable.sql");
			String[] sqlArray = sqlString.split(";");
			for (String sql : sqlArray) {
				int sqlState = esx.update(sql);
				System.out.println("语句执行成功！");
			}
			map.put("state", "success");
			return map;
		} catch (Exception e) {
			map.put("state", "fail");
			map.put("note", "发生错误!");
			return map;
		}
	}
	
	public List<DBMap> getBtnData(String id) throws ServiceException{
		Manager manager = new Manager();
		ModulesDao dao = null;
		List<DBMap> list = null; 
		try {
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			list = dao.getAnList(id); 
		} catch (DaoTypeErrorException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("获取数据错误");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("获取数据错误");
		}
		return list;
	}
	
	
	
	public List<DBMap> getAllAN() throws ServiceException{
		Manager manager = new Manager();
		ModulesDao dao = null;
		List<DBMap> list = null; 
		try {
			manager.load();
			dao = manager.getDao(ModulesDao.class);
			list = dao.getAllanList(); 
		} catch (DaoTypeErrorException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("获取数据错误");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("获取数据错误");
		}
		return list;
	}
	

	
}