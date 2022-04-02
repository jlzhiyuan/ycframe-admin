package com.ycframe.danymicmodule;

import java.util.List;

import com.ycframe.database.Manager;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap;

public class DanymicModuleFactoryImpl implements DanymicModuleFactory{

	public DanymicModule getDanymicModule(String versionid) throws DanymicModuleException {
		DanymicModule danymicModule=new DanymicModule();
		try {
			Manager manager = new Manager();
			DanymicModuleFactoryDao dao = null;
			manager.load();
			dao = manager.getDao(DanymicModuleFactoryDao.class);
			QueryInterface qif = dao.queryCode();
			//默认查询条件
			qif.andEq("a.id", versionid);
			List<DBMap> list = qif.select();
			danymicModule.setName(list.get(0).getString("model_name", ""));//模块名称
			danymicModule.setCode(list.get(0).getString("model_code", ""));//模块編碼
			danymicModule.setRemarks(list.get(0).getString("model_describe", ""));//模块描述
			danymicModule.setSourcecode(list.get(0).getString("code", ""));//執行代碼
			danymicModule.setVersion(list.get(0).getInt("version",0));//版本
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return danymicModule;
	}

}
