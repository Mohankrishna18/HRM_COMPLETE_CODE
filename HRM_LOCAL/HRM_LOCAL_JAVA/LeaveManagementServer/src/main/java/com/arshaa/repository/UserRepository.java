package com.arshaa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
     User getByemployeeId(String employeeId);

	Optional<User> findUserByemployeeId(String employeeId);

	List<User> findByemployeeId(String employeeId);

	//changes done by chandrika
	List<User> findUserByReportingManager(String reportingManager);
	void deleteByLeaveType(String leaveType);

	User getByEmployeeleaveId(Integer employeeleaveId);
	
	List<User> findByLeaveStatus(String leaveStatus);



	User deleteByemployeeleaveId(Integer employeeleaveId);
}
