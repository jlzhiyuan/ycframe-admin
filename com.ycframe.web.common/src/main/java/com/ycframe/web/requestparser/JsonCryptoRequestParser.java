package com.ycframe.web.requestparser;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import com.ycframe.web.common.requestparser.AbstractWebRequestParser;

public class JsonCryptoRequestParser extends AbstractWebRequestParser {
	private final String jsontype = "application/json"; 
	private String privateKey = "";
	@Override
	public ServletRequest parseRequest(ServletRequest request)throws ServletException, IOException {
		this.privateKey = (String) this.getContext().getParam("ycframe.crypto.rsa.privatekey");
		ServletRequest sr = new JsonCryptoRequestWrapper((HttpServletRequest)request,this.privateKey);
		return sr;
	}
 
	@Override
	public boolean supports(final ServletRequest srequest) {
		final HttpServletRequest request = (HttpServletRequest) srequest;
		return isJson(request);
	}
	boolean isJson(HttpServletRequest srequest) {
		String contentType = srequest.getContentType();
		if (contentType == null) {
			return false;
		}
		if (contentType.toLowerCase(Locale.ENGLISH).startsWith(jsontype)) {
			return true;
		} else {
			return false;
		}
	}
}
