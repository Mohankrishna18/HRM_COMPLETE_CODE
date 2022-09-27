package com.arshaa.emp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.emp.entity.ReportingManager;
import com.arshaa.emp.model.ReportingManagerEmployeeId;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.repository.ReportingManagerRepository;

@Service
public class ReportingManagerServiceImpl implements ReportingManagerService {

	@Autowired
	ReportingManagerRepository repo;

	public ReportingManagerServiceImpl() {
// TODO Auto-generated constructor stub
	}

	@Override
	public ResponseEntity addReportingManager(ReportingManager newRepotingmanager) {
		Response r = new Response();
		try {
			ReportingManager newRepotingmanagerfinal = repo.save(newRepotingmanager);
			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(newRepotingmanagerfinal);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getReportingManager() {
// TODO Auto-generated method stub
		Response r = new Response();
		try {

			List<ReportingManager> newReportingManager = repo.findAll();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newReportingManager);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}
	@Override
    public ResponseEntity getEmployeeIdByReprtingManager(String projectManager) {
        ReportingManager getId = repo.getEmployeeIdByProjectManager(projectManager);    



       ReportingManagerEmployeeId en = new ReportingManagerEmployeeId();
        en.setEmployeeId(getId.getEmployeeId());



       return new ResponseEntity(en, HttpStatus.OK);
    }

}
