package com.example.arshaa.service;

import java.util.List;

import com.example.arshaa.entity.Role;

public interface RoleService {

	public Role createRole(Role role);
	public Role updateRole(Role role,int roleId);
	public Role getRoleById(int roleId);
	public void deleteRoleById(int roleId);
	public List<Role> getAllRoles();
	
}
