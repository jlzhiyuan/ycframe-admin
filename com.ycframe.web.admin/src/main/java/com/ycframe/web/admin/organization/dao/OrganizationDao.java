package com.ycframe.web.admin.organization.dao;

/**
 * 部门管理
 * 开发作者：于天龙
 * 
 *
 */
import java.util.List;

import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.util.DBMap; 

public interface OrganizationDao extends Dao {
	
	
	@Sql(" select  jg.JGBH ID,jg.jgmc bmmc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) levels ,jg.px  ,zgn.gnzjd"
			+ " ,CASE   when zgn.gnzjd>0 then 'FALSE' ELSE 'true' end isLeaf,CASE   when jg.id='0'   then 'true' ELSE 'FALSE' end expanded   "
			+"	from SYSTEMZZJG jg   "
			+"	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.jGbh  "
			+"	where jg.jlzt='未删除' and jg.id<>15  ${tj} "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,zgn.gnzjd,JGBH  " 
			+"	ORDER BY  bmbh  asc")
		@Arguments( { "tj" })
		@UseCache(false)
		public DaoPage getBmglOrder(String tj);

		/**
		 * 列表页查询语句
		 * 
		 * @param tj
		 * @return
		 */
		@Sql(" select  jg.id id,jg.jgmc bmmc,jg.jc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,jg.px  "
			+"	from SYSTEMZZJG jg   "
			+"	where jg.jlzt='未删除'   ${tj}  "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,JGBH,jg.jc  " 
			+"	${orderTj}")
		@Arguments( { "tj","orderTj" })
		@UseCache(false)
		public DaoPage listOrg(String tj,String orderTj);

		/**
		 * 列表页查询总数方法
		 * 
		 * @param tj
		 * @return
		 */
		@Sql("select count(*)  " 
			+"	from SYSTEMZZJG jg   "
			+"	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.jGbh  "
			+"	where jg.jlzt='未删除' and jg.id<>15   and jg.BMBH  is not null ${tj}   "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,zgn.gnzjd,JGBH,jg.jc  " 
			+"	ORDER BY  bmbh  ")
		@Arguments( { "tj" })
		@UseCache(false)
		public int getBmglCount(String tj);
	
	
	
/*	@Sql(" 	select jg.id,jg.jgmc bmmc,jg.fjgbh parent,bmlx.paramText bmlx,jg.bmbm,jg.memo bz,zgn.gnzjd,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) level,jg.px, "
			+ " CASE  zgn.gnzjd>0 when 1 then 'false' ELSE 'true' end isLeaf,CASE  jg.id='1303' when 1 then 'true' ELSE 'FALSE' end expanded "
			+ "	 from systemzzjg jg "
			+ " left join csst bmlx on bmlx.paramtype='系统管理' and bmlx.paramname='部门类型' and bmlx.paramvalue=jg.deptType"
			+ "	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID where jg.jlzt='未删除' and jg.id<>15 ${tj}   group by  jg.id   "
			+ " ORDER BY  bmbh    ${orderindex} ${ordertype}")
	@Arguments( { "tj", "orderindex", "ordertype" })
	@UseCache(false)
	public DaoPage getBmglOrder(String tj, String orderindex, String ordertype);
	
	*//**
	 * 列表页查询语句
	 * 
	 * @param tj
	 * @return
	 *//*
	@Sql("	select jg.id,jg.jgmc bmmc,jg.fjgbh parent,bmlx.paramText bmlx,jg.bmbm,jg.memo bz,zgn.gnzjd,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) level,jg.px, "
			+ " CASE  zgn.gnzjd>0 when 1 then 'false' ELSE 'true' end isLeaf,CASE  jg.id='1303' when 1 then 'true' ELSE 'FALSE' end expanded "
			+ "	 from systemzzjg jg "
			+ " left join csst bmlx on bmlx.paramtype='系统管理' and bmlx.paramname='部门类型' and bmlx.paramvalue=jg.deptType"
			+ "		LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID where jg.jlzt='未删除' and jg.id<>15 ${tj}  group by  jg.id   "
			+ " ORDER BY  bmbh     ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DaoPage getBmglxx(String tj);
	
	*//**
	 * 列表页查询总数方法
	 * 
	 * @param tj
	 * @return
	 *//*
	@Sql("select count(*) from (  select jg.id,jg.jgmc bmmc,jg.fjgbh parent,bmlx.paramText bmlx,jg.bmbm,jg.memo bz,zgn.gnzjd,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) level, "
			+ " CASE  zgn.gnzjd>0 when 1 then 'false' ELSE 'true' end isLeaf,CASE  jg.id='1303' when 1 then 'true' ELSE 'FALSE' end expanded "
			+ "	 from systemzzjg jg "
			+ " left join csst bmlx on bmlx.paramtype='系统管理' and bmlx.paramname='部门类型' and bmlx.paramvalue=jg.deptType"
			+ "		LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID where jg.jlzt='未删除' and jg.id<>15 ${tj}  group by  jg.id   "
			+ " ORDER BY  bmbh      )   ")
	@Arguments( { "tj" })
	public int getBmglCount(String tj);
*/
	/**
	 * 添加方法
	 * 
	 * @param jgmc
	 * @param bmbm
	 * @param fjgbh
	 * @param deptType
	 * @param areaCode
	 * @param memo
	 * @param ssgydw
	 * @param deptnobm
	 * @return
	 */
	@Sql("insert into systemzzjg (jgmc,bm,fjgbh,deptType,areaCode,memo,ssgydw,bmbm)values (?,?,?,?,?,?,?,?) ")
	@UseCache(false)
	public int insertData(String id,String jgmc, String bmbm, String fjgbh,
			String deptType, String areaCode, String memo, String ssgydw,
			String deptnobm);

