package com.recruitmenttracker.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;


import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.EmailTemplate;

import com.recruitmenttracker.modal.EmployeeReq;
import com.recruitmenttracker.modal.GetMail;
import com.recruitmenttracker.modal.RequisitionRequestResponse;
import com.recruitmenttracker.modal.UserServiceEmail;
import com.recruitmenttracker.repository.RequisitionRequestRepository;



@Service
public class RequisitionRequestServiceImpl implements RequisitionRequestInterface {

    @Autowired(required = true)
    private RequisitionRequestRepository rrRepository;

    @Autowired
    private WebClient webClient;
    
    @Autowired
	private RestTemplate template;
	
	public static final String preEmailURL = "http://emailService/mail/sendmail";


    @Override
    public ResponseEntity createRR(RequisitionRequestEntity newRR) {
        RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
        try {
            // newRR.setWorkflowStatus("Waiting for BUHead Approval");
            newRR.setRrfStatus("Pending Approval");
            RequisitionRequestEntity raiseRequest = rrRepository.save(newRR);

//            String p = StringUtils.substring(raiseRequest.getProjectName(), 0, 3);
//            String c = StringUtils.substring(raiseRequest.getClientName(), 0, 3);

            String p = "REQ";
            raiseRequest.setRequisitionId(p + 0 + (raiseRequest.getRrfId()));
            RequisitionRequestEntity rreq = rrRepository.save(raiseRequest);

            rrr.setStatus(true);
            rrr.setMessage("Data Submitted Successfully!!!");
            rrr.setData(rreq);
            return new ResponseEntity(rrr, HttpStatus.OK);
        } catch (Exception e) {
            rrr.setStatus(false);
            rrr.setMessage(e.getMessage());
            return new ResponseEntity(rrr, HttpStatus.OK);
        }
    }

    
    
