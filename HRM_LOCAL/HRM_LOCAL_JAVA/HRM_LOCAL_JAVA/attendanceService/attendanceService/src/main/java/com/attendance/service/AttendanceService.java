package com.attendance.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.attendance.entity.AttendanceLog;


public interface AttendanceService {

	public ResponseEntity addAttendance(AttendanceLog attendance);
	public ResponseEntity updateAttendanceById(AttendanceLog attendance,int id);
	public ResponseEntity deleteAttendanceById(AttendanceLog attendance,int id);
	public ResponseEntity getAttendance();
    public ResponseEntity<List<AttendanceLog>>findAttendanceLogWithParticularMonth(int month);
	public ResponseEntity findAttendanceLogCountWithParticularMonth(int month, String employeeId);

}
