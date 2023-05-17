package com.ycframe.web.admin.dict.webdo;

import java.util.List;
import java.util.Map;

import com.ycframe.utils.StringUtils;
import com.ycframe.utils.map.ConvertHashMap;
import com.ycframe.validator.MapValidator;
import com.ycframe.web.admin.dict.service.DictService;
import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.common.exception.ServiceException;
import com.ycframe.web.context.result.JsonResult;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.context.result.TextResult;
import com.ycframe.web.utils.JsonUtils;
import com.ycframe.web.utils.SystemInfoLog;

@Webdo(url="/dict")
public class DictWebdo  extends WebDo{
	String[] function = new String[] { "系统维护", "字典维护" };

	private final String APPNAME = "admin";
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return TextResult.Result("success!");
	}
	
	public Result saveDict(){
		ConvertHashMap paramMap = this.getParamMap(); 
		String inputvalue = JsonUtils.toString(paramMap);  
		MapValidator validator;
		
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		}
		
		validator.NotNull("name", "字典名称为空").NotBlank("name", "字典名称不能为空")
		.NotNull("code", "字典编码不能为空").NotBlank("code", "字典编码不能为空")
		.NotNull("state", "状态不能为空").NotBlank("state", "状态不能为空");
		
		Map<String, List<String>> afterValid = validator.valid(paramMap);
		if(afterValid.size()>0){
			StringBuffer validSb = new StringBuffer();
			for (String key : afterValid.keySet()) {
				List<String> valids = afterValid.get(key);
				for (String valid : valids) {
					validSb.append(valid+"；");
				}
			}
			return JsonResult.Result(null).setCode(1).setMessage(validSb.toString());
		} 
		
		String id = paramMap.getString("id");
		String name = paramMap.getString("name");
		String code = paramMap.getString("code");
		int state = paramMap.getInteger("state");
		String memo = paramMap.getString("memo");
		
		
		DictService service = new DictService();
		try {
			service.saveDict(id,name,code,state,memo);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 保存字典成功！",getRequest());	
			return JsonResult.Result(null).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 保存字典失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	public Result dictQuery(){
		ConvertHashMap paramMap = this.getParamMap(); 
		
		String inputvalue = JsonUtils.toString(paramMap);  
		
		String name = paramMap.getString("name");
		String code = paramMap.getString("code");
		String state = paramMap.getString("state");
		int currentPage = paramMap.getInteger("currentPage");
		int pageSize = paramMap.getInteger("pageSize");
		 
		DictService service = new DictService();
		Map<String, Object> rtnMap;
		
		try {
			rtnMap = service.dictQuery(name, code, state,currentPage,pageSize);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 查询字典成功！",getRequest());	
			return JsonResult.Result(rtnMap).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 查询字典失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	public Result dictDel(){
		ConvertHashMap paramMap = this.getParamMap(); 
		String inputvalue = JsonUtils.toString(paramMap);  
		MapValidator validator;
		
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		}
		
		validator.NotNull("id", "ID为空").NotBlank("id", "ID为空");
		
		Map<String, List<String>> afterValid = validator.valid(paramMap);
		if(afterValid.size()>0){
			StringBuffer validSb = new StringBuffer();
			for (String key : afterValid.keySet()) {
				List<String> valids = afterValid.get(key);
				for (String valid : valids) {
					validSb.append(valid+"；");
				}
			}
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+validSb.toString(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		} 
		
		String id = paramMap.getString("id");
		
		DictService service = new DictService();
		try {
			service.dictDel(id);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 删除字典成功！",getRequest());	
			return JsonResult.Result(null).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 删除字典失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	public Result saveDictItem(){
		ConvertHashMap paramMap = this.getParamMap(); 
		String inputvalue = JsonUtils.toString(paramMap);  
		MapValidator validator;
		
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		}
		
		validator.NotNull("name", "字典名称为空").NotBlank("name", "字典名称不能为空")
		.NotNull("code", "字典编码不能为空").NotBlank("code", "字典编码不能为空")
		.NotNull("state", "状态不能为空").NotBlank("state", "状态不能为空")
		.NotNull("sort", "排序不能为空").NotBlank("sort", "排序不能为空")
		.NotNull("defaultVal", "默认不能为空").NotBlank("defaultVal", "默认不能为空")
		.NotNull("style", "样式不能为空").NotBlank("style", "样式不能为空")
		.NotNull("dictId", "字典ID不能为空").NotBlank("dictId", "字典ID不能为空");
		
		Map<String, List<String>> afterValid = validator.valid(paramMap);
		if(afterValid.size()>0){
			StringBuffer validSb = new StringBuffer();
			for (String key : afterValid.keySet()) {
				List<String> valids = afterValid.get(key);
				for (String valid : valids) {
					validSb.append(valid+"；");
				}
			}
			return JsonResult.Result(null).setCode(1).setMessage(validSb.toString());
		} 
		
		String id = paramMap.getString("id");
		String name = paramMap.getString("name");
		String code = paramMap.getString("code");
		int state = paramMap.getInteger("state");
		int style = paramMap.getInteger("style");
		int sort = paramMap.getInteger("sort");
		int defaultVal = paramMap.getInteger("defaultVal");
		String memo = paramMap.getString("memo");
		String dictId = paramMap.getString("dictId");
		
		
		DictService service = new DictService();
		try {
			service.saveDictItem(id,name,code,state,sort,defaultVal,style,memo,dictId);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 保存字典项成功！",getRequest());	
			return JsonResult.Result(null).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 保存字典项失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	public Result dictItemQuery(){
		ConvertHashMap paramMap = this.getParamMap(); 
		String inputvalue = JsonUtils.toString(paramMap);  
		MapValidator validator;
		
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		}
		
		validator.NotNull("dictId", "字典ID为空").NotBlank("dictId", "字典ID为空");
		
		Map<String, List<String>> afterValid = validator.valid(paramMap);
		if(afterValid.size()>0){
			StringBuffer validSb = new StringBuffer();
			for (String key : afterValid.keySet()) {
				List<String> valids = afterValid.get(key);
				for (String valid : valids) {
					validSb.append(valid+"；");
				}
			}
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+validSb.toString(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		} 
		
		String dictId = paramMap.getString("dictId");
		String name = paramMap.getString("name");
		String code = paramMap.getString("code");
		String state = paramMap.getString("state");
		int currentPage = paramMap.getInteger("currentPage");
		int pageSize = paramMap.getInteger("pageSize");
		 
		DictService service = new DictService();
		Map<String, Object> rtnMap;
		
		try {
			rtnMap = service.dictItemQuery(dictId,name, code, state,currentPage,pageSize);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 查询字典成功！",getRequest());	
			return JsonResult.Result(rtnMap).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 查询字典失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	public Result dictItemDel(){
		ConvertHashMap paramMap = this.getParamMap(); 
		String inputvalue = JsonUtils.toString(paramMap);  
		MapValidator validator;
		
		try {
			validator = com.ycframe.validator.ValidatorFactory.getMapValidator();
		} catch (Exception e) {
			e.printStackTrace();
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		}
		
		validator.NotNull("id", "ID为空").NotBlank("id", "ID为空");
		
		Map<String, List<String>> afterValid = validator.valid(paramMap);
		if(afterValid.size()>0){
			StringBuffer validSb = new StringBuffer();
			for (String key : afterValid.keySet()) {
				List<String> valids = afterValid.get(key);
				for (String valid : valids) {
					validSb.append(valid+"；");
				}
			}
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 验证对象内部错误！"+validSb.toString(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage("内部错误");
		} 
		
		String id = paramMap.getString("id");
		
		DictService service = new DictService();
		try {
			service.dictItemDel(id);
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.SUCCESS,"输入数据 : "+inputvalue+"\r\n输出数据  : 删除字典成功！",getRequest());	
			return JsonResult.Result(null).setCode(0);
		} catch (ServiceException e) {  
			SystemInfoLog.actionLog(APPNAME,StringUtils.join(function, "_"), SystemInfoLog.SELECT,SystemInfoLog.ERROR,"输入数据 : "+inputvalue+"\r\n输出数据  : 删除字典失败！"+e.getMessage(),getRequest());	
			return JsonResult.Result(null).setCode(1).setMessage(e.getMessage());
		} 
		
	}
	
	
}
