package com.arshaa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.User;

public interface leaveEntitlementRepository extends JpaRepository<EntitledLeaves, Integer> {

	EntitledLeaves getByleaveType(String leaveType);


	

	Optional<EntitledLeaves> findByleaveType(String leaveType);


	EntitledLeaves deleteByLeaveId(Integer leaveId);


	EntitledLeaves findByleaveId(Integer leaveId);



}