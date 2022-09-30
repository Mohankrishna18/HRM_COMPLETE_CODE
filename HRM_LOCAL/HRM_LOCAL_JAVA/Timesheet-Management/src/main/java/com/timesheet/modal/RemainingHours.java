package com.timesheet.modal;

import java.util.Date;

public class RemainingHours {
	
	
	public int getEstimatedHours() {
		return estimatedHours;
	}
	public void setEstimatedHours(int estimatedHours) {
		this.estimatedHours = estimatedHours;
	}
	public int getActuaHours() {
		return actuaHours;
	}
	public void setActuaHours(int actuaHours) {
		this.actuaHours = actuaHours;
	}
	private int estimatedHours;
	public RemainingHours(int estimatedHours, int actuaHours) {
		super();
		this.estimatedHours = estimatedHours;
		this.actuaHours = actuaHours;
	}
	private int actuaHours;
	
	
	private Date timeSheetDate;
	public Date getTimeSheetDate() {
		return getTimeSheetDate();
	}
	public Date setTimeSheetDate(Date timeSheetDate) {
		return this.timeSheetDate = timeSheetDate;
	}
	


}
