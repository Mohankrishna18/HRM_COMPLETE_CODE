package com.arshaa.departments.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.arshaa.departments.entity.Departmentmaster;

public interface DepartmentService {

	
	public ResponseEntity saveData(Departmentmaster newDepartmentMaster);
}
