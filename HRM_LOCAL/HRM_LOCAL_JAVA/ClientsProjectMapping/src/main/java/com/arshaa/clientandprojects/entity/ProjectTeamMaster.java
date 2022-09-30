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

	@Column
	private String employeeName;

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
	private String projectAllocation;
	
	@Column
	private Integer projectId;

	public ProjectTeamMaster() {
		super();
	}

	public ProjectTeamMaster(String employeeId, String employeeName, String designationName, String departmentName,
			Integer prmasterId, Date startDate, Date endDate, String status, Date assignedDate,
			String projectAllocation) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.designationName = designationName;
		this.departmentName = departmentName;
//		this.projectName = projectName;
		this.prmasterId = prmasterId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.assignedDate = assignedDate;
		this.projectAllocation = projectAllocation;
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

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
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

	public String getProjectAllocation() {
		return projectAllocation;
	}

	public void setProjectAllocation(String projectAllocation) {
		this.projectAllocation = projectAllocation;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	
	

}
