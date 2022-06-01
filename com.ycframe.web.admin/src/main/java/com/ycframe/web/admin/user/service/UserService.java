package com.ycframe.web.admin.user.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.exception.DaoTypeErrorException;
import com.ycframe.database.query.Update;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.user.dao.UserDao;
import com.ycframe.web.common.exception.ServiceException;
import com.ycframe.web.common.pojo.UserInfo;
import com.ycframe.common.utils.DbUtils;
import com.ycframe.web.utils.PasswordUtils;

public class UserService {
	String[] function = new String[]{"系统维护", "密码管理"};

	// 返填
	public DBMap getUserByName(String yhm) throws Exception {
		Manager manager = new Manager();
		UserDao dao = null;
		List<DBMap> data = null;
		dao = manager.getDao(UserDao.class);
		data = dao.getUser(yhm);
		if (data.size() > 0) {
			return data.get(0);
		}
		return null;
	}

	public DBMap getUserById(String id) throws ServiceException {
		try {
			Manager manager = new Manager();
			UserDao dao = null;
			DBMap data = null;
			dao = manager.getDao(UserDao.class);
			data = dao.getUserById(id);
			return data;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new ServiceException("获取用户错误");
		}

	}
	public List<DBMap> listOrg(String tj) throws Exception {
		Manager manager = DbUtils.getDatabase();
		UserDao dao = null; 
		dao = manager.getDao(UserDao.class);
		DaoPage dp = null;
		dp = dao.getBmglxx(tj);
		List<DBMap> list = dp.getResults();
		List<DBMap> list2 = new ArrayList<DBMap>();
		if (list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				DBMap dbMap = list.get(i);
				int parents = 0;
				Integer levels = 0;
				String id = dbMap.getString("ID", "");
				String parent = dbMap.getString("parent", "");
				dbMap.put("id", id);
				dbMap.put("parent", parent);
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
			if (list3.get(i).getString("parent").equals("0")
					|| list3.get(i).getString("parent").equals("")) {
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
	public HashMap getRyglService(Map<String, String> params, int row, int page,
			HashMap<String, UserInfo> userInfo) throws ServiceException {
		params.get("orderCol");
		params.get("orderType");
		params.get("row");
		params.get("page");
		String userName = params.get("userName");
		String empCode = params.get("empCode");
		String sex = params.get("sex");
		String telepone1 = params.get("telepone1");
		String jsmc = params.get("jsmc");
		String yhzt = params.get("yhzt");
		String treeid = params.get("treeid");
		String tj = "";
		if (userName != null && !"".equals(userName)
				&& !"null".equals(userName)) {
			tj += " and d.xm  like '%" + userName.trim() + "%'";
		}
		if (empCode != null && !"".equals(empCode) && !"null".equals(empCode)) {
			tj += " and a.empCode  like '%" + empCode.trim() + "%'";
		}
		if (sex != null && !"".equals(sex) && !"null".equals(sex)) {
			tj += "  and s.id = '" + sex.trim() + "'";
		}
		if (telepone1 != null && !"".equals(telepone1)
				&& !"null".equals(telepone1)) {
			tj += " and a.jc  like '%" + telepone1.trim() + "%'";
		}
		if (jsmc != null && !"".equals(jsmc) && !"null".equals(jsmc)) {
			tj += " and c.RYID in (select ryid from systemryjs where JSZID = '" + jsmc.trim() + "')";
		}
		if (yhzt != null && !"".equals(yhzt) && !"null".equals(yhzt)) {
			tj += " and d.YHZT = '" + yhzt.trim() + "'";
		}
		// 树节点的id，zzjg的jgbh
		if (com.ycframe.utils.StringUtils.isNotBlank(treeid)) {
			tj += "  and b.id = '" + treeid.trim() + "'";
		}

		HashMap map = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			UserDao dao = null; 
			dao = manager.getDao(UserDao.class);
			int count = dao.getRyglCount(tj);
			int ys = (count % row == 0) ? count / row : (count / row + 1);
			int newpage = page;
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);
			DaoPage dp = null;
			dp = dao.getRyglxx(tj, "");
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(row);
			List<DBMap> list = dp.getResults();
			List<DBMap> listz = new ArrayList<DBMap>();
			for (int i = 0; i < list.size(); i++) {
				// 获取每一条数据
				DBMap db = list.get(i);
				// 获取每个用户名
				String xm = db.getString("YHM", "");
				// 判断用户是不是在在线
				UserInfo user = userInfo.get(xm);

				if (user != null) {
					db.put("user", "是");
				} else {
					db.put("user", "否");
				}
				if (db.get("js") != null && !db.get("js").equals("")) {
					String str = db.get("js").toString().substring(0,
							db.get("js").toString().length());
					List strlist = new ArrayList();
					String[] strArr = str.split(",");
					for (int j = 0; j < strArr.length; j++) {
						strlist.add(strArr[j]);
					}
					db.remove("js");
					db.put("js", strlist);
				}

				listz.add(db);

			}
			map.put("tableData", listz);
			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("读取错误");
		}
	}
	public HashMap getRyglServiceOrder(Map<String, String> params,
			String orderCol, String orderType, int row, int page,
			HashMap<String, UserInfo> userInfo) throws ServiceException {
		params.get("orderCol");
		params.get("orderType");
		params.get("row");
		params.get("page");
		String userName = params.get("userName");
		String empCode = params.get("empCode");
		String sex = params.get("sex");
		String telepone1 = params.get("telepone1");
		String jsmc = params.get("jsmc");
		String yhzt = params.get("yhzt");
		String treeid = params.get("treeid");
		String tj = "";
		if (userName != null && !"".equals(userName)
				&& !"null".equals(userName)) {
			tj += " and d.xm  like '%" + userName.trim() + "%'";
		}
		if (empCode != null && !"".equals(empCode) && !"null".equals(empCode)) {
			tj += " and a.empCode  like '%" + empCode.trim() + "%'";
		}
		if (sex != null && !"".equals(sex) && !"null".equals(sex)) {
			tj += "  and s.id = '" + sex.trim() + "'";
		}
		if (telepone1 != null && !"".equals(telepone1)
				&& !"null".equals(telepone1)) {
			tj += " and a.jc  like '%" + telepone1.trim() + "%'";
		}
		if (jsmc != null && !"".equals(jsmc) && !"null".equals(jsmc)) {
			tj += " and c.RYID in (select ryid from systemryjs where JSZID = '"
					+ jsmc.trim() + "')";
		}

		if (yhzt != null && !"".equals(yhzt) && !"null".equals(yhzt)) {
			tj += " and d.YHZT = '" + yhzt.trim() + "'";
		}

		// 树节点的id，zzjg的jgbh
		if (com.ycframe.utils.StringUtils.isNotBlank(treeid)) {
			tj += "  and b.id = '" + treeid.trim() + "'";
		}

		HashMap map = new HashMap();
		try {
			Manager manager = DbUtils.getDatabase();
			UserDao dao = null; 
			dao = manager.getDao(UserDao.class);
			int count = dao.getRyglCount(tj);
			int ys = (count % row == 0) ? count / row : (count / row + 1);
			int newpage = page;

			String orderTj = "";
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);
			DaoPage dp = null;
			orderTj += " order by " + orderCol + " " + orderType;
			dp = dao.getRyglxx(tj, orderTj);
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(row);
			List<DBMap> list = dp.getResults();
			List<DBMap> listz = new ArrayList<DBMap>();
			for (int i = 0; i < list.size(); i++) {
				// 获取每一条数据
				DBMap db = list.get(i);
				// 获取每个用户名
				String xm = db.getString("YHM", "");
				// 判断用户是不是在在线
				UserInfo user = userInfo.get(xm);

				if (user != null) {
					db.put("user", "是");
				} else {
					db.put("user", "否");
				}
				if (db.get("js") != null && !db.get("js").equals("")) {
					String str = db.get("js").toString().substring(0,
							db.get("js").toString().length());
					List strlist = new ArrayList();
					String[] strArr = str.split(",");
					for (int j = 0; j < strArr.length; j++) {
						strlist.add(strArr[j]);
					}
					db.remove("js");
					db.put("js", strlist);
				}
				/*
				 * String bmbh = db.getString("bmbh", ""); String jgmc =
				 * db.getString("jgmc", ""); String jgmcs = ""; StringBuffer sb
				 * = new StringBuffer(); if (bmbh != null && !"".equals(bmbh) &&
				 * !"null".equals(bmbh)) { String bmhbs[] = bmbh.split("-"); if
				 * (bmhbs.length == 1) { db.put("JGMC", jgmc); } else {
				 * StringBuffer str = new StringBuffer(); ; for (int s = 0; s <
				 * bmhbs.length; s++) { String ss = bmhbs[s]; List<DBMap> list1
				 * = dao.bmbh(ss); if (list1.size() > 0) { DBMap map1 =
				 * list1.get(0); String jgmsc = map1.getString("jgmc", ""); if
				 * (!"".equals(jgmsc) && !"null".equals(jgmsc) && jgmsc != null)
				 * { String mc = jgmsc + "-";
				 * 
				 * str.append(mc); } } } String aa = str.toString();
				 * //db.put("JGMC", aa.substring(5, aa.length() - 1)); } }
				 */

				listz.add(db);

			}
			map.put("tableData", listz);
			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("读取错误");
		}

	}

