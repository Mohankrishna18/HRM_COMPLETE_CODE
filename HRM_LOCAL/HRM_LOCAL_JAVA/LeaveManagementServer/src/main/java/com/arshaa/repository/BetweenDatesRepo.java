package com.arshaa.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import com.arshaa.entity.User;

import com.arshaa.entity.BetweenDates;
@Repository
public interface BetweenDatesRepo extends JpaRepository<BetweenDates, Integer> {

	@Transactional
    @Modifying
       @Query ( value="delete  p from between_dates  p  left join employeeleaves e ON  e.leave_status='Rejected'where p.employeeleave_id=:employeeleaveId" ,nativeQuery=true)
       void   deleteDates(@Param("employeeleaveId")Integer employeeleaveId);

	List<BetweenDates> findByEmployeeId(String employeeId);
//	List<BetweenDates> findAllbetweenDatesAndleaveOrwfh(String employeeId, String leaveOrwfh);

	List<BetweenDates> findByEmployeeIdAndLeaveOrwfh(String employeeId, String leaveOrwfh);
	
BetweenDates findByEmployeeleaveId(Integer employeeleaveId);
	
	@Query(value="select count(employee_id) AS days from between_dates where month(between_dates.applied_date)=?1 and year(between_dates.applied_date)=?2 and leave_orwfh=?3 and department_name=?4 and employee_id=?5",nativeQuery=true)
    Integer findLeaveapplyingleavescountBYMonth(@Param("month") Integer month,@Param("year") Integer year,@Param("leave_orwfh") String leaveOrwfh,@Param("department_name") String departmentName,@Param("employee_id") String employeeId);
	@Query(value="select count(employee_id) AS days from between_dates where month(between_dates.applied_date)=?1 and year(between_dates.applied_date)=?2 and leave_orwfh=?3 and employee_id=?4",nativeQuery=true)
    Integer findLeaveapplyingleavescountBYMonthwithoutDept(@Param("month") Integer month,@Param("year") Integer year,@Param("leave_orwfh") String leaveOrwfh,@Param("employee_id") String employeeId);
//	@Query(value="select count(employee_id) AS days from between_dates where month(between_dates.applied_date)=?1 and year(between_dates.applied_date)=?2 ",nativeQuery=true)
//    Integer findcountBYMonth(@Param("month") Integer month,@Param("year") Integer year);
	
	
	@Query(value="select count(*) from between_dates where employee_id=?1 and leave_orwfh='L'and applied_date between ?2 and ?3 and leave_status='Approved'",nativeQuery=true)
	 int findLeavesCountBetWeenTwoDates(@Param("employee_id") String employeeId, @Param("fromDate") String fromDate, @Param("toDate") String toDate);
	
	List<BetweenDates> findByEmployeeleaveIdAndEmployeeId(int employeeleaveId, String employeeId);
	
}





