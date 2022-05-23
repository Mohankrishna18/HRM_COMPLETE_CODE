package com.arshaa.urp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity(name="rolesmaster")
public class Rolesmaster {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int roleId;
	@Column
	private String roleName;
	@Column
	private boolean roleStatus;
	
	private int updatedBy;
		public int getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(int updatedBy) {
		this.updatedBy = updatedBy;
	}


	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());

	public Rolesmaster(int roleId, String roleName, boolean roleStatus, Date updatedOn, int updatedBy) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.roleStatus = roleStatus;
		this.updatedOn = updatedOn;
		this.updatedBy=updatedBy;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public boolean isRoleStatus() {
		return roleStatus;
	}

	public void setRoleStatus(boolean roleStatus) {
		this.roleStatus = roleStatus;
	}

	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	
	public Rolesmaster() {
		// TODO Auto-generated constructor stub
	}

}
