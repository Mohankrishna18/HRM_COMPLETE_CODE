package com.arshaa.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;
import org.apache.catalina.startup.ClassLoaderFactory.Repository;
import com.arshaa.model.LeavesDataForHr;

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
import org.springframework.web.bind.annotation.RequestParam;

import com.arshaa.entity.BetweenDates;
import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.LeaveMaster;
import com.arshaa.entity.User;
import com.arshaa.model.UserModel;
import com.arshaa.mapper.LeavesCount;
import com.arshaa.model.ApproveCount;
import com.arshaa.model.LeaveBalanceModel;
import com.arshaa.repository.BetweenDatesRepo;
import com.arshaa.repository.LeaveMasterRepository;
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

	@Autowired
	private BetweenDatesRepo br;

	@Autowired
	private LeaveMasterRepository leee;

	@Autowired
	private leaveEntitlementRepository re; // @CrossOrigin(origins = "http://localhost:3000")

	@GetMapping("/getLeaveHistoryByEmpid/{employeeleaveId}")
	public ResponseEntity<UserModel> getUsers(@PathVariable Integer employeeleaveId) {
		return ResponseEntity.ok(service.findById(employeeleaveId));
//	return service.findById(employeeleaveId);
	}

	@GetMapping("/getLeaveHistoryByEmployeeid/{employeeId}")
	public List<User> findUsers(@PathVariable String employeeId) {
		return service.findByemployeeId(employeeId);
	}

	@GetMapping("/getAllEmployees")
	public ResponseEntity getAllUsers() {
		return service.findAll();
	}

//	@PostMapping("/applyLeave")
//	private List<Date> saveUser(@RequestBody User user) {	
//				service.save(user);	
//		List<Date> u = service.getDaysBetweenDates(user.getFromDate(), user.getToDate());
//		
//		return u;
//	}

	@PostMapping("/applyLeave")
	private List<BetweenDates> saveUser(@RequestBody User user) {

		// List<BetweenDatesRepo> betwee = (List<BetweenDatesRepo>) new
		// BetweenDatesRepo();
		return service.save(user);
	}

	@PutMapping("/updateLeave/{employeeleaveId}/{userType}")
	private User UpdateUsers(@RequestBody User user, @PathVariable Integer employeeleaveId,
			@PathVariable String userType) {
		return service.UpdateUsers(user, employeeleaveId);
	}

