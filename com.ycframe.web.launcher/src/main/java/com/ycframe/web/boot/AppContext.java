package com.ycframe.web.boot;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import com.ycframe.boot.Application;


@Component
@WebListener
public class AppContext implements ApplicationContextAware, ServletContextListener {
 
	private ApplicationContext applicationContext;
	private ServletContext servletContext;
  
	public void setApplicationContext(
			org.springframework.context.ApplicationContext arg0)
					throws BeansException { 
		this.applicationContext = arg0;
		App.applicationContext = this.applicationContext;
		//YC.Frame.Web.WebContext.getWebParams().put("config", config);
	}
 
	 

	/**
	 * 获取applicationContext
	 * 
	 * @return
	 */
	public ApplicationContext getApplicationContext() {
		return applicationContext;
	}
 
	/**
	 * 获取servletContext
	 * 
	 * @return
	 */
	public ServletContext getServletContext() {
		return servletContext;
	}
  
 
	public void contextInitialized(ServletContextEvent sce) {
		this.servletContext = sce.getServletContext(); 
//        WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(sce.getServletContext());
//        Application.setApplicationContext(wac);
	}

	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}
 
 
 
 
} 