package com.arshaa.departments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.departments.entity.Departmentmaster;

public interface DepartmentInterface extends JpaRepository<Departmentmaster,Integer> {

	

	public Departmentmaster findByDepartmentId(Integer departmentId);

}
