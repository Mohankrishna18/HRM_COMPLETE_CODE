package com.arshaa.common;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class EmployeeLogin 
{
	
	private String employeeId;
	private String userName;
	private String email;
	private String password;
	private String userType;
	
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public EmployeeLogin(String employeeId, String userName, String email, String password, Boolean flag) {
		super();
		this.employeeId = employeeId;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}
	public EmployeeLogin() {
		super();
		// TODO Auto-generated constructor stub
	}

}
