package com.arshaa.clientandprojects.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.clientandprojects.entity.Clients;
import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.entity.Projects;
import com.arshaa.clientandprojects.model.BusinessHeadResponse;
import com.arshaa.clientandprojects.model.ClientResponse;
import com.arshaa.clientandprojects.model.ProjectModel;
import com.arshaa.clientandprojects.model.ProjectResponse;
import com.arshaa.clientandprojects.model.ReportingManagerEmployeeId;
import com.arshaa.clientandprojects.repository.ClientRepository;
import com.arshaa.clientandprojects.repository.ProjectRepository;
import com.arshaa.clientandprojects.repository.ProjectTeamRepository;

@Service
public class ProjectServiceImplementation implements ProjectServiceInterface {

	@Autowired(required = true)
	private ProjectRepository projectRepo;

	@Autowired
	private ProjectTeamRepository ptRepository;

	@Autowired(required = true)
	private ClientRepository repo;

	@Autowired
	@Lazy
	private RestTemplate template;

	// To Add Projects
	public ResponseEntity addProject(Projects newProjects) {

		String rmUrl = "http://empService/emp/getEmployeeIdByReportingmanager/";

		String bUri = "http://departments/dept/getDepartmentIdByBusinessUnitName/";

		ProjectResponse pr = new ProjectResponse<>();
		try {
//			ReportingManagerEmployeeId empId = template.getForObject(rmUrl+newProjects.getProjectManager(), ReportingManagerEmployeeId.class);
			ClientResponse data = template.getForObject(bUri + newProjects.getBusinessUnit(), ClientResponse.class);
//			newProjects.setEmployeeId(empId.getEmployeeId());
			newProjects.setBuhId(data.getData().toString());

			Optional<Projects> existing = projectRepo.findByProjectName(newProjects.getProjectName());
			if (existing.isPresent())
				return new ResponseEntity<>("Project Name already exists", HttpStatus.NOT_ACCEPTABLE);

			Projects newProjectData = projectRepo.save(newProjects);

			newProjectData.setClientName((repo.findByClientId(newProjectData.getClientId())).getClientName());

			Projects newProjectData1 = projectRepo.save(newProjectData);

			pr.setStatus(true);
			pr.setMessage("Data added successfully");
			pr.setData(newProjectData1);
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
				Long membersCount =  projectMembersCount(project.getProjectId());
				ProjectModel returnedModel = returnModel(clientName, project);
				returnedModel.setTeamMembers(membersCount);
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
		model.setClientId(project.getClientId());
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
	
	private Long projectMembersCount(Integer projectId) {
		List<ProjectTeamMaster> allMembers = ptRepository.findAllByProjectId(projectId);
		return allMembers.stream().filter(member -> member.getStatus().equalsIgnoreCase("Active")).count();
	}

	// To Update the Project

	@Override
	public ResponseEntity updateProjectById(int projectId, Projects newProjectUpdate) {
		String rmUrl = "http://empService/emp/getEmployeeIdByReportingmanager/";
		ProjectResponse pr = new ProjectResponse<>();
		try {
//			ReportingManagerEmployeeId empId = template.getForObject(rmUrl+newProjectUpdate.getProjectManager(), ReportingManagerEmployeeId.class);
			Projects updateProject = projectRepo.findByProjectId(projectId);
			updateProject.setProjectName(newProjectUpdate.getProjectName());
			updateProject.setStatus(newProjectUpdate.getStatus());
			updateProject.setBusinessUnit(newProjectUpdate.getBusinessUnit());
			updateProject.setStartDate(newProjectUpdate.getStartDate());
			updateProject.setEndDate(newProjectUpdate.getEndDate());
			updateProject.setDescription(newProjectUpdate.getDescription());
			updateProject.setRate(newProjectUpdate.getRate());
			updateProject.setPriority(newProjectUpdate.getPriority());
			updateProject.setProjectManager(newProjectUpdate.getProjectManager());
//			updateProject.setEmployeeId(empId.getEmployeeId());

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

	// Madhu Changes

	@Override
	public ResponseEntity getActiveProjectsByEmployeeId(String employeeId) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			java.util.List<Projects> getData = projectRepo.getActiveProjectsByEmployeeId(employeeId);
			if (!getData.isEmpty()) {
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getData);
				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity getAllActiveProjectss(String status) {
		ProjectResponse pr = new ProjectResponse<>();
		java.util.List<Projects> getActvieProjectsData = projectRepo.getAllByStatus(status);
		try {
			if (!getActvieProjectsData.isEmpty()) {
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getActvieProjectsData);
				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getActiveProjectsBybuhId(String buhId) {
		String bUri = "http://departments/dept/getDepartmentIdByBusinessUnitName/";

		List<BusinessHeadResponse> getList = new ArrayList<>();

		ProjectResponse pr = new ProjectResponse<>();
		try {
			java.util.List<Projects> getData = projectRepo.getActiveProjectsBybuhId(buhId);
			if (!getData.isEmpty()) {
				getData.stream().forEach(e -> {

					BusinessHeadResponse bRes = new BusinessHeadResponse();
					ClientResponse data = template.getForObject(bUri + e.getBusinessUnit(), ClientResponse.class);
					bRes.setBusinessUnitHead(data.getData());
					bRes.setBuhId(e.getBuhId());
					bRes.setStatus(e.getStatus());
					bRes.setProjectManager(e.getProjectManager());
					bRes.setEndDate(e.getEndDate());
					bRes.setStartDate(e.getStartDate());
					bRes.setDescription(e.getDescription());
					bRes.setPriority(e.getPriority());
					bRes.setProjectManager(e.getProjectManager());
					bRes.setEmployeeId(e.getEmployeeId());
					bRes.setUpdatedBy(e.getUpdatedBy());
					bRes.setBusinessUnit(e.getBusinessUnit());
					bRes.setProjectType(e.getProjectType());
					bRes.setClientName(e.getClientName());
					bRes.setClientId(e.getClientId());
					bRes.setProjectId(e.getProjectId());
					bRes.setProjectName(e.getProjectName());
					getList.add(bRes);
				});
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getList);
				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getProjectsByUserType(String userType, String employeeId) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			// pmohead, CEO, buhead, employee, projectManger

			if (userType.equalsIgnoreCase("pmohead") || userType.equalsIgnoreCase("ceo")) {

				return new ResponseEntity(getAllActiveProjectss("Active"), HttpStatus.OK);
			} else if (userType.equalsIgnoreCase("buhead")) {
				return new ResponseEntity(getActiveProjectsBybuhId(employeeId), HttpStatus.OK);
			} else if (userType.equalsIgnoreCase("irm")) {
				return new ResponseEntity(getActiveProjectsByEmployeeId(employeeId), HttpStatus.OK);
			}
//	        else if (userType.equalsIgnoreCase("employee")){
//	            ProjectTeamServiceImpl pro=new ProjectTeamServiceImpl();
//	            return new ResponseEntity(pro.getEmployeeProjectList(employeeId),HttpStatus.OK);
//	        }
			else {
				return new ResponseEntity("Something went Wrong!!!", HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getClientNameByClientID(int clientName) {
		ClientResponse res = new ClientResponse<>();

		try {
			Clients clientsData = repo.getClientNameByClientId(clientName);
			if (!clientsData.equals(null)) {
				res.setStatus(true);
				res.setMessage("Data Fetching");
				res.setData(clientsData.getClientName());
				return new ResponseEntity(res, HttpStatus.OK);
			} else {
				res.setStatus(false);
				res.setMessage("Data Not Found");
				return new ResponseEntity(res, HttpStatus.OK);
			}
		} catch (Exception e) {
			res.setStatus(false);
			res.setMessage("Something went wrong");
			return new ResponseEntity(res, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity getProjectNamesByClientId(int clientId) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			java.util.List<Projects> getProjects = projectRepo.getProjectsByClientId(clientId);
			if (!getProjects.isEmpty()) {

				List<String> arr = new ArrayList<String>();

				getProjects.stream().forEach(e -> {
					arr.add(e.getClientName());
					System.out.println(e.getClientName());
				});

				// element at index 2
				String element = arr.get(0);
				System.out.println("List: " + element);

				pr.setClientName(element);
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getProjects);

				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAllProjectsById(String employeeId) {
		ProjectResponse pr = new ProjectResponse<>();
		java.util.List<Projects> getProjectsData = projectRepo.getProjectsByEmployeeId(employeeId);
		try {
			if (!getProjectsData.isEmpty()) {
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getProjectsData);
				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}
	
	@Override
	public ResponseEntity getProjectNamesByClientName(String clientName) {
		ProjectResponse pr = new ProjectResponse<>();
		try {
			java.util.List<Projects> getClients = projectRepo.getProjectsByClientName(clientName);
			if (!getClients.isEmpty()) {
				List<String> arr = new ArrayList<String>();
				getClients.stream().forEach(e -> {
					arr.add(e.getClientName());
					System.out.println(e.getClientName());
				});

				// element at index 2
				String element = arr.get(0);
				System.out.println("List: " + element);

				pr.setClientName(element);
				pr.setStatus(true);
				pr.setMessage("Data Fetching");
				pr.setData(getClients);

				return new ResponseEntity(pr, HttpStatus.OK);
			} else {
				pr.setStatus(false);
				pr.setMessage("Data Not Found");
				return new ResponseEntity(pr, HttpStatus.OK);
			}
		} catch (Exception e) {
			pr.setStatus(false);
			pr.setMessage("Something went wrong");
			return new ResponseEntity(pr, HttpStatus.OK);
		}
	}


//		@Override
//	    public ResponseEntity getActiveProjectsByEmployeeId(String employeeId) {
//			ProjectResponse pr = new ProjectResponse<>();
//	        try {
//	            java.util.List<Projects> getData=projectRepo.getActiveProjectsByEmployeeId(employeeId);
//	            if(!getData.isEmpty())
//	            {
//	                pr.setStatus(true);
//	                pr.setMessage("Data Fetching");
//	                pr.setData(getData);
//	                return new ResponseEntity(pr,HttpStatus.OK);
//	            }
//	            else {
//	                pr.setStatus(false);
//	                pr.setMessage("Data Not Found");
//	                return new ResponseEntity(pr,HttpStatus.OK);
//	            }
//	        }
//	        catch(Exception e)
//	        {
//	            pr.setStatus(false);
//	            pr.setMessage("Something went wrong");
//	            return new ResponseEntity(pr,HttpStatus.OK);
//	        }
//
//	    }

}
