package com.arshaa.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="betweenDates")
public class BetweenDates {
	  
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ids ;
	private String  employeeId ;
	private String  appliedDate ;
	private int employeeleaveId;
	private String leaveOrwfh;
	private String departmentName;
	private String leaveStatus;
	
	public int getIds() {
		return ids;
	}

	public void setIds(int ids) {
		this.ids = ids;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getAppliedDate() {
		return appliedDate;
	}

	public void setAppliedDate(String appliedDate) {
		this.appliedDate = appliedDate;
	}

	public int getEmployeeleaveId() {
		return employeeleaveId;
	}

	public void setEmployeeleaveId(int employeeleaveId) {
		this.employeeleaveId = employeeleaveId;
	}

	public String getLeaveOrwfh() {
		return leaveOrwfh;
	}

	public void setLeaveOrwfh(String leaveOrwfh) {
		this.leaveOrwfh = leaveOrwfh;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	

	public String getLeaveStatus() {
		return leaveStatus;
	}

	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}

	public BetweenDates(int ids, String employeeId, String appliedDate, int employeeleaveId, String leaveOrwfh,
			String departmentName, String leaveStatus) {
		super();
		this.ids = ids;
		this.employeeId = employeeId;
		this.appliedDate = appliedDate;
		this.employeeleaveId = employeeleaveId;
		this.leaveOrwfh = leaveOrwfh;
		this.departmentName = departmentName;
		this.leaveStatus = leaveStatus;
	}

	public BetweenDates() {
		super();
		// TODO Auto-generated constructor stub
	}

}
