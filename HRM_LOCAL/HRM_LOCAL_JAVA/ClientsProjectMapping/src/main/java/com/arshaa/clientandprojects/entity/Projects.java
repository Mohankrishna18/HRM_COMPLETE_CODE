package com.arshaa.clientandprojects.entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="projectmaster")
public class Projects {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer projectId;
@Column
	private Integer clientId;
@Column
	private String projectName;
@Column
	private Date startDate;
@Column
	private Date endDate;
@Column
	private String location;
@Column
	private double rate;
@Column
	private String priority;
@Column
	private String projectManger;
@Column
	private String updatedBy;
@Temporal(TemporalType.DATE)
private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
public Integer getProjectId() {
	return projectId;
}
public void setProjectId(Integer projectId) {
	this.projectId = projectId;
}
public Integer getClientId() {
	return clientId;
}
public void setClientId(Integer clientId) {
	this.clientId = clientId;
}
public String getProjectName() {
	return projectName;
}
public void setProjectName(String projectName) {
	this.projectName = projectName;
}
public Date getStartDate() {
	return startDate;
}
public void setStartDate(Date startDate) {
	this.startDate = startDate;
}
public Date getEndDate() {
	return endDate;
}
public void setEndDate(Date endDate) {
	this.endDate = endDate;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public double getRate() {
	return rate;
}
public void setRate(double rate) {
	this.rate = rate;
}
public String getPriority() {
	return priority;
}
public void setPriority(String priority) {
	this.priority = priority;
}
public String getProjectManger() {
	return projectManger;
}
public void setProjectManger(String projectManger) {
	this.projectManger = projectManger;
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
public Projects(Integer projectId, Integer clientId, String projectName, Date startDate, Date endDate, String location,
		double rate, String priority, String projectManger, String updatedBy, Date updatedOn) {
	super();
	this.projectId = projectId;
	this.clientId = clientId;
	this.projectName = projectName;
	this.startDate = startDate;
	this.endDate = endDate;
	this.location = location;
	this.rate = rate;
	this.priority = priority;
	this.projectManger = projectManger;
	this.updatedBy = updatedBy;
	this.updatedOn = updatedOn;
}
public Projects() {
	super();
	// TODO Auto-generated constructor stub
}

	
}
