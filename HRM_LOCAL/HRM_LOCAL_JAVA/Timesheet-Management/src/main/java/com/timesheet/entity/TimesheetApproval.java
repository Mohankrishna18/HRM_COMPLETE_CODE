package com.timesheet.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;


@Entity(name = "TimesheetApproval")
public class TimesheetApproval {

	   
		// TODO Auto-generated constructor stub
	
	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int timesheetId;
	    
	    private String employeeId;
	    private String employeeName;
	    private String comments;
	    private String updatedBy;
//	    @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
//	    @Temporal(TemporalType.TIMESTAMP)
//	    private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
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
		public Date getTimeSheetDate() {
			return timeSheetDate;
		}
		public void setTimeSheetDate(Date timeSheetDate) {
			this.timeSheetDate = timeSheetDate;
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
				String updatedBy, Date timeSheetDate, String status, int totalHours, String irm) {
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
		public TimesheetApproval() {
			super();
			// TODO Auto-generated constructor stub
		}
	    
		@PrePersist
		public void setStatus() {
			this.status = new String("Pending");
		}

	    }
		