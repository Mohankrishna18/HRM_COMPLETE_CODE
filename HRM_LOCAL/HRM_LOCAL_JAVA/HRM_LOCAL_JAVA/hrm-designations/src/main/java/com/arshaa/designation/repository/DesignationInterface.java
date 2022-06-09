package com.arshaa.designation.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.arshaa.designation.entity.Designationmaster;

public interface DesignationInterface extends JpaRepository<Designationmaster,Integer>  {

	Designationmaster findByDesignationId(Integer designationId);

}
