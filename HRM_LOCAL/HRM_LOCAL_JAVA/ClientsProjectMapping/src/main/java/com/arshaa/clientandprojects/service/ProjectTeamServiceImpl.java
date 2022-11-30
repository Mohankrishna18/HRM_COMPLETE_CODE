package com.arshaa.clientandprojects.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.clientandprojects.entity.Clients;
import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.entity.Projects;
import com.arshaa.clientandprojects.model.AssignProjectName;
import com.arshaa.clientandprojects.model.ProjectModel;
import com.arshaa.clientandprojects.model.ProjectTeamResponse;
import com.arshaa.clientandprojects.repository.ClientRepository;
import com.arshaa.clientandprojects.repository.ProjectRepository;
import com.arshaa.clientandprojects.repository.ProjectTeamRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Service
public class ProjectTeamServiceImpl implements ProjectTeamInterface {

	@Autowired(required = true)
	private ProjectTeamRepository ptmrepo;
	
	@Autowired
	private RestTemplate template;
	

	@Autowired(required = true)
	private ProjectRepository projectRepo;

	@Autowired(required = true)
	private ClientRepository repo;

	// To Add(Create) Project Team
	public ResponseEntity addProjectTeam(ProjectTeamMaster newTeam) {
		
		String paUrl ="http://empService/emp/getProjectAllocationByEmployeeId/";
		
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		try {
			Integer currentPercentage = template.getForObject(paUrl+newTeam.getEmployeeId(), Integer.class);
			Integer percentageToAllocate = newTeam.getProjectAllocation();
			
			Integer percentageCanBeAllocated = 100-currentPercentage;
			if(percentageToAllocate <= percentageCanBeAllocated) {
				
			ProjectTeamMaster newProjectTeamData = ptmrepo.save(newTeam);
			Projects p= projectRepo.getById(newTeam.getProjectId());
			newProjectTeamData.setClientName(p.getClientName());
			newProjectTeamData.setProjectName(p.getProjectName());
			newProjectTeamData.setProjectManager(p.getProjectManager());
			ptmrepo.save(newProjectTeamData);
			AssignProjectName apn = new AssignProjectName();
			apn.setProjectName(newTeam.getProjectName());
			apn.setProjectAllocation(newTeam.getProjectAllocation());
			//Integer projectAllocation =newProjectTeamData.getProjectAllocation();
			template.postForEntity("http://empService/emp/saveProjectAllocationPercentAfterMapping/"+newProjectTeamData.getEmployeeId(), apn, Boolean.class);
			ptrm.setStatus(true);
			ptrm.setMessage("Data added successfully");
			ptrm.setData(newProjectTeamData);
			return new ResponseEntity(ptrm, HttpStatus.OK);
			}else {
				throw new Exception("Cannot be allocated more than " + percentageCanBeAllocated + " %");
			}
			
		} catch (Exception e) {

			ptrm.setStatus(false);
			ptrm.setMessage(e.getMessage());
			return new ResponseEntity(ptrm, HttpStatus.NOT_ACCEPTABLE);
		}
	}

	// To Get(Read) All Project Teams
	public ResponseEntity getAllProjectTeams(Integer projectId) {
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		try {
			List<ProjectTeamMaster> newProjectTeamData = ptmrepo.findAllByProjectId(projectId);
			List<ProjectTeamMaster> activeList = newProjectTeamData.stream().filter(team -> {
				return team.getStatus().equalsIgnoreCase("Active");
			}).collect(Collectors.toList());
			ptrm.setStatus(true);
			ptrm.setMessage("Data Fetching");
			ptrm.setData(activeList);
			return new ResponseEntity(ptrm, HttpStatus.OK);
		} catch (Exception e) {

			ptrm.setStatus(false);
			ptrm.setMessage(e.getMessage());
			return new ResponseEntity(ptrm, HttpStatus.OK);
		}
	}

	// To Edit(Update) Project Team
	@Override
	public ResponseEntity updateProjectTeamById(int employeeprojectId, ProjectTeamMaster newTeamUpdate) {
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		try {
			ProjectTeamMaster updateProjectTeam = ptmrepo.findByemployeeprojectId(employeeprojectId);
//               updateProjectTeam.setEmployeeprojectId(employeeprojectId);
			updateProjectTeam.setFullName(newTeamUpdate.getFullName());
			updateProjectTeam.setDesignationName(newTeamUpdate.getDesignationName());
			updateProjectTeam.setDepartmentName(newTeamUpdate.getDepartmentName());
			updateProjectTeam.setStartDate(newTeamUpdate.getStartDate());
			updateProjectTeam.setEndDate(newTeamUpdate.getEndDate());
			updateProjectTeam.setStatus(newTeamUpdate.getStatus());
			updateProjectTeam.setPrmasterId(newTeamUpdate.getPrmasterId());
			updateProjectTeam.setAssignedDate(newTeamUpdate.getAssignedDate());
			updateProjectTeam.setProjectAllocation(newTeamUpdate.getProjectAllocation());

			AssignProjectName uapn = new AssignProjectName();
			uapn.setProjectName(newTeamUpdate.getProjectName());
			uapn.setProjectAllocation(newTeamUpdate.getProjectAllocation());
			//Integer projectAllocation =newProjectTeamData.getProjectAllocation();
			template.postForEntity("http://empService/emp/updateProjectAllocationPercentAfterMapping/"+updateProjectTeam.getEmployeeId(), uapn, AssignProjectName.class);
			
			ProjectTeamMaster latestTeam = ptmrepo.save(updateProjectTeam);
			System.out.println(latestTeam);
			ptrm.setStatus(true);
			ptrm.setMessage("Data added successfully");
			ptrm.setData(latestTeam);

			return new ResponseEntity(ptrm, HttpStatus.OK);
		} catch (Exception e) {

			ptrm.setStatus(false);
			ptrm.setMessage(e.getMessage());
			return new ResponseEntity(ptrm, HttpStatus.EXPECTATION_FAILED);
		}

	}

