package com.arshaa.task.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.arshaa.task.entity.TaskEntity;


@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Integer>{

	
	 public List<TaskEntity> getTaskByUserId(String userId);
	 public List<TaskEntity> getTaskByAssignedTo(String assignedTo);
	 
}