package com.ycframe.common.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap; 
import javax.sql.DataSource;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.ycframe.database.Manager;
import com.ycframe.database.util.DBMap; 

public class DbUtils {
	public static Manager getDatabase(){
		Manager manager = new Manager("datasource","sqlscript.xml");
		return manager;
	}
	
	public static <T> T getDao(Manager manager,Class<T> t){
		try {
			return manager.getDao(t);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} 
	}
	
	private static ConcurrentHashMap<String,DataSource> datasources = new ConcurrentHashMap<String,DataSource>();
	/**
	 * 获取数据库连接池
	 * @param name   连接池名称
	 * @param connectionstring  连接url
	 * @param usname          用户名
	 * @param pword           密码
	 * @return DataSource
	 * @throws Exception
	 */
	public static DataSource getDataSource(String name,String connectionstring,String usname,String pword) throws Exception{
		return getDataSource(name,connectionstring,usname,pword,null);

	}
	
	/**
	 * 获取数据库连接池
	 * @param name   连接池名称
	 * @param connectionstring  连接url
	 * @param usname          用户名
	 * @param pword           密码
	 * @return DataSource
	 * @throws Exception
	 */
	public static DataSource getDataSource(String name,String connectionstring,String usname,String pword,Map<String,Object> params) throws Exception{
		if(datasources.containsKey(name)){
			return datasources.get(name);
		}
		Map<String,Object> param = new HashMap<String,Object>();
		param.put("name", name);
		param.put("url", connectionstring);
		param.put("username", usname);
		param.put("password", pword);
		param.put("filters", "stat");
		param.put("connection-error-retry-attempts",5);
		param.put("druid.notFullTimeoutRetryCount","5"); 
		param.put("acquire-retry-delay",3000); 
		if(params!=null){
			param.putAll(params);
		}
		DruidDataSource druidDataSource = (DruidDataSource) DruidDataSourceFactory.createDataSource(param);
		druidDataSource.setNotFullTimeoutRetryCount(5);
		druidDataSource.setConnectionErrorRetryAttempts(5);
		druidDataSource.setBreakAfterAcquireFailure(true);
		druidDataSource.setMaxWait(5000);
		datasources.put(name, druidDataSource);
        return druidDataSource;

	}
	/**
	 * 测试MySQL数据库连接是否正常
	 * @param connectionstring
	 * @param usname
	 * @param pword
	 * @return
	 */
	public static boolean CheckConnect(String connectionstring,String usname,String pword) {
		String DriverName="com.mysql.jdbc.Driver";
		String URL=connectionstring;
		String userName=usname;
		String passWord=pword;
		
		try {
			Class.forName(DriverName);
			Connection dbConn=DriverManager.getConnection(URL, userName, passWord);
			dbConn.close();
			if (!dbConn.isClosed()) {
				dbConn.close();
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false; 
		} 
	} 
	
	public static DBMap getlowercaseMap(DBMap map){
		DBMap nmap = new DBMap();
		for(String key : map.keySet())
		{
			nmap.put(key.toLowerCase(), map.get(key));
		}
		return nmap;
	}
}
