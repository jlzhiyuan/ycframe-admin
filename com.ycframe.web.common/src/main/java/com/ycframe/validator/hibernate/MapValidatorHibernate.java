package com.ycframe.validator.hibernate;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.validation.ConstraintValidator;
import javax.validation.Payload;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorContext;
import javax.validation.ValidatorFactory;

import org.apache.commons.collections.map.MultiValueMap;
import org.hibernate.validator.HibernateValidator;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.internal.engine.constraintvalidation.ConstraintValidatorContextImpl;
import org.hibernate.validator.spi.time.TimeProvider;

import com.ycframe.utils.map.ConvertHashMap;
import com.ycframe.validator.MapValidator;
import com.ycframe.validator.ValidatorConfig;
 

public class MapValidatorHibernate  implements MapValidator{
	
	List<ValidatorConfig> validators = new ArrayList<ValidatorConfig>();  
	
	ConstraintValidatorContextImpl constraintValidatorContext = null;
	public MapValidatorHibernate() throws Exception{
		 ValidatorFactory validatorFactory = Validation.byProvider( HibernateValidator.class ).configure().failFast( true ).buildValidatorFactory();
		   Validator validator = validatorFactory.getValidator(); 
		   validator.validate(validators, Length.class);
		   ValidatorContext vc = validatorFactory.usingContext();
		Class cls = Class.forName(validatorFactory.getClass().getName());
			Field field = cls.getDeclaredField("timeProvider");
			field.setAccessible(true);
			
		   org.hibernate.validator.spi.time.TimeProvider timeprovider =(TimeProvider) field.get(validatorFactory);
		  constraintValidatorContext = new ConstraintValidatorContextImpl(null, timeprovider, null, null); 
		 //		 Validator validator = validatorFactory.getValidator(); 
		  //ValidatorContext s = validatorFactory.usingContext();
		  
		 // Class cls = Class.forName(validatorFactory.getClass().getName());
		 // Field field = cls.getDeclaredField("validatorFactoryScopedContext");
		 // field.setAccessible(true);
//		  ValidatorFactoryScopedContext validatorFactoryScopedContext = (ValidatorFactoryScopedContext) field.get(validatorFactory);
//		  initializacontext = validatorFactoryScopedContext.getConstraintValidatorInitializationContext();
		 // HibernateConstraintValidatorInitializationContext
//		   Clock.offset(
//				  initializacontext.getClockProvider().getClock(),
//					getEffectiveTemporalValidationTolerance( initializacontext.getTemporalValidationTolerance() )
//		  initializacontext.getClockProvider().getClock();
//		  referenceClock
		  
		 // org.apache.commons.beanutils.BeanUtils.getProperty(validatorFactory, "validatorFactoryScopedContext");
		  
	}
	
	public boolean isValid(Map<String,Object> data){
 
		for(ValidatorConfig cfg : validators){
			Object value = data.get(cfg.getKey());
			if(data instanceof ConvertHashMap){
				value = ((ConvertHashMap)data).getString(cfg.getKey());
			}else{
				value = data.get(cfg.getKey());
			} 
			ConstraintValidator vali = cfg.getValidator();
			boolean valiresult = vali.isValid(value, constraintValidatorContext);
			if(valiresult == false){
				return false;
			}else{
				continue;
			}
		}
		return true;
	}
	
