package com.arshaa.clientandprojects.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "projectmaster")
public class Projects {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer projectId;
	@Column
	private Integer clientId;
	@Column(unique = true)
	private String projectName;
    @Column
    private String businessUnit;
	@Column
	private Date startDate;
	@Column
	private Date endDate;
	@Column
	private String status;
	@Column
	private String description;
	@Column
	private double rate;
	@Column
	private String employeeId;
	@Column
	private String priority;
	@Column
	private String projectManager;
	@Column
	private String updatedBy;
	// Madhu Changes
		@Column 
		private String buhId;
		@Column
		private String projectType;
		@Column
		private String clientName;	
	
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
	
	public String getBusinessUnit() {
		return businessUnit;
	}

	public void setBusinessUnit(String businessUnit) {
		this.businessUnit = businessUnit;
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
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	public String getBuhId() {
		return buhId;
	}

	public void setBuhId(String buhId) {
		this.buhId = buhId;
	}

	public String getProjectType() {
		return projectType;
	}

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	

	public Projects(Integer projectId, Integer clientId, String projectName, String businessUnit, Date startDate,
			Date endDate, String status, String description, double rate, String employeeId, String priority,
			String projectManager, String updatedBy, String buhId, String projectType, String clientName,
			Date updatedOn) {
		super();
		this.projectId = projectId;
		this.clientId = clientId;
		this.projectName = projectName;
		this.businessUnit = businessUnit;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.description = description;
		this.rate = rate;
		this.employeeId = employeeId;
		this.priority = priority;
		this.projectManager = projectManager;
		this.updatedBy = updatedBy;
		this.buhId = buhId;
		this.projectType = projectType;
		this.clientName = clientName;
		this.updatedOn = updatedOn;
	}

	public Projects() {
		super();
		// TODO Auto-generated constructor stub
	}

}