package com.arshaa.task.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.task.entity.TaskEntity;
import com.arshaa.task.modal.TaskResponse;
import com.arshaa.task.repository.TaskRepository;




@Service
public class TaskServiceImpl implements TaskService {
	
	@Autowired
 	private TaskRepository taskRepo;

	@Override
	public ResponseEntity addTask(TaskEntity t) {
		return new ResponseEntity(taskRepo.save(t),HttpStatus.OK);
	}

	@Override
	public ResponseEntity getAllTasks() {
		TaskResponse r = new TaskResponse();
		try {
			List<TaskEntity> employeeMasters = taskRepo.findAll();
			if (!employeeMasters.isEmpty()) {
				r.setStatus(true);
				r.setMessage("Data Fetching");
				r.setData(employeeMasters);
				return new ResponseEntity(r, HttpStatus.OK);
			} else {
				r.setStatus(false);
				r.setMessage("Data nott found");

				return new ResponseEntity(r, HttpStatus.OK);
			}
		} catch (Exception e) {
			r.setStatus(true);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	
}
