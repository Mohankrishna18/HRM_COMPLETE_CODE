package com.arshaa.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.model.DesignationName;

public interface EmployeeMasterRepository extends JpaRepository<EmployeeMaster,String>{
	//public ResponseEntity updateDesignationName(String employeeId,DesignationName name);


}
