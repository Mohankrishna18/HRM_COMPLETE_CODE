package com.arshaa.clientandprojects.model;

import java.util.Date;

public class ProjectModel {

	private String clientName;
	private String projectName;
	private Date startDate;
	private Date endDate;
	private String description;
	private double rate;
	private String priority;
	private String projectManager;

	public ProjectModel() {
		super();
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

	public String getprojectManager() {
		return projectManager;
	}

	public void setprojectManager(String projectManager) {
		this.projectManager = projectManager;
	}

}
