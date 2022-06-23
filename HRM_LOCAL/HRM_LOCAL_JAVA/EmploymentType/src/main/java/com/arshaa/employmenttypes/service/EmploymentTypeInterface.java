package com.arshaa.employmenttypes.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.employmenttypes.entity.EmploymentType;

public interface EmploymentTypeInterface {

	public ResponseEntity addEmploymentType(EmploymentType newEmploymentType);

	public ResponseEntity getAllEmploymentType();

	public ResponseEntity updateEmploymentTypeById(int employmentTypeId, EmploymentType newupdateType);

	public ResponseEntity deleteEmploymentType(int employmentTypeId);
	
	

}
