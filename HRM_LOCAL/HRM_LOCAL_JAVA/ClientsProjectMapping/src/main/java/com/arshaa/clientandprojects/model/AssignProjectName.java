package com.arshaa.clientandprojects.model;

public class AssignProjectName {

	private String projectName;
	private Integer projectAllocation;

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
