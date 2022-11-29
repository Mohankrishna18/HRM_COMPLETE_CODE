package com.recruitmenttracker.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.recruitmenttracker.entity.CandidateEntity;
import com.recruitmenttracker.modal.Response;
import com.recruitmenttracker.repository.CandidateRepository;

@Service
public class CandidateServiceImpl implements CandidateService{

	 
    @Autowired(required=true)
	private CandidateRepository candidateRepo;
    
    
//  auto generate the date
  @Override
  public CandidateEntity save(CandidateEntity candidate) {
      try {
          candidate.setCandidateCreatedOn(new Date());
      return candidateRepo.save(candidate);
      }catch(Exception e) {
          e.getMessage();
      }
      return null;
  }
  
	

	@Override
	public List<CandidateEntity> getAll() {
        try {
		return candidateRepo.findAll();
        }catch(Exception e) {
        	e.getMessage();
        	
        }
		return null;
	}

	@Override
	public CandidateEntity update(CandidateEntity candidate, int candidateId) {
		CandidateEntity cd = candidateRepo.getById(candidateId);  
		
		try {
		cd.setCandidateName(candidate.getCandidateName());
		cd.setCandidateStatus(candidate.getCandidateStatus());
		cd.setBusinessUnit(candidate.getBusinessUnit());
		cd.setProjectName(candidate.getProjectName());
		cd.setJobTitle(candidate.getJobTitle());
		cd.setCurrentLocation(candidate.getCurrentLocation());
		cd.setPrimarySkills(candidate.getPrimarySkills());
		cd.setSecondarySkills(candidate.getSecondarySkills());
		cd.setEmail(candidate.getEmail());
		cd.setPhoneNumber(candidate.getPhoneNumber());
		cd.setYearsOfExperience(candidate.getYearsOfExperience());
		cd.setLevel(candidate.getLevel());
		return candidateRepo.save(cd);
		}
		catch(Exception e) {
        	e.getMessage();	
        }
		return cd;
		
	}
//	@Override
//	public String deleteCandidateEntity(int candidateId) {
//		candidateRepo.deleteByCandidateId(candidateId);
//		return "record is deleted with this id" +"  "+candidateId;
//	}

	@Override
	public Optional<CandidateEntity> getCandidateEntityByRequisitionId(String requisitionId) {
		return candidateRepo.findByRequisitionId(requisitionId) ;
	}

	@Override
	public ResponseEntity DeleteCandidate(int candidateId) {
		Response r=new Response<>();
		try {
			CandidateEntity candidate= candidateRepo.getById(candidateId);

			candidateRepo.delete(candidate);
		r.setStatus(true);
		r.setMessage("Deleted successfully");
		return new ResponseEntity(r,HttpStatus.OK);
		}
		catch (Exception e) {
		// TODO: handle exception

		r.setStatus(false);
		r.setMessage(e.getMessage());
		return new ResponseEntity(r,HttpStatus.OK);
		}
	
	}
}
