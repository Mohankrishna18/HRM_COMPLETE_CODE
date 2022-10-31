package com.recruitmenttracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recruitmenttracker.entity.CandidateEntity;
import com.recruitmenttracker.repository.CandidateRepository;

@Service
public class CandidateServiceImpl implements CandidateService{

	 
    @Autowired(required=true)
	private CandidateRepository candidateRepo;
	@Override
	public CandidateEntity save(CandidateEntity candidate) {
		try {
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
	public CandidateEntity update(CandidateEntity candidate, int requisitionId) {
		CandidateEntity cd = candidateRepo.getById(requisitionId);  
		cd.setCandidateName(candidate.getCandidateName());
		cd.setCandidateStatus(candidate.getCandidateStatus());
		cd.setBusinessUnit(candidate.getBusinessUnit());
		cd.setProject(candidate.getProject());
		cd.setJobTitle(candidate.getJobTitle());
		cd.setCurrentLocation(candidate.getCurrentLocation());
		cd.setPrimarySkills(candidate.getPrimarySkills());
		cd.setSecondarySkills(candidate.getSecondarySkills());
		cd.setEmail(candidate.getEmail());
		cd.setPhoneNumber(candidate.getPhoneNumber());
		cd.setYearsOfExperience(candidate.getYearsOfExperience());
		return candidateRepo.save(cd);
		
	}
	@Override
	public String deleteCandidateEntity(int requisitionId) {
		candidateRepo.deleteById(requisitionId);
		return "record is deleted with this id" +"  "+requisitionId;
	}

	@Override
	public Optional<CandidateEntity> getCandidateEntityByRequisitionId(int requisitionId) {
		return candidateRepo.findById(requisitionId) ;
	}
	
}
