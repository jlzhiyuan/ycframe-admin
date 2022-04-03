package com.ycframe.web.admin.modules.dao;

import java.util.List;

import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.Update;
import com.ycframe.database.util.DBMap; 

public interface ModulesDao extends IDao {
	
	
	/*
	 '9':    //目录 
     '0':    //功能
     '1':    //接口
     '2':    //模块
     '3':    //按钮
    */
    	  
	// 列表页查询
	@Sql("SELECT DISTINCT gn.id, gn.FGNID parent, gn.GNMC,gn.SXBH,gn.ICON,gn.isComponent,gn.linkUrl ,gn.gnlx, gn.SFXS SFXS, gn.GNDZ,gn.JDMS ,gn.gnbh,gn.COMPONENT,gn.JSPATH  "
			+"from systemgn gn " 
 			+"GROUP BY gn.id ,gn.FGNID ,gn.gnmc ,gn.gnbh,gn.gnbh"
			+ "  ${tj} ")
	@UseCache(false)
	@Arguments({ "jsid","tj" })
	public DaoPage getMkgl(String jsid,String tj);
	
	@Sql("SELECT DISTINCT gn.id, gn.FGNID parent, gn.GNMC,gn.SXBH,gn.ICON , gn.SFXS SFXS, gn.GNDZ,gn.JDMS ,gn.gnbh,gn.COMPONENT  "
			+ " from systemgn gn where gn.gnlx IN (9, 0) "
			+ "  GROUP BY gn.id, gn.FGNID , gn.GNMC,gn.SXBH ,  gn.SFXS, gn.GNDZ,gn.JDMS,gn.gnbh"
			+ "  ORDER BY gn.SXBH ")
	@UseCache(false)
	public DaoPage getMkgl();
	
	@Sql("SELECT DISTINCT gn.id, gn.FGNID as \"parent\", gn.GNMC title,gn.icon , gn.GNDZ as \"path\",gn.SXBH "
			+" from systemgn gn "
			+" INNER JOIN systemjsgn jsgn on jsgn.gnid = gn.ID"
			+" where jsgn.jszid in ${jsids} and gn.SFXS = 'T' and (gn.gnlx='9' or gn.gnlx='0')"
			  +" GROUP BY gn.id, gn.FGNID , gn.GNMC,gn.SXBH ,  gn.SFXS, gn.GNDZ,gn.JDMS,gn.gnbh"
			  +" ORDER BY gn.SXBH ")
	@UseCache(false)
	@Arguments({ "jsids" })
	public DaoPage Menu(String jsids);
	
	@Sql("SELECT DISTINCT gn.GNMC title,gn.component,gn.linkUrl , gn.GNDZ as \"path\",gn.JSPATH url, gn.SXBH "
			+" from systemgn gn "
			+" INNER JOIN systemjsgn jsgn on jsgn.gnid = gn.ID"
			+" where gn.SFXS = 'T'"
			  +" GROUP BY gn.id, gn.FGNID , gn.GNMC,gn.SXBH ,  gn.SFXS, gn.GNDZ,gn.JDMS,gn.gnbh"
			  +" ORDER BY gn.SXBH ")
	@UseCache(false)
	public Query getComponent();

	
	@Sql("SELECT DISTINCT gn.GNDZ gndz, GROUP_CONCAT(js.id) roles  "
			+"FROM	systemgn gn  "
			+"LEFT JOIN systemjsgn jsgn ON jsgn.gnid = gn.ID  "
			+"LEFT JOIN systemjsz js ON jsgn.JSZID = js.ID "
			+"WHERE	gn.gnlx IN (\"1\", \"0\") AND GN.GNDZ <> \"\"  "
			+"GROUP BY	gn.GNDZ  "
			+"ORDER BY	gn.GNDZ  ")
	@UseCache(false)
	public Query getResourcesRoles();

	@Sql("SELECT DISTINCT gn.GNDZ gndz  "
			+"FROM	systemgn gn  "
			+"LEFT JOIN systemjsgn jsgn ON jsgn.gnid = gn.ID  "
			+"LEFT JOIN systemjsz js ON jsgn.JSZID = js.ID "
			+"WHERE	gn.gnlx IN (\"1\", \"0\") AND GN.GNDZ <> \"\" and js.id=1 "
			+"GROUP BY	gn.GNDZ  "
			+"ORDER BY	gn.GNDZ  ")
	@UseCache(false)
	public Query getResourcesOfGuest();
	
	@Sql("SELECT DISTINCT gn.component permission "+
		 " FROM	systemgn gn   "+
			" LEFT JOIN systemjsgn jsgn ON jsgn.gnid = gn.ID   "+
			" LEFT JOIN systemjsz js ON jsgn.JSZID = js.ID  "+
			" INNER JOIN systemryjs ryjs on ryjs.jszid = js.id "+
			"  INNER JOIN systemry ry on ry.id = ryjs.ryid "+
			" 	WHERE	gn.gnlx IN ('3')  "+
			" 	GROUP BY	gn.GNDZ   "+
			" ORDER BY	gn.GNDZ  ")
	@UseCache(false)
	public Query getPermissions();
	
