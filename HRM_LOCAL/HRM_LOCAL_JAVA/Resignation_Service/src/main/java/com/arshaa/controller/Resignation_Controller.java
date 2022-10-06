package com.arshaa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.entity.Resignation;
import com.arshaa.service.ResignationService;

@RestController
@RequestMapping("/resignation")
public class Resignation_Controller {
	
	@Autowired(required=true)
	private ResignationService resignationService;
	
	@PostMapping("/resignationApplied")
	public ResponseEntity createResignation(@RequestBody Resignation resignation){
		
		return new ResponseEntity(resignationService.createResignation(resignation),HttpStatus.OK);
	}
	
	@GetMapping("/getAllResignation/{status}")
	public ResponseEntity getByStatus(@PathVariable String status) {
		return new ResponseEntity(resignationService.getByStatus(status),HttpStatus.OK);
	}
	
	@PutMapping("/modifyResignationStatus/{employeeId}/{userType}")
	public ResponseEntity modifyResignationStatus(@RequestBody Resignation resignation, @PathVariable String employeeId, @PathVariable String userType)
	{
		return new ResponseEntity(resignationService.modifyResignationStatus(resignation, employeeId, userType),HttpStatus.OK);
	}
	
	@PutMapping("/rejectResignation/{employeeId}/{userType}")
	public ResponseEntity rejectResignation(@RequestBody Resignation resignation, @PathVariable String employeeId, @PathVariable String userType)
	{
		return new ResponseEntity(resignationService.rejectResignation(resignation,employeeId,userType),HttpStatus.OK);
	}

}