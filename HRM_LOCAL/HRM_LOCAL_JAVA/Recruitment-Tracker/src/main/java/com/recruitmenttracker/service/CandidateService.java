package com.recruitmenttracker.service;

import java.util.List;
import java.util.Optional;

import com.recruitmenttracker.entity.CandidateEntity;


public interface CandidateService {
	
	
	public CandidateEntity save(CandidateEntity candidate); 
	
	public List<CandidateEntity> getAll();
//	public CandidateEntity getCandidateEntityById(int requisitionId);
	public Optional<CandidateEntity> getCandidateEntityByRequisitionId(int requisitionId);
	
	public  CandidateEntity update(CandidateEntity candidate,int requisitionId);

	public String deleteCandidateEntity(int requisitionId);
	
//	public CandidateEntity deleteCandidateEntity(int requisitionId);
	
}
