package com.arshaa.leads.service;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.leads.common.Client;
import com.arshaa.leads.entity.Leads;
import com.arshaa.leads.model.LeadResponse;
import com.arshaa.leads.model.StatusCountCards;
import com.arshaa.leads.repository.LeadRepository;

@Service
public class LeadServiceImpl implements LeadService{
	
	@Autowired
	private LeadRepository leadRepository;
	@Autowired
	private RestTemplate template;

	@Override
	public ResponseEntity addLeads(Leads newLeads) {

		String clientUri="http://clientProjectMapping/clientProjectMapping/addClients";
		LeadResponse cr = new LeadResponse<>();
		try {
			Leads newLeadData = leadRepository.save(newLeads);
			Client client=new Client();
			client.setClientName(newLeadData.getCompanyName());
			client.setEmail(newLeadData.getCompanyEmail());
			client.setPhoneNumber(newLeadData.getCompanyPhoneNumber());
			client.setPocName(newLeadData.getPocName());
			LeadResponse res=template.postForObject(clientUri, client, LeadResponse.class);
			if(res.isStatus()==true)
			{
				cr.setStatus(true);
				cr.setMessage("Data added successfully");
				cr.setData(newLeadData);
				return new ResponseEntity(cr, HttpStatus.OK);
			}
			else {
				cr.setStatus(true);
				cr.setMessage("Lead created but company not created because "+res.getMessage());
				cr.setData(newLeadData);
				return new ResponseEntity(cr, HttpStatus.OK);

			}
			
			
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
			updateLead.setSourceName(newLeadUpdate.getSourceName());
			updateLead.setSourceEmail(newLeadUpdate.getSourceEmail());
			updateLead.setSourcePhoneNumber(newLeadUpdate.getSourcePhoneNumber());
			updateLead.setPocName(newLeadUpdate.getPocName());;
			updateLead.setPocEmail(newLeadUpdate.getPocEmail());
			updateLead.setPocPhoneNumber(newLeadUpdate.getPocPhoneNumber());
			updateLead.setBusinessValue(newLeadUpdate.getBusinessValue());
			updateLead.setLeadNotes(newLeadUpdate.getLeadNotes());
			updateLead.setStartDate(newLeadUpdate.getStartDate());
			updateLead.setEndDate(newLeadUpdate.getEndDate());
           
			
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
	
//	lead status count for dashboard
	public ResponseEntity getCountsByStatus()
	{
	    try {
	    	ArrayList<StatusCountCards> cardsCountList=new ArrayList<>();
			List<String> getStatus=leadRepository.findAll().stream().map(e->e.getStatus()).toList();
			List<Leads> getLeads=leadRepository.findAll();
			
			LinkedHashSet<String> hashSet = new LinkedHashSet<>(getStatus);
	         
	        ArrayList<String> listWithoutDuplicates = new ArrayList<>(hashSet);
	        listWithoutDuplicates.forEach(e->{
				long count=leadRepository.getLeadsByStatus(e).size();
				StatusCountCards cardsCount=new StatusCountCards();
				cardsCount.setCount(count);
				cardsCount.setStatus(e);
				cardsCountList.add(cardsCount);
			});
			return new ResponseEntity(cardsCountList,HttpStatus.OK);
	    }
		catch(Exception e)
	    {
			return new ResponseEntity("Something went wrong",HttpStatus.OK);

	    }
	}
	
	

}
