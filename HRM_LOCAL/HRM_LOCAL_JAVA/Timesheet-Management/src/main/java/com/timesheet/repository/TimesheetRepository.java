package com.timesheet.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.timesheet.entity.TimesheetEmployee;


@Repository
public interface TimesheetRepository extends JpaRepository<TimesheetEmployee, Integer>{
	
	public List <TimesheetEmployee>getTasksByTaskId(int taskId);
	public List <TimesheetEmployee>getTaskDetailsByemployeeId(String employeeId);
	
	
//	
//	@Query(value="SELECT SUM(actual_hours) FROM timesheet_employee WHERE timeSheetDate=:timeSheetDate", nativeQuery=true)
//    int getsomeOfTotalHoursByTimesheetDate(@Param("timeSheetDate") Date timeSheetDate);

}