	@Override
	public ResponseEntity getAllRequisitions() {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		List<RequisitionRequestEntity> requisitions = rrRepository.findAll();
		try {
			if(!requisitions.isEmpty()) {
                
				rrr.setStatus(true);
				rrr.setMessage("Data Fetching");
				rrr.setData(requisitions);
				return new ResponseEntity(rrr, HttpStatus.OK);
			}
			else {
				rrr.setStatus(false);
				rrr.setMessage("Data Not Found");
				return new ResponseEntity(rrr, HttpStatus.OK);
			}
		}catch(Exception e) {
			rrr.setStatus(false);
			rrr.setMessage("Something went Wrong");
			return new ResponseEntity(rrr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity deleteRRequest(long rrfId) {
		RequisitionRequestResponse rrr =new RequisitionRequestResponse<>();
		try {
			rrRepository.deleteById(rrfId);
			rrr.setMessage("Deleted Requisition Request succesfully");
			rrr.setStatus(true);
			return new ResponseEntity(rrr,HttpStatus.OK);
		}catch(Exception e) {
			rrr.setMessage("Can't delete Requisition Request");
			rrr.setStatus(false);
			return new ResponseEntity(rrr,HttpStatus.OK);
			
		}
	}

	@Override
	public ResponseEntity updateRR(long rrfId, RequisitionRequestEntity rrUpdate) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try {
			RequisitionRequestEntity rrEntity = rrRepository.getById(rrfId);
			rrEntity.setJobTitle(rrUpdate.getJobTitle());
			rrEntity.setDescription(rrUpdate.getDescription());
			rrEntity.setRrfCat(rrUpdate.getRrfCat());
			rrEntity.setTechnology(rrUpdate.getTechnology());
			rrEntity.setPocname(rrUpdate.getPocname());
			rrEntity.setWorkflowStatus(rrUpdate.getWorkflowStatus());
			rrEntity.setPositions(rrUpdate.getPositions());
			rrEntity.setpSkills(rrUpdate.getpSkills());
			rrEntity.setsSkills(rrUpdate.getsSkills());
			rrEntity.setWorkingHours(rrUpdate.getWorkingHours());
			rrEntity.setWorkLocation(rrUpdate.getWorkLocation());
			rrEntity.setEmpType(rrUpdate.getEmpType());
			rrEntity.setRole(rrUpdate.getRole());
			rrEntity.setYoe(rrUpdate.getYoe());
			rrEntity.setRate(rrUpdate.getRate());
			rrEntity.setProjectName(rrUpdate.getProjectName());
			rrEntity.setClientName(rrUpdate.getClientName());
			rrEntity.setDepartmentName(rrUpdate.getDepartmentName());
			rrEntity.setRaisedBy(rrUpdate.getRaisedBy());
			rrEntity.setRaisedOn(rrUpdate.getRaisedOn());
			rrEntity.setTextAreaDesc(rrUpdate.getTextAreaDesc());
			rrEntity.setComments(rrUpdate.getComments());
			
			RequisitionRequestEntity RRsEntity = rrRepository.save(rrEntity);
			System.out.println(RRsEntity);
			rrr.setStatus(true);
			rrr.setMessage("Update successfully");
			rrr.setData(RRsEntity);
			return new ResponseEntity(rrr,HttpStatus.OK);
			
		}catch(Exception e){
			rrr.setStatus(true);
			rrr.setMessage("Something went wrong");
			return new ResponseEntity(rrr,HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateWorkflowStatusByJobID(long rrfId) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try {
			RequisitionRequestEntity rrEntity = rrRepository.getById(rrfId);
			rrEntity.setWorkflowStatus("Waiting for Buhead approval");
			RequisitionRequestEntity RRsEntity = rrRepository.save(rrEntity);
		} catch (Exception e) {
			
		}
		return null;
	}

	// GSDR Changes
    @Override
        public List<RequisitionRequestEntity> getByWorkflowStatus(String userType) { 

            if(userType.equalsIgnoreCase("buhead")){
            List<RequisitionRequestEntity> requisitionAll = rrRepository.getByWorkflowStatus("Waiting for BUHead Approval");
            return requisitionAll;
            }
            else {
                List<RequisitionRequestEntity> requisitionAll = rrRepository.getByWorkflowStatus("Waiting for PMO Approval");
            return requisitionAll;
            }
        }

        @Override
        public RequisitionRequestEntity modifyRequisitionStatus(RequisitionRequestEntity requisition, long rrfId, String userType)
        {
        	String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";
            
            RequisitionRequestEntity requisitionUpdate = rrRepository.findByRrfId(rrfId);
            System.out.println("userType:"+userType);
            if(userType.equalsIgnoreCase("buhead")) {
            	
            	UserServiceEmail response = template.getForObject(
            			OnboardUrl+"buhead",
            			UserServiceEmail.class);
            	List<GetMail> hrApp = response.getMails();
//            	List<GetMail> hrApp= template.getForObject(OnboardUrl+"buhead", GetMail.class);
            	
                requisitionUpdate.setBuheadApprove(requisition.getBuheadApprove());
                requisitionUpdate.setWorkflowStatus(requisition.getWorkflowStatus());
                requisitionUpdate.setBuheadApprovedOn(new Date());
                requisitionUpdate.setBuheadId(requisition.getBuheadId());
                String bName = webClient.get().uri("/emp/getEmployeeFullNameByEmployeeId/" + requisition.getBuheadId()).retrieve().bodyToMono(String.class).block();
                System.out.println(bName);
                requisitionUpdate.setBuheadName(bName);
                RequisitionRequestEntity requisitionModify = rrRepository.save(requisitionUpdate);
                
                EmailTemplate mailTemp=new EmailTemplate();
    			Map<String,String> map=new HashMap();
hrApp.forEach(e->{
            		
	mailTemp.setEmailType("BUH_RESIGN_APPROVED");
//	map.put("employeeName",resignation.getResigningEmployee());
	map.put("email", e.getEmail());
//	map.put("email","muralikrishna.miriyala@arshaa.com");
	mailTemp.setMap(map);
    template.postForObject(preEmailURL,mailTemp,EmailTemplate.class); 
            	});
    			
                
                return requisitionModify;
                
                //rest template for buh name
//              String bName =template.getForObject(approvalUrl,String.class,requisitionUpdate.getBuheadId());
//              updated.setBuheadName(bName);
//              updated.setBuheadName(approvalUrl+requisitionUpdate.getBuheadId());
//              RequisitionRequestEntity requisitionModify = rrRepository.save(updated);
//              return requisitionModify;
                
            }
            
            else if(userType.equalsIgnoreCase("pmohead")) {
                String bName = webClient.get().uri("/emp/getEmployeeFullNameByEmployeeId/" + requisition.getPmoheadId()).retrieve().bodyToMono(String.class).block();
                requisitionUpdate.setPmoheadApprove(requisition.getPmoheadApprove());
                requisitionUpdate.setPmoheadId(requisition.getPmoheadId());
                requisitionUpdate.setPmoheadName(bName);
                requisitionUpdate.setWorkflowStatus("Approved");
                requisitionUpdate.setRrfStatus("Open");
                requisitionUpdate.setPmoheadApprovedOn(new Date());
                return rrRepository.save(requisitionUpdate);
                
            }
            
            else {
                return requisitionUpdate;
            }
        }
        
        

        @Override
        public RequisitionRequestEntity rejectRequisition(RequisitionRequestEntity requisition, long rrfId, String userType) {
            RequisitionRequestEntity requisitionReject = rrRepository.findByRrfId(rrfId);
            if(userType.equalsIgnoreCase("buhead")) {
                requisitionReject.setBuheadReject(requisition.getBuheadReject());
                requisitionReject.setWorkflowStatus("Rejected by buhead");
                RequisitionRequestEntity requisitionReject1 = rrRepository.save(requisitionReject);
                return requisitionReject1;
            }
            else if(userType.equalsIgnoreCase("pmohead")) {
                requisitionReject.setPmoheadReject(requisition.getPmoheadReject());
                requisitionReject.setWorkflowStatus("Rejected by pmohead");
                RequisitionRequestEntity resignReject1 = rrRepository.save(requisitionReject);
                return resignReject1;
            }
            
            else {
                return requisitionReject;
            }
            
        }

       @Override
       public ResponseEntity getRequisitionsByRrfStatus() {
           RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
           try {
              List<RequisitionRequestEntity> rfs = rrRepository.findByRrfStatus("Open");
               rrr.setStatus(true);
               rrr.setMessage("Geting Data Succussfully");
               rrr.setData(rfs);
               return new ResponseEntity(rrr, HttpStatus.OK);
           } catch (Exception e) {
               rrr.setStatus(true);
               rrr.setMessage("Something went wrong");
               return new ResponseEntity(e.getMessage(), HttpStatus.OK);
           }
       }

    @Override
    public ResponseEntity getRequisitionsByRequisitionId(String requisitionId) {
        RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
        try {
            RequisitionRequestEntity rfs = rrRepository.findByRequisitionId(requisitionId);
            rrr.setStatus(true);
            rrr.setMessage("Geting Data Succussfully");
            rrr.setData(rfs);
            return new ResponseEntity(rrr, HttpStatus.OK);
        } catch (Exception e) {
            rrr.setStatus(true);
            rrr.setMessage("Something went wrong");
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity getRequisitionsData(String requisitionId) {
        RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
        try {
            EmployeeReq re = new EmployeeReq();
            RequisitionRequestEntity rfs = rrRepository.getByRequisitionId(requisitionId);

            re.setClientName(rfs.getClientName());
            re.setRaisedBy(rfs.getRaisedBy());
            re.setRequestInitiatedDate(rfs.getRequestInitiatedDate());
            rrr.setStatus(true);
            rrr.setMessage("Geting Data Succussfully");
            rrr.setData(re);
            return new ResponseEntity(rrr, HttpStatus.OK);
        } catch (Exception e) {
            rrr.setStatus(true);
            rrr.setMessage("Something went wrong");
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

//    public List<StoreDatesList> getDaysBetweenDates(Date startDate, Date endDate) {
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//        ArrayList<Date> dates = new ArrayList<Date>();
//        List<StoreDatesList> getBTDates = new ArrayList<>();
//        Calendar cal1 = Calendar.getInstance();
//        System.out.println(cal1);
//        cal1.setTime(startDate);
////            cal1.add(Calendar.DATE,1);
//        Calendar cal2 = Calendar.getInstance();
//        cal2.setTime(endDate);
////           cal2.add(Calendar.DATE, 1);
//
//        while (cal1.before(cal2) || cal1.equals(cal2)) {
//            StoreDatesList sd = new StoreDatesList();
//            Date d = cal1.getTime();
//            System.out.println(d);
//            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//            String strDate = dateFormat.format(d);
//            sd.setBetWeenDates(strDate);
//            getBTDates.add(sd);
//            dates.add(cal1.getTime());
//            System.out.println(strDate);
//            cal1.add(Calendar.DATE, 1);
//        }
//        return getBTDates;
//    }

    public int getDaysBetweenDates(String requisitionId, String requestInitiatedDate) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");     
        
        Date convertedDate = sdf.parse(requestInitiatedDate);
        Date currentDate = new Date();
        
        if (convertedDate.compareTo(currentDate)>0) {
            return 0;
        }

        long diff = currentDate.getTime() - convertedDate.getTime();

        return (int) TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);

    }

}
