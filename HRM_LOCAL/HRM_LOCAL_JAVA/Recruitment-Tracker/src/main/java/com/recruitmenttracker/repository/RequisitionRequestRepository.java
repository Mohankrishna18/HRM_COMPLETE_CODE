package com.recruitmenttracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.JobsPerDepartment;

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
       
       @Query(value=" SELECT DATEDIFF(now(),request_initiated_date) AS ageing from requisition_requests   where requisition_id=?1 ", nativeQuery=true)
          Integer  getDateDiff(@Param("requisition_id")  String requisitionId);
       
//     jobsOpenPerDepartment 
      @Query(value= "select new com.recruitmenttracker.modal.JobsPerDepartment(r.departmentName as departmentName, count(jobTitle) as jobsOpen) from requisition_requests r where r.rrfStatus='Open' group by r.departmentName")  
       List<JobsPerDepartment> getJobsOpenByDepartmentName();

      
//    total/overall positions count  
      @Query(value="SELECT  sum(positions) FROM requisition_requests",nativeQuery=true)
      Long getCountOfPositions();
   
}