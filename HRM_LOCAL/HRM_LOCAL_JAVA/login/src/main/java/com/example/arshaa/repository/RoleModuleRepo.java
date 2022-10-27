package com.example.arshaa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.arshaa.entity.RoleModuleAccess;

public interface RoleModuleRepo extends JpaRepository<RoleModuleAccess, Integer>{

	List<RoleModuleAccess> getRoleModuleAccessByRoleId(int roleId);
	boolean existsByRoleIdAndModuleId(int roleId, int moduleId);
	RoleModuleAccess getByRoleIdAndModuleId(int roleId,int moduleId);
}
