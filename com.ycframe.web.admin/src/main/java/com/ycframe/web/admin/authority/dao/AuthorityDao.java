package com.ycframe.web.admin.authority.dao;

import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.util.DBMap; 
public interface AuthorityDao extends IDao{
	@Sql("select id,jsmc from systemjsz where zt = '1' ${tj} ")
	@Arguments({"tj"}) 
	@UseCache(false)
	public DaoPage getJsxx(String tj);	
	
	@Sql("SELECT count(*) from systemjsz where zt = '1' ${tj} ")
	@Arguments({"tj"})
	@UseCache(false)
	public int getJsxxCount(String tj);	
	
	@Sql(" select id,jsmc from systemjsz where zt = '1' ${tj} order by ${orderindex} ${ordertype}  ")
	@Arguments({"tj","orderindex","ordertype"})
	@UseCache(false)
	public DaoPage getJsxx(String tj,String orderindex,String ordertype);
	
	/*@Sql("SELECT DISTINCT gn.id,gn.gnmc ,GROUP_CONCAT(DISTINCT aut.rolename) sjqx ,GROUP_CONCAT(DISTINCT but.ANNAME ) czan " +
			"from systemgn gn " +
			"LEFT JOIN (SELECT * from systemjsgn where 1=1 ${tj} ) as jsgn ON jsgn.GNID = gn.id " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,sjqxid  from systemoperationauthority where jlzt='未删除' ${tj1}  ) as opera ON opera.gnid = gn.ID " +
			"LEFT JOIN (select * from systemdataauthority where jlzt='未删除' ) as aut ON aut.id = opera.sjqxid  " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' ${tj1}) as operabut ON operabut.gnid = gn.ID  " +
			"LEFT JOIN (SELECT * from systembutton where jlzt='未删除' ) as but ON but.id = operabut.czanid  " +
			"where gn.sfxs = 'T' and gn.fgnid = '327' ${tj2}  GROUP BY gn.id ")
	@Arguments({"tj","tj1","tj2"}) 
	public DaoPage getCzqxxx(String tj,String tj1 ,String tj2);*/	
	
	@Sql("SELECT gn.id,gn.FGNID parent,gn.gnmc ,GROUP_CONCAT(but.anname) name,gn.gnlx,"+
			" CASE WHEN gn.id=ssjsgn.gnid THEN true else false END acheckbox"+   
			" from systemgn gn"+   
			" LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' and jsid = '${jsid}' )  operabut ON operabut.gnid = gn.ID"+   
			" LEFT JOIN (SELECT * from systembutton where jlzt='未删除' )  but ON but.id = operabut.czanid"+   
			" LEFT JOIN (SELECT * from systemjsgn where jszid = '${jsid}' ) ssjsgn ON ssjsgn.gnid = gn.id"+   
				"  where gn.sfxs in('T','S') and gn.sfxs = 'T'"+  
			 " GROUP BY gn.id ,gn.FGNID ,gn.gnmc ,ssjsgn.gnid,gn.SXBH"+ 
			" ${order} ")  
	@Arguments({"jsid","order"}) 
	@UseCache(false)
	public DaoPage getCzqxxx(String jsid,String order);	
	
	
	
	
	
