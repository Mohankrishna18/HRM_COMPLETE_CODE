package com.arshaa.emp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.AdditionalDetails;
import com.arshaa.emp.model.Address;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.EducationalDetails;
import com.arshaa.emp.model.EmploymentDetails;
import com.arshaa.emp.model.Experience;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.PersonalDetails;


public interface MainService {

	public ResponseEntity  onBoardUser(Onboarding newOnboard);
	public ResponseEntity<Onboarding> waitingForApprovelStatus();
	//getting data by onboarding id
	public ResponseEntity getOnboardingDataByOnboardingId(String onboardingId);
	public ResponseEntity updateApprovStatus(String onboardingId,HrApprovalStatus newOnboard);
	public ResponseEntity getEmployeeDataByEmployeeId(String employeeId);
	public ResponseEntity getEmployeeNameByEmployeeId(String employeeId);

	public ResponseEntity updateEmployeeDataByEmployeeId(String employeeId, EmployeeMaster empMaster);
	public ResponseEntity<EmployeeMaster> getALLData();
	public ResponseEntity addEmployee(EmployeeMaster newEmployee);
	public ResponseEntity updateOnboradEmployeeBydOnboardId(String onboardingId, Onboarding newOnboard );
	public ResponseEntity getApprovedData();
	public ResponseEntity getRejectedData();
	public ResponseEntity getOnboardedApprovedData();
	public ResponseEntity updateDesignationName(String employeeId, DesignationName name);

    public ResponseEntity getReportingManagerByEmployeeId(String employeeId);

    public ResponseEntity getEmployeeId();
    
    public ResponseEntity getPersonalDetailsByEmployeeId(String employeeId);
    public ResponseEntity updatePersonalDetailsByEmployeeId(PersonalDetails pd,String employeeId);
    
    public ResponseEntity getAddressByEmployeeId(String employeId);
    public ResponseEntity updateAddressByEmployeeId(Address ad,String employeeId);
    
    public ResponseEntity getAdditionalDetailsByEmployeeId(String employeeId);
    public ResponseEntity updateAdditionalDetailsByEmployeeId(AdditionalDetails add,String employeeId);

    public ResponseEntity getEmploymentDetailsByEmployeeId(String employeeId);
    public ResponseEntity updateEmploymentDetailsByEmployeeId(EmploymentDetails empd,String employeeId);
    
    public ResponseEntity getEducationalDetailsByEmployeeId(String employeeId);
    public ResponseEntity updateEducationalDetailsByEmployeeId(EducationalDetails education,String employeeId);
    
    public ResponseEntity getExperienceByEmployeeId(String employeeId);
    public ResponseEntity updateExperienceByEmployeeId(Experience exp,String employeeId);
    
    
    //Onboarding Update methods
    public ResponseEntity updatePersonalDetailsByOnboardId(PersonalDetails pd,String onboardingId);
  
   
    public ResponseEntity updateAddressByOnboardId(Address ad,String onboardingId);
   
    public ResponseEntity updateAdditionalDetailsByOnboardId(AdditionalDetails add,String onboardingId);

//    public ResponseEntity updateEmploymentDetailsByOnboardId(EmploymentDetails empd,String onboardingId);
    
    public ResponseEntity updateEducationalDetailsByOnboardId(EducationalDetails education,String onboardingId);
  
    public ResponseEntity updateExperienceByOnboardId(Experience exp,String onboardingId);


    // user client project  management services methods
    public ResponseEntity getUserProjectDataByOnboardingId(String onboardingId);
    public ResponseEntity getUserProjectDataByEmployeeId(String employeeId);
    
    public ResponseEntity getUsersNamesByBand();
	public ResponseEntity getDetailsforPMOByonboardingStatus(String onboardingStatus);
	public ResponseEntity updateReject(String onboardingId,HrApprovalStatus newOnboard);
	public ResponseEntity getIrmByEmployeeId(String employeeId);
	public ResponseEntity getSrmByEmployeeId(String employeeId);
	public ResponseEntity updateEmploymentDetailsByOnboardId(EmploymentDetails empd, String onboardingId);
	public ResponseEntity EmploymentDetailsByOnboardId(EmploymentDetails emps,String onboardingId);
	
	String getEmployeeIdByName(String fullName);
    
    
}
