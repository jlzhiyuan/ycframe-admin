package com.ycframe.web.common.pojo;

import java.util.Date;

public class UserOnlineInfo {
	String userName;
	int passwordErrorCount;
	Date passwordErrorLastTime;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getPasswordErrorCount() {
		return passwordErrorCount;
	}
	public void setPasswordErrorCount(int passwordErrorCount) {
		this.passwordErrorCount = passwordErrorCount;
	}
	public Date getPasswordErrorLastTime() {
		return passwordErrorLastTime;
	}
	public void setPasswordErrorLastTime(Date passwordErrorLastTime) {
		this.passwordErrorLastTime = passwordErrorLastTime;
	}
}
