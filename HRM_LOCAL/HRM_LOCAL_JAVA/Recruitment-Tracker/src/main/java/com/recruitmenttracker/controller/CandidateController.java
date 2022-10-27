package com.recruitmenttracker.controller;

import java.util.List;
//import org.apache.http.impl.bootstrap.HttpServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.recruitmenttracker.entity.CandidateEntity;
import com.recruitmenttracker.service.CandidateService;

@RestController
@CrossOrigin("*")
@RequestMapping("/candidate")
public class CandidateController {
	
   @Autowired
   private CandidateService candidateser;
   
   @PostMapping("/addCandidate")
   public CandidateEntity save(@RequestBody CandidateEntity candidate)
   {
	   return candidateser.save(candidate);
   }
   
   @GetMapping("/getCandidate")
   public ResponseEntity getAllCandidates(){
	   List<CandidateEntity> cd = candidateser.getAll();
	   return new ResponseEntity(cd,HttpStatus.OK);
   }
   @GetMapping("/getCandidate/{requisitionId}")
   public ResponseEntity searchById(@PathVariable("requisitionId") int requisitionId) {
	return new ResponseEntity (candidateser.getCandidateEntityByRequisitionId(requisitionId),HttpStatus.OK);
	   
   }
   
	 @PutMapping("/updateCandidate/{requisitionId}")
	 public ResponseEntity updateCandidate(@RequestBody CandidateEntity candidate,@PathVariable("requisitionId") int requisitionId) {
		return new ResponseEntity(candidateser.update(candidate, requisitionId),HttpStatus.OK); 
   }

	 @DeleteMapping("/deleteCandidate/{requisitionId}")
	 public ResponseEntity deleteById(@PathVariable("requisitionId") int requisitionId) {
		return new ResponseEntity(candidateser.deleteCandidateEntity(requisitionId),HttpStatus.OK);
		 
	 }
	
}
