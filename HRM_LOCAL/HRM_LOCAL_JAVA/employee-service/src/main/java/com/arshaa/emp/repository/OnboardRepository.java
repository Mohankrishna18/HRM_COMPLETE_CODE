package com.arshaa.emp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
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
//	List<Onboarding> findByOnboardingStatus(boolean onboardingStatus);

	//List<Onboarding> findByWaitingforapprovalStatusOrRejectedStatus(boolean waitingforapprovalStatus, boolean rejectedStatus);
	Onboarding getByOnboardingId(String onboardingId);

	List<Onboarding> findByApprovedStatus(boolean approvedStatus);

	List<Onboarding> findByRejectedStatus(boolean rejectedStatus);
	
	List<Onboarding> findByBand(String band);
	List<Onboarding> findByBandAndBand(String string, String string2);
	List<Onboarding> findByOnboardingStatus(String onboardingStatus);
	
	@Query(value="select count(secondary_phone_number)+count(blood_group)+count(gender)+count(marital_status)+count(aadhar_number)+count(pan_number)+count(bank_name)+count(account_number)+count(ifsc_code)+count(branch)+count(permanent_adress)+count(permanent_state)+count(permanent_country)+count(permanent_pincode)+count(current_adress)+count(current_state)+count(current_country)+count(current_pincode)+count(graduation_type)+count(graduation_board_of_university)+count(graduation_institute_name)+count(graduation_institute_city)+count(graduation_course_name)+count(graduation_joining_year)+count(graduation_passed_year)+count(graduation_grade)+count(intermediate_board_of_university)+count(intermediate_college_name)+count(intermediate_college_city)+count(ssc_school_name)+count(ssc_school_city)+count(ssc_passed_year)+count(ssc_joining_year)+count(ssc_grade)+count(ssc_course_name)+count(ssc_board_of_university)+count(intermediate_college_name)+count(intermediate_course_name)+count(intermediate_grade)+count(intermediate_joining_year)+count(intermediate_passed_year) NON_NULL from onboarding  WHERE onboarding_id=:onboardingId",nativeQuery = true)
	int findcountofnullvalues(@Param ("onboardingId")String onBoardingId);
	
	@Query(value="select * from Onboarding where month(date_of_joining) = EXTRACT(MONTH FROM CURRENT_DATE) and year(date_of_joining) = EXTRACT(YEAR FROM CURRENT_DATE)", nativeQuery=true)
    List<Onboarding> findOnboardingCountWithParticularMonth();
    
    @Query(value="select * from Onboarding where date_of_joining = CURRENT_DATE ", nativeQuery=true)
    List<Onboarding> findOnboardingCountWithParticularDate();


}
