package com.ycframe.web.demo.webdo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map; 
import com.ycframe.database.Manager;
import com.ycframe.database.util.DBMap;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.demo.dao.DemoDataDao;
import com.ycframe.common.utils.DbUtils;

@Webdo(url="/demodata")
public class DemoData  extends WebDo{
	public Result getDemoData(){ 
		try {
			Manager manager = DbUtils.getDatabase();
			DemoDataDao dao = null ; 
			dao = manager.getDao(DemoDataDao.class);
			List<DBMap> dataFromDB = dao.getLotsOfData6();
			List<DBMap> displayData = new ArrayList<DBMap>();
			for (DBMap dbMap : dataFromDB) {
				DBMap dbmap2 = new DBMap();
				dbmap2.put("供电公司", dbMap.get("gs"));
				dbmap2.put("下级供电公司", dbMap.get("xgs"));
				dbmap2.put("班组", dbMap.get("bz"));
				dbmap2.put("变电站", dbMap.get("bdz"));
				dbmap2.put("变压器", dbMap.get("byq"));
				dbmap2.put("母线", dbMap.get("mx"));
				dbmap2.put("线路名称", dbMap.get("xlmc"));
				dbmap2.put("电压等级", dbMap.get("dydj"));
				dbmap2.put("线路编码", dbMap.get("xlbm"));
				dbmap2.put("异常类型", dbMap.get("wtlx"));
				dbmap2.put("异常现象", dbMap.get("wtxx"));
				/*dbmap2.put("故障数量", dbMap.get("lxsl1"));
				dbmap2.put("隐患数量", dbMap.get("lxsl2"));
				dbmap2.put("缺陷数量", dbMap.get("lxsl0"));
				dbmap2.put("短路现象数量", dbMap.get("xxsl0"));
				dbmap2.put("雷击现象数量", dbMap.get("xxsl1"));
				dbmap2.put("接地现象数量", dbMap.get("xxsl2"));
				dbmap2.put("着火现象数量", dbMap.get("xxsl3"));
				dbmap2.put("异物现象数量", dbMap.get("xxsl4"));
				dbmap2.put("引流现象数量", dbMap.get("xxsl5"));
				dbmap2.put("挖断现象数量", dbMap.get("xxsl6"));
				dbmap2.put("风现象数量", dbMap.get("xxsl7"));
				dbmap2.put("击穿现象数量", dbMap.get("xxsl8"));*/
				displayData.add(dbmap2);
			}
			Map dataToWeb = new HashMap();
			dataToWeb.put("data", displayData);
			
			
			Map configToWeb = new HashMap();
			//设置默认展示视图为经典模式，key值可替换为compact（紧凑）和flat（平铺）
			configToWeb.put("type", "classic");
			//设置可选择（可拖拽）过滤条件,这些字段将显示在表格上方
			List dataOnTop = new ArrayList();
			String onTopStr = "变压器,母线,班组,电压等级,线路名称,线路编码,异常类型,异常现象";
			for(int i = 0;i<onTopStr.split(",").length;i++){
				Map data = new HashMap();
				data.put("uniqueName", onTopStr.split(",")[i]);
				dataOnTop.add(data);
			}
			configToWeb.put("reportFilters",dataOnTop);
			//设置默认显示的字段
			List dataOnLeft = new ArrayList();
			String onLeftStr = "供电公司,下级供电公司,变电站";
			for(int i = 0;i<onLeftStr.split(",").length;i++){
				Map data = new HashMap();
				data.put("uniqueName", onLeftStr.split(",")[i]);
				dataOnLeft.add(data);
			}
			configToWeb.put("rows", dataOnLeft);
			//添加数据统计模式列（Measures）为默认值
			List columns = new ArrayList();
			Map data = new HashMap();
			data.put("uniqueName","Measures");
			columns.add(data);
			configToWeb.put("columns", columns); 
			//设置列统计方式
			List measures = new ArrayList();
			Map yclx = new HashMap();
			yclx.put("uniqueName","异常类型");
			yclx.put("aggregation","sum");//sum表示求和
			measures.add(yclx);
			
			Map ycxx = new HashMap();
			ycxx.put("uniqueName","异常现象");
			ycxx.put("aggregation","sum");
			measures.add(ycxx); 
			/*Map map9 = new HashMap();
			map9.put("uniqueName","引流现象数量");
			map9.put("aggregation","sum");
			map9.put("format","currency");
			list6.add(map9);
			
			Map map10 = new HashMap();
			map10.put("uniqueName","挖断现象数量");
			map10.put("aggregation","sum");
			map10.put("format","currency");
			list6.add(map10);
			
			Map map11 = new HashMap();
			map11.put("uniqueName","接地现象数量");
			map11.put("aggregation","sum");
			map11.put("format","currency");
			list6.add(map11);
			
			Map map12 = new HashMap();
			map12.put("uniqueName","故障数量");
			map12.put("aggregation","sum");
			map12.put("format","currency");
			list6.add(map12);
			
			Map map13 = new HashMap();
			map13.put("uniqueName","着火现象数量");
			map13.put("aggregation","sum");
			map13.put("format","currency");
			list6.add(map13);
			
			Map map14 = new HashMap();
			map14.put("uniqueName","短路现象数量");
			map14.put("aggregation","sum");
			map14.put("format","currency");
			list6.add(map14);
			
			Map map15 = new HashMap();
			map15.put("uniqueName","缺陷数量");
			map15.put("aggregation","sum");
			map15.put("format","currency");
			list6.add(map15);
			
			Map map16 = new HashMap();
			map16.put("uniqueName","隐患数量");
			map16.put("aggregation","sum");
			map16.put("format","currency");
			list6.add(map16);
			
			Map map17 = new HashMap();
			map17.put("uniqueName","雷击现象数量");
			map17.put("aggregation","sum");
			map17.put("format","currency");
			list6.add(map17);
			
			Map map18 = new HashMap();
			map18.put("uniqueName","风现象数量");
			map18.put("aggregation","sum");
			map18.put("format","currency");
			list6.add(map18);*/
			
			configToWeb.put("measures", measures);
			
			//设置默认展开项
			Map expands = new HashMap();
			
			List rows = new ArrayList();
			Map tuple = new HashMap();
			List gdgsCc = new ArrayList();
			gdgsCc.add("供电公司.国网长春供电公司");
			tuple.put("tuple",gdgsCc);
			rows.add(tuple);
			expands.put("rows", rows);
			
			configToWeb.put("expands", expands);
			dataToWeb.put("config",configToWeb);
			return JsonResult.Result( dataToWeb).setCode(0);
		} catch (Exception e) {
			List<DBMap> list = new ArrayList();
			e.printStackTrace();
			return JsonResult.Result(null).setMessage("发生错误!").setCode(1); 
		} 
	}

	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}