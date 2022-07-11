package com.arshaa.hrm.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.hrm.entity.Holidaymanagement;
import com.arshaa.hrm.model.Response;
import com.arshaa.hrm.repository.HolidayRepository;





@Service
public class HolidayService {
	@Autowired
	HolidayRepository repo;

	
	public ResponseEntity  addHoliday(Holidaymanagement newholiday)
	{
		Response r=new Response();
		try {
			
			java.sql.Date tSqlDate = new java.sql.Date(newholiday.getUpdatedOn().getTime());
			newholiday.setUpdatedOn(tSqlDate);
			Holidaymanagement newDataHolidayManagement=repo.save(newholiday);
			   r.setStatus(true);
			   r.setMessage("Data added successfully");
			   r.setData(newDataHolidayManagement);
			   return new ResponseEntity(r,HttpStatus.OK);			   
		}
		catch (Exception e) {
			// TODO: handle exception
			
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r,HttpStatus.OK);
		}
	}
	
	public ResponseEntity  getHolidays()
	{
		Response r=new Response();
		try {
			
			
			List<Holidaymanagement> newDataHolidaymanagement=repo.findAll();
			   r.setStatus(true);
			   r.setMessage("Data Fetching");
			   r.setData(newDataHolidaymanagement);
			   return new ResponseEntity(r,HttpStatus.OK);			   
		}
		catch (Exception e) {
			// TODO: handle exception
			
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r,HttpStatus.OK);
		}
	}
	
	public ResponseEntity  updateHolidayById(Integer holidayId, Holidaymanagement newHolidaymaster)
	{
		Response r=new Response<>();
		try {
			Holidaymanagement master= repo.getById(holidayId);
			master.setHolidayTitle(newHolidaymaster.getHolidayTitle());
			master.setHolidayDate(newHolidaymaster.getHolidayDate());
//			master.setUpdatedBy(newHolidaymaster.getUpdatedBy());
//			master.setUpdatedOn(newHolidaymaster.getUpdatedOn());

			Holidaymanagement updatedmaster= repo.save(master);
			System.out.println(updatedmaster);
			   r.setStatus(true);
			   r.setMessage("Data updated successfully");
			   return new ResponseEntity(r,HttpStatus.OK);			   
		}
		catch (Exception e) {
			// TODO: handle exception
			
			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r,HttpStatus.OK);
		}
	}
	public ResponseEntity DeleteHoliday(Integer holidayId) {
		Response r=new Response<>();
		try {
		Holidaymanagement holiday= repo.getById(holidayId);

		repo.delete(holiday);
		r.setStatus(true);
		r.setMessage("Deleted successfully");
		return new ResponseEntity(r,HttpStatus.OK);
		}
		catch (Exception e) {
		// TODO: handle exception

		r.setStatus(false);
		r.setMessage(e.getMessage());
		return new ResponseEntity(r,HttpStatus.OK);
		}
	}
	public int calculateDuration(int year,int month,int date) throws Exception
	{
	List<Holidaymanagement> totalHolidaysOfMonth = null;
	try {
	totalHolidaysOfMonth = HolidayRepository.findHolidaymanagementWithParticularYearAndMonth(year, month,date);
	} catch (Exception e) {
	e.printStackTrace();
	}
	LocalDate monthStartDate = LocalDate.of(year, month,date );
	LocalDate monthEndDate = monthStartDate.plusMonths(1).minusDays(1);
	Date first = Date.from(monthStartDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
	Date last = Date.from(monthEndDate.atStartOfDay(ZoneId.systemDefault()).toInstant());

	return getWorkingDaysBetweenTwoDates(first, last) - totalHolidaysOfMonth.size();
	}



	public int getWorkingDaysBetweenTwoDates(Date startDate, Date endDate) throws Exception {


	List<Holidaymanagement> totalHolidaysOfMonth = null;

	DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
	try {
	totalHolidaysOfMonth = repo.findHolidaysBetweenTwoDays(df.format(startDate), df.format(endDate));
	//we can fetch holidays here
	} catch (Exception e) {
	throw new Exception("Unable to fetch holidays");
	}




	int workDays = getWeekDays(startDate, endDate, totalHolidaysOfMonth);



	return workDays;
	}


	private static int getWeekDays(Date startDate, Date endDate, List<Holidaymanagement> holidays) {
	DateFormat df = new SimpleDateFormat("yyyy-MM-dd");

	Set<String> holidaysMap = new HashSet<String>();
	for(Holidaymanagement h: holidays)
	holidaysMap.add(df.format(h.getHolidayDate()));

	Calendar startCal = Calendar.getInstance();
	startCal.setTime(startDate);



	Calendar endCal = Calendar.getInstance();
	endCal.setTime(endDate);



	int workDays = 0;

	if (startCal.getTimeInMillis() > endCal.getTimeInMillis()) {
	startCal.setTime(endDate);
	endCal.setTime(startDate);
	}



	do {
	Date current = startCal.getTime();
	String date = df.format(current);
	if (startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SATURDAY && startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SUNDAY && !holidaysMap.contains(date)) {
	++workDays;
	}
	startCal.add(Calendar.DAY_OF_MONTH, 1);
	} while (startCal.getTimeInMillis() <= endCal.getTimeInMillis()); //excluding end date
	//System.out.println(workDays);
	return workDays;
	}



	public HolidayService() {
		// TODO Auto-generated constructor stub
	}

}
