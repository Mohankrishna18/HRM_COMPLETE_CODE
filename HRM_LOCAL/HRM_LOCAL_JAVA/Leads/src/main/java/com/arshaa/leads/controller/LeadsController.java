package com.arshaa.leads.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.arshaa.leads.entity.Leads;
import com.arshaa.leads.service.LeadService;

@RestController
@RequestMapping("/Leads")
@CrossOrigin("*")
public class LeadsController {
	
	@Autowired
	private LeadService leadService;
	
	
	@PostMapping("/addLeads")
	public ResponseEntity addLeads(@RequestBody Leads newLeads) {
		return leadService.addLeads(newLeads);
	}
	
	@GetMapping("/getAllLeads")
	public ResponseEntity getAllLeads() {
	return leadService.getAllLeads();	
	}
	
	@PutMapping("/updateLeadById/{id}") 
	public ResponseEntity updateLeadById(@PathVariable int id,@RequestBody Leads newLeadUpdate) {
		return leadService.updateLeadById(id,newLeadUpdate);
	}
	
	@DeleteMapping("/deleteLead/{id}")
	public ResponseEntity deleteLead(@PathVariable int id) {
		return leadService.deleteLead(id);
	}
	
	
	@GetMapping("/getCountsByStatus")
	public ResponseEntity getCountsByStatus() {
		return leadService.getCountsByStatus();
	}
	

}
