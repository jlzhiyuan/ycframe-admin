package com.ycframe.web.demo.dao;

import java.util.List;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.util.DBMap;

public interface DemoDataDao extends IDao  {
	
	@Sql("select * from sbwtk_sbtz")
	public List<DBMap> getLotsOfData();	
	
	@Sql("select * from sbwtk_xl2")
	public List<DBMap> getLotsOfData2();
	
	@Sql("select * from sbwtk2")
	public List<DBMap> getLotsOfData3();
	
	@Sql("select * from wjsc")
	public List<DBMap> getLotsOfData4();
	
	@Sql("select * from zdbx_xltd")
	public List<DBMap> getLotsOfData5();
	
	//@Sql("SELECT a.*,count(b.gs) tdsl FROM (SELECT sum(xxsl0) xxsl0,sum(xxsl1) xxsl1,sum(xxsl2) xxsl2,sum(xxsl3) xxsl3,sum(xxsl4) xxsl4,sum(xxsl5) xxsl5,sum(xxsl6) xxsl6,sum(xxsl7) xxsl7,sum(xxsl8) xxsl8,sum(lxsl0) lxsl0,sum(lxsl1) lxsl1,sum(lxsl2) lxsl2, a.id,a.gs,a.xgs,a.bz,a.bdz,a.byq,a.mx,a.xlmc,a.dydj,a.xlbm  from ( SELECT DISTINCT a.id,a.gs,a.xgs,a.bz,a.bdz,a.byq,a.mx,a.xlmc,a.dydj,a.xlbm ,sum(case when D1.wtly like '%缺陷%' then 1 else 0 end) lxsl0 ,sum(case when D1.wtly like '%故障%' then 1 else 0 end) lxsl1 ,sum(case when D1.wtly like '%隐患%' then 1 else 0 end) lxsl2 ,sum(case when (  D1.xx like '%短路%'   and D1.xx like '%短路%'  ) then 1 else 0 end) xxsl0 ,sum(case when (  D1.xx like '%雷击%'   and D1.xx like '%雷击%'  ) then 1 else 0 end) xxsl1 ,sum(case when (  D1.xx like '%接地%'   and D1.xx like '%接地%'  ) then 1 else 0 end) xxsl2 ,sum(case when (  D1.xx like '%着火%'   and D1.xx like '%着火%'  ) then 1 else 0 end) xxsl3 ,sum(case when (  D1.xx like '%异物%'   and D1.xx like '%异物%'  ) then 1 else 0 end) xxsl4 ,sum(case when (  D1.xx like '%引流%'   and D1.xx like '%引流%'  ) then 1 else 0 end) xxsl5 ,sum(case when (  D1.xx like '%挖断%'   and D1.xx like '%挖断%'  ) then 1 else 0 end) xxsl6 ,sum(case when (  D1.xx like '%风%'   and D1.xx like '%风%'  ) then 1 else 0 end) xxsl7 ,sum(case when (  D1.xx like '%击穿%'   and D1.xx like '%击穿%'  ) then 1 else 0 end) xxsl8 FROM sbwtk_xl2 a    LEFT JOIN sbwtk2 D1 ON A.GS = D1.ZRDW and a.bdz = d1.bdz AND( A.id = D1.xlid  )    where 1=1  and 1=1 GROUP BY a.ID       ) a   GROUP BY  a.id,a.gs,a.xgs,a.bz,a.bdz,a.byq,a.mx,a.xlmc,a.dydj order by xxsl0 desc, xxsl1 desc, xxsl2 desc, xxsl3 desc, xxsl4 desc, xxsl5 desc, xxsl6 desc, xxsl7 desc, xxsl8 desc, lxsl0 desc, lxsl1 desc, lxsl2 desc,   a.GS,a.XGS,a.BZ,a.BDZ,a.BYQ,a.XLMC ) a   LEFT JOIN (select DISTINCT gs,xgs,gds,line_name,DATE_FORMAT(event_time,'%Y-%m-%d') from zdbx_xltd  ) b on a.gs = b.GS and ( a.xlmc = b.LINE_NAME or a.xlbm = b.line_name  )  and a.bz = b.gds   GROUP BY  a.id,a.gs,a.xgs,a.bz,a.bdz,a.byq,a.mx,a.xlmc,a.dydj order by xxsl0 desc, xxsl1 desc, xxsl2 desc, xxsl3 desc, xxsl4 desc, xxsl5 desc, xxsl6 desc, xxsl7 desc, xxsl8 desc, lxsl0 desc, lxsl1 desc, lxsl2 desc")
	@Sql("select a.id,a.gs,a.xgs,a.bz,a.bdz,a.byq,a.mx,a.xlmc,a.dydj,a.xlbm, D1.wtly ,D1.xx ,(case when D1.wtly like '%缺陷%' then '缺陷' when D1.wtly like '%隐患%' then '隐患' when D1.wtly like '%故障%' then '故障' end) wtlx,"+
		 " (case when D1.xx like '%短路%' then '短路' when D1.xx like '%雷击%' then '雷击' when D1.xx like '%接地%' then '接地'"+
		 " when D1.xx like '%着火%' then '着火' when D1.xx like '%异物%' then '异物' when D1.xx like '%引流%' then '引流' when D1.xx like '%挖断%' then '挖断' when D1.xx like '%风%' then '风' when D1.xx like '%击穿%' then '击穿'  end) wtxx"+
		 " from sbwtk_xl2 a"+ 
		 " left join sbwtk2 d1 ON A.GS = D1.ZRDW and a.bdz = d1.bdz AND( A.id = D1.xlid  )"+
		 " LEFT JOIN (select DISTINCT gs,xgs,gds,line_name,DATE_FORMAT(event_time,'%Y-%m-%d') from zdbx_xltd  ) b on a.gs = b.GS and ( a.xlmc = b.LINE_NAME or a.xlbm = b.line_name  )  and a.bz = b.gds"+ 
		 " where (D1.wtly like '%缺陷%' or D1.wtly like '%隐患%' or D1.wtly like '%故障%')"+ 
		 " and (D1.xx like '%短路%' or D1.xx like '%雷击%' or  D1.xx like '%接地%' or  D1.xx like '%着火%' or D1.xx like '%异物%' or D1.xx like '%引流%' or D1.xx like '%挖断%' or D1.xx like '%风%' or D1.xx like '%击穿%')")
	public List<DBMap> getLotsOfData6();
	
