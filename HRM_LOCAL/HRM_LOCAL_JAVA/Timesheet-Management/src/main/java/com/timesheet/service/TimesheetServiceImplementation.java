package com.timesheet.service;

import java.util.List;

import javax.ws.rs.core.Response;

import org.bouncycastle.asn1.ocsp.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.timesheet.entity.Timesheet;
import com.timesheet.repository.TimesheetRepository;

@Service
public class TimesheetServiceImplementation implements TimesheetService {
	
	@Autowired
 	private TimesheetRepository sheetRepo;
	
	@Override
	public ResponseEntity addTimesheetData(Timesheet t) {
       return new ResponseEntity(sheetRepo.save(t),HttpStatus.OK);
	}

//	public ResponseEntity<Timesheet> getAllTasks() {
//		Response r = new Response<>();
//		try {
//			List<Timesheet> employeeMasters = emRepo.findAll();
//			if (!employeeMasters.isEmpty()) {
//				r.setStatus(true);
//				r.setMessage(sConstants.GET_RESPONSE);
//				r.setData(employeeMasters);
//				return new ResponseEntity(r, HttpStatus.OK);
//			} else {
//				r.setStatus(false);
//				r.setMessage(sConstants.NO_ENTRIES_FOUND);
//
//				return new ResponseEntity(r, HttpStatus.OK);
//			}
//		} catch (Exception e) {
//			r.setStatus(true);
//			r.setMessage(sConstants.FAILURE_RESPONSE);
//			return new ResponseEntity(r, HttpStatus.OK);
//		}

	
//}
//public ResponseEntity<Timesheet> getAllTasks() {
//	Response r = new Response<>();
//	try {
//		List<Timesheet> employeeMasters = sheetRepo.findAll();
//		if (!employeeMasters.isEmpty()) {
//			r.setStatus(true);
//			r.setMessage(sConstants.GET_RESPONSE);
//			r.setData(employeeMasters);
//			return new ResponseEntity(r, HttpStatus.OK);
//		} else {
//			r.setStatus(false);
//			r.setMessage(sConstants.NO_ENTRIES_FOUND);
//
//			return new ResponseEntity(r, HttpStatus.OK);
//		}
//	} catch (Exception e) {
//		r.setStatus(true);
//		r.setMessage(sConstants.FAILURE_RESPONSE);
//		return new ResponseEntity(r, HttpStatus.OK);
//	}
//
}