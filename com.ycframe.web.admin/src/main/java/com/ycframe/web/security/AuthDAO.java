package com.ycframe.web.security;

import java.util.List;

import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.util.DBMap;
 
public interface AuthDAO extends Dao{
	@Sql("SELECT btn.anname,btn.anid,opbtn.gnid,gn.gndz from systembutton  btn "+
		 " INNER JOIN systemoperationbutton opbtn  on btn.id=opbtn.czanid and opbtn.jsid=? "+
		 " INNER JOIN systemgn gn on opbtn.gnid = gn.id where opbtn.jlzt='未删除'")
	@UseCache(true)
	public List<DBMap> getPermissions(String jsid); 
}
