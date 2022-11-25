package com.recruitmenttracker.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.EmployeeReq;
import com.recruitmenttracker.modal.JobsPerDepartment;
import com.recruitmenttracker.modal.RRFClosed;

public interface RequisitionRequestInterface {

	public ResponseEntity createRR(RequisitionRequestEntity newRR);
	
//	public ResponseEntity getAllRequisitions(String departmentName);

	public ResponseEntity deleteRRequest(long rrfId);
	
	public ResponseEntity updateRR(String requisitionId, RequisitionRequestEntity RRUpdate);
	
	public ResponseEntity updateWorkflowStatusByJobID(long rrfId);
	
	// GSDR Changes

    public List<RequisitionRequestEntity> getByWorkflowStatus(String userType);
    public RequisitionRequestEntity modifyRequisitionStatus(RequisitionRequestEntity requisition, long rrfId, String userType);
    public RequisitionRequestEntity rejectRequisition(RequisitionRequestEntity requisition, long rrfId, String userType);
		//Nikhil changes
		 public ResponseEntity getRequisitionsByRrfStatus();
	
//	    get positionByDepartment => chetan
    public List<JobsPerDepartment> getJobsOpenByDepartmentName();
    
	public ResponseEntity getRequisitionsByRequisitionId(String requisitionId);
    public ResponseEntity getRequisitionsData(String requisitionId);
    public int getDaysBetweenDates(String requisitionId,String requestInitiatedDate) throws ParseException;

    public ResponseEntity getAllRequisitions();
    
    public ResponseEntity updateAgeing(String requisitionId, RRFClosed rrUpdate);

}
