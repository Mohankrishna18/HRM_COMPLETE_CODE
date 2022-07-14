package com.task.service;

import java.util.List;

import com.task.entity.TaskEntity;


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

	@Override
	public ResponseEntity addTask(TaskEntity t) {
		return new ResponseEntity(taskRepo.save(t),HttpStatus.OK);
	}

	@Override
	public ResponseEntity getAllTasks() {
		// TODO Auto-generated method stub
		return null;
	}

}
