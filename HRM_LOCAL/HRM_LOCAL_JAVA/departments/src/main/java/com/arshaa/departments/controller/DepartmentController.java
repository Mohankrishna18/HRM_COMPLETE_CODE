package com.arshaa.departments.controller;

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

import com.arshaa.departments.entity.Departmentmaster;
import com.arshaa.departments.repository.DepartmentInterface;
import com.arshaa.departments.service.DepartmentService;

@RequestMapping("/dept")
@RestController
@CrossOrigin("*")
public class DepartmentController {

	@Autowired
	private DepartmentInterface repo;
	@Autowired
	private DepartmentService serv;

	@PostMapping("/postDepartmentMaster")
	public ResponseEntity saveData(@RequestBody Departmentmaster newDepartmentMaster) {
		return serv.saveData(newDepartmentMaster);
	}

//get call
	@GetMapping("/getAllDepartments")
	public List<Departmentmaster> getAllDepartments() {
		return repo.findAll();
	}

	@PutMapping("/update/{departmentId}")
	public Departmentmaster updateDepartmentById(@PathVariable Integer departmentId,
			@RequestBody Departmentmaster newDepartmentMaster) {
		Departmentmaster dm = repo.findByDepartmentId(departmentId);
		dm.setDepartmentName(newDepartmentMaster.getDepartmentName());
		return repo.save(dm);
	}

	@DeleteMapping("/deleteDepartment/{departmentId}")
	public String deleteDepartmentById(@PathVariable Integer departmentId) {
		Departmentmaster dm = repo.findByDepartmentId(departmentId);
		repo.delete(dm);
		return "Deleted Successfully";
	}
	
	@GetMapping("/getDepartmentIdByName/{departmentName}")
	public int getDepartmentIdByDepartmentName(@PathVariable String departmentName) {
     return serv.getDepartmentIdByDepartmentName(departmentName);

	}
	
	@GetMapping("/getDepartmentNameById/{departmentId}")
	public String getDepartmentNameById(@PathVariable int departmentId)
	{
		Departmentmaster dm = repo.findByDepartmentId(departmentId);

		return dm.getDepartmentName();
	}
}