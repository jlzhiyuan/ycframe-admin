package com.ycframe.danymicmodule;


/**
 * 动态模块实体工厂接口
 * @author Administrator
 *
 */
public interface DanymicModuleFactory {
	public DanymicModule getDanymicModule(String code) throws DanymicModuleException;
}
