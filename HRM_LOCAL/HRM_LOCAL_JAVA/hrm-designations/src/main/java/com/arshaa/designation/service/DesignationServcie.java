package com.arshaa.designation.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.designation.entity.Designationmaster;
import com.arshaa.designation.model.DesignationModal;
import com.arshaa.designation.repository.DesignationInterface;

@Service
public class DesignationServcie {

	@Autowired
	DesignationInterface repository;

	@Autowired
	@Lazy
	private RestTemplate template;

	public ResponseEntity<Designationmaster> saveDesignationMaster(Designationmaster master) {
		Optional<Designationmaster> designation = repository.findByDepartmentNameAndDesignationName(master.getDepartmentName(), master.getDesignationName());
		if (designation.isPresent() ) {
			return new ResponseEntity<Designationmaster>(master, HttpStatus.NOT_ACCEPTABLE);
		}
		String depUrl="http://departments/dept/getDepartmentIdByName/";
		Date tupDate = new Date(master.getUpdatedOn().getTime());
		master.setUpdatedOn(tupDate);
		int departmentId=template.getForObject(depUrl+master.getDepartmentName(), Integer.class);
		System.out.println("departmentId"+departmentId);
		master.setDepartmentId(departmentId);
		repository.save(master);
		return new ResponseEntity<Designationmaster>(master, HttpStatus.OK);
	}
	
	public ResponseEntity getDesignationMasterByDepartmentId(int id)
	{
		try {
			
			List<Designationmaster> dm=repository.getAllByDepartmentId(id);
			return new ResponseEntity(dm, HttpStatus.OK);	
			}
		catch(Exception e){
			
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);	
		}
	}
	
	// changes for Dept in Hr
		public ResponseEntity getDesignationsMasterByDepartmentName(String departmentName) {
			{
				try {
					
					List<Designationmaster> dm=repository.getAllByDepartmentName(departmentName);
					return new ResponseEntity(dm, HttpStatus.OK);	
					}
				catch(Exception e){
					
					return new ResponseEntity(e.getMessage(), HttpStatus.OK);	
				}
			}
		}
}
