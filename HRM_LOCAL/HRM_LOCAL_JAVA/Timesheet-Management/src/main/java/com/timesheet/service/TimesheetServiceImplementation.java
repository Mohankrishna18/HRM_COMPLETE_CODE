package com.timesheet.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.core.Response;

import org.bouncycastle.asn1.ocsp.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.timesheet.entity.TimesheetApproval;
import com.timesheet.entity.TimesheetEmployee;
import com.timesheet.modal.EmailTemplate;
import com.timesheet.modal.RemainingHours;
import com.timesheet.modal.TimeSheetResponse;
import com.timesheet.repository.TimeSheetApprovalRepository;
import com.timesheet.repository.TimesheetRepository;


@Service






 class TimesheetServiceImplementation implements TimesheetService {
	
	@Autowired
 	private TimesheetRepository sheetRepo;
	
	@Autowired
	private TimeSheetApprovalRepository tRepo;
	
	@Autowired
    private RestTemplate template;
	
	public static final String preEmailURL = "http://emailService/mail/sendmail";
	
	
	
//	
//	
	@Override
public List<TimesheetEmployee> addTimesheetData(List<TimesheetEmployee> t) {
      return sheetRepo.saveAll(t);
	}



	
		 	
	
	
	//remaining hours logic

//
//	public int getRemainingHours(int estimatedHours, int actualHours) {
////		TimesheetEmployee t1=new TimesheetEmployee();
//////		
////		int actual=t1.getActualHours();
////		System.out.println(estimatedHours);
//		
////		int  estimate=t1.getEstimatedHours();
////	int a=estimatedHours;
////		int b=actualHours;
////	
////		int remaining=estimate-actual;
////		if(remaining>0) {
////			remaining=remaining-actual;
////		}
//	    int remaining=0;
////		System.out.println(remaining);
//		System.out.println(estimatedHours);
//		System.out.println(actualHours);
//		
//		{
//			remaining = estimatedHours - actualHours;
//		}
//		 if(remaining>0)
//		{
//			remaining = remaining-actualHours;
//		}
////		
//		return remaining;
////	
//		
//		
//	
//	}

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








//	public int getRemaining(Date timesheetDate, int taskId) {
//		TimesheetEmployee t1=new TimesheetEmployee();
////		
//		int actual=t1.getActualHours();
//		int  estimate=t1.getEstimatedHours();
//		Date date=t1.getTimeSheetDate();
//		int id=t1.getTaskId();
//		int remainingHours;
//		
//		return  remainingHours=t1.getEstimatedHours()-t1.getActualHours();
//
//		
//		// TODO Auto-generated method stub
//		
//	}







	@Override
	public List getTasksByTaskId(int taskId) {
		return  sheetRepo.getTasksByTaskId(taskId);
	}
	
//	@Override
//	public List <TimesheetApproval> getTimesheetApprovalByTimesheetId(int timesheetId) {
//		return  tRepo.getTimesheetApprovalByTimesheetId(timesheetId);
//	}

	
	






	
				@Override
				public ResponseEntity addTimeSheetApprovalData(TimesheetApproval ta) {
					TimeSheetResponse r = new TimeSheetResponse <>();
					try {
						TimesheetApproval addTimesheetData = tRepo.save(ta);
						
						EmailTemplate mailTemp=new EmailTemplate();
						Map<String,String> map=new HashMap();

						mailTemp.setEmailType("TIMESHEET_APPLY");
						map.put("employeeName","Murali");
						map.put("email","muralikrishna.miriyala@arshaa.com");
						mailTemp.setMap(map);
			            template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
			            
						r.setStatus(true);
						r.setMessage("Data added successfully");
						r.setData(addTimesheetData);
						return new ResponseEntity(r, HttpStatus.OK);
					} catch (Exception e) {

						r.setStatus(false);
						r.setMessage(e.getMessage());
						return new ResponseEntity(r, HttpStatus.OK);
					}
				}













				@Override
				public List<TimesheetEmployee> getTaskDetailsByemployeeId(String employeeId) {
					// TODO Auto-generated method stub
					return getTaskDetailsByemployeeId(employeeId);
				}







				@Override
				public List<TimesheetApproval> getTaskDetailsByirm(String irm) {
					// TODO Auto-generated method stub
					return getTaskDetailsByirm(irm);
				}







				@Override
				public List<TimesheetApproval> getTimesheetApprovalByTimesheetId(int timesheetId) {
					// TODO Auto-generated method stub
					return null;
				}







			






				@Override
				public TimesheetApproval updateTimesheet(int timesheetId, String employeeId,
						TimesheetApproval timesheetUpdate, String userType) {
					// TODO Auto-generated method stub
					
					@SuppressWarnings("deprecation")
					TimesheetApproval timesheetApproval = tRepo.getById(timesheetId);
					TimeSheetResponse r = new TimeSheetResponse<>();
					try {
						
						timesheetApproval.setEmployeeId(employeeId);
						timesheetApproval.setTimesheetId(timesheetId);
						timesheetApproval.setStatus(timesheetUpdate.getStatus());
						timesheetApproval.setComments(timesheetUpdate.getComments());
				

						TimesheetApproval t =	 tRepo.save(timesheetApproval);
						
						EmailTemplate mailTemp = new EmailTemplate();
						Map<String, String> map = new HashMap();
						map.put("employeeName", "Murali");
//						map.put("email",hrApp.getEmail());
						map.put("email", "muralikrishna.miriyala@arshaa.com");
						mailTemp.setMap(map);
						if (t.getStatus().equalsIgnoreCase("Approved")) {
							mailTemp.setEmailType("TIMESHEET_APPROVED");
						} else {
							mailTemp.setEmailType("TIMESHEET_REJECTED");
						}

						template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
						
						return t  ;
	
					} catch (Exception e) {
			
					e.getMessage();
					}
					return timesheetUpdate;
					

				}
				}







			





			





				
				







			







			
//				
//public ResponseEntity updateApprovalStatusByEmployeeId(String employeeId, TimesheetApproval timesheetUpdate) {
//	TimesheetResponse r = new TimesheetResponse<>();
//	try {
//		TimesheetApproval timesheetApproval = (TimesheetApproval) tRepo.getTimesheetApprovalByEmployeeId(employeeId ,timesheetApproval);
//
//		timesheetApproval.setStatus(timesheetApproval.getStatus());
//	
//
//		TimesheetApproval T1 = tRepo.save(timesheetApproval);
//		System.out.println(T1);
//		r.setStatus(true);
//		r.setMessage("Update successfully");
//		r.setData(T1);
//		return new ResponseEntity(r, HttpStatus.OK);
//
//	} catch (Exception e) {
//		r.setStatus(true);
//		r.setMessage("Something went wrong");
//		return new ResponseEntity(r, HttpStatus.OK);










	
