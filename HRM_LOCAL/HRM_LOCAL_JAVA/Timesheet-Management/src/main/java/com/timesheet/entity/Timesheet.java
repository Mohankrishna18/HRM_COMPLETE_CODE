package com.timesheet.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Timesheet")
public class Timesheet {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int timesheetId;
	private String taskName;
	private String taskType;
	private String project;
	private Date fromDate;
	private Date toDate;
	private Date timesheetDate;
	private String description;
	private String status;
	public int getTimesheetId() {
		return timesheetId;
	}
	public void setTimesheetId(int timesheetId) {
		this.timesheetId = timesheetId;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskType() {
		return taskType;
	}
	public void setTaskType(String taskType) {
		this.taskType = taskType;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
	public Date getTimesheetDate() {
		return timesheetDate;
	}
	public void setTimesheetDate(Date timesheetDate) {
		this.timesheetDate = timesheetDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Timesheet(int timesheetId, String taskName, String taskType, String project, Date fromDate, Date toDate,
			Date timesheetDate, String description, String status) {
		super();
		this.timesheetId = timesheetId;
		this.taskName = taskName;
		this.taskType = taskType;
		this.project = project;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.timesheetDate = timesheetDate;
		this.description = description;
		this.status = status;
	}
	public Timesheet() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
