package com.attendance.model;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Punchout {

	@JsonFormat(pattern="HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.TIME)
	private java.util.Date punchout;

	@Column
	private String employeeId;
	
	public String getEmployeeId() {
		return employeeId;
	}


	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}


	public java.util.Date getPunchout() {
		return punchout;
	}
	

	public void setPunchout(java.util.Date punchout) {
		this.punchout = punchout;
	}
	
	
}
