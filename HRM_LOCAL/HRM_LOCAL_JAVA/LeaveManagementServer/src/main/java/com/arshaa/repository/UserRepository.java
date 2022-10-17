package com.arshaa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.arshaa.entity.BetweenDates;
import com.arshaa.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
     User getByemployeeId(String employeeId);
     
//query for approve count
     @Query(value="select count(employee_id) from employeeleaves where employee_id=?1 and leave_status = 'approved'", nativeQuery=true)
     int findcountByapproveleavestatus(@Param("empid") String empid);
     
     
     //query to count remaining leaves

     @Query(value ="select(select no_of_days from leaveentitlement where leave_type = 'Annual')-IFNULL(sum(number_of_days),0) as remainig_total from employeeleaves h where h.employee_id =:employeeId and leave_status = 'Approved'",nativeQuery=true)
     int findNumberOfRemainingLeavesByEmployeeId(@Param("employeeId") String employeeId);

     @Query ( value= "select sum(h.`number_of_days`) as total from employeeleaves h WHERE h.`leave_status` IN ('Approved','Pending') and h.`employee_id`=:employeeId GROUP BY MONTH(curdate())",nativeQuery=true)
     int findapplyingleavescount(@Param("employeeId")String employeeId);
     
     @Query ( value= "select sum(h.`number_of_days`) as total from employeeleaves h WHERE h.`leave_orwfh` IN ('L') and h.`employee_id`=:employeeId GROUP BY MONTH(curdate())",nativeQuery=true)
     int findLeaveapplyingleavescount(@Param("employeeId")String employeeId);

     @Query ( value= "select sum(h.`number_of_days`) as total from employeeleaves h WHERE h.`leave_orwfh` IN ('W') and h.`employee_id`=:employeeId GROUP BY MONTH(curdate())",nativeQuery=true)
     int findWFHapplyingleavescount(@Param("employeeId")String employeeId);



	Optional<User> findUserByemployeeId(String employeeId);

	List<User> findByemployeeId(String employeeId);

	//changes done by chandrika
	List<User> findUserByIrmId(String irmId);
	void deleteByLeaveType(String leaveType);

	User getByEmployeeleaveId(Integer employeeleaveId);
	
	List<User> findByLeaveStatus(String leaveStatus);



	User deleteByemployeeleaveId(Integer employeeleaveId);

	List<User> findUserBySrmId(String srmId);
	List<User> findEmployeePendingLeavesCountByLeaveStatus(String leaveStatus);



    List<User> findEmployeeLeavesLeaveStatusByLeaveStatus(String leaveStatus);
    List<User> findByleaveOrwfhAndEmployeeId(String leaveOrwfh, String employeeId);

	List<User> findByEmployeeIdAndLeaveOrwfh(String employeeId, String leaveOrwfh);
}
