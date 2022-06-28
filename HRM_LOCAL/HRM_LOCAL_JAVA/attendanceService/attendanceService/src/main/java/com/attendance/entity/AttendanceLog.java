package com.attendance.entity;

import java.sql.Time;
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
	@Column
	private String employeeFirstName;
	
	
	@Column(name="date")
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.DATE)
	private java.util.Date punchinDate = new java.util.Date(System.currentTimeMillis());
	
	private boolean status;
	
	

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	
	@Column(name="punch_in")
	@JsonFormat(pattern = "HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIME)
	private java.util.Date punchin = new java.util.Date(System.currentTimeMillis());
	private Time duration;
	
@Column(name="punch_out")
//	@JsonFormat(pattern="HH:mm:ss", timezone="IST")
//	@Temporal(TemporalType.TIME)
	private String punchout;
	
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
	
    private String updatedby;

    
    //Getters and setters
    
	public Time getDuration() {
		return duration;
	}

	public void setDuration(Time duration) {
		this.duration = duration;
	}

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

	

	
	

	public java.util.Date getPunchinDate() {
		return punchinDate;
	}

	public void setPunchinDate(java.util.Date punchinDate) {
		this.punchinDate = punchinDate;
	}

	

	public java.util.Date getPunchin() {
		return punchin;
	}

	public void setPunchin(java.util.Date punchin) {
		this.punchin = punchin;
	}

	
	public String getPunchout() {
		return punchout;
	}

	public void setPunchout(String punchout) {
		this.punchout = punchout;
	}

	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}
	
	//constructors

	
	public AttendanceLog() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AttendanceLog(int employeeattendanceId, String employeeId, String employeeFirstName, Date punchinDate,
			boolean status, Date punchin, Time duration, String punchout, Date updatedOn, String updatedby) {
		super();
		this.employeeattendanceId = employeeattendanceId;
		this.employeeId = employeeId;
		this.employeeFirstName = employeeFirstName;
		this.punchinDate = punchinDate;
		this.status = status;
		this.punchin = punchin;
		this.duration = duration;
		this.punchout = punchout;
		this.updatedOn = updatedOn;
		this.updatedby = updatedby;
	}

	

	
	
		
}
