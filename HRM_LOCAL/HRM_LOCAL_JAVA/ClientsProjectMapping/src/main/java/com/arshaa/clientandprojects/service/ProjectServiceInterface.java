	package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.Projects;


public interface ProjectServiceInterface {


	public ResponseEntity addProject(Projects newProjects);

	public ResponseEntity getAllProject();

	public ResponseEntity updateProjectById(int projectId, Projects newProjectUpdate);

	public ResponseEntity deleteProject(Integer projectId);
	
	// Madhu Changes
	
		public ResponseEntity getAllActiveProjectss(String status);
		
		public ResponseEntity getActiveProjectsByEmployeeId(String employeeId);
		
		public ResponseEntity getActiveProjectsBybuhId(String buhId);
		
		public ResponseEntity getProjectsByUserType(String userType, String employeeId);
		
		public ResponseEntity getClientNameByClientID(int clientName);
		
		public ResponseEntity getProjectNamesByClientId(int clientId);
		//get projects by employeeId
		public ResponseEntity getAllProjectsById(String employeeId);
		public ResponseEntity getProjectNamesByClientName(String clientName);

	
}