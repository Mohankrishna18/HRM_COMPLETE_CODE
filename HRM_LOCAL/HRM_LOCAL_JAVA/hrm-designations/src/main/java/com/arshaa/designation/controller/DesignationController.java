package com.arshaa.designation.controller;

import java.util.List;

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

import com.arshaa.designation.entity.Designationmaster;
import com.arshaa.designation.repository.DesignationInterface;
import com.arshaa.designation.service.DesignationServcie;

@RequestMapping("/designation")
@RestController
@CrossOrigin("*")
public class DesignationController {

	public DesignationController() {
		// TODO Auto-generated constructor stub
	}

	@Autowired(required = true)
	private DesignationServcie service;

	@Autowired
	private DesignationInterface repo;

	@PostMapping("/postDesignationMaster")
	public ResponseEntity<Designationmaster> saveData(@RequestBody Designationmaster newDesignationMaster) {
		return service.saveDesignationMaster(newDesignationMaster);
	}

	@GetMapping("/getAllDesignations")
	public List<Designationmaster> getAllDesignations() {
		return repo.findAll();
	}

	@DeleteMapping("/deleteDesignation/{designationId}")
	public String deleteDesignationById(@PathVariable Integer designationId) {
		Designationmaster dm = repo.findByDesignationId(designationId);
		repo.delete(dm);
		return "Deleted Successfully";
	}

	@PutMapping("/updateDesignations/{designationId}")
	public Designationmaster updateDesignationById(@PathVariable Integer designationId,
			@RequestBody Designationmaster master) {
		Designationmaster dm = repo.findByDesignationId(designationId);
		dm.setDesignationName(master.getDesignationName());
//System.out.println(master.getDepartmentName());
//System.out.println(master.getDesignationName());
		dm.setDepartmentName(master.getDepartmentName());
		return repo.save(dm);
	}
	
	@GetMapping("/getDesignationByDepartment/{id}")
	public ResponseEntity getDesignationMasterByDepartmentId(@PathVariable int id)
	{
		return service.getDesignationMasterByDepartmentId(id);
	}
	
	//changes in Dept for HR
		@GetMapping("/getDesignationsByDepartment/{departmentName}")
		public ResponseEntity getDesignationsMasterByDepartmentName(@PathVariable String departmentName)
		{
			return service.getDesignationsMasterByDepartmentName(departmentName);
		}

}
