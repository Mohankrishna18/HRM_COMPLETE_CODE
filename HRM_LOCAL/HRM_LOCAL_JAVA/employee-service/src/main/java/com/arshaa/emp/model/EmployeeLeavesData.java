package com.arshaa.emp.model;

public class EmployeeLeavesData {
	private String employeeId;
	private String employeeName;
	private int totalDaysPresent;
	private int totalDaysAbsent;
	private int wfhCount;
	private int count;
	
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
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
	public int getTotalDaysPresent() {
		return totalDaysPresent;
	}
	public void setTotalDaysPresent(int presentCount) {
		this.totalDaysPresent = presentCount;
	}
	public int getTotalDaysAbsent() {
		return totalDaysAbsent;
	}
	public void setTotalDaysAbsent(int totalDaysAbsent) {
		this.totalDaysAbsent = totalDaysAbsent;
	}
	public int getWfhCount() {
		return wfhCount;
	}
	public void setWfhCount(int wfhCount) {
		this.wfhCount = wfhCount;
	}
	

}
