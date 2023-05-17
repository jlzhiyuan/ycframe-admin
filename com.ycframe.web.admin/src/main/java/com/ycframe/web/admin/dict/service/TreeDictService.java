package com.ycframe.web.admin.dict.service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import com.ycframe.database.Manager;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.exception.DaoTypeErrorException;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.Update;
import com.ycframe.database.util.DBMap;
import com.ycframe.utils.StringUtils;
import com.ycframe.web.admin.dict.dao.DictDao;
import com.ycframe.web.common.exception.ServiceException;

public class TreeDictService {
	

	String[] function = new String[] { "系统维护", "字典维护" };
	
	public void saveDict(String id,String name,String code,int state,String memo) throws ServiceException  {
		
			Manager manager = new Manager();
		 
			try {
				manager.load();
			} catch (Exception e) { 
				e.printStackTrace();
				throw new ServiceException("数据源发生错误");
			}
			
			DictDao dao;
			try {
				dao = manager.getDao(DictDao.class);
			} catch (DaoTypeErrorException e) {
				e.printStackTrace();
				throw new ServiceException("数据操作对象获取发生错误");
			}
			
			HashMap<String,Object> map = new HashMap<String,Object>();
				
				Query dictIsExist;
				long dictIsExistCount;
				if(StringUtils.isNotBlank(id)){
					dictIsExist = dao.dictQuery();
					dictIsExist.andNotEq("id", id);
					dictIsExist.andEq("name", name);
					dictIsExist.andEq("jlzt", 0);
					try {
						dictIsExistCount = dictIsExist.count();
					} catch (SQLException e) {
						throw new ServiceException("数据获取错误");
					}
					if(dictIsExistCount > 0){
						throw new ServiceException("字典名称不能重复");
					}
					dictIsExist = dao.dictQuery();
					dictIsExist.andNotEq("id", id);
					dictIsExist.andEq("code", code);
					dictIsExist.andEq("jlzt", 0);
					try {
						dictIsExistCount = dictIsExist.count();
					} catch (SQLException e) {
						throw new ServiceException("数据获取错误");
					}
					if(dictIsExistCount > 0){
						throw new ServiceException("字典编码不能重复");
					}
					Update updateDict = dao.updateDict(name,code,state,memo,id);
					long updateDictCount;
					try {
						updateDictCount = updateDict.update();
					} catch (SQLException e) {
						throw new ServiceException("数据获取错误");
					}
					if(updateDictCount <= 0){
						throw new ServiceException("数据操作错误");
					}
				}else{
					dictIsExist = dao.dictQuery();
					dictIsExist.andEq("name", name);
					dictIsExist.andEq("jlzt", 0);
					try {
						dictIsExistCount = dictIsExist.count();
					} catch (SQLException e) {
						throw new ServiceException("数据获取错误");
					}
					if(dictIsExistCount > 0){
						throw new ServiceException("字典名称不能重复");
					}
					dictIsExist = dao.dictQuery();
					dictIsExist.andEq("code", code);
					dictIsExist.andEq("jlzt", 0);
					try {
						dictIsExistCount = dictIsExist.count();
					} catch (SQLException e) {
						throw new ServiceException("数据获取错误");
					}
					if(dictIsExistCount > 0){
						throw new ServiceException("字典编码不能重复");
					}
					id = UUID.randomUUID().toString();
					int insertDict = dao.insertDict(id,name,code,state,memo);
					if(insertDict <= 0){
						throw new ServiceException("数据操作错误");
					}
				}
		
		
	}
	
