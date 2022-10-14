package com.recruitmenttracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@DeleteMapping("/deleteRR/{rrfId}")
	public ResponseEntity DeleteRRequest(@PathVariable long rrfId) {
		return serv.deleteRRequest(rrfId);
	}
	
	@PutMapping("/updateRR/{rrfId}")
	public ResponseEntity updateRRs(@PathVariable long rrfId, @RequestBody RequisitionRequestEntity RRUpdate) {
		return serv.updateRR(rrfId, RRUpdate);
	}

}
