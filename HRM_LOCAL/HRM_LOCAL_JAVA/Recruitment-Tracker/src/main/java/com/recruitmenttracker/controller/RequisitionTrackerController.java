package com.recruitmenttracker.controller;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.EmployeeReq;
import com.recruitmenttracker.modal.JobsPerDepartment;
import com.recruitmenttracker.modal.RRFClosed;
import com.recruitmenttracker.repository.RequisitionRequestRepository;
import com.recruitmenttracker.service.RequisitionRequestInterface;

@RestController
@CrossOrigin("*")
@RequestMapping("/recruitmentTracker")
public class RequisitionTrackerController {

    @Autowired(required = true)
    private RequisitionRequestInterface serv;

    @Autowired
    RequisitionRequestRepository reqRepo;

    @PostMapping("/createRequisitionRequest")
    public ResponseEntity createRequisitionRequest(@RequestBody RequisitionRequestEntity newRR) {
        return serv.createRR(newRR);
    }

    @GetMapping("/getAllRequisitionRequests")
    public ResponseEntity getRequisitions() {
        return serv.getAllRequisitions();
    }
    
//  total/overall positions count
    @GetMapping("/sumOfPosition")
    public ResponseEntity<Long> sumOfPositions() {
        Long i = reqRepo.getCountOfPositions();
        return new ResponseEntity<Long>(i, HttpStatus.OK);
    }
    
//  @GetMapping("/getAllRequisitionRequests")
//  public ResponseEntity getRequisitions(@PathVariable String departmentName) {
//      return serv.getAllRequisitions(departmentName);
//  }

//    @GetMapping("/getAgeing/{}")
//    public ResponseEntity getByWorkflowStatus(@PathVariable String userType) {
//        return new ResponseEntity(serv.getByWorkflowStatus(userType), HttpStatus.OK);
//    }
    // get data by rrf status Active
    @GetMapping("/getAllRequisitionRequestsByStatus")
    public ResponseEntity getRequisitionsByRrfStatus() {
        return serv.getRequisitionsByRrfStatus();
    }

	@GetMapping("/getDataById/{requisitionId}")
	public ResponseEntity getRequisitionsByRequisitionId(@PathVariable String requisitionId) {
		return serv.getRequisitionsByRequisitionId(requisitionId);
	}
	
	//--------------------dfgh----------------
	@GetMapping("/requiredDataById/{requisitionId}")
	public ResponseEntity getRequisitionsData(@PathVariable String requisitionId) {
		return serv.getRequisitionsData(requisitionId);
	}
	
	
	@DeleteMapping("/deleteRR/{rrfId}")
	public ResponseEntity DeleteRRequest(@PathVariable long rrfId) {
		return serv.deleteRRequest(rrfId);
	}
	
    @PutMapping("/updateRR/{requisitionId}")
    public ResponseEntity updateRRs(@PathVariable String requisitionId, @RequestBody RequisitionRequestEntity RRUpdate) {
        return serv.updateRR(requisitionId, RRUpdate);
    }
	
	@GetMapping("/updateWorkflowStatus/{rrfId}")
	public ResponseEntity updateWorkFlowStatus(@PathVariable long rrfId) {
		return serv.updateWorkflowStatusByJobID(rrfId);
	}

    // GSDR Changes

    @GetMapping("/getAllRequisitions/{userType}")
    public ResponseEntity getByWorkflowStatus(@PathVariable String userType) {
        return new ResponseEntity(serv.getByWorkflowStatus(userType), HttpStatus.OK);
    }

    @PutMapping("/modifyRequisitionStatus/{rrfId}/{userType}")
    public ResponseEntity modifyRequisitionStatus(@RequestBody RequisitionRequestEntity requisition,
            @PathVariable long rrfId, @PathVariable String userType) {
        return new ResponseEntity(serv.modifyRequisitionStatus(requisition, rrfId, userType), HttpStatus.OK);
    }

    @PutMapping("/rejectResignation/{rrfId}/{userType}")
    public ResponseEntity rejectRequisition(@RequestBody RequisitionRequestEntity requisition, @PathVariable long rrfId,
            @PathVariable String userType) {
        return new ResponseEntity(serv.rejectRequisition(requisition, rrfId, userType), HttpStatus.OK);
    }

