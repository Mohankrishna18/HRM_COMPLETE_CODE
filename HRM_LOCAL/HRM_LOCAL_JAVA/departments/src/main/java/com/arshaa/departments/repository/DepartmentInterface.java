package com.arshaa.departments.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.departments.entity.Departmentmaster;

@Repository
public interface DepartmentInterface extends JpaRepository<Departmentmaster,Integer> {

	

	public Departmentmaster findByDepartmentId(Integer departmentId);

	Departmentmaster getByDepartmentName(String departmentName);
	
	Boolean existsByDepartmentName(String departmentName);
	
	Departmentmaster getByBusinessUnitHeadName(String businessUnitHeadName);
	//changes for Dept in Hr
	public Departmentmaster findByDepartmentName(String departmentName);
}