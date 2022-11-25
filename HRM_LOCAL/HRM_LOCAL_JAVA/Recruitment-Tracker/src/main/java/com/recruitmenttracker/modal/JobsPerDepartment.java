package com.recruitmenttracker.modal;



public class JobsPerDepartment {

	private String departmentName;
	private Long jobsOpen;

	public JobsPerDepartment() {
	}

	public JobsPerDepartment(String departmentName, Long jobsOpen) {
		super();
		this.departmentName = departmentName;
		this.jobsOpen = jobsOpen;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public Long getJobsOpen() {
		return jobsOpen;
	}

	public void setJobsOpen(Long jobsOpen) {
		this.jobsOpen = jobsOpen;
	}

}
