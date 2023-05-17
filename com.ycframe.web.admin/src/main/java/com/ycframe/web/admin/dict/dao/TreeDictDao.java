package com.ycframe.web.admin.dict.dao;

import com.ycframe.database.dao.Dao;
import com.ycframe.database.dao.annotation.Sql;
import com.ycframe.database.dao.annotation.UseCache;
import com.ycframe.database.query.Query;
import com.ycframe.database.query.Update; 

public interface TreeDictDao extends Dao{
	@Sql("update systemDict set name=?,code=?,state=?,memo=? where id=?")
	@UseCache(false)
	public Update updateDict(String name,String code,int state,String memo,String id);
	
	@Sql("insert into systemDict (id,name,code,state,memo) values (?,?,?,?,?)")
	@UseCache(false)
	public int insertDict(String id,String name,String code,int state,String memo);
	
	@Sql("select "
			+ "ifnull(id,'') as id,"
			+ "ifnull(name,'') as name,"
			+ "ifnull(code,'') as code,"
			+ "ifnull(memo,'') as memo,"
			+ "case state when 0 then '正常' when 1 then '禁用' end as stateLabel,"
			+ "ifnull(state,'') as state,"
			+ "DATE_FORMAT(jlsj,'%Y-%m-%d %T') as createTime"
			+ " from systemDict where jlzt = 0")
	@UseCache(false)
	public Query dictQuery();
	
	@Sql("update systemDict set jlzt=1")
	@UseCache(false)
	public Update delDict();
	
	@Sql("update systemDictItem set name=?,code=?,state=?,sort=?,defaultVal=?,style=?,memo=?,dictId=? where id=?")
	@UseCache(false)
	public Update updateDictItem(String name,String code,int state,int sort,int defaultVal,int style,String memo,String dictId,String id);
	
	@Sql("insert into systemDictItem (id,name,code,state,sort,defaultVal,style,memo,dictId) values (?,?,?,?,?,?,?,?,?)")
	@UseCache(false)
	public int insertDictItem(String id,String name,String code,int state,int sort,int defaultVal,int style,String memo,String dictId);
	
	@Sql("select "
			+ "ifnull(id,'') as id,"
			+ "ifnull(name,'') as name,"
			+ "ifnull(code,'') as code,"
			+ "case state when 0 then '正常' when 1 then '禁用' end as stateLabel,"
			+ "ifnull(state,'') as state,"
			+ "ifnull(sort,'') as sort,"
			+ "case defaultVal when 0 then '是' when 1 then '否' end as defaultValLabel,"
			+ "ifnull(defaultVal,'') as defaultVal,"
			+ "case style when 0 then '文本' when 1 then '默认标签' when 2 then '主要标签' when 3 then '成功标签' when 4 then '信息标签' when 5 then '警告标签' when 6 then '危险标签' end as styleLabel,"
			+ "ifnull(style,'') as style,"
			+ "ifnull(memo,'') as memo "
			+ " from systemDictItem where jlzt = 0")
	@UseCache(false)
	public Query dictItemQuery();
	
	@Sql("update systemDictItem set jlzt=1 ")
	@UseCache(false)
	public Update delDictItem();
}
