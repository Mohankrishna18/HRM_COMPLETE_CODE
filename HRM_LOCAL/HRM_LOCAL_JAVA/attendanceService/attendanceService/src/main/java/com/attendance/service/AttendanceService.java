package com.attendance.service;

import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.attendance.entity.AttendanceLog;
import com.attendance.model.Punchout;


public interface AttendanceService {

	public ResponseEntity addAttendance(AttendanceLog attendance);
	public ResponseEntity addpunchOut(Punchout attendance, String employeeId,Date punchinDate);

	public ResponseEntity updateAttendanceById(AttendanceLog attendance,int id);
	public ResponseEntity deleteAttendanceById(AttendanceLog attendance,int id);
	public ResponseEntity getAttendance();
    public ResponseEntity<List<AttendanceLog>>findAttendanceLogWithParticularMonth(int month);
	public ResponseEntity findAttendanceLogCountWithParticularMonth(int month, String employeeId);
	public ResponseEntity getAttendanceByEmployeeId(String employeeId);
}
