package com.arshaa.emp.entity;


//
//import java.sql.Date;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.arshaa.emp.entity.StringSequenceGenerator;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name="onboarding")
public class Onboarding {

	
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "onboardingId")
    @GenericGenerator(name = "onboardingId", strategy = "com.arshaa.emp.entity.StringSequenceGenerator",
            parameters = {@Parameter(name = StringSequenceGenerator.INCREMENT_PARAM, value = "1"),
                    @Parameter(name = StringSequenceGenerator.VALUE_PREFIX_PARAMETER, value = "OBD"),
                    @Parameter(name = StringSequenceGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d")})
   private String onboardingId;

	@Column
	private String designation;
	@Column
	private String firstName;
	@Column
	private String middleName;
	@Column
	private String lastName;
	private String jobTitle;
	private String skillSet;
	private String comments;
	@Column
	private String phoneNumber;
	@Column(name = "Years_of_experience")
	private String yearsOfExperience;
	@Column
	private String employeeId;
	@Column
	private boolean approvedStatus;
	@Column
	private boolean rejectedStatus;
	@Column
	private boolean waitingforapprovalStatus;
	private String department;
	private String reportingManager;
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	@Column
	private String email;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.TIMESTAMP)
    private java.util.Date onboardDate = new java.util.Date(System.currentTimeMillis());
    private java.util.Date approvedDate;
    private java.util.Date rejectDate;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.TIMESTAMP)
    private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
	//@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
//	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
//	@Temporal(TemporalType.TIMESTAMP)
	//@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	//@JsonFormat(pattern = "dd-mm-yyyy")
    private Date dateOfJoining;
    //private Date approvedDate;
    //private Date rejectDate;
	@Column
	private String updatedBy;
	private String employeeType;
	private String primarySkills;
	private String secondarySkills;
	public String getPrimarySkills() {
		return primarySkills;
	}
	public void setPrimarySkills(String primarySkills) {
		this.primarySkills = primarySkills;
	}
	public String getSecondarySkills() {
		return secondarySkills;
	}
	public void setSecondarySkills(String secondarySkills) {
		this.secondarySkills = secondarySkills;
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getEmployeeType() {
		return employeeType;
	}
	public void setEmployeeType(String employeeType) {
		this.employeeType = employeeType;
	}
	public String getOnboardingId() {
		return onboardingId;
	}
	public void setOnboardingId(String onboardingId) {
		this.onboardingId = onboardingId;
	}
	
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(String yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
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
	
	public java.util.Date getOnboardDate() {
		return onboardDate;
	}
	public void setOnboardDate(java.util.Date onboardDate) {
		this.onboardDate = onboardDate;
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
	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
		
	
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getSkillSet() {
		return skillSet;
	}
	public void setSkillSet(String skillSet) {
		this.skillSet = skillSet;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public Onboarding() {
		// TODO Auto-generated constructor stub
	}
	public Onboarding(String onboardingId, String designation, String firstName, String middleName, String lastName,
			String jobTitle, String skillSet, String comments, String phoneNumber, String yearsOfExperience,
			String employeeId, boolean approvedStatus, boolean rejectedStatus, boolean waitingforapprovalStatus,
			String department, String reportingManager, String email, java.util.Date onboardDate,
			java.util.Date approvedDate, java.util.Date rejectDate, java.util.Date updatedOn, Date dateOfJoining,
			String updatedBy, String employeeType, String primarySkills, String secondarySkills) {
		super();
		this.onboardingId = onboardingId;
		this.designation = designation;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.jobTitle = jobTitle;
		this.skillSet = skillSet;
		this.comments = comments;
		this.phoneNumber = phoneNumber;
		this.yearsOfExperience = yearsOfExperience;
		this.employeeId = employeeId;
		this.approvedStatus = approvedStatus;
		this.rejectedStatus = rejectedStatus;
		this.waitingforapprovalStatus = waitingforapprovalStatus;
		this.department = department;
		this.reportingManager = reportingManager;
		this.email = email;
		this.onboardDate = onboardDate;
		this.approvedDate = approvedDate;
		this.rejectDate = rejectDate;
		this.updatedOn = updatedOn;
		this.dateOfJoining = dateOfJoining;
		this.updatedBy = updatedBy;
		this.employeeType = employeeType;
		this.primarySkills = primarySkills;
		this.secondarySkills = secondarySkills;
	}
	
	
	
}