package com.ycframe.web.admin.role.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.query.inter.UpdateInterface;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.IDUtils;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.App;
import com.ycframe.web.admin.common.exception.ServiceException;
import com.ycframe.web.admin.role.dao.RoleDao;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.utils.SystemInfoLog; 

public class RoleService {
	public HashMap init(int row, int page) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = new Manager();
			RoleDao dao = null;
			manager.load();
			dao = manager.getDao(RoleDao.class);
			int count = dao.getRoleCountt("");
			int ys = (count % row == 0) ? count / row : (count / row + 1);
			int newpage = page;
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);
			
			DaoPage dp = null;
			dp = dao.getRole("");
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(row);
			map.put("tableData", dp.getResults());
			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据读取错误！");
		}

	}

	public HashMap initOrder(String orderCol, String orderType, int row,
			int page) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = new Manager();
			RoleDao dao = null;
			manager.load();
			dao = manager.getDao(RoleDao.class);
			int count = dao.getRoleCountt("");
			int ys = (count % row == 0) ? count / row : (count / row + 1);
			int newpage = page;
			String tj = "";
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);
			DaoPage dp = null;
			tj += " order by " + orderCol + " " + orderType;
			dp = dao.getRole(tj);
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(row);
			map.put("tableData", dp.getResults());
			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据读取错误！");
		}

	}

	public boolean open(String[] ids) throws ServiceException{ 
		Manager manager = new Manager();
		RoleDao dao = null;
		try {
			manager.load();
			dao = manager.getDao(RoleDao.class);
			long i = dao.update().set("zt", "1").andIn("id", Arrays.asList(ids)).update();
			if(i>0){
				return true;
			}else{
				throw new ServiceException("无操作数据！");
			}
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作异常！");
		} 
	}
	public boolean close(String[] ids) throws ServiceException{
		
		List<String> idlist = Arrays.asList(ids);
		if(idlist.contains("1")  || idlist.contains("0") ){ 
			throw new ServiceException("系统保留用户不允许操作。"); 
		}
		 
		Manager manager = new Manager();
		RoleDao dao = null;
		try {
			manager.load();
			dao = manager.getDao(RoleDao.class);
			long i = dao.update().set("zt", "0").andIn("id", Arrays.asList(ids)).update();
			if(i>0){
				return true;
			}else{
				throw new ServiceException("无操作数据！");
			}
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作异常！");
		} 
	}
	public HashMap getTableData( String XM, String YHM,String treeid,String jsid, String orderCol,String orderType,int row, int page) throws ServiceException {
		HashMap map = new HashMap();
		try {
			String tj = "";

			 
			if (XM != null && !"".equals(XM) && !"null".equals(XM)) {
				tj += " and ry.xm  like '%" + XM.trim() + "%'";
			}

			if (YHM != null && !"".equals(YHM) && !"null".equals(YHM)) {
				tj += " and ry.YHM  like '%" + YHM.trim() + "%'";
			}
			// 树节点的id，zzjg的jgbh
			if (StringUtils.isNotBlank(treeid)) {
				tj += "  and ryjl.EJDWBM = '" + treeid.trim() + "'";
			}
			
			HashMap data = new HashMap();
			 if(orderCol==null && orderType==null || orderCol.equals("") && orderType.equals("")){
				 tj +="";
			 }else{
				 tj +=" order by "+orderCol+" "+orderType;
			 }
			 
			
			
			Manager manager = new Manager();
			RoleDao dao = null;
			manager.load();
			dao = manager.getDao(RoleDao.class);
			int count = dao.getTableDataCount(jsid, tj);
			int ys = (count % row == 0) ? count / row : (count / row + 1);
			int newpage = page;
			map.put("state", "success");
			map.put("currentPage", page);
			// map.put("total", ys);
			map.put("total", count);
			DaoPage dp = null;
			dp = dao.getTableData(jsid, tj);
			dp.setUseCache(false);
			dp.setPage(newpage);
			dp.setRows(row);
			List<DBMap> list = dp.getResults(); 
			map.put("tableData", list);
			return map;
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据读取错误！");
		}

	}

	public boolean savedata(String yjlidpd, String id, String JSMC, String LX,
			String MS, String ZT) throws ServiceException {
		
		if("1".equals(id) || "0".equals(id)){ 
			throw new ServiceException("系统保留用户不允许操作。"); 
		}
		
		HashMap map = new HashMap();
		try {
			String success = null; 
			Manager manager = new Manager();
			RoleDao dao = null;
			manager.load();
			dao = manager.getDao(RoleDao.class); 
			if (JSMC == null || LX == null || LX == null || ZT == null) {
				throw new ServiceException("必须数据不完整!"); 
			} else {
				List list =new ArrayList();
				if(!com.ycframe.utils.StringUtils.isEmpty(id)) {
					list = dao.getdataid(id);
				}
				if (list.size() > 0) {
					int i = dao.updatedata(id, JSMC, LX, MS);
					if (i > 0) {
						return true;
					} else {
						throw new ServiceException("数据操作错误!"); 
					}
				} else {
					manager.startTransaction();
					int Pid = dao.getMaxId();
					int i = dao.insertData((Pid + 1), JSMC, LX, MS, ZT);
					if (i > 0) {
						manager.commit();
						return true;
					} else {
						manager.rollback();
						throw new ServiceException("数据操作错误!"); 
					}
				}
			} 
		}  catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据读取错误！");
		}

	}

	public boolean deleteJueses(String[] jsid) throws ServiceException {
		List<String> idlist = Arrays.asList(jsid);
		if(idlist.contains("1")  || idlist.contains("0") ){ 
			throw new ServiceException("系统保留用户不允许操作。"); 
		}
		
		HashMap map = new HashMap(); 
		try {
			Manager manager = new Manager();
			RoleDao dao = null;
			String success = null;
			manager.load();
			dao = manager.getDao(RoleDao.class);
 
			QueryInterface ii = dao.querySystemryjs();
			long count = ii.andIn("JSZID", Arrays.asList(jsid)).count();
 
			if (count > 0) {
				throw new ServiceException("已有人员分配到该角色下，请确保无人分配到该角色再进行删除！"); 
			}
			try{
				manager.startTransaction();
				UpdateInterface update = dao.updateSystemjsz();
				long i = update.set("jlzt", "已删除").andIn("id", Arrays.asList(jsid)).update();
				
				if (i > 0 ) { 
					long j = dao.updateJsgn().set("jlzt", "已删除").andIn("jszid", Arrays.asList(jsid)).update();
					long k = dao.updateJsan().set("jlzt", "已删除").andIn("jsid", Arrays.asList(jsid)).update(); 
					manager.commit(); 
					return true;
				} else { 
					manager.rollback();
					throw new ServiceException("数据操作异常！"); 
				}
			}catch(Exception e){
				e.printStackTrace();
				manager.rollback();
				throw new ServiceException("数据操作异常！"); 
			}	 
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作异常！");  
		}

	}

	public boolean addRyjs(String ryid, String jsid) throws ServiceException {
		try {
			Manager manager = new Manager();
			RoleDao dao = null;
			String success = null;
			manager.load();
			dao = manager.getDao(RoleDao.class); 
			int i = dao.addRyjs(ryid, jsid);
			if (i > 0) {
				return true;
			} else {
				throw new ServiceException("无数据操作！");  
			} 
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作异常！");  
		}
	}

	public boolean deleteRyjs(String ryid, String jsid) throws ServiceException {
		HashMap map = new HashMap();
		try {
			Manager manager = new Manager();
			RoleDao dao = null;
			manager.load();
			dao = manager.getDao(RoleDao.class);
			int i = dao.deleteRyjs(ryid, jsid);
			if (i > 0) {
				return true;
			} else { 
				throw new ServiceException(String.format("ryid:{%s} jsid:{%s} 无数据操作！", ryid,jsid));  
			} 
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("数据操作异常！");  
		}
	}

}
