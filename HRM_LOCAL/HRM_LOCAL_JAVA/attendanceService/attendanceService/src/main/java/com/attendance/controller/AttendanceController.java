package com.attendance.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.entity.AttendanceLog;
import com.attendance.model.Punchout;
import com.attendance.service.AttendanceService;

@CrossOrigin("*")
@RestController
@RequestMapping("/attendance")
public class AttendanceController {

	@Autowired
	AttendanceService aServ;
	
	@PostMapping("/employeeAttendancePunchIn")
	public ResponseEntity addAttendance(@RequestBody AttendanceLog attendance)
	{
		return aServ.addAttendance(attendance);
	}

	
	@PutMapping("/addPunchOut/{employeeId}")
	public ResponseEntity addpunchOut(@RequestBody Punchout attendance,@PathVariable String employeeId, @RequestParam("date") @DateTimeFormat(pattern="dd-MM-YYYY")  Date punchinDate) {
    
		return aServ.addpunchOut(attendance, employeeId,punchinDate);
	}


	@GetMapping("/getAttendanceLogByMonth/{month}")
    public ResponseEntity<List<AttendanceLog>>findAttendanceLogWithParticularMonth(@PathVariable int month)
    {
    	return aServ.findAttendanceLogWithParticularMonth(month);
    }
	
	@GetMapping("/getAttendanceLogCountByMonth/{month}/{employeeId}")
    public ResponseEntity<List<AttendanceLog>>findAttendanceLogCountWithParticularMonth(@PathVariable int month, @PathVariable String employeeId)
    {
    	return aServ.findAttendanceLogCountWithParticularMonth(month, employeeId);
    }
	
	@GetMapping("/getAttendance")
	public ResponseEntity getAttendance() {
		return aServ.getAttendance();
	}
	
	@GetMapping("/getAttendance/{employeeId}")
	public ResponseEntity getAttendanceByEmployeeId(@PathVariable String employeeId) {
		
		return aServ.getAttendanceByEmployeeId(employeeId);
	}
	
}
