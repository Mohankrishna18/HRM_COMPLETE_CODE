package com.recruitmenttracker.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Candidate")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CandidateEntity 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int requisitionId;
	private String candidateName;
	private String candidateStatus;
	private int businessUnit;
	private String project;
	private String jobTitle;
	private String currentLocation;
	private String primarySkills;
	private String secondarySkills;
	private String email;
	private String phoneNumber;
	private int yearsOfExperience;
	
	
	
	
}
