package com.task.service;

import org.springframework.http.ResponseEntity;

import com.task.entity.TaskEntity;

public interface TaskService {
 
	public ResponseEntity addTask(TaskEntity t);
	public ResponseEntity getAllTasks();
	
}
