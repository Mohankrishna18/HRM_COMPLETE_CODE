package com.arshaa.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.arshaa.emailModel.EmailTemplate;
import com.arshaa.emailModel.GetMail;
import com.arshaa.emailModel.ResignationModel;
import com.arshaa.entity.Resignation;
import com.arshaa.repository.ResignationRepository;

@Service
public class ResignationServiceImpl implements ResignationService {
	@Autowired(required = true)
	private ResignationRepository resignationRepo;

	@Autowired
	private RestTemplate template;

	public static final String preEmailURL = "http://emailService/mail/sendmail";
	public static final String empResiInfoURL = "http://empService/emp/getResignationInfoByEmployeeeId/";
	public static final String makeInactiveURL = "http://loginservice/login/makeLoginsInActive/";
	public static final String getHrIdFromDepURL = "http://departments/dept/getBuheadEmployeeIdByBusinessUnitName/";
	public static final String empResiApplyURL = "http://empService/emp/updateEmployeeAfterResignApply/";
	public static final String empResiConfirmURL = "http://empService/emp/updateEmployeeAfterResignConfirmed/";
	public static final String getEmailByEmployeeIdURL="http://loginservice/login/getEmployeeEmailByEmployeeId/";

	@Override
	public Resignation createResignation(Resignation resignation) {
//		String empURL = "http://empService/getEmployeeDataByEmployeeId/";
//		
//	Resignation resign=	restTemplate.getForObject(empURL+resignation.getEmployeeId(), Resignation.class);
//	resignation.setDepartmentName(resign.getDepartmentName());
//	resignation.setEmployeeId(resign.getEmployeeId());
		ResignationModel rm = template.getForObject(this.empResiInfoURL + resignation.getEmployeeId(),
				ResignationModel.class);

		resignation.setStatus(rm.getIrm());
		Resignation res = resignationRepo.save(resignation);
		String email=template.getForObject(getEmailByEmployeeIdURL+rm.getIrm(), String.class);

		EmailTemplate mailTemp = new EmailTemplate();
		Map<String, String> map = new HashMap();

		mailTemp.setEmailType("RESIGNATION_APPLY");
		map.put("employeeName", resignation.getResigningEmployee());
		map.put("email", "muralikrishna.miriyala@arshaa.com");
//		map.put("email", email);
		mailTemp.setMap(map);
//		template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
		ResignationModel resi = new ResignationModel();
		resi.setResignationDate(res.getResignationDate());
		resi.setResignedReason(res.getReason());
//		template.put(empResiApplyURL + resignation.getEmployeeId(), resi);
		return res;

	}

	public List<Resignation> getByStatus(String status) {
//		if(status.equalsIgnoreCase("pmohead") )
//		{
//			status="srm";
//			List<Resignation> resignAll = resignationRepo.getByStatus(status);
//		}
//		else if(status.equalsIgnoreCase("buhead"))
//		{
//			status="irm";
//			List<Resignation> resignAll = resignationRepo.getByStatus(status);
//		}
//		else if(status.equalsIgnoreCase("taahead"))
//		{
//			status="hrmanager";
//			List<Resignation> resignAll = resignationRepo.getByStatus(status);
//		}

		List<Resignation> resignAll = resignationRepo.getByStatus(status);
		return resignAll;
	}

