package com.ycframe.web.utils;
import java.util.Date;
import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.inter.QueryInterface;
import com.ycframe.database.util.DBMap; 
public interface SystemInfoLotgDao extends IDao  {
	
	@Sql("insert into sys_log (id,username,model,model_handle,error_body,ip,message) values(?,?,?,?,?,?,?) ")
	@UseCache(false)           
	public int insertData(String id,String username,String  modulename,String  actionname,String  data,String  ip  ,String state);

}
