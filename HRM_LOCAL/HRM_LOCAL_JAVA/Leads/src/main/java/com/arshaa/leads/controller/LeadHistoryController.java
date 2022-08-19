package com.arshaa.leads.controller;

import java.util.List;

import org.apache.coyote.http11.Http11AprProtocol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.leads.common.UpdateComment;
import com.arshaa.leads.entity.Comment;
import com.arshaa.leads.entity.Leads;
import com.arshaa.leads.service.LeadHistoryService;


@RestController
@RequestMapping("/v1")
@CrossOrigin("*")

public class LeadHistoryController {
	
	
	@Autowired
	private LeadHistoryService serve ;
	
	
	@PostMapping("/addComments")
	public ResponseEntity addLeads(@RequestBody Comment comm) {
		try {
		
			return new ResponseEntity( serve.saveComments(comm) , HttpStatus.OK);

		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	
	}
	
	@PutMapping("/put/{id}")
	public ResponseEntity updateLeadsComment(@RequestBody UpdateComment update ,@PathVariable int id) {
		return new ResponseEntity(serve.updateLeadsComment(update,id) , HttpStatus.OK);
	}
	
	@GetMapping("/getAllComments/{key}")
	public List<Comment> getAllLeads(@PathVariable String key) {
	return serve.getAllCommentsById(key);	
	}
	
	@GetMapping("/get/{id}")
	public Comment getCommentById(@PathVariable Integer id) {
		return serve.getCommentsById(id);
	}
	


}
