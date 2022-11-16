package com.arshaa.emp.model;

import java.util.Date;

import javax.persistence.Column;

public class EmploymentDetails {
	
	private String primarySkills;
	private String secondarySkills;
	private String employmentType;
	private String band;
	@Column
	private String departmentName;
	@Column
	private String designationName;
	private String reportingManager;
	private String jobTitle;
	private String client;
	private String onboardingStatus;
	private String exitDate;
	private String resignationDate;
	private String status;
	private String irm;
	private String srm;
	private String buh;
	private String irmId;
	private String srmId;
	private String buhId;
	
	
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getExitDate() {
		return exitDate;
	}
	public void setExitDate(String exitDate) {
		this.exitDate = exitDate;
	}
	public String getResignationDate() {
		return resignationDate;
	}
	public void setResignationDate(String resignationDate) {
		this.resignationDate = resignationDate;
	}
	public String getOnboardingStatus() {
		return onboardingStatus;
	}
	public void setOnboardingStatus(String onboardingStatus) {
		this.onboardingStatus = onboardingStatus;
	}
	public String getIrm() {
		return irm;
	}
	public void setIrm(String irm) {
		this.irm = irm;
	}
	public String getSrm() {
		return srm;
	}
	public void setSrm(String srm) {
		this.srm = srm;
	}
	public String getBuh() {
		return buh;
	}
	public void setBuh(String buh) {
		this.buh = buh;
	}

	    
		public String getIrmId() {
			return irmId;
		}
		public void setIrmId(String irmId) {
			this.irmId = irmId;
		}
		public String getSrmId() {
			return srmId;
		}
		public void setSrmId(String srmId) {
			this.srmId = srmId;
		}
		public String getBuhId() {
			return buhId;
		}
		public void setBuhId(String buhId) {
			this.buhId = buhId;
		}
	    
	private String projectName;
	public String getPrimarySkills() {
		return primarySkills;
	}
	public void setPrimarySkills(String primarySkills) {
		this.primarySkills = primarySkills;
	}
	public String getSecondarySkills() {
		return secondarySkills;
	}
	public void setSecondarySkills(String secondarySkills) {
		this.secondarySkills = secondarySkills;
	}
	public String getEmploymentType() {
		return employmentType;
	}
	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}
	public String getBand() {
		return band;
	}
	public void setBand(String band) {
		this.band = band;
	}
	
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getDesignationName() {
		return designationName;
	}
	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	public String getProjectName() {
		return projectName;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	
	
	

}
