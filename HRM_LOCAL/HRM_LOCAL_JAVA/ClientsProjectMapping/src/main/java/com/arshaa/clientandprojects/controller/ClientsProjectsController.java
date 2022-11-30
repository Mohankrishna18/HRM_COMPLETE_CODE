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
import com.arshaa.clientandprojects.repository.ProjectRepository;
import com.arshaa.clientandprojects.service.ClientServiceInterface;
import com.arshaa.clientandprojects.service.ProjectRolesInterface;
import com.arshaa.clientandprojects.service.ProjectServiceInterface;
import com.arshaa.clientandprojects.service.ProjectTeamInterface;

@RequestMapping("/clientProjectMapping")
@RestController
@CrossOrigin("*")
public class ClientsProjectsController {

	@Autowired(required = true)
	private ClientServiceInterface clientServ;

	@Autowired(required = true)
	private ProjectServiceInterface projectServ;

	@Autowired(required = true)
	private ProjectRolesInterface projectRoleserv;

	@Autowired(required = true)
	private ProjectTeamInterface projectTeamServ;

	@Autowired
	private ProjectRepository projectRepository;

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
	public ResponseEntity updateClientById(@PathVariable int clientId, @RequestBody Clients newClientUpdate) {
		return clientServ.updateClientById(clientId, newClientUpdate);
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
		return projectServ.updateProjectById(projectId, newProjectUpdate);
	}

	@DeleteMapping("/deleteProject/{projectId}")
	public ResponseEntity deleteProject(@PathVariable Integer projectId) {
		return projectServ.deleteProject(projectId);
	}

	// Madhu Changes

	// For Project Manager
	@GetMapping("/getActiveProjectsByEmpId/{employeeId}")
	public ResponseEntity getActiveProjectsByEmployeeId(@PathVariable String employeeId) {
		return projectServ.getActiveProjectsByEmployeeId(employeeId);
	}

	// For BUH
	@GetMapping("/getActiveProjectsByBUHId/{buhId}")
	public ResponseEntity getActiveProjectsByBUHId(@PathVariable String buhId) {
		return projectServ.getActiveProjectsBybuhId(buhId);
	}

	// For PMO and CEO
	@GetMapping("/getAllActiveProjects/{status}")
	public ResponseEntity getAllActiveProjects(@PathVariable String status) {
		return projectServ.getAllActiveProjectss(status);
	}

	// get projects by employeeId
	@GetMapping("/getAllProjectsbyemployee/{employeeId}")
	public ResponseEntity getAllProjectsById(@PathVariable String employeeId) {
		return projectTeamServ.getAllProjectsByEmployeeId(employeeId);
	}

	// For employee
	@GetMapping("/getActiveProjectsByEmpIdForEmployee/Active/{employeeId}")
	public ResponseEntity getEmployeeProjectList(@PathVariable String employeeId) {
		return projectTeamServ.getEmployeeProjectList(employeeId);
	}

	// Business Logic - displaying data in accordance of userType, employeeId and
	// the status
	@GetMapping("/getProjectsByUser/{userType}/{employeeId}")
	public ResponseEntity getBasedOnUser(@PathVariable String userType, @PathVariable String employeeId) {
		return projectServ.getProjectsByUserType(userType, employeeId);
	}

	// Getting client name by client ID at ProjectMaster
	@GetMapping("/getClientNameByClientID/{clientId}")
	public ResponseEntity getBasedOnClientId(@PathVariable int clientId) {
		return projectServ.getClientNameByClientID(clientId);
	}

//		@GetMapping("/getRoleBasedEmployeesByEmployeeId/{status}/{employeeId}")
//	    public ResponseEntity getRoleBasedEmployeesByEmployeeId( @PathVariable String employeeId,@PathVariable String status) {
//	         return projectServ.getRoleBasedEmployeesByEmployeeId(employeeId, status);
//	    }

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

	@GetMapping("/getAllProjectTeams/Active/{projectId}")
	public ResponseEntity getAllProjectTeams(@PathVariable("projectId") Integer projectId) {
		return projectTeamServ.getAllProjectTeams(projectId);
	}

	@PutMapping("/updateProjectTeamById/{employeeprojectId}")
	public ResponseEntity updateProjectTeamById(@PathVariable int employeeprojectId,
			@RequestBody ProjectTeamMaster newTeamUpdate) {
		return projectTeamServ.updateProjectTeamById(employeeprojectId, newTeamUpdate);
	}

	@DeleteMapping("/deleteProjectTeam/{employeeprojectId}")
	public ResponseEntity deleteProjectTeam(@PathVariable Integer employeeprojectId) {
		return projectTeamServ.deleteProjectTeam(employeeprojectId);
	}

	@GetMapping("/getOneProjectByProjectId/{projectId}")
	public Projects getOneProjectByProjectId(@PathVariable("projectId") Integer projectId) {
		return projectRepository.findByProjectId(projectId);
	}

	@GetMapping("/getTeamMemberNameByEmployeeID/{employeeId}")
	public ResponseEntity getTeamMembersNameByEmployeeId(@PathVariable String employeeId) {

		return projectTeamServ.getTMNameByEmployeeId(employeeId);
	}

	@GetMapping("/getProjectsByClientId/{clientId}")
	public ResponseEntity getProjectsByClientId(@PathVariable int clientId) {
		return projectServ.getProjectNamesByClientId(clientId);
	}
	
	@GetMapping("/getProjectsByClientName/{clientName}")
	public ResponseEntity getProjectsByClientId(@PathVariable String clientName) {
		return projectServ.getProjectNamesByClientName(clientName);
	}

//	@GetMapping("/getClientIdByName/{clientName}")
//	public int getClientIdByClientName(@PathVariable String clientName) {
//     return clientServ.getClientIdByClientName(clientName);
//
//	}

//	@GetMapping("/getDepartmentIdByName/{departmentName}")
//	public int getDepartmentIdByDepartmentName(@PathVariable String departmentName) {
//     return serv.getDepartmentIdByDepartmentName(departmentName);
//
//	}
//	
//	@GetMapping("/getDepartmentNameById/{departmentId}")
//	public String getDepartmentNameById(@PathVariable int departmentId)
//	{
//		Departmentmaster dm = repo.findByDepartmentId(departmentId);
//		return dm.getDepartmentName();
//	}

//	@GetMapping("/AllProjectTeamCountWithActiveStatus/Active/{projectId}")
//	public Long AllProjectTeamCountWithActiveStatus(@PathVariable("projectId") Integer projectId) {
//		return projectTeamServ.AllProjectTeamCountWithActiveStatus(projectId);
//	}
}
