package com.ycframe.validator;

import java.util.List;
 
public interface ObjectValidator {
	
	/**
	 * 校验
	 * @param data  被校验对象，primitive 类型
	 * @return true通过，false不通过
	 */
 	public boolean isValid(Object data);
 	
 	
 	/**
	 * 校验
	 * @param data  被校验对象，primitive 类型
	 * @return 如果有未通过的要求，返回message
	 */
 	public List<String> valid(Object data);  
 	
 	/**
	 * 长度校验
	 * @return 
	 */
	public ObjectValidator length();
	
	/**
	 * 长度校验
	 * @param min 最短
	 * @param max 最长
	 * @return
	 */
	public ObjectValidator length(int min,int max);
	
	
	/**
	 * 长度校验
	 * @param min 最短
	 * @param max 最长
	 * @param message 返回消息提示
	 * @return
	 */
	public ObjectValidator length(int min,int max,String message);
	
	/**
	 * 空校验 
	 * @return
	 */
	public ObjectValidator Null();
	
	/**
	 * 空校验
	 * @param message 返回消息提示
	 * @return
	 */
	public ObjectValidator Null(String message);
	
	/**
	 * 非空校验 
	 * @return
	 */
	public ObjectValidator NotNull();
	
	/**
	 * 非空校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator NotNull(String message);
	
	
	/**
	 * 非空字符串校验  
	 * @return
	 */
	public ObjectValidator NotBlank();
	
	/**
	 * 非空字符串校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator NotBlank(String message);
	
	/**
	 * 正则表达式校验 
	 * @param regexp 正则表达式 
	 * @return
	 */
	public ObjectValidator Pattern(String regexp);
	
	/**
	 * 正则表达式校验 
	 * @param regexp 正则表达式
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Pattern(String regexp,String message);	

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
	public ObjectValidator Max(long max);
	
	/**
	 * 最大值校验 
	 * @param max 最大值
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Max(long max,String message);	
	
	/**
	 * 最小值校验 
	 * @param min 最小值 
	 * @return
	 */
	public ObjectValidator Min(long min);
	
	/**
	 * 最小值校验 
	 * @param min 最小值
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Min(long min,String message);	
	
	/**
	 * 数值格式校验 
	 * @return
	 */
	public ObjectValidator Digits(); 
	
	/**
	 * 数值格式校验 
	 * @param integer 整数部分最大长度
	 * @param fraction 小数部分最大长度
	 * @return
	 */
	public ObjectValidator Digits(int integer, int fraction);
	
	/**
	 * 数值格式校验 
	 * @param integer 整数部分最大长度
	 * @param fraction 小数部分最大长度
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Digits(int integer, int fraction,String message);	

	/**
	 * 过去的时间校验 
	 * @return
	 */
	public ObjectValidator Past();
	
	/**
	 * 过去的时间校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Past(String message);	
	
	
	/**
	 * 未来的时间校验 
	 * @return
	 */
	public ObjectValidator Future();
	
	/**
	 * 未来的时间校验 
	 * @param message 返回消息提示 
	 * @return
	 */
	public ObjectValidator Future(String message);	
	 
	
}
