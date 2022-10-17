package com.arshaa.departments.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Departmentmaster 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int departmentId;
	@Column
	private String departmentName;
	@Column
	private boolean departmentStatus;
	private String businessUnitHead;
	private String businessUnitHeadName;
	public int getDepartmentId() {
		return departmentId;
	}
	
	public String getBusinessUnitHeadName() {
		return businessUnitHeadName;
	}

	public void setBusinessUnitHeadName(String businessUnitHeadName) {
		this.businessUnitHeadName = businessUnitHeadName;
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
	public String getBusinessUnitHead() {
		return businessUnitHead;
	}
	public void setBusinessUnitHead(String businessUnitHead) {
		this.businessUnitHead = businessUnitHead;
	}
	
	public Departmentmaster(int departmentId, String departmentName, boolean departmentStatus, String businessUnitHead,
			String businessUnitHeadName) {
		super();
		this.departmentId = departmentId;
		this.departmentName = departmentName;
		this.departmentStatus = departmentStatus;
		this.businessUnitHead = businessUnitHead;
		this.businessUnitHeadName = businessUnitHeadName;
	}

	public Departmentmaster() {
		super();
		// TODO Auto-generated constructor stub
	}
	
		
	
	
}