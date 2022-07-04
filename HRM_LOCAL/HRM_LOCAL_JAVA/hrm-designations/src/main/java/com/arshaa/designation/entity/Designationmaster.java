package com.arshaa.designation.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Designationmaster {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int designationId;
	@Column
	private String designationName;
	@Column
	private boolean designationStatus;
	private String departmentName;
	private int departmentId;
	@Column
	private String updatedBy;
	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
	
	
	
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
	
	public int getDesignationId() {
		return designationId;
	}
	public void setDesignationId(int designationId) {
		this.designationId = designationId;
	}
	public String getDesignationName() {
		return designationName;
	}
	//
	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}
	public boolean isDesignationStatus() {
		return designationStatus;
	}
	public void setDesignationStatus(boolean designationStatus) {
		this.designationStatus = designationStatus;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Designationmaster() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	public Designationmaster(int designationId, String designationName, boolean designationStatus,
			String departmentName, int departmentId, String updatedBy, Date updatedOn) {
		super();
		this.designationId = designationId;
		this.designationName = designationName;
		this.designationStatus = designationStatus;
		this.departmentName = departmentName;
		this.departmentId = departmentId;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}
	
	
}
