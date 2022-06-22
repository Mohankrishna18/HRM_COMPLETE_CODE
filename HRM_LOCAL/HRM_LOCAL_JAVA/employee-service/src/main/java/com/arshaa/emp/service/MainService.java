package com.arshaa.emp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.HrApprovalStatus;


public interface MainService {

	public ResponseEntity  onBoardUser(Onboarding newOnboard);
	public ResponseEntity<Onboarding> waitingForApprovelStatus();
	public ResponseEntity updateApprovStatus(String onboardingId,HrApprovalStatus newOnboard);
	public ResponseEntity getEmployeeDataByEmployeeId(String employeeId);
	public ResponseEntity getEmployeeNameByEmployeeId(String employeeId);

	public ResponseEntity updateEmployeeDataByEmployeeId(String employeeId, EmployeeMaster empMaster);
	public ResponseEntity<EmployeeMaster> getALLData();
	public ResponseEntity addEmployee(EmployeeMaster newEmployee);
	public ResponseEntity updateOnboradEmployeeBydOnboardId(String onboardingId, Onboarding newOnboard );
	public ResponseEntity getApprovedData();
	public ResponseEntity getRejectedData();
	public ResponseEntity updateDesignationName(String employeeId, DesignationName name);

    public ResponseEntity getReportingManagerByEmployeeId(String employeeId);

    public ResponseEntity getEmployeeId();

}
