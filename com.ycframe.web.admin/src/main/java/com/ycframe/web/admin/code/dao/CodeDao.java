package com.ycframe.web.admin.code.dao;

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
public interface CodeDao extends IDao  {

	@Sql("select *, "
		+"	(select count(*) from systemcodeversion a where systemcodeeditor.id=a.zjlid and a.jlzt='0') versioncount "
		+"  from systemcodeeditor")
	@UseCache(false)
	public QueryInterface init();
	
	@Sql("select *  from systemcodeversion")
		@UseCache(false)
		public QueryInterface initmx();
	
	@Sql("update systemcodeeditor set jlzt='1' where id = ? ")
	public int delCode(String id);
	
	@Sql("select * from  systemcodeeditor")
	@UseCache(false)
	public QueryInterface selectCode();
	
	@Sql("insert into systemcodeeditor (id,model_name,model_code,model_describe,jlzt) values(?,?,?,?,?) ")
	@UseCache(false)
	public int insertCode(String id, String model_name, String model_code, String model_describe, String string);

	@Sql("update systemcodeeditor set model_name=?,model_code=?,model_describe=? where id = ? ")
	public void updateCode(String model_name, String model_code, String model_describe, String id);
	
	@Sql("insert into systemcodeversion (zjlid,id,version,cjr,cjsj,versiondescribe,code,sfqy,jlzt) values(?,?,?,?,?,?,?,?,?) ")
	@UseCache(false)
	public void insertVersion(String id, String guid, String string, String cjr, Date date, String versiondescribe,
			String code, String sfqy, String string2);

	@Sql("SELECT * FROM  systemcodeversion ")
	@UseCache(false)
	public QueryInterface queryVersion();
	
	@Sql("SELECT b.*,ry.xm cjrxm FROM  systemcodeversion b left join systemry ry on  b.cjr=ry.id ")
	@UseCache(false)
	public QueryInterface queryVersionxx();
	

	@Sql("update systemcodeversion set versiondescribe=?,code=?,sfqy=? where id = ? ")
	public void updateVersion(String versiondescribe, String code, String sfqy, String versionid);

	@Sql("update systemcodeversion set jlzt='1' where id = ? ")
	public int delVersion(String versionid);

	@Sql("update systemcodeversion set sfqy=? where zjlid = ? ")
	public void updateVersionSfqy(String string, String id);

	/**
	 * 专业下拉选查询
	 * @return
	 */
	@Sql(" ${tj} ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> ceshi(String tj);

	@Sql("insert into systemcodedebug (id,versionid,use_userid,use_time,input,output,jlzt) values(?,?,?,?,?,?,?) ")
	@UseCache(false)
	public void insertPerform(String guid, String versionid, String userid, Date date, String input, String jsonString, String jlzt);

	@Sql("select a.model_name,a.model_code,a.model_describe,b.version,ry.xm,c.use_userid,date_format(c.use_time, '%Y-%m-%d') use_time,c.versionid,c.input,c.output,c.id "
       +" from systemcodeeditor a INNER JOIN  systemcodeversion b on a.id=b.zjlid and b.jlzt='0' INNER JOIN systemcodedebug c on b.id=c.versionid and c.jlzt='0' left join systemry ry on c.use_userid=ry.id ")
	@UseCache(false)
	public QueryInterface getLog();
	
//	@Sql("select a.model_name,a.model_code,a.model_describe,b.version,ry.xm,c.use_userid,date_format(c.use_time, '%Y-%m-%d') use_time,c.versionid,c.input,c.output,c.id "
//		       +" from systemcodeeditor a INNER JOIN  systemcodeversion b on a.id=b.zjlid and b.jlzt='0' INNER JOIN systemcodedebug c on b.id=c.versionid and c.jlzt='0' left join systemry ry on c.use_userid=ry.id where a.jlzt='0' ${tj} ${tj1} ")
//	@Arguments( { "tj","tj1" })
//	@UseCache(false)
//	public QueryInterface getLog(String tj,String tj1);
	
	@Sql("update systemcodedebug set jlzt='1' where id = ? ")
	public int delLog(String id);
	
	@Sql("SELECT * FROM  systemcodeeditor ")
	@UseCache(false)
	public QueryInterface queryCode();
}
