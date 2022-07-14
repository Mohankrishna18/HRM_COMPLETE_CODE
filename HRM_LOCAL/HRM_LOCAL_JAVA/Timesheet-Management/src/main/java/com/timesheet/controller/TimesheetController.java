package com.timesheet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.timesheet.entity.Timesheet;
import com.timesheet.repository.TimesheetRepository;
import com.timesheet.service.TimesheetService;

@RestController
@CrossOrigin("*")
@RequestMapping("/timesheet")
public class TimesheetController {
	
	@Autowired
	private TimesheetService service;
	

	
	@PostMapping("/createNewTask")
	public ResponseEntity addNewTask(@RequestBody Timesheet newTask) {
		return service.addTimesheetData(newTask);
	}
	
//	@GetMapping("/getTasks")
//	public ResponseEntity getTasks() {
//		return service.getAllTasks();
//	}
}
