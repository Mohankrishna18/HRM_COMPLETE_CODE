package com.arshaa.urp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.urp.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

	Users getByEmployeeId(String employeeId);
	
	Boolean existsByEmployeeId(String employeeId);
	
}
