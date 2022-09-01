package com.arshaa.leads.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.leads.entity.Leads;


@Service
public interface LeadService {
	
	public ResponseEntity addLeads(Leads newLeads);

	public ResponseEntity getAllLeads();

	public ResponseEntity updateLeadById(int id, Leads newLeadUpdate);

	public ResponseEntity deleteLead(int id);
	
	public ResponseEntity getCountsByStatus();

}
