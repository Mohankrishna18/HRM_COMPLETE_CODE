package com.arshaa.emp.emailModel;

import java.util.Map;

public class MainEmailTemplate {

	private String emailType;
	Map<String,String> map;
	public String getEmailType() {
		return emailType;
	}
	public void setEmailType(String emailType) {
		this.emailType = emailType;
	}
	public Map<String, String> getMap() {
		return map;
	}
	public void setMap(Map<String, String> map) {
		this.map = map;
	}
	
	
}