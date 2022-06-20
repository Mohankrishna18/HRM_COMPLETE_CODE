package com.arshaa.departments.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Departmentmaster {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int departmentId;
	@Column
	private String departmentName;
	@Column
	private boolean departmentStatus;
	

	public int getDepartmentId() {
		return departmentId;
	}



	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}



	public String getDepartmentName() {
		return departmentName;
	}



	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}



	public boolean isDepartmentStatus() {
		return departmentStatus;
	}



	public void setDepartmentStatus(boolean departmentStatus) {
		this.departmentStatus = departmentStatus;
	}
	



	public Departmentmaster(int departmentId, String departmentName, boolean departmentStatus) {
		super();
		this.departmentId = departmentId;
		this.departmentName = departmentName;
		this.departmentStatus = departmentStatus;
	}



	public Departmentmaster() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
}
