package com.arshaa.emp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity(name="userclientmanagement")
public class UserClientProjectManagement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String onboardingId;
	@Column
	private String employeeId;
	@Column
	private int clientId;
	@Column
	private int projectId;
	
	@Column
	private String clientName;
	


	@Column
	private String projectName;
	@Column
	private String reportingManager;
	
	@Column
	private Date startDate;
	@Column
	private Date endDate;
	@Column
	private String status;
	@Column
	private String Skills;
	@Column
	private Date updatedBy;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.TIMESTAMP)
    private Date updatedOn = new java.util.Date(System.currentTimeMillis());
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOnboardingId() {
		return onboardingId;
	}
	public void setOnboardingId(String onboardingId) {
		this.onboardingId = onboardingId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public int getClientId() {
		return clientId;
	}
	public void setClientId(int clientId) {
		this.clientId = clientId;
	}
	public int getProjectId() {
		return projectId;
	}
	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
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
	public String getSkills() {
		return Skills;
	}
	public void setSkills(String skills) {
		Skills = skills;
	}
	public Date getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(Date updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	public UserClientProjectManagement(int id, String onboardingId, String employeeId, int clientId, int projectId,
			String clientName,String projectName,String reportingManager, Date startDate, Date endDate, String status, String skills, Date updatedBy,
			Date updatedOn) {
		super();
		this.id = id;
		this.onboardingId = onboardingId;
		this.employeeId = employeeId;
		this.clientId = clientId;
		this.projectId = projectId;
		this.clientName = clientName;
		this.projectName = projectName;
		this.reportingManager = reportingManager;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		Skills = skills;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}
	
	public UserClientProjectManagement() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
