package com.recruitmenttracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recruitmenttracker.entity.CandidateEntity;


@Repository
public interface CandidateRepository extends JpaRepository<CandidateEntity,Integer>{

	
	

}
