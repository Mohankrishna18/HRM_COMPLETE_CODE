package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.Projects;


public interface ProjectServiceInterface {


	public ResponseEntity addProject(Projects newProjects);

	public ResponseEntity getAllProject();

	public ResponseEntity updateProjectById(int projectId, Projects newProjectUpdate);

	public ResponseEntity deleteProject(int projectId);
	
}