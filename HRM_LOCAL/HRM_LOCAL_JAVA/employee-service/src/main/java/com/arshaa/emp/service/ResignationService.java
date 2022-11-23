package com.arshaa.emp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.model.ResignationModel;
import com.arshaa.emp.repository.EmployeeMasterRepository;

@Service
public class ResignationService {

	@Autowired
	private EmployeeMasterRepository empRepo;
	
	public ResignationModel getResignationInfoByEmployeeeId(String employeeId)
	{
		ResignationModel rm=new ResignationModel();
		try {
			Optional<EmployeeMaster> emp=empRepo.findById(employeeId);
			rm.setBuh(emp.get().getBuhId());
			rm.setDepartmentName(emp.get().getDepartmentName());
			rm.setIrm(emp.get().getIrmId());
			rm.setSrm(emp.get().getSrmId());
			rm.setConfirmationDate(emp.get().getConfirmationDate());
			
			return rm;
		}
		catch(Exception e)
		{
			return rm;
		}
	}
	
	
	public String updateEmployeeAfterResignApply(String employeeId,ResignationModel rmodel)
	{
		try {
			EmployeeMaster getEmployee=empRepo.getById(employeeId);
			getEmployee.setResignationDate(rmodel.getResignationDate());
			getEmployee.setResignedReason(rmodel.getResignedReason());
			empRepo.save(getEmployee);
			return "success";
		}
		catch(Exception e) {
			return "Failed";
		}
		
	}
	
	
	public String updateEmployeeAfterResignConfirmed(String employeeId,ResignationModel rmodel)
	{
		try {
			EmployeeMaster getEmployee=empRepo.getById(employeeId);
			getEmployee.setStatus("InActive");
			getEmployee.setExitDate(rmodel.getExitDate());
			empRepo.save(getEmployee);
			return "success";
		}
		catch(Exception e)
		{
			return "Failed";
		}
		
	}
}
