package com.attendance.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name = "employeeattendance")
public class AttendanceLog {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeattendanceId;
	@Column
	private String employeeId;
	private String employeeFirstName;
	private String employeeMiddleName;
	private String employeeLastName;
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date punchIn = new java.util.Date(System.currentTimeMillis());
	// @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	// @Temporal(TemporalType.TIMESTAMP)
	private java.util.Date punchOut;

	public int getEmployeeattendanceId() {
		return employeeattendanceId;
	}

	public void setEmployeeattendanceId(int employeeattendanceId) {
		this.employeeattendanceId = employeeattendanceId;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeFirstName() {
		return employeeFirstName;
	}

	public void setEmployeeFirstName(String employeeFirstName) {
		this.employeeFirstName = employeeFirstName;
	}

	public String getEmployeeMiddleName() {
		return employeeMiddleName;
	}

	public void setEmployeeMiddleName(String employeeMiddleName) {
		this.employeeMiddleName = employeeMiddleName;
	}

	public String getEmployeeLastName() {
		return employeeLastName;
	}

	public void setEmployeeLastName(String employeeLastName) {
		this.employeeLastName = employeeLastName;
	}

	public java.util.Date getPunchIn() {
		return punchIn;
	}

	public void setPunchIn(java.util.Date punchIn) {
		this.punchIn = punchIn;
	}

	public java.util.Date getPunchOut() {
		return punchOut;
	}

	public void setPunchOut(java.util.Date punchOut) {
		this.punchOut = punchOut;
	}

	public AttendanceLog(int employeeattendanceId, String employeeId, String employeeFirstName,
			String employeeMiddleName, String employeeLastName, Date punchIn, Date punchOut) {
		super();
		this.employeeattendanceId = employeeattendanceId;
		this.employeeId = employeeId;
		this.employeeFirstName = employeeFirstName;
		this.employeeMiddleName = employeeMiddleName;
		this.employeeLastName = employeeLastName;
		this.punchIn = punchIn;
		this.punchOut = punchOut;
	}

	public AttendanceLog() {
		super();
		// TODO Auto-generated constructor stub
	}
}
