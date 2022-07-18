package com.arshaa.task.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Task")
public class TaskEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int taskId;
	private String taskName;
	private String taskType;
	private String project;
	private Date fromDate;
	private Date toDate;
	private String description;
	private String status;
	private String duration;
	private String priority;
	
	
	
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public int getTaskId() {
		return taskId;
	}
	public void setTaskId(int taskId) {
		this.taskId = taskId;
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
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public TaskEntity(int taskId, String taskName, String taskType, String project, Date fromDate, Date toDate,
			String description, String status, String duration, String priority) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.taskType = taskType;
		this.project = project;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.description = description;
		this.status = status;
		this.duration = duration;
		this.priority = priority;
	}
	public TaskEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
