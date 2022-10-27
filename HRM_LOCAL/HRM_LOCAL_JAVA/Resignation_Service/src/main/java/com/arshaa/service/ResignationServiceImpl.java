package com.arshaa.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.arshaa.emailModel.EmailTemplate;
import com.arshaa.emailModel.GetMail;
import com.arshaa.entity.Resignation;
import com.arshaa.repository.ResignationRepository;

@Service
public class ResignationServiceImpl  implements ResignationService
{
	@Autowired(required=true)
	private ResignationRepository resignationRepo;
	
	@Autowired
	private RestTemplate template;
	
	public static final String preEmailURL = "http://emailService/mail/sendmail";

	@Override
	public Resignation createResignation(Resignation resignation) {
//		String empURL = "http://empService/getEmployeeDataByEmployeeId/";
//		
//	Resignation resign=	restTemplate.getForObject(empURL+resignation.getEmployeeId(), Resignation.class);
//	resignation.setDepartmentName(resign.getDepartmentName());
//	resignation.setEmployeeId(resign.getEmployeeId());
		resignation.setStatus("irm");
Resignation res= resignationRepo.save(resignation);
		
		EmailTemplate mailTemp=new EmailTemplate();
		Map<String,String> map=new HashMap();

		mailTemp.setEmailType("RESIGNATION_APPLY");
		map.put("employeeName",resignation.getResigningEmployee());
		map.put("email","muralikrishna.miriyala@arshaa.com");
		mailTemp.setMap(map);
        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
        
        return res;
		
	}

	public List<Resignation> getByStatus(String status) {
		List<Resignation> resignAll = resignationRepo.getByStatus(status);
		return resignAll;
	}

	@Override
	public Resignation modifyResignationStatus(Resignation resignation, String employeeId, String userType) 
	{
		String OnboardUrl = "http://loginservice/login/getEmployeeDataByUserType/";
		
		Resignation resignUpdate = resignationRepo.getByEmployeeId(employeeId);
		System.out.println("userType:"+userType);
		if(userType.equalsIgnoreCase("irm")) {
			GetMail hrApp= template.getForObject(OnboardUrl+"srm", GetMail.class);
			resignUpdate.setIrmApprove(resignation.getIrmApprove());
			resignUpdate.setStatus("srm");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("IRM_RESIGN_APPROVED");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignModify;
			
		}
		else if(userType.equalsIgnoreCase("srm") ) {
			GetMail hrApp= template.getForObject(OnboardUrl+"pmohead", GetMail.class);
			
			resignUpdate.setSrmApprove(resignation.getSrmApprove());
			resignUpdate.setStatus("pmohead");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("SRM_RESIGN_APPROVED");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignModify;
		}
		else if(userType.equalsIgnoreCase("pmohead")) {
			
			GetMail hrApp= template.getForObject(OnboardUrl+"hrmanager", GetMail.class);
			
			resignUpdate.setPmoApprove(resignation.getPmoApprove());
			resignUpdate.setStatus("hrmanager");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("PMO_RESIGN_APPROVED");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class);
	        
			return resignModify;
		}
		else if(userType.equalsIgnoreCase("hrmanager")){
			
			GetMail hrApp= template.getForObject(OnboardUrl+"pmohead", GetMail.class);
			
			resignUpdate.setHrApprove(resignation.getHrApprove());
			resignUpdate.setStatus("Finished");
			Resignation resignModify = resignationRepo.save(resignUpdate);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("HR_RESIGN_APPROVED");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
//			map.put("email",hrApp.getEmail());
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class);
	        
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
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("IRM_RESIGN_REJECT");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("srm")) {
			resignReject.setSrmReject(resignation.getSrmReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("SRM_RESIGN_REJECT");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("pmohead")) {
			resignReject.setPmoReject(resignation.getPmoReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("PMO_RESIGN_REJECT");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignReject1;
		}
		else if(userType.equalsIgnoreCase("hrmanager")) {
			resignReject.setPmoReject(resignation.getHrReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);
			
			EmailTemplate mailTemp=new EmailTemplate();
			Map<String,String> map=new HashMap();

			mailTemp.setEmailType("HR_RESIGN_REJECT");
			map.put("employeeName",resignation.getResigningEmployee());
			map.put("email","muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
	        
			return resignReject1;
		}
		else {
			return resignReject;
		}
		
	}

	@Override
	public List<Resignation> getStatusByEmployeeId(String employeeId) {
		List<Resignation> resignAllemp = resignationRepo.getStatusByEmployeeId(employeeId);
		return resignAllemp;
	}

	


}
