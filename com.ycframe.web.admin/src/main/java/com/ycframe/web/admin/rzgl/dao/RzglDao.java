package com.ycframe.web.admin.rzgl.dao;

import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;

public interface RzglDao extends Dao  {

	@Sql("select id,DATE_FORMAT(jlsj,'%Y-%m-%d %H:%i:%s') jlsj,username,userid,model,model_handle,message,error_body,ip,osname,browser, case jlzt when '0' then '执行次数' else '已删除执行次数' end jlzt  from sys_log ")
	@UseCache(false)
	public Query init();
	
	@Sql("select id,DATE_FORMAT(jlsj,'%Y年%m月%d日 %h时%i分%s秒') jlsj,username,userid,model,model_handle,message,error_body,ip,osname,browser, case jlzt when '0' then '执行次数' else '已删除执行次数' end jlzt  from sys_log ")
	@UseCache(false)
	public Query init1();
	
	@Sql("delete from sys_log")
	@UseCache(false)
	public int clean();
	

	@Sql("insert into system_log_dttj (id,ryid,captions,mrxszd,cjxsdd,cxmsmc,sfqy,jlzt) values(?,?,?,?,?,?,?,?) ")
	@UseCache(false)
	public int insertDttj(String id, String userid, String captions, String mrxszd, String cjxsdd, String xlmc, String string,
			String string2);
	@Sql("select * from system_log_dttj ")
	@UseCache(false)
	public Query getCxms();
	
	@Sql("update system_log_dttj set sfqy=? where id = ? ")
	public int updateDttj(String sfqy,String id);
	
	@Sql("update system_log_dttj set sfqy=? where ryid = ? ")
	public int updateDttj1(String sfqy,String userid);
	
	@Sql("update system_log_dttj set jlzt='1' where id = ? ")
	public int deleteDttj(String id);
	
	
}
