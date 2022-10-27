package com.timesheet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.timesheet.entity.TimesheetApproval;
import com.timesheet.entity.TimesheetEmployee;
import com.timesheet.repository.TimeSheetApprovalRepository;
import com.timesheet.repository.TimesheetRepository;
import com.timesheet.service.TimesheetService;

@RestController
@CrossOrigin("*")
@RequestMapping("/timesheet")
public class TimesheetController {
	
	@Autowired
	private TimesheetService service;
	
	@Autowired
	private TimesheetRepository TRepo;
	@Autowired
	private TimeSheetApprovalRepository tRepo;
	
//	@Autowired
//	private TimesheetEmployee TEmp;
	@PostMapping("/addTimehseetApproval")
	public ResponseEntity addNewTask(@RequestBody TimesheetApproval ta) {
		return service.addTimeSheetApprovalData(ta);
	}

	
	@PostMapping("/createNewTimesheet")
	public ResponseEntity<TimesheetEmployee> addNewTask(@RequestBody List<TimesheetEmployee> newTask) {
		List<TimesheetEmployee> ts = service.addTimesheetData(newTask);
		return new  ResponseEntity (ts,HttpStatus.OK);
	}
	

@GetMapping("/getTasksById/{taskId}")
	public List<TimesheetEmployee> getTasksByTaskId(@PathVariable int taskId) {
		return TRepo.getTasksByTaskId(taskId);
	}
//approval
@GetMapping("/gettimesheetData/{employeeId}")
public List <TimesheetApproval>getTimesheetApprovalbyEmployeeId(@PathVariable String employeeId){
	return tRepo.getTimesheetApprovalByEmployeeId(employeeId);
	
	
}
@GetMapping("/gettaskDetails/{employeeId}")
public List <TimesheetEmployee>get(@PathVariable String employeeId){
	return TRepo.getTaskDetailsByemployeeId(employeeId);
	
}
@GetMapping("/getEmployeesTask/{irm}/{status}")
public List <TimesheetApproval>getTimesheetApprovalByIrmAndStatus(@PathVariable String irm,@PathVariable String status){

	return tRepo.findTimesheetApprovalByIrmAndStatus(irm, status);
}
	@GetMapping("/gettimesheet/{timesheetId}")
	public TimesheetApproval getTimesheetDataByTimesheetId(@PathVariable int  timesheetId){
		return tRepo.getById(timesheetId);
		
		
	}
	@GetMapping("/getAlltimesheetdata")
	public List<TimesheetApproval> getTasks() {
		return tRepo.findAll();
	}
	@GetMapping("/gettimesheetdata/{employeeId}/{year}/{month}")
	public List<TimesheetApproval> getTimesheetDataByEmployeeId(@PathVariable String  employeeId,@PathVariable int year,@PathVariable int month){
		return tRepo.getTimesheetDataByEmployeeId(employeeId, year, month);
		
		
	}
	
	@PutMapping("/timesheetApproval/{timesheetId}/{employeeId}/{userType}")
	public TimesheetApproval updateTimesheet(@PathVariable String  employeeId,@PathVariable int  timesheetId, @RequestBody TimesheetApproval timesheetUpdate, @PathVariable String userType){
		return service.updateTimesheet(timesheetId,employeeId,timesheetUpdate, userType);
		
		
	}


}
