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
import javax.validation.constraints.Pattern.Flag;

import org.apache.commons.collections.map.MultiValueMap;
import org.hibernate.validator.HibernateValidator;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.internal.engine.constraintvalidation.ConstraintValidatorContextImpl;
import org.hibernate.validator.spi.time.TimeProvider;

import com.ycframe.validator.ObjectValidator;
import com.ycframe.validator.ValidatorConfig;

public class ObjectValidatorHibernate  implements ObjectValidator{
	List<ValidatorConfig> validators = new ArrayList<ValidatorConfig>();
	ConstraintValidatorContextImpl constraintValidatorContext = null;
	public ObjectValidatorHibernate() throws Exception{
		 ValidatorFactory validatorFactory = Validation.byProvider( HibernateValidator.class ).configure().failFast( true ).buildValidatorFactory();
		   Validator validator = validatorFactory.getValidator(); 
		   validator.validate(validators, Length.class);
		   ValidatorContext vc = validatorFactory.usingContext();
		Class cls = Class.forName(validatorFactory.getClass().getName());
			Field field = cls.getDeclaredField("timeProvider");
			field.setAccessible(true);
			
		   org.hibernate.validator.spi.time.TimeProvider timeprovider =(TimeProvider) field.get(validatorFactory);
		  constraintValidatorContext = new ConstraintValidatorContextImpl(null, timeprovider, null, null);  
	}
	@Override
	public boolean isValid(Object data) {
		for(ValidatorConfig cfg : validators){
			Object value = data; 
			ConstraintValidator vali = cfg.getValidator();
			boolean valiresult = vali.isValid(value, null);
			if(valiresult == false){
				return false;
			}else{
				continue;
			}
		}
		return true;
	}

	@Override
	public List<String> valid(Object data) {
		List<String> result = new ArrayList<String>();
		for(ValidatorConfig cfg : validators){
			Object value = data; 
			ConstraintValidator vali = cfg.getValidator();
			boolean valiresult = vali.isValid(value, null);
			if(valiresult == false){
				result.add(cfg.getMessage());
			}
		}
		return result;
	}

	public ObjectValidatorHibernate length(){ 
		return length(0,64);
	}
	public ObjectValidatorHibernate length(int min,int max){ 
		return length(min,max,null);
	}
	public ObjectValidatorHibernate length(int min,int max,String message){ 
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,lv);
		validators.add(calidatorcfg);
		return this;
	}
	
	
	
	
	
	@Override
	public ObjectValidatorHibernate Null() {
		// TODO Auto-generated method stub
		return Null(null);
	}
	@Override
	public ObjectValidatorHibernate Null(String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate NotNull() {
		// TODO Auto-generated method stub
		return NotNull(null);
	}

	@Override
	public ObjectValidatorHibernate NotNull( String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate NotBlank() {
		// TODO Auto-generated method stub
		return NotBlank(null);
	}

	@Override
	public ObjectValidatorHibernate NotBlank( String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate Pattern( String regexp) {
		// TODO Auto-generated method stub
		return Pattern(regexp,null);
	}

	@Override
	public ObjectValidatorHibernate Pattern( String regexp, String message) {
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
				return new Flag[]{};
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate Max( long max) {
		// TODO Auto-generated method stub
		return Max(max,null);
	}

	@Override
	public ObjectValidatorHibernate Max( long max, String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate Min( long min) {
		// TODO Auto-generated method stub
		return Min(min,null);
	}

	@Override
	public ObjectValidatorHibernate Min( long min, String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}



	@Override
	public ObjectValidatorHibernate Digits() {
		// TODO Auto-generated method stub
		return Digits(0,0);
	}
	
	@Override
	public ObjectValidatorHibernate Digits(int integer, int fraction) {
		// TODO Auto-generated method stub
		return Digits(integer,fraction,null);
	}
  
	@Override
	public ObjectValidatorHibernate Digits(int integer, int fraction, String message) {
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate Past() {
		// TODO Auto-generated method stub
		return Past(null);
	}

	@Override
	public ObjectValidatorHibernate Past( String message) { 
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
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}

	@Override
	public ObjectValidatorHibernate Future() {
		// TODO Auto-generated method stub
		return Future(null);
	}

	@Override
	public ObjectValidatorHibernate Future( String message) {
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
 		
		ValidatorConfig calidatorcfg = new ValidatorConfig("",_message,va);
		validators.add(calidatorcfg);
		return this;
	}


	 
}
