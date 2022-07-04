package com.arshaa.urp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "modulemaster")
public class Modulemaster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int moduleId;
	@Column
	private String moduleName;
	@Column
	private boolean moduleStatus;
	@Column
	private String updatedBy;
	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());

	public int getModuleId() {
		return moduleId;
	}

	public void setModuleId(int moduleId) {
		this.moduleId = moduleId;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public boolean isModuleStatus() {
		return moduleStatus;
	}

	public void setModuleStatus(boolean moduleStatus) {
		this.moduleStatus = moduleStatus;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public Modulemaster(int moduleId, String moduleName, boolean moduleStatus, String updatedBy, Date updatedOn) {
		super();
		this.moduleId = moduleId;
		this.moduleName = moduleName;
		this.moduleStatus = moduleStatus;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
	}

	public Modulemaster() {
		super();
// TODO Auto-generated constructor stub
	}

}