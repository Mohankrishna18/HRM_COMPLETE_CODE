package com.arshaa.controller;



import java.util.List;
import java.util.Optional;

import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.arshaa.entity.User;
import com.arshaa.repository.UserRepository;
import com.arshaa.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/leave")
public class LeaveController {

	@Autowired
	private UserService service;
	
	@Autowired
	private UserRepository repo;

	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getLeaveHistoryByEmpid/{employeeleaveId}")
	
	private Optional<User> getUsers(@PathVariable Integer employeeleaveId) {
		
		
			
		return service.findById(employeeleaveId);
	}
	@GetMapping("/getLeaveHistoryByEmployeeid/{employeeId}")	
	public List<User> findUsers(@PathVariable String employeeId) {
				
		return service.findByemployeeId(employeeId);
	}
	@GetMapping("/getAllEmployees")
	public List<User> getAllUsers() {
	return service.findAll();
	}

	@PostMapping("/applyLeave")
	private User saveUser(@RequestBody User user) {
		return service.save(user);

	}
	@PutMapping("/updateLeave")
	private User UpdateUsers( @RequestBody User user) {
		 return service.UpdateUsers(user);
		 
		 
		 }

	 @DeleteMapping ("/deleteLeaves/{employeeleaveId}")
	 
	 public String deleteByEmployeeLeaveId(@PathVariable Integer employeeleaveId) {
	 repo.deleteById(employeeleaveId);
	 
	 	return "Deleted Successfully";
		
	}
	 
	    @GetMapping("/getUserByReportingManager/{reportingManager}")
		public ResponseEntity getUserByReportingManager(@PathVariable String reportingManager)
		{
			return service.getUserByReportingManager(reportingManager);
		}
}