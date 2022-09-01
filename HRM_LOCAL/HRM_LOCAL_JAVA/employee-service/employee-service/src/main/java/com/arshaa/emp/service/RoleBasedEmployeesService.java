package com.arshaa.emp.service;

import org.springframework.http.ResponseEntity;

public interface RoleBasedEmployeesService {
	
	public ResponseEntity getRoleBasedEmployeesByEmployeeId(String employeeId);
}
