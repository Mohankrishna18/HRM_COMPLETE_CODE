package com.arshaa.emp.model;

import java.util.Date;

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
	private String hrcomment;

	private String department;
	
	private String email;
	private String userType;

	
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

	public String getOnboardingStatus() {
		return onboardingStatus;
	}

	public void setOnboardingStatus(String onboardingStatus) {
		this.onboardingStatus = onboardingStatus;
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

	public String getTaaApprovalComment() {
		return taaApprovalComment;
	}

	public void setTaaApprovalComment(String taaApprovalComment) {
		this.taaApprovalComment = taaApprovalComment;
	}

	public String getTaaHeadApprovalComment() {
		return taaHeadApprovalComment;
	}

	public void setTaaHeadApprovalComment(String taaHeadApprovalComment) {
		this.taaHeadApprovalComment = taaHeadApprovalComment;
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

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getHrcomment() {
		return hrcomment;
	}

	public void setHrcomment(String hrcomment) {
		this.hrcomment = hrcomment;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
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

	public String getSecondaryPhoneNumber() {
		return SecondaryPhoneNumber;
	}

	public void setSecondaryPhoneNumber(String secondaryPhoneNumber) {
		SecondaryPhoneNumber = secondaryPhoneNumber;
	}

	public boolean isTermsAndConditions() {
		return termsAndConditions;
	}

	public void setTermsAndConditions(boolean termsAndConditions) {
		this.termsAndConditions = termsAndConditions;
	}

	public HrApprovalStatus(boolean approvedStatus, boolean rejectedStatus, boolean waitingforapprovalStatus,
			String onboardingStatus, String irm, String srm, String buh, String taaApprovalComment,
			String taaHeadApprovalComment, String pmoApprovalComment, String ceoApprovalComment, boolean offerLetter,
			boolean salarySlip, boolean hikeLetter, boolean form16, boolean educationalDocuments, boolean idProof,
			boolean resignation, String designation, String hrcomment, String department, String email, String userType,
			Date approvedDate, Date rejectDate, String comments, String reportingManager, String secondaryPhoneNumber,
			boolean termsAndConditions) {
		super();
		this.approvedStatus = approvedStatus;
		this.rejectedStatus = rejectedStatus;
		this.waitingforapprovalStatus = waitingforapprovalStatus;
		this.onboardingStatus = onboardingStatus;
		this.irm = irm;
		this.srm = srm;
		this.buh = buh;
		this.taaApprovalComment = taaApprovalComment;
		this.taaHeadApprovalComment = taaHeadApprovalComment;
		this.pmoApprovalComment = pmoApprovalComment;
		this.ceoApprovalComment = ceoApprovalComment;
		this.offerLetter = offerLetter;
		this.salarySlip = salarySlip;
		this.hikeLetter = hikeLetter;
		this.form16 = form16;
		this.educationalDocuments = educationalDocuments;
		this.idProof = idProof;
		this.resignation = resignation;
		this.designation = designation;
		this.hrcomment = hrcomment;
		this.department = department;
		this.email = email;
		this.userType = userType;
		this.approvedDate = approvedDate;
		this.rejectDate = rejectDate;
		this.comments = comments;
		this.reportingManager = reportingManager;
		SecondaryPhoneNumber = secondaryPhoneNumber;
		this.termsAndConditions = termsAndConditions;
	}

	public HrApprovalStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	}