	/**
	 * 修改方法
	 * 
	 * @param jgmc
	 * @param fjgbh
	 * @param deptType
	 * @param areaCode
	 * @param memo
	 * @param ssgydw
	 * @param bmbm
	 * @param newbmbh
	 * @param id
	 * @return
	 */
	@Sql("update systemzzjg set jgmc=?,fjgbh=?,deptType=?,areaCode=? ,memo=?,ssgydw=?,bmbm=?,bmbh=?,px=? where id=?")
	@UseCache(false)
	public int updateData(String jgmc, String fjgbh, String deptType,
			String areaCode, String memo, String ssgydw, String bmbm,
			String newbmbh,int px, String id);
	/**
	 * 修改部门编码
	 * @param newbmbh
	 * @param id
	 * @return
	 */
	@Sql(" update systemzzjg set bmbh=? where id=?  ")
	@UseCache(false)
	public int updateBm(String newbmbh, String id);

	/**
	 * 添加jgbh方法
	 * 
	 * @return
	 */
	@Sql("update systemzzjg set jgbh = id ")
	@UseCache(false)
	public int updateJgbh();

	/**
	 * 删除方法
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("update systemzzjg set jlzt='已删除' where id in (${tj})")
	@Arguments( { "tj" })
	@UseCache(false)
	public int deleteData(String tj);
	
	@Sql("select count(*) from systemrygl_ryjl where ejdwbm in (${tj})")
	@Arguments( { "tj" })
	@UseCache(false)
	public int checkEmp(String tj);

	/**
	 * 查询所属管养单位方法
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select DISTINCT id, ssgydw from  systemzzjg  where  jlzt ='未删除' and ssgydw is not null ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List getSsgydw(String tj);

	/**
	 * 查询部门名称方法
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select id, jgmc from  systemzzjg  where  jlzt ='未删除' ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List getbmbm(String tj);

	/**
	 * 查询部门等级名称
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select    id ,jgdj from  systemzzjg  where  jlzt ='未删除' ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List getbmdj(String tj);
	
	@Sql("select   jgmc   from systemzzjg  where  jlzt ='未删除'  ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap getsjbmmc(String tj);

	@Sql("select * from systemzzjg where jlzt='未删除' ${tj} order by px")
	@Arguments( { "tj" })
	@UseCache(false)
	public List getzzjg(String tj);

	/**
	 * 查询上级部门
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select b.id,b.bm ,b.bmbh from systemzzjg   a "
			+ "	 JOIN systemzzjg b on a.id = b.fjgbh  where a.jlzt='未删除' ${tj} ORDER BY id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> getsjbm(String tj);
	@Sql("select b.id,b.bm ,b.bmbhd ,b.FJGBH  from systemzzjg   a "
			+ "	 JOIN systemzzjg b on a.id = b.fjgbh  where a.jlzt='未删除' ${tj} ORDER BY id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> getsj(String tj);
	@Sql("select count(*) count from (select b.id,b.bm ,b.bmbh from systemzzjg   a "
			+ "	 JOIN systemzzjg b on a.id = b.fjgbh  where a.jlzt='未删除' ${tj} ORDER BY id desc ) a ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap getsjbmcount(String tj);
	/**
	 * 查询上级部门
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select bm  from systemzzjg   where jlzt='未删除' ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap getssjbm(String tj);

	/**
	 * 修改方法中判断是否修改一条或多少条
	 * 
	 * @param tj
	 * @return
	 */
	@Sql(" select count(*)count  from systemzzjg   a   JOIN systemzzjg b on a.bm = b.fjgbh  where a.jlzt='未删除'  ${tj} ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap selectCounts(String tj);
	@Sql(" select count(*)count  from systemzzjg   a   JOIN systemzzjg b on a.id = b.fjgbh  where a.jlzt='未删除'  ${tj} ")
	@Arguments( { "tj" })
	@UseCache(false)
	public String selectCount(String tj);

	/**
	 * 查询删除上级部门
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select b.id,case when b.id is null then 0 else 1 end  count  from systemzzjg   a "
			+ "	LEFT JOIN systemzzjg b on a.id = b.fjgbh and b.jlzt='未删除'   where a.jlzt='未删除'  ${tj} ORDER BY a.id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> findById(String tj);

	/**
	 * 查询删除上级部门
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select b.id  from  systemzzjg a  JOIN systemzzjg b  on a.jgbh = b.fjgbh  and b.jlzt='未删除'  where a.jlzt='未删除'  ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> selectBy(String tj);

	/**
	 * 查询上级部门编号
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select * from  systemzzjg where   jlzt='未删除' and bmbh is not null    ${tj}   ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap getbmbh(String tj);

	/**
	 * 查询上级部门编号
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("  SELECT id  from systemzzjg where  1=1 ${tj} ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap getNewId(String tj);
	/**
	 * 查询上级部门编号
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("  SELECT *  from systemzzjg where 1=1 ${tj}  order by id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap findId(String tj);

	/**
	 * 添加部门编号方法
	 * 
	 * @param tj7
	 * @param id
	 * @return
	 */
	@Sql("  Update  systemzzjg set bmbh=?  where id= ? ")
	@UseCache(false)
	public int UpdateBmbh(String tj, String id);

	/**
	 * 返填
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("  select * from   systemzzjg where  jlzt='未删除' ${tj} ")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> getfulldata(String tj);

	/**
	 * 查询到上级不得部门编号
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select bmbh from  systemzzjg where  jlzt='未删除'  ${tj}  ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap findbmbh(String tj);

	/**
	 * 查询到上级不得部门编号
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select fjgbh from  systemzzjg where  jlzt='未删除'  ${tj11}  ")
	@Arguments( { "tj11" })
	@UseCache(false)
	public DBMap findfjgbh(String tj11);

	/**
	 * 编码重复验证
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select bmbm from  systemzzjg where  jlzt='未删除'  ${tj}")
	@Arguments( { "tj" })
	@UseCache(false)
	public List<DBMap> findbmbm(String tj);
	
	
	@Sql("select * from  systemzzjg where  jlzt='未删除'  ${tj}")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap select(String tj);

	
	@Sql("select * from  systemzzjg where 1=1   and id is not null  ${tj}     order by id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DBMap selectid(String tj);
	
	@Sql("select count(*) from  systemzzjg where jgbh = '${tj}' and jlzt = '未删除' order by id desc ")
	@Arguments( { "tj" })
	@UseCache(false)
	public int checkId(String tj);
	
	@Sql("select count(*) from  systemzzjg where JGMC = '${tj}' and jlzt = '未删除' and fjgbh = '${fjgbh}' order by id desc ")
	@Arguments( { "tj","fjgbh" })
	@UseCache(false)
	public int checkName(String tj,String fjgbh);
	
	@Sql("select count(*) from  systemzzjg where JGMC = '${tj}' and id != '${id}' and jlzt = '未删除'and fjgbh = '${fjgbh}' order by id desc ")
	@Arguments( { "tj" ,"id","fjgbh"})
	@UseCache(false)
	public int checkName(String tj,String id,String fjgbh);
 
	@Sql("insert into systemzzjg (id,jgbh,jgmc,bm,fjgbh,memo,bmbm,bmbh,jc,px) values (?,?,?,?,?,?,?,?,?,?)")
	@UseCache(false)
	public int insertDatas(String id,String jgbh,String jgmc,String bm,String fjgbh,String memo,String bmbm,String bmbh,String jc,int px) ;

	/**
	 * 修改方法
	 * 
	 * @param jgmc
	 * @param fjgbh
	 * @param deptType
	 * @param areaCode
	 * @param memo
	 * @param ssgydw
	 * @param bmbm
	 * @param newbmbh
	 * @param id
	 * @return
	 */
	@Sql("update systemzzjg set jgmc=?,fjgbh=?,memo=?,jc=?,bmbh=?,bmbm=?,px=? where id=?")
	@UseCache(false)
	public int updateData(String jgmc, String fjgbh, String deptType,
			 String jc,String bmbh,String bmbm,  int px,String id);
	
	@Sql("update systemzzjg set jgmc=?,memo=?,jc=?,px=? where id=?")
	@UseCache(false)
	public int updateData(String jgmc, String deptType,
			 String jc, int px, String id);
	/**
	
	/**
	 * 新增上级部门的子节点
	 * 
	 * @param tj
	 * @return
	 */
	@Sql("select bm from  systemzzjg where  jlzt='未删除' and jgbh = ?  ")
	@UseCache(false)
	public String findbm(String tj);

	/**
	 * 排序修改
	 * 
	 * @param px
	 * @param id
	 * @return
	 */
	@Sql("update systemzzjg set px=? where id=?")
	@UseCache(false)
	public int pxUpdate(String px, String id);
	
	
	
	
	
	@Sql(" select  jg.id,jg.jgmc bmmc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) levels ,jg.px  ,zgn.gnzjd,CASE   when zgn.gnzjd>0 then 'FALSE' ELSE 'true' end isLeaf,CASE   when jg.id='1303'   then 'true' ELSE 'FALSE' end expanded   "
			+"	from SYSTEMZZJG jg   "
			+"	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID  "
			+"	where jg.jlzt='未删除' and jg.id<>15  ${tj} "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,zgn.gnzjd  " 
			+"	ORDER BY  bmbh    ${orderindex} ${ordertype}")
		@Arguments( { "tj", "orderindex", "ordertype" })
		@UseCache(false)
		public DaoPage getjcxmOrder(String tj, String orderindex, String ordertype);

		/**
		 * 列表页查询语句
		 * 
		 * @param tj
		 * @return
		 */
		@Sql(" select  jg.id,jg.jgmc bmmc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) levels ,jg.px  "
				+ " ,zgn.gnzjd,CASE   when zgn.gnzjd>0 then 'FALSE' ELSE 'true' end isLeaf , CASE   when jg.id='1303'   then 'true' ELSE 'FALSE' end expanded   "
			+"	from SYSTEMZZJG jg   "
			+"	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID  "
			+"	where jg.jlzt='未删除' and jg.id<>15  and jg.BMBH  is not null   ${tj}  "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,zgn.gnzjd  " 
			+"	ORDER BY bmbh ")
		@Arguments( { "tj" })
		@UseCache(false)
		public DaoPage getjcxmxx(String tj);

		/**
		 * 列表页查询总数方法
		 * 
		 * @param tj
		 * @return
		 */
//		@Sql("select count(*) from ( select  jg.id,jg.jgmc bmmc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,LENGTH(jg.bmbh) - LENGTH(REPLACE(jg.bmbh,'-','')) levels ,jg.px  ,zgn.gnzjd,CASE   when zgn.gnzjd>0 then 'FALSE' ELSE 'true' end isLeaf,CASE   when jg.id='1303'  "
//				+ "  then 'true' ELSE 'FALSE' end expanded   "
//			+"	from SYSTEMZZJG jg   "
//			+"	LEFT JOIN (select count(*) gnzjd,zgn.fjgbh from systemzzjg zgn  WHERE JLZT='未删除' GROUP BY zgn.fjgbh) zgn  ON  zgn.fjgbh = jg.ID  "
//			+"	where jg.jlzt='未删除' and jg.id<>15   and jg.BMBH  is not null ${tj}   "
//			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,zgn.gnzjd  " 
//			+"	ORDER BY  bmbh      )   ")
		@Sql("select count(*) jcxmsl, b.jccplb  from zzzzjckm b where jlzt='未删除' group by b.jccplb")
		@Arguments( { "tj" }) 
		@UseCache(false)
		public int getjcxmCount(String tj);

}
