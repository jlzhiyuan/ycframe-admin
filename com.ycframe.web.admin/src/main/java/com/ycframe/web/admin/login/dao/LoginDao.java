package com.ycframe.web.admin.login.dao;
/**
 * 
 * @author my
 *
 */
import java.util.List;
import java.util.List;
import com.ycframe.database.dao.DaoPage;
import com.ycframe.database.dao.IDao;
import com.ycframe.database.dao.annotation.Arguments;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.util.DBMap; 
public interface LoginDao  extends IDao{
	
	
	
	/**
	 * 返填方法
	 * @param tj
	 * @return
	 */
	@Sql("  select a.id,c.jgmc,c.BM,a.xm userName,b.xm XM,b.mmcodersa,b.mmcode, a.Sex sex,a.jc telephone1,a.Telepone2 telephone2 from systemrygl_ryjl a  JOIN   systemry b on a.glry = b.id "
			+" LEFT  JOIN systemzzjg  c on  a.ejdwbm  = c.id  where a.jlzt = 1  ${tj} ")
	@Arguments({"userid"})
	@UseCache(false)
	public List<DBMap> getUser(String userid);


	/**
	 * 查询用户�?
	 * @param YHM
	 * @return
	 */
	@Sql("  select a.id,b.id,c.jgmc,c.BM,a.xm userName,b.xm XM,b.mmcodersa ,b.mmcode  from systemrygl_ryjl a  JOIN   systemry b on a.glry = b.id "
		+"	  LEFT JOIN systemzzjg  c on  a.ejdwbm  = c.bm  where a.jlzt ='未删除' ${tj}   ")
	@Arguments({"tj"})
	public List findByYHM(String YHM);	
	
}
