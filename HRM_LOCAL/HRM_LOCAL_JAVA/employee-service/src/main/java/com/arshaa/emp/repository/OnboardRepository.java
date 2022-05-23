package com.arshaa.emp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;


@Repository
public interface OnboardRepository extends CrudRepository<Onboarding, String>  {

	List<Onboarding> findByWaitingforapprovalStatusAndRejectedStatus(boolean b, boolean c);

//	@Query(value = "SELECT * FROM Onboarding  WHERE waitingforapprovalStatus = true OR RejectedStatus = true ")
//	List<Onboarding> findByWaitingforapprovalStatusOrRejectedStatus(boolean b, boolean c);
//	
	List<Onboarding> findByWaitingforapprovalStatusOrRejectedStatus(boolean waitingforapprovalStatus, boolean rejectedStatus);

	Onboarding getByOnboardingId(String onboardingId);

	List<Onboarding> findByApprovedStatus(boolean approvedStatus);


}
