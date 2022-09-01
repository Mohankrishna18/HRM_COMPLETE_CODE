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
	public int getEmployeeleaveId() {
		return employeeleaveId;
	}
	public void setEmployeeleaveId(int employeeleaveId) {
		this.employeeleaveId = employeeleaveId;
	}
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
	public void setAppliedDate(String string) {
		this.appliedDate = string;
	}
	
	public BetweenDates(int ids, String employeeId, String appliedDate, int employeeleaveId) {
		super();
		this.ids = ids;
		this.employeeId = employeeId;
		this.appliedDate = appliedDate;
		this.employeeleaveId = employeeleaveId;
	}
	public BetweenDates() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
