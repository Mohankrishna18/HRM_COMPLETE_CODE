package com.recruitmenttracker.controller;

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
import com.recruitmenttracker.service.RequisitionRequestInterface;


@RestController
@CrossOrigin("*")
@RequestMapping("/recruitmentTracker")
public class RequisitionTrackerController {
	
	@Autowired(required=true)
	private RequisitionRequestInterface serv;
	
	@PostMapping("/createRequisitionRequest")
	public ResponseEntity createRequisitionRequest(@RequestBody RequisitionRequestEntity newRR) {
		return serv.createRR(newRR);
	}
	
	@GetMapping("/getAllRequisitionRequests")
	public ResponseEntity getRequisitions() {
		return serv.getAllRequisitions();
	}
	
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
	
	@PutMapping("/updateRR/{rrfId}")
	public ResponseEntity updateRRs(@PathVariable long rrfId, @RequestBody RequisitionRequestEntity RRUpdate) {
		return serv.updateRR(rrfId, RRUpdate);
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
	


}
