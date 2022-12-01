package com.arshaa.model;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Holidaymanagement {

	
	private int holidayId;
	private String holidayTitle;
	
	private Date holidayDate;

	
	private String updatedBy;
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

	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	 
}
	

	