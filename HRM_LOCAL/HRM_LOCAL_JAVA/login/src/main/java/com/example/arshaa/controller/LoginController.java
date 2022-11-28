package com.example.arshaa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.responses.Constants;
import com.arshaa.responses.ModuleAccess;
import com.example.arshaa.entity.EmployeeLogin;
import com.example.arshaa.entity.Modules;
import com.example.arshaa.entity.OnBoardingEmployeeLogin;
import com.example.arshaa.entity.Role;
import com.example.arshaa.entity.RoleModuleAccess;
import com.example.arshaa.model.PreOnboard;
import com.example.arshaa.model.ResetPassword;
import com.example.arshaa.model.Response;
import com.example.arshaa.model.UserModel;
import com.example.arshaa.payload.RoleModulePayload;
import com.example.arshaa.repository.ModuleRepo;
import com.example.arshaa.repository.UserRepository;
import com.example.arshaa.service.ModuleService;
import com.example.arshaa.service.RoleModuleService;
import com.example.arshaa.service.RoleService;
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
	
	//Role Module Access declarations -----------sandhya chnages
	@Autowired
	private RoleService roleServ;
	@Autowired
	private ModuleService moduleServ;
	@Autowired
	private ModuleRepo mRepo;
	 Constants constants=new Constants() ;
	@Autowired
	private RoleModuleService rmServ;
	
	
	
	
	
	//Api for test

		@GetMapping(path = "/test")
		public ResponseEntity<String> test() {
			return new ResponseEntity<>("hello", HttpStatus.OK);
		}
	
	@PostMapping("/addUsers")
    private void saveUsers(@RequestBody EmployeeLogin user) {
    	    
		 service.saveUsers(user);
    }
	
	@PostMapping("/addUsersForPreOnboard")
    private void addUsers(@RequestBody OnBoardingEmployeeLogin user) {
    	    
		 service.addUsers(user);
    }
	@GetMapping("/authenticateUser")
	public ResponseEntity<UserModel> getUsersByEmailId(@RequestParam String employeeId,@RequestParam String password) {
            return service.getUsersByEmployeeId(employeeId, password);
    }
	
	@GetMapping("/preonboadreduserAuthenticate")
    public  ResponseEntity<PreOnboard> getUsersByEmailIdAndPassword(@RequestParam String email,@RequestParam String password) {
		return service.getUsersByEmailId(email, password);
	}
	
	@PutMapping("/resetPassword")
	public ResponseEntity updatePasswordByUsername(@RequestBody ResetPassword reset) {
		return service.updatePasswordByUsername(reset);
	}
	
	
	@GetMapping("/getEmployeeDataByUserType/{userType}")
	public EmployeeLogin findByUserType(@PathVariable String userType) {
		return service.findByUserType(userType);
	}
	
	@GetMapping("/getEmployeeByUserType/{userType}")
	public ResponseEntity findByTypeOfUser(@PathVariable String userType) {
		return new ResponseEntity(service.findByTypeOfUser(userType),HttpStatus.OK);
	}
	
	
	
	@GetMapping("/getEmployeeDataByEmail/{email}")
	public EmployeeLogin findByEmail(@PathVariable String email) {
		return service.findByEmail(email);
	}
	@GetMapping("/getEmployeeEmailByEmployeeId/{employeeId}")
	public String getEmailByEmployeeId(@PathVariable String employeeId) {
		return userRepo.findByEmployeeId(employeeId).getEmail();
	}	
	
		
//changes by MURALI MIRIYALA
    
	@GetMapping("/makeLoginsInActive/{employeeId}")
    public String makeLoginsInActive(@PathVariable String employeeId)
    {
    	return service.makeLoginsInActive(employeeId);
    }
	
	/* Role Module Access API's*------------------------sandhya changes*/
	