	@Override
	public Resignation modifyResignationStatus(Resignation resignation, String employeeId, String userType) {
		String OnboardUrl = "http://loginservice/login/getEmployeeDataByUserType/";
		ResignationModel rm = template.getForObject(this.empResiInfoURL+employeeId, ResignationModel.class);

		ResignationModel hrId = template.getForObject(this.getHrIdFromDepURL+"HR", ResignationModel.class);
		Resignation resignUpdate = resignationRepo.getById(resignation.getResignationId());
		System.out.println("userType:" + userType);

		if (userType.equalsIgnoreCase(rm.getIrm())) {

			Resignation resignModify;

			if (rm.getIrm().equalsIgnoreCase(rm.getSrm())) {
				resignUpdate.setIrmApprove(resignation.getIrmApprove());
				resignUpdate.setStatus(hrId.getBusinessUnitHeadName());
				resignModify = resignationRepo.save(resignUpdate);
				GetMail hrApp = template.getForObject(OnboardUrl+"hrmanager", GetMail.class);

			}

			else {
				resignUpdate.setIrmApprove(resignation.getIrmApprove());
				resignUpdate.setStatus(rm.getSrm());
				resignModify = resignationRepo.save(resignUpdate);
				GetMail hrApp = template.getForObject(OnboardUrl+"srm", GetMail.class);

			}
			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			String email=template.getForObject(getEmailByEmployeeIdURL+rm.getIrm(), String.class);


			mailTemp.setEmailType("IRM_RESIGN_APPROVED");
			map.put("employeeName", resignation.getResigningEmployee());
			map.put("email", email);
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignModify;

		} else if (userType.equalsIgnoreCase(rm.getSrm())) {
			Resignation resignModify;
			resignUpdate.setSrmApprove(resignation.getSrmApprove());
			resignUpdate.setExitDate(resignation.getExitDate());
			resignUpdate.setStatus(hrId.getBusinessUnitHeadName());
			resignModify = resignationRepo.save(resignUpdate);
			GetMail hrApp = template.getForObject(OnboardUrl+"hrmanager", GetMail.class);
			String email=template.getForObject(getEmailByEmployeeIdURL+rm.getBuh(), String.class);

			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();

			mailTemp.setEmailType("SRM_RESIGN_APPROVED");
			map.put("employeeName", resignation.getResigningEmployee());
			map.put("email", email);
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignModify;
		}
//		else if(userType.equalsIgnoreCase("pmohead")) {
//			
//			GetMail hrApp= template.getForObject(OnboardUrl+"hrmanager", GetMail.class);
//			
//			resignUpdate.setPmoApprove(resignation.getPmoApprove());
//			resignUpdate.setStatus("hrmanager");
//			Resignation resignModify = resignationRepo.save(resignUpdate);
//			
//			EmailTemplate mailTemp=new EmailTemplate();
//			Map<String,String> map=new HashMap();
//
//			mailTemp.setEmailType("PMO_RESIGN_APPROVED");
//			map.put("employeeName",resignation.getResigningEmployee());
//			map.put("email","muralikrishna.miriyala@arshaa.com");
//			mailTemp.setMap(map);
//	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class);
//	        
//			return resignModify;
//		}
		else if (userType.equalsIgnoreCase(hrId.getBusinessUnitHeadName())) {

			GetMail hrApp = template.getForObject(OnboardUrl+"pmohead", GetMail.class);

			resignUpdate.setHrApprove(resignation.getHrApprove());
			resignUpdate.setStatus("Finished");

			Resignation resignModify = resignationRepo.save(resignUpdate);
			ResignationModel resi = new ResignationModel();
			resi.setExitDate(resignModify.getExitDate());
			template.put(empResiConfirmURL + employeeId, resi);
			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			
			String employeeEmail=template.getForObject(getEmailByEmployeeIdURL+employeeId, String.class);

			mailTemp.setEmailType("HR_RESIGN_APPROVED");
			map.put("employeeName", resignation.getResigningEmployee());
			map.put("email", employeeEmail);
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);

			template.getForObject(makeInactiveURL+employeeId, String.class);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignModify;
		} else {
			return resignUpdate;
		}
	}

	@Override
	public Resignation rejectResignation(Resignation resignation, String employeeId, String userType) {

		System.out.println("resignationresignation"+resignation.getResignationId());
		Resignation resignReject = resignationRepo.getById(resignation.getResignationId());
		ResignationModel rm = template.getForObject(this.empResiInfoURL+employeeId, ResignationModel.class);
		ResignationModel hrId = template.getForObject(this.getHrIdFromDepURL+"HR", ResignationModel.class);

		if (userType.equalsIgnoreCase(rm.getIrm())) {
			resignReject.setIrmReject(resignation.getIrmReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);

			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			String employeeEmail=template.getForObject(getEmailByEmployeeIdURL+employeeId, String.class);

			mailTemp.setEmailType("IRM_RESIGN_REJECT");
			map.put("employeeName", resignation.getResigningEmployee());
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
			map.put("email", employeeEmail);

			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignReject1;
		} else if (userType.equalsIgnoreCase(rm.getSrm())) {
			resignReject.setSrmReject(resignation.getSrmReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);

			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			String employeeEmail=template.getForObject(getEmailByEmployeeIdURL+employeeId, String.class);

			mailTemp.setEmailType("SRM_RESIGN_REJECT");
			map.put("employeeName", resignation.getResigningEmployee());
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
			map.put("email", employeeEmail);

			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignReject1;
		}
//		else if(userType.equalsIgnoreCase("pmohead")) {
//			resignReject.setPmoReject(resignation.getPmoReject());
//			resignReject.setStatus("Rejected");
//			Resignation resignReject1 = resignationRepo.save(resignReject);
//			
//			EmailTemplate mailTemp=new EmailTemplate();
//			Map<String,String> map=new HashMap();
//
//			mailTemp.setEmailType("PMO_RESIGN_REJECT");
//			map.put("employeeName",resignation.getResigningEmployee());
//			map.put("email","muralikrishna.miriyala@arshaa.com");
//			mailTemp.setMap(map);
//	        template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
//	        
//			return resignReject1;
//		}
		else if (userType.equalsIgnoreCase(hrId.getBusinessUnitHeadName())) {
			resignReject.setPmoReject(resignation.getHrReject());
			resignReject.setStatus("Rejected");
			Resignation resignReject1 = resignationRepo.save(resignReject);

			EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			String employeeEmail=template.getForObject(getEmailByEmployeeIdURL+employeeId, String.class);

			mailTemp.setEmailType("HR_RESIGN_REJECT");
			map.put("employeeName", resignation.getResigningEmployee());
			map.put("email", employeeEmail);
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			return resignReject1;
		} else {
			return resignReject;
		}

	}

	@Override
	public List<Resignation> getStatusByEmployeeId(String employeeId) {
		List<Resignation> resignAllemp = resignationRepo.getStatusByEmployeeId(employeeId);
		return resignAllemp;
	}

	public Date getNoticeDateByResignationDate(Date resignationDate, String employeeId) {

		ResignationModel rm = template.getForObject(this.empResiInfoURL+employeeId, ResignationModel.class);

		Date d = rm.getConfirmationDate();
		if (Objects.isNull(d)) {
			ZonedDateTime zd = ZonedDateTime.now();

			return Date.from(zd.plusDays(45).toInstant());
		} else {
			ZonedDateTime zd = ZonedDateTime.now();

			return Date.from(zd.plusDays(90).toInstant());
		}
	}



}
