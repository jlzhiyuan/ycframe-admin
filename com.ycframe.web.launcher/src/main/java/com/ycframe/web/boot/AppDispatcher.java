package com.ycframe.web.boot;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
 
@WebFilter
public class AppDispatcher extends com.ycframe.web.context.boot.Dispatcher {
  
	public AppDispatcher() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	public void destroy() {
		// TODO Auto-generated method stub
		super.destroy();
	}

	public void doFilter(ServletRequest arg0, ServletResponse arg1,
			FilterChain arg2) throws IOException, ServletException {
		// TODO Auto-generated method stub
		arg2.doFilter(arg0,arg1);
	}

	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ServletContext getHttpContext() {
		  org.springframework.web.context.support.GenericWebApplicationContext a=
			        (org.springframework.web.context.support.GenericWebApplicationContext)App.applicationContext; 
		return a.getServletContext(); 
	}
}
