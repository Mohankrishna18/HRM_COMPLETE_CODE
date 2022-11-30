package com.arshaa.emp.model;

public class AssignProjectName {

	private String projectName;
	private Integer projectAllocation;
	private Integer employeeprojectId;

	public Integer getEmployeeprojectId() {
		return employeeprojectId;
	}

	public void setEmployeeprojectId(Integer employeeprojectId) {
		this.employeeprojectId = employeeprojectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Integer getProjectAllocation() {
		return projectAllocation;
	}

	public void setProjectAllocation(Integer projectAllocation) {
		this.projectAllocation = projectAllocation;
	}

	@Override
	public String toString() {
		return "AssignProjectName [projectName=" + projectName + ", projectAllocation=" + projectAllocation + "]";
	}

}
