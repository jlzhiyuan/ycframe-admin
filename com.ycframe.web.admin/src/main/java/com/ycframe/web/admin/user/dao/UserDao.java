package com.ycframe.web.admin.user.dao;
/**
 * 
 * @author my
 *
 */
import java.util.List;

import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.SqlName;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.util.DBMap; 
public interface UserDao  extends Dao{	
	
	
	/**
	 * 查询用户 
	 * @return
	 */
	@Sql(" SELECT * from systemry ry")
	@UseCache(false)
	public Query getSystemUser();	
	
	
 
	@SqlName("SystemUserInfo")
	@UseCache(false)
	public Query getSystemUserInfo(String username);	
	
	/**
	 * 返填方法
	 * @param tj
	 * @return
	 */
	@Sql("select a.id,c.jgmc,c.BM,a.xm userName,ry.xm XM,'' mmcodersa, '' mmcode, a.Sex sex,a.jc telephone1,a.Telepone2 telephone2 "
			+ " from systemry ry LEFT JOIN  systemrygl_ryjl a on a.glry = ry.id "
			+ " LEFT JOIN systemzzjg c on a.ejdwbm = c.id where ry.jlzt = 1 and ry.yhm=?") 
	@UseCache(false)
	public List<DBMap> getUser(String yhm);
	
	@Sql("select *  "
			+ " from systemry ry "
			+ " where ry.id=?") 
	@UseCache(false)
	public DBMap getUserById(String id);
 

	@Sql("   select   DISTINCT a.id,d.id yid,a.zy,  b.JGMC,b.id JGBM , d.XM userName,d.YHM YHM,a.empCode,  a.sex,a.jc,a.telepone2,d.YHZT ,b.bmbh, GROUP_CONCAT(DISTINCT r.jsmc)  js    "
			+ "	from  systemrygl_ryjl  a  " + "	 LEFT JOIN systemzzjg b on a.ejdwbm = b.id and b.jlzt='未删除' "
			+ " left  join systemryjs c on a.glry = c.ryid "
			+ " left JOIN systemjsz r  on   c.jszid = r.id  and r.ZT ='1' " + " INNER join systemry d on a.glry = d.id "
			+ " LEFT JOIN systemdataauthorityzt yhzt on a.ZT = yhzt.ztNo " + "	 "
			+ " where a.jlzt='未删除' ${tj} "
			+ " 	GROUP by  a.id,d.id ,b.JGMC,b.BM ,d.XM,d.YHM ,a.empCode, a.sex ,a.jc,a.telepone2,d.yhzt  ,b.bmbh "
			+ " ${orderTj}  ")
	@Arguments({ "tj","orderTj" })
	@UseCache(false)
	public DaoPage getRyglxx(String tj,String orderTj);
 

