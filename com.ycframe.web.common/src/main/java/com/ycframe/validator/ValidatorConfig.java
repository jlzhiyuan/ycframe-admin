package com.ycframe.validator;

import javax.validation.ConstraintValidator;

public class ValidatorConfig {
	private String key;
	private String message;
	private ConstraintValidator validator;
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public ConstraintValidator getValidator() {
		return validator;
	}
	public void setValidator(ConstraintValidator validator) {
		this.validator = validator;
	}
	public ValidatorConfig(String key, String message,
			ConstraintValidator validator) {
		super();
		this.key = key;
		this.message = message;
		this.validator = validator;
	}
	
}
