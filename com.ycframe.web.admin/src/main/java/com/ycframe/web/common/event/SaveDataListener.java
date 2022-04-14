package com.ycframe.web.common.event;


import com.ycframe.event.AbstractListener;
public class SaveDataListener implements AbstractListener<SaveDataEvent>{

	@Override
	public void onEvent(SaveDataEvent arg0) {
		System.out.println(arg0.getSource());
	}

}
