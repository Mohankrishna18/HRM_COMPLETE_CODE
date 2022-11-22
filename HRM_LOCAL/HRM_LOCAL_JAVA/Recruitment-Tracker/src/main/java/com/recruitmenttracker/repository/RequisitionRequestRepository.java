package com.recruitmenttracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.recruitmenttracker.entity.RequisitionRequestEntity;

@Repository
public interface RequisitionRequestRepository extends JpaRepository<RequisitionRequestEntity, Long>{
	

    // GSDR Changes
   
        List<RequisitionRequestEntity> getByWorkflowStatus(String workflowStatus);

        RequisitionRequestEntity getByEmployeeId(String employeeId);

        RequisitionRequestEntity findByRrfId(Long rrfId);
       
        List<RequisitionRequestEntity> findByRrfStatus(String rrfStatus);
       
        RequisitionRequestEntity findByRequisitionId(String requisitionId);
       
        List<RequisitionRequestEntity> getByDepartmentName(String departmentName);
       
       @Query(value="select *, TIMESTAMPDIFF(day, raised_on,now()) AS diffDaysCount from requisition_requests ", nativeQuery = true)

       List<RequisitionRequestEntity> getDataWithAgingDays();
       
       @Query(value=" SELECT DATEDIFF(now(),raised_on) AS ageing from requisition_requests   where requisition_id=?1 ", nativeQuery=true)
          Integer  getDateDiff(@Param("requisition_id")  String requisitionId);
     
   
}