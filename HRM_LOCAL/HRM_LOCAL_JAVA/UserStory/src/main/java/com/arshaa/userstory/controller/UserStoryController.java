package com.arshaa.userstory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.arshaa.userstory.entity.UserStory;
import com.arshaa.userstory.service.UserStoryServiceInterface;


@RequestMapping("/userStory")
@RestController
@CrossOrigin("*")
public class UserStoryController {

	@Autowired(required = true)
	private UserStoryServiceInterface userstoryServ;
	

	@PostMapping("/addUserStory")
	public ResponseEntity addUserStory(@RequestBody UserStory newUserStory) {
		return userstoryServ.addUserStory(newUserStory);
	}
	
	@GetMapping("/getAllUserStory")
	public ResponseEntity getAllUserStory() {
		return userstoryServ.getAllUserStory();
	}
	
	@PutMapping("/updateUserStoryById/{storyId}")
	public ResponseEntity updateUserStoryById(@PathVariable int storyId, @RequestBody UserStory newUserStoryUpdate) {
		return userstoryServ.updateUserStoryById(storyId,newUserStoryUpdate);
	}
	@DeleteMapping("/deleteUserStory/{storyId}")
	public ResponseEntity deleteUserStory(@PathVariable Integer storyId) {
		return userstoryServ.deleteUserStory(storyId);
	}
	
	
}