	// 查询数据总数
	@Sql("select  count(*)  from ( SELECT DISTINCT gn.id, gn.FGNID parent, gn.GNMC,gn.SXBH ,  gn.SFXS SFXS, gn.GNDZ,gn.JDMS ,zgn.gnzjd,gn.gnbh,   "
			+ "  LENGTH(gn.gnbh) - LENGTH(REPLACE(gn.gnbh,'-','')) levels,CASE  when zgn.gnzjd>0  then 'FALSE' ELSE 'true' end isLeaf,  "
			+ "  CASE  when zgn.gnzjd>0  then 'true' ELSE 'FALSE' end expanded  " + "  from systemgn gn  "
			+ "    "
			+ "    "
			+ "  LEFT JOIN (select count(*) gnzjd,zgn.FGNID gnid from systemgn zgn where zgn.sfxs != 'F'  GROUP BY zgn.FGNID) zgn  ON  zgn.gnid = gn.ID   "
			+ "  "
			+ "  "
			+ "   GROUP BY gn.id, gn.FGNID , gn.GNMC,gn.SXBH ,  gn.SFXS, gn.GNDZ,gn.JDMS ,zgn.gnzjd,gn.gnbh,zgn.gnzjd  "
			+ "   ORDER BY gnbh,gn.SXBH,gn.id ) datatable ")
	@UseCache(false)
	public int getMkglCount();

