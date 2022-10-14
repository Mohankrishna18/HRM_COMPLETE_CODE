package com.recruitmenttracker.service;

import org.springframework.http.ResponseEntity;

import com.recruitmenttracker.entity.RequisitionRequestEntity;

public interface RequisitionRequestInterface {

	public ResponseEntity createRR(RequisitionRequestEntity newRR);
	
	public ResponseEntity getAllRequisitions();
	
	public ResponseEntity deleteRRequest(long rrfId);
	
	public ResponseEntity updateRR(long rrfId, RequisitionRequestEntity RRUpdate);

}
