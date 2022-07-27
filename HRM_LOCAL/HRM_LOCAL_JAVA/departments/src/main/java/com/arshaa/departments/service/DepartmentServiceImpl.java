package com.arshaa.departments.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.departments.entity.Departmentmaster;
import com.arshaa.departments.model.DepartmentResponse;
import com.arshaa.departments.model.EmployeeName;
import com.arshaa.departments.repository.DepartmentInterface;

@Service
public class DepartmentServiceImpl  implements DepartmentService{

	@Autowired
	DepartmentInterface repository;
	
	@Autowired
	@Lazy
	private RestTemplate template;


	@Override
	public ResponseEntity saveData(Departmentmaster newDepartmentMaster) {
      String mUrl="http://empService/emp/getEmployeeNameByEmployeeId/";
		List <DepartmentResponse> response=new ArrayList<>();	
		DepartmentResponse d=new DepartmentResponse();
		EmployeeName name=template.getForObject(mUrl+newDepartmentMaster.getBusinessUnitHead(), EmployeeName.class);
		newDepartmentMaster.setBusinessUnitHeadName(name.getEmployeeName());
		Departmentmaster data=repository.save(newDepartmentMaster);
		d.setStatus(true);
		d.setMessage("Successfully added");
		return new ResponseEntity(d,HttpStatus.OK);
	}

	@Override
	public int getDepartmentIdByDepartmentName(String departmentName) {

				Departmentmaster getDep=repository.getByDepartmentName(departmentName);
				
				
			return (getDep.getDepartmentId());
	}
	

	

}


