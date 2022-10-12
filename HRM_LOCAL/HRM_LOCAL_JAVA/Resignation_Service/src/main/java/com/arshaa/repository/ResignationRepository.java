package com.arshaa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.entity.Resignation;


@Repository
public interface ResignationRepository extends JpaRepository<Resignation,Integer>
{
	List<Resignation> getByStatus(String status);

	Resignation getByEmployeeId(String employeeId);
	List<Resignation> getStatusByEmployeeId(String employeeId);	
	

}
