package com.arshaa.clientandprojects.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class BusinessHeadResponse {

	private Integer projectId;

	   private Integer clientId;
	    @Column
	    private String projectName;
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
	    private String priority;
	    @Column
	    private String projectManager;
	    @Column
	    private String updatedBy;
	    @Column
	    private String employeeId;
	    @Column
	    private Object buhId;
	    @Column
	    private String projectType;
	    @Column
	    private String businessUnit;
	    @Column
	    private String clientName;
	    private Object businessUnitHead;
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
	    public String getProjectManager() {
	        return projectManager;
	    }
	    public void setProjectManager(String projectManager) {
	        this.projectManager = projectManager;
	    }
	    public String getUpdatedBy() {
	        return updatedBy;
	    }
	    public void setUpdatedBy(String updatedBy) {
	        this.updatedBy = updatedBy;
	    }
	    public String getEmployeeId() {
	        return employeeId;
	    }
	    public void setEmployeeId(String employeeId) {
	        this.employeeId = employeeId;
	    }
	    public Object getBuhId() {
	        return buhId;
	    }
	    public void setBuhId(Object object) {
	        this.buhId = object;
	    }
	    public String getProjectType() {
	        return projectType;
	    }
	    public void setProjectType(String projectType) {
	        this.projectType = projectType;
	    }
	    public String getBusinessUnit() {
	        return businessUnit;
	    }
	    public void setBusinessUnit(String businessUnit) {
	        this.businessUnit = businessUnit;
	    }
	    public String getClientName() {
	        return clientName;
	    }
	    public void setClientName(String clientName) {
	        this.clientName = clientName;
	    }
	    public Object getBusinessUnitHead() {
	        return businessUnitHead;
	    }
	    public void setBusinessUnitHead(Object object) {
	        this.businessUnitHead = object;
	    }
	
}
