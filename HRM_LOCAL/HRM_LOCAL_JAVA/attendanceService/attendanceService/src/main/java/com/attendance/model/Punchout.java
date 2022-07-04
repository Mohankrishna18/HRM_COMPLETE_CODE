package com.attendance.model;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Punchout {

	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date punchout = new java.util.Date(System.currentTimeMillis());
	private String employeId;
	public java.util.Date getPunchout() {
		return punchout;
	}
	public void setPunchout(java.util.Date punchout) {
		this.punchout = punchout;
	}
	public String getEmployeId() {
		return employeId;
	}
	public void setEmployeId(String employeId) {
		this.employeId = employeId;
	}
	
	
	
}
