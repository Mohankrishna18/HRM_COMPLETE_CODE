package com.arshaa.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.arshaa.entity.LeaveMaster;

public interface LeaveMasterRepository extends JpaRepository<LeaveMaster, Integer> {

	LeaveMaster findByEmployeeId(String employeeId);

	List<LeaveMaster> findByemployeeId(String employeeId);

 
}
