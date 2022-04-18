package com.ycframe.validator;

import java.util.Date;
import java.util.List;
import java.util.Map;
 
public interface MapValidator {
	/**
	 * 校验
	 * @param data  被校验对象，Map 类型
	 * @return true通过，false不通过
	 */
 	public boolean isValid(Map<String,Object> data);
 	
 	/**
	 * 校验
	 * @param data  被校验对象，Map 类型
	 * @return 如果有未通过的要求，返回key message
	 */
 	public Map<String,String[]> valid(Map<String,Object> data);  
 
 	/**
	 * 长度校验
	 * @return 
	 */
	public MapValidator length(String key);
	
	/**
	 * 长度校验
	 * @param min 最短
	 * @param max 最长
	 * @return
	 */
	public MapValidator length(String key,int min,int max);
	
	/**
	 * 长度校验
	 * @param min 最短
	 * @param max 最长
	 * @param message 返回消息提示
	 * @return
	 */
	public MapValidator length(String key,int min,int max,String message);
	
	/**
	 * 空校验 
	 * @return
	 */
	public MapValidator Null(String key);
	
	/**
	 * 空校验
	 * @param message 返回消息提示
	 * @return
	 */
	public MapValidator Null(String key,String message);
	
	/**
	 * 非空校验 
	 * @return
	 */
	public MapValidator NotNull(String key);
	
	/**
	 * 非空校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator NotNull(String key,String message);
	
	/**
	 * 非空字符串校验  
	 * @return
	 */
	public MapValidator NotBlank(String key);
	
	/**
	 * 非空字符串校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator NotBlank(String key,String message);
	
	/**
	 * 正则表达式校验 
	 * @param regexp 正则表达式 
	 * @return
	 */
	public MapValidator Pattern(String key,String regexp);
	
	
	/**
	 * 正则表达式校验 
	 * @param regexp 正则表达式
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Pattern(String key,String regexp,String message);	

	//NotEmpty
	//Email
	//URL
	//Size
	//Range

	/**
	 * 最大值校验 
	 * @param max 最大值 
	 * @return
	 */
	public MapValidator Max(String key,long max);
	
	/**
	 * 最大值校验 
	 * @param max 最大值
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Max(String key,long max,String message);	
	
	/**
	 * 最小值校验 
	 * @param min 最小值 
	 * @return
	 */
	public MapValidator Min(String key,long max);
	
	/**
	 * 最小值校验 
	 * @param min 最小值
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Min(String key,long max,String message);	
	
	/**
	 * 数值格式校验 
	 * @return
	 */
	public MapValidator Digits(String key); 
	
	/**
	 * 数值格式校验 
	 * @param integer 整数部分最大长度
	 * @param fraction 小数部分最大长度
	 * @return
	 */
	public MapValidator Digits(String key,int integer, int fraction);
	
	/**
	 * 数值格式校验 
	 * @param integer 整数部分最大长度
	 * @param fraction 小数部分最大长度
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Digits(String key,int integer, int fraction,String message);	

	/**
	 * 过去的时间校验 
	 * @return
	 */
	public MapValidator Past(String key);
	
	/**
	 * 过去的时间校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Past(String key,String message);	
	
	/**
	 * 未来的时间校验 
	 * @return
	 */
	public MapValidator Future(String key);
	
	/**
	 * 未来的时间校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public MapValidator Future(String key,String message);	
	 
	
}
