package com.timesheet.service;

import org.bouncycastle.asn1.ocsp.ResponseData;
import org.springframework.http.ResponseEntity;


import com.timesheet.entity.Timesheet;


public interface TimesheetService {
	
	public ResponseEntity addTimesheetData(Timesheet t);
//	public ResponseEntity<Timesheet> getAllTasks();

//	public ResponseEntity getAllTasks();
	
}