    @GetMapping("/getAgeingCount/{requisitionId}/{requestInitiatedDate}")
    public int getDaysBetweenDates(@PathVariable String requisitionId, @PathVariable String requestInitiatedDate)
            throws ParseException {
        return serv.getDaysBetweenDates(requisitionId, requestInitiatedDate);
    }

//    @GetMapping("/getDataByDATE")
//    public List<RequisitionRequestEntity> getDataWithAgingDays() {
//        System.out.println(reqRepo.getDataWithAgingDays());
//        return reqRepo.getDataWithAgingDays();
//    }

//    @GetMapping("/getOneRequisitionByRrfId/{rrfId}")
//    public RequisitionRequestEntity getAProjectsByRrfId(@PathVariable("rrfId") long rrfId) {
//        return reqRepo.findByRrfId(rrfId);

    
//    List<Onboarding> on = onrepo.findAll();
//                List<Onboarding> onboard = new ArrayList<>();
//                on.forEach(f -> {
//                        Onboarding o = new  Onboarding(); 
//                   o.setAadharNumber(f.getAadharNumber());
//                    o.setAccountNumber(f.getAccountNumber()); 
//                   o.setOnboardingId(f.getOnboardingId()); 
//                   o.setFullName(f.getFullName()); 
//                   o.setEmail(f.getEmail());   
//                 o.setDateDifference(onrepo.getDateDiff(f.getOnboardingId()));
//                    onboard.add(o);  
//              });   
//             return  onboard ;
    
    
    @GetMapping("/{requisitionId}")
    public Integer gets(@PathVariable String requisitionId) {
        Integer i = reqRepo.getDateDiff(requisitionId);
        return i ;
    }
    
    
    @GetMapping("/")
    public List<RequisitionRequestEntity> getDataWithAgingDays() {
       List<RequisitionRequestEntity> re = reqRepo.findAll() ;
       List<RequisitionRequestEntity> req = new ArrayList<>();
       
      
       re.forEach(o -> {
           RequisitionRequestEntity r = new RequisitionRequestEntity();
           RRFClosed rr = new RRFClosed();
//           serv.updateAgeing();
//           
//            RequisitionRequestEntity RRsEntity = reqRepo.save();
           
           this.updateAgeing(o.getRequisitionId(), rr);
               
       
           r.setRequisitionId(o.getRequisitionId());
           r.setDepartmentName(o.getDepartmentName());
           r.setClientName(o.getClientName());
           r.setProjectName(o.getProjectName());
           r.setJobTitle(o.getJobTitle());
           r.setTechnology(o.getTechnology());
           r.setRole(o.getRole());
           r.setWorkLocation(o.getWorkLocation());
           r.setYoe(o.getYoe());
           r.setPriority(o.getPriority());
           r.setRrfStatus(o.getRrfStatus());
           r.setWorkflowStatus(o.getWorkflowStatus());
           r.setPositions(o.getPositions());
           r.setRaisedOn(o.getRaisedOn());
           r.setRrfId(o.getRrfId());
           r.setRequestInitiatedDate(o.getRequestInitiatedDate());
           r.setDescription(o.getDescription());
           r.setRrfCat(o.getRrfCat());
           r.setPocname(o.getPocname());
           r.setpSkills(o.getpSkills());
           r.setsSkills(o.getsSkills());
           r.setEmpType(o.getEmpType());
           r.setWorkingHours(o.getWorkingHours());
           r.setQualification(o.getQualification());
           r.setRate(o.getRate());
           r.setRaisedBy(o.getRaisedBy());
           r.setComments(o.getComments());
           r.setReqType1(o.getReqType1());
           r.setInterviewPanel2(o.getInterviewPanel2());
           r.setInterviewPanel1(o.getInterviewPanel1());
           r.setHrPanel(o.getHrPanel());
           r.setReqType2(o.getReqType2());
           r.setReqType3(o.getReqType3());
           r.setAllocType(o.getAllocType());
           r.setResourceRequiredDate(o.getResourceRequiredDate());
           r.setRequestClosedDate(o.getRequestClosedDate());
           r.setAgeing(o.getAgeing());
//           r.setAgeing(reqRepo.getDateDiff(o.getRequisitionId())); 
           req.add(r);
           
          
       });   
        return req;
    }
    
    
    @PutMapping("/aeigingUpdate/{requisitionId}")
    public ResponseEntity updateAgeing(@PathVariable String requisitionId,@RequestBody RRFClosed rrUpdate){
        return serv.updateAgeing(requisitionId, rrUpdate);
    }
    
//  getJobsOpenByDepartments
  @GetMapping("/getJobsOpenByDepartmentName")
  public List<JobsPerDepartment> getJobsOpenByDepartmentName(){
  	return serv.getJobsOpenByDepartmentName();
  }
    
//    @PutMapping("/rrfStatusClosed/{rrfStaus}")
//    public ResponseEntity updateRRfStatus(@PathVariable String rrfStatus, @RequestBody RequisitionRequestEntity RRfStatusUpdate) {
//        return serv.updateRRfStatus(rrfStatus, RRfStatusUpdate);
//    }

}
