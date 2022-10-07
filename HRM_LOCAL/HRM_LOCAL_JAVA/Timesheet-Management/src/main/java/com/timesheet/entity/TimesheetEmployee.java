package com.timesheet.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;

@Entity(name="TimesheetEmployee")

public class TimesheetEmployee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; 
	private Date timeSheetDate;
	private String taskTitle;

	private String employeeId;
	private int taskId;
	private double actualHours;
	@ColumnDefault("0")
	private double remainingHours;
	private String status;
	private double estimatedHours;
	private String irm;
	public Date getTimeSheetDate() {
		return timeSheetDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public int getTaskId() {
		return taskId;
	}
	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}
	public double getActualHours() {
		return actualHours;
	}
	public void setActualHours(double actualHours) {
		this.actualHours = actualHours;
	}
	public double getRemainingHours() {
		return remainingHours;
	}
	public void setRemainingHours(double remainingHours) {
		this.remainingHours = remainingHours;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getEstimatedHours() {
		return estimatedHours;
	}
	public void setEstimatedHours(double estimatedHours) {
		this.estimatedHours = estimatedHours;
	}
	public String getIrm() {
		return irm;
	}
	public void setIrm(String irm) {
		this.irm = irm;
	}
	public void setTimeSheetDate(Date timeSheetDate) {
		this.timeSheetDate = timeSheetDate;
	}
	public TimesheetEmployee(int id, Date timeSheetDate, String taskName, String employeeId, int taskId,
			double actualHours, double remainingHours, String status, double estimatedHours, String irm, String taskTitle) {
		super();
		this.id = id;
		this.timeSheetDate = timeSheetDate;
		this.taskTitle = taskTitle;
		this.employeeId = employeeId;
		this.taskId = taskId;
		this.actualHours = actualHours;
		this.remainingHours = remainingHours;
		this.status = status;
		this.estimatedHours = estimatedHours;
		this.irm = irm;
	}
	public String getTaskTitle() {
		return taskTitle;
	}
	public void setTaskTitle(String taskTitle) {
		this.taskTitle = taskTitle;
	}
	public TimesheetEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
