package com.arshaa.employmenttypes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.employmenttypes.entity.EmploymentType;
import com.arshaa.employmenttypes.repository.EmploymentTypeRepository;
import com.arshaa.employmenttypes.service.EmploymentTypeInterface;
import com.arshaa.employmenttypes.service.EmploymentTypeService;

@RequestMapping("/employmentType")
@RestController
@CrossOrigin("*")
public class EmploymentTypeController {


//	@Autowired
//	EmploymentTypeRepository repo;
	
	@Autowired(required=true)
	private EmploymentTypeInterface empServ;
	
	
	@PostMapping("/addEmploymentType")
	public ResponseEntity addEmploymentType(@RequestBody EmploymentType newEmptype) {
		return empServ.addEmploymentType(newEmptype);
	}
	
	@GetMapping("/getAllEmployments")
	public ResponseEntity getAllEmploymentType() {
		return empServ.getAllEmploymentType();
	}
	
	@PutMapping("/updateEmploymentTypeById/{employmentTypeId}")
	public ResponseEntity updateEmploymentTypeById(@PathVariable int employmentTypeId,@RequestBody EmploymentType newupdateType) {
		return empServ.updateEmploymentTypeById(employmentTypeId,newupdateType);
	}
	
	@DeleteMapping("/deleteEmploymentType/{employmentTypeId}")
	public ResponseEntity deleteEmploymentType(@PathVariable int employmentTypeId) {
		return empServ.deleteEmploymentType(employmentTypeId);
	}
}

