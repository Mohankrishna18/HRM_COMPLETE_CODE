package com.arshaa.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.emp.entity.EmployeeProfile;

public interface EmployeeProfileRepository extends JpaRepository<EmployeeProfile, String> {

	EmployeeProfile findByEmployeeId(String id);

	EmployeeProfile findByOnboardingId(String onboardingId);

}
