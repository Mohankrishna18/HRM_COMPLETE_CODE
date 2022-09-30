package com.timesheet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.timesheet.entity.TimesheetApproval;

@Repository
public interface TimeSheetApprovalRepository extends JpaRepository<TimesheetApproval, Integer>{ 


public List getTimesheetApprovalByEmployeeId(String employeeId);

	public List<TimesheetApproval> getTaskDetailsByirm(String irm);
	public TimesheetApproval	getTimesheetDataByEmployeeId(String employeeId);
	//public ResponseEntity updateApprovalStatusByEmployeeId(String employeeId,TimesheetApproval timesheetUpdate);



	//public ResponseEntity getTimesheetApprovalByEmployeeId(String employeeId, TimesheetApproval timesheetUpdate);
	//public List getTimesheetDataBytimesheetId(int timesheetId);

	//public List<TimesheetApproval> getTimesheetDataBytimesheetId(int timesheetId);

	

	

}
