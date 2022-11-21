package com.arshaa.emailmodels;

public class RegistrationConfirmation {

	
	//after successfull form submition of candidate , this mail will send to tag member
	private String employeeName;
	private String email;//tag member email
	private static final String LOGIN_LINK="http://15.206.247.212:3000/";
	public static final String EMAIL_TYPE="REGISTRATION_CONFIRMATION";
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public static String getLoginLink() {
		return LOGIN_LINK;
	}
	public static String getEmailType() {
		return EMAIL_TYPE;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
