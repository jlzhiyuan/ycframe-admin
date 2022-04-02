package com.ycframe.web.admin.role.dao;

import java.util.Date;
import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.Update;
import com.ycframe.database.util.DBMap; 
public interface RoleDao extends IDao  {
	
	@Sql("select id,JSMC,MS,LX,ZT from systemjsz jsz LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = jsz.zt  where JLZT = '未删除'  ${tj} ")
	@Arguments({"tj"}) 
	@UseCache(false)
	public DaoPage getRole(String tj);
	
	@Sql("select ry.id,ry.XM,ry.YHM,case when (select count(*) from systemryjs where jszid = '${jsid}' and ryid = ry.id)>0 then '已分配' else '未分配' end isfp from systemry ry  left join systemrygl_ryjl ryjl on ry.id = ryjl.empCode  where 1=1 ${tj} ")
	@Arguments({"jsid","tj"}) 
	@UseCache(false)
	public DaoPage getTableData(String jsid,String tj);
	
	@Sql("select count(*) from (select ry.id,ry.XM,ry.YHM,case when (select count(*) from systemryjs where jszid = '${jsid}' and ryid = ry.id)>0 then '已分配' else '未分配' end isfp from systemry ry  left join systemrygl_ryjl ryjl on ry.id = ryjl.empCode  where 1=1 ${tj} ) t")
	@Arguments({"jsid","tj"}) 
	@UseCache(false)
	public int getTableDataCount(String jsid,String tj);
	
	@Sql("SELECT count(*) from systemjsz jsz LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = jsz.zt  where JLZT = '未删除'  ${tj}   ")
	@Arguments({"tj"})
	@UseCache(false)
	public int getRoleCountt(String tj);	
	
	@Sql("update systemjsz  set zt='1' where id in ? ")
	@UseCache(false)
	public int open(List ids);
	
	@Sql("update systemjsz  set zt='0' where id in ? ")
	@UseCache(false)
	public int close(String[] tj);
	
	@Sql("update systemjsz  set id=id ")
	@UseCache(false)
	public Update update();
	
	@Sql("select MAX(ID) from systemjsz")
	@UseCache(false)
	public int getMaxId();
	
	@Sql("insert into systemjsz (id, JSMC, LX, MS, ZT,JLSJ) values (?,?,?,?,?,now()) ")
	@UseCache(false)
	public int insertData(int id ,String JSMC ,String LX ,String MS ,String ZT);
	
	@Sql("insert into tb_sjqx (qx_id,js_id,update_time,sjqx,dr,xz,sc) values(?,?,?,'1','1','1','1') ")
	@UseCache(false)
	public int addStyle(String qx_id,String js,Date update_time);
	
	@Sql("select * from systemjsz where jlzt = '未删除' and id = '${id}' ") 
	@Arguments({"id"})
	@UseCache(false)
	public List<DBMap> getdataid(String id);
	
	@Sql("update systemjsz set JSMC='${JSMC}',LX='${LX}',MS='${MS}' where id='${id}'")
	@Arguments({"id","JSMC","LX","MS"})
	@UseCache(false)
	public int updatedata(String id ,String JSMC ,String LX ,String MS);
	
	@Sql("update systemjsz set id=id") 
	@UseCache(false)
	public Update updateSystemjsz();
	
	@Sql("delete from tb_sjqx ")
	@UseCache(false)
	public Update updateSjqx();
	
	@Sql("update systemjsgn set id=id")
	@UseCache(false)
	public Update updateJsgn();
	
	@Sql("update systemoperationbutton set id=id")
	@UseCache(false)
	public Update updateJsan();
	
	@Sql("update systemoperationauthority set id=id")
	@UseCache(false)
	public Update updatejssjqx();
	
	@Sql("select * from systemryjs") 
	@UseCache(false)
	public Query querySystemryjs();
	
	@Sql("update systemoperationbutton set jlzt='已删除' where czanid in(${tj})")
	@Arguments({"tj"})
	@UseCache(false)
	public int deleteAngx1(String tj);
	
	@Sql("update systemgnanmiddle set jlzt='已删除' where anid in(${tj})")
	@Arguments({"tj"})
	@UseCache(false)
	public int deleteAngx2(String tj);
	
	@Sql("select but.id,but.ANNAME,but.ANID,but.EFFECT,zt.ztValue ZT  ,CASE WHEN czan.czanid = gnan.anid THEN 1 else 0 END acheckbox "+
			"from systembutton but "+
			"LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = but.zt  "+
			"LEFT JOIN (SELECT * from systemoperationbutton where jsid ='${jsid}' AND gnid = '${gnid}' AND jlzt='未删除' GROUP BY czanid ) czan ON czan.czanid = but.id  "+ 
			"LEFT JOIN (SELECT * from systemgnanmiddle where gnid = '${gnid}' AND jlzt='未删除' ) gnan ON gnan.anid = but.id  "+
			"where but.jlzt='未删除' AND gnan.anid = but.id  ${tj} ")
	@Arguments({"jsid","gnid","tj"}) 
	@UseCache(false)
	public List<DBMap> getanfulldata(String jsid,String gnid,String tj);
	
	@Sql("select id from systemry where XM = '${XM}' and YHM = '${YHM}'")
	@Arguments({"XM","YHM"})
	@UseCache(false)
	public String getRyid(String XM,String yhm);
	
	@Sql("insert into systemryjs (RYID,JSZID) values (?,?) ")
	@UseCache(false)
	public int addRyjs(String ryid,String jsid);
	
	@Sql("delete from systemryjs where ryid = ? and jszid = ?")
	@UseCache(false)
	public int deleteRyjs(String ryid,String jsid);
	
}
