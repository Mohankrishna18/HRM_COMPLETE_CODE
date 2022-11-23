package com.arshaa.emp.model;

public class LeaveMaster {
	private String employeeId;
	private Integer leaveBalance;
	private Integer totalLeaves;
	private Integer appliedLeaves;
	private Integer usedLeaves;




	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public Integer getLeaveBalance() {
		return leaveBalance;
	}

	public void setLeaveBalance(Integer leaveBalance) {
		this.leaveBalance = leaveBalance;
	}

	public Integer getTotalLeaves() {
		return totalLeaves;
	}

	public void setTotalLeaves(Integer totalLeaves) {
		this.totalLeaves = totalLeaves;
	}

	public Integer getAppliedLeaves() {
		return appliedLeaves;
	}

	public void setAppliedLeaves(Integer appliedLeaves) {
		this.appliedLeaves = appliedLeaves;
	}

	public Integer getUsedLeaves() {
		return usedLeaves;
	}

	public void setUsedLeaves(Integer usedLeaves) {
		this.usedLeaves = usedLeaves;
	}

}
