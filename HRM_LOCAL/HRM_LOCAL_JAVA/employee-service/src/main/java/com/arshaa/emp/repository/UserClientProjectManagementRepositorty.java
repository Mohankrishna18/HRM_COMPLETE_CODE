package com.arshaa.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.emp.entity.ReportingManager;
import com.arshaa.emp.entity.UserClientProjectManagement;

public interface UserClientProjectManagementRepositorty extends JpaRepository<UserClientProjectManagement,Integer>{

	UserClientProjectManagement getByOnboardingId(String onboardingId);
	UserClientProjectManagement getByEmployeeId(String employeeId);
}
