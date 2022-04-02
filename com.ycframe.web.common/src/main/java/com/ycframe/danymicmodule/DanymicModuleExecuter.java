package com.ycframe.danymicmodule;

import java.util.Map;


/**
 * 动态模块执行接口
 * @author Administrator
 *
 */
public interface DanymicModuleExecuter {
	public Object execute(Map params) throws DanymicModuleException;
}
