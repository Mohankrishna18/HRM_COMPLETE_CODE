package com.timesheet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.timesheet.entity.TimesheetApproval;

@Repository
public interface TimeSheetApprovalRepository extends JpaRepository<TimesheetApproval, Integer>{ 


public List getTimesheetApprovalByEmployeeId(String employeeId);

	public List<TimesheetApproval> getTaskDetailsByirm(String irm);
	public List<TimesheetApproval> getTimesheetApprovalByIrmAndStatus(String irm,String status);
	public List <TimesheetApproval>findTimesheetApprovalByIrmAndStatus(String irm, String status);
//	public TimesheetApproval	getTimesheetDataByEmployeeId(String employeeId);
	
	 @Query ( value= " Select timesheet_id,comments,employee_id,employee_name,irm,status,time_sheet_date,total_hours,updated_by from timesheet_approval WHERE EMPLOYEE_ID=:employeeId and YEAR(time_sheet_date)=:year AND month(time_sheet_date)=:month",nativeQuery=true)
	public List<TimesheetApproval> getTimesheetDataByEmployeeId(@Param("employeeId")String employeeId,@Param("year")int year,@Param("month")int month);



	//public ResponseEntity updateApprovalStatusByEmployeeId(String employeeId,TimesheetApproval timesheetUpdate);



	//public ResponseEntity getTimesheetApprovalByEmployeeId(String employeeId, TimesheetApproval timesheetUpdate);
	//public List getTimesheetDataBytimesheetId(int timesheetId);

	//public List<TimesheetApproval> getTimesheetDataBytimesheetId(int timesheetId);

	

	

}
