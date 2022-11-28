package com.arshaa.clientandprojects.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "employeeprojectmapping")
public class ProjectTeamMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer employeeprojectId;

	@Column
	private String employeeId;
	private String projectName;
	@Column
	private String clientName;	
	
	@Column
	private String projectManager;

	@Column
	private String fullName;

	@Column
	private String designationName;

	@Column
	private String departmentName;

	@Column
	private Integer prmasterId;

	@Column
	private Date startDate;

	@Column
	private Date endDate;

	@Column
	private String status;

	@Column
	private Date assignedDate;

	@Column
	private Integer projectAllocation;
	
	@Column
	private Integer projectId;

	public ProjectTeamMaster() {
		super();
	}

	public ProjectTeamMaster(String employeeId, String fullName, String designationName, String departmentName,
			Integer prmasterId, Date startDate, Date endDate, String status, Date assignedDate,String projectName,String clientName,String projectManager,	

			Integer projectAllocation) {
		super();
		this.employeeId = employeeId;
		this.fullName = fullName;
		this.designationName = designationName;
		this.departmentName = departmentName;
//		this.projectName = projectName;
		this.prmasterId = prmasterId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.projectName= projectName;
		this.clientName = clientName;
		this.projectManager = projectManager;
		this.assignedDate = assignedDate;
		this.projectAllocation = projectAllocation;
	}


	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Integer getEmployeeprojectId() {
		return employeeprojectId;
	}

	public void setEmployeeprojectId(Integer employeeprojectId) {
		this.employeeprojectId = employeeprojectId;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	

	public String getDesignationName() {
		return designationName;
	}

	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public Integer getPrmasterId() {
		return prmasterId;
	}

	public void setPrmasterId(Integer prmasterId) {
		this.prmasterId = prmasterId;
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

	public Date getAssignedDate() {
		return assignedDate;
	}

	public void setAssignedDate(Date assignedDate) {
		this.assignedDate = assignedDate;
	}

	public Integer getProjectAllocation() {
		return projectAllocation;
	}

	public void setProjectAllocation(Integer projectAllocation) {
		this.projectAllocation = projectAllocation;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	
	

}
