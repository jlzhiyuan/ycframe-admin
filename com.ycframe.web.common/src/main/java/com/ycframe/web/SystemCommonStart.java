package com.ycframe.web;

import com.ycframe.web.annotation.Webstart;
import com.ycframe.web.base.WebEvent;

@Webstart
public class SystemCommonStart extends WebEvent {
	
	@Override
	public void run() {  
		System.out.println("SystemCommonStart");
 
	} 
}
