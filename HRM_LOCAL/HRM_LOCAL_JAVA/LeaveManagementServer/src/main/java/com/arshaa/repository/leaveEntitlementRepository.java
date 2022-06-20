package com.arshaa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.User;


public interface leaveEntitlementRepository extends JpaRepository<EntitledLeaves, String  > {

	Optional<EntitledLeaves> findByleaveType(String leaveType);

	EntitledLeaves getByleaveType(String leaveType);

	//EntitledLeaves deleteByLeaveType(String leaveType);

	EntitledLeaves deleteByLeaveType(String leaveType);
	




	

	

	
     //EntitledLeaves getAllByleaveType(String leaveType);















	//EntitledLeaves getnoOfDaysbyLeaveType(String leaveType);
//	public EntitledLeaves getnoOfDaysbyLeaveType(String leaveType);
	
	


}
