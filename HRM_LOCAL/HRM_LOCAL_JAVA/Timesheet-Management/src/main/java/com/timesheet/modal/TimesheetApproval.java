package com.timesheet.modal;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class TimesheetApproval {

	   @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int timesheetId;
	    
	    private String employeeId;
	    private String employeeName;
	    private String comments;
	    private String updatedBy;
	   
	    private Date timeSheetDate;
	    private String status;
	    private int totalHours;
	    private String irm;
		public int getTimesheetId() {
			return timesheetId;
		}
		public void setTimesheetId(int timesheetId) {
			this.timesheetId = timesheetId;
		}
		public String getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(String employeeId) {
			this.employeeId = employeeId;
		}
		public String getEmployeeName() {
			return employeeName;
		}
		public void setEmployeeName(String employeeName) {
			this.employeeName = employeeName;
		}
		public String getComments() {
			return comments;
		}
		public void setComments(String comments) {
			this.comments = comments;
		}
		public String getUpdatedBy() {
			return updatedBy;
		}
		public void setUpdatedBy(String updatedBy) {
			this.updatedBy = updatedBy;
		}
		
		public Date getTimesheetDate() {
			return timeSheetDate;
		}
		public void setTimesheetDate(Date timesheetDate) {
			this.timeSheetDate = timesheetDate;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public int getTotalHours() {
			return totalHours;
		}
		public void setTotalHours(int totalHours) {
			this.totalHours = totalHours;
		}
		public String getIrm() {
			return irm;
		}
		public void setIrm(String irm) {
			this.irm = irm;
		}
		public TimesheetApproval(int timesheetId, String employeeId, String employeeName, String comments,
				String updatedBy, Date updatedOn, Date timeSheetDate, String status, int totalHours, String irm) {
			super();
			this.timesheetId = timesheetId;
			this.employeeId = employeeId;
			this.employeeName = employeeName;
			this.comments = comments;
			this.updatedBy = updatedBy;
	
			this.timeSheetDate = timeSheetDate;
			this.status = status;
			this.totalHours = totalHours;
			this.irm = irm;
		}
}


