package com.arshaa.emp.model;

import javax.persistence.Column;

public class EmploymentDetails {
	
	private String primarySkills;
	private String secondarySkills;
	private String employmentType;
	private String band;
	@Column
	private String department;
	@Column
	private String designation;
	private String reportingManager;
	private String jobTitle;
	private String client;
	
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
	private String irm;
	private String srm;
	private String buh;
	
	  private String irmId;
	    private String srmId;
	    private String buhId;
	    
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
	
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
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
