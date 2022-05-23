package com.arshaa.hrm.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="holidaymaster")
public class Holidaymanagement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int holidayId;
	@Column
	private String holidayTitle;
	@Column
	private Date holidayDate;
	@Column
	private boolean holidayStatus;
	@Column
	private int updatedBy;
	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
 
	

	public int getHolidayId() {
		return holidayId;
	}



	public void setHolidayId(int holidayId) {
		this.holidayId = holidayId;
	}



	public String getHolidayTitle() {
		return holidayTitle;
	}



	public void setHolidayTitle(String holidayTitle) {
		this.holidayTitle = holidayTitle;
	}



	public Date getHolidayDate() {
		return holidayDate;
	}



	public void setHolidayDate(Date holidayDate) {
		this.holidayDate = holidayDate;
	}



	public boolean isHolidayStatus() {
		return holidayStatus;
	}



	public void setHolidayStatus(boolean holidayStatus) {
		this.holidayStatus = holidayStatus;
	}



	public int getUpdatedBy() {
		return updatedBy;
	}



	public void setUpdatedBy(int updatedBy) {
		this.updatedBy = updatedBy;
	}



	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}



	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}


	public Holidaymanagement(int holidayId, String holidayTitle, Date holidayDate, boolean holidayStatus, int updatedBy,
			Date updatedOn) {
		super();
		this.holidayId = holidayId;
		this.holidayTitle = holidayTitle;
		this.holidayDate = holidayDate;
		this.holidayStatus = holidayStatus;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}



	public Holidaymanagement() {
		// TODO Auto-generated constructor stub
	}

//	public void setHolidayStatus(boolean b) {
//		// TODO Auto-generated method stub
//		
//	}

}
