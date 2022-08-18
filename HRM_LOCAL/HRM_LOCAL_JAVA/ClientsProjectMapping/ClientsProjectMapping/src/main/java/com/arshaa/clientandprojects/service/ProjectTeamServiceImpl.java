package com.arshaa.clientandprojects.service;

import org.springframework.stereotype.Service;

import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.model.ProjectTeamResponse;
import com.arshaa.clientandprojects.repository.ProjectTeamRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;  


@Service
public class ProjectTeamServiceImpl implements ProjectTeamInterface {

	@Autowired(required=true)
	private ProjectTeamRepository ptmrepo;
	
	// To Add(Create) Project Team
		public ResponseEntity addProjectTeam(ProjectTeamMaster newTeam) {
			ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
	                try{
	                     ProjectTeamMaster newProjectTeamData = ptmrepo.save(newTeam);
	                     ptrm.setStatus(true);
			             ptrm .setMessage("Data added successfully");
		                 ptrm .setData(newProjectTeamData);
				         return new ResponseEntity(ptrm , HttpStatus.OK);
	                   }catch (Exception e) {

				         ptrm .setStatus(false);
				         ptrm .setMessage(e.getMessage());
				return new ResponseEntity(ptrm , HttpStatus.OK);
			}
		}
		
		
		 // To Get(Read) All Project Teams
		   public ResponseEntity getAllProjectTeams() {
	                ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
	                try{
	                    List<ProjectTeamMaster> newProjectTeamData = ptmrepo.findAll();
	                   ptrm.setStatus(true);
				             ptrm .setMessage("Data Fetching");
			                 ptrm .setData(newProjectTeamData);
					         return new ResponseEntity(ptrm , HttpStatus.OK);
		                   }catch (Exception e) {

					         ptrm .setStatus(false);
					         ptrm .setMessage(e.getMessage());
					return new ResponseEntity(ptrm , HttpStatus.OK);
				}
		}

	   // To Edit(Update) Project Team
		   @Override
	   public ResponseEntity updateProjectTeamById(int employeeprojectId, ProjectTeamMaster newTeamUpdate) {
		   ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		   try {
			   ProjectTeamMaster updateProjectTeam = ptmrepo.findByemployeeprojectId(employeeprojectId);
//			   updateProjectTeam.setEmployeeprojectId(employeeprojectId);
			   updateProjectTeam.setEmployeeName(newTeamUpdate.getEmployeeName());
			   updateProjectTeam.setDesignationName(newTeamUpdate.getDesignationName());
			   updateProjectTeam.setDepartmentName(newTeamUpdate.getDepartmentName());
			   updateProjectTeam.setStartDate(newTeamUpdate.getStartDate());
			   updateProjectTeam.setEndDate(newTeamUpdate.getEndDate());
			   updateProjectTeam.setStatus(newTeamUpdate.getStatus());
			   updateProjectTeam.setPrmasterId(newTeamUpdate.getPrmasterId());
			   updateProjectTeam.setAssignedDate(newTeamUpdate.getAssignedDate());
			   updateProjectTeam.setProjectAllocation(newTeamUpdate.getProjectAllocation());
			   
			   ProjectTeamMaster latestTeam = ptmrepo.save(updateProjectTeam);
			   System.out.println(latestTeam);
			   ptrm.setStatus(true);
			   ptrm.setMessage("Data added successfully");
			   ptrm.setData(latestTeam);

			  return new ResponseEntity(ptrm,HttpStatus.OK);
			  }catch (Exception e){

			  ptrm.setStatus(false);
			  ptrm.setMessage(e.getMessage());
			  return new ResponseEntity(ptrm,HttpStatus.OK);
			  }

	}

	   // To Delete Project Team
		   @Override
		   public ResponseEntity deleteProjectTeam(Integer employeeprojectId) {
		   ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		    try{
		       ProjectTeamMaster deleteProjectTeam = ptmrepo.findByemployeeprojectId(employeeprojectId);
		       ptmrepo.deleteById(deleteProjectTeam.getEmployeeprojectId());
		       ptrm.setStatus(true);
		       ptrm.setMessage("Deleted successfully");
		       return new ResponseEntity(ptrm,HttpStatus.OK);
		   } catch (Exception e){
			   ptrm.setStatus(false);
			   ptrm.setMessage(e.getMessage());
		   }
		    return new ResponseEntity(ptrm,HttpStatus.OK);
		   	}
}
