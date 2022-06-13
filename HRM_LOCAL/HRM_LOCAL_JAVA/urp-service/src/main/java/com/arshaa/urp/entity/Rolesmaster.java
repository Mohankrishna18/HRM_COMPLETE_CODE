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

@Entity(name = "rolesmaster")
public class Rolesmaster {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int roleId;
	@Column
	private String roleName;
	@Column
	private boolean roleStatus;
	private String permission1;
	private String permission2;
	private String permission3;
	private String permission4;
	private String permission5;
	private String permission6;
	private String permission7;
	private String permission8;
	private String permission9;
	private String permission10;

	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());

	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	private String updatedBy;

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

	public String getPermission1() {
		return permission1;
	}

	public void setPermission1(String permission1) {
		this.permission1 = permission1;
	}

	public String getPermission2() {
		return permission2;
	}

	public void setPermission2(String permission2) {
		this.permission2 = permission2;
	}

	public String getPermission3() {
		return permission3;
	}

	public void setPermission3(String permission3) {
		this.permission3 = permission3;
	}

	public String getPermission4() {
		return permission4;
	}

	public void setPermission4(String permission4) {
		this.permission4 = permission4;
	}

	public String getPermission5() {
		return permission5;
	}

	public void setPermission5(String permission5) {
		this.permission5 = permission5;
	}

	public String getPermission6() {
		return permission6;
	}

	public void setPermission6(String permission6) {
		this.permission6 = permission6;
	}

	public String getPermission7() {
		return permission7;
	}

	public void setPermission7(String permission7) {
		this.permission7 = permission7;
	}

	public String getPermission8() {
		return permission8;
	}

	public void setPermission8(String permission8) {
		this.permission8 = permission8;
	}

	public String getPermission9() {
		return permission9;
	}

	public void setPermission9(String permission9) {
		this.permission9 = permission9;
	}

	public String getPermission10() {
		return permission10;
	}

	public void setPermission10(String permission10) {
		this.permission10 = permission10;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	
	

	public Rolesmaster(int roleId, String roleName, boolean roleStatus, String permission1, String permission2,
			String permission3, String permission4, String permission5, String permission6, String permission7,
			String permission8, String permission9, String permission10, Date updatedOn, String updatedBy) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.roleStatus = roleStatus;
		this.permission1 = permission1;
		this.permission2 = permission2;
		this.permission3 = permission3;
		this.permission4 = permission4;
		this.permission5 = permission5;
		this.permission6 = permission6;
		this.permission7 = permission7;
		this.permission8 = permission8;
		this.permission9 = permission9;
		this.permission10 = permission10;
		this.updatedOn = updatedOn;
		this.updatedBy = updatedBy;
	}

	

	public Rolesmaster() {
		super();
		// TODO Auto-generated constructor stub
	}
		
}
