package com.ycframe.web.utils;
import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache; 
public interface SystemInfoLotgDao extends Dao  {
	
	@Sql("insert into sys_log (id,username,model,model_handle,error_body,osname,browser, ip,message) values(?,?,?,?,?,?,?,?,?) ")
	@UseCache(false)           
	public int insertData(String id,String username,String  modulename,String  actionname,String  data,String osname,String browser,String  ip  ,String state);

}