//Role service apis
	
	//Create Role Api
	@PostMapping("/createRole")
	public ResponseEntity createRole(@RequestBody Role role)
	{
		try{
			Role newRole=roleServ.createRole(role);
			return new ResponseEntity<>(new Response(newRole,constants.CREATED,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
		
	}
	//Update Role by roleId
	@PutMapping("/updateRoleByRoleId/{roleId}")
	public ResponseEntity updateRole( @RequestBody Role role,@PathVariable int roleId) {
		try{
			Role newRole=roleServ.updateRole(role,roleId);
			return new ResponseEntity<>(new Response(newRole,constants.UPDATED,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	
	//get api to fetch role by role id 
	@GetMapping("/getRoleById/{roleId}")
	public ResponseEntity getRoleById(@PathVariable int roleId) {
		try{
			Role newRole=roleServ.getRoleById(roleId);
			return new ResponseEntity<>(new Response(newRole,constants.FETCHING,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	//delete role by roleId api
	@DeleteMapping("/deleteRoleById/{roleId}")
	public ResponseEntity deleteRoleById(@PathVariable int roleId) {
		try{
		       roleServ.deleteRoleById(roleId);
			return new ResponseEntity<>(new Response(null,constants.DELETED,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	//get all roles api
	@GetMapping("/getAllRoles")
	public ResponseEntity getAllRoles(){
		try{
			List<Role> newRole=roleServ.getAllRoles();
			return new ResponseEntity(new Response(newRole,constants.FETCHING,false),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	
	//Module Api's

	//Create module api
	@PostMapping("/createModule")
	public ResponseEntity createModule(@RequestBody Modules module) {
		return new ResponseEntity<>(new Response(moduleServ.createModule(module),constants.CREATED,true),HttpStatus.OK);
	}
	//Update api to update module by moduleId
	@PutMapping("/updateModule/{moduleId}")
	public ResponseEntity updateModule(@RequestBody Modules module,@PathVariable int moduleId){
		return new ResponseEntity<>(new Response(moduleServ.updateModule(module,moduleId),constants.UPDATED,true),HttpStatus.OK);
	}
	//get api to get a module by moduleId
	@GetMapping("/getModuleById/{moduleId}")
	public ResponseEntity getModuleById(@PathVariable int moduleId) {
		return new ResponseEntity<>(new Response(moduleServ.getModuleById(moduleId),constants.FETCHING ,true),HttpStatus.OK);
	}
	//delete api to delete module by moduleId
	@DeleteMapping("/deleteModuleById/{moduleId}")
	public ResponseEntity deleteModuleById(@PathVariable int moduleId) {
		moduleServ.deleteModuleById(moduleId);
		return new ResponseEntity<>(new Response(null,constants.DELETED,true),HttpStatus.OK);
	}
	@GetMapping("/getAllModules")
	public ResponseEntity getAllModules()
	{return new ResponseEntity<>(new Response(moduleServ.getAllModules() ,constants.FETCHING ,true),HttpStatus.OK);}

	//Role Module Access Api's
	@PostMapping("/createRoleModule/{roleId}")
	public ResponseEntity createRoleModule(@RequestBody RoleModuleAccess module,@PathVariable int roleId) {
		try {
			if(rmServ.createRoleModule(module,roleId).equals(null)) throw new Exception();
			return new ResponseEntity(new Response(rmServ.createRoleModule(module,roleId) ,constants.CREATED,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	@PutMapping("/updateRoleModule/{rmAccessId}")
	public ResponseEntity updateRoleModule(@RequestBody RoleModuleAccess module,@PathVariable int rmAccessId) {
		return new ResponseEntity(new Response(rmServ.updateRoleModule(module, rmAccessId) ,constants.CREATED,true),HttpStatus.OK);
	}
	@GetMapping("/getRoleModuleById/{rmAccessId}")
	public ResponseEntity getRoleModuleById(@PathVariable int rmAccessId) {
		return new ResponseEntity(new Response(rmServ.getRoleModuleById(rmAccessId) ,constants.FETCHING,true),HttpStatus.OK);
	}
	@DeleteMapping("/deleteRoleModuleById/{rmAccessId}")
	public ResponseEntity deleteRoleModuleById(@PathVariable int rmAccessId) {
		rmServ.deleteRoleModuleById(rmAccessId);
		return new ResponseEntity<>(new Response(null,constants.DELETED,true),HttpStatus.OK);
	}
	@GetMapping("/getAllRoleModuleAccess")
	public ResponseEntity getAllRoleModuleAccess(){
		return new ResponseEntity(new Response(rmServ.getAllRoleModuleAccess() ,constants.CREATED,true),HttpStatus.OK);
	}
	@GetMapping("/getRoleModuleAccessByRoleId/{roleId}")
	public ResponseEntity getRoleModuleAccessByRoleId(@PathVariable int roleId){
//		return new ResponseEntity(new Response(rmServ.getRoleModuleAccessByRoleId(roleId) ,constants.FETCHING,true),HttpStatus.OK);
		return new ResponseEntity(rmServ.getRoleModuleAccessByRoleId(roleId),HttpStatus.OK);
	}
	@PostMapping("/moduleAccess")
	public ResponseEntity moduleAccess(@RequestBody RoleModulePayload rmPayload) {

		return new ResponseEntity<>(rmServ.moduleAccess(rmPayload),HttpStatus.OK);
	}
	@PostMapping("/createAllModuleAccess")
	public ResponseEntity createAllModuleAccess(@RequestBody List<ModuleAccess> getModules){
		try {
		
			return new ResponseEntity(new Response(rmServ.createAllModuleAccess(getModules) ,constants.CREATED,true),HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Response(null,e.getMessage(),false),HttpStatus.OK);
		}
	}
	
	}

