package com.ycframe.danymicmodule;

import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.inter.QueryInterface;

public interface DanymicModuleFactoryDao extends IDao{

		@Sql("SELECT a.*,b.model_name,b.model_code,b.model_describe FROM  systemcodeversion a INNER JOIN systemcodeeditor b on a.zjlid=b.id ")
		@UseCache(false)
		public QueryInterface queryCode();
	
}
