package com.arshaa.departments.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.arshaa.departments.entity.Departmentmaster;
public interface DepartmentService {

	
	public ResponseEntity saveData(Departmentmaster newDepartmentMaster);
	public int getDepartmentIdByDepartmentName(String departmentName);
	public ResponseEntity getBUHIDfromDepartmentName(String departmentName);
	public ResponseEntity getBuheadNameByDepartmentName(String departmentName);
	public ResponseEntity getBuheadIdByDepartmentName(String departmentName);

    ResponseEntity getBuheadNameByEmployeeName(String employeeName);

}
