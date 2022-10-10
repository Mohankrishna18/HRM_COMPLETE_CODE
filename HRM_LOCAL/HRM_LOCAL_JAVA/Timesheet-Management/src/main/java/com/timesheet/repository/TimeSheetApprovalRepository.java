package com.timesheet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
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
	public TimesheetApproval	getTimesheetDataByEmployeeId(String employeeId);
	//public ResponseEntity updateApprovalStatusByEmployeeId(String employeeId,TimesheetApproval timesheetUpdate);



	//public ResponseEntity getTimesheetApprovalByEmployeeId(String employeeId, TimesheetApproval timesheetUpdate);
	//public List getTimesheetDataBytimesheetId(int timesheetId);

	//public List<TimesheetApproval> getTimesheetDataBytimesheetId(int timesheetId);

	

	

}
