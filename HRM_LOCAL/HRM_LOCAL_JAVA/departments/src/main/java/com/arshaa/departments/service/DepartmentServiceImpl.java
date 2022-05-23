package com.arshaa.departments.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.arshaa.departments.entity.Departmentmaster;
import com.arshaa.departments.model.DepartmentResponse;
import com.arshaa.departments.repository.DepartmentInterface;

public class DepartmentServiceImpl  implements DepartmentService{

	@Autowired
	DepartmentInterface repository;

	@Override
	public ResponseEntity saveData(Departmentmaster newDepartmentMaster) {

		List <DepartmentResponse> response=new ArrayList<>();	
		DepartmentResponse d=new DepartmentResponse();
		Departmentmaster data=repository.save(newDepartmentMaster);
		d.setStatus(true);
		d.setMessage("Successfully added");
		return new ResponseEntity(d,HttpStatus.OK);
	}
	

	

}
