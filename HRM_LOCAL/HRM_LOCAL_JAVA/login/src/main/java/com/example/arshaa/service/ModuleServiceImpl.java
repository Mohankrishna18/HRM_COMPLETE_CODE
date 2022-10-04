package com.example.arshaa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshaa.exception.ResourceNotFoundException;
import com.arshaa.responses.ModuleAccess;
import com.example.arshaa.entity.Modules;
import com.example.arshaa.entity.Role;
import com.example.arshaa.entity.RoleModuleAccess;
import com.example.arshaa.repository.ModuleRepo;
import com.example.arshaa.repository.RoleModuleRepo;
@Service
public class ModuleServiceImpl implements ModuleService{

	@Autowired
	private ModuleRepo moduleRepo;
	
	@Autowired
	private RoleModuleRepo roleModuleRepo;

	@Override
	public Modules createModule(Modules module) {
		return moduleRepo.save(module);
	}

	@Override
	public Modules updateModule(Modules module, int moduleId) {
		Modules newModule=moduleRepo.findById(moduleId).orElseThrow(()->new ResourceNotFoundException("Module", "Module ID", moduleId));
		newModule.setModuleName(module.getModuleName());
		return moduleRepo.save(newModule);
	}

	@Override
	public Modules getModuleById(int moduleId) {
		return moduleRepo.findById(moduleId).orElseThrow(()->new ResourceNotFoundException("Module", "Module ID", moduleId));
	}

	@Override
	public void deleteModuleById(int moduleId) {
		moduleRepo.delete(moduleRepo.findById(moduleId).orElseThrow(()->new ResourceNotFoundException("Module", "Module ID", moduleId)));		
	}

	@Override
	public List<ModuleAccess> getAllModules() {
		
//		List<RoleModuleAccess> rma=	roleModuleRepo.getRoleModuleAccessByRoleId(roleId);
		List<Modules> m= moduleRepo.findAll();
		List<ModuleAccess> moduleList=new ArrayList<>();
		m.forEach(mlist->{
			ModuleAccess ma=new ModuleAccess();
			ma.setSelected(false);
			ma.setModuleId(mlist.getModuleId());
			ma.setModuleName(mlist.getModuleName());
			ma.setEditAccess(false);
			ma.setDeleteAccess(false);
			ma.setViewAccess(false);
			moduleList.add(ma);
		});
		
		return moduleList;
	}
	
	
}