	@Sql("select count(*) from " +
			"( SELECT DISTINCT gn.id  " +
			"from systemgn gn " +
			"LEFT JOIN (SELECT * from systemjsgn where 1=1 )   jsgn ON jsgn.GNID = gn.id " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' )   operabut ON operabut.gnid = gn.ID  " +
			"LEFT JOIN (SELECT * from systembutton where jlzt='未删除' )   but ON but.id = operabut.czanid  " +
			"where gn.sfxs in('T','S') and gn.fgnid = '327' and gn.sfxs = 'T'  GROUP BY gn.id ) old")
	@UseCache(false)
	public int getCzqxxxCount();	
/*	@Sql("SELECT DISTINCT gn.id,gn.FGNID parent,gn.gnmc ,GROUP_CONCAT(DISTINCT but.ANNAME) czan,zgn.gnzjd,gn.gnbh, "+
			"LENGTH(gn.gnbh) - LENGTH(REPLACE(gn.gnbh,'-','')) level,CASE  zgn.gnzjd>0 when 1 then 'FALSE' ELSE 'true' end isLeaf, " +
			"CASE  gn.gnbh='327' when 1 then 'true' ELSE 'FALSE' end expanded,  " +
			"CASE WHEN gn.id=ssjsgn.gnid THEN 1 else 0 END acheckbox  "+
			"from systemgn gn "+
			"LEFT JOIN (SELECT * from systemjsgn where 1=1 ) as jsgn ON jsgn.GNID = gn.id  "+
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' and jsid = '${jsid}' ) as operabut ON operabut.gnid = gn.ID  "+
			"LEFT JOIN (SELECT * from systembutton where jlzt='未删除' ) as but ON but.id = operabut.czanid  "+
			"LEFT JOIN (select count(*) gnzjd,zgn.FGNID gnid from systemgn zgn where zgn.sfxs in('T','S')  GROUP BY zgn.FGNID) zgn  ON  zgn.gnid = gn.ID "+
			"LEFT JOIN (SELECT * from systemjsgn where jszid = '${jsid}' ) ssjsgn ON ssjsgn.gnid = gn.id  "+
			"where gn.sfxs in('T','S')   GROUP BY gn.id "+
			"ORDER BY gnbh,gn.SXBH ")  
	@Arguments({"jsid"}) 
	@UseCache(false)
	public DaoPage getCzqxxx(String jsid);	
	
	
	
	
	
	@Sql("select count(*) from " +
			"( SELECT DISTINCT gn.id  " +
			"from systemgn gn " +
			"LEFT JOIN (SELECT * from systemjsgn where 1=1 )   jsgn ON jsgn.GNID = gn.id " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' )   operabut ON operabut.gnid = gn.ID  " +
			"LEFT JOIN (SELECT * from systembutton where jlzt='未删除' )   but ON but.id = operabut.czanid  " +
			"where gn.sfxs in('T','S') and gn.fgnid = '327'  GROUP BY gn.id ) old")
	public int getCzqxxxCount();	
*/	
	/*@Sql("SELECT DISTINCT gn.id,gn.gnmc ,GROUP_CONCAT(DISTINCT aut.rolename) sjqx, GROUP_CONCAT(DISTINCT but.ANNAME ) czan " +
			"from systemgn gn " +
			"LEFT JOIN (SELECT * from systemjsgn where jlzt='未删除' ${tj} ) as jsgn ON jsgn.GNID = gn.id " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,sjqxid  from systemoperationauthority where jlzt='未删除' ${tj1}  ) as opera ON opera.gnid = gn.ID " +
			"LEFT JOIN (select * from systemdataauthority where jlzt='未删除' ) as aut ON aut.id = opera.sjqxid  " +
			"LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' ${tj1}) as operabut ON operabut.gnid = gn.ID " +
			"LEFT JOIN (SELECT * from systembutton where jlzt='未删除' ) as but ON but.id = operabut.czanid  " +
			"where gn.sfxs = 'T' and gn.fgnid = '327' ${tj2}  " +
			"GROUP BY gn.id order by ${orderindex} ${ordertype}  ")
	@Arguments({"tj","tj1","tj2","orderindex","ordertype"})
	public DaoPage getCzqxxx(String tj,String tj1 ,String tj2,String orderindex,String ordertype);*/
	
	@Sql("select id,jsmc from systemjsz where zt = '1' and JLZT = '未删除'  ")
	@UseCache(false)
	public List<DBMap> getJsxx();

