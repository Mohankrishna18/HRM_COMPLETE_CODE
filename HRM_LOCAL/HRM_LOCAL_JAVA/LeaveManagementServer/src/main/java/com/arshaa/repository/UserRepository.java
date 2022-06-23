package com.arshaa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.arshaa.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
     User getByemployeeId(String employeeId);
     
//query for approve count
     @Query(value="select count(employee_id) from employeeleaves where employee_id=?1 and leave_status = 'approved'", nativeQuery=true)
     int findcountByapproveleavestatus(@Param("empid") String empid);
     
     
     //query to count remaining leaves

     @Query(value ="select(select no_of_days from leaveentitlement where leave_type = 'Annual')-IFNULL(sum(number_of_days),0) as remainig_total from employeeleaves h where h.employee_id =:employeeId and leave_status = 'Approved'",nativeQuery=true)
     int findNumberOfRemainingLeavesByEmployeeId(@Param("employeeId") String employeeId);





	Optional<User> findUserByemployeeId(String employeeId);

	List<User> findByemployeeId(String employeeId);

	//changes done by chandrika
	List<User> findUserByReportingManager(String reportingManager);
	void deleteByLeaveType(String leaveType);

	User getByEmployeeleaveId(Integer employeeleaveId);
	
	List<User> findByLeaveStatus(String leaveStatus);



	User deleteByemployeeleaveId(Integer employeeleaveId);
}
