package com.arshaa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.arshaa.entity.User;
import com.arshaa.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public Optional<User> findById(int employeeleaveId) {
		try {
		return repository.findById(employeeleaveId);
		}
		catch(Exception e) {
			e.getMessage();
		}
		return findById(employeeleaveId);
		
	}
//	public Optional<User> findByemployeeId(String employeeId) {
//		return repository.getAllUserByemployeeId(employeeId);
//
//	}

	public User save(User user) {
		try {
		user.setLeaveStatus("pending");
		 return repository.save(user);
		}
		 catch(Exception e) {
				e.getMessage();
			}
		 return user;
	}

	public List<User> findAll() {
		try {
		// TODO Auto-generated method stub
		return repository.findAll() ;
	}
		catch(Exception e) {
			e.getMessage();
		}
		return findAll();
		}
		
	public List<User> findByemployeeId(String employeeId) {
		try {
		// TODO Auto-generated method stub
		return (List<User>) repository.findByemployeeId(employeeId);
		}
		catch(Exception e) {
			e.getMessage();
		}
		return findByemployeeId(employeeId);
	}
	
	
	public  User UpdateUsers( User user)
		{
		try {
	User u =  repository.getByemployeeId(user.getEmployeeId());
	
	u.setLeaveStatus(user.getLeaveStatus());
	u.setLeavereason(user.getLeavereason());
	u.setEmployeeId(user.getEmployeeId());
	u.setFromDate(user.getFromDate());
	u.setToDate(user.getToDate());
   u.setNumberOfDays(user.getNumberOfDays());
   u.setLeaveType(user.getLeaveType());
	return repository.save(u);
		}catch(Exception e) {
			e.getMessage();
		}
		return user;
	}

	

	
	
	
	
	
	
	
	
}
	
	
	

