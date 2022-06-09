package com.arshaa.designation.service;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.designation.entity.Designationmaster;
import com.arshaa.designation.repository.DesignationInterface;

@Service
public class DesignationServcie {

	@Autowired
	DesignationInterface repository;

	public ResponseEntity<Designationmaster> saveDesignationMaster(Designationmaster master) {
		Date tupDate = new Date(master.getUpdatedOn().getTime());
		master.setUpdatedOn(tupDate);
		repository.save(master);
		return new ResponseEntity<Designationmaster>(master, HttpStatus.OK);
	}
}
