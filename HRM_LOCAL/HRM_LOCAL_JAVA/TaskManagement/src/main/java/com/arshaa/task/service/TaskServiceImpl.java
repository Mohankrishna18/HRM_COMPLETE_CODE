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

//	@Override
//	public ResponseEntity addTask(TaskEntity t) {
//		return new ResponseEntity(taskRepo.save(t),HttpStatus.OK);
//	}

	@Override
	public ResponseEntity addTask(TaskEntity t) {
		TaskResponse r = new TaskResponse<>();
		try {
			TaskEntity addTaskData = taskRepo.save(t);
			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(addTaskData);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
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

	@Override
	public ResponseEntity updateTasks(int taskId, TaskEntity taskUpdate) {
		TaskResponse r = new TaskResponse<>();
		try {
			TaskEntity taskEntity = taskRepo.getById(taskId);
			taskEntity.setProject(taskUpdate.getProject());
			taskEntity.setTaskName(taskUpdate.getTaskName());
			taskEntity.setTaskType(taskUpdate.getTaskType());
			taskEntity.setDuration(taskUpdate.getDuration());
			taskEntity.setDescription(taskUpdate.getDescription());
			taskEntity.setFromDate(taskUpdate.getFromDate());
			taskEntity.setToDate(taskUpdate.getToDate());
			taskEntity.setStatus(taskUpdate.getStatus());
			taskEntity.setPriority(taskUpdate.getPriority());
			
			TaskEntity task1= taskRepo.save(taskEntity);
			System.out.println(task1);
			r.setStatus(true);
			r.setMessage("Update successfully");
			r.setData(task1);
			return new ResponseEntity(r,HttpStatus.OK);
			
		}
		catch(Exception e)
		{
			r.setStatus(true);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r,HttpStatus.OK);
		}
		
	}

	@Override
	public void deleteTask(int taskId) {
		TaskResponse r = new TaskResponse<>();
		try {
			taskRepo.deleteById(taskId);
			r.setMessage("deleted succesfully");
			r.setStatus(true);
		}catch(Exception e) {
			r.setMessage("cant delete");
			r.setStatus(false);
			
		}
		 
	}





	

	
}
