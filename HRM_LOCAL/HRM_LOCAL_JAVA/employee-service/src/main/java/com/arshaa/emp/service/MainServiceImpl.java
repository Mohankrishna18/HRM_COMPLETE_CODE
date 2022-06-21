
package com.arshaa.emp.service;

//import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.arshaa.emp.common.EmployeeLogin;
import com.arshaa.emp.common.GetReportingManager;
import com.arshaa.emp.common.UserModel;
import com.arshaa.emp.common.Users;
import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Intern;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.EmployeeName;
import com.arshaa.emp.model.GetEmployeeIds;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.model.StringConstants;
import com.arshaa.emp.model.WaitingForApproval;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.OnboardRepository;
import com.thoughtworks.xstream.mapper.Mapper.Null;

@Service
public class MainServiceImpl implements MainService {

	@Autowired
	OnboardRepository onRepo;
	@Autowired
	EmployeeMasterRepository emRepo;
	@Autowired
	@Lazy
	private RestTemplate template;

	StringConstants sConstants = new StringConstants();

	public ResponseEntity onBoardUser(Onboarding newOnboard) {
		Response r = new Response<>();
		try {
			java.sql.Date tSqlDate = new java.sql.Date(newOnboard.getOnboardDate().getTime());
			newOnboard.setOnboardDate(tSqlDate);

			java.sql.Date tsqDate1 = new java.sql.Date(newOnboard.getUpdatedOn().getTime());

			// System.out.println(new
			// SimpleDateFormat("MM-dd-yyyy").format(newOnboard.getDateOfJoining()));
			// System.out.println(new
			// SimpleDateFormat("yyyy-MM-dd").format(newOnboard.getDateOfJoining()));
			newOnboard.setUpdatedOn(tsqDate1);
			newOnboard.setWaitingforapprovalStatus(true);
			newOnboard.setRejectedStatus(false);
			newOnboard.setApprovedStatus(false);
			Onboarding newData = onRepo.save(newOnboard);
			r.setStatus(true);
			r.setMessage(sConstants.POST_SUCCESS);
			r.setData(newData);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity<Onboarding> waitingForApprovelStatus() {
		Response r = new Response<>();
		try {
			WaitingForApproval wa = new WaitingForApproval();

			List<Onboarding> onboarding = onRepo.findByWaitingforapprovalStatus(true);
			if (!onboarding.isEmpty()) {
//				onboarding.forEach(on -> {
//
//					wa.setOnboardingId(on.getOnboardingId());
//					wa.setFirstName(on.getFirstName());
//					
//					SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
//					String strDate= formatter.format(on.getDateOfJoining());
//					
//					wa.setDateOfJoining(strDate);
//					wa.setDesignation(on.getDesignation());
//					wa.setEmail(on.getEmail());
//					wa.setJobTitle(on.getJobTitle());
//					wa.setPhoneNumber(on.getPhoneNumber());
//					wa.setYearsOfExperience(on.getYearsOfExperience());
//				});

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
		String userURL = "http://urpService/user/addUser";
		String loginURL = "http://loginservice/login/addUsers";
		String emailURL = "http://emailService/mail/sendmail";
		// String employee="ATPL";
		// String intern="TRP";

		try {
			Onboarding getOnboarding = onRepo.getByOnboardingId(onboardingId);
			System.out.println(getOnboarding);
			if (!getOnboarding.equals(null)) {
				getOnboarding.setApprovedStatus(newOnboard.isApprovedStatus());
				getOnboarding.setRejectedStatus(newOnboard.isRejectedStatus());
				getOnboarding.setWaitingforapprovalStatus(newOnboard.isWaitingforapprovalStatus());
				getOnboarding.setApprovedDate(newOnboard.getApprovedDate());
				getOnboarding.setReportingManager(newOnboard.getReportingManager());
				getOnboarding.setComments(newOnboard.getComments());
				Onboarding saveList = onRepo.save(getOnboarding);

				if (saveList.isApprovedStatus() == true) {
					java.sql.Date tSqlDate = new java.sql.Date(newOnboard.getApprovedDate().getTime());
					newOnboard.setApprovedDate(tSqlDate);
					getOnboarding.setRejectedStatus(false);
					getOnboarding.setWaitingforapprovalStatus(false);

					onRepo.save(getOnboarding);

					// Posting data to EmployeeMaster
					// System.out.println(ir.getEmployeeId());
					// getOnboarding.getOnboardingId().getChars(0, 0, null, 0);; }
					EmployeeMaster employeeMaster = new EmployeeMaster();
					employeeMaster.setFirstName(getOnboarding.getFirstName());
					employeeMaster.setEmail(getOnboarding.getEmail());
					employeeMaster.setDepartmentName(getOnboarding.getDepartment());
					employeeMaster.setDesignationName(getOnboarding.getDesignation());
					employeeMaster.setLastName(getOnboarding.getLastName());
					employeeMaster.setMiddleName(getOnboarding.getMiddleName());
					employeeMaster.setPrimaryPhoneNumber(getOnboarding.getPhoneNumber());
					employeeMaster.setDateOfJoining(getOnboarding.getDateOfJoining());
					employeeMaster.setYearsOfExperience(getOnboarding.getYearsOfExperience());
					employeeMaster.setPrimarySkills(getOnboarding.getPrimarySkills());
					employeeMaster.setSecondarySkills(getOnboarding.getSecondarySkills());
					employeeMaster.setJobTitle(getOnboarding.getJobTitle());
					employeeMaster.setEmploymentType(getOnboarding.getEmploymentType());
					employeeMaster.setReportingManager(newOnboard.getReportingManager());
					emRepo.save(employeeMaster);

					// Generating Random userId and Password
					Random rand = new Random();
					Integer intRandom = rand.nextInt(9999);
					String userId = getOnboarding.getFirstName() + intRandom;
					int n = getOnboarding.getFirstName().length();
					char first = getOnboarding.getFirstName().charAt(0);
					char last = getOnboarding.getFirstName().charAt(n - 1);
					String password = "user" + first + last + intRandom;
					// System.out.println("Username :" + userId + "Password" + password);

					// Posting data to UserMaster table
					Users users = new Users();
					users.setEmployeeId(employeeMaster.getEmployeeId());
					users.setUserName(userId);
					template.postForObject(userURL, users, Users.class);

					// Posting data to Employee login table
					EmployeeLogin login = new EmployeeLogin();
					login.setEmail(getOnboarding.getEmail());
					login.setUserName(userId);
					login.setPassword(password);
					login.setEmployeeId(employeeMaster.getEmployeeId());
					login.setUserType("employee");
					template.postForObject(loginURL, login, EmployeeLogin.class);
					// send mail
					UserModel model = new UserModel();
					model.setName(employeeMaster.getFirstName());
					model.setEmail(employeeMaster.getEmail());
					model.setUserName(userId);
					model.setPassword(password);
					model.setEmployeeId(employeeMaster.getEmployeeId());
					template.postForObject(emailURL, model, UserModel.class);

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
		en.setEmployeeName(employeeMaster.getFirstName().concat(" ")
				.concat(employeeMaster.getMiddleName().concat(" ").concat(employeeMaster.getLastName())));

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

}
