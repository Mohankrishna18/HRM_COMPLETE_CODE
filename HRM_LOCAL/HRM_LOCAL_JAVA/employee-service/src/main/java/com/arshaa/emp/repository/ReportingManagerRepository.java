package com.arshaa.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.emp.entity.ReportingManager;

public interface ReportingManagerRepository extends JpaRepository<ReportingManager,Integer>{
	
	ReportingManager getEmployeeIdByProjectManager(String projectManager);

}