	@Sql("select count(*) from (  select   DISTINCT a.id,d.id yid,  b.JGMC,b.BM JGBM , d.XM userName,d.YHM ,a.empCode,  a.sex,a.jc,a.telepone2,d.YHZT ,b.bmbh, GROUP_CONCAT(DISTINCT r.jsmc)  js    "
			+ "	from  systemrygl_ryjl  a  " + "	 LEFT JOIN systemzzjg b on a.ejdwbm = b.id and b.jlzt='未删除' "
			+ " left  join systemryjs c on a.glry = c.ryid "
			+ " left JOIN systemjsz r  on   c.jszid = r.id  and r.ZT ='1' " + " INNER join systemry d on a.glry = d.id "
			+ " LEFT JOIN systemdataauthorityzt yhzt on a.ZT = yhzt.ztNo " + "	"
			+ " where a.jlzt='未删除' ${tj} "
			+ " 	GROUP by  a.id,d.id ,b.JGMC,b.BM ,d.XM,d.YHM ,a.empCode, a.sex ,a.jc,a.telepone2,d.yhzt  ,b.bmbh "
			+ " order by d.YHM  )  ttt ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int getRyglCount(String tj);
	
	@Sql("SELECT  id,jsz.jsmc text "
			+ "	from systemjsz jsz where ZT ='1' and JLZT = '未删除'")
	@UseCache(false)
	public List<DBMap> getRyJsSelect();
	
	// 人员角色查询checkbox 返填
	@Sql("SELECT COUNT(*) FROM (SELECT  CONCAT( jsz.id, CONCAT(',', CASE WHEN ryjs.ryid is null THEN '' else ryjs.ryid END)) id,jsz.jsmc, "
			+ "	CASE WHEN jsz.id=ryjs.jszid THEN 1 else 0 END acheckbox   " + "	from systemjsz jsz "
			+ "	LEFT JOIN ( SELECT * from systemryjs where ryid = '${tj}' ) ryjs ON ryjs.jszid = jsz.id  where jsz.zt='1' and jsz.JLZT='未删除') ttt ")
	@Arguments({ "tj" })
	@UseCache(false)
	public int getRyJsCount(String tj);
	
	
	// 禁用按钮
	@Sql("update systemry set id=id ")
	@UseCache(false)
	public com.ycframe.database.query.Update update();
	
	@Sql(" select  jg.id id,jg.jgmc bmmc,jg.jc,jg.fjgbh parent,jg.bmbm,jg.memo bz,jg.bmbh,jg.px  "
			+"	from SYSTEMZZJG jg   "
			+"	where jg.jlzt='未删除' ${tj}  "
			+"	group by jg.id,jg.jgmc ,jg.fjgbh ,jg.bmbm,jg.memo ,jg.bmbh,jg.bmbh,jg.bmbh,jg.px,JGBH,jg.jc  " 
			+"	ORDER BY  bmbh     ")
	@Arguments( { "tj" })
	@UseCache(false)
	public DaoPage getBmglxx(String tj);
	
	// cha出人员表中的id
	@Sql("select   glry  from systemrygl_ryjl  WHERE JLZT='未删除' and  empCode= ?   ")
	@UseCache(false)
	public List<DBMap> findById(String id);
	
	@Sql("SELECT  CONCAT( jsz.id, CONCAT(',', CASE WHEN ryjs.ryid is null THEN '' else ryjs.ryid END)) id,jsz.jsmc, "
			+ "	CASE WHEN jsz.id=ryjs.jszid THEN 1 else 0 END acheckbox   " + "	from systemjsz jsz "
			+ "	LEFT JOIN ( SELECT * from systemryjs where ryid = '${tj}' ) ryjs ON ryjs.jszid = jsz.id  where jsz.zt='1' and jsz.jlzt = '未删除'")
	@Arguments({ "tj" })
	@UseCache(false)
	public DaoPage getRyJs(String tj);
	
	@Sql(" select * from  systemrygl_ryjl where  XM = '${YHM}' and id != '${id}' and EJDWBM = '${deptID}' and JLZT = '未删除'   ")
	@Arguments({ "YHM","id","deptID" })
	@UseCache(false)
	public List findByYHM(String YHM,String id,String deptID);
	
	// 修改
	@Sql(" update systemrygl_ryjl set ejdwbm=?,xm=?,userName=?,sex=? ,jc=?,Telepone2=?,zy=? where id =? ")
	@UseCache(false)
	public int updatetryjl(String deptID, String mx,String userName, String sex, String Telepone1, String Telepone2,String zy, String id);
	
	@Sql(" update systemry set XM=? where id =(select glry from systemrygl_ryjl where empCode = ? ) ")
	@UseCache(false)
	public int updatery1(String xm, String id);
	
	// 删除角色
	@Sql("DELETE from  systemryjs WHERE RYID = '${tj}'")
	@Arguments({ "tj" })
	@UseCache(false)
	public int updateJs(String tj);
	
	// 添加角色
	@Sql("insert into systemryjs (ryid,jszid) values(?,?)")
	@UseCache(false)
	public int insertJs(String id, String tj);
	
	@Sql(" select * from  systemry where  YHM = ? and JLZT = 1   ")
	@UseCache(false)
	public List findByYHM(String YHM);
	
	@Sql(" select * from  systemrygl_ryjl where  userName = ? and JLZT = '未删除'   ")
	@UseCache(false)
	public List findByDlm(String YHM);
	
	@Sql(" select * from  systemrygl_ryjl where  empCode = ? and JLZT = '未删除'   ")
	@UseCache(false)
	public List findByCode(String code);
	
	// 添加systemry字段
	@Sql(" insert into systemry (id,XM,YHM,mmcodersa, mmcode,ecccode,YHZT)values(?,?,?,?,?,?,'正常') ")
	@UseCache(false)
	public int insertry(String id, String XM, String YHM, String mm, String mms, String mmc);
	// 添加
	@Sql("insert into  systemrygl_ryjl (id,ejdwbm,xm,userName,GlRY,empCode,sex,jc,Telepone2,zy) values(?,?,?,?,?,?,?,?,?,?) ")
	@UseCache(false)
	public int insertryjl(String id,String deptID, String xm, String userName, String GlRY, String empCode, String sex,
			String Telepone1, String Telepone2,String zy);
	
	// 修改当前登录人密码
	@Sql(" update systemry set mmcodersa = ?, mmcode= ? where id = ?  ")
	@UseCache(false)
	public int xgdqddrmm(String mmcodersa,String mmcode, String id);
	
	@Sql(" update systemry set mmcodersa = ?, mmcode= ? where yhm = ?  ")
	@UseCache(false)
	public int xgdqddrmm2(String mmcodersa,String mmcode, String id);
	
	// 修改当前登录人密码
	@Sql(" update systemrygl_ryjl set jc = ?, Telepone2= ?,userName = ?,XM = ? where GLRY = ?  ")
	@UseCache(false)
	public int grxxxg(String jc,String Telepone2,String userName,String XM, String GLRY);
	
	// 修改当前登录人密码
	@Sql(" update systemry set xm = ?  where id = ?  ")
	@UseCache(false)
	public int grxxxg2(String xm,String id);
}
