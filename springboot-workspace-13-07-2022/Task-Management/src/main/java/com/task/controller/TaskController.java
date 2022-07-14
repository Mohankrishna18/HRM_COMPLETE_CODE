package com.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.TaskEntity;
import com.task.service.TaskService;


@RestController
@CrossOrigin("*")
@RequestMapping("/task")
public class TaskController {

	@Autowired(required=true)
	private TaskService serv;
	
	@PostMapping("/createNewTask")
	public ResponseEntity addNewTask(@RequestBody TaskEntity newTask) {
		return serv.addTask(newTask);
	}
	
	@GetMapping("/getTasks")
	public ResponseEntity getTasks() {
		return serv.getAllTasks();
	}
}
