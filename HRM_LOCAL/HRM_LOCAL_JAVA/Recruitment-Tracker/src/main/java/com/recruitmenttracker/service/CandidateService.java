package com.recruitmenttracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;

import com.recruitmenttracker.entity.CandidateEntity;


public interface CandidateService {
	
	
	public CandidateEntity save(CandidateEntity candidate); 
	
	public List<CandidateEntity> getAll();
//	public CandidateEntity getCandidateEntityById(int requisitionId);
	public Optional<CandidateEntity> getCandidateEntityByRequisitionId(String requisitionId);
	
	public  CandidateEntity update(CandidateEntity candidate,int candidateId);

	public ResponseEntity DeleteCandidate(int candidateId);




//	String deleteCandidateEntity(int candidateId);
	
}
