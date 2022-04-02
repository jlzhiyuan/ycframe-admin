package com.ycframe.web.admin.common.pojo;

import java.io.Serializable;
import java.util.Date;

import javax.servlet.http.HttpSession;

import com.ycframe.web.utils.JsonUtils;

public class UserInfo implements Serializable {
	boolean logined = false;
	boolean expre = false;
	public boolean isExpre() {
		return expre;
	}
	public void setExpre(boolean expre) {
		this.expre = expre;
	}
	Date LoginedTime;
	String username;
	String xingming;
	String juese;
	String jueseId;
	String UUID;
	String jibie;
	String bmmc;
	public String getZzbm() {
		return zzbm;
	}
	public void setZzbm(String zzbm) {
		this.zzbm = zzbm;
	}
	String bmbm;
	String zzbm;
	String gwmc;
	String gwbm;
	String ssgydw; //所属管养单位
	String sessionid; 
	String ryxxbid; //新加 
	
	public String getRyxxbid() {
		return ryxxbid;
	}
	public void setRyxxbid(String ryxxbid) {
		this.ryxxbid = ryxxbid;
	}
	public String getSsgydw() {
		return ssgydw;
	}
	public void setSsgydw(String ssgydw) {
		this.ssgydw = ssgydw;
	}
	public String getSessionid() {
		return sessionid;
	}
	public void setSessionid(String sessionid) {
		this.sessionid = sessionid;
	}
	public String getBmbm() {
		return bmbm;
	}
	public void setBmbm(String bmbm) {
		this.bmbm = bmbm;
	}
	public String getGwmc() {
		return gwmc;
	}
	public void setGwmc(String gwmc) {
		this.gwmc = gwmc;
	}
	public String getGwbm() {
		return gwbm;
	}
	public void setGwbm(String gwbm) {
		this.gwbm = gwbm;
	}
	String loginIP;
	String loginMac;
	String userState;
	public String getUserState() {
		return userState;
	}
	public void setUserState(String userState) {
		this.userState = userState;
	}
	public String getLoginIP() {
		return loginIP;
	}
	public void setLoginIP(String loginIP) {
		this.loginIP = loginIP;
	}
	public String getLoginMac() {
		return loginMac;
	}
	public void setLoginMac(String loginMac) {
		this.loginMac = loginMac;
	}
	public String getBmmc() {
		return bmmc;
	}
	public void setBmmc(String bmmc) {
		this.bmmc = bmmc;
	}
	public String getXingming() {
		return xingming;
	}
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	public String getJuese() {
		return juese;
	}
	public void setJuese(String juese) {
		this.juese = juese;
	}
	public String getJueseId() {
		return jueseId;
	}
	public void setJueseId(String jueseId) {
		this.jueseId = jueseId;
	}
	public String getUUID() {
		return UUID;
	}
	public void setUUID(String uUID) {
		UUID = uUID;
	}
	public String getJibie() {
		return jibie;
	}
	public void setJibie(String jibie) {
		this.jibie = jibie;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	String userid;
	String userinfoid;
	public String getUserinfoid() {
		return userinfoid;
	}
	public void setUserinfoid(String userinfoid) {
		this.userinfoid = userinfoid;
	} 
	String gsmc;
	String gsbm;
	public String getGsbm() {
		return gsbm;
	}
	public void setGsbm(String gsbm) {
		this.gsbm = gsbm;
	}
	public boolean isLogined() {
		return logined;
	}
	public void setLogined(boolean logined) {
		this.logined = logined;
	}
	public Date getLoginedTime() {
		return LoginedTime;
	}
	public void setLoginedTime(Date loginedTime) {
		LoginedTime = loginedTime;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public String getGsmc() {
		return gsmc;
	}
	public void setGsmc(String gsmc) {
		this.gsmc = gsmc;
	}  
	
	public String toJson(){
		return JsonUtils.toString(this);		
	}
	
	public static UserInfo FromJson(String json){
		return JsonUtils.toObject(json, UserInfo.class);
	}
	//邹运
	String zyid;//专业id
	
	public String getZyid() {
		return zyid;
	}
	public void setZyid(String zyid) {
		this.zyid = zyid;
	}
	
	String zymc;//专业名称
	
	public String getZymc() {
		return zymc;
	}
	public void setZymc(String zymc) {
		this.zymc = zymc;
	}
	
	String bzyh;//班组用户
	
	public String getBzyh() {
		return bzyh;
	}
	public void setBzyh(String bzyh) {
		this.bzyh = bzyh;
	}
	
	
}
