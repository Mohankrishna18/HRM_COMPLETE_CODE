package com.arshaa.emp.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.emp.entity.ReportingManager;

public interface ReportingManagerService {
	public ResponseEntity addReportingManager(ReportingManager newRepotingmanager);
	public ResponseEntity getReportingManager();
	public ResponseEntity getEmployeeIdByReprtingManager(String projectManager);
}