	@Sql("insert into systemoperationauthority (id,jsid,gnid,sjqxid) ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int insertsjqxdata(String tj);
	
	@Sql("update systemoperationauthority set jlzt='已删除' where ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int deletedata(String tj);
	
	@Sql("insert into systemoperationbutton (id,jsid,gnid,czanid) ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int insertczandata(String tj);
	
	@Sql("insert into systemoperationbutton (id,jsid,gnid,czanid) ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int insertczandataDemo(String tj);
	
	@Sql("update systemoperationbutton set jlzt='已删除' where ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int deleteczandata(String tj);
	
	@Sql("insert into systemjsgn (gnid,jszid) ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int savegnids(String tj);
	
	@Sql("select * from systemjsgn where jszid = '${jsid}' ")
	@UseCache(false)
	@Arguments({"jsid"})
	public List<DBMap> getjsgns(String jsid);
	
	@Sql("select count(*) from systemjsgn where jszid = '${jsid}' ")
	@UseCache(false)
	@Arguments({"jsid"})
	public int getjsgnsCount(String jsid);
	
	@Sql("select * from systemoperationbutton where jsid = '${jsid}' and gnid='${gnid}' and jlzt='未删除' ")
	@UseCache(false)
	@Arguments({"jsid","gnid"})
	public List<DBMap> getanids(String jsid,String gnid);
	
	@Sql("select * from systemoperationbutton where jsid = '${jsid}' and gnid='${gnid}' and czanid ='${anid}' and jlzt='未删除' ")
	@UseCache(false)
	@Arguments({"jsid","gnid","anid"})
	public List<DBMap> getanid(String jsid,String gnid,String anid);
	
	@Sql("delete from systemjsgn where jszid='${jsid}' ")
	@UseCache(false)
	@Arguments({"jsid"})
	public int deletejsgns(String jsid);
	
	@Sql("update systemoperationbutton set jlzt='已删除' where jsid = '${jsid}' and gnid='${gnid}' and jlzt='未删除' ")
	@UseCache(false)
	@Arguments({"jsid","gnid"})
	public int deleteanids(String jsid,String gnid);
	
	@Sql("update systemoperationbutton set jlzt='已删除' where jsid = '${jsid}' and gnid='${gnid}' and czanid='${anid}'  and jlzt='未删除' ")
	@UseCache(false)
	@Arguments({"jsid","gnid","anid"})
	public int deleteanid(String jsid,String gnid,String anid);
	
	@Sql("SELECT * from systemoperationauthority where jlzt='未删除' and jsid='${jsid}' ")
	@UseCache(false)
	@Arguments({"jsid"})
	public List<DBMap> getjssjqxs(String jsid);
	
	@Sql("update systemoperationauthority set jlzt='已删除' where jsid='${jsid}' ")
	@UseCache(false)
	@Arguments({"jsid"})
	public int deletejssjqxs(String jsid);
	
	@Sql("insert into systemoperationauthority (id,jsid,sjqxid) ${tj}")
	@UseCache(false)
	@Arguments({"tj"})
	public int savesjqxs(String tj);
	
	@Sql("select but.id,but.ANNAME,but.ANID,but.EFFECT,zt.ztValue ZT  ,CASE WHEN czan.czanid = gnan.anid THEN 1 else 0 END acheckbox "+
			"from systembutton but "+
			"LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = but.zt  "+
			"LEFT JOIN (SELECT czanid from systemoperationbutton where jsid ='${jsid}' AND gnid = '${gnid}' AND jlzt='未删除' GROUP BY czanid ) czan ON czan.czanid = but.id  "+ 
			"LEFT JOIN (SELECT * from systemgnanmiddle where gnid = '${gnid}' AND jlzt='未删除' ) gnan ON gnan.anid = but.id  "+
			"where but.jlzt='未删除' AND gnan.anid = but.id  ${tj} ")
	@Arguments({"jsid","gnid","tj"}) 
	@UseCache(false)
	public DaoPage getAnxx(String jsid,String gnid,String tj);	
	
	@Sql("select count(*) from (select but.id,but.ANNAME,but.ANID,but.EFFECT,zt.ztValue ZT  ,CASE WHEN czan.czanid = gnan.anid THEN 1 else 0 END acheckbox "+
			"from systembutton but "+
			"LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = but.zt  "+
			"LEFT JOIN (SELECT czanid from systemoperationbutton where jsid ='${jsid}' AND gnid = '${gnid}' AND jlzt='未删除' GROUP BY czanid ) czan ON czan.czanid = but.id  "+ 
			"LEFT JOIN (SELECT * from systemgnanmiddle where gnid = '${gnid}' AND jlzt='未删除' ) gnan ON gnan.anid = but.id  "+
			"where but.jlzt='未删除' AND gnan.anid = but.id  ${tj} ) ttt")
	@Arguments({"jsid","gnid","tj"}) 
	@UseCache(false)
	public int getAnxxCount(String jsid,String gnid,String tj);	
	
	@Sql("select sjqx.id id,ROLENAME,XNAME,TJBDS,MEMO,zt.ztValue ISENABLED  ,CASE WHEN opera.sjqxid = sjqx.ID THEN 1 else 0 END acheckbox3 " +
			"from systemdataauthority sjqx " +
			"LEFT JOIN systemdataauthorityzt zt ON zt.ztNo = sjqx.isenabled " +
			"LEFT JOIN (SELECT sjqxid from systemoperationauthority where jsid ='${tj}' AND jlzt='未删除' GROUP BY sjqxid ) opera ON opera.sjqxid = sjqx.ID " +
			"where sjqx.jlzt='未删除' ${order} ")
	@Arguments({"tj","order"}) 
	@UseCache(false)
	public DaoPage getSjqxxx(String tj,String order);
	
	
}
