package com.recruitmenttracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.recruitmenttracker.entity.RequisitionRequestEntity;
@Repository
public interface RequisitionRequestRepository extends JpaRepository<RequisitionRequestEntity, Long>{
	

	// GSDR Changes
	
		List<RequisitionRequestEntity> getByWorkflowStatus(String workflowStatus);

		RequisitionRequestEntity getByEmployeeId(String employeeId);

		RequisitionRequestEntity findByRrfId(Long rrfId);
		
	    List<RequisitionRequestEntity> findByRrfStatus(String rrfStatus);
	    
	    RequisitionRequestEntity findByRequisitionId(String requisitionId);
}
