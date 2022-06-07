package com.arshaa.emp.controller;

import java.util.List;

import org.hibernate.engine.query.spi.ReturnMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Intern;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.OnboardRepository;
import com.arshaa.emp.service.MainService;

@RestController
@RequestMapping("/emp")
public class MainController {

	@Autowired  
	OnboardRepository onrepo;
	@Autowired
	EmployeeMasterRepository emRepo;
	@Autowired
	MainService serv;
	 
	@PostMapping("/createNewPotentialEmployee")
	public ResponseEntity  onBoardUser(@RequestBody Onboarding newOnboard)
	{		
		return serv.onBoardUser(newOnboard);
	}	
	@GetMapping("/waitingForApprovelStatus")
	public ResponseEntity<Onboarding> waitingForApprovelStatus()
	{
		return serv.waitingForApprovelStatus();
	}
	
	@PutMapping("/updateApprovStatus/{onboardingId}")
	public ResponseEntity updateApprovStatus(@PathVariable String onboardingId,@RequestBody HrApprovalStatus newOnboard)
	{
         return serv.updateApprovStatus(onboardingId, newOnboard);
	}
//	@PostMapping("/createNewPotentialEmployee")
//	public void  addEmployee(@RequestBody EmployeeMaster newEmployee)
//	{		
//		 emRepo.save(newEmployee);
//	}
	@GetMapping("/getEmployeeDataByEmployeeId/{employeeId}")
	public ResponseEntity getEmployeeDataByEmployeeId(@PathVariable String employeeId)
	{
	  return serv.getEmployeeDataByEmployeeId(employeeId);	
	}

	@PutMapping("/updateEmployeeDataByEmployeeId/{employeeId}")
	public ResponseEntity updateEmployeeDataByEmployeeId(@PathVariable String employeeId,@RequestBody EmployeeMaster empMaster) {
		return serv.updateEmployeeDataByEmployeeId(employeeId, empMaster);
	}
	
	// Get Api to get All Employees Data
	@GetMapping("/getAllEmployeeMasterData")
	public ResponseEntity<EmployeeMaster> getALLData()
	{
		return serv.getALLData();
	}

	@PostMapping("/createNewEmployee")
	public ResponseEntity addEmployee(@RequestBody EmployeeMaster newEmployee)
	{
	
	return serv.addEmployee(newEmployee);
	}
	@PutMapping("/updatedOnbordingDataById/{onboardingId}")
	public ResponseEntity updateOnboradEmployeeBydOnboardId(@PathVariable String onboardingId,@RequestBody Onboarding newOnboard)
	{
		return serv.updateOnboradEmployeeBydOnboardId(onboardingId, newOnboard);
	}
	@GetMapping("/getApprovedData")
	public ResponseEntity getApprovedData()
	{
		return serv.getApprovedData();
	}
    @PutMapping("/updateDesignationName/{employeeId}") 
	public ResponseEntity updateDesignationName(@PathVariable String employeeId,@RequestBody DesignationName name) {
		return serv.updateDesignationName(employeeId, name);
	}

    @GetMapping("/getEmployeeNameByEmployeeId/{employeeId}")
    public ResponseEntity getEmployeeNameByEmployeeId(@PathVariable String employeeId) {

    	return serv.getEmployeeNameByEmployeeId(employeeId);
	}
	
//	@PostMapping("/createId")
//	public String createId(@RequestBody Intern intern)
//	{
//		return  intern.getEmployeeId();	
//	}
	}  

