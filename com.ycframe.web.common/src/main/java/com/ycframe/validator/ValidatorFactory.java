package com.ycframe.validator;

import com.ycframe.validator.hibernate.MapValidatorHibernate;
import com.ycframe.validator.hibernate.ObjectValidatorHibernate;

public class ValidatorFactory {
	/**
	 *  获取用于验证Map内数据的Validator 
	 * @return
	 * @throws Exception
	 */
	public static MapValidator getMapValidator() throws Exception{
		return new MapValidatorHibernate();
	}
	
	/**
	 * 
	 *  获取用于验证单个对象数据的Validator 
	 *
	 * @return
	 * @throws Exception
	 */
	public static ObjectValidator getObjectValidator() throws Exception{
		return new ObjectValidatorHibernate();
	}
}
