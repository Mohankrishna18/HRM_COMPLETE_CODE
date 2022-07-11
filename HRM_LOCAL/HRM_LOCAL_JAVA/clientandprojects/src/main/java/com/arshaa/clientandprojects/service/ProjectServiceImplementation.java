package com.arshaa.clientandprojects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.clientandprojects.entity.Projects;
import com.arshaa.clientandprojects.model.ProjectResponse;
import com.arshaa.clientandprojects.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectServiceInterface {

	@Autowired(required = true)
	private ProjectRepository projectRepo;
	
	// To Add Projects
			public ResponseEntity addProject(Projects newProjects) {
				ProjectResponse pr = new ProjectResponse<>();
				try {
					Projects newProjectData = projectRepo.save(newProjects);
					pr.setStatus(true);
					pr.setMessage("Data added successfully");
					pr.setData(newProjectData);
					return new ResponseEntity(pr, HttpStatus.OK);
				} catch (Exception e) {

					pr.setStatus(false);
					pr.setMessage(e.getMessage());
					return new ResponseEntity(pr, HttpStatus.OK);
				}
			}

			
			// To Get the Projects

			public ResponseEntity getAllProject() {
				ProjectResponse pr = new ProjectResponse<>();
				try {

					List<Projects> newProjectData = projectRepo.findAll();
					pr.setStatus(true);
					pr.setMessage("Data Fetching");
					pr.setData(newProjectData);
					return new ResponseEntity(pr, HttpStatus.OK);
				} catch (Exception e) {


					pr.setStatus(false);
					pr.setMessage(e.getMessage());
					return new ResponseEntity(pr, HttpStatus.OK);
				}
			}
			
			// To Update the Project

			@Override
			public ResponseEntity updateProjectById(int projectId, Projects newProjectUpdate) {
				ProjectResponse pr = new ProjectResponse<>();
				try {
					Projects updateProject = projectRepo.getById(projectId);
					updateProject.setProjectName(newProjectUpdate.getProjectName());
					updateProject.setStartDate(newProjectUpdate.getStartDate());
					updateProject.setEndDate(newProjectUpdate.getEndDate());
					updateProject.setLocation(newProjectUpdate.getLocation());
					updateProject.setRate(newProjectUpdate.getRate());
	                updateProject.setPriority(newProjectUpdate.getPriority());
	                updateProject.setProjectManger(newProjectUpdate.getProjectManger());

					Projects latestProject = projectRepo.save(updateProject);
					System.out.println(latestProject);

					pr.setStatus(true);
					pr.setMessage("Data added successfully");
					pr.setData(latestProject);

					return new ResponseEntity(pr, HttpStatus.OK);
				} catch (Exception e) {
					// TODO: handle exception

					pr.setStatus(false);
					pr.setMessage(e.getMessage());
					return new ResponseEntity(pr, HttpStatus.OK);
				}

			}



			// To delete Project

			@Override
						public ResponseEntity deleteProject(int projectId) {
							ProjectResponse pr = new ProjectResponse<>();
							try {
								Projects deleteProject = projectRepo.getById(projectId);
								projectRepo.delete(deleteProject);
								pr.setStatus(true);
								pr.setMessage("Deleted successfully");
								return new ResponseEntity(pr, HttpStatus.OK);
							} catch (Exception e) {
								// TODO: handle exception

								pr.setStatus(false);
								pr.setMessage(e.getMessage());
								return new ResponseEntity(pr, HttpStatus.OK);
							}
						}


	
}
