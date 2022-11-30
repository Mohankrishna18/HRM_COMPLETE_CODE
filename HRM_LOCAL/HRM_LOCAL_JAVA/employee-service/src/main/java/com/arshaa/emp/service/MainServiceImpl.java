package com.arshaa.emp.service;

//import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.arshaa.emp.common.EmployeeLogin;
import com.arshaa.emp.common.GetIrmId;
import com.arshaa.emp.common.GetReportingManager;
import com.arshaa.emp.common.GetSrmId;
import com.arshaa.emp.common.PreMailModel;
import com.arshaa.emp.common.UserModel;
import com.arshaa.emp.common.Users;
import com.arshaa.emp.emailModel.EmployeeReq;
import com.arshaa.emp.emailModel.MailGet;
import com.arshaa.emp.emailModel.MainEmailTemplate;
import com.arshaa.emp.emailModel.RegistrationConfirmation;
import com.arshaa.emp.emailModel.UserMail;
import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.EmployeeProfile;
import com.arshaa.emp.entity.Intern;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.entity.UserClientProjectManagement;
import com.arshaa.emp.model.AdditionalDetails;
import com.arshaa.emp.model.Address;
import com.arshaa.emp.model.AssignProjectName;
import com.arshaa.emp.model.DepartmentName;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.EducationalDetails;
import com.arshaa.emp.model.EmployeeId;
import com.arshaa.emp.model.EmployeeName;
import com.arshaa.emp.model.EmploymentDetails;
import com.arshaa.emp.model.Experience;
import com.arshaa.emp.model.GetEmployeeIds;
import com.arshaa.emp.model.GetListByBandForManager;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.LeaveBalanceModel;
import com.arshaa.emp.model.LeaveMaster;
import com.arshaa.emp.model.PersonalDetails;
import com.arshaa.emp.model.PreOnboarding;
import com.arshaa.emp.model.ProbationEmployeeFeedBack;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.model.StringConstants;
import com.arshaa.emp.model.TermsAndConditions;
import com.arshaa.emp.model.WaitingForApproval;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.EmployeeProfileRepository;
import com.arshaa.emp.repository.OnboardRepository;
import com.arshaa.emp.repository.UserClientProjectManagementRepositorty;

import com.thoughtworks.xstream.mapper.Mapper.Null;

@Service
public class MainServiceImpl implements MainService {
	static final String status = "Active";
	@Autowired
	OnboardRepository onRepo;
	@Autowired
	EmployeeMasterRepository emRepo;
	@Autowired
	EmployeeProfileRepository empProfileRepo;
	@Autowired
	UserClientProjectManagementRepositorty userClientRepo;
	@Autowired
	@Lazy
	@LoadBalanced
	private RestTemplate template;
	public static final String preEmailURL = "http://emailService/mail/sendmail";

	StringConstants sConstants = new StringConstants();

