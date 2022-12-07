package com.arshaa.emp.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;

@Repository
public interface EmployeeMasterRepository extends JpaRepository<EmployeeMaster,String>{
	//public ResponseEntity updateDesignationName(String employeeId,DesignationName name);

	Optional<List<EmployeeMaster>> getEmployeeMasterByReportingManager(String reportingManager);
		
	@Query(nativeQuery=true,value = "SELECT * FROM employeemaster as e WHERE e.band IN (:names)")   // 3. Spring JPA In cause using native query
    List<EmployeeMaster> findByBand(@Param("names") List<String> names);

	List<EmployeeMaster> getEmployeeMasterByEmployeeId(String employeeId);
	List<EmployeeMaster> getEmployeeMasterBySrm(String employeeId);
	List<EmployeeMaster> getEmployeeMasterByIrm(String employeeId);
	List<EmployeeMaster> getEmployeeMasterByBuh(String employeeId);	
	EmployeeMaster getEmployeeIdByfullName(String fullName);

	List<EmployeeMaster> getEmployeesByOnboardingStatus(String onboardingStatus); 
	List<EmployeeMaster> getEmployeesByDepartmentName(String departmentName); 
	
	EmployeeMaster getByEmployeeId(String employeeId);
	
	@Query(value="select * from employeemaster where month(date_of_joining) = EXTRACT(MONTH FROM CURRENT_DATE) and year(date_of_joining) = EXTRACT(YEAR FROM CURRENT_DATE)", nativeQuery=true)
	List<EmployeeMaster> findEmployeeMasterCountWithParticularMonth();
	
	@Query(value="select * from employeemaster where date_of_joining = CURRENT_DATE ", nativeQuery=true)
	List<EmployeeMaster> findEmployeeMasterCountWithParticularDate();
	
	List<EmployeeMaster> getBydepartmentName(String departmentName);   
//    List<EmployeeMaster> findAllByOrderByFullNameAscAndStatus(String status);
	
	List<EmployeeMaster> getActiveEmployeesByStatus(String status);
    EmployeeMaster getDateOfJoiningByEmployeeId(String employeeId);
    List<EmployeeMaster> findByStatusAndProjectNameIsNotOrProjectNameIsNull(String status, String projectName);
    
    @Query(value= "select * from employeemaster where status=:status and project_allocation<:value and (project_name<> :projectName or project_name is null)", nativeQuery=true)
    List<EmployeeMaster> findByStatusEqualsAndProjectAllocationLessThanAndProjectNameIsNullOrIsNotEquals(@Param("status") String status, @Param("value") Integer value, @Param("projectName") String projectName);
    
    List<EmployeeMaster> findByDateOfJoiningBefore(Date date);
    List<EmployeeMaster> findByDateOfJoiningBeforeAndDepartmentName(Date date,String dept);
    
    


}