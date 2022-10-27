package com.timesheet.service;

import java.util.Date;
import java.util.List;

import org.bouncycastle.asn1.ocsp.ResponseData;

import org.springframework.http.ResponseEntity;

import com.timesheet.entity.TimesheetApproval;
import com.timesheet.entity.TimesheetEmployee;




public interface TimesheetService {
	
	public List<TimesheetEmployee> addTimesheetData(List<TimesheetEmployee> t);
//	public ResponseEntity<Timesheet> getAllTasks();
//	public ResponseEntity getRemainingHours();
//	public int getRemainingHours(int estimatedHours ,int actualHours);
//	int getRemainingHours(TimesheetEmployee timesheet);
//	public int getRemaining(Date timesheetDate,int taskId);
	public List<TimesheetEmployee> getTasksByTaskId(int taskId);
	public ResponseEntity addTimeSheetApprovalData(TimesheetApproval ta);

	//public List <TimesheetApproval>getTimesheetApprovalByEmployeeId(String employeeId);
	public List <TimesheetEmployee>getTaskDetailsByemployeeId(String employeeId);
	public List<TimesheetApproval> getTaskDetailsByirm(String irm);
	//public Object updateTasks(String employeeId, TimesheetApproval taskUpdate);
	//public ResponseEntity getTimesheetApprovalByEmployeeId(String employeeId, TimesheetApproval timesheetUpdate);
	public List <TimesheetApproval> getTimesheetApprovalByTimesheetId(int timesheetId);
	
	public TimesheetApproval updateTimesheet(int timesheetId ,String employeeId, TimesheetApproval timesheetUpdate, String userType);

	
//    double findtotalOfActualHours(@Param("taskId") int taskId);
//	public double calculateRemainingHours(int id,double  actualHours);


//	public ResponseEntity getAllTasks();
	
}
