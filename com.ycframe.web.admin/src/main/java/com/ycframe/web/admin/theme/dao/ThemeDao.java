package com.ycframe.web.admin.theme.dao;

import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.util.DBMap; 
public interface ThemeDao extends IDao  {
	
	@Sql("select paramName,paramValue from systemtheme where paramName=?")
	@UseCache(false)
	public DBMap getStyle(String username);
	
	@Sql(" select paramValue from systemtheme where paramName = 'programIcon' ")
	@UseCache(false)
	public String getIcon();
	
	@Sql("update systemtheme set paramValue = '${url}' where paramName = 'programIcon'")
	@UseCache(false)
	@Arguments({ "url"})
	public int updateIcon(String url);	
	
	
	@Sql("update systemtheme set paramValue = ? where paramName = ? ")
	@UseCache(false)
	public int updateStyle(String style,String user);
	
	@Sql("insert into systemtheme(id,paramName,paramValue) values(?,?,?) ")
	@UseCache(false)
	public int addStyle(String id,String user,String style);
	
	
	@Sql("select * from systemtheme")
	@UseCache(false)
	public Query queryStyle();
	
}
