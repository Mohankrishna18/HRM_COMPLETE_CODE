package com.arshaa.userstory.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.userstory.clientProjectCommon.Projects;
import com.arshaa.userstory.entity.UserStory;
import com.arshaa.userstory.modal.UserStoryModal;
import com.arshaa.userstory.modal.UserStoryResponce;
import com.arshaa.userstory.repository.UserStoryRepository;

@Service
public class UserStoryServiceImpl implements UserStoryServiceInterface {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired(required = true)
	private UserStoryRepository userstoryRepo;

	@Override
	public ResponseEntity addUserStory(UserStory newUserStory) {
		UserStoryResponce uv = new UserStoryResponce<>();
		try {
			UserStory newProjectData = userstoryRepo.save(newUserStory);
			uv.setStatus(true);
			uv.setMessage("Data added successfully");
			uv.setData(newProjectData);
			return new ResponseEntity(uv, HttpStatus.OK);
		} catch (Exception e) {

			uv.setStatus(false);
			uv.setMessage(e.getMessage());
			return new ResponseEntity(uv, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity getAllUserStory() {
		String urlString = "http://clientProjectMapping/clientProjectMapping/getOneProjectByProjectId/";
		UserStoryResponce uv = new UserStoryResponce<>();
		List<UserStoryModal> UserStoryModels = new ArrayList();
		try {
			List<UserStory> newProjectData = userstoryRepo.findAll();
			newProjectData.forEach(project -> {
				Projects projectName = restTemplate.getForObject(urlString + project.getProjectId(), Projects.class);
				project.setProjectName(projectName.getProjectName());
				userstoryRepo.save(project);
				UserStoryModal returnedModel = returnModel(projectName.getProjectName(), project);
				UserStoryModels.add(returnedModel);
			});
			uv.setStatus(true);
			uv.setMessage("Data Fetching");
			uv.setData(UserStoryModels);
			return new ResponseEntity(uv, HttpStatus.OK);
		} catch (Exception e) {

			uv.setStatus(false);
			uv.setMessage(e.getMessage());
			return new ResponseEntity(uv, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity updateUserStoryById(int storyId, UserStory newUserStoryUpdate) {
		UserStoryResponce uv = new UserStoryResponce<>();
		try {
			UserStory updateUserStory = userstoryRepo.findBystoryId(storyId);
			updateUserStory.setStoryTitle(newUserStoryUpdate.getStoryTitle());
			updateUserStory.setStatus(newUserStoryUpdate.getStatus());
			updateUserStory.setStartDate(newUserStoryUpdate.getStartDate());
			updateUserStory.setEndDate(newUserStoryUpdate.getEndDate());
			updateUserStory.setAssignedTo(newUserStoryUpdate.getAssignedTo());
			updateUserStory.setAcceptanceCriteria(newUserStoryUpdate.getAcceptanceCriteria());
			updateUserStory.setRole(newUserStoryUpdate.getRole());
			updateUserStory.setGoal(newUserStoryUpdate.getGoal());
			updateUserStory.setPriority(newUserStoryUpdate.getPriority());
			updateUserStory.setReason(newUserStoryUpdate.getReason());
			updateUserStory.setEstimatedHours(newUserStoryUpdate.getEstimatedHours());
			updateUserStory.setActualHours(newUserStoryUpdate.getActualHours());
			updateUserStory.setRemainingHours(newUserStoryUpdate.getRemainingHours());
			updateUserStory.setAssignedDate(newUserStoryUpdate.getAssignedDate());
			updateUserStory.setProjectId(newUserStoryUpdate.getProjectId());
			updateUserStory.setProjectName(newUserStoryUpdate.getProjectName());
			UserStory latestUserStory = userstoryRepo.save(updateUserStory);
			
			System.out.println(latestUserStory);

			uv.setStatus(true);
			uv.setMessage("Data added successfully");
			uv.setData(latestUserStory);

			return new ResponseEntity(uv, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			uv.setStatus(false);
			uv.setMessage(e.getMessage());
			return new ResponseEntity(uv, HttpStatus.OK);
		}

	}

	@Override
	public ResponseEntity deleteUserStory(Integer storyId) {
		UserStoryResponce uv = new UserStoryResponce<>();
		try {
			UserStory deleteUserStory = userstoryRepo.findBystoryId(storyId);
			userstoryRepo.deleteById(deleteUserStory.getStoryId());
			uv.setStatus(true);
			uv.setMessage("Deleted successfully");
			return new ResponseEntity(uv, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			uv.setStatus(false);
			uv.setMessage(e.getMessage());
			return new ResponseEntity(uv, HttpStatus.OK);
		}
	}

	private UserStoryModal returnModel(String projectName, UserStory story) {
		UserStoryModal model = new UserStoryModal();
		model.setProjectId(story.getProjectId());
		model.setStoryId(story.getStoryId());
		model.setStoryTitle(story.getStoryTitle());
		model.setAcceptanceCriteria(story.getAcceptanceCriteria());
		model.setProjectName(projectName);
		model.setRole(story.getRole());
		model.setGoal(story.getGoal());
		model.setPriority(story.getPriority());
		model.setReason(story.getReason());
		model.setAssignedTo(story.getAssignedTo());
		model.setEstimatedHours(story.getEstimatedHours());
		model.setActualHours(story.getActualHours());
		model.setRemainingHours(story.getRemainingHours());
		model.setStartDate(story.getStartDate());
		model.setEndDate(story.getEndDate());
		model.setStatus(story.getStatus());
		model.setAssignedDate(story.getAssignedDate());
		return model;
	}

}
