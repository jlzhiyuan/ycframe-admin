package com.ycframe.web.admin.authority.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import com.ycframe.common.utils.DbUtils;
import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.admin.authority.dao.AuthorityDao;
import com.ycframe.web.common.exception.ServiceException; 

public class AuthorityService {
	

	String[] function = new String[] { "系统维护", "操作权限" };
	
	public HashMap getJsxx(String tj, int row, int page, String orderid,
			String ordertype) {
		Manager manager = DbUtils.getDatabase();
		AuthorityDao dao = null;

		try { 
			dao = manager.getDao(AuthorityDao.class);

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		int count = dao.getJsxxCount(tj);
		int ys = (count % row == 0) ? count / row : (count / row + 1);
		int newpage = page - 1;
		HashMap map = new HashMap();
		map.put("page", page);
		map.put("total", ys);
		map.put("records", count);
		DaoPage dp = null;
		if (StringUtils.isNoneBlank(orderid)) {
			dp = dao.getJsxx(tj, orderid, ordertype);
		} else {
			dp = dao.getJsxx(tj);
		}

		dp.setUseCache(false);
		dp.setPage(newpage);
		dp.setRows(row);
		map.put("rows", dp.getResults());
		return map;
	}

	public List<DBMap> getCzqxxx(String jsid, String order)
			throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);
			DaoPage dp = null;
			dp = dao.getCzqxxx(jsid, order);
			List<DBMap> list = dp.getResults();
			List<DBMap> list2 = new ArrayList<DBMap>();
			if (list.size() > 0) {
				for (int i = 0; i < list.size(); i++) {
					Integer PARENT1 = 0;
					DBMap dbMap = list.get(i);
					dbMap.put("acheckbox", dbMap.getInteger("acheckbox") == 1);
					String id = dbMap.getString("ID", "");
					String PARENT = dbMap.getString("PARENT");
					if (PARENT != null && !"".equals(PARENT)
							&& !"null".equals(PARENT)) {

						PARENT1 = Integer.valueOf(PARENT);
					}
					if (dbMap.get("name") != null
							&& !dbMap.get("name").equals("")) {
						String str = dbMap.get("name").toString().substring(0,
								dbMap.get("name").toString().length());
						List strlist = new ArrayList();
						String[] strArr = str.split(",");
						for (int j = 0; j < strArr.length; j++) {
							strlist.add(strArr[j]);
						}
						dbMap.remove("name");
						dbMap.put("name", strlist);
					}

					dbMap.put("id", id);
					dbMap.put("parent", PARENT1);
					list2.add(dbMap);
				}
			}
			List<DBMap> list3 = new ArrayList<DBMap>();
			for (int i = 0; i < list2.size(); i++) {
				DBMap dbMap = list2.get(i);
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
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误！");
		}

	}

	public boolean savedata(String id, String jsid, String gnid,
			String xzsjqxid) throws ServiceException {
		String success = null;
		String tj = "";
		int count = 0;

		if (!"".equals(jsid) && jsid != null && !"null".equals(jsid)) {
			if (StringUtils.isNotBlank(gnid) && !"null".equals(gnid)) {
				if (StringUtils.isNotBlank(xzsjqxid)
						&& !"null".equals(xzsjqxid)) {
					// System.out.println("进入插入角色方法："+System.currentTimeMillis());
					Manager manager = DbUtils.getDatabase();
					AuthorityDao dao = null;
					try { 
						dao = manager.getDao(AuthorityDao.class);
					} catch (Exception e) {
						e.printStackTrace();
						throw new ServiceException("数据操作错误！");
					}
					for (int i = 0; i < xzsjqxid.split(",").length; i++) {
						id = UUID.randomUUID().toString();
						tj = " VALUES('" + id + "','" + jsid.trim() + "','"
								+ gnid.trim() + "','"
								+ xzsjqxid.split(",")[i].trim() + "') ";
						count += dao.insertsjqxdata(tj);
					}
				}
			}
			// System.out.println("结束插入角色方法："+System.currentTimeMillis());
			if (xzsjqxid.split(",").length == count && count != 0) {
				return true;
			}
		} else {
			throw new ServiceException("未选择角色!");
		}
		return false;
	}

	public boolean saveczandata(String anid, String jsid, String gnid)
			throws ServiceException {
		HashMap success = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);
			if (!"".equals(jsid) && jsid != null && !"null".equals(jsid)) {
				List<DBMap> list = dao.getanid(jsid, gnid, anid);
				if (list.size() > 0) {
					int x = dao.deleteanid(jsid, gnid, anid);
					if (x > 0) {
						return true;
					} else {
						throw new ServiceException("数据操作错误!");
					}
				} else {

					String id = UUID.randomUUID().toString();
					String tj = " VALUES('" + id + "','" + jsid.trim() + "','"
							+ gnid.trim() + "','" + anid.trim() + "') ";
					int i = dao.insertczandataDemo(tj);
					if (i > 0) {
						return true;
					} else {
						throw new ServiceException("数据操作错误!");
					}
				}
			} else {
				throw new ServiceException("未选择角色!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}

	}

	public boolean deletedata(String jsid, String gnid, String xzsjqxid)
			throws ServiceException {
		try {
			String tj = "";
			int count = 0;
			if (!"".equals(jsid) && jsid != null && !"null".equals(jsid)) {
				if (StringUtils.isNotBlank(gnid) && !"null".equals(gnid)) {
					if (StringUtils.isNotBlank(xzsjqxid)
							&& !"null".equals(xzsjqxid)) {
						Manager manager = DbUtils.getDatabase();
						AuthorityDao dao = null; 
						dao = manager.getDao(AuthorityDao.class);
						for (int i = 0; i < xzsjqxid.split(",").length; i++) {
							tj = "  jsid = '" + jsid.trim() + "'  and gnid = '"
									+ gnid.trim() + "'  and sjqxid = '"
									+ xzsjqxid.split(",")[i].trim() + "' ";
							count += dao.deletedata(tj);
						}
					}
				}
				if (count > 0) {
					return true;
				} else {
					throw new ServiceException("数据操作错误!");
				}
			} else {
				throw new ServiceException("请先选择角色!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}
	}

	/*
	 * public String deleteczandata(String jsid,String gnid,String xzczanid){
	 * 
	 * String success= null; String tj=""; int count = 0;
	 * 
	 * Manager manager = new Manager(); AuthorityDao dao = null; try {
	 * manager.load(); dao = manager.getDao(AuthorityDao.class);
	 * 
	 * if(!"".equals(jsid) && jsid!=null && !"null".equals(jsid)){
	 * if(YC.Frame.Utils.StringUtils.isNotBlank(gnid) && !"null".equals(gnid)) {
	 * if(YC.Frame.Utils.StringUtils.isNotBlank(xzczanid) &&
	 * !"null".equals(xzczanid)) {
	 * //System.out.println("进入插入角色方法："+System.currentTimeMillis()); for (int i
	 * = 0; i < xzczanid.split(",").length; i++) { tj="  jsid = '"+jsid.trim()+
	 * "'  and gnid = '"+gnid.trim()+"'  and czanid = '"
	 * +xzczanid.split(",")[i].trim()+"' "; count+= dao.deleteczandata(tj); } }
	 * } if( count>0){ success = "\"已删除!\""; SystemInfoLog.log(function,
	 * SystemInfoLog.DELETE, SystemInfoLog.SUCESS, getIp()); } } else { success
	 * = "\"请先选择角色!\""; } } catch (Exception e) { SystemInfoLog.log(function,
	 * SystemInfoLog.DELETE, SystemInfoLog.ERROR, getIp()); e.printStackTrace();
	 * }
	 * 
	 * 
	 * return success; }
	 */

	/*
	 * public HashMap savegnids(String gnids,String jsid){
	 * 
	 * HashMap success = new HashMap();
	 * 
	 * try { String tj = ""; int count = 0;
	 * 
	 * Manager manager = new Manager(); AuthorityDao dao = null; manager.load();
	 * dao = manager.getDao(AuthorityDao.class);
	 * 
	 * if(!"".equals(jsid) && jsid!=null && !"null".equals(jsid)){ List<DBMap>
	 * list = dao.getjsgns(jsid); if(list.size()>0){ int x =
	 * dao.deletejsgns(jsid); if("".equals(gnids) || "null".equals(gnids) ||
	 * null==gnids){ success.put("state", "success"); success.put("note",
	 * "none"); } if(x>0){ if(YC.Frame.Utils.StringUtils.isNotBlank(gnids) &&
	 * !"null".equals(gnids)) { for (int i = 0; i < gnids.split(",").length;
	 * i++) { tj=" VALUES('"+gnids.split(",")[i].trim()+"','"+jsid.trim()+"') ";
	 * count+= dao.savegnids(tj); } } if(gnids.split(",").length == count ){
	 * success.put("state", "success"); success.put("note", "none");
	 * SystemInfoLog.log(function1, SystemInfoLog.PRESERVATION,
	 * SystemInfoLog.SUCESS, getIp()); } } }else{
	 * if(YC.Frame.Utils.StringUtils.isNotBlank(gnids) && !"null".equals(gnids))
	 * { for (int i = 0; i < gnids.split(",").length; i++) { tj=" VALUES('"
	 * +gnids.split(",")[i].trim()+"','"+jsid.trim()+"') "; count+=
	 * dao.savegnids(tj); } } success.put("state", "success");
	 * success.put("note", "none"); SystemInfoLog.log(function1,
	 * SystemInfoLog.PRESERVATION, SystemInfoLog.SUCESS, getIp()); } } else {
	 * success.put("state", "fail"); success.put("note", "请先选择角色!"); } return
	 * success; } catch (Exception e) { success.put("state", "fail");
	 * success.put("note", "error"); return success; }
	 * 
	 * }
	 */

	public boolean savegnids(String[] gnids, String jsid) throws ServiceException {
		try {
			String tj = "";
			int count = 0;
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);
			if (!"".equals(jsid) && jsid != null && !"null".equals(jsid)) {
				int x = dao.deletejsgns(jsid);
				if ("".equals(gnids) || "null".equals(gnids) || null == gnids) {
					throw new ServiceException("未选择功能!");
				}
				for (int i = 0; i < gnids.length; i++) {
					if(StringUtils.isNotBlank(gnids[i].trim())){
						tj = " VALUES('" + gnids[i].trim() + "','"
								+ jsid.trim() + "') ";
						count += dao.savegnids(tj);
					}
				}
				return true;

			} else {
				throw new ServiceException("未选择角色!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}

	}

	public boolean savesjqxs(String[] sjqxs, String jsid) throws ServiceException { 
		try {
			String tj = "";
			String id = null;
			int count = 0;
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);

			if (!"".equals(jsid) && jsid != null && !"null".equals(jsid)) {
				List<DBMap> list = dao.getjssjqxs(jsid);
				if (list.size() > 0) {
					int x = dao.deletejssjqxs(jsid);
					if ("".equals(sjqxs) || "null".equals(sjqxs)
							|| null == sjqxs) {
						throw new ServiceException("未选择数据权限!");
					}
					if (x > 0) {
						if ( !"null".equals(sjqxs)) {
							for (int i = 0; i < sjqxs.length; i++) {
								id = UUID.randomUUID().toString();
								tj = " VALUES('" + id + "','" + jsid.trim()
										+ "','" + sjqxs[i].trim()
										+ "') ";
								count += dao.savesjqxs(tj);
							}
						}
						if (sjqxs.length == count) {
							return true;
						}else{
							return false;
						}
					}else{
						return false;
					}
				} else {
					if ( !"null".equals(sjqxs)) {
						for (int i = 0; i < sjqxs.length; i++) {
							id = UUID.randomUUID().toString();
							tj = " VALUES('" + id + "','" + jsid.trim() + "','"
									+ sjqxs[i].trim() + "') ";
							count += dao.savesjqxs(tj);
						}
					}
					return true;
				}
			} else { 
				throw new ServiceException("未先选择角色!");
			} 
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}

	}

	public HashMap getAnxx(int size, int page, String jsid, String gnid,
			String tj) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);

			int count = dao.getAnxxCount(jsid, gnid, tj);
			int ys = (count % size == 0) ? count / size : (count / size + 1);
			int newpage = page - 1;
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);

			DaoPage dp = null;

			dp = dao.getAnxx(jsid, gnid, tj);
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(size);
			map.put("rows", dp.getResults());

			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}

	}

	public List<DBMap> getSjqxxx1(String jsid, String order) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			AuthorityDao dao = null; 
			dao = manager.getDao(AuthorityDao.class);
			DaoPage dp = null;
			dp = dao.getSjqxxx(jsid, order);
			return dp.getResults(); 
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}

	}
	
	
	public String dgzzjgtree() {  
		Manager manager = com.ycframe.common.utils.DbUtils.getDatabase();
		AuthorityDao dao = null;
		try { 
			dao = manager.getDao(AuthorityDao.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		String treeString = "";
		List list = dao.getJsxx();
		if (list != null && list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				Map obj = (Map) list.get(i);
				Map map = new HashMap();
				String id = obj.get("id").toString() == null ? "" : (String) obj.get("id").toString();
				String jsmc = obj.get("jsmc").toString() == null ? "" : (String) obj.get("jsmc").toString();
					if(i==(list.size()-1)){
						treeString += "  {\"label\": \" " + jsmc + "\","
						+ "   \"id\": \" " + id + " \","
						+ "   \"children\": []"
						+ "}";
					}else{
						treeString += "  {\"label\": \" " + jsmc + "\","
						+ "   \"id\": \" " + id + " \","
						+ "   \"children\": []"
						+ "},";
					}
			}
		}

		return treeString;
	}


}
