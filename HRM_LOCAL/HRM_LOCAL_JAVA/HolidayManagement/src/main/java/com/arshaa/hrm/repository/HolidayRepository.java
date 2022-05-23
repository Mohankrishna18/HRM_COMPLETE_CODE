package com.arshaa.hrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.arshaa.hrm.entity.Holidaymanagement;

public interface HolidayRepository extends JpaRepository<Holidaymanagement, Integer> {

	

}
