package com.ycframe.web;

import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.context.result.TextResult;
@Webdo(url = "/Crypto")
public class Crypto extends WebDo {

	public Result getAESKey(){
		return TextResult.Result("hello");
	}
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	}

}
