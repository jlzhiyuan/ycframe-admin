package com.ycframe.web.admin.common.event;

import com.ycframe.web.App;
import com.ycframe.web.annotation.Webstart;
import com.ycframe.web.base.WebEvent;

@Webstart
public class AdminStartEvent extends WebEvent {
	
	@Override
	public void run() {  
		System.out.println("AdminStart");

		App.initApp(this.getContext().getWebContext());
	} 
}