//To update the Leave status
	@PutMapping("/managerupdateLeave/{employeeleaveId}/{userType}")
	private User UpdateManagerUsers(@RequestBody User user, @PathVariable Integer employeeleaveId,
			@PathVariable String userType) {
		return service.UpdateManagerUsers(user, employeeleaveId, userType);

	}

	@DeleteMapping("/deleteLeaves/{employeeleaveId}/{userType}")
	public String deleteByEmployeeLeaveId(@PathVariable Integer employeeleaveId, @PathVariable String userType) {
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

	@GetMapping("/getAllleavetypes")
	public List<EntitledLeaves> findAllLeaveTypes() {
		return re.findAll();
	}

	@PutMapping("put/{leaveId}")
	public EntitledLeaves UpdateLeaveType(@RequestBody EntitledLeaves entitledleaves, @PathVariable Integer leaveId) {
		return service.UpdateLeaveType(entitledleaves, leaveId);
	}

	@DeleteMapping("/delete/{leaveId}")
	public String deleteByLeaveId(@PathVariable EntitledLeaves leaveId) {
		re.delete(leaveId);
		return "Deleted Successfully";
	}

// Written by Sri Divya 
	@GetMapping("/getAllApprovedLeaves/{leaveStatus}")

	public List<User> getAllApprovedLeaves(@PathVariable String leaveStatus) {
		return service.findByLeaveStatus(leaveStatus);
	}

//Get api for get employees related to particular manager -->chandrika
	@GetMapping("/getUserByReportingManager/{irm}")
	public ResponseEntity getUserByIrm(@PathVariable String irm) {
		return service.getUserByIrm(irm);
	}

	@GetMapping("/getUserSrmTeam/{srm}")
	public ResponseEntity getUserBySrm(@PathVariable String srm) {
		return service.getUserBySrm(srm);
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

	@GetMapping("/getcountofApplyingLeaves/{employeeId}")
	public int findcountofApplyingLeaves(@PathVariable String employeeId) {
		// repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
		int b = repo.findapplyingleavescount(employeeId);
		return b;
	}

	@GetMapping("/{startDate}/{endDate}")
	ResponseEntity<List> getDaysBetweenDates(@PathVariable String startDate, @PathVariable String endDate)
			throws ParseException, Exception {
		return ResponseEntity.ok(service.getDaysBetweenDates(new SimpleDateFormat("yyyy-MM-dd").parse(startDate),
				new SimpleDateFormat("yyyy-MM-dd").parse(endDate)));
	}

	@GetMapping("/getAllbetweenDates/{employeeId}")
	public List<BetweenDates> findAllbetweenDates(@PathVariable String employeeId) {
		return br.findByEmployeeId(employeeId);
	}

	@DeleteMapping("/deleteBetweenDates/{employeeleaveId}")
	public void deleteByEmployeeleaveId(@PathVariable Integer employeeleaveId) {
		try {
			br.deleteDates(employeeleaveId);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
//   @PutMapping("/updateBySrmByLeaveStatus/{employeeleaveId}")
//   public ResponseEntity<User> updateLeaveStatusByEmployeeId( @RequestBody UpdateLeaveStatus uls ,@PathVariable Integer employeeleaveId) {
//	   
//	   User u = repo.findById(employeeleaveId).get();
//	   
//	   u.setLeaveStatus(uls.getLeaveStatus());
//	
//	  return new ResponseEntity("Updated Successfully",HttpStatus.OK);
//   }

	// To get Count of Pending Approved, Rejected Information from EmployeeLeaves
	// Table
	@GetMapping("/getEmployeePendingLeavesCountByStatus/{leaveStatus}")

	public int getEmployeePendingLeavesCountByStatus(@PathVariable String leaveStatus) {

		return service.findEmployeePendingLeavesCountByLeaveStatus(leaveStatus);

	}

	@GetMapping("/getEmployeeLeavesPendingLeavesByStatus/{leaveStatus}")

	public List<LeavesDataForHr> getEmployeePendingLeavesByStatus(@PathVariable String leaveStatus) {

		return service.findEmployeeLeavesLeaveStatusByLeaveStatus(leaveStatus);

	}

	// To get Count of WFH from EmployeeLeaves Table
	@GetMapping("/getEmployeeWFHCountByLeaveOrwfh/{leaveOrwfh}/{employeeId}")

	public int getEmployeeWFHCountByLeaveOrwfh(@PathVariable String leaveOrwfh, @PathVariable String employeeId) {

		return service.findEmployeeWFHCountByLeaveOrwfhAndEmployeeId(leaveOrwfh, employeeId);

	}

	@GetMapping("/getAllbetweenDates/{employeeId}/{leaveOrwfh}")
	public List<BetweenDates> findbetweenDatesByLeaveOrwfh(@PathVariable String employeeId,
			@PathVariable String leaveOrwfh) {
		return br.findByEmployeeIdAndLeaveOrwfh(employeeId, leaveOrwfh);
	}

	@GetMapping("/getcountLeavesofApplyingLeaves/{employeeId}")
	public Integer findLeaveapplyingleavescount(@PathVariable String employeeId) {
		// repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
		Optional<Integer> b = repo.findLeaveapplyingleavescount(employeeId);
		return b.isPresent() ? b.get() : 0;
	}
	
	@GetMapping("/getcountWFHofApplyingLeaves/{employeeId}")
	public Integer findWFHapplyingleavescount(@PathVariable String employeeId) {
		// repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
		Optional<Integer> b = repo.findWFHapplyingleavescount(employeeId);
		return b.isPresent() ? b.get() : 0;
	}

	@GetMapping("/getLeaveDatesByEmployeeidAndLeaveStatus/{leaveStatus}/{employeeId}")
	public List<User> findLeavesByLeaveStatusAndEmployeeId(@PathVariable String leaveStatus,
			@PathVariable String employeeId) {
		return service.findLeavesByLeaveStatusAndEmployeeId(leaveStatus, employeeId);
	}

//     http://localhost:6065/leave/get/{departmentId}/?year=2022&month=09

	@GetMapping("/getLeavesData/{departmentName}/{year}/{month}")
	public List<User> getUserDataByDepartmentName(@PathVariable String departmentName, @PathVariable int year,
			@PathVariable int month) {
		return repo.getUserDataByDepartmentName(departmentName, year, month);

	}

//@GetMapping("/getcountLeavesByMonthofApplyingLeaves/{employeeId}/{month}/{year}")
//public int findLeaveapplyingleavescountBYMonth(@PathVariable String employeeId,@PathVariable int month ,@PathVariable int year) {
//	// repo.findNumberOfRemainingLeavesByEmployeeId(employeeId);
//	int c = repo.findLeaveapplyingleavescountBYMonth(employeeId, month, year);
//	return c;
//}

	@GetMapping("/getcountLeavesByMonthofApplyingLeaves/{month}/{year}/{leaveOrwfh}/{departmentName}/{employeeId}")
	public ResponseEntity getAbsanceCount(@PathVariable Integer month, @PathVariable Integer year,
			@PathVariable String leaveOrwfh, @PathVariable String departmentName, @PathVariable String employeeId) {
		LeavesCount cc = new LeavesCount();

		try {

			int count = br.findLeaveapplyingleavescountBYMonth(month, year, leaveOrwfh, departmentName, employeeId);
			cc.setCount(count);
			cc.setStatus(true);
			return new ResponseEntity(cc, HttpStatus.OK);
		} catch (Exception e) {
			cc.setStatus(false);
			return new ResponseEntity(cc, HttpStatus.OK);

		}

	}

//@GetMapping("/getcountByMonth/{month}/{year}")
//public ResponseEntity getWorkingDays(@PathVariable Integer month,@PathVariable Integer year)
//{	LeavesCount cc=new LeavesCount();
//
//	try {
//	
//	int count=br.findcountBYMonth(month, year);
//	cc.setCount(count);
//	cc.setStatus(true);
//	return new ResponseEntity(cc ,HttpStatus.OK);
//	}
//	catch(Exception e)
//	{
//		cc.setStatus(false);
//		return new ResponseEntity(cc ,HttpStatus.OK);
//
//	}
//}
	@GetMapping("/getAllMonths/{employeeId}")
	public List<String> getAllMonths(@PathVariable("employeeId") String employeeId) {
		return service.getMonthsForEmployeeLeaves(employeeId);
	}

	@GetMapping("/getcountLeavesByMonthofApplyingLeaveswithoutDept/{month}/{year}/{leaveOrwfh}/{employeeId}")
	public ResponseEntity getAbsanceCountWithoutDept(@PathVariable Integer month, @PathVariable Integer year,
			@PathVariable String leaveOrwfh, @PathVariable String employeeId) {
		LeavesCount cc = new LeavesCount();

		try {

			int count = br.findLeaveapplyingleavescountBYMonthwithoutDept(month, year, leaveOrwfh, employeeId);
			cc.setCount(count);
			cc.setStatus(true);
			return new ResponseEntity(cc, HttpStatus.OK);
		} catch (Exception e) {
			cc.setStatus(false);
			return new ResponseEntity(cc, HttpStatus.OK);

		}

	}

//@PostMapping("postLeaves/{employeeId}")
//public LeaveMaster postLeaves(@RequestBody LeaveMaster leaveBalance) {
//	return leee.save(leaveBalance);
//}
//
////Getting Leave Balance for All Employees
//@GetMapping("/getLeaveBalance/{employeeId}")
//	public List<LeaveMaster> getLeavesData(String employeeId) {
//		try {
//
//			return (List<LeaveMaster>) leee.findByemployeeId(employeeId);
//		} catch (Exception e) {
//			e.getMessage();
//		}
//		return getLeavesData(employeeId);
//	}

	@GetMapping("/getLeaveBalance")
	public List<LeaveMaster> list() {
		return service.listAll();
	}

	@PostMapping("/postLeaves")
	public void add(@RequestBody LeaveMaster leaveMaster) {
		service.save(leaveMaster);
	}

	@PutMapping("/updateLeaveBalance/{employeeId}")
	public LeaveBalanceModel updateLeaveBalnce(@RequestBody LeaveBalanceModel leavebalance,@PathVariable String employeeId) {
	      return service.updateLeaveBalnce(leavebalance, employeeId);
	}
	
	@GetMapping("/leaveBalanceByEmployeeId/{employeeId}")
	public ResponseEntity<LeaveMaster> get(@PathVariable String employeeId) {
	    try {
	    	LeaveMaster lm = service.get(employeeId);
	        return new ResponseEntity<LeaveMaster>(lm, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<LeaveMaster>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@GetMapping("/findLeavesCountBetWeenTwoDates/{employeeId}/{startDate}/{endDate}")
    public ResponseEntity<Integer> findLeavesCountBetWeenTwoDates(@PathVariable String employeeId,
            @PathVariable String startDate, @PathVariable String endDate) throws ParseException, Exception {
        return ResponseEntity
                .ok(br.findLeavesCountBetWeenTwoDates(employeeId,startDate,endDate));
    }
	
}
