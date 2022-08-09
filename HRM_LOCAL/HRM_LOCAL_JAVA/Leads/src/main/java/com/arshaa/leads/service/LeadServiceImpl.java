package com.arshaa.leads.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import com.arshaa.leads.entity.Leads;
import com.arshaa.leads.model.LeadResponse;
import com.arshaa.leads.repository.LeadRepository;

@Service
public class LeadServiceImpl implements LeadService{
	
	@Autowired
	private LeadRepository leadRepository;

	@Override
	public ResponseEntity addLeads(Leads newLeads) {
		// TODO Auto-generated method stub
		LeadResponse cr = new LeadResponse<>();
		try {
			Leads newLeadData = leadRepository.save(newLeads);
			cr.setStatus(true);
			cr.setMessage("Data added successfully");
			cr.setData(newLeadData);
			return new ResponseEntity(cr, HttpStatus.OK);
		} catch (Exception e) {

			cr.setStatus(false);
			cr.setMessage(e.getMessage());
			return new ResponseEntity(cr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAllLeads() {
		LeadResponse cr = new LeadResponse<>();
		try {

			List<Leads> newLeadData = leadRepository.findAll();
			cr.setStatus(true);
			cr.setMessage("Data Fetching");
			cr.setData(newLeadData);
			return new ResponseEntity(cr, HttpStatus.OK);
		} catch (Exception e) {


			cr.setStatus(false);
			cr.setMessage(e.getMessage());
			return new ResponseEntity(cr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateLeadById(int id, Leads newLeadUpdate) {
		LeadResponse cr = new LeadResponse<>();
		try {
			Leads updateLead = leadRepository.getById(id);
			updateLead.setLeadName(newLeadUpdate.getLeadName());
			updateLead.setStatus(newLeadUpdate.getStatus());
			updateLead.setCompanyName(newLeadUpdate.getCompanyName());
			updateLead.setCompanyPhoneNumber(newLeadUpdate.getCompanyPhoneNumber());
			updateLead.setCompanyEmail(newLeadUpdate.getCompanyEmail());
			updateLead.setCompanyCountry(newLeadUpdate.getCompanyCountry());
			updateLead.setCompanyAddress(newLeadUpdate.getCompanyAddress());
			updateLead.setStartDate(newLeadUpdate.getStartDate());
			updateLead.setEndDate(newLeadUpdate.getEndDate());
			updateLead.setSourceName(newLeadUpdate.getSourceName());
			updateLead.setSourceEmail(newLeadUpdate.getSourceEmail());
			updateLead.setSourcePhoneNumber(newLeadUpdate.getSourcePhoneNumber());
           
			
			Leads latestLead = leadRepository.save(updateLead);
			System.out.println(latestLead);

			cr.setStatus(true);
			cr.setMessage("Data added successfully");
			cr.setData(latestLead);

			return new ResponseEntity(cr, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			cr.setStatus(false);
			cr.setMessage(e.getMessage());
			return new ResponseEntity(cr, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity deleteLead(int id) {
		LeadResponse cr = new LeadResponse<>();
		try {
			Leads deleteLead = leadRepository.getById(id);
			leadRepository.delete(deleteLead);
			cr.setStatus(true);
			cr.setMessage("Deleted successfully");
			return new ResponseEntity(cr, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			cr.setStatus(false);
			cr.setMessage(e.getMessage());
			return new ResponseEntity(cr, HttpStatus.OK);
		}
	}
	
	
	

}
