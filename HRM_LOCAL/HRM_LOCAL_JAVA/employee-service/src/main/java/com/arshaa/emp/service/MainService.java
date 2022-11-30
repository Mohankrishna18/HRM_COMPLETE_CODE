package com.arshaa.emp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.AdditionalDetails;
import com.arshaa.emp.model.Address;
import com.arshaa.emp.model.AssignProjectName;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.EducationalDetails;
import com.arshaa.emp.model.EmploymentDetails;
import com.arshaa.emp.model.Experience;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.PersonalDetails;
import com.arshaa.emp.model.ProbationEmployeeFeedBack;
import com.arshaa.emp.model.TermsAndConditions;


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
	public ResponseEntity getIrmIdByEmployeeId(String employeeId);
	public ResponseEntity getSrmIdByEmployeeId(String employeeId);
	public ResponseEntity updateEmploymentDetailsByOnboardId(EmploymentDetails empd, String onboardingId);
	public ResponseEntity EmploymentDetailsByOnboardId(EmploymentDetails emps,String onboardingId);
	
	String getEmployeeIdByName(String fullName);
	public ResponseEntity updateTAAHeadApproval(String onboardingId, HrApprovalStatus newOnboard);
	public ResponseEntity updatePMOApproval(String onboardingId, HrApprovalStatus newOnboard);
	public ResponseEntity updateTAAApproval(String onboardingId, HrApprovalStatus newOnboard);
	public ResponseEntity updateCEOApproval(String onboardingId, HrApprovalStatus newOnboard);
	public ResponseEntity getEmployeesByOnboardingStatus(String onboardingStatus);
	public ResponseEntity getByOnboardingStatus(String employeeId,  EmployeeMaster newStatus);
//	public ResponseEntity updateEmploymentDetailsInPMOByEmployeeId(String employeeId, EmployeeMaster empMaster);
	public ResponseEntity updateEmploymentDetailsInPMOByEmployeeId(String employeeId, EmploymentDetails newEmp);
	public ResponseEntity getByDepartment(String departmentName);
	ResponseEntity getEmployeeNameDepDesByEmployeeId(String employeeId);
	public ResponseEntity getDepartmentNameByEmployeeId(String employeeId);
	//Divya changes
	public String getEmployeeFullName(String employeedId);
	public ResponseEntity getActiveEmployeesByStatus(String status);
	public ResponseEntity getDateOfJoiningByEmployeeId(String employeeId);
	public ResponseEntity probationEmployeeFeedBack(String employeeId, ProbationEmployeeFeedBack prb);
	
	// latest changes
	public List<EmployeeMaster> employeesToDisplayByTheirProjectAllocation(String projectName);
	
	public Boolean saveProjectAllocationPercentAfterMapping(String employeeId,AssignProjectName apn);
	public AssignProjectName updateProjectAllocationPercentAfterMapping(String employeeId,AssignProjectName uapn);
	
	// For Project Allocation Validation
	public Integer getProjectAllocationByEmployeeId(String employeeId);
	

	public ResponseEntity updateTermsAndConditions(String onboardingId, TermsAndConditions terms);
    
    
}