	public HashMap<String,Object> dictQuery(String name,String code,String state,int currentPage,int pageSize) throws ServiceException  {
		
		Manager manager = new Manager();
	 
		try {
			manager.load();
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据源发生错误");
		}
		
		DictDao dao;
		try {
			dao = manager.getDao(DictDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作对象获取发生错误");
		}
		
		Query dictQuery = dao.dictQuery();
		if(StringUtils.isNotBlank(name)){
			dictQuery.andLike("name", "%"+name+"%");
		}
		if(StringUtils.isNotBlank(code)){
			dictQuery.andLike("code", "%"+code+"%");
		}
		if(StringUtils.isNotBlank(state)){
			dictQuery.andEq("state", Integer.parseInt(state));
		}
		

		long count = 0;
		try {
			count = dictQuery.count();
		} catch (SQLException e) { 
			e.printStackTrace();
			throw new ServiceException("数据条数获取错误");
		}
	
		try { 
			DaoPage dictPage = dictQuery.page(currentPage, pageSize); 
			List<DBMap> dictList = dictPage.getResults();
			int rowNum = ((currentPage-1) * pageSize)+1; 
			for (DBMap dictMap : dictList) {
				dictMap.put("rowNum", rowNum);
				rowNum++;
			}
			HashMap<String,Object> map = new HashMap<String,Object>();
			map.put("total", count);
			map.put("currentPage", currentPage);
			map.put("dictTable", dictList);
			return map;
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据获取错误");
		}  
	
	
	}
	
	public void dictDel(String id) throws ServiceException  {
		
		Manager manager = new Manager();
	 
		try {
			manager.load();
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据源发生错误");
		}
		
		DictDao dao;
		try {
			dao = manager.getDao(DictDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作对象获取发生错误");
		}
		long dictDelCount;
		try { 
			Update dictDel = dao.delDict();
			dictDel.andEq("id", id);
			dictDelCount = dictDel.update();
			if(dictDelCount<=0){
				throw new ServiceException("数据操作错误");
			}
			Update dictItemDel = dao.delDictItem();
			dictItemDel.andEq("dictId", id);
			if(dictItemDel.update()<0){
				throw new ServiceException("数据操作错误");
			}
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作错误");
		}  
		
	
	
	}
	
	public void saveDictItem(String id,String name,String code,int state,int sort,int defaultVal,int style,String memo,String dictId) throws ServiceException  {
		
		Manager manager = new Manager();
	 
		try {
			manager.load();
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据源发生错误");
		}
		
		DictDao dao;
		try {
			dao = manager.getDao(DictDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作对象获取发生错误");
		}
		
		HashMap<String,Object> map = new HashMap<String,Object>();
			
		Query dictItemIsExist;
		long dictItemIsExistCount;
		if(StringUtils.isNotBlank(id)){
			dictItemIsExist = dao.dictItemQuery();
			dictItemIsExist.andNotEq("id", id);
			dictItemIsExist.andEq("name", name);
			dictItemIsExist.andEq("jlzt", 0);
			try {
				dictItemIsExistCount = dictItemIsExist.count();
			} catch (SQLException e) {
				throw new ServiceException("数据操作错误");
			}
			if(dictItemIsExistCount > 0){
				throw new ServiceException("字典项名不能重复");
			}
			dictItemIsExist = dao.dictItemQuery();
			dictItemIsExist.andNotEq("id", id);
			dictItemIsExist.andEq("code", code);
			dictItemIsExist.andEq("jlzt", 0);
			try {
				dictItemIsExistCount = dictItemIsExist.count();
			} catch (SQLException e) {
				throw new ServiceException("数据操作错误");
			}
			if(dictItemIsExistCount > 0){
				throw new ServiceException("字典项值不能重复");
			}
			
			try {
				Update updateDictItem = dao.updateDictItem(name,code,state,sort,defaultVal,style,memo,dictId,id);
				if(updateDictItem.update() <= 0){
					throw new ServiceException("数据操作错误");
				}
			} catch (SQLException e) {
				e.printStackTrace();
				throw new ServiceException("数据操作错误");
			}
			
		}else{
			dictItemIsExist = dao.dictItemQuery();
			dictItemIsExist.andEq("name", name);
			dictItemIsExist.andEq("jlzt", 0);
			try {
				dictItemIsExistCount = dictItemIsExist.count();
			} catch (SQLException e) {
				throw new ServiceException("数据操作错误");
			}
			if(dictItemIsExistCount > 0){
				throw new ServiceException("字典项名不能重复");
			}
			dictItemIsExist = dao.dictItemQuery();
			dictItemIsExist.andEq("code", code);
			dictItemIsExist.andEq("jlzt", 0);
			try {
				dictItemIsExistCount = dictItemIsExist.count();
			} catch (SQLException e) {
				throw new ServiceException("数据操作错误");
			}
			if(dictItemIsExistCount > 0){
				throw new ServiceException("字典项值不能重复");
			}
			id = UUID.randomUUID().toString();
			int insertDict = dao.insertDictItem(id,name,code,state,sort,defaultVal,style,memo,dictId);
			if(insertDict <= 0){
				throw new ServiceException("数据操作错误");
			}
		}
	
	
}
	
	public HashMap<String,Object> dictItemQuery(String dictId,String name,String code,String state,int currentPage,int pageSize) throws ServiceException  {
		
		Manager manager = new Manager();
	 
		try {
			manager.load();
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据源发生错误");
		}
		
		DictDao dao;
		try {
			dao = manager.getDao(DictDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作对象获取发生错误");
		}
		
		Query dictItemQuery = dao.dictItemQuery();
		if(StringUtils.isNotBlank(name)){
			dictItemQuery.andLike("name", "%"+name+"%");
		}
		if(StringUtils.isNotBlank(code)){
			dictItemQuery.andLike("code", "%"+code+"%");
		}
		if(StringUtils.isNotBlank(state)){
			dictItemQuery.andEq("state", Integer.parseInt(state));
		}
		if(StringUtils.isNotBlank(dictId)){
			dictItemQuery.andEq("dictId", dictId);
		}else{
			throw new ServiceException("参数获取错误");
		}
		

		long count = 0;
		try {
			count = dictItemQuery.count();
		} catch (SQLException e) { 
			e.printStackTrace();
			throw new ServiceException("数据条数获取错误");
		}
	
		try { 
			DaoPage dictItemPage = dictItemQuery.page(currentPage, pageSize); 
			List<DBMap> dictItemList = dictItemPage.getResults();
			int rowNum = ((currentPage-1) * pageSize)+1; 
			for (DBMap dictItemMap : dictItemList) {
				dictItemMap.put("rowNum", rowNum);
				rowNum++;
			}
			HashMap<String,Object> map = new HashMap<String,Object>();
			map.put("total", count);
			map.put("currentPage", currentPage);
			map.put("dictItemTable", dictItemList);
			return map;
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据获取错误");
		}  
	
	
	}
	
	public void dictItemDel(String id) throws ServiceException  {
		
		Manager manager = new Manager();
	 
		try {
			manager.load();
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据源发生错误");
		}
		
		DictDao dao;
		try {
			dao = manager.getDao(DictDao.class);
		} catch (DaoTypeErrorException e) {
			e.printStackTrace();
			throw new ServiceException("数据操作对象获取发生错误");
		}
		
		try { 
			Update dictItemDel = dao.delDictItem();
			dictItemDel.andEq("id", id);
			if(dictItemDel.update()<=0){
				throw new ServiceException("数据操作错误");
			}
		} catch (Exception e) { 
			e.printStackTrace();
			throw new ServiceException("数据操作错误");
		}  
	
	
	}



}
	
	
	
	
	
