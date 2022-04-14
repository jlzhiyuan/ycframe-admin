package com.ycframe.web.admin.organization.service;
 
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.util.DBMap;
import com.ycframe.web.admin.organization.dao.OrganizationDao;

public class OrganizationService {
 	public List<DBMap> getOrgList(String orderCol,String orderType) throws Exception {
		 
			Manager manager = new Manager();
			OrganizationDao dao = null;
			manager.load();
			dao = manager.getDao(OrganizationDao.class);

			DaoPage dp = null;
			 if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				 dp = dao.listOrg("","order by px asc");
			 }else{
				 dp = dao.listOrg(""," order by "+orderCol+" "+orderType);
			 }
			
			List<DBMap> list = dp.getResults();
			List<DBMap> list2 = new ArrayList<DBMap>();
			if (list.size() > 0) {
				for (int i = 0; i < list.size(); i++) {
					DBMap dbMap = list.get(i);
					int parents = 0;
					Integer levels = 0;
					String id = dbMap.getString("ID", "");
					String level = dbMap.getString("LEVELS");
					if (level != null && !"".equals(level) && !"null".equals(level)) {
						levels = Integer.parseInt(level);
					}
					String parent = dbMap.getString("parent", "");
					/*
					 * if (parent != null && !"".equals(parent) &&
					 * !"null".equals(parent)) { parents = Integer.parseInt(parent);
					 * }
					 */
					boolean isLeaf = Boolean.valueOf(dbMap.getString("ISLEAF"));
					boolean expanded = Boolean.valueOf(dbMap.getString("EXPANDED"));
					String bmbh = dbMap.getString("id", "");
					dbMap.put("id", id);
					dbMap.put("level", levels);
					dbMap.put("parent", parent);
					dbMap.put("isLeaf", isLeaf);
					dbMap.put("expanded", expanded);
					dbMap.put("id", bmbh);
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
				if(list3.get(i).getString("parent").equals("0") || list3.get(i).getString("parent").equals("")){
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
 
			return listStr;
	
	}

	// insert
	public boolean saveOrg(String id, String deptName, String fjgbh, String memo,
			String deptnobm,String jc ,int px) throws Exception {
		Manager manager = new Manager();
		HashMap map = new HashMap();
			try {
				OrganizationDao dao = null;
				List<DBMap> dp = null;
				String bmbm = "";
				String bmbh = "";
				String newid = "";
				manager.load();
				dao = manager.getDao(OrganizationDao.class);
				String BMBH = "";
				String BMBM = "";
				String jgbh = "";
				int i = 0;
				if (!"".equals(fjgbh) && !"null".equals(fjgbh) && fjgbh != null) {
					String tj1 =	" and id ='"+fjgbh.trim()+"'";
					DBMap db = dao.select(tj1);
					if (db != null && db.size() > 0) {
						BMBH = db.getString("BMBH", "");
						BMBM = db.getString("BMBM", "");
						jgbh = db.getString("JGBH", "");
					}
				}
				manager.startTransaction();
				String newBHBH = BMBH + "-" + deptnobm;
				String[] arr = deptnobm.split("-");
				String newBHBM = BMBM + "-" + deptName;
				if (id != null && !"null".equals(id) && !"".equals(id)) {
					int ii = dao.checkName(deptName,id,fjgbh);
					if(ii>0){ 
						throw new Exception("部门名称已存在"); 
					}
					if(!id.equals("1")){
						i = dao.updateData(deptName, fjgbh.trim(), memo, jc,BMBH+"-"+arr[arr.length-1],newBHBM,px,id);
					}else{
						i = dao.updateData(deptName, memo, jc,px, id);
					}
					 
					if(i>0){ 
					}else{
						throw new Exception("保存错误"); 
					}
						
				} else {
					int a = dao.checkId(deptnobm);
					if(a>0){
						throw new Exception("部门编号重复!");  
					}
					int b = dao.checkName(deptName,fjgbh);
					if(b>0){ 
						throw new Exception("部门名称重复!");  
					}
					String uuid = UUID.randomUUID().toString();
					i = dao.insertDatas(uuid,deptnobm,deptName,deptnobm,fjgbh.trim(),memo,newBHBM,newBHBH,jc,px);
					if(i>0){ 
					}else{
						throw new Exception("保存错误！");  
					}
				}
				manager.commit();
				return true;
			} catch (Exception e) {
				e.printStackTrace();
				try {
					manager.rollback();
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				throw e;
			} 
	}
	
	public int selectid (){
		Manager manager = new Manager();
		OrganizationDao dao = null;
		try {
			manager.load();
			dao = manager.getDao(OrganizationDao.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	DBMap map  = dao.selectid("");
	String ID  = "";
	int id=0;
	if(map.size()>0){
		ID= map.getString("ID", "");
		if (ID != null && !"null".equals(ID) && !"".equals(ID)) {
			id  = Integer.parseInt(ID);
			id+=1;
		}
	}
		return id ;
	}
	

	
	// 删除
	public HashMap<String, Integer> delOrg(String[] ids) throws Exception {
		Manager manager = new Manager();
		OrganizationDao dao = null;
		HashMap<String,Integer> restlt=new HashMap<String,Integer>();
		restlt.put("is", 0);
		restlt.put("delcount", 0);
		manager.load();
		dao = manager.getDao(OrganizationDao.class);
		String tj = "";
		for (int j = 0; j < ids.length; j++) {
			
		String id=ids[j];
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
		int ii = dao.checkEmp(tj);
		if(ii<=0) 
		{
			int s=dao.deleteData(tj);
			int sl=(int)restlt.get("delcount");
			restlt.put("delcount", sl+s);
		}else 
		{
			restlt.put("is", 1);
		}
		}
		return restlt;
	/*	if(ii>0){
			throw new Exception("该部门存在人员，无法删除!");  
		}
		int i = dao.deleteData(tj);
		
		if (i > 0) {
			return true;
		} else {
			throw new Exception("删除失败!");  
		} */
		}
}
