package com.arshaa.hrm.service;

import java.util.List;

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

	public HolidayService() {
		// TODO Auto-generated constructor stub
	}

}
