package com.arshaa.clientandprojects.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.clientandprojects.entity.Projects;
import com.arshaa.clientandprojects.model.ProjectModel;
import com.arshaa.clientandprojects.model.ProjectResponse;
import com.arshaa.clientandprojects.repository.ClientRepository;
import com.arshaa.clientandprojects.repository.ProjectRepository;

@Service
public class ProjectServiceImplementation implements ProjectServiceInterface {

	@Autowired(required = true)
	private ProjectRepository projectRepo;

	@Autowired(required = true)
	private ClientRepository repo;

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
		List<ProjectModel> projectModels = new ArrayList();
		try {
			List<Projects> newProjectData = projectRepo.findAll();
			newProjectData.forEach(project -> {
				String clientName = repo.findByClientId(project.getClientId()).getClientName();
				ProjectModel returnedModel = returnModel(clientName, project);
				projectModels.add(returnedModel);
			});

			pr.setStatus(true);
			pr.setMessage("Data Fetching");
			pr.setData(projectModels);
			return new ResponseEntity(pr, HttpStatus.OK);
		} catch (Exception e) {

			pr.setStatus(false);
			pr.setMessage(e.getMessage());
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}
	
				

	private ProjectModel returnModel(String name, Projects project) {
		ProjectModel model = new ProjectModel();
		model.setClientName(name);
		model.setProjectId(project.getProjectId());
		model.setProjectName(project.getProjectName());
		model.setStatus(project.getStatus());
		model.setStartDate(project.getStartDate());
		model.setEndDate(project.getEndDate());
		model.setDescription(project.getDescription());
		model.setPriority(project.getPriority());
		model.setRate(project.getRate());
		model.setprojectManager(project.getprojectManager());
		return model;
	}

	// To Update the Project

	@Override
	public ResponseEntity updateProjectById(int projectId, Projects newProjectUpdate) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			Projects updateProject = projectRepo.findByProjectId(projectId);
			updateProject.setProjectName(newProjectUpdate.getProjectName());
			updateProject.setStatus(newProjectUpdate.getStatus());
			updateProject.setStartDate(newProjectUpdate.getStartDate());
			updateProject.setEndDate(newProjectUpdate.getEndDate());
			updateProject.setDescription(newProjectUpdate.getDescription());
			updateProject.setRate(newProjectUpdate.getRate());
			updateProject.setPriority(newProjectUpdate.getPriority());
			updateProject.setprojectManager(newProjectUpdate.getprojectManager());

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
	public ResponseEntity deleteProject(Integer projectId) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			Projects deleteProject = projectRepo.findByProjectId(projectId);
			projectRepo.deleteById(deleteProject.getProjectId());
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
