package com.arshaa.task.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.task.entity.TaskEntity;

import com.arshaa.task.modal.TaskResponse;
import com.arshaa.task.modal.TeamMemberEmployeeName;
//import com.arshaa.task.modal.TeamMemberEmployeeName;
import com.arshaa.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskRepository taskRepo;
	@Autowired
	@Lazy
	private RestTemplate template;

	// Add Task

	@Override
	public ResponseEntity addTask(TaskEntity t) {

		String tmUrl = "http://empService/emp/getEmployeeNameByEmployeeId/";

		TaskResponse r = new TaskResponse<>();
		try {
			TeamMemberEmployeeName empName = template.getForObject(tmUrl + t.getAssignedTo(),
					TeamMemberEmployeeName.class);
			t.setEmployeeName(empName.getEmployeeName());
			t.setEmployeeId(t.getAssignedTo());

			t.setAssignedTo(empName.getEmployeeName());
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

	// Get Tasks

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

	// Update task

	@Override
	public ResponseEntity updateTasks(int taskId, TaskEntity taskUpdate) {
		TaskResponse r = new TaskResponse<>();
		try {
			TaskEntity taskEntity = taskRepo.getById(taskId);
//			taskEntity.setprojectName(taskUpdate.getProjectName())
//			taskEntity.setTaskName(taskUpdate.getTaskName());
//			taskEntity.setTaskType(taskUpdate.getTaskType());
//			taskEntity.setDuration(taskUpdate.getDuration());
//			taskEntity.setDescription(taskUpdate.getDescription());
//			taskEntity.setFromDate(taskUpdate.getFromDate());
//			taskEntity.setToDate(taskUpdate.getToDate());
//			taskEntity.setStatus(taskUpdate.getStatus());
//			taskEntity.setPriority(taskUpdate.getPriority());
			taskEntity.setActualHours(taskUpdate.getActualHours());
			taskEntity.setDescription(taskUpdate.getDescription());
			taskEntity.setEstimatedHours(taskUpdate.getEstimatedHours());
			taskEntity.setPlannedStartDate(taskUpdate.getPlannedStartDate());
			taskEntity.setPriority(taskUpdate.getPriority());
			taskEntity.setStatus(taskUpdate.getStatus());
			taskEntity.setTaskTitle(taskUpdate.getTaskTitle());
			taskEntity.setTaskType(taskUpdate.getTaskType());
			taskEntity.setPlannedEndDate(taskUpdate.getPlannedEndDate());
			taskEntity.setUserId(taskUpdate.getUserId());
			taskEntity.setUserStory(taskUpdate.getUserStory());
			taskEntity.setAssignDate(taskUpdate.getAssignDate());
			taskEntity.setAssignedTo(taskUpdate.getAssignedTo());
			taskEntity.setProjectName(taskUpdate.getProjectName());
			taskEntity.setProjectId(taskUpdate.getProjectId());
			taskEntity.setComplexity(taskUpdate.getComplexity());

			TaskEntity task1 = taskRepo.save(taskEntity);
			System.out.println(task1);
			r.setStatus(true);
			r.setMessage("Update successfully");
			r.setData(task1);
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {
			r.setStatus(true);
			r.setMessage("Something went wrong");
			return new ResponseEntity(r, HttpStatus.OK);
		}

	}

	// Delete Task

	@Override
	public ResponseEntity deleteTask(int taskId) {
		TaskResponse r = new TaskResponse<>();
		try {
			taskRepo.deleteById(taskId);
			r.setMessage("deleted succesfully");
			r.setStatus(true);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			r.setMessage("cant delete");
			r.setStatus(false);
			return new ResponseEntity(r, HttpStatus.OK);

		}

	}

	@Override
	public List<TaskEntity> getTaskByUserId(String userId) {
		TaskResponse r = new TaskResponse<>();
		try {
			List<TaskEntity> t = taskRepo.getTaskByUserId(userId);
			r.setMessage("entity got");
			r.setStatus(true);
			r.setData(t);
			return t;
		} catch (Exception e) {
			r.setMessage("cann't get");
			r.setStatus(false);

		}
		return null;
	}

	public List<TaskEntity> getTaskByAssignedTo(String assignedTo) {
		TaskResponse r = new TaskResponse<>();
		try {
			List<TaskEntity> t = taskRepo.getTaskByAssignedTo(assignedTo);
			r.setMessage("entity got");
			r.setStatus(true);
			r.setData(t);
			return t;
		} catch (Exception e) {
			r.setMessage("cann't get");
			r.setStatus(false);

		}
		return null;
	}

	@Override
	public List<TaskEntity> getTaskByEmployeeId(String employeeId) {
		TaskResponse r = new TaskResponse<>();
		try {
			List<TaskEntity> t = taskRepo.getTaskByEmployeeId(employeeId);
			r.setMessage("entity got");
			r.setStatus(true);
			r.setData(t);
			return t;
		} catch (Exception e) {
			r.setMessage("cann't get");
			r.setStatus(false);

		}
		return null;
	}

	@Override
	public List<TaskEntity> findByAssignedToAndStatus(String assignedTo, String status) {
		// TODO Auto-generated method stub
		return findByAssignedToAndStatus(assignedTo, status);
	}

	@Override
	public double findtotalOfActualHours(int taskId) {

		return findtotalOfActualHours(taskId);
	}

	@Override
	public double calculateRemainingHours(int taskId, double actualHours) {
		// TODO Auto-generated method stub
		{

			TaskEntity taskentitity = taskRepo.getById(taskId);

//        double sumOfAH = taskRepo.findtotalOfActualHours(taskentitity.getTaskId());
//
//        System.out.println("sumOfAH"+sumOfAH);
			double estimatedHrs = taskentitity.getEstimatedHours();

			double getRemaining = (estimatedHrs - (actualHours + taskentitity.getSumOfActual()));

//        System.out.print(getRemaining);
			double sumofactual = taskentitity.getSumOfActual();

			taskentitity.setActualHours(actualHours);
			taskentitity.setSumOfActual(actualHours + taskentitity.getSumOfActual());

			// taskentitity.setActualHours(actualHours);

			taskentitity.setRemainingHours(getRemaining);
			taskRepo.save(taskentitity);
			return getRemaining;
		}

	}

	@Override
	public String updateActualHours() {
		List<TaskEntity> returnedAllTasks = taskRepo.findAll();

		returnedAllTasks.forEach(task -> {
			task.setActualHours(0.0);
			
			taskRepo.save(task);
		});
		return "Updated actual hours";
	}

}