	public Map<String,String> valid(Map<String,Object> data){
		Map<String,String> result = new MultiValueMap();
		for(ValidatorConfig cfg : validators){
			Object value = data.get(cfg.getKey());
			if(data instanceof ConvertHashMap){
				value = ((ConvertHashMap)data).getString(cfg.getKey());
			}else{
				value = data.get(cfg.getKey());
			} 
			ConstraintValidator vali = cfg.getValidator();
			boolean valiresult = vali.isValid(value, constraintValidatorContext);
			if(valiresult == false){
				result.put(cfg.getKey(), cfg.getMessage());
			}
		}
		return result;
		
	}
	
	
	public MapValidatorHibernate length(String key){ 
		return length(key,0,64);
	}
	public MapValidatorHibernate length(String key,int min,int max){ 
		return length(key,min,max,null);
	}
	public MapValidatorHibernate length(String key,int min,int max,String message){ 
		final int _min = min;
		final int _max = max;
		final String _message = (message==null?"长度不合格":message);
		
		org.hibernate.validator.internal.constraintvalidators.hv.LengthValidator lv = new org.hibernate.validator.internal.constraintvalidators.hv.LengthValidator();
		lv.initialize(new Length(){ 
			public Class<? extends Annotation> annotationType() { 
				return null;
			} 
			public int min() { 
				return _min;
			}  
			public int max() { 
				return _max;
			} 
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			} 
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			} 
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,lv);
		validators.add(calidatorcfg);
		return this;
	}
	
	
	
	
	
	@Override
	public MapValidator Null(String key) {
		// TODO Auto-generated method stub
		return Null(key,null);
	}
	@Override
	public MapValidator Null(String key,String message) {
		final String _message = (message==null?"数据不为空":message);
		org.hibernate.validator.internal.constraintvalidators.bv.NullValidator va = new org.hibernate.validator.internal.constraintvalidators.bv.NullValidator();
		va.initialize(new javax.validation.constraints.Null(){

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			} 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator NotNull(String key) {
		// TODO Auto-generated method stub
		return NotNull(key,null);
	}

	@Override
	public MapValidator NotNull(String key, String message) {
		final String _message = (message==null?"数据为空":message);
		org.hibernate.validator.internal.constraintvalidators.bv.NotNullValidator va = new org.hibernate.validator.internal.constraintvalidators.bv.NotNullValidator();
		va.initialize(new javax.validation.constraints.NotNull(){

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			} 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator NotBlank(String key) {
		// TODO Auto-generated method stub
		return NotBlank(key,null);
	}

	@Override
	public MapValidator NotBlank(String key, String message) {
		final String _message = (message==null?"空字符串":message);
		
		org.hibernate.validator.internal.constraintvalidators.hv.NotBlankValidator va = new org.hibernate.validator.internal.constraintvalidators.hv.NotBlankValidator();
		va.initialize(new org.hibernate.validator.constraints.NotBlank(){

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			} 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator Pattern(String key, String regexp) {
		// TODO Auto-generated method stub
		return Pattern(key,null);
	}

	@Override
	public MapValidator Pattern(String key, String regexp, String message) {
		final String _regexp = regexp;
		final String _message = (message==null?"不符合格式要求":message);
		org.hibernate.validator.internal.constraintvalidators.bv.PatternValidator va = new org.hibernate.validator.internal.constraintvalidators.bv.PatternValidator();
		va.initialize(new javax.validation.constraints.Pattern(){
 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public String regexp() {
				// TODO Auto-generated method stub
				return _regexp;
			}

			@Override
			public Flag[] flags() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}
 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator Max(String key, long max) {
		// TODO Auto-generated method stub
		return Max(key,max,null);
	}

	@Override
	public MapValidator Max(String key, long max, String message) {
		final long _max = max;
		final String _message = (message==null?"超出最大值":message);
		//org.hibernate.validator.internal.constraintvalidators.bv.MaxValidatorForCharSequence
		//org.hibernate.validator.internal.constraintvalidators.bv.MaxValidatorForNumber
		 
		org.hibernate.validator.internal.constraintvalidators.bv.MaxValidatorForCharSequence va = new org.hibernate.validator.internal.constraintvalidators.bv.MaxValidatorForCharSequence();
		va.initialize(new javax.validation.constraints.Max(){
 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public long value() {
				// TODO Auto-generated method stub
				return _max;
			}
 
 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator Min(String key, long min) {
		// TODO Auto-generated method stub
		return Min(key,min,null);
	}

	@Override
	public MapValidator Min(String key, long min, String message) {
		final long _min = min;
		final String _message = (message==null?"低于最小值":message);
		
		org.hibernate.validator.internal.constraintvalidators.bv.MinValidatorForCharSequence va = new org.hibernate.validator.internal.constraintvalidators.bv.MinValidatorForCharSequence();
		va.initialize(new javax.validation.constraints.Min(){
 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public long value() {
				// TODO Auto-generated method stub
				return _min;
			}
 
 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}



	@Override
	public MapValidator Digits(String key) {
		// TODO Auto-generated method stub
		return Digits(key,0,0,null);
	}
	
	@Override
	public MapValidator Digits(String key,int integer, int fraction) {
		// TODO Auto-generated method stub
		return Digits(key,integer,fraction,null);
	}
  
	@Override
	public MapValidator Digits(String key,int integer, int fraction, String message) {
		final int _integer = integer;
		final int _fraction = fraction;
		final String _message = (message==null?"数值格式不合格":message);
		org.hibernate.validator.internal.constraintvalidators.bv.DigitsValidatorForCharSequence va = new org.hibernate.validator.internal.constraintvalidators.bv.DigitsValidatorForCharSequence();
		va.initialize(new javax.validation.constraints.Digits(){
 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public int integer() {
				// TODO Auto-generated method stub
				return _integer;
			}

			@Override
			public int fraction() {
				// TODO Auto-generated method stub
				return _fraction;
			}
 
 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator Past(String key) {
		// TODO Auto-generated method stub
		return Past(key,null);
	}

	@Override
	public MapValidator Past(String key, String message) { 
		final String _message = (message==null?"时间是过去时间":message);
		
		org.hibernate.validator.internal.constraintvalidators.bv.past.PastValidatorForDate va = new org.hibernate.validator.internal.constraintvalidators.bv.past.PastValidatorForDate();
		va.initialize(new javax.validation.constraints.Past(){ 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			}

			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}
 
 
			});
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public MapValidator Future(String key) {
		// TODO Auto-generated method stub
		return Future(key,null);
	}

	@Override
	public MapValidator Future(String key, String message) {
		final String _message = (message==null?"时间是未来时间":message); 
		org.hibernate.validator.internal.constraintvalidators.bv.future.FutureValidatorForDate va = new org.hibernate.validator.internal.constraintvalidators.bv.future.FutureValidatorForDate();
 		va.initialize(new javax.validation.constraints.Future(){ 
			@Override
			public String message() {
				// TODO Auto-generated method stub
				return _message;
			} 
			@Override
			public Class<? extends Annotation> annotationType() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<?>[] groups() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Class<? extends Payload>[] payload() {
				// TODO Auto-generated method stub
				return null;
			}
 
 
			});
 		
		ValidatorConfig calidatorcfg = new ValidatorConfig(key,_message,va);
		validators.add(calidatorcfg);
		return this;
	}


	 
}
