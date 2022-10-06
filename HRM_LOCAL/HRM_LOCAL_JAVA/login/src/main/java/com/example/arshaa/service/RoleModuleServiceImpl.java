package com.example.arshaa.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshaa.exception.DataAlreadyExists;
import com.arshaa.exception.ResourceNotFoundException;
import com.arshaa.responses.ModuleAccess;
import com.arshaa.responses.PermissionsModel;
import com.arshaa.responses.RoleModuleAccessModel;
import com.example.arshaa.entity.RoleModuleAccess;
import com.example.arshaa.payload.RoleModulePayload;
import com.example.arshaa.repository.ModuleRepo;
import com.example.arshaa.repository.RoleModuleRepo;
import com.example.arshaa.repository.RoleRepo;

@Service
public class RoleModuleServiceImpl implements RoleModuleService{

	@Autowired
	private RoleModuleRepo roleModuleRepo;
	@Autowired
	private RoleRepo roleRepo;
	@Autowired
	private ModuleRepo moduleRepo;
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	private ModuleService moduleServ;
	
	@Override
	public RoleModuleAccess createRoleModule(RoleModuleAccess roleModule, int roleId) {
		if(roleModuleRepo.existsByRoleIdAndModuleId(roleId,roleModule.getModuleId())!=true && roleModule.getModuleId()!=0)
		{
			System.out.println(roleModule);
			roleModule.setRoleId(roleId);
			roleModule.setEditAccess(false);
			roleModule.setViewAccess(false);
			roleModule.setDeleteAccess(false);
			roleModule.setModuleId(roleModule.getModuleId());
			System.out.println("roleId"+roleModule.getModuleId());
			return roleModuleRepo.save(roleModule);
		}
		else {
			throw new DataAlreadyExists("RoleModuleAccess",roleId,roleModule.getModuleId());
		}
		
		
			
	
	}

	@Override
	public RoleModuleAccess updateRoleModule(RoleModuleAccess roleModule, int rmAccessId) {
		RoleModuleAccess updatedRM=roleModuleRepo.findById(rmAccessId).orElseThrow(()->new ResourceNotFoundException("Role Module Access", "RoleModule ID", rmAccessId));
		updatedRM.setDeleteAccess(roleModule.isDeleteAccess());
		updatedRM.setEditAccess(roleModule.isEditAccess());
		updatedRM.setViewAccess(roleModule.isViewAccess());
//		updatedRM.setModuleId(roleModule.getModuleId());
//		updatedRM.setRoleId(roleModule.getRoleId());
		return roleModuleRepo.save(updatedRM);
	}

	@Override
	public RoleModuleAccess getRoleModuleById(int rmAccessId) {
		return roleModuleRepo.findById(rmAccessId).orElseThrow(()->new ResourceNotFoundException("Role Module Access", "RoleModule ID", rmAccessId));
	}

	@Override
	public void deleteRoleModuleById(int rmAccessId) {
		roleModuleRepo.delete(roleModuleRepo.findById(rmAccessId).orElseThrow(()->new ResourceNotFoundException("Role Module Access", "RoleModule ID", rmAccessId)));	
	}

	@Override
	public List<RoleModuleAccess> getAllRoleModuleAccess() {
		return roleModuleRepo.findAll();
	}
	
	@Override
	public RoleModuleAccessModel getRoleModuleAccessByRoleId(int roleId){
		List<RoleModuleAccess> getAccess=roleModuleRepo.getRoleModuleAccessByRoleId(roleId);
//		RoleModuleAccessModel rmAccess=new RoleModuleAccessModel();
		List<ModuleAccess> modules	=new ArrayList<>();
		RoleModuleAccessModel rmAccess=new RoleModuleAccessModel();


getAccess.stream().forEach(e->{

			ModuleAccess moduleAccess=new ModuleAccess();
//			moduleAccess.setRmAccessId(e.getRmAccessId());
			moduleAccess.setModuleName(moduleRepo.getById(e.getModuleId()).getModuleName());
			moduleAccess.setEditAccess(e.isEditAccess());
			moduleAccess.setViewAccess(e.isViewAccess());
			moduleAccess.setDeleteAccess(e.isDeleteAccess());
			
		modules.add(moduleAccess);
			rmAccess.setRole(roleRepo.getById(roleId).getRoleName());
			rmAccess.setModules(modules);
//		return moduleAccess;

		});


	return rmAccess;
//		return roleModuleRepo.getRoleModuleAccessByRoleId(roleId);
	}

	public List<ModuleAccess> createAllModuleAccess(List<ModuleAccess> getModules)
	{
		List<RoleModuleAccess> gs = new ArrayList<>();
		getModules.forEach(s->{
			if(!roleModuleRepo.existsByRoleIdAndModuleId(s.getRoleId(),s.getModuleId()))
			{
				RoleModuleAccess getAcc=	roleModuleRepo.save(modelMapper.map(s, RoleModuleAccess.class));
				gs.add(getAcc);
			}
			else {
				RoleModuleAccess updateAcc=roleModuleRepo.getByRoleIdAndModuleId(s.getRoleId(), s.getModuleId());
				updateAcc.setEditAccess(s.isEditAccess());
				updateAcc.setDeleteAccess(s.isDeleteAccess());
				updateAcc.setViewAccess(s.isViewAccess());
				RoleModuleAccess getAcc=	roleModuleRepo.save(modelMapper.map(updateAcc, RoleModuleAccess.class));
				gs.add(getAcc);
			}
		});
	return moduleServ.getAllModules();
	}
	
	@Override
	public RoleModulePayload moduleAccess(RoleModulePayload rmPayload) {

		if(!roleModuleRepo.existsByRoleIdAndModuleId(rmPayload.getRoleId(),rmPayload.getModuleId()) && rmPayload.isStatus()==true)
		{
			System.out.println(rmPayload);
			RoleModuleAccess rmAccess=new RoleModuleAccess();
			rmAccess.setRoleId(rmPayload.getRoleId());
			rmAccess.setModuleId(rmPayload.getModuleId());
			rmAccess.setDeleteAccess(false);
			rmAccess.setEditAccess(false);
			rmAccess.setViewAccess(false);
			 roleModuleRepo.save(rmAccess);
			 return rmPayload;
		}
		else  if(roleModuleRepo.existsByRoleIdAndModuleId(rmPayload.getRoleId(),rmPayload.getModuleId()) && rmPayload.isStatus()==true){
			roleModuleRepo.delete(roleModuleRepo.getByRoleIdAndModuleId(rmPayload.getRoleId(),rmPayload.getModuleId()));
			 return rmPayload;
		}
		else {
//			return null;
			throw new DataAlreadyExists("RoleModuleAccess",rmPayload.getRoleId(),rmPayload.getModuleId());

		}
	}


}
