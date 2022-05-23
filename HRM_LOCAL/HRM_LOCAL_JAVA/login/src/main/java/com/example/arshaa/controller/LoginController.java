package com.example.arshaa.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.arshaa.entity.EmployeeLogin;
import com.example.arshaa.model.ResetPassword;
import com.example.arshaa.model.Response;
import com.example.arshaa.model.UserModel;
import com.example.arshaa.repository.UserRepository;
import com.example.arshaa.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController 
{
	@Autowired
	private UserService service;
	
	@Autowired
	UserRepository userRepo;
	
	//Api for test

		@GetMapping(path = "/test")
		public ResponseEntity<String> test() {
			return new ResponseEntity<>("hello", HttpStatus.OK);
		}
	
	@PostMapping("/addUsers")
    private void saveUsers(@RequestBody EmployeeLogin user) {
    	    
		 service.saveUsers(user);
    }
	
	@GetMapping("/authenticateUser")
	public ResponseEntity<UserModel> getUsersByEmailId(@RequestParam String employeeId,@RequestParam String password) {
            return service.getUsersByEmployeeId(employeeId, password);
    }
	
	@PutMapping("/resetPassword")
	public ResponseEntity updatePasswordByUsername(ResetPassword reset) {
		return service.updatePasswordByUsername(reset);
	}

	}

