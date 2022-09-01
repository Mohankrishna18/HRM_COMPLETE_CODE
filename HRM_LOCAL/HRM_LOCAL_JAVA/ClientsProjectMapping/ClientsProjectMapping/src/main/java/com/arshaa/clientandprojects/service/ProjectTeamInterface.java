package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.ProjectTeamMaster;

public interface ProjectTeamInterface {



   public ResponseEntity addProjectTeam(ProjectTeamMaster newTeam);

   public ResponseEntity getAllProjectTeams();

   public ResponseEntity updateProjectTeamById(int employeeprojectId, ProjectTeamMaster newTeamUpdate);

   public ResponseEntity deleteProjectTeam(Integer employeeprojectId);

	
}
