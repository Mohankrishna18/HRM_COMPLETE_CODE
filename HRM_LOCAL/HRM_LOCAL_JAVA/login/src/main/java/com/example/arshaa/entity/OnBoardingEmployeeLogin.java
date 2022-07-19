package com.example.arshaa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OnBoardingEmployeeLogin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int onboardingemployeeloginId;
	private String onboardingId;
	private String email;
	private String password;
	private Boolean updatedBy;
	private String userType;
	private Boolean Status;
	public int getOnboardingemployeeloginId() {
		return onboardingemployeeloginId;
	}
	public void setOnboardingemployeeloginId(int onboardingemployeeloginId) {
		this.onboardingemployeeloginId = onboardingemployeeloginId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(Boolean updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public Boolean getStatus() {
		return Status;
	}
	public void setStatus(Boolean status) {
		Status = status;
	}
	public String getOnboardingId() {
		return onboardingId;
	}
	public void setOnboardingId(String onboardingId) {
		this.onboardingId = onboardingId;
	}
	
	
}