	public ResponseEntity onBoardUser(Onboarding newOnboard) {

//		String preEmailURL = "http://emailService/mail/preSendMail";
//		String reqUrlb= "http://RecruitmentTracker/recruitmentTracker/requiredDataById/";
		String reqUrl = "http://RecruitmentTracker/recruitmentTracker/getDataById/";
		String preOnboardUrl = "http://loginservice/login/addUsersForPreOnboard";
		Response r = new Response<>();
		try {
			java.sql.Date tSqlDate = new java.sql.Date(newOnboard.getOnboardDate().getTime());
			newOnboard.setOnboardDate(tSqlDate);

			java.sql.Date tsqDate1 = new java.sql.Date(newOnboard.getUpdatedOn().getTime());

			newOnboard.setUpdatedOn(tsqDate1);
			newOnboard.setWaitingforapprovalStatus(true);
			newOnboard.setRejectedStatus(false);
			newOnboard.setApprovedStatus(false);
			newOnboard.setOnboardingStatus("Pending");

			Onboarding newData = onRepo.save(newOnboard);

			newData.setFullName(newData.getFirstName().concat(" ").concat(newData.getLastName()));

			EmployeeReq empReq = template.getForObject(reqUrl + newData.getRequisitionId(), EmployeeReq.class);
			System.out.println(empReq.getJobTitle());
			newData.setJobTitle(empReq.getJobTitle());
			newData.setClientName(empReq.getClientName());
			newData.setRaisedBy(empReq.getRaisedBy());
			newData.setRequestInitiatedDate(empReq.getRequestInitiatedDate());

			Onboarding newData1 = onRepo.save(newData);

			r.setStatus(true);
			r.setMessage(sConstants.POST_SUCCESS);
			r.setData(newData1);

			String status = "Active";
			UserClientProjectManagement userclient = new UserClientProjectManagement();
			userclient.setOnboardingId(newData.getOnboardingId());
			userclient.setReportingManager(newData.getReportingManager());
			userclient.setClientName(newData.getClient());
			userclient.setProjectName(newData.getProjectName());
//			userclient.setProjectId();
//			userclient.getClientId();
			userclient.setStartDate(newData.getDateOfJoining());
			userclient.setStatus(status);
			userclient.setSkills(newData.getPrimarySkills());
			userClientRepo.save(userclient);

			PreMailModel pm = new PreMailModel();
			pm.setName(newOnboard.getFirstName());
			pm.setEmail(newOnboard.getEmail());
			Random rand = new Random();
			Integer intRandom = rand.nextInt(9999);
			int n = newOnboard.getFirstName().length();
			char first = newOnboard.getFirstName().charAt(0);
			char last = newOnboard.getFirstName().charAt(n - 1);
			String password = "user" + first + last + intRandom;
			pm.setPassword(password);

			MainEmailTemplate mailTemp = new MainEmailTemplate();
			Map<String, String> map = new HashMap<>();
			map.put("email", newOnboard.getEmail());
			map.put("employeeName", newOnboard.getFirstName());
			map.put("password", password);
			mailTemp.setEmailType("ONBOARDAPPROVE");
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);

			PreOnboarding pre = new PreOnboarding();
			pre.setEmail(newOnboard.getEmail());
			pre.setPassword(password);
			pre.setOnboardingId(newOnboard.getOnboardingId());
			pre.setUserType("preonboardedemployee");
			template.postForObject(preOnboardUrl, pre, PreOnboarding.class);
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity<Onboarding> waitingForApprovelStatus() {
		Response r = new Response<WaitingForApproval>();

		try {
			List<WaitingForApproval> waList = new ArrayList<>();

			List<Onboarding> onboarding = onRepo.findByWaitingforapprovalStatus(true);
			if (!onboarding.isEmpty()) {

				onboarding.forEach(on -> {
					WaitingForApproval wa = new WaitingForApproval();
//					wa.setOnboardingId(on.getOnboardingId());
// 					wa.setFirstName(on.getFirstName()+" "+on.getLastName());
// //					wa.setLastName(on.getLastName());
// 					SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
// 					String strDate= formatter.format(on.getDateOfJoining());
// 					wa.setDepartment(on.getDepartment());
// 					wa.setDateOfJoining(strDate);
// 					wa.setDesignation(on.getDesignation());
// 					wa.setEmail(on.getEmail());
// 					wa.setJobTitle(on.getJobTitle());
// 					wa.setPhoneNumber(on.getPhoneNumber());
// 					wa.setEmploymentType(on.getEmploymentType());
// 					wa.setYearsOfExperience(on.getYearsOfExperience());
// 					wa.setPrimarySkills(on.getPrimarySkills());
// 					wa.setSecondarySkills(on.getSecondarySkills());
// 					waList.add(wa);
				});

				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(onboarding);
				return new ResponseEntity(r, HttpStatus.OK);

			} else {
				r.setStatus(true);
				r.setMessage(sConstants.NO_ENTRIES_FOUND);
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE + e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	public ResponseEntity updateApprovStatus(String onboardingId, HrApprovalStatus newOnboard) {
		Response response = new Response();
		String dUrl="http://departments/dept/getDepartmentsNameById/";
//		String userURL = "http://urpService/user/addUser";
		String loginURL = "http://loginservice/login/addUsers";
//		String emailURL = "http://emailService/mail/sendmail";
		// String employee="ATPL";
		// String intern="TRP";
		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";

		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			System.out.println(getOnboarding);
			if (!getOnboarding.equals(null)) {
				String depName=template.getForObject(dUrl+newOnboard.getDepartment(), String.class);
				getOnboarding.setDepartment(depName);
				getOnboarding.setApprovedStatus(newOnboard.isApprovedStatus());
				getOnboarding.setRejectedStatus(newOnboard.isRejectedStatus());
				getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
				getOnboarding.setWaitingforapprovalStatus(newOnboard.isWaitingforapprovalStatus());
				getOnboarding.setApprovedDate(newOnboard.getApprovedDate());
				getOnboarding.setReportingManager(newOnboard.getReportingManager());
//				getOnboarding.setTermsAndConditions(newOnboard.isTermsAndConditions());
///				getOnboarding.setIrm(newOnboard.getIrm());
//				getOnboarding.setTaaApprovalComment(newOnboard.getTaaApprovalComment());
//				getOnboarding.setTaaHeadApprovalComment(newOnboard.getTaaHeadApprovalComment());
//				getOnboarding.setPmoApprovalComment(newOnboard.getPmoApprovalComment());
//				getOnboarding.setCeoApprovalComment(newOnboard.getCeoApprovalComment());
				getOnboarding.setOfferLetter(newOnboard.isOfferLetter());
				getOnboarding.setSalarySlip(newOnboard.isSalarySlip());
				getOnboarding.setHikeLetter(newOnboard.isHikeLetter());
				getOnboarding.setForm16(newOnboard.isForm16());
				getOnboarding.setEducationalDocuments(newOnboard.isEducationalDocuments());
				getOnboarding.setResignation(newOnboard.isResignation());
				getOnboarding.setIdProof(newOnboard.isIdProof());
				getOnboarding.setDepartment(newOnboard.getDepartment());
				getOnboarding.setDesignation(newOnboard.getDesignation());
				getOnboarding.setHrcomment(newOnboard.getHrcomment());
//				getOnboarding.setHrApprovalComment(newOnboard.getHrApprovalComment());
//				getOnboarding.setProjectName(newOnboard.getProjectName());
//				getOnboarding.setSecondaryPhoneNumber(newOnboard.getSecondaryPhoneNumber());
//				getOnboarding.setBand(newOnboard.getBand());

				Onboarding saveList = onRepo.save(getOnboarding);

				// if (saveList.isApprovedStatus() == true) {
				if (getOnboarding.getOnboardingStatus().equalsIgnoreCase("HRApproved")) {
					java.sql.Date tSqlDate = new java.sql.Date(newOnboard.getApprovedDate().getTime());
					newOnboard.setApprovedDate(tSqlDate);
					getOnboarding.setRejectedStatus(false);
					getOnboarding.setWaitingforapprovalStatus(false);
//					 getOnboarding.setOnboardingStatus("Pending");

					onRepo.save(getOnboarding);

					// Posting data to EmployeeMaster
					// System.out.println(ir.getEmployeeId());
					// getOnboarding.getOnboardingId().getChars(0, 0, null, 0);; }
					EmployeeMaster employeeMaster = new EmployeeMaster();

					employeeMaster.setFirstName(getOnboarding.getFirstName());
					employeeMaster.setMiddleName(getOnboarding.getMiddleName());
					employeeMaster.setLastName(getOnboarding.getLastName());
					employeeMaster.setFullName(getOnboarding.getFullName());
					employeeMaster.setPrimaryPhoneNumber(getOnboarding.getPhoneNumber());
					employeeMaster.setSecondaryPhoneNumber(getOnboarding.getSecondaryPhoneNumber());
					employeeMaster.setDesignationName(getOnboarding.getDesignation());
					employeeMaster.setDepartmentName(getOnboarding.getDepartment());
					employeeMaster.setDateOfJoining(getOnboarding.getDateOfJoining());
					employeeMaster.setEmail(getOnboarding.getEmail());
					employeeMaster.setYearsOfExperience(getOnboarding.getYearsOfExperience());
					employeeMaster.setEmployeeId(getOnboarding.getEmployeeId());

					employeeMaster.setReportingManager(getOnboarding.getReportingManager());
					employeeMaster.setIrm(getOnboarding.getIrm());
					employeeMaster.setEmploymentType(getOnboarding.getEmploymentType());
					employeeMaster.setJobTitle(getOnboarding.getJobTitle());
					employeeMaster.setPrimarySkills(getOnboarding.getPrimarySkills());
					employeeMaster.setSecondarySkills(getOnboarding.getSecondarySkills());
					employeeMaster.setProjectName(getOnboarding.getProjectName());
					employeeMaster.setBand(getOnboarding.getBand());
					employeeMaster.setAadharNumber(getOnboarding.getAadharNumber());
					employeeMaster.setAccountNumber(getOnboarding.getAccountNumber());
					employeeMaster.setBankName(getOnboarding.getBankName());
					employeeMaster.setBloodGroup(getOnboarding.getBloodGroup());
					employeeMaster.setBranch(getOnboarding.getBranch());
					employeeMaster.setCurrentAdress(getOnboarding.getCurrentAdress());
					employeeMaster.setCurrentCountry(getOnboarding.getCurrentCountry());
					employeeMaster.setCurrentPincode(getOnboarding.getCurrentPincode());
					employeeMaster.setCurrentState(getOnboarding.getCurrentState());
					employeeMaster.setDateOfBirth(getOnboarding.getDateOfBirth());
					employeeMaster.setExitDate(getOnboarding.getExitDate());
					employeeMaster.setGender(getOnboarding.getGender());
					employeeMaster.setGraduationBoardOfUniversity(getOnboarding.getGraduationBoardOfUniversity());
					employeeMaster.setGraduationType(getOnboarding.getGraduationType());
					employeeMaster.setGraduationInstituteName(getOnboarding.getGraduationInstituteName());
					employeeMaster.setGraduationInstituteCity(getOnboarding.getGraduationInstituteCity());
					employeeMaster.setGraduationCourseName(getOnboarding.getGraduationCourseName());
					employeeMaster.setGraduationJoiningYear(getOnboarding.getGraduationJoiningYear());
					employeeMaster.setGraduationPassedYear(getOnboarding.getGraduationPassedYear());
					employeeMaster.setGraduationGrade(getOnboarding.getGraduationGrade());
					employeeMaster.setIfscCode(getOnboarding.getIfscCode());

					employeeMaster.setSscBoardOfUniversity(getOnboarding.getSscBoardOfUniversity());
					employeeMaster.setSscSchoolName(getOnboarding.getSscSchoolName());
					employeeMaster.setSscSchoolCity(getOnboarding.getSscSchoolCity());
					employeeMaster.setSscCourseName(getOnboarding.getSscCourseName());
					employeeMaster.setSscJoiningYear(getOnboarding.getSscJoiningYear());
					employeeMaster.setSscPassedYear(getOnboarding.getSscPassedYear());
					employeeMaster.setSscGrade(getOnboarding.getSscGrade());
					employeeMaster.setSscQualification(getOnboarding.getSscQualification());

					employeeMaster.setIntermediateBoardOfUniversity(getOnboarding.getIntermediateBoardOfUniversity());
					employeeMaster.setIntermediateCollegeCity(getOnboarding.getIntermediateCollegeCity());
					employeeMaster.setIntermediateCollegeName(getOnboarding.getIntermediateCollegeName());
					employeeMaster.setIntermediateCourseName(getOnboarding.getIntermediateCourseName());
					employeeMaster.setIntermediateGrade(getOnboarding.getIntermediateGrade());
					employeeMaster.setIntermediateJoiningYear(getOnboarding.getIntermediateJoiningYear());
					employeeMaster.setIntermediatePassedYear(getOnboarding.getIntermediatePassedYear());
					employeeMaster.setIntermediateQualification(getOnboarding.getIntermediateQualification());

					employeeMaster.setMaritalStatus(getOnboarding.getMaritalStatus());
					employeeMaster.setPanNumber(getOnboarding.getPanNumber());
					employeeMaster.setPassportExpiryDate(getOnboarding.getPassportExpiryDate());
					employeeMaster.setPassportNo(getOnboarding.getPassportNo());
					employeeMaster.setPermanentAdress(getOnboarding.getPermanentAdress());
					employeeMaster.setPermanentCountry(getOnboarding.getPermanentCountry());
					employeeMaster.setPermanentPincode(getOnboarding.getPermanentPincode());
					employeeMaster.setPermanentState(getOnboarding.getPermanentState());

					employeeMaster
							.setPostgraduationBoardOfUniversity(getOnboarding.getPostgraduationBoardOfUniversity());
					employeeMaster.setPostgraduationCourseName(getOnboarding.getPostgraduationCourseName());
					employeeMaster.setPostgraduationGrade(getOnboarding.getPostgraduationGrade());
					employeeMaster.setPostgraduationInstituteCity(getOnboarding.getPostgraduationInstituteCity());
					employeeMaster.setPostgraduationInstituteName(getOnboarding.getPostgraduationInstituteName());
					employeeMaster.setPostgraduationJoiningYear(getOnboarding.getPostgraduationJoiningYear());
					employeeMaster.setPostgraduationPassedYear(getOnboarding.getPostgraduationPassedYear());
					employeeMaster.setPostgraduationType(getOnboarding.getPostgraduationType());

					employeeMaster.setPreviousCompany1_designation(getOnboarding.getPreviousCompany1_designation());
					employeeMaster.setPreviousCompany1_employeeId(getOnboarding.getPreviousCompany1_employeeId());
//					employeeMaster.previousCompany1_grossSalary(getOnboarding.getpreviousCompany1_grossSalary());
					employeeMaster.setPreviousCompany1_joiningDate(getOnboarding.getPreviousCompany1_joiningDate());
					employeeMaster.setPreviousCompany1_name(getOnboarding.getPreviousCompany1_name());
					employeeMaster.setPreviousCompany1_reasonForRelieving(
							getOnboarding.getPreviousCompany1_reasonForRelieving());
					employeeMaster.setPreviousCompany1_relievingDate(getOnboarding.getPreviousCompany1_relievingDate());
					employeeMaster
							.setPreviousCompany1_typeOfEmployment(getOnboarding.getPreviousCompany1_typeOfEmployment());

					employeeMaster.setPreviousCompany2_designation(getOnboarding.getPreviousCompany2_designation());
					employeeMaster.setPreviousCompany2_employeeId(getOnboarding.getPreviousCompany2_employeeId());
//					employeeMaster.previousCompany2_grossSalary(getOnboarding.getpreviousCompany2_grossSalary());
					employeeMaster.setPreviousCompany2_joiningDate(getOnboarding.getPreviousCompany2_joiningDate());
					employeeMaster.setPreviousCompany2_name(getOnboarding.getPreviousCompany2_name());
					employeeMaster.setPreviousCompany2_reasonForRelieving(
							getOnboarding.getPreviousCompany2_reasonForRelieving());
					employeeMaster.setPreviousCompany2_relievingDate(getOnboarding.getPreviousCompany2_relievingDate());
					employeeMaster
							.setPreviousCompany2_typeOfEmployment(getOnboarding.getPreviousCompany2_typeOfEmployment());

					employeeMaster.setPreviousCompany3_designation(getOnboarding.getPreviousCompany3_designation());
					employeeMaster.setPreviousCompany3_employeeId(getOnboarding.getPreviousCompany3_employeeId());
//					employeeMaster.previousCompany3_grossSalary(getOnboarding.getpreviousCompany3_grossSalary());
					employeeMaster.setPreviousCompany3_joiningDate(getOnboarding.getPreviousCompany3_joiningDate());
					employeeMaster.setPreviousCompany3_name(getOnboarding.getPreviousCompany3_name());
					employeeMaster.setPreviousCompany3_reasonForRelieving(
							getOnboarding.getPreviousCompany3_reasonForRelieving());
					employeeMaster.setPreviousCompany3_relievingDate(getOnboarding.getPreviousCompany3_relievingDate());
					employeeMaster
							.setPreviousCompany3_typeOfEmployment(getOnboarding.getPreviousCompany3_typeOfEmployment());
					employeeMaster.setReportingManager(newOnboard.getReportingManager());
					employeeMaster.setIrm(getOnboarding.getIrm());
					employeeMaster.setSrm(getOnboarding.getSrm());
					employeeMaster.setBuh(getOnboarding.getBuh());
					employeeMaster.setIrmId(getOnboarding.getIrmId());
					employeeMaster.setSrmId(getOnboarding.getSrmId());
					employeeMaster.setBuhId(getOnboarding.getBuhId());
					employeeMaster.setOnboardingId(getOnboarding.getOnboardingId());
					employeeMaster.setUanNumber(getOnboarding.getUanNumber());
					employeeMaster.setProjectName(getOnboarding.getProjectName());
					employeeMaster.setOnboardingStatus(getOnboarding.getOnboardingStatus());
					employeeMaster.setHrcomment(getOnboarding.getHrcomment());
					employeeMaster.setProjectAllocation(0);
					EmployeeMaster em = emRepo.save(employeeMaster);

					// posting EmployeeId in Userproject Table
					UserClientProjectManagement userclient = userClientRepo.getByOnboardingId(onboardingId);
					userclient.setEmployeeId(em.getEmployeeId());
					userClientRepo.save(userclient);

					// posting employeeId to employee profile table
					EmployeeProfile eprofile = new EmployeeProfile();
					eprofile.setEmployeeId(employeeMaster.getEmployeeId());
					empProfileRepo.save(eprofile);

					// Generating Random userId and Password
					Random rand = new Random();
					Integer intRandom = rand.nextInt(9999);
					String userId = getOnboarding.getFirstName() + intRandom;
					int n = getOnboarding.getFirstName().length();
					char first = getOnboarding.getFirstName().charAt(0);
					char last = getOnboarding.getFirstName().charAt(n - 1);
					String password = "user" + first + last + intRandom;
					// System.out.println("Username :" + userId + "Password" + password);

//					// Posting data to UserMaster table
//					Users users = new Users();
//					users.setEmployeeId(employeeMaster.getEmployeeId());
//					users.setUserName(userId);
//					template.postForObject(userURL, users, Users.class);

					// Posting data to Employee login table
					EmployeeLogin login = new EmployeeLogin();
					login.setEmail(getOnboarding.getEmail());
					login.setUserName(userId);
					login.setPassword(password);
					login.setEmployeeId(employeeMaster.getEmployeeId());
					login.setUserType("employee");
					template.postForObject(loginURL, login, EmployeeLogin.class);
					// send mail
//					UserModel model = new UserModel();
//					model.setName(employeeMaster.getFirstName());
//					model.setEmail(employeeMaster.getEmail());
//					model.setUserName(userId);
//					model.setPassword(password);
//					model.setEmployeeId(employeeMaster.getEmployeeId());
//					template.postForObject(emailURL, model, UserModel.class);

					MainEmailTemplate mailTemp = new MainEmailTemplate();
					Map<String, String> map = new HashMap();

					mailTemp.setEmailType("HR_APPROVAL");
					map.put("employeeName", getOnboarding.getFirstName() + getOnboarding.getLastName());
					map.put("email", getOnboarding.getEmail());
					map.put("employeeId", employeeMaster.getEmployeeId());
					map.put("password", password);
					mailTemp.setMap(map);
					template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);

					MainEmailTemplate mailTemp1 = new MainEmailTemplate();
					Map<String, String> map1 = new HashMap();

					mailTemp1.setEmailType("IT_TEAM");
					map1.put("employeeName", "Raj");
					map1.put("email", "muralikrishna.miriyala@arshaa.com");
					mailTemp1.setMap(map1);
					template.postForObject(preEmailURL, mailTemp1, MainEmailTemplate.class);

					MainEmailTemplate mailTemp2 = new MainEmailTemplate();
					Map<String, String> map2 = new HashMap();

					mailTemp2.setEmailType("ADMIN");
					map2.put("employeeName", "Dheeraj");
					map2.put("email", "muralikrishna.miriyala@arshaa.com");
					mailTemp2.setMap(map2);
					template.postForObject(preEmailURL, mailTemp2, MainEmailTemplate.class);

					MainEmailTemplate mailTemp3 = new MainEmailTemplate();
					Map<String, String> map3 = new HashMap();

					
					
					UserMail response1 = template.getForObject(	OnboardUrl+"pmohead",UserMail.class);
		        	List<MailGet> hrApp = response1.getMails();
		        	
		        	hrApp.forEach(e->{
					mailTemp3.setEmailType("PMO");
					map3.put("employeeName", em.getFullName());
					map3.put("email", e.getEmail());
					mailTemp3.setMap(map3);
					template.postForObject(preEmailURL, mailTemp3, MainEmailTemplate.class);
		        	});
		        	
		        	
		        	//Post employeeId and Leave Balance to Leave Mater Table
		        	LeaveMaster lmm = new LeaveMaster();
                    String posst="http://leaveservice/leave/postLeaves";       
                    lmm.setEmployeeId(getOnboarding.getEmployeeId());
                    lmm.setLeaveBalance(1);
                  
                    template.postForObject(posst,lmm, LeaveMaster.class);   

					response.setStatus(true);
					response.setMessage("Hr Approved successfully");
					response.setData(employeeMaster);
					// onRepo.delete(getOnboarding);
					return new ResponseEntity(response, HttpStatus.OK);
				} else if (saveList.isRejectedStatus() == true) {
					java.sql.Date tSqlDate = new java.sql.Date(newOnboard.getRejectDate().getTime());
					newOnboard.setRejectDate(tSqlDate);
					getOnboarding.setApprovedStatus(false);
					getOnboarding.setWaitingforapprovalStatus(false);
					onRepo.save(getOnboarding);
					return new ResponseEntity("HR Rejected Successfully", HttpStatus.OK);
				} else {
					return new ResponseEntity("Waiting for HR Approval", HttpStatus.OK);
				}
			} else {
				return new ResponseEntity("Data not Found", HttpStatus.OK);
			}

		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);

		}
	}

//	
//	public ResponseEntity addData(@RequestBody UserClientProjectManagement userClient ) {
//		String clientURL ="http://clientProjectMapping/getAllProjects";
//		
//	
//		try {
//			java.sql.Date tSqlDate = new java.sql.Date(userClient.getUpdatedOn().getTime());
//			userClient.setUpdatedOn(tSqlDate);
//			userClientRepo.save(userClient);
//			
//			
//		}
//		
//	}
	public ResponseEntity addEmployee(@RequestBody EmployeeMaster newEmployee) {
		String userURL = "http://urpService/user/addUser";
		String loginURL = "http://loginservice/login/addUsers";
		String emailURL = "http://emailService/mail/sendmail";
		try {
			java.sql.Date tSqlDate = new java.sql.Date(newEmployee.getUpdatedOn().getTime());
			newEmployee.setUpdatedOn(tSqlDate);
			emRepo.save(newEmployee);
			EmployeeMaster employeeMaster = new EmployeeMaster();

			// Generating Random userId and Password
			Random rand = new Random();
			Integer intRandom = rand.nextInt(9999);
			String userId = newEmployee.getFirstName() + intRandom;
			int n = newEmployee.getFirstName().length();
			char first = newEmployee.getFirstName().charAt(0);
			char last = newEmployee.getFirstName().charAt(n - 1);
			String password = "user" + first + last + intRandom;
			// System.out.println("Username :" + userId + "Password" + password);

			// Posting data to UserMaster table
			Users users = new Users();
			users.setEmployeeId(newEmployee.getEmployeeId());
			users.setUserName(userId);
			template.postForObject(userURL, users, Users.class);

			// Posting data to Employee login table
			
			EmployeeLogin login = new EmployeeLogin();
			login.setEmail(newEmployee.getEmail());
			login.setUserName(userId);
			login.setPassword(password);
			login.setEmployeeId(newEmployee.getEmployeeId());
			login.setUserType("employee");
			template.postForObject(loginURL, login, EmployeeLogin.class);

			UserModel model = new UserModel();
			model.setName(employeeMaster.getFirstName());
			model.setEmail(employeeMaster.getEmail());
			model.setUserName(userId);
			model.setPassword(password);
			model.setEmployeeId(employeeMaster.getEmployeeId());
			template.postForObject(emailURL, model, UserModel.class);

			return new ResponseEntity("Success", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);
		}

	}

	// Getting userClient Project management data by onboarding id
	public ResponseEntity getUserProjectDataByOnboardingId(String onboardingId) {
		Response r = new Response<>();
		try {
			UserClientProjectManagement userclients = userClientRepo.getByOnboardingId(onboardingId);

			if (!userclients.equals(null)) {
				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(userclients);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + onboardingId);
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);
		}
	}

