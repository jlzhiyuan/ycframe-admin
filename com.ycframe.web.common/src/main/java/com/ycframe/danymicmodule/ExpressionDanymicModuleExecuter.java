package com.ycframe.danymicmodule;

import java.util.HashMap;
import java.util.Map;

import com.ycframe.expression.ExpressionActuatorInterface;
import com.ycframe.expression.exception.ExpressionException;

public class ExpressionDanymicModuleExecuter implements DanymicModuleExecuter{
	private static final ExpressionActuatorInterface expression = com.ycframe.expression.ExpressionActuatorFactory.getExpressionActuator();

	final DanymicModule module;
	public ExpressionDanymicModuleExecuter(DanymicModule module){
		this.module = module;
	}
	public DanymicModule getModule(){
		return this.module;
	}
	
	public Object execute(Map params) throws DanymicModuleException{
		module.getCode();
		try {
			Map result = new HashMap();
			result.putAll(params);
			Object s = expression.excute(this.module.getSourcecode(), params);
			return s;
		} catch (ExpressionException e) {
			e.printStackTrace();
			throw new DanymicModuleException(e.getCause().toString());
		}
	}

}