	/*
	 * //列表页查询
	 * 
	 * @Sql(
	 * "SELECT DISTINCT gn.id, gn.FGNID parent, gn.GNMC,gn.SXBH , case when gn.SFXS='T' then 'Web端启用' when gn.SFXS='S' then '手机端启用' else '禁用' end SFXS, gn.GNDZ,gn.JDMS ,GROUP_CONCAT(DISTINCT butt.ANNAME) anmc,zgn.gnzjd,gn.gnbh, "
	 * +
	 * "LENGTH(gn.gnbh) - LENGTH(REPLACE(gn.gnbh,'-','')) level,CASE  zgn.gnzjd>0 when 1 then 'FALSE' ELSE 'true' end isLeaf, "
	 * + "CASE  zgn.gnzjd>0 when 1 then 'TRUE' ELSE 'FALSE' end expanded "+
	 * "from systemgn gn "+
	 * "LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除'  ) as operabut ON operabut.gnid = gn.ID "
	 * +
	 * "LEFT JOIN (SELECT * from systembutton where jlzt='未删除' ) as but ON but.id = operabut.czanid  "
	 * +
	 * "LEFT JOIN (select count(*) gnzjd,zgn.FGNID gnid from systemgn zgn where zgn.sfxs != 'F'  GROUP BY zgn.FGNID) zgn  ON  zgn.gnid = gn.ID "
	 * + "left join systemgnanmiddle m on m.gnid=gn.id and m.jlzt='未删除' "+
	 * "left join systembutton butt on m.anid=butt.id  and butt.jlzt='未删除' "+
	 * " GROUP BY gn.id "+ " ORDER BY gnbh,gn.SXBH,gn.id ")
	 * 
	 * public DaoPage getMkgl();
	 * 
	 * 
	 * 
	 * //查询数据总数
	 * 
	 * @Sql(
	 * "select  count(*)  from (SELECT DISTINCT gn.id, gn.FGNID parent, gn.GNMC,gn.SXBH , case when gn.SFXS='T' then 'Web端启用' when gn.SFXS='S' then '手机端启用' else '禁用' end SFXS, gn.GNDZ,gn.JDMS ,butt.ANNAME,zgn.gnzjd,gn.gnbh, "
	 * +
	 * "LENGTH(gn.gnbh) - LENGTH(REPLACE(gn.gnbh,'-','')) level,CASE  zgn.gnzjd>0 when 1 then FALSE ELSE true end isLeaf, "
	 * + "CASE  zgn.gnzjd>0 when 1 then TRUE ELSE FALSE end expanded "+
	 * "from systemgn gn "+
	 * "LEFT JOIN (SELECT DISTINCT jsid, gnid ,czanid  from systemoperationbutton where jlzt='未删除' ) as operabut ON operabut.gnid = gn.ID "
	 * +
	 * "LEFT JOIN (SELECT * from systembutton where jlzt='未删除' ) as but ON but.id = operabut.czanid  "
	 * +
	 * "LEFT JOIN (select count(*) gnzjd,zgn.FGNID gnid from systemgn zgn where zgn.sfxs != 'F'  GROUP BY zgn.FGNID) zgn  ON  zgn.gnid = gn.ID "
	 * + "left join systemgnanmiddle m on m.gnid=gn.id  and m.jlzt='未删除' "+
	 * "left join systembutton butt on m.anid=butt.id "+
	 * " ORDER BY gnbh,gn.SXBH,gn.id  ) AS old ")
	 * 
	 * public int getMkglCount();
	 */ // 启用
	@Sql("update systemgn  set SFXS='T' where id in (${tj}) ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int updatezt1(String tj);

	// 禁用
	@Sql("update systemgn  set SFXS='F' where id in (${tj}) ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int updatezt2(String tj);

	/**
	 * 通过ID获取一个功能
	 * 
	 * @param id
	 * @return
	 */
	@Sql("SELECT  gn.* from systemgn gn  where   gn.id=?")
	@UseCache(false)
	public DBMap getById(String id);

	// 上级节点下拉
	@Sql("select id,gnmc,gnbh from systemgn where SFXS != 'F' and (gndz = '' or gndz is null ) ${tj} order by sxbh*1  ")
	@Arguments({ "tj" })
	@UseCache(false)
	public List getjsjd(String tj);
	
	@Sql("select count(*) from systemgn where gnmc = '${name}' order by sxbh*1  ")
	@Arguments({ "name" })
	@UseCache(false)
	public int checkName(String name);
	
	@Sql("select count(*) from systemgn where gnmc = '${name}' and id != '${id}' order by sxbh*1  ")
	@Arguments({ "name" ,"id"})
	@UseCache(false)
	public int checkName(String name,String id);

	// 新增
	@Sql("insert into systemgn (id,FGNID,GNMC,SFXS,GNDZ,JDMS,gnbh,SXBH,icon,component,JSPATH,isComponent,linkUrl,gnlx) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)")
	@UseCache(false)
	public int insertData(String id, String FGNID, String GNMC, String SFXS, String GNDZ, String JDMS, String gnbh,
			String SXBH,String icon,String component,String jsPath,Boolean isComponent,String linkUrl,String gnlx);

	// 修改
	@Sql("update systemgn set FGNID=?,GNMC=?,SFXS=?,GNDZ=?,JDMS=?,gnbh=?,SXBH=?,ICON=?,component=?,JSPATH=?,isComponent=?,linkUrl=?,gnlx=? where id=?")
	@UseCache(false)
	public int updateData(String FGNID, String GNMC, String SFXS, String GNDZ, String JDMS, String gnbh, String SXBH,
			String icon,String component,String jsPath,Boolean isComponent,String linkUrl,String gnlx,String id);


	// 获取功能编号
	@Sql("select gnbh from systemgn where 1=1  ${tj} ")
	@Arguments({ "tj" })
	@UseCache(false)
	public List getGnbh(String tj);

	// 获取功能id
	@Sql("select id from systemgn where 1=1  order by id desc ")
	@UseCache(false)
	public List getID();

	// 添加按钮
	@Sql("insert into systemgnanmiddle (id,gnid,anid) ${tj}")
	@Arguments({ "tj" })
	@UseCache(false)
	public int insertAnmc(String tj);

	// 删除
	@Sql("update systemgnanmiddle set jlzt='已删除' where anid in(${tj}) ${tj1} ")
	@Arguments({ "tj", "tj1" })
	@UseCache(false)
	public int deleteData(String tj, String tj1);
	
	// 删除
		@Sql("update systemoperationbutton set jlzt='已删除' where czanid in(${tj}) ${tj1} ")
		@Arguments({ "tj", "tj1" })
		@UseCache(false)
		public int deleteButonOperat(String tj, String tj1);

	@Sql("update systemgnanmiddle set jlzt='已删除' where gnid in(${tj}) ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int deleteMkgx1(String tj);
	
	@Sql("delete from systemjsgn where gnid in(${tj}) ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int deleteMkgx2(String tj);
	
	@Sql("update systemoperationbutton set jlzt='已删除' where gnid in(${tj}) ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int deleteMkgx3(String tj);
	
	// 列表页删除
	@Sql("delete from systemgn  where id in(${idc})")
	@Arguments({ "idc" })
	@UseCache(false)
	public int deleteData(String idc);

	
	// 列表页删除
	@Sql("delete from systemgn") 
	@UseCache(false)
	public Update deleteData();
	
	@Sql("update systemgn set id=id") 
	@UseCache(false)
	public Update updateData();
	
	// 排序修改
	@Sql("update systemgn set SXBH=? where id=?")
	@UseCache(false)
	public int pxUpdate(String SXBH, String id);


	@Sql("select anname as text,ANID as id from systembutton as b where JLZT = '未删除' and zt = '1'")
 	@UseCache(false)
	public List getAllanList();
	
	@Sql("select linkUrl from systemgn where GNMC = '${gnmc}'")
	@Arguments({ "gnmc" })
	@UseCache(false)
	public String getLinkUrl(String gnmc);
	
	@Sql("select JSZID from systemryjs  where RYID = '${ryid}' ")
	@Arguments({ "ryid" })
	@UseCache(false)
	public List<DBMap> getJsids(String ryid);

}
