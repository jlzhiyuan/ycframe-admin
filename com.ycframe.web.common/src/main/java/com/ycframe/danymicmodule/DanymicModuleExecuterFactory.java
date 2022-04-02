package com.ycframe.danymicmodule;

/**
 * 动态模块执行工厂
 * @author Administrator
 *
 */
public class DanymicModuleExecuterFactory {
	public DanymicModuleExecuter getModule(String code) throws DanymicModuleException{
		DanymicModule danymicmodule = danymicModuleFactory.getDanymicModule(code);
		ExpressionDanymicModuleExecuter executer = new ExpressionDanymicModuleExecuter(danymicmodule);
		return executer;
	}
	
	DanymicModuleFactory danymicModuleFactory=null;
	public void setDanymicModuleFactory(DanymicModuleFactory dmf){
		danymicModuleFactory = dmf;
	}
	
}
