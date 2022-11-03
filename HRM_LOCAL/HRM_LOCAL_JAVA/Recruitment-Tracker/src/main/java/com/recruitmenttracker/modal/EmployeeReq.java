package com.recruitmenttracker.modal;

import java.util.Date;

public class EmployeeReq {
	
	private String clientName;
	private Date requestInitiatedDate;
    private String raisedBy;
	private String requisitionId;
	private String jobTitle;
	private String departmentName;
	private String projectName;
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public Date getRequestInitiatedDate() {
		return requestInitiatedDate;
	}
	public void setRequestInitiatedDate(Date requestInitiatedDate) {
		this.requestInitiatedDate = requestInitiatedDate;
	}
	public String getRaisedBy() {
		return raisedBy;
	}
	public void setRaisedBy(String raisedBy) {
		this.raisedBy = raisedBy;
	}
	public String getRequisitionId() {
		return requisitionId;
	}
	public void setRequisitionId(String requisitionId) {
		this.requisitionId = requisitionId;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	
	
}
