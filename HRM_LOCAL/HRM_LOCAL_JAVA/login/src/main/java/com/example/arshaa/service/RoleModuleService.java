package com.example.arshaa.service;

import java.util.List;

import com.arshaa.responses.ModuleAccess;
import com.arshaa.responses.RoleModuleAccessModel;
import com.example.arshaa.entity.RoleModuleAccess;
import com.example.arshaa.payload.RoleModulePayload;

public interface RoleModuleService {

	public RoleModuleAccess createRoleModule(RoleModuleAccess module,int roleId);
	public RoleModuleAccess updateRoleModule(RoleModuleAccess module,int rmAccessId);
	public RoleModuleAccess getRoleModuleById(int rmAccessId);
	public void deleteRoleModuleById(int rmAccessId);
	public List<RoleModuleAccess> getAllRoleModuleAccess();
	public RoleModuleAccessModel getRoleModuleAccessByRoleId(int roleId);
	public RoleModulePayload moduleAccess(RoleModulePayload rmPayload);
	public List<ModuleAccess> createAllModuleAccess(List<ModuleAccess> getModules);
}
