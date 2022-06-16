package com.arshaa.controller;

import java.util.List;
import java.util.Optional;
import org.apache.catalina.startup.ClassLoaderFactory.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.User;
import com.arshaa.model.ApproveCount;
import com.arshaa.repository.UserRepository;
import com.arshaa.repository.leaveEntitlementRepository;
import com.arshaa.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/leave")
public class LeaveController {
	@Autowired
	private UserService service;
	@Autowired
	private UserRepository repo;
	private leaveEntitlementRepository re; // @CrossOrigin(origins = "http://localhost:3000")

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

	@PutMapping("/updateLeave/{employeeleaveId}")
	private User UpdateUsers(@RequestBody User user, @PathVariable Integer employeeleaveId) {
		return service.UpdateUsers(user, employeeleaveId);
	}


//To update the Leave status
	@PutMapping("/managerupdateLeave/{employeeleaveId}")
	private User UpdateManagerUsers(@RequestBody User user, @PathVariable Integer employeeleaveId) {
		return service.UpdateManagerUsers(user, employeeleaveId);

	}

	@DeleteMapping("/deleteLeaves/{employeeleaveId}")
	public String deleteByEmployeeLeaveId(@PathVariable Integer employeeleaveId) {
		repo.deleteById(employeeleaveId);
		return "Deleted Successfully";

	}

	@GetMapping("/{leaveType}")
	public Optional<EntitledLeaves> getnoOfDays(@PathVariable String leaveType) {

		return service.findByleaveType(leaveType);
	}

	@PostMapping("save/leaveType")
	public EntitledLeaves saveleaveType(@RequestBody EntitledLeaves entitledleaves) {
		return service.save(entitledleaves);
	}

	@PutMapping("put/{leaveType}")
	public EntitledLeaves UpdateLeaveType(@RequestBody EntitledLeaves entitledleaves) {

		return service.save(entitledleaves);
	}

	@DeleteMapping("delete/{leaveType}")
	public String deleteType(@PathVariable String leaveType) {
		re.deleteByLeaveType(leaveType);

		return "Deleted Successfully";
	}

// Written by Sri Divya 
  @GetMapping("/getAllApprovedLeaves/{leaveStatus}")

	public List<User> getAllApprovedLeaves(@PathVariable String leaveStatus) {
		return service.findByLeaveStatus(leaveStatus);
	}

//Get api for get employees related to particular manager -->chandrika
	@GetMapping("/getUserByReportingManager/{reportingManager}")
	public ResponseEntity getUserByReportingManager(@PathVariable String reportingManager) {
		return service.getUserByReportingManager(reportingManager);
	}

//get approve count
	@SuppressWarnings("rawtypes")
	@GetMapping("getDataCountByapproveleavestatus/{employeeId}")
	public ResponseEntity getDataCount(@PathVariable String employeeId) {

		ApproveCount count = new ApproveCount();
		int a = repo.findcountByapproveleavestatus(employeeId);
		count.setApproveStatusCount(a);
		return new ResponseEntity(a, HttpStatus.OK);
	}

//for remaining leaves count
	@GetMapping("/getremainingleaves/{employeeId}")
	public int findNumberOfRemainingLeavesByEmployeeId(@PathVariable String employeeId) {
// repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
		int a = repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
		return a;
	}
}

