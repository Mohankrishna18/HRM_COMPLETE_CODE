package com.arshaa.clientandprojects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.clientandprojects.entity.Clients;
import com.arshaa.clientandprojects.entity.ProjectRolesMaster;
import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.entity.Projects;
import com.arshaa.clientandprojects.service.ClientServiceInterface;
import com.arshaa.clientandprojects.service.ProjectRolesInterface;
import com.arshaa.clientandprojects.service.ProjectServiceInterface;
import com.arshaa.clientandprojects.service.ProjectTeamInterface;


@RequestMapping("/clientProjectMapping")
@RestController
@CrossOrigin("*")
public class ClientsProjectsController {

	
	@Autowired(required=true)
	private ClientServiceInterface clientServ;
	
	@Autowired(required=true)
	private ProjectServiceInterface projectServ;
	
	@Autowired(required=true)
	private ProjectRolesInterface projectRoleserv;
	
	@Autowired(required=true)
	private ProjectTeamInterface projectTeamServ;
	
	// Client Screen API's 
	
	@PostMapping("/addClients")
	public ResponseEntity addClient(@RequestBody Clients newClients) {
		return clientServ.addClient(newClients);
	}
	
	@GetMapping("/getAllClients")
	public ResponseEntity getAllClient() {
	return clientServ.getAllClient();	
	}
	
	@PutMapping("/updateClientById/{clientId}") 
	public ResponseEntity updateClientById(@PathVariable int clientId,@RequestBody Clients newClientUpdate) {
		return clientServ.updateClientById(clientId,newClientUpdate);
	}
	
	@DeleteMapping("/deleteClient/{clientId}")
	public ResponseEntity deleteClient(@PathVariable int clientId) {
		return clientServ.deleteClient(clientId);
	}
	
	// Project Screen API's
	
	@PostMapping("/addProjects")
	public ResponseEntity addProject(@RequestBody Projects newProjects) {
		return projectServ.addProject(newProjects);
	}
	
	@GetMapping("/getAllProjects")
	public ResponseEntity getAllProject() {
		return projectServ.getAllProject();
	}
	
	@PutMapping("/updateProjectById/{projectId}")
	public ResponseEntity updateProjectById(@PathVariable int projectId, @RequestBody Projects newProjectUpdate) {
		return projectServ.updateProjectById(projectId,newProjectUpdate);
	}
	
	@DeleteMapping("/deleteProject/{projectId}")
	public ResponseEntity deleteProject(@PathVariable Integer projectId) {
		return projectServ.deleteProject(projectId);
	}
	
	// Project Roles API's
	
	@PostMapping("/addProjectRoles")
	public ResponseEntity addProjectRoles(@RequestBody ProjectRolesMaster newProjectRolesMaster) {
		return projectRoleserv.addProjectRoles(newProjectRolesMaster);
	}
	
	@GetMapping("/getAllProjectRoles")
	public ResponseEntity getAllProjectRoles() {
		return projectRoleserv.getAllProjectRoles();
	}
	
	// Project Team API's
	
	@PostMapping("/addProjectTeam")
	public ResponseEntity addProjectTeam(@RequestBody ProjectTeamMaster newTeam) {
		return projectTeamServ.addProjectTeam(newTeam);
	}
	
	@GetMapping("/getAllProjectTeams")
	public ResponseEntity getAllProjectTeams() {
		return projectTeamServ.getAllProjectTeams();
	}
	
	@PutMapping("/updateProjectTeamById/{employeeprojectId}")
	public ResponseEntity updateProjectTeamById(@PathVariable int employeeprojectId,@RequestBody ProjectTeamMaster newTeamUpdate) {
		return projectTeamServ.updateProjectTeamById(employeeprojectId, newTeamUpdate);
	}
	
	@DeleteMapping("/deleteProjectTeam/{employeeprojectId}")
	public ResponseEntity deleteProjectTeam(@PathVariable Integer employeeprojectId) {
		return projectTeamServ.deleteProjectTeam(employeeprojectId);
	}
}
