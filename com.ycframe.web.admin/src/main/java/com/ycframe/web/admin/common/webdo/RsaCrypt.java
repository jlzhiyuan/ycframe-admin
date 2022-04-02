package com.ycframe.web.admin.common.webdo;

import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.context.result.TextResult;

@Webdo(url = "/RsaCrypt")
public class RsaCrypt extends WebDo{
   
	public Result getModulus()
	{
		com.ycframe.security.crypto.rsa2.RSAAdapter rsa = new com.ycframe.security.crypto.rsa2.RSAAdapter();
		return TextResult.Result(rsa.getModulus());
	}
   
	public Result getPE()
	{
		com.ycframe.security.crypto.rsa2.RSAAdapter rsa = new com.ycframe.security.crypto.rsa2.RSAAdapter();
		String pe = rsa.getPubexpont();
		return TextResult.Result(rsa.getPubexpont());
	}

	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	} 
}

