package com.arshaa.urp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="rolesmodulesmapping")
public class RoleModuleMap {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rMMId;
	@Column
	private int roleId;
	@Column
	private int moduleId;
	
	public RoleModuleMap(int rMMId, int roleId, int moduleId) {
		super();
		this.rMMId = rMMId;
		this.roleId = roleId;
		this.moduleId = moduleId;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public int getModuleId() {
		return moduleId;
	}

	public void setModuleId(int moduleId) {
		this.moduleId = moduleId;
	}

	public RoleModuleMap() {
		// TODO Auto-generated constructor stub
	}

}