	@Sql("SELECT  a.*,COUNT(b.ID)fjsl ,sum(case when D1.wtly like '%缺陷%' then 1 else 0 end) lxsl0 ,sum(case when D1.wtly like '%故障%' then 1 else 0 end) lxsl1 ,sum(case when D1.wtly like '%隐患%' then 1 else 0 end) lxsl2 ,sum(case when D1.wtly like '%主变冲击%' then 1 else 0 end) lxsl3 ,sum(case when (  D1.xx like '%短路%'   and D1.xx like '%短路%'  ) then 1 else 0 end) xxsl0 ,sum(case when (  D1.xx like '%接地%'   and D1.xx like '%接地%'  ) then 1 else 0 end) xxsl1 ,sum(case when (  D1.xx like '%漏油%'   and D1.xx like '%漏油%'  ) then 1 else 0 end) xxsl2 ,sum(case when (  D1.xx like '%渗油%'   and D1.xx like '%渗油%'  ) then 1 else 0 end) xxsl3 ,sum(case when (  D1.xx like '%受潮%'   and D1.xx like '%受潮%'  ) then 1 else 0 end) xxsl4 ,sum(case when (  D1.xx like '%油色谱%'   and D1.xx like '%油色谱%'  ) then 1 else 0 end) xxsl5 ,sum(case when (  D1.xx like '%雷击%'   and D1.xx like '%雷击%'  ) then 1 else 0 end) xxsl6 ,sum(case when (  D1.xx like '%击穿%'   and D1.xx like '%击穿%'  ) then 1 else 0 end) xxsl7 ,sum(case when (  D1.xx like '%烧损%'   and D1.xx like '%烧损%'  ) then 1 else 0 end) xxsl8 FROM sbwtk_sbtz a LEFT JOIN wjsc b ON a.ID = b.ZJLBH   LEFT JOIN sbwtk2 D1 ON A.GS = D1.ZRDW AND A.BDZ = D1.BDZ AND A.SBMC = D1.YXMC  where 1=1  and 1=1 GROUP BY a.ID ORDER BY    COUNT(b.ID)desc , xxsl0 desc, xxsl1 desc, xxsl2 desc, xxsl3 desc, xxsl4 desc, xxsl5 desc, xxsl6 desc, xxsl7 desc, xxsl8 desc, lxsl0 desc, lxsl1 desc, lxsl2 desc, lxsl3 desc, a.GS,a.DW,a.BZ,a.BDZ,a.SBMC,a.JGDY")
	public List<DBMap> getLotsOfData7();
	
	
}
