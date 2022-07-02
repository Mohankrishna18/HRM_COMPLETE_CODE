package com.arshaa.designation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.arshaa.designation.entity.Designationmaster;
import com.arshaa.designation.model.DesignationModal;

public interface DesignationInterface extends JpaRepository<Designationmaster,Integer>  {

	Designationmaster findByDesignationId(Integer designationId);

	List<Designationmaster> getAllByDepartmentId(int departmentId);
	
}