	// To Delete Project Team
	@Override
	public ResponseEntity deleteProjectTeam(Integer employeeprojectId) {
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		try {
			ProjectTeamMaster deleteProjectTeam = ptmrepo.findByemployeeprojectId(employeeprojectId);
			ptmrepo.deleteById(deleteProjectTeam.getEmployeeprojectId());
			ptrm.setStatus(true);
			ptrm.setMessage("Deleted successfully");
//			AssignProjectName uapn = new AssignProjectName();
//			uapn.setProjectName(deleteProjectTeam.getProjectName());
//			uapn.setProjectAllocation(deleteProjectTeam.getProjectAllocation());
//			template.postForEntity("http://empService/emp/updateProjectAllocationPercentAfterMapping/"+deleteProjectTeam.getEmployeeprojectId(), uapn, AssignProjectName.class);
//			
			return new ResponseEntity(ptrm, HttpStatus.OK);
		} catch (Exception e) {
			ptrm.setStatus(false);
			ptrm.setMessage(e.getMessage());
		}
		return new ResponseEntity(ptrm, HttpStatus.EXPECTATION_FAILED);
	}

	// Madhu Changes
	@Override
	public ResponseEntity getEmployeeProjectList(String employeeId) {
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		List<ProjectModel> projectModels = new ArrayList();
		try {
			// List<Projects> newProjectData = projectRepo.findAll();
			java.util.List<ProjectTeamMaster> getData = ptmrepo.findAllByEmployeeIdAndStatus(employeeId, "Active");
			getData.forEach(project -> {
				Projects p = projectRepo.findByProjectId(project.getProjectId());
				Clients c = repo.findByClientId(p.getClientId());
				ProjectModel returnedModel = returnModelProjectTeam(c, project, p);
				projectModels.add(returnedModel);
			});
			if (!getData.isEmpty()) {
				ptrm.setStatus(true);
				ptrm.setMessage("Data Fetching");
				ptrm.setData(projectModels);
				return new ResponseEntity(ptrm, HttpStatus.OK);
			} else {
				ptrm.setStatus(false);
				ptrm.setMessage("Data Not Found");
				return new ResponseEntity(ptrm, HttpStatus.OK);
			}
		} catch (Exception e) {
			ptrm.setStatus(false);
			ptrm.setMessage(e.getMessage());
			return new ResponseEntity(ptrm, HttpStatus.OK);
		}
	}

	private ProjectModel returnModel(Clients c, Projects project) {
		ProjectModel model = new ProjectModel();
		model.setClientName(c.getClientName());
		model.setProjectId(project.getProjectId());
		model.setProjectName(project.getProjectName());
		model.setStatus(project.getStatus());
		model.setBusinessUnit(project.getBusinessUnit());
		model.setStartDate(project.getStartDate());
		model.setEndDate(project.getEndDate());
		model.setDescription(project.getDescription());
		model.setPriority(project.getPriority());
		model.setRate(project.getRate());
		model.setProjectManager(project.getProjectManager());
		return model;
	}

	private ProjectModel returnModelProjectTeam(Clients c, ProjectTeamMaster project, Projects p) {
		ProjectModel model = new ProjectModel();
		model.setClientName(c.getClientName());
		model.setProjectId(project.getProjectId());
		model.setProjectName(p.getProjectName());
		model.setStatus(project.getStatus());
		model.setBusinessUnit(p.getBusinessUnit());
		model.setStartDate(project.getStartDate());
		model.setEndDate(project.getEndDate());
		model.setDescription(p.getDescription());
		model.setPriority(p.getPriority());
		model.setRate(p.getRate());
		model.setProjectManager(p.getProjectManager());
		return model;
	}

	@Override
	public ResponseEntity getTMNameByEmployeeId(String employeeId) {
		ProjectTeamResponse ptrm = new ProjectTeamResponse<>();
		try {
			java.util.List<ProjectTeamMaster> getData = ptmrepo.findAllByEmployeeId(employeeId);
			if (!getData.isEmpty()) {
				ptrm.setStatus(true);
				ptrm.setMessage("Data Fetching");
				ptrm.setData(getData);
				return new ResponseEntity(ptrm, HttpStatus.OK);
			} else {
				ptrm.setStatus(false);
				ptrm.setMessage("Data Not Found");
				return new ResponseEntity(ptrm, HttpStatus.OK);
			}
		} catch (Exception e) {
			ptrm.setStatus(false);
			ptrm.setMessage("Something went wrong");
			return new ResponseEntity(ptrm, HttpStatus.OK);
		}
	}

	@Override
    public ResponseEntity getAllProjectsByEmployeeId(String employeeId) {

       List<ProjectTeamMaster> ptm=ptmrepo.getAllProjectsByEmployeeId(employeeId);
        return new ResponseEntity(ptm,HttpStatus.OK);
    }
	

//	@Override
//	public Long AllProjectTeamCountWithActiveStatus(Integer projectId) {
//		List<ProjectTeamMaster> newProjectTeamData = ptmrepo.findAllByProjectId(projectId);
//		return newProjectTeamData.stream().filter(employee -> employee.getStatus().equalsIgnoreCase("Active")).count();
//	}
}