package com.arshaa.task.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.task.entity.TaskEntity;



public interface TaskService {
 
	public ResponseEntity addTask(TaskEntity t);
	public ResponseEntity getAllTasks();
	public ResponseEntity updateTasks(int taskId, TaskEntity taskUpdate);
	public void deleteTask(int taskId);
	
}