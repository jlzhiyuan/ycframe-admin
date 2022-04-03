package com.ycframe.web.security;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ycframe.security.auth.Authorization;
import com.ycframe.security.auth.Entity;
import com.ycframe.web.security.service.AuthService;
public class WebAuthorization implements Authorization {
	private Object lock1 = new Object(); 
	public List<String> getPermissions(Entity user){
		List<String> permissions = new ArrayList<String>();
		AuthService loginservice = new AuthService();
		String username = user.getUsername(); 
		try {
			permissions = loginservice.getPermissions(username);
		} catch (Exception e) {
			e.printStackTrace();
			return new ArrayList<String>();
		} 
		return permissions; 
	}

	public List<String> getRoles(Entity user) {
		AuthService loginservice = new AuthService();
		String username = user.getUsername();
		List<String> Roles = null;
		try {
			Roles = loginservice.getRoles(username);
		} catch (SQLException e) {
			e.printStackTrace();
			return new ArrayList<String>();
		}
		return Roles;
	}
}
