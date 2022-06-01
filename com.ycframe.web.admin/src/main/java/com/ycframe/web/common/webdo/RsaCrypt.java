package com.ycframe.web.common.webdo;

import com.ycframe.web.annotation.Webdo;
import com.ycframe.web.base.WebDo;
import com.ycframe.web.context.result.Result;
import com.ycframe.web.context.result.TextResult;

@Webdo(url = "/RsaCrypt")
public class RsaCrypt extends WebDo{
   
	public Result getModulus()
	{
		return TextResult.Result("00a707b79172a3e3a979a97ddaf033862010de281b6cf657d2530a3de4f82ca77c8297ccf5f16150fd7ab4181158aee8c4363b1cf84f97fc3721fc57f5c891e9ace5206931863803d45f62b13a920781bbb65ac081f40ccc9e9a5781eb002564bfa23e9983ab40eab8e36f77aed60d6d443e55ae4aafa88c06c02be0401b9e7577");
	}
   
	public Result getPE()
	{
		return TextResult.Result("010001");
	}
	public Result getPublicKey()
	{
		String publickey = (String) this.getContext().getWebContext().getParam("ycframe.crypto.rsa.publickey");
		return TextResult.Result(publickey);
	}
	@Override
	public Result index() {
		// TODO Auto-generated method stub
		return null;
	} 
}

