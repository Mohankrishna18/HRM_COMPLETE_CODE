package com.attendance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.attendance.entity.AttendanceLog;
import com.attendance.model.EmployeeName;
import com.attendance.model.Response;
import com.attendance.repository.AttendanceRepo;

@Service
public class AttendanceServiceImpl implements AttendanceService{
	
	@Autowired
	private AttendanceRepo aRepo;
	
	@Autowired
	@Lazy
	private RestTemplate template;

	@Override
	public ResponseEntity addAttendance(AttendanceLog attendance) {

		String url="http://attendanceService/emp/getEmployeeNameByEmployeeId/";
		Response response=new Response();
		try {
			java.sql.Date tSqlDate = new java.sql.Date(attendance.getPunchIn().getTime());
			attendance.setPunchIn(tSqlDate);
		
			EmployeeName al=template.getForObject("http://empService/emp/getEmployeeNameByEmployeeId/" + attendance.getEmployeeId(),EmployeeName.class);
			attendance.setEmployeeFirstName(al.getEmployeeName());	
			AttendanceLog newAttendence=aRepo.save(attendance);
			response.setStatus(true);
			response.setMessage("PunchIn Successfull");
			response.setData(newAttendence);
			
			return new ResponseEntity(response,HttpStatus.OK);
		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage(e.getMessage());
			return new ResponseEntity(response,HttpStatus.CREATED);
		}
	}

	@Override
	public ResponseEntity updateAttendanceById(AttendanceLog attendance, int id) {

		return null;
	}

	@Override
	public ResponseEntity deleteAttendanceById(AttendanceLog attendance, int id) {

		Response response=new Response();

		try {
			AttendanceLog getData=aRepo.getById(id);
			if(!getData.equals(null))
			{
				aRepo.delete(getData);
				response.setStatus(true);
				response.setMessage("Deleted Successfully");
				return new ResponseEntity<>(response,HttpStatus.OK);

			}
			else {
				response.setStatus(false);
				response.setMessage("Data not found with this id");
				return new ResponseEntity<>(response,HttpStatus.OK);

			}
		}
		catch (Exception e) {
			response.setStatus(false);
			response.setMessage("Something went wrong");
			return new ResponseEntity<>(response,HttpStatus.OK);

		}
	}

	@Override
	public ResponseEntity getAttendance() {

		Response response=new Response();
		try {
			List<AttendanceLog> getAttendance=aRepo.findAll();
			if(!getAttendance.isEmpty())
			{
				response.setStatus(true);
				response.setMessage("Fetching Data");
				response.setData(getAttendance);
				return new ResponseEntity<>(response,HttpStatus.OK);
			}
			else {
				response.setStatus(false);
				response.setMessage("Data not Found");
				return new ResponseEntity<>(response,HttpStatus.OK);
			}
		}
		catch (Exception e) {
            response.setStatus(false);
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response,HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity<List<AttendanceLog>> findAttendanceLogWithParticularMonth(int month) {

		Response response=new Response();
		try {
			List<AttendanceLog> getLog=aRepo.findAttendanceLogWithParticularMonth(month);
			if(!getLog.isEmpty())
			{
				response.setStatus(true);
				response.setMessage("Data Fetching");
				response.setData(getLog);
				return new ResponseEntity(response,HttpStatus.OK);
			}
			else {
				response.setStatus(false);
				response.setMessage("Data not found in this month");
				return new ResponseEntity(response,HttpStatus.OK);
			}
		}
		catch (Exception e) {

			response.setStatus(false);
			response.setMessage("Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);

		}
	}

	@Override
	public ResponseEntity findAttendanceLogCountWithParticularMonth(int month, String employeeId) {
		Response response=new Response();
		try {
			int getLog=aRepo.findAttendanceLogCountWithParticularMonth(month,employeeId);
			if(getLog!=0)
			{
				response.setStatus(true);
				response.setMessage("Data Fetching");
				response.setData(getLog);
				return new ResponseEntity(response,HttpStatus.OK);
			}
			else {
				response.setStatus(false);
				response.setMessage("Data not found in this month");
				return new ResponseEntity(response,HttpStatus.OK);
			}
		}
		catch (Exception e) {

			response.setStatus(false);
			response.setMessage("Something went wrong");
			return new ResponseEntity(response,HttpStatus.OK);

		}
		}

}
