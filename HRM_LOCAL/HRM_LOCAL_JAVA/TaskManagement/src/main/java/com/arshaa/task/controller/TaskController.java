package com.arshaa.task.controller;

import java.util.List;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.task.entity.TaskEntity;

import com.arshaa.task.repository.TaskRepository;
import com.arshaa.task.service.TaskService;

@RestController
@CrossOrigin("*")
@RequestMapping("/task")
public class TaskController {

	@Autowired(required = true)
	private TaskService serv;
	
	@Autowired
	private TaskRepository taskRepo;

	@PostMapping("/createNewTask")
	public ResponseEntity addNewTask(@RequestBody TaskEntity newTask) {
		return serv.addTask(newTask);
	}

	@GetMapping("/getTasks")
	public ResponseEntity getTasks() {
		return serv.getAllTasks();
	}

	@GetMapping("/getTaskByAssign/{assignedTo}")
	public List<TaskEntity> getTasks1(@PathVariable String assignedTo) {
		return serv.getTaskByAssignedTo(assignedTo);
	}

	@PutMapping("/updateTask/{taskId}")
	public ResponseEntity updateTasks(@PathVariable int taskId, @RequestBody TaskEntity taskUpdate) {
		return serv.updateTasks(taskId, taskUpdate);
	}

	@DeleteMapping("/deleteTask/{taskId}")
	public ResponseEntity DeleteTask(@PathVariable int taskId) {
		return serv.deleteTask(taskId);
	}

	@GetMapping("/getUserId/{userId}")
	public List<TaskEntity> GetByI(@PathVariable String userId) {
		return serv.getTaskByUserId(userId);
	}

	@GetMapping("/getAllTasksByEmployeeId/{employeeId}")
	public List<TaskEntity> GetByEmployeeId(@PathVariable String employeeId) {
		return serv.getTaskByEmployeeId(employeeId);
	}

	/// gettasksbystatusandemployeeId
	@GetMapping("/getByStatus/{employeeId}/{status}")
	public List<TaskEntity> findByEmployeeIdAndStatus(@PathVariable String employeeId, @PathVariable String status) {
		return taskRepo.findByEmployeeIdAndStatus(employeeId, status);

	}
   @PutMapping("/updateActualHoursToZero")
   public String  setActualHours() {
	   return serv.updateActualHours();
	   
   }

	@GetMapping("/getSumOfActualHours/{taskId}")
	public double findtotalOfActualHours(@PathVariable int taskId) {
		return taskRepo.findtotalOfActualHours(taskId);
	}

	@GetMapping("/calculateRemainingHours/{taskId}/{actualHours}")
	public ResponseEntity calculateRemainingHours(@PathVariable int taskId, @PathVariable double actualHours) {
		return new ResponseEntity(serv.calculateRemainingHours(taskId, actualHours), HttpStatus.OK);
	}
	

	   @GetMapping("/getTaskByEmployeeIdAndDate/{month}/{year}/{employeeId}")
       public ResponseEntity getTaskByEmployeeIdAndDate(@PathVariable int month,@PathVariable int year,@PathVariable String employeeId) {
           return new ResponseEntity(taskRepo.getTaskByEmployeeIdAndDate(month, year,employeeId),HttpStatus.OK);
       }
}