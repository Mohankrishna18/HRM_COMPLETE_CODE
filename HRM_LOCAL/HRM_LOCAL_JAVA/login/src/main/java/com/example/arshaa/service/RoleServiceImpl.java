package com.example.arshaa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshaa.exception.ResourceNotFoundException;
import com.example.arshaa.entity.Role;
import com.example.arshaa.repository.RoleRepo;
@Service
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleRepo roleRepo;
	
	
	@Override
	public Role createRole(Role role) {
		return roleRepo.save(role);
	}

	@Override
	public Role updateRole(Role role, int roleId) {
		Role newRole=roleRepo.findById(roleId).orElseThrow(()->new ResourceNotFoundException("Role", "Role ID", roleId));
        newRole.setRoleName(role.getRoleName());
        return roleRepo.save(newRole);
	}

	@Override
	public Role getRoleById(int roleId) {
		return roleRepo.findById(roleId).orElseThrow(()->new ResourceNotFoundException("Role", "Role ID", roleId));
	}

	@Override
	public void deleteRoleById(int roleId) {
		roleRepo.delete(roleRepo.findById(roleId).orElseThrow(()->new ResourceNotFoundException("Role", "Role ID", roleId)));
	}

	@Override
	public List<Role> getAllRoles() {
		List<Role> roles=roleRepo.findAll();
		return roles;
	}

}
