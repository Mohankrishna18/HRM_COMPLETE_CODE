package com.arshaa.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.client.RestTemplate;
import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.User;
import com.arshaa.model.GetReportingManager;
import com.arshaa.repository.UserRepository;
import com.arshaa.repository.leaveEntitlementRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	@Autowired
	private leaveEntitlementRepository repo;
	@Autowired
	@Lazy
	private RestTemplate template;

	public Optional<User> findById(int employeeleaveId) {
try {
return repository.findById(employeeleaveId);
} catch (Exception e) {
e.getMessage();
}
return findById(employeeleaveId); }
// public Optional<User> findByemployeeId(String employeeId) {
// return repository.getAllUserByemployeeId(employeeId);
//
// }
	public User save(User user) {
	try

	{
		GetReportingManager al = template.getForObject(
				"http://empService/emp/getReportingManagerByEmployeeId/" + user.getEmployeeId(),
				GetReportingManager.class);
		user.setReportingManager(al.getReportingmanager());
		user.setLeaveStatus("pending");
		user.setManagerApproval("pending");
		return repository.save(user);
	}catch(
	Exception e)
	{
		e.getMessage();
	}return user;
}

	public List<User> findAll() {
try {
// TODO Auto-generated method stub
return repository.findAll();
} catch (Exception e) {
e.getMessage();
}
return findAll();
}

	public List<User> findByemployeeId(String employeeId) {
		try {
// TODO Auto-generated method stub
			return (List<User>) repository.findByemployeeId(employeeId);
		} catch (Exception e) {
			e.getMessage();
		}
		return findByemployeeId(employeeId);
	}

	public User UpdateUsers(User user, Integer employeeleaveId) {
		try {
			User u = repository.findById(employeeleaveId).get();
			user.getEmployeeleaveId();
			u.getToDate();
			u.getLeaveReason();
			user.getLeaveStatus();
			user.getNumberOfDays();
			u.setHrApproval(user.getHrApproval());
			u.setLeaveStatus(user.getLeaveStatus());
			u.setRejectReason(user.getRejectReason());
//u.setLeaveReason(user.getLeaveReason()); u.setRejectReason(user.getRejectReason());
//u.setEmployeeId(user.getEmployeeId());
//u.setFromDate(user.getFromDate());
//u.setToDate(user.getToDate());
// u.setNumberOfDays(user.getNumberOfDays());
//u.setLeaveType(user.getLeaveType());
			return repository.save(u);
		} catch (Exception e) {
			e.getMessage();
		}
		return user;
	}

	public User UpdateManagerUsers(User user, Integer employeeleaveId) {
		try {
			User u = repository.findById(employeeleaveId).get();
			user.getEmployeeleaveId();
			u.getToDate();
			u.getLeaveReason();
			user.getManagerApproval();
			user.getNumberOfDays();
			u.setManagerApproval(user.getManagerApproval());
//u.setLeaveReason(user.getLeaveReason()); u.setRejectReason(user.getRejectReason());
//u.setEmployeeId(user.getEmployeeId());
//u.setFromDate(user.getFromDate());
//u.setToDate(user.getToDate());
// u.setNumberOfDays(user.getNumberOfDays());
//u.setLeaveType(user.getLeaveType());
			return repository.save(u);
		} catch (Exception e) {
			e.getMessage();
		}
		return user;
	}

// this logic will give employees related to particular manager-->Chandrika
	public ResponseEntity getUserByReportingManager(String reportingManager) {
		try {
			List<User> u = repository.findUserByReportingManager(reportingManager);
			return new ResponseEntity(u, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);
		}
	}

	public Optional<EntitledLeaves> findByleaveType(String leaveType) {
// TODO Auto-generated method stub
		return repo.findByleaveType(leaveType);
	}

	public EntitledLeaves save(EntitledLeaves entitledleaves) {
// TODO Auto-generated method stub
		return repo.save(entitledleaves);
	}

	public EntitledLeaves updateLEave(EntitledLeaves entitledleaves) {
		try {
			EntitledLeaves e = repo.getByleaveType(entitledleaves.getLeaveType());
			e.setLeaveType(e.getLeaveType());
			e.setNoOfDays(e.getNoOfDays());
			return repo.save(e);
		} catch (Exception e) {
			e.getMessage();
		}
		return entitledleaves;
	}

// Written by Sri Divya
	public List<User> findByLeaveStatus(String leaveStatus) {
		try {
// TODO Auto-generated method stub
			return (List<User>) repository.findByLeaveStatus(leaveStatus);
		} catch (Exception e) {
			e.getMessage();
		}
		return repository.findByLeaveStatus(leaveStatus);
	}
}
