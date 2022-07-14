package com.arshaa.emp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.model.DesignationName;


@Repository
public interface OnboardRepository extends JpaRepository<Onboarding, String>  {

	//List<Onboarding> findByWaitingforapprovalStatusAndRejectedStatus(boolean b);

//	@Query(value = "SELECT * FROM Onboarding  WHERE waitingforapprovalStatus = true OR RejectedStatus = true ")
//	List<Onboarding> findByWaitingforapprovalStatusOrRejectedStatus(boolean b, boolean c);
//	
	List<Onboarding> findByWaitingforapprovalStatus(boolean waitingforapprovalStatus);
	List<Onboarding> findByOnboardingStatus(boolean onboardingStatus);

	//List<Onboarding> findByWaitingforapprovalStatusOrRejectedStatus(boolean waitingforapprovalStatus, boolean rejectedStatus);
	Onboarding getByOnboardingId(String onboardingId);

	List<Onboarding> findByApprovedStatus(boolean approvedStatus);

	List<Onboarding> findByRejectedStatus(boolean rejectedStatus);


}
