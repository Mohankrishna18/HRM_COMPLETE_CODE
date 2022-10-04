package com.arshaa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.entity.Resignation;
import com.arshaa.repository.ResignationRepository;

@Service
public class ResignationServiceImpl  implements ResignationService
{
	@Autowired(required=true)
	private ResignationRepository resignationRepo;
	
//	private RestTemplate restTemplate;

	@Override
	public Resignation createResignation(Resignation resignation) {
//		String empURL = "http://empService/getEmployeeDataByEmployeeId/";
//		
//	Resignation resign=	restTemplate.getForObject(empURL+resignation.getEmployeeId(), Resignation.class);
//	resignation.setDepartmentName(resign.getDepartmentName());
//	resignation.setEmployeeId(resign.getEmployeeId());
		resignation.setStatus("irm");
		return resignationRepo.save(resignation);
		
	}

	public List<Resignation> getByStatus(String status) {
		List<Resignation> resignAll = resignationRepo.getByStatus(status);
		return resignAll;
	}

	@Override
	public Resignation modifyResignationStatus(Resignation resignation, String employeeId, String userType) 
	{
		
		Resignation resignUpdate = resignationRepo.getByEmployeeId(employeeId);
		System.out.println("userType:"+userType);
		if(userType.equalsIgnoreCase("irm")) {
			resignUpdate.setIrmApprove(resignation.getIrmApprove());
			resignUpdate.setStatus("srm");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			return resignModify;
			
		}
		else if(userType.equalsIgnoreCase("srm") ) {
			resignUpdate.setSrmApprove(resignation.getSrmApprove());
			resignUpdate.setStatus("pmohead");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			return resignModify;
		}
		else if(userType.equalsIgnoreCase("pmohead")) {
			resignUpdate.setPmoApprove(resignation.getPmoApprove());
			resignUpdate.setStatus("hrmanager");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			return resignModify;
		}
		else if(userType.equalsIgnoreCase("hrmanager")){
			resignUpdate.setHrApprove(resignation.getHrApprove());
			resignUpdate.setStatus("Finished");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			return resignModify;
		}
		else {
			return resignUpdate;
		}
	}

	@Override
	public Resignation rejectResignation(Resignation resignation, String employeeId, String userType) {
		Resignation resignReject = resignationRepo.getByEmployeeId(employeeId);
		if(userType.equalsIgnoreCase("irm")) {
			resignReject.setIrmReject(resignation.getIrmReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("srm")) {
			resignReject.setSrmReject(resignation.getSrmReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("pmohead")) {
			resignReject.setPmoReject(resignation.getPmoReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("hrmanager")) {
			resignReject.setPmoReject(resignation.getHrReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			return resignReject1;
		}
		else {
			return resignReject;
		}
		
	}
	

}
