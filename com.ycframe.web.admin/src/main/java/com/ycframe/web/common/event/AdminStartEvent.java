package com.ycframe.web.common.event;
import com.ycframe.event.EventException;
import com.ycframe.event.EventManager;
import com.ycframe.web.App;
import com.ycframe.web.annotation.Webstart;
import com.ycframe.web.base.WebEvent;

@Webstart
public class AdminStartEvent extends WebEvent {
	
	@Override
	public void run() {  
		System.out.println("AdminStart");
//		添加事件侦听器。
//		try {
//			EventManager Event = this.getContext().getWebContext().getEventManager();
//			Event.addListener(new SaveDataListener());
//		} catch (EventException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		抛出事件
//		EventManager Event = this.getContext().getWebContext().getEventManager();
//		Event.post(new SaveDataEvent(inputData));
		
		App.initApp(this.getContext().getWebContext());
	} 
}
