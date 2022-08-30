package com.arshaa.clientandprojects.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.clientandprojects.entity.ProjectRolesMaster;
import com.arshaa.clientandprojects.model.ProjectRolesResponse;
import com.arshaa.clientandprojects.repository.ProjectRolesRepository;

@Service
public class ProjectRolesServiceImpl implements ProjectRolesInterface  {

	@Autowired(required = true)
	private ProjectRolesRepository prmrepo;
	
	// To Add(Insert) Project Roles
	
	public ResponseEntity addProjectRoles(ProjectRolesMaster newProjectRolesMaster) {
		ProjectRolesResponse prrm = new ProjectRolesResponse<>();
		try {
			ProjectRolesMaster newProjectRolesData = prmrepo.save(newProjectRolesMaster);
			prrm.setStatus(true);
			prrm.setMessage("Data added successfully");
			prrm.setData(newProjectRolesData);
			return new ResponseEntity(prrm,HttpStatus.OK);
		} catch (Exception e) {

			prrm.setStatus(false);
			prrm.setMessage(e.getMessage());
			return new ResponseEntity(prrm, HttpStatus.OK);
		}
	}
	
	// To Get Project Roles
	
		public ResponseEntity getAllProjectRoles() {
			ProjectRolesResponse prrm = new ProjectRolesResponse<>();
			try {
	                    List<ProjectRolesMaster> newProjectRolesData = prmrepo.findAll();
	                    prrm .setMessage("Data Fetching");
				                 prrm .setData(newProjectRolesData);
						         return new ResponseEntity(prrm  , HttpStatus.OK);
			                   }catch (Exception e) {

						         prrm .setStatus(false);
						         prrm .setMessage(e.getMessage());
						return new ResponseEntity(prrm  , HttpStatus.OK);
					}
			}
}