	// Getting userClient Project management data by Employee Id
	public ResponseEntity getUserProjectDataByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			UserClientProjectManagement userclientss = userClientRepo.getByEmployeeId(employeeId);

			if (!userclientss.equals(null)) {
				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(userclientss);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + employeeId);
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getOnboardingDataByOnboardingId(String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + onboardingId);
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getEmployeeDataByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster employeeMaster = emRepo.getById(employeeId);
			if (!employeeMaster.equals(null)) {
				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(employeeMaster);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + employeeId);
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity updateEmployeeDataByEmployeeId(String employeeId, EmployeeMaster empMaster) {
		Response r = new Response<>();
		try {
			EmployeeMaster master = emRepo.getById(employeeId);

			master.setFirstName(empMaster.getFirstName());
			master.setMiddleName(empMaster.getMiddleName());
			master.setOnboardingId(empMaster.getOnboardingId());
			master.setLastName(empMaster.getLastName());
			master.setPrimaryPhoneNumber(empMaster.getPrimaryPhoneNumber());
			master.setSecondaryPhoneNumber(empMaster.getSecondaryPhoneNumber());
			master.setEmail(empMaster.getEmail());
			master.setYearsOfExperience(empMaster.getYearsOfExperience());
			master.setDateOfBirth(empMaster.getDateOfBirth());
			master.setBloodGroup(empMaster.getBloodGroup());
			master.setGender(empMaster.getGender());
			master.setMaritalStatus(empMaster.getMaritalStatus());
			master.setDateOfJoining(empMaster.getDateOfJoining());
			master.setDesignationName(empMaster.getDesignationName());
			master.setDepartmentName(empMaster.getDepartmentName());
			master.setPermanentAdress(empMaster.getPermanentAdress());
			master.setPermanentState(empMaster.getPermanentState());
			master.setPermanentCountry(empMaster.getPermanentCountry());
			master.setPermanentPincode(empMaster.getPermanentPincode());
			master.setCurrentAdress(empMaster.getCurrentAdress());
			master.setCurrentState(empMaster.getCurrentState());
			master.setCurrentCountry(empMaster.getCurrentCountry());
			master.setCurrentPincode(empMaster.getCurrentPincode());
			master.setPostgraduationType(empMaster.getPostgraduationType());
			master.setPostgraduationBoardOfUniversity(empMaster.getPostgraduationBoardOfUniversity());
			master.setPostgraduationInstituteName(empMaster.getPostgraduationInstituteName());
			master.setPostgraduationInstituteCity(empMaster.getPostgraduationInstituteCity());
			master.setPostgraduationCourseName(empMaster.getPostgraduationCourseName());
			master.setPostgraduationJoiningYear(empMaster.getPostgraduationJoiningYear());
			master.setPostgraduationPassedYear(empMaster.getPostgraduationPassedYear());
			master.setPostgraduationGrade(empMaster.getPostgraduationGrade());
			master.setGraduationType(empMaster.getGraduationType());
			master.setGraduationBoardOfUniversity(empMaster.getGraduationBoardOfUniversity());
			master.setGraduationInstituteName(empMaster.getGraduationInstituteName());
			master.setGraduationInstituteCity(empMaster.getGraduationInstituteCity());
			master.setGraduationCourseName(empMaster.getGraduationCourseName());
			master.setGraduationGrade(empMaster.getGraduationGrade());
			master.setIntermediateBoardOfUniversity(empMaster.getIntermediateBoardOfUniversity());
			master.setIntermediateCollegeName(empMaster.getIntermediateCollegeName());
			master.setIntermediateCollegeCity(empMaster.getIntermediateCollegeCity());
			master.setIntermediateCourseName(empMaster.getIntermediateCourseName());
			master.setIntermediateJoiningYear(empMaster.getIntermediateJoiningYear());
			master.setIntermediatePassedYear(empMaster.getIntermediatePassedYear());
			master.setIntermediateGrade(empMaster.getIntermediateGrade());
			master.setSscBoardOfUniversity(empMaster.getSscBoardOfUniversity());
			master.setSscSchoolName(empMaster.getSscSchoolName());
			master.setSscSchoolCity(empMaster.getSscSchoolCity());
			master.setSscCourseName(empMaster.getSscCourseName());
			master.setSscJoiningYear(empMaster.getSscJoiningYear());
			master.setSscPassedYear(empMaster.getSscPassedYear());
			master.setSscGrade(empMaster.getSscGrade());
			master.setPreviousCompany1_name(empMaster.getPreviousCompany1_name());
			master.setPreviousCompany1_designation(empMaster.getPreviousCompany1_designation());
			master.setPreviousCompany1_joiningDate(empMaster.getPreviousCompany1_joiningDate());
			master.setPreviousCompany1_relievingDate(empMaster.getPreviousCompany1_relievingDate());
			master.setPreviousCompany1_employeeId(empMaster.getPreviousCompany1_employeeId());
			master.setPreviousCompany1_grossSalary(empMaster.getPreviousCompany1_grossSalary());
			master.setPreviousCompany1_typeOfEmployment(empMaster.getPreviousCompany1_typeOfEmployment());
			master.setPreviousCompany1_reasonForRelieving(empMaster.getPreviousCompany1_reasonForRelieving());
			master.setPreviousCompany2_name(empMaster.getPreviousCompany2_name());
			master.setPreviousCompany2_designation(empMaster.getPreviousCompany2_designation());
			master.setPreviousCompany2_joiningDate(empMaster.getPreviousCompany2_joiningDate());
			master.setPreviousCompany2_relievingDate(empMaster.getPreviousCompany2_relievingDate());
			master.setPreviousCompany2_employeeId(empMaster.getPreviousCompany2_employeeId());
			master.setPreviousCompany2_grossSalary(empMaster.getPreviousCompany2_grossSalary());
			master.setPreviousCompany2_typeOfEmployment(empMaster.getPreviousCompany2_typeOfEmployment());
			master.setPreviousCompany2_reasonForRelieving(empMaster.getPreviousCompany2_reasonForRelieving());
			master.setPreviousCompany3_name(empMaster.getPreviousCompany3_name());
			master.setPreviousCompany3_designation(empMaster.getPreviousCompany3_designation());
			master.setPreviousCompany3_joiningDate(empMaster.getPreviousCompany3_joiningDate());
			master.setPreviousCompany3_relievingDate(empMaster.getPreviousCompany3_relievingDate());
			master.setPreviousCompany3_employeeId(empMaster.getPreviousCompany3_employeeId());
			master.setPreviousCompany3_grossSalary(empMaster.getPreviousCompany3_grossSalary());
			master.setPreviousCompany3_typeOfEmployment(empMaster.getPreviousCompany3_typeOfEmployment());
			master.setPreviousCompany3_reasonForRelieving(empMaster.getPreviousCompany3_reasonForRelieving());
			master.setReportingManager(empMaster.getReportingManager());
			master.setPassportExpiryDate(empMaster.getPassportExpiryDate());
			master.setPassportNo(empMaster.getPassportNo());
			master.setPrimarySkills(empMaster.getPrimarySkills());
			master.setSecondarySkills(empMaster.getSecondarySkills());
			master.setEmploymentType(empMaster.getEmploymentType());
			master.setGraduationJoiningYear(empMaster.getGraduationJoiningYear());
			master.setGraduationPassedYear(empMaster.getGraduationPassedYear());

			master.setPanNumber(empMaster.getPanNumber());
			master.setAadharNumber(empMaster.getAadharNumber());
			master.setUanNumber(empMaster.getUanNumber());
			master.setBankName(empMaster.getBankName());
			master.setAccountNumber(empMaster.getAccountNumber());
			master.setIfscCode(empMaster.getIfscCode());
			master.setBranch(empMaster.getBranch());
			master.setBand(empMaster.getBand());
			master.setExitDate(empMaster.getExitDate());
			EmployeeMaster master1 = emRepo.save(master);
			System.out.println(master1);
			r.setStatus(true);
			r.setMessage(sConstants.PUT_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity<EmployeeMaster> getALLData() {
		Response r = new Response<>();
		try {
			List<EmployeeMaster> employeeMasters = emRepo.findAll();
			if (!employeeMasters.isEmpty()) {
				r.setStatus(true);
				r.setMessage(sConstants.GET_RESPONSE);
				r.setData(employeeMasters);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.NO_ENTRIES_FOUND);

				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(true);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	public ResponseEntity updateOnboradEmployeeBydOnboardId(String onboardingId, Onboarding newOnboard) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
				getOnboarding.setApprovedStatus(newOnboard.isApprovedStatus());
				getOnboarding.setComments(newOnboard.getComments());
				getOnboarding.setDateOfJoining(newOnboard.getDateOfJoining());
				getOnboarding.setDepartment(newOnboard.getDepartment());
				getOnboarding.setDesignation(newOnboard.getDesignation());
				getOnboarding.setEmail(newOnboard.getEmail());
				getOnboarding.setEmploymentType(newOnboard.getEmploymentType());
				getOnboarding.setFirstName(newOnboard.getFirstName());
				getOnboarding.setJobTitle(newOnboard.getJobTitle());
				getOnboarding.setLastName(newOnboard.getLastName());
				getOnboarding.setMiddleName(newOnboard.getMiddleName());
				getOnboarding.setPhoneNumber(newOnboard.getPhoneNumber());
				// getOnboarding.setRejectedStatus(newOnboard.getRe);
				getOnboarding.setYearsOfExperience(newOnboard.getYearsOfExperience());
				getOnboarding.setPrimarySkills(newOnboard.getPrimarySkills());
				getOnboarding.setSecondarySkills(newOnboard.getSecondarySkills());
				getOnboarding.setReportingManager(newOnboard.getReportingManager());

				Onboarding updated = onRepo.save(getOnboarding);
				r.setStatus(true);
				r.setMessage(sConstants.PUT_RESPONSE);
				r.setData(updated);
				return new ResponseEntity<>(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + "OnboardingId");
				return new ResponseEntity<>(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity<>(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getApprovedData() {
		Response r = new Response<>();
		try {

			List<Onboarding> onboarding = onRepo.findByApprovedStatus(true);
			r.setStatus(true);
			r.setMessage(sConstants.GET_RESPONSE);
			r.setData(onboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);

		}
	}

	public ResponseEntity getRejectedData() {
		Response r = new Response<>();
		try {

			List<Onboarding> onboarding = onRepo.findByRejectedStatus(true);
			r.setStatus(true);
			r.setMessage(sConstants.GET_RESPONSE);
			r.setData(onboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);

		}
	}

	// getting taa approved employees list
	public ResponseEntity getOnboardedApprovedData() {
		Response r = new Response<>();
		try {

			List<Onboarding> onboarding = onRepo.findByOnboardingStatus("TAAApproved");
			r.setStatus(true);
			r.setMessage(sConstants.GET_RESPONSE);
			r.setData(onboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);

		}
	}

	public ResponseEntity updateDesignationName(String employeeId, DesignationName name) {
		Response r = new Response<>();
		try {
			EmployeeMaster newName = emRepo.getById(employeeId);
			if (!newName.equals(null)) {
				newName.setDesignationName(name.getDesignationName());
				EmployeeMaster updatedName = emRepo.save(newName);
				r.setStatus(true);
				r.setMessage(sConstants.PUT_RESPONSE);
				r.setData(updatedName);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage(sConstants.INVALID_DATA + "EmployeeId");
				return new ResponseEntity(r, HttpStatus.OK);

			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);

		}
	}

	@Override
	public ResponseEntity getEmployeeNameByEmployeeId(String employeeId) {

		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		EmployeeName en = new EmployeeName();
		en.setEmployeeName(employeeMaster.getFirstName().concat(" ").concat(employeeMaster.getMiddleName()).concat(" ")
				.concat(employeeMaster.getLastName()));

		return new ResponseEntity(en, HttpStatus.OK);
	}

	@Override
	public ResponseEntity getReportingManagerByEmployeeId(String employeeId) {

		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		GetReportingManager rm = new GetReportingManager();
		rm.setReportingmanager(employeeMaster.getReportingManager());
		return new ResponseEntity(rm, HttpStatus.OK);
	}

	@Override
	public ResponseEntity getEmployeeId() {

		try {

			List<EmployeeMaster> em = emRepo.findAll();
			GetEmployeeIds ge = new GetEmployeeIds();
			em.forEach(e -> {

				ge.setEmployeeId(e.getEmployeeId());

			});
			return new ResponseEntity(ge, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);

		}

	}

	public ResponseEntity getPersonalDetailsByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			PersonalDetails pd = new PersonalDetails();
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				pd.setBloodGroup(em.getBloodGroup());
				pd.setDateOfBirth(em.getDateOfBirth());
				pd.setEmail(em.getEmail());
				pd.setFirstName(em.getFirstName());
				pd.setGender(em.getGender());
				pd.setLastName(em.getLastName());
				pd.setMiddleName(em.getMiddleName());
				pd.setMaritalStatus(em.getMaritalStatus());
				pd.setPrimaryPhoneNumber(em.getPrimaryPhoneNumber());
				pd.setSecondaryPhoneNumber(em.getSecondaryPhoneNumber());
				pd.setPrimarySkills(em.getPrimarySkills());
				pd.setSecondarySkills(em.getSecondarySkills());

				r.setStatus(true);
				r.setMessage("Data Fetching");
				em.setOnboardingStatus(em.getOnboardingStatus());
				r.setData(pd);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updatePersonalDetailsByEmployeeId(PersonalDetails pd, String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				em.setBloodGroup(pd.getBloodGroup());
				em.setDateOfBirth(pd.getDateOfBirth());
				em.setEmail(pd.getEmail());
				em.setFirstName(pd.getFirstName());
				em.setGender(pd.getGender());
				em.setLastName(pd.getLastName());
				em.setMiddleName(pd.getMiddleName());
				em.setMaritalStatus(pd.getMaritalStatus());
				em.setPrimaryPhoneNumber(pd.getPrimaryPhoneNumber());
				em.setSecondaryPhoneNumber(pd.getSecondaryPhoneNumber());
				em.setPrimarySkills(pd.getPrimarySkills());
				em.setSecondarySkills(pd.getSecondarySkills());
				emRepo.save(em);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(em);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAddressByEmployeeId(String employeId) {
		Response r = new Response<>();
		try {
			Address ad = new Address();
			EmployeeMaster em = emRepo.getById(employeId);
			if (!em.equals(null)) {
				ad.setPermanentAdress(em.getPermanentAdress());
				ad.setPermanentCountry(em.getPermanentCountry());
				ad.setPermanentPincode(em.getPermanentPincode());
				ad.setPermanentState(em.getPermanentState());
				ad.setCurrentAdress(em.getCurrentAdress());
				ad.setCurrentCountry(em.getCurrentCountry());
				ad.setCurrentPincode(em.getCurrentPincode());
				ad.setCurrentState(em.getCurrentState());

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(ad);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateAddressByEmployeeId(Address ad, String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				em.setPermanentAdress(ad.getPermanentAdress());
				em.setPermanentCountry(ad.getPermanentCountry());
				em.setPermanentPincode(ad.getPermanentPincode());
				em.setPermanentState(ad.getPermanentState());
				em.setCurrentAdress(ad.getCurrentAdress());
				em.setCurrentCountry(ad.getCurrentCountry());
				em.setCurrentPincode(ad.getCurrentPincode());
				em.setCurrentState(ad.getCurrentState());
				emRepo.save(em);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(em);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAdditionalDetailsByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			AdditionalDetails add = new AdditionalDetails();
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				add.setPassportNo(em.getPassportNo());
				add.setPassportExpiryDate(em.getPassportExpiryDate());
				add.setPanNumber(em.getPanNumber());
				add.setAadharNumber(em.getAadharNumber());
				add.setUanNumber(em.getUanNumber());
				add.setBankName(em.getBankName());
				add.setAccountNumber(em.getAccountNumber());
				add.setIfscCode(em.getIfscCode());
				add.setBranch(em.getBranch());
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(add);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateAdditionalDetailsByEmployeeId(AdditionalDetails add, String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				em.setPassportNo(add.getPassportNo());
				em.setPassportExpiryDate(add.getPassportExpiryDate());
				em.setPanNumber(add.getPanNumber());
				em.setAadharNumber(add.getAadharNumber());
				em.setUanNumber(add.getUanNumber());
				em.setBankName(add.getBankName());
				em.setAccountNumber(add.getAccountNumber());
				em.setIfscCode(add.getIfscCode());
				em.setBranch(add.getBranch());
				emRepo.save(em);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(em);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getEmploymentDetailsByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			EmploymentDetails empd = new EmploymentDetails();
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {

				empd.setPrimarySkills(em.getPrimarySkills());
				empd.setSecondarySkills(em.getSecondarySkills());
				empd.setEmploymentType(em.getEmploymentType());
				empd.setBand(em.getBand());
				empd.setDepartmentName(em.getDepartmentName());
				empd.setDesignationName(em.getDesignationName());
				empd.setReportingManager(em.getReportingManager());
				empd.setProjectName(em.getProjectName());
				empd.setExitDate(em.getExitDate());
				empd.setResignationDate(em.getResignationDate());
				empd.setStatus(em.getStatus());
				empd.setIrm(em.getIrm());
				empd.setSrm(em.getSrm());
				empd.setConfirmationDate(em.getConfirmationDate());
				empd.setLeaveBalance(em.getLeaveBalance());

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(empd);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
    public ResponseEntity updateEmploymentDetailsByEmployeeId(EmploymentDetails empd, String employeeId) {
        Response r = new Response<>();
        try {
            EmployeeMaster em = emRepo.getById(employeeId);
            
            if (!em.equals(null)) {
                em.setPrimarySkills(empd.getPrimarySkills());
                em.setSecondarySkills(empd.getSecondarySkills());
                em.setBand(empd.getBand());
                em.setDepartmentName(empd.getDepartmentName());
                em.setDesignationName(empd.getDesignationName());
                em.setReportingManager(empd.getReportingManager());
                em.setProjectName(empd.getProjectName());
                em.setExitDate(empd.getExitDate());
                em.setResignationDate(empd.getResignationDate());
                em.setStatus(empd.getStatus());
                em.setEmploymentType(empd.getEmploymentType());
                em.setIrm(empd.getIrm());
                em.setSrm(empd.getSrm());
                em.setConfirmationDate(empd.getConfirmationDate());
                em.setLeaveBalance(empd.getLeaveBalance());
               
                EmployeeMaster emd = emRepo.save(em);
                
                emd.setBuhId(this.getEmployeeIdByName(em.getBuh()));
                emd.setSrmId(this.getEmployeeIdByName(em.getSrm()));
                emd.setIrmId(this.getEmployeeIdByName(em.getIrm()));
               
                emRepo.save(emd);
            
                LeaveMaster lm = new LeaveMaster();
                
                //get data from Leave Master Table  
                String Listemployees="http://leaveservice/leave/leaveBalanceByEmployeeId/";
                LeaveMaster getData =  template.getForObject(Listemployees+emd.getEmployeeId(), LeaveMaster.class);
            
                if(getData == null) {
                    
                    //Post employeeId and Leave Balance to Leave Mater Table
                    String post="http://leaveservice/leave/postLeaves";
                    
                    lm.setEmployeeId(emd.getEmployeeId());
                    lm.setLeaveBalance(emd.getLeaveBalance());
                    template.postForObject(post,lm, LeaveMaster.class);    
                }else {
                    
                    //update call for Leava Balance in Leave Table
                    String updateLeaveBalance = "http://leaveservice/leave/updateLeaveBalance/";
                    LeaveBalanceModel lbm = new LeaveBalanceModel();
                    
                    lbm.setLeaveBalance(empd.getLeaveBalance());
                    template.put(updateLeaveBalance+emd.getEmployeeId(),lbm,LeaveBalanceModel.class);
                }
                
                
//                //update call for Leava Balance in Leave Table
//                String updateLeaveBalance = "http://leaveservice/leave/updateLeaveBalance/";
//                LeaveBalanceModel lbm = new LeaveBalanceModel();
//                
//                lbm.setLeaveBalance(empd.getLeaveBalance());
//                template.put(updateLeaveBalance+em.getEmployeeId(),lbm,LeaveBalanceModel.class);
                

               if (empd.getStatus().equalsIgnoreCase("InActive")) {
                    
                    //updating status in login table
                    String updateStatus = "http://loginservice/login/makeLoginsInActive/";
                     String restemplate = template.getForObject(updateStatus+emd.getEmployeeId(),String.class);
                }
                
                r.setStatus(true);
                r.setMessage("Data Fetching");
                r.setData(em);
                return new ResponseEntity(r, HttpStatus.OK);
            } else {
                r.setStatus(false);
                r.setMessage("Data Not updated");
                return new ResponseEntity(r, HttpStatus.OK);
            }
        } catch (Exception e) {
            r.setStatus(false);
            r.setMessage(e.getMessage());
            return new ResponseEntity(r, HttpStatus.OK);
        }
    }
	
	@Override
	public ResponseEntity getEducationalDetailsByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			EducationalDetails education = new EducationalDetails();
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				education.setPostgraduationType(em.getPostgraduationType());
				education.setPostgraduationBoardOfUniversity(em.getPostgraduationBoardOfUniversity());
				education.setPostgraduationInstituteName(em.getPostgraduationInstituteName());
				education.setPostgraduationInstituteCity(em.getPostgraduationInstituteCity());
				education.setPostgraduationCourseName(em.getPostgraduationCourseName());
				education.setPostgraduationJoiningYear(em.getPostgraduationJoiningYear());
				education.setPostgraduationPassedYear(em.getPostgraduationPassedYear());
				education.setPostgraduationGrade(em.getPostgraduationGrade());
				education.setGraduationType(em.getGraduationType());
				education.setGraduationBoardOfUniversity(em.getGraduationBoardOfUniversity());
				education.setGraduationInstituteName(em.getGraduationInstituteName());
				education.setGraduationInstituteCity(em.getGraduationInstituteCity());
				education.setGraduationJoiningYear(em.getGraduationJoiningYear());
				education.setGraduationPassedYear(em.getGraduationPassedYear());
				education.setGraduationCourseName(em.getGraduationCourseName());
				education.setGraduationGrade(em.getGraduationGrade());
				education.setIntermediateBoardOfUniversity(em.getIntermediateBoardOfUniversity());
				education.setIntermediateCollegeName(em.getIntermediateCollegeName());
				education.setIntermediateCollegeCity(em.getIntermediateCollegeCity());
				education.setIntermediateCourseName(em.getIntermediateCourseName());
				education.setIntermediateJoiningYear(em.getIntermediateJoiningYear());
				education.setIntermediatePassedYear(em.getIntermediatePassedYear());
				education.setIntermediateGrade(em.getIntermediateGrade());
				education.setSscBoardOfUniversity(em.getSscBoardOfUniversity());
				education.setSscSchoolName(em.getSscSchoolName());
				education.setSscSchoolCity(em.getSscSchoolCity());
				education.setSscCourseName(em.getSscCourseName());
				education.setSscJoiningYear(em.getSscJoiningYear());
				education.setSscPassedYear(em.getSscPassedYear());
				education.setSscGrade(em.getSscGrade());
				education.setIntermediateQualification(em.getIntermediateQualification());
				education.setSscQualification(em.getSscQualification());
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(education);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateEducationalDetailsByEmployeeId(EducationalDetails education, String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				em.setPostgraduationType(education.getPostgraduationType());
				em.setPostgraduationBoardOfUniversity(education.getPostgraduationBoardOfUniversity());
				em.setPostgraduationInstituteName(education.getPostgraduationInstituteName());
				em.setPostgraduationInstituteCity(education.getPostgraduationInstituteCity());
				em.setPostgraduationCourseName(education.getPostgraduationCourseName());
				em.setPostgraduationJoiningYear(education.getPostgraduationJoiningYear());
				em.setPostgraduationPassedYear(education.getPostgraduationPassedYear());
				em.setPostgraduationGrade(education.getPostgraduationGrade());
				em.setGraduationType(education.getGraduationType());
				em.setGraduationBoardOfUniversity(education.getGraduationBoardOfUniversity());
				em.setGraduationInstituteName(education.getGraduationInstituteName());
				em.setGraduationInstituteCity(education.getGraduationInstituteCity());
				em.setGraduationCourseName(education.getGraduationCourseName());
				em.setGraduationGrade(education.getGraduationGrade());
				em.setGraduationJoiningYear(education.getGraduationJoiningYear());
				em.setGraduationPassedYear(education.getGraduationPassedYear());
				em.setIntermediateBoardOfUniversity(education.getIntermediateBoardOfUniversity());
				em.setIntermediateCollegeName(education.getIntermediateCollegeName());
				em.setIntermediateCollegeCity(education.getIntermediateCollegeCity());
				em.setIntermediateCourseName(education.getIntermediateCourseName());
				em.setIntermediateJoiningYear(education.getIntermediateJoiningYear());
				em.setIntermediatePassedYear(education.getIntermediatePassedYear());
				em.setIntermediateGrade(education.getIntermediateGrade());
				em.setSscBoardOfUniversity(education.getSscBoardOfUniversity());
				em.setSscSchoolName(education.getSscSchoolName());
				em.setSscSchoolCity(education.getSscSchoolCity());
				em.setSscCourseName(education.getSscCourseName());
				em.setSscJoiningYear(education.getSscJoiningYear());
				em.setSscPassedYear(education.getSscPassedYear());
				em.setSscGrade(education.getSscGrade());
				em.setIntermediateQualification(education.getIntermediateQualification());
				em.setSscQualification(education.getSscQualification());
				emRepo.save(em);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(em);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getExperienceByEmployeeId(String employeeId) {
		Response r = new Response<>();
		try {
			Experience exp = new Experience();
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				exp.setPreviousCompany1_name(em.getPreviousCompany1_name());
				exp.setPreviousCompany1_designation(em.getPreviousCompany1_designation());
				exp.setPreviousCompany1_joiningDate(em.getPreviousCompany1_joiningDate());
				exp.setPreviousCompany1_relievingDate(em.getPreviousCompany1_relievingDate());
				exp.setPreviousCompany1_employeeId(em.getPreviousCompany1_employeeId());
				exp.setPreviousCompany1_grossSalary(em.getPreviousCompany1_grossSalary());
				exp.setPreviousCompany1_typeOfEmployment(em.getPreviousCompany1_typeOfEmployment());
				exp.setPreviousCompany1_reasonForRelieving(em.getPreviousCompany1_reasonForRelieving());
				exp.setPreviousCompany2_name(em.getPreviousCompany2_name());
				exp.setPreviousCompany2_designation(em.getPreviousCompany2_designation());
				exp.setPreviousCompany2_joiningDate(em.getPreviousCompany2_joiningDate());
				exp.setPreviousCompany2_relievingDate(em.getPreviousCompany2_relievingDate());
				exp.setPreviousCompany2_employeeId(em.getPreviousCompany2_employeeId());
				exp.setPreviousCompany2_grossSalary(em.getPreviousCompany2_grossSalary());
				exp.setPreviousCompany2_typeOfEmployment(em.getPreviousCompany2_typeOfEmployment());
				exp.setPreviousCompany2_reasonForRelieving(em.getPreviousCompany2_reasonForRelieving());
				exp.setPreviousCompany3_name(em.getPreviousCompany3_name());
				exp.setPreviousCompany3_designation(em.getPreviousCompany3_designation());
				exp.setPreviousCompany3_joiningDate(em.getPreviousCompany3_joiningDate());
				exp.setPreviousCompany3_relievingDate(em.getPreviousCompany3_relievingDate());
				exp.setPreviousCompany3_employeeId(em.getPreviousCompany3_employeeId());
				exp.setPreviousCompany3_grossSalary(em.getPreviousCompany3_grossSalary());
				exp.setPreviousCompany3_typeOfEmployment(em.getPreviousCompany3_typeOfEmployment());
				exp.setPreviousCompany3_reasonForRelieving(em.getPreviousCompany3_reasonForRelieving());

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(exp);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not Found");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateExperienceByEmployeeId(Experience exp, String employeeId) {
		Response r = new Response<>();
		try {
			EmployeeMaster em = emRepo.getById(employeeId);
			if (!em.equals(null)) {
				em.setPreviousCompany1_name(exp.getPreviousCompany1_name());
				em.setPreviousCompany1_designation(exp.getPreviousCompany1_designation());
				em.setPreviousCompany1_joiningDate(exp.getPreviousCompany1_joiningDate());
				em.setPreviousCompany1_relievingDate(exp.getPreviousCompany1_relievingDate());
				em.setPreviousCompany1_employeeId(exp.getPreviousCompany1_employeeId());
				em.setPreviousCompany1_grossSalary(exp.getPreviousCompany1_grossSalary());
				em.setPreviousCompany1_typeOfEmployment(exp.getPreviousCompany1_typeOfEmployment());
				em.setPreviousCompany1_reasonForRelieving(exp.getPreviousCompany1_reasonForRelieving());
				em.setPreviousCompany2_name(exp.getPreviousCompany2_name());
				em.setPreviousCompany2_designation(exp.getPreviousCompany2_designation());
				em.setPreviousCompany2_joiningDate(exp.getPreviousCompany2_joiningDate());
				em.setPreviousCompany2_relievingDate(exp.getPreviousCompany2_relievingDate());
				em.setPreviousCompany2_employeeId(exp.getPreviousCompany2_employeeId());
				em.setPreviousCompany2_grossSalary(exp.getPreviousCompany2_grossSalary());
				em.setPreviousCompany2_typeOfEmployment(exp.getPreviousCompany2_typeOfEmployment());
				em.setPreviousCompany2_reasonForRelieving(exp.getPreviousCompany2_reasonForRelieving());
				em.setPreviousCompany3_name(exp.getPreviousCompany3_name());
				em.setPreviousCompany3_designation(exp.getPreviousCompany3_designation());
				em.setPreviousCompany3_joiningDate(exp.getPreviousCompany3_joiningDate());
				em.setPreviousCompany3_relievingDate(exp.getPreviousCompany3_relievingDate());
				em.setPreviousCompany3_employeeId(exp.getPreviousCompany3_employeeId());
				em.setPreviousCompany3_grossSalary(exp.getPreviousCompany3_grossSalary());
				em.setPreviousCompany3_typeOfEmployment(exp.getPreviousCompany3_typeOfEmployment());
				em.setPreviousCompany3_reasonForRelieving(exp.getPreviousCompany3_reasonForRelieving());

				emRepo.save(em);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(em);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	// PreOnboarding Form edit my profile by an employee updating form API calls

	@Override
	public ResponseEntity updatePersonalDetailsByOnboardId(PersonalDetails pd, String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);

			if (!getOnboarding.equals(null)) {
//					String state = "20%";
//					getOnboarding.setStatus(state);
				getOnboarding.setBloodGroup(pd.getBloodGroup());
				getOnboarding.setDateOfBirth(pd.getDateOfBirth());
				getOnboarding.setEmail(pd.getEmail());
				getOnboarding.setFirstName(pd.getFirstName());
				getOnboarding.setGender(pd.getGender());
				getOnboarding.setLastName(pd.getLastName());
				getOnboarding.setMiddleName(pd.getMiddleName());
				getOnboarding.setMaritalStatus(pd.getMaritalStatus());
//					getOnboarding.setPhoneNumber(pd.getPrimaryPhoneNumber());
				getOnboarding.setSecondaryPhoneNumber(pd.getSecondaryPhoneNumber());
				getOnboarding.setPrimarySkills(pd.getPrimarySkills());
				getOnboarding.setSecondarySkills(pd.getSecondarySkills());

				Onboarding ob = onRepo.save(getOnboarding);
				double count = onRepo.findcountofnullvalues(onboardingId);
//	                int percentage = );
				ob.setPercentage((int) ((count * 100) / 41));
				onRepo.save(ob);

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateAddressByOnboardId(Address ad, String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
//					String state = "40%";
//					getOnboarding.setStatus(state);
				getOnboarding.setPermanentAdress(ad.getPermanentAdress());
				getOnboarding.setPermanentCountry(ad.getPermanentCountry());
				getOnboarding.setPermanentPincode(ad.getPermanentPincode());
				getOnboarding.setPermanentState(ad.getPermanentState());
				getOnboarding.setCurrentAdress(ad.getCurrentAdress());
				getOnboarding.setCurrentCountry(ad.getCurrentCountry());
				getOnboarding.setCurrentPincode(ad.getCurrentPincode());
				getOnboarding.setCurrentState(ad.getCurrentState());

				onRepo.save(getOnboarding);
				Onboarding ob = onRepo.save(getOnboarding);
				double count = onRepo.findcountofnullvalues(onboardingId);
//	                double percentage = (count * 100) / 42;
				ob.setPercentage((int) ((count * 100) / 41));
				onRepo.save(ob);

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}

		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity updateAdditionalDetailsByOnboardId(AdditionalDetails add, String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
//					String state = "60%";
//					getOnboarding.setStatus(state);
				getOnboarding.setPassportNo(add.getPassportNo());
				getOnboarding.setPassportExpiryDate(add.getPassportExpiryDate());
				getOnboarding.setPanNumber(add.getPanNumber());
				getOnboarding.setAadharNumber(add.getAadharNumber());
				getOnboarding.setUanNumber(add.getUanNumber());
				getOnboarding.setBankName(add.getBankName());
				getOnboarding.setAccountNumber(add.getAccountNumber());
				getOnboarding.setIfscCode(add.getIfscCode());
				getOnboarding.setBranch(add.getBranch());
				onRepo.save(getOnboarding);

				Onboarding ob = onRepo.save(getOnboarding);
				double count = onRepo.findcountofnullvalues(onboardingId);
//	                double percentage = (count * 100) / 42;
				ob.setPercentage((int) ((count * 100) / 41));
				onRepo.save(ob);

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	// update call for employment details in preonboarding
	@Override
	public ResponseEntity EmploymentDetailsByOnboardId(EmploymentDetails emps, String onboardingId) {
		Response r = new Response<>();
		String uri = "http://emp/getEmployeeIdByName/";
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
				getOnboarding.setEmploymentType(emps.getEmploymentType());
				getOnboarding.setBand(emps.getBand());
				getOnboarding.setDepartment(emps.getDepartmentName());
				getOnboarding.setDesignation(emps.getDesignationName());
				getOnboarding.setIrm(emps.getIrm());
				getOnboarding.setSrm(emps.getSrm());
				getOnboarding.setBuh(emps.getBuh());
				getOnboarding.setReportingManager(emps.getReportingManager());
				getOnboarding.setProjectName(emps.getProjectName());
				getOnboarding.setClient(emps.getClient());
				getOnboarding.setJobTitle(emps.getJobTitle());

//						Onboarding ob = onRepo.save(getOnboarding);
//						EmployeeId name=template.getForObject(uri+ob.getIrm(), EmployeeId.class);
//						EmployeeId name1=template.getForObject(uri+ob.getSrm(), EmployeeId.class);
//						EmployeeId name2=template.getForObject(uri+ob.getBuh(), EmployeeId.class);
//						
//						getOnboarding.setIrmId(name.getEmployeeId());
//						getOnboarding.setSrmId(name1.getEmployeeId());
//						getOnboarding.setBuhId(name2.getEmployeeId());
//						
//						onRepo.save(ob);
				Onboarding getNames = onRepo.save(getOnboarding);
				getNames.setBuhId(this.getEmployeeFullName(getOnboarding.getBuh()));
				getNames.setIrmId(this.getEmployeeIdByName(getOnboarding.getIrm()));
				getNames.setSrmId(this.getEmployeeIdByName(getOnboarding.getSrm()));

				onRepo.save(getNames);

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getNames);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity updateEmploymentDetailsByOnboardId(EmploymentDetails empd, String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
				getOnboarding.setEmploymentType(empd.getEmploymentType());
				getOnboarding.setBand(empd.getBand());
				getOnboarding.setDepartment(empd.getDepartmentName());
				getOnboarding.setDesignation(empd.getDesignationName());
				getOnboarding.setIrm(empd.getIrm());
				getOnboarding.setSrm(empd.getSrm());
				getOnboarding.setBuh(empd.getBuh());
				getOnboarding.setReportingManager(empd.getReportingManager());
				getOnboarding.setProjectName(empd.getProjectName());
				onRepo.save(getOnboarding);
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateEducationalDetailsByOnboardId(EducationalDetails education, String onboardingId) {
		Response r = new Response<>();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
//				String state = "80%";
//				getOnboarding.setStatus(state);

				getOnboarding.setPostgraduationType(education.getPostgraduationType());
				getOnboarding.setPostgraduationBoardOfUniversity(education.getPostgraduationBoardOfUniversity());
				getOnboarding.setPostgraduationInstituteName(education.getPostgraduationInstituteName());
				getOnboarding.setPostgraduationInstituteCity(education.getPostgraduationInstituteCity());
				getOnboarding.setPostgraduationCourseName(education.getPostgraduationCourseName());
				getOnboarding.setPostgraduationJoiningYear(education.getPostgraduationJoiningYear());
				getOnboarding.setPostgraduationPassedYear(education.getPostgraduationPassedYear());
				getOnboarding.setPostgraduationGrade(education.getPostgraduationGrade());
				getOnboarding.setGraduationType(education.getGraduationType());
				getOnboarding.setGraduationBoardOfUniversity(education.getGraduationBoardOfUniversity());
				getOnboarding.setGraduationInstituteName(education.getGraduationInstituteName());
				getOnboarding.setGraduationInstituteCity(education.getGraduationInstituteCity());
				getOnboarding.setGraduationCourseName(education.getGraduationCourseName());
				getOnboarding.setGraduationGrade(education.getGraduationGrade());
				getOnboarding.setGraduationJoiningYear(education.getGraduationJoiningYear());
				getOnboarding.setGraduationPassedYear(education.getGraduationPassedYear());
				getOnboarding.setIntermediateBoardOfUniversity(education.getIntermediateBoardOfUniversity());
				getOnboarding.setIntermediateCollegeName(education.getIntermediateCollegeName());
				getOnboarding.setIntermediateCollegeCity(education.getIntermediateCollegeCity());
				getOnboarding.setIntermediateCourseName(education.getIntermediateCourseName());
				getOnboarding.setIntermediateJoiningYear(education.getIntermediateJoiningYear());
				getOnboarding.setIntermediatePassedYear(education.getIntermediatePassedYear());
				getOnboarding.setIntermediateGrade(education.getIntermediateGrade());
				getOnboarding.setSscBoardOfUniversity(education.getSscBoardOfUniversity());
				getOnboarding.setSscSchoolName(education.getSscSchoolName());
				getOnboarding.setSscSchoolCity(education.getSscSchoolCity());
				getOnboarding.setSscCourseName(education.getSscCourseName());
				getOnboarding.setSscJoiningYear(education.getSscJoiningYear());
				getOnboarding.setSscPassedYear(education.getSscPassedYear());
				getOnboarding.setSscGrade(education.getSscGrade());
				getOnboarding.setIntermediateQualification(education.getIntermediateQualification());
				getOnboarding.setSscQualification(education.getSscQualification());
				onRepo.save(getOnboarding);

				Onboarding ob = onRepo.save(getOnboarding);
				double count = onRepo.findcountofnullvalues(onboardingId);
//                double percentage = (count * 100) / 42;
				ob.setPercentage((int) ((count * 100) / 41));
				onRepo.save(ob);

				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateExperienceByOnboardId(Experience exp, String onboardingId) {
		Response r = new Response<>();
		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";

		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			if (!getOnboarding.equals(null)) {
//					String state = "100%";
//					getOnboarding.setStatus(state);
				getOnboarding.setPreviousCompany1_name(exp.getPreviousCompany1_name());
				getOnboarding.setPreviousCompany1_designation(exp.getPreviousCompany1_designation());
				getOnboarding.setPreviousCompany1_joiningDate(exp.getPreviousCompany1_joiningDate());
				getOnboarding.setPreviousCompany1_relievingDate(exp.getPreviousCompany1_relievingDate());
				getOnboarding.setPreviousCompany1_employeeId(exp.getPreviousCompany1_employeeId());
				getOnboarding.setPreviousCompany1_grossSalary(exp.getPreviousCompany1_grossSalary());
				getOnboarding.setPreviousCompany1_typeOfEmployment(exp.getPreviousCompany1_typeOfEmployment());
				getOnboarding.setPreviousCompany1_reasonForRelieving(exp.getPreviousCompany1_reasonForRelieving());
				getOnboarding.setPreviousCompany2_name(exp.getPreviousCompany2_name());
				getOnboarding.setPreviousCompany2_designation(exp.getPreviousCompany2_designation());
				getOnboarding.setPreviousCompany2_joiningDate(exp.getPreviousCompany2_joiningDate());
				getOnboarding.setPreviousCompany2_relievingDate(exp.getPreviousCompany2_relievingDate());
				getOnboarding.setPreviousCompany2_employeeId(exp.getPreviousCompany2_employeeId());
				getOnboarding.setPreviousCompany2_grossSalary(exp.getPreviousCompany2_grossSalary());
				getOnboarding.setPreviousCompany2_typeOfEmployment(exp.getPreviousCompany2_typeOfEmployment());
				getOnboarding.setPreviousCompany2_reasonForRelieving(exp.getPreviousCompany2_reasonForRelieving());
				getOnboarding.setPreviousCompany3_name(exp.getPreviousCompany3_name());
				getOnboarding.setPreviousCompany3_designation(exp.getPreviousCompany3_designation());
				getOnboarding.setPreviousCompany3_joiningDate(exp.getPreviousCompany3_joiningDate());
				getOnboarding.setPreviousCompany3_relievingDate(exp.getPreviousCompany3_relievingDate());
				getOnboarding.setPreviousCompany3_employeeId(exp.getPreviousCompany3_employeeId());
				getOnboarding.setPreviousCompany3_grossSalary(exp.getPreviousCompany3_grossSalary());
				getOnboarding.setPreviousCompany3_typeOfEmployment(exp.getPreviousCompany3_typeOfEmployment());
				getOnboarding.setPreviousCompany3_reasonForRelieving(exp.getPreviousCompany3_reasonForRelieving());

				onRepo.save(getOnboarding);
				RegistrationConfirmation rConfirm = new RegistrationConfirmation();
				MainEmailTemplate mailTemp = new MainEmailTemplate();
				Map<String, String> map = new HashMap();

				UserMail response = template.getForObject(OnboardUrl + "taa", UserMail.class);
				List<MailGet> hrApp = response.getMails();

				hrApp.forEach(e -> {
					map.put("employeeName", getOnboarding.getFirstName() + getOnboarding.getLastName());
					map.put("email", e.getEmail());
					map.put("LOGIN_LINK", rConfirm.getLoginLink());
					mailTemp.setMap(map);
					mailTemp.setEmailType("REGISTRATION_CONFIRMATION");

//					rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//					rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

					template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
				});
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(getOnboarding);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data Not updated");
				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Data Not updated");
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity getUsersNamesByBand() {
		try {
			List<String> list = Arrays.asList("E5", "E6", "E4");

			List<EmployeeMaster> getList = emRepo.findByBand(list);
			List<GetListByBandForManager> getbandList = new ArrayList<>();
			if (!getList.isEmpty()) {
				getList.forEach(e -> {
					GetListByBandForManager gbm = new GetListByBandForManager();
					gbm.setOnboardingId(e.getOnboardingId());
					gbm.setName(e.getFirstName() + e.getMiddleName() + e.getLastName());
					gbm.setEmployeeId(e.getEmployeeId());
					getbandList.add(gbm);
				});
			}
			return new ResponseEntity(getbandList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);

		}
	}

	@Override
	public ResponseEntity getDetailsforPMOByonboardingStatus(String onboardingStatus) {
		Response r = new Response();
		try {

			List<Onboarding> newDataOnboarding = onRepo.findByOnboardingStatus(onboardingStatus);
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newDataOnboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateReject(String onboardingStatus, HrApprovalStatus newOnboard) {

		String OnboardUrl = "http://loginservice/login/getEmployeeDataByUserType/";
		Response r = new Response();
		try {

			switch (newOnboard.getUserType()) {
			case "taahead": {
				HrApprovalStatus hrApp = template.getForObject(OnboardUrl + "taa", HrApprovalStatus.class);

				Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingStatus);
				getOnboarding.setComments(newOnboard.getComments());
				getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
				Onboarding updateReject = onRepo.save(getOnboarding);
				r.setStatus(true);
				r.setMessage("Rejected Successfully");
				MainEmailTemplate mailTemp = new MainEmailTemplate();
				Map<String, String> map = new HashMap();

				map.put("employeeName", getOnboarding.getFirstName() + getOnboarding.getLastName());
			map.put("email",hrApp.getEmail());
//				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				mailTemp.setEmailType("TAG_HEAD_REJECT");

//			rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//			rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
				break;
			}
			case "pmohead": {
				HrApprovalStatus hrApp = template.getForObject(OnboardUrl + "taahead", HrApprovalStatus.class);
				Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingStatus);
				getOnboarding.setComments(newOnboard.getComments());
				getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
				Onboarding updateReject = onRepo.save(getOnboarding);
				r.setStatus(true);
				r.setMessage("Rejected Successfully");
				MainEmailTemplate mailTemp = new MainEmailTemplate();
				Map<String, String> map = new HashMap();

				map.put("employeeName", getOnboarding.getFirstName() + getOnboarding.getLastName());
			map.put("email",hrApp.getEmail());
//				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				mailTemp.setEmailType("PMO_REJECT");

//			rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//			rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
				break;
			}
			case "ceo": {
				HrApprovalStatus hrApp = template.getForObject(OnboardUrl + "pmohead", HrApprovalStatus.class);
				Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingStatus);
				getOnboarding.setComments(newOnboard.getComments());
				getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
				Onboarding updateReject = onRepo.save(getOnboarding);
				r.setStatus(true);
				r.setMessage("Rejected Successfully");
				MainEmailTemplate mailTemp = new MainEmailTemplate();
				Map<String, String> map = new HashMap();

				map.put("employeeName", getOnboarding.getFirstName() + getOnboarding.getLastName());
			map.put("email",hrApp.getEmail());
//				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				mailTemp.setEmailType("CEO_REJECT");

//			rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//			rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
				break;
			}
			default:
				break;
			}
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getIrmIdByEmployeeId(String employeeId) {

		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		GetIrmId rm = new GetIrmId();
		rm.setIrmId(employeeMaster.getIrmId());
		return new ResponseEntity(rm, HttpStatus.OK);

	}

	@Override
	public ResponseEntity getSrmIdByEmployeeId(String employeeId) {
		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		GetSrmId rm = new GetSrmId();
		rm.setSrmId(employeeMaster.getSrmId());
		return new ResponseEntity(rm, HttpStatus.OK);
	}

//	@Override
//	public ResponseEntity updateEmploymentDetailsByOnboardId(EmploymentDetails empd, String onboardingId) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	@Override
	public String getEmployeeIdByName(String fullName) {
		EmployeeMaster getId = emRepo.getEmployeeIdByfullName(fullName);
		return (getId.getEmployeeId());
	}

	@Override
	public ResponseEntity updateTAAHeadApproval(String onboardingId, HrApprovalStatus newOnboard) {
		Response r = new Response();
		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			getOnboarding.setTaaHeadApprovalComment(newOnboard.getTaaHeadApprovalComment());
			getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
			Onboarding saveList = onRepo.save(getOnboarding);
			MainEmailTemplate mailTemp = new MainEmailTemplate();
			Map<String, String> map = new HashMap();

			UserMail response = template.getForObject(OnboardUrl + "pmohead", UserMail.class);
			List<MailGet> hrApp = response.getMails();

			hrApp.forEach(e -> {
				mailTemp.setEmailType("TAG_APPROVAL");
				map.put("employeeName", getOnboarding.getFullName());
				map.put("email", e.getEmail());
				mailTemp.setMap(map);
				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
			});
			r.setStatus(true);
			r.setMessage("TAAHeadApproved Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updatePMOApproval(String onboardingId, HrApprovalStatus newOnboard) {
		Response r = new Response();
		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";

		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			getOnboarding.setPmoApprovalComment(newOnboard.getPmoApprovalComment());
			getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
			Onboarding saveList = onRepo.save(getOnboarding);
			MainEmailTemplate mailTemp = new MainEmailTemplate();
			Map<String, String> map = new HashMap();

			UserMail response = template.getForObject(OnboardUrl + "ceo", UserMail.class);
			List<MailGet> hrApp = response.getMails();

			hrApp.forEach(e -> {
				mailTemp.setEmailType("PMO_APPROVAL");
				map.put("employeeName", getOnboarding.getFullName());
				map.put("email", e.getEmail());
				mailTemp.setMap(map);
				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
			});
			r.setStatus(true);
			r.setMessage("PMOApproved Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateTAAApproval(String onboardingId, HrApprovalStatus newOnboard) {
		Response r = new Response();
		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";

		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			getOnboarding.setTaaApprovalComment(newOnboard.getTaaApprovalComment());
			getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
			Onboarding saveList = onRepo.save(getOnboarding);
			MainEmailTemplate mailTemp = new MainEmailTemplate();
			Map<String, String> map = new HashMap();

			UserMail response = template.getForObject(OnboardUrl + "taahead", UserMail.class);
			List<MailGet> hrApp = response.getMails();

			hrApp.forEach(e -> {
				mailTemp.setEmailType("TAA_APPROVAL");
				map.put("employeeName", getOnboarding.getFullName());
				map.put("email", e.getEmail());
				mailTemp.setMap(map);
				template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);
			});
			r.setStatus(true);
			r.setMessage("TAAApproved Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateCEOApproval(String onboardingId, HrApprovalStatus newOnboard) {
		Response r = new Response();
		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			getOnboarding.setCeoApprovalComment(newOnboard.getCeoApprovalComment());
			getOnboarding.setOnboardingStatus(newOnboard.getOnboardingStatus());
			Onboarding saveList = onRepo.save(getOnboarding);

//			Email rest template call
			MainEmailTemplate mailTemp = new MainEmailTemplate();
			Map<String, String> map = new HashMap();

			mailTemp.setEmailType("CEO_APPROVAL");
			map.put("employeeName", getOnboarding.getFullName());
			map.put("email", getOnboarding.getEmail());
			map.put("dateOfJoining", getOnboarding.getDateOfJoining().toString());
			System.out.println(getOnboarding.getDateOfJoining().toString());
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, MainEmailTemplate.class);

			r.setStatus(true);
			r.setMessage("CEOApproved Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity getEmployeesByOnboardingStatus(String onboardingStatus) {
		Response r = new Response();
		try {

			List<EmployeeMaster> newDataOnboarding = emRepo.getEmployeesByOnboardingStatus(onboardingStatus);
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newDataOnboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getByOnboardingStatus(String employeeId, EmployeeMaster newStatus) {
		Response r = new Response();
		try {
			EmployeeMaster getOnboarding = emRepo.getByEmployeeId(employeeId);
			getOnboarding.setOnboardingStatus(newStatus.getOnboardingStatus());
			EmployeeMaster saveList = emRepo.save(getOnboarding);
			r.setStatus(true);
			r.setMessage("Status updated Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateEmploymentDetailsInPMOByEmployeeId(String employeeId, EmploymentDetails newEmp) {
		Response r = new Response<>();
		try {
			EmployeeMaster master = emRepo.getById(employeeId);
//			if(newEmp.getProjectName().isBlank() || newEmp.getProjectName().trim().length()==0) {
//			master.setProjectAllocation(0);
//			}
//			else {
//				master.
//			}
			master.setEmploymentType(newEmp.getEmploymentType());
//		master.setDepartmentName(newEmp.getDepartment());
//		master.setDesignationName(newEmp.getDesignation());
			master.setBand(newEmp.getBand());
			master.setJobTitle(newEmp.getJobTitle());
			master.setClient(newEmp.getClient());
//			if()
			master.setProjectName(newEmp.getProjectName());
			master.setProjectAllocation(0);
			master.setIrm(newEmp.getIrm());
			master.setSrm(newEmp.getSrm());
			master.setBuh(newEmp.getBuh());
			master.setOnboardingStatus(newEmp.getOnboardingStatus());

			EmployeeMaster master1 = emRepo.save(master);

			master1.setBuhId(this.getEmployeeIdByName(master.getBuh()));
			master1.setSrmId(this.getEmployeeIdByName(master.getSrm()));
			master1.setIrmId(this.getEmployeeIdByName(master.getIrm()));

			EmployeeMaster master2 = emRepo.save(master);
			System.out.println(master2);
			r.setStatus(true);
			r.setMessage(sConstants.PUT_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage(sConstants.FAILURE_RESPONSE);
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

//	@Override
//	public ResponseEntity updateEmploymentDetailsInPMOByEmployeeId(String employeeId, EmployeeMaster empMaster) {
//		Response r = new Response<>();
//		try {
//			EmployeeMaster master = emRepo.getById(employeeId);
//
//			master.setEmploymentType(empMaster.getEmploymentType());
//			master.setDepartmentName(empMaster.getDepartmentName());
//			master
//			
//
//			EmployeeMaster master1 = emRepo.save(master);
//			System.out.println(master1);
//			r.setStatus(true);
//			r.setMessage(sConstants.PUT_RESPONSE);
//			return new ResponseEntity(r, HttpStatus.OK);
//
//		} catch (Exception e) {
//			r.setStatus(false);
//			r.setMessage(sConstants.FAILURE_RESPONSE);
//			return new ResponseEntity(r, HttpStatus.OK);
//		}
//
//	}

	// getting data based on departments
	@Override
	public ResponseEntity getByDepartment(String departmentName) {
		Response r = new Response();
		try {

			List<EmployeeMaster> newData = emRepo.getEmployeesByDepartmentName(departmentName);
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newData);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override

	public ResponseEntity getEmployeeNameDepDesByEmployeeId(String employeeId) {

		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		EmployeeMaster en = new EmployeeMaster();

		en.setFirstName(employeeMaster.getFirstName());

		en.setDepartmentName(employeeMaster.getDepartmentName());

		en.setDesignationName(employeeMaster.getDesignationName());

		return new ResponseEntity(en, HttpStatus.OK);

	}

	@Override
	public ResponseEntity getDepartmentNameByEmployeeId(String employeeId) {
		EmployeeMaster employeeMaster = emRepo.getById(employeeId);

		DepartmentName dn = new DepartmentName();
		dn.setDepartmentName(employeeMaster.getDepartmentName());

		return new ResponseEntity(dn, HttpStatus.OK);

	}

	// Divya Changes
	@Override
	public String getEmployeeFullName(String employeedId) {
		EmployeeMaster master = emRepo.getByEmployeeId(employeedId);
		return master.getFullName();
	}

	public ResponseEntity getActiveEmployeesByStatus(String status) {
		Response r = new Response();
		try {

			List<EmployeeMaster> newDataOnboarding = emRepo.getActiveEmployeesByStatus(status);
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newDataOnboarding);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getDateOfJoiningByEmployeeId(String employeeId) {
		Response r = new Response();
		try {

			EmployeeMaster newDoj = emRepo.getDateOfJoiningByEmployeeId(employeeId);

// 				DateOfJoining doj = new DateOfJoining();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newDoj.getDateOfJoining());

			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity probationEmployeeFeedBack(String employeeId, ProbationEmployeeFeedBack prb) {
		Response r = new Response();
		try {
			EmployeeMaster emp = emRepo.getByEmployeeId(employeeId);
			emp.setProbationempfeedback(prb.getProbationempfeedback());
			EmployeeMaster save = emRepo.save(emp);

			r.setStatus(true);
			r.setMessage("Probation Updated Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	// For Projects Screen Team allocation
	
	// latest changes
	@Override
	public List<EmployeeMaster> employeesToDisplayByTheirProjectAllocation(String projectName) {
		return emRepo.findByStatusEqualsAndProjectAllocationLessThanAndProjectNameIsNullOrIsNotEquals(status, 100, projectName);
		/*
		 * List<EmployeeMaster> employeesLessThan100PercentWithNoProject =
		 * employees.stream().filter(emp -> { return emp.getProjectAllocation() < 100;
		 * }).collect(Collectors.toList()); return
		 * employeesLessThan100PercentWithNoProject;
		 */

	}

	@Override
	@Transactional
	public Boolean saveProjectAllocationPercentAfterMapping(String employeeId,AssignProjectName apn) {
		// TODO Auto-generated method stub
		EmployeeMaster master = emRepo.getByEmployeeId(employeeId);
		master.setProjectName(apn.getProjectName());
		master.setProjectAllocation(apn.getProjectAllocation()+master.getProjectAllocation());
		emRepo.save(master);
		return true;
	}
	
	public ResponseEntity updateTermsAndConditions(String onboardingId, TermsAndConditions terms) {
        Response response = new Response();
        
        try {
            Onboarding getData = onRepo.getByOnboardingId(onboardingId);



               getData.setOnboardingStatus(terms.getOnboardingStatus());
                getData.setTermsAndConditions(terms.isTermsAndConditions());
                
                onRepo.save(getData);
                
                response.setStatus(true);
                response.setMessage("Terms And Conditions Acceopted Succussfully");
                response.setData(getData);
                return new ResponseEntity(response, HttpStatus.OK);
            
        }catch (Exception e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);



       }
        
    }
	
	@Override
	@Transactional
	public AssignProjectName updateProjectAllocationPercentAfterMapping(String employeeId,AssignProjectName uapn) {
		EmployeeMaster master = emRepo.getByEmployeeId(employeeId);
		master.setProjectName(uapn.getProjectName());
		master.setProjectAllocation(uapn.getProjectAllocation());
		emRepo.save(master);
//		Optional op = Optional.empty();
//		op.isPresent() ? op.get(): 0;
		return (new AssignProjectName());
	}
	
	// For Project Allocation Validation
	
	@Override
	public Integer getProjectAllocationByEmployeeId(String employeeId) {
		EmployeeMaster master = emRepo.getByEmployeeId(employeeId);
		return master.getProjectAllocation();
	}

}
