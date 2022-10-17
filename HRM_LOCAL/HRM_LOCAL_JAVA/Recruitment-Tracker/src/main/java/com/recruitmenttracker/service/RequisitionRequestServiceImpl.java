package com.recruitmenttracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.recruitmenttracker.entity.RequisitionRequestEntity;
import com.recruitmenttracker.modal.RequisitionRequestResponse;
import com.recruitmenttracker.repository.RequisitionRequestRepository;

@Service
public class RequisitionRequestServiceImpl implements RequisitionRequestInterface {

	@Autowired(required=true)
	private RequisitionRequestRepository rrRepository;
	
	@Override
	public ResponseEntity createRR(RequisitionRequestEntity newRR) {
		RequisitionRequestResponse rrr = new RequisitionRequestResponse<>();
		try{
			RequisitionRequestEntity raiseRequest = rrRepository.save(newRR);
		
		rrr.setStatus(true);
		rrr.setMessage("Data Submitted Successfully!!!");
		rrr.setData(raiseRequest);
		return new ResponseEntity(rrr, HttpStatus.OK);
		} catch (Exception e) {
			rrr.setStatus(false);
			rrr.setMessage(e.getMessage());
			return new ResponseEntity(rrr,HttpStatus.OK);
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

}
