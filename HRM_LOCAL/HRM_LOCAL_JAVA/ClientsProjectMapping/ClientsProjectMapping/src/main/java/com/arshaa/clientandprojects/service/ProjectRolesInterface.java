package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.ProjectRolesMaster;


public interface ProjectRolesInterface {

	public ResponseEntity addProjectRoles(ProjectRolesMaster newProjectRolesMaster);
	public ResponseEntity getAllProjectRoles();
}
