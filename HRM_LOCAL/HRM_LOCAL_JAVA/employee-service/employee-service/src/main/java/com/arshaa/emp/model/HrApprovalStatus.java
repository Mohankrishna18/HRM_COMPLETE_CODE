package com.arshaa.emp.model;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class HrApprovalStatus {

	@Column
	private boolean approvedStatus;
	@Column
	private boolean rejectedStatus;
	@Column
	private boolean waitingforapprovalStatus;

	@Column
	private String onboardingStatus;

	private String irm;
	private String srm;
	private String buh;
	private String taaApprovalComment;
	private String taaHeadApprovalComment;
	private String pmoApprovalComment;
	private String ceoApprovalComment;
	private boolean offerLetter;
	private boolean salarySlip;
	private boolean hikeLetter;
	private boolean form16;
	private boolean educationalDocuments;
	private boolean idProof;
	private boolean resignation;
	private String designation;

	private String department;

	public String getDesignation() {

		return designation;

	}

	public void setDesignation(String designation) {

		this.designation = designation;

	}

	public String getDepartment() {

		return department;

	}

	public void setDepartment(String department) {

		this.department = department;

	}

	public String getTaaApprovalComment() {
		return taaApprovalComment;
	}

	public void setTaaApprovalComment(String taaApprovalComment) {
		this.taaApprovalComment = taaApprovalComment;
	}

	public String getPmoApprovalComment() {
		return pmoApprovalComment;
	}

	public void setPmoApprovalComment(String pmoApprovalComment) {
		this.pmoApprovalComment = pmoApprovalComment;
	}

	public String getCeoApprovalComment() {
		return ceoApprovalComment;
	}

	public void setCeoApprovalComment(String ceoApprovalComment) {
		this.ceoApprovalComment = ceoApprovalComment;
	}

	public String getTaaHeadApprovalComment() {
		return taaHeadApprovalComment;
	}

	public void setTaaHeadApprovalComment(String taaHeadApprovalComment) {
		this.taaHeadApprovalComment = taaHeadApprovalComment;
	}

	public String getIrm() {
		return irm;
	}

	public void setIrm(String irm) {
		this.irm = irm;
	}

	public String getSrm() {
		return srm;
	}

	public void setSrm(String srm) {
		this.srm = srm;
	}

	public String getBuh() {
		return buh;
	}

	public void setBuh(String buh) {
		this.buh = buh;
	}

	public String getOnboardingStatus() {
		return onboardingStatus;
	}

	public void setOnboardingStatus(String onboardingStatus) {
		this.onboardingStatus = onboardingStatus;
	}

	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date approvedDate = new java.util.Date(System.currentTimeMillis());
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
	@Temporal(TemporalType.TIMESTAMP)
	private java.util.Date rejectDate = new java.util.Date(System.currentTimeMillis());

	private String comments;
	private String reportingManager;
	private String SecondaryPhoneNumber;

	private boolean termsAndConditions;

	public boolean isTermsAndConditions() {
		return termsAndConditions;
	}

	public void setTermsAndConditions(boolean termsAndConditions) {
		this.termsAndConditions = termsAndConditions;
	}

	public HrApprovalStatus(String secondaryPhoneNumber) {
		super();
		SecondaryPhoneNumber = secondaryPhoneNumber;
	}

	public String getSecondaryPhoneNumber() {
		return SecondaryPhoneNumber;
	}

	public void setSecondaryPhoneNumber(String secondaryPhoneNumber) {
		SecondaryPhoneNumber = secondaryPhoneNumber;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getReportingManager() {
		return reportingManager;
	}

	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}

	public HrApprovalStatus() {
		// TODO Auto-generated constructor stub
	}

	public boolean isApprovedStatus() {
		return approvedStatus;
	}

	public void setApprovedStatus(boolean approvedStatus) {
		this.approvedStatus = approvedStatus;
	}

	public boolean isRejectedStatus() {
		return rejectedStatus;
	}

	public void setRejectedStatus(boolean rejectedStatus) {
		this.rejectedStatus = rejectedStatus;
	}

	public boolean isWaitingforapprovalStatus() {
		return waitingforapprovalStatus;
	}

	public void setWaitingforapprovalStatus(boolean waitingforapprovalStatus) {
		this.waitingforapprovalStatus = waitingforapprovalStatus;
	}

	public java.util.Date getApprovedDate() {
		return approvedDate;
	}

	public void setApprovedDate(java.util.Date approvedDate) {
		this.approvedDate = approvedDate;
	}

	public java.util.Date getRejectDate() {
		return rejectDate;
	}

	public void setRejectDate(java.util.Date rejectDate) {
		this.rejectDate = rejectDate;
	}

	public String getProjectName() {
		// TODO Auto-generated method stub
		return null;
	}

	public String getBand() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean isOfferLetter() {
		return offerLetter;
	}

	public void setOfferLetter(boolean offerLetter) {
		this.offerLetter = offerLetter;
	}

	public boolean isSalarySlip() {
		return salarySlip;
	}

	public void setSalarySlip(boolean salarySlip) {
		this.salarySlip = salarySlip;
	}

	public boolean isHikeLetter() {
		return hikeLetter;
	}

	public void setHikeLetter(boolean hikeLetter) {
		this.hikeLetter = hikeLetter;
	}

	public boolean isForm16() {
		return form16;
	}

	public void setForm16(boolean form16) {
		this.form16 = form16;
	}

	public boolean isEducationalDocuments() {
		return educationalDocuments;
	}

	public void setEducationalDocuments(boolean educationalDocuments) {
		this.educationalDocuments = educationalDocuments;
	}

	public boolean isIdProof() {
		return idProof;
	}

	public void setIdProof(boolean idProof) {
		this.idProof = idProof;
	}

	public boolean isResignation() {
		return resignation;
	}

	public void setResignation(boolean resignation) {
		this.resignation = resignation;
	}

}
