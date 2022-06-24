package com.attendance.service;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.attendance.entity.AttendanceLog;
import com.attendance.model.EmployeeName;
import com.attendance.model.Punchout;
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

		String url="http://empService/emp/getEmployeeNameByEmployeeId/";
		Response response=new Response();
		try {
			
			AttendanceLog newAttendance=new AttendanceLog();
			java.sql.Date tSqlDate = new java.sql.Date(attendance.getPunchin().getTime());
			newAttendance.setPunchin(tSqlDate);
			
			java.sql.Date tSqlDate1 = new java.sql.Date(attendance.getUpdatedOn().getTime());
			newAttendance.setUpdatedOn(tSqlDate);
			
			java.sql.Date tSqlDate2 = new java.sql.Date(attendance.getPunchinDate().getTime());
			newAttendance.setPunchinDate(tSqlDate);
			
			newAttendance.setStatus(true);
			//newAttendance.setPunchout("Not yet");
			
			newAttendance.setEmployeeId(attendance.getEmployeeId());
			
			//Rest template call to get employee name
			
			EmployeeName al=template.getForObject("http://empService/emp/getEmployeeNameByEmployeeId/" + attendance.getEmployeeId(),EmployeeName.class);
			newAttendance.setEmployeeFirstName(al.getEmployeeName());
			newAttendance.setUpdatedby(attendance.getUpdatedby());
			
			if(aRepo.existsByEmployeeIdAndPunchinDate(attendance.getEmployeeId(),attendance.getPunchinDate())==true)
			{
				response.setStatus(true);
				response.setMessage("PunchIn was already done today");
				return new ResponseEntity(response,HttpStatus.OK);
			}
				
			else {
				newAttendance.setStatus(true);
				AttendanceLog newAttendence2=aRepo.save(newAttendance);
				response.setStatus(true);
				response.setMessage("PunchIn Successfull");
				response.setData(newAttendence2);
				return new ResponseEntity(response,HttpStatus.OK);
			}
			
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

	@Override
	public ResponseEntity addpunchOut(Punchout attendance, String employeeId) {
		Response response=new Response();
		try {
			
			AttendanceLog newAttendance=aRepo.getByEmployeeId(employeeId);
			
			
		    //System.out.println("formattedDate"+formattedDate);

		    //Date d=new java.sql.Date(formattedDate);
			//java.sql.Date tSqlDate = new java.sql.Date(attendance.getPunchout().getTime());
		    
//		    Date date1=dateFormat.parse(formattedDate);  
//			System.out.println()
			
			
			//Generating punch out time
			Calendar cal = Calendar.getInstance();
			//System.out.println("cal"+cal);
		    Date date=cal.getTime();
		    DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
		    //System.out.println("date"+dateFormat);
		    String formattedDate=dateFormat.format(date);
			newAttendance.setPunchout(formattedDate);
			
			
			if(newAttendance.getStatus()==false)
			{	
				response.setStatus(true);
				response.setMessage("PunchOut was already done today");
				return new ResponseEntity(response,HttpStatus.OK);
				
			}
				
			else {

				newAttendance.setStatus(false);
				AttendanceLog newAttendence2=aRepo.save(newAttendance);
				
				/*=============================================
				Date date1=dateFormat.parse(newAttendence2.getPunchout());  
				Date date2=dateFormat.parse(newAttendance.getPunchin());  

				LocalDate punchIn = date1.toInstant()
						.atZone(ZoneId.systemDefault())
						.toLocalDate();
				LocalDate punchOut = newAttendence2.getPunchin().toInstant()
						.atZone(ZoneId.systemDefault())
						.toLocalDate();
				
				Period p=Period.between(12:26:46, 12:27:24);
				System.out.println("Period"+p);
				
				//double c=(int) ChronoUnit.DAYS.between(punchIn, punchOut);
				*/
//				Time t1=(Time) newAttendence2.getPunchin();
//				Date date1=dateFormat.parse(newAttendence2.getPunchout());  
//
//				Time t2= (Time) date1;
//				System.out.println("time"+t1);
//				System.out.println("time"+t2);date.getTime()
//				Long t=newAttendence2.getPunchin();
//				Timestamp ts=new Timestamp(t);

				Time tim=aRepo.getTime(newAttendence2.getEmployeeId());
				System.out.println("Duration"+tim);
				newAttendence2.setDuration(tim);
				aRepo.save(newAttendence2);
				response.setStatus(true);
				response.setMessage("PunchOut Successfull");
				response.setData(newAttendence2);
				return new ResponseEntity(response,HttpStatus.OK);

			}
			
		}
		catch(Exception e)
		{
			response.setStatus(false);
			response.setMessage(e.getMessage());
			return new ResponseEntity(e.getMessage(),HttpStatus.CREATED);
		}

}
}
