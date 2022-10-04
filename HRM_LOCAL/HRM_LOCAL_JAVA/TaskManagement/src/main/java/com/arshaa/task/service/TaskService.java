package com.arshaa.task.service;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import com.arshaa.task.entity.TaskEntity;




public interface TaskService {
 
	public ResponseEntity addTask(TaskEntity t);
	public ResponseEntity getAllTasks();
	public ResponseEntity updateTasks(int taskId, TaskEntity taskUpdate);
	public ResponseEntity deleteTask(int taskId);
	public List<TaskEntity> getTaskByUserId(String userId);
	public List<TaskEntity> getTaskByAssignedTo(String assignedTo);
	public List<TaskEntity> getTaskByEmployeeId(String employeeId);
public List<TaskEntity>findByAssignedToAndStatus(String assignedTo, String status);
    
    // public Object calculateRemainingHours(int taskId, double actualHours);
    double findtotalOfActualHours(@Param("taskId") int taskId);

public String updateActualHours();

      public double calculateRemainingHours(int taskId,double actualHours);


	

	
}