	public List<DBMap> listRole() throws ServiceException {
		Manager manager = DbUtils.getDatabase();
		UserDao dao = null;
		HashMap map = new HashMap();
		try { 
			dao = manager.getDao(UserDao.class);
			List<DBMap> list = dao.getRyJsSelect();
			dao = manager.getDao(UserDao.class);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("读取错误");
		}

	}

	public boolean close(String[] ids) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = new Manager();
			UserDao dao = null;
			dao = manager.getDao(UserDao.class);
			Update update = dao.update();
			long count = update.set("YHZT", "用户锁定")
					.andIn("id", Arrays.asList(ids)).update();
			return count > 0;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据更新错误");
		}
	}

	public boolean open(String[] ids) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = new Manager();
			UserDao dao = null;
			dao = manager.getDao(UserDao.class);
			Update update = dao.update();
			long count = update.set("YHZT", "正常")
					.andIn("id",
							Arrays.asList(new String[]{
									"50e26c01-8c5e-4140-803c-192430c4cc88"}))
					.printSql().update();
			return count > 0;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据更新错误");
		}
	}

	public Map getRoleData(String id, int ipagesize, int pageno)
			throws ServiceException {
		Manager manager = new Manager();
		UserDao dao = null;
		Map map = new HashMap();

		try {
			dao = manager.getDao(UserDao.class);
			if (!"a".equals(id) && !"null".equals(id)) {
				List<DBMap> list = dao.findById(id);
				if (list != null) {
					if (list.size() > 0) {
						DBMap map1 = list.get(0);
						String glry = map1.getString("GLRY", "");
						int count = dao.getRyJsCount(glry);
						int ys = (count % ipagesize == 0)
								? count / ipagesize
								: (count / ipagesize + 1);
						int newpage = pageno;
						map.put("currentPage", pageno);
						// map.put("total", ys);
						map.put("total", count);
						DaoPage dp = null;
						dp = dao.getRyJs(glry);
						dp.setUseCache(false);
						dp.setPage(newpage);
						dp.setRows(ipagesize);
						map.put("tableData", dp.getResults());
					}
				}

			} else {
				id = "";
				int count = dao.getRyJsCount(id);
				int ys = (count % ipagesize == 0)
						? count / ipagesize
						: (count / ipagesize + 1);
				int newpage = pageno;
				map.put("currentPage", pageno);
				// map.put("total", ys);
				map.put("total", count);
				DaoPage dp = null;
				dp = dao.getRyJs(id);
				dp.setUseCache(false);
				dp.setPage(newpage);
				dp.setRows(ipagesize);
				map.put("tableData", dp.getResults());
			}
		} catch (DaoTypeErrorException e) {
			throw new ServiceException("数据操作错误");
		}
		return map;
	}

	public boolean savedata(String id, String deptID, String xingming, String YHM,
			String empCode, String sex, String Telepone1, String Telepone2,String zy,
			String ids[]) throws ServiceException {
		Manager manager = null;
		try {
			Map map = new HashMap();
			manager = DbUtils.getDatabase(); 
			List<DBMap> dp = null;
			String newid = ""; 
			

		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作错误!"); 
		}
		
		
		UserDao dao;
		try {
			dao = manager.getDao(UserDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作错误!"); 
		}
		try {
			if ("".equals(deptID) || "".equals(xingming) || "".equals(empCode)
					|| "".equals(sex) || "".equals(Telepone1)) {
	
			} else { 
				manager.startTransaction(); 
				try { 
					if (ids.length == 0) {
						manager.rollback();
						throw new ServiceException("人员角色不可为空!");
					}
	
					if (!"null".equals(id) && id != null && !"".equals(id)) {
						
						//修改用户信息
//						List data1 = dao.findByYHM(xingming, id, deptID);
//						if (!data1.isEmpty()) { 
//							manager.rollback();
//							throw new ServiceException("用户名已经存在!");
//						}
	
						// ejdwbm=?,xm=?,userName=?,empCode=?,sex=?
						// ,Telepone1=?,Telepone2=?
						int i = dao.updatetryjl(deptID, xingming, YHM, sex,
								Telepone1, Telepone2,zy, id);
						if (i > 0) {
							dao.updatery1(xingming, empCode);
							// 修改数据
							List<DBMap> list = dao.findById(empCode);
							if (list != null) {
								DBMap map2 = list.get(0);
								String newId = map2.getString("GLRY", "");
								dao.updateJs(newId);
								for (int k = 0; k < ids.length; k++) {
									String jszid = ids[k];
									if(StringUtils.isNotBlank(jszid)){
										dao.insertJs(newId, jszid);
									}
								}
							}
	
						} else {
							manager.rollback();
							throw new ServiceException("更新发生错误!");
						}
					} else {
						//新增用户信息
						List data1 = dao.findByYHM(YHM);
						if (!data1.isEmpty()) {
							manager.rollback(); 
							throw new ServiceException("用户名已经存在!");
						}
//						List data2 = dao.findByDlm(YHM);
//						if (!data2.isEmpty()) {
//							manager.rollback(); 
//							throw new ServiceException("登录名已经存在!");
//						}
//						List data = dao.findByCode(empCode);
//						if (!data.isEmpty()) {
//							manager.rollback(); 
//							throw new ServiceException("人事编码已经存在!");
//						}
						
						if (!"".equals(empCode)) {
							// 初始化默认密码
							String possword = "Sys_0000"; 
							String mm = PasswordUtils.getScrectPassword(possword);
							String ryid = com.ycframe.utils.IDUtils.GUID();
							int ii = dao.insertry(ryid, xingming, YHM, mm, mm,
									"");
	
							if (ii > 0) {
								String pid = com.ycframe.utils.IDUtils.GUID();
								// 将id 添加到人员简历表中的rygl字段，做关联
								// id,ejdwbm,xm,userName,GlRY,empCode,sex,Telepone1,Telepone2,mmcode
								int j = dao.insertryjl(pid, deptID, xingming,
										YHM, ryid, empCode, sex, Telepone1,
										Telepone2,zy);
	
								if (j > 0) {
									// 给人员添加角色
									if (ids.length > 0) {
	
										List<DBMap> list = dao
												.findById(empCode);
										if (list.size() > 0) {
											DBMap map2 = list.get(0);
											String newId = map2
													.getString("GLRY", "");
											dao.updateJs(newId);
											for (int i = 0; i < ids.length; i++) {
												String jszid = ids[i];
												if(StringUtils.isNotBlank(jszid)){
													dao.insertJs(newId, jszid); 
												} 
											}
										}
									}
	//								map.put("state", "success");
	//								map.put("note", "none");
	//								map.put("id", pid);
								} else {
									manager.rollback(); 
									throw new ServiceException("数据保存错误!");
								}
							} 
						}
	
					}
					manager.commit();
					return true;
				} catch (Exception e) { 
					manager.rollback();
					e.printStackTrace();
					throw new ServiceException(e.getMessage());
				}
			}
		
		} catch (SQLException e) {
 			e.printStackTrace();
			throw new ServiceException("数据操作错误!");
		}
		return false;
	}
	
	/**
	 * 修改当前登录人密码
	 * @return
	 * @throws Exception
	 */
	public boolean mmxg(String userid,String mm) throws Exception {

		HashMap map = new HashMap();
		Manager manager = DbUtils.getDatabase();
		UserDao dao = null; 
		dao = manager.getDao(UserDao.class);
		
		mm = PasswordUtils.getScrectPassword(mm);
		
		int i = 0;
		
		i = dao.xgdqddrmm(mm, mm, userid);
		
		if(i>0){
			return true;
		}else{
			return false;
		}
		

	}
	
	/**
	 * 修改当前登录人个人信息
	 * @return
	 * @throws Exception
	 */
	public boolean grxxxg(String userid,String tel1,String tel2,String name) throws Exception {

		HashMap map = new HashMap();
		Manager manager = DbUtils.getDatabase();
		UserDao dao = null;
 
		dao = manager.getDao(UserDao.class);
		
		int i = 0;
		manager.startTransaction();
		i = dao.grxxxg(tel1,tel2,name,name,userid);
		i += dao.grxxxg2(name, userid);
		
		if(i>1){
			manager.commit();
			return true;
		}else{
			manager.rollback();
			return false;
		}
		

	}
	
	public boolean updatePassword(String ids) throws Exception {

		HashMap map = new HashMap();
		Manager manager = DbUtils.getDatabase();
		UserDao dao = null;
		String possword = "Sys_0000";
		String mm = PasswordUtils
				.getScrectPassword(possword); 
		dao = manager.getDao(UserDao.class);
		String[] idss = ids.split(",");
		
		int i = 0;
		manager.startTransaction();
		for(String s:idss){
			i = dao.xgdqddrmm2(mm, mm, s);
			if(!(i>0)){
				manager.rollback();
				return false;
			}
		}
		
		if(i>0){
			manager.commit();
			return true;
		}else{
			manager.rollback();
			return false;
		}
		

	}
}
