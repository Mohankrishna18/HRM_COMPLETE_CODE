package com.arshaa.common;

import javax.persistence.Column;

public class Users {

	private String userName;

	private String employeeId;
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}


	public Users() {
		// TODO Auto-generated constructor stub
	}

}
