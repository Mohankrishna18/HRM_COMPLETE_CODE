package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.ProjectTeamMaster;

public interface ProjectTeamInterface {



   public ResponseEntity addProjectTeam(ProjectTeamMaster newTeam);

   public ResponseEntity getAllProjectTeams(Integer ProjectId);

   public ResponseEntity updateProjectTeamById(int employeeprojectId, ProjectTeamMaster newTeamUpdate);

   public ResponseEntity deleteProjectTeam(Integer employeeprojectId);

   
// Madhu Changes
   public ResponseEntity getEmployeeProjectList(String employeeId);
   public ResponseEntity getTMNameByEmployeeId(String employeeId);
	
}
