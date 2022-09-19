package com.arshaa.userstory.service;

import org.springframework.http.ResponseEntity;
import com.arshaa.userstory.entity.UserStory;

public interface UserStoryServiceInterface {

	public ResponseEntity addUserStory(UserStory newUserStory);
	
	public ResponseEntity getAllUserStory();
	
	public ResponseEntity updateUserStoryById(int storyId, UserStory newUserStoryUpdate);
	
	public ResponseEntity deleteUserStory(Integer storyId);
}
