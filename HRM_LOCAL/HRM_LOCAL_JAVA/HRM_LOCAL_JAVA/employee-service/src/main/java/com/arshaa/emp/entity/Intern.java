package com.arshaa.emp.entity;
import java.time.Year;
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
//@Entity(name="employeemaster")
public class Intern {


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employeeId")
	@GenericGenerator(name = "employeeId", strategy = "com.arshaa.emp.entity.IdGenerator",
	        parameters = {@Parameter(name = StringSequenceGenerator.INCREMENT_PARAM, value = "1"),
	                @Parameter(name = StringSequenceGenerator.VALUE_PREFIX_PARAMETER, value = "TRP"),
	                @Parameter(name = StringSequenceGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d")})

	private String employeeId;
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Intern(String employeeId) {
		super();
		this.employeeId = employeeId;
	}

//	@Column
//	private String departmentName;
@Column
private String onboardingId;
//	@Column
//	private String designationName;
//	@Column
//	private Date dateOfJoining;
//	@Column
//	private String firstName;
//	@Column
//	private String middleName;
//	@Column
//	private String lastName;
//	@Column
//	private String email;
//	@Column
//	private String primaryPhoneNumber;
//	@Column
//	private String secondaryPhoneNumber;
//	@Column
//	private String yearsOfExperience;
//	@Column
//	private Date dateOfBirth;
//	@Column
//	private String bloodGroup;
//	@Column
//	private String gender;
//	@Column
//	private String maritalStatus;
//	private String permanentAdress;
//	@Column
//	private String permanentState;
//	@Column
//	private String permanentCountry;
//	@Column
//	private String permanentPincode;
//
//	@Column
//	private String currentAdress;
//	public String getPermanentAdress() {
//		return permanentAdress;
//	}
//	public void setPermanentAdress(String permanentAdress) {
//		this.permanentAdress = permanentAdress;
//	}
//	public String getCurrentAdress() {
//		return currentAdress;
//	}
//	public void setCurrentAdress(String currentAdress) {
//		this.currentAdress = currentAdress;
//	}
//	private String currentState;
//	private String currentCountry;
//	private String currentPincode;
//	@Column
//	private String postgraduationBoardOfUniversity;
//	private String postgraduationInstituteName;
//	private String postgraduationInstituteCity;
//	private String postgraduationCourseName;
//	private Year postgraduationJoiningYear;
//	private Year postgraduationPassedYear;
//	private String postgraduationGrade;
//	private String graduationBoardOfUniversity;
//	private String graduationInstituteName;
//	private String graduationInstituteCity;
//	private String graduationCourseName;
//	private Year graduationJoiningYear;
//	private Year graduationPassedYear;
//	private String graduationGrade;
//	private String intermediateBoardOfUniversity;
//	private String intermediateInstituteName;
//	private String intermediateInstituteCity;
//	private String intermediateCourseName;
//	private Year intermediateJoiningYear;
//	private Year intermediatePassedYear;
//	private String intermediateGrade;
//	private String sscBoardOfUniversity;
//	private String sscInstituteName;
//	private String sscInstituteCity;
//	private String sscCourseName;
//	private Year sscJoiningYear;
//	private Year sscPassedYear;
//	private String sscGrade;
//	private String previousCompany1_name;
//	private String previousCompany1_designation;
//	private Date previousCompany1_joiningDate;
//	private Date previousCompany1_relievingDate;
//	private String previousCompany1_employeeId;
//	private Double previousCompany1_grossSalary;
//	private String previousCompany1_typeOfEmployment;
//	private String previousCompany1_reasonForRelieving;
//	private String previousCompany2_name;
//	private String previousCompany2_designation;
//	private Date previousCompany2_joiningDate;
//	private Date previousCompany2_relievingDate;
//	private String previousCompany2_employeeId;
//	private Double previousCompany2_grossSalary;
//	private String previousCompany2_typeOfEmployment;
//	private String previousCompany2_reasonForRelieving;
//	private String previousCompany3_name;
//	private String previousCompany3_designation;
//	private Date previousCompany3_joiningDate;
//	private Date previousCompany3_relievingDate;
//	private String previousCompany3_employeeId;
//	private Double previousCompany3_grossSalary;
//	private String previousCompany3_typeOfEmployment;
//	private String previousCompany3_reasonForRelieving;
//	private String updatedBy;
//	private Date updatedOn;
//	private boolean employeeStatus;
//	private String reporting_manager;
//	public String getEmployeeId() {
//		return employeeId;
//	}
//	public void setEmployeeId(String employeeId) {
//		this.employeeId = employeeId;
//	}
//
//	public String getOnboardingId() {
//		return onboardingId;
//	}
//	public void setOnboardingId(String onboardingId) {
//		this.onboardingId = onboardingId;
//	}
//	public Date getDateOfJoining() {
//		return dateOfJoining;
//	}
//	public String getDepartmentName() {
//		return departmentName;
//	}
//	public void setDepartmentName(String departmentName) {
//		this.departmentName = departmentName;
//	}
//	public String getDesignationName() {
//		return designationName;
//	}
//	public void setDesignationName(String designationName) {
//		this.designationName = designationName;
//	}
//	public void setDateOfJoining(Date dateOfJoining) {
//		this.dateOfJoining = dateOfJoining;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getMiddleName() {
//		return middleName;
//	}
//	public void setMiddleName(String middleName) {
//		this.middleName = middleName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getPrimaryPhoneNumber() {
//		return primaryPhoneNumber;
//	}
//	public void setPrimaryPhoneNumber(String primaryPhoneNumber) {
//		this.primaryPhoneNumber = primaryPhoneNumber;
//	}
//	public String getSecondaryPhoneNumber() {
//		return secondaryPhoneNumber;
//	}
//	public void setSecondaryPhoneNumber(String secondaryPhoneNumber) {
//		this.secondaryPhoneNumber = secondaryPhoneNumber;
//	}
//	public String getYearsOfExperience() {
//		return yearsOfExperience;
//	}
//	public void setYearsOfExperience(String yearsOfExperience) {
//		this.yearsOfExperience = yearsOfExperience;
//	}
//	public Date getDateOfBirth() {
//		return dateOfBirth;
//	}
//	public void setDateOfBirth(Date dateOfBirth) {
//		this.dateOfBirth = dateOfBirth;
//	}
//	public String getBloodGroup() {
//		return bloodGroup;
//	}
//	public void setBloodGroup(String bloodGroup) {
//		this.bloodGroup = bloodGroup;
//	}
//	public String getGender() {
//		return gender;
//	}
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//	public String getMaritalStatus() {
//		return maritalStatus;
//	}
//	public void setMaritalStatus(String maritalStatus) {
//		this.maritalStatus = maritalStatus;
//	}
//
//	public String getPermanentState() {
//		return permanentState;
//	}
//	public void setPermanentState(String permanentState) {
//		this.permanentState = permanentState;
//	}
//	public String getPermanentCountry() {
//		return permanentCountry;
//	}
//	public void setPermanentCountry(String permanentCountry) {
//		this.permanentCountry = permanentCountry;
//	}
//	public String getPermanentPincode() {
//		return permanentPincode;
//	}
//	public void setPermanentPincode(String permanentPincode) {
//		this.permanentPincode = permanentPincode;
//	}
//	public String getCurrentState() {
//		return currentState;
//	}
//	public void setCurrentState(String currentState) {
//		this.currentState = currentState;
//	}
//	public String getCurrentCountry() {
//		return currentCountry;
//	}
//	public void setCurrentCountry(String currentCountry) {
//		this.currentCountry = currentCountry;
//	}
//	public String getCurrentPincode() {
//		return currentPincode;
//	}
//	public void setCurrentPincode(String currentPincode) {
//		this.currentPincode = currentPincode;
//	}
//	public String getPostgraduationBoardOfUniversity() {
//		return postgraduationBoardOfUniversity;
//	}
//	public void setPostgraduationBoardOfUniversity(String postgraduationBoardOfUniversity) {
//		this.postgraduationBoardOfUniversity = postgraduationBoardOfUniversity;
//	}
//	public String getPostgraduationInstituteName() {
//		return postgraduationInstituteName;
//	}
//	public void setPostgraduationInstituteName(String postgraduationInstituteName) {
//		this.postgraduationInstituteName = postgraduationInstituteName;
//	}
//	public String getPostgraduationInstituteCity() {
//		return postgraduationInstituteCity;
//	}
//	public void setPostgraduationInstituteCity(String postgraduationInstituteCity) {
//		this.postgraduationInstituteCity = postgraduationInstituteCity;
//	}
//	public String getPostgraduationCourseName() {
//		return postgraduationCourseName;
//	}
//	public void setPostgraduationCourseName(String postgraduationCourseName) {
//		this.postgraduationCourseName = postgraduationCourseName;
//	}
//	public Year getPostgraduationJoiningYear() {
//		return postgraduationJoiningYear;
//	}
//	public void setPostgraduationJoiningYear(Year postgraduationJoiningYear) {
//		this.postgraduationJoiningYear = postgraduationJoiningYear;
//	}
//	public Year getPostgraduationPassedYear() {
//		return postgraduationPassedYear;
//	}
//	public void setPostgraduationPassedYear(Year postgraduationPassedYear) {
//		this.postgraduationPassedYear = postgraduationPassedYear;
//	}
//	public String getPostgraduationGrade() {
//		return postgraduationGrade;
//	}
//	public void setPostgraduationGrade(String postgraduationGrade) {
//		this.postgraduationGrade = postgraduationGrade;
//	}
//	public String getGraduationBoardOfUniversity() {
//		return graduationBoardOfUniversity;
//	}
//	public void setGraduationBoardOfUniversity(String graduationBoardOfUniversity) {
//		this.graduationBoardOfUniversity = graduationBoardOfUniversity;
//	}
//	public String getGraduationInstituteName() {
//		return graduationInstituteName;
//	}
//	public void setGraduationInstituteName(String graduationInstituteName) {
//		this.graduationInstituteName = graduationInstituteName;
//	}
//	public String getGraduationInstituteCity() {
//		return graduationInstituteCity;
//	}
//	public void setGraduationInstituteCity(String graduationInstituteCity) {
//		this.graduationInstituteCity = graduationInstituteCity;
//	}
//	public String getGraduationCourseName() {
//		return graduationCourseName;
//	}
//	public void setGraduationCourseName(String graduationCourseName) {
//		this.graduationCourseName = graduationCourseName;
//	}
//	public Year getGraduationJoiningYear() {
//		return graduationJoiningYear;
//	}
//	public void setGraduationJoiningYear(Year graduationJoiningYear) {
//		this.graduationJoiningYear = graduationJoiningYear;
//	}
//	public Year getGraduationPassedYear() {
//		return graduationPassedYear;
//	}
//	public void setGraduationPassedYear(Year graduationPassedYear) {
//		this.graduationPassedYear = graduationPassedYear;
//	}
//	public String getGraduationGrade() {
//		return graduationGrade;
//	}
//	public void setGraduationGrade(String graduationGrade) {
//		this.graduationGrade = graduationGrade;
//	}
//	public String getIntermediateBoardOfUniversity() {
//		return intermediateBoardOfUniversity;
//	}
//	public void setIntermediateBoardOfUniversity(String intermediateBoardOfUniversity) {
//		this.intermediateBoardOfUniversity = intermediateBoardOfUniversity;
//	}
//	public String getIntermediateInstituteName() {
//		return intermediateInstituteName;
//	}
//	public void setIntermediateInstituteName(String intermediateInstituteName) {
//		this.intermediateInstituteName = intermediateInstituteName;
//	}
//	public String getIntermediateInstituteCity() {
//		return intermediateInstituteCity;
//	}
//	public void setIntermediateInstituteCity(String intermediateInstituteCity) {
//		this.intermediateInstituteCity = intermediateInstituteCity;
//	}
//	public String getIntermediateCourseName() {
//		return intermediateCourseName;
//	}
//	public void setIntermediateCourseName(String intermediateCourseName) {
//		this.intermediateCourseName = intermediateCourseName;
//	}
//	public Year getIntermediateJoiningYear() {
//		return intermediateJoiningYear;
//	}
//	public void setIntermediateJoiningYear(Year intermediateJoiningYear) {
//		this.intermediateJoiningYear = intermediateJoiningYear;
//	}
//	public Year getIntermediatePassedYear() {
//		return intermediatePassedYear;
//	}
//	public void setIntermediatePassedYear(Year intermediatePassedYear) {
//		this.intermediatePassedYear = intermediatePassedYear;
//	}
//	public String getIntermediateGrade() {
//		return intermediateGrade;
//	}
//	public void setIntermediateGrade(String intermediateGrade) {
//		this.intermediateGrade = intermediateGrade;
//	}
//	public String getSscBoardOfUniversity() {
//		return sscBoardOfUniversity;
//	}
//	public void setSscBoardOfUniversity(String sscBoardOfUniversity) {
//		this.sscBoardOfUniversity = sscBoardOfUniversity;
//	}
//	public String getSscInstituteName() {
//		return sscInstituteName;
//	}
//	public void setSscInstituteName(String sscInstituteName) {
//		this.sscInstituteName = sscInstituteName;
//	}
//	public String getSscInstituteCity() {
//		return sscInstituteCity;
//	}
//	public void setSscInstituteCity(String sscInstituteCity) {
//		this.sscInstituteCity = sscInstituteCity;
//	}
//	public String getSscCourseName() {
//		return sscCourseName;
//	}
//	public void setSscCourseName(String sscCourseName) {
//		this.sscCourseName = sscCourseName;
//	}
//	public Year getSscJoiningYear() {
//		return sscJoiningYear;
//	}
//	public void setSscJoiningYear(Year sscJoiningYear) {
//		this.sscJoiningYear = sscJoiningYear;
//	}
//	public Year getSscPassedYear() {
//		return sscPassedYear;
//	}
//	public void setSscPassedYear(Year sscPassedYear) {
//		this.sscPassedYear = sscPassedYear;
//	}
//	public String getSscGrade() {
//		return sscGrade;
//	}
//	public void setSscGrade(String sscGrade) {
//		this.sscGrade = sscGrade;
//	}
//	public String getPreviousCompany1_name() {
//		return previousCompany1_name;
//	}
//	public void setPreviousCompany1_name(String previousCompany1_name) {
//		this.previousCompany1_name = previousCompany1_name;
//	}
//	public String getPreviousCompany1_designation() {
//		return previousCompany1_designation;
//	}
//	public void setPreviousCompany1_designation(String previousCompany1_designation) {
//		this.previousCompany1_designation = previousCompany1_designation;
//	}
//	public Date getPreviousCompany1_joiningDate() {
//		return previousCompany1_joiningDate;
//	}
//	public void setPreviousCompany1_joiningDate(Date previousCompany1_joiningDate) {
//		this.previousCompany1_joiningDate = previousCompany1_joiningDate;
//	}
//	public Date getPreviousCompany1_relievingDate() {
//		return previousCompany1_relievingDate;
//	}
//	public void setPreviousCompany1_relievingDate(Date previousCompany1_relievingDate) {
//		this.previousCompany1_relievingDate = previousCompany1_relievingDate;
//	}
//	public String getPreviousCompany1_employeeId() {
//		return previousCompany1_employeeId;
//	}
//	public void setPreviousCompany1_employeeId(String previousCompany1_employeeId) {
//		this.previousCompany1_employeeId = previousCompany1_employeeId;
//	}
//	public Double getPreviousCompany1_grossSalary() {
//		return previousCompany1_grossSalary;
//	}
//	public void setPreviousCompany1_grossSalary(Double previousCompany1_grossSalary) {
//		this.previousCompany1_grossSalary = previousCompany1_grossSalary;
//	}
//	public String getPreviousCompany1_typeOfEmployment() {
//		return previousCompany1_typeOfEmployment;
//	}
//	public void setPreviousCompany1_typeOfEmployment(String previousCompany1_typeOfEmployment) {
//		this.previousCompany1_typeOfEmployment = previousCompany1_typeOfEmployment;
//	}
//	public String getPreviousCompany1_reasonForRelieving() {
//		return previousCompany1_reasonForRelieving;
//	}
//	public void setPreviousCompany1_reasonForRelieving(String previousCompany1_reasonForRelieving) {
//		this.previousCompany1_reasonForRelieving = previousCompany1_reasonForRelieving;
//	}
//	public String getPreviousCompany2_name() {
//		return previousCompany2_name;
//	}
//	public void setPreviousCompany2_name(String previousCompany2_name) {
//		this.previousCompany2_name = previousCompany2_name;
//	}
//	public String getPreviousCompany2_designation() {
//		return previousCompany2_designation;
//	}
//	public void setPreviousCompany2_designation(String previousCompany2_designation) {
//		this.previousCompany2_designation = previousCompany2_designation;
//	}
//	public Date getPreviousCompany2_joiningDate() {
//		return previousCompany2_joiningDate;
//	}
//	public void setPreviousCompany2_joiningDate(Date previousCompany2_joiningDate) {
//		this.previousCompany2_joiningDate = previousCompany2_joiningDate;
//	}
//	public Date getPreviousCompany2_relievingDate() {
//		return previousCompany2_relievingDate;
//	}
//	public void setPreviousCompany2_relievingDate(Date previousCompany2_relievingDate) {
//		this.previousCompany2_relievingDate = previousCompany2_relievingDate;
//	}
//	public String getPreviousCompany2_employeeId() {
//		return previousCompany2_employeeId;
//	}
//	public void setPreviousCompany2_employeeId(String previousCompany2_employeeId) {
//		this.previousCompany2_employeeId = previousCompany2_employeeId;
//	}
//	public Double getPreviousCompany2_grossSalary() {
//		return previousCompany2_grossSalary;
//	}
//	public void setPreviousCompany2_grossSalary(Double previousCompany2_grossSalary) {
//		this.previousCompany2_grossSalary = previousCompany2_grossSalary;
//	}
//	public String getPreviousCompany2_typeOfEmployment() {
//		return previousCompany2_typeOfEmployment;
//	}
//	public void setPreviousCompany2_typeOfEmployment(String previousCompany2_typeOfEmployment) {
//		this.previousCompany2_typeOfEmployment = previousCompany2_typeOfEmployment;
//	}
//	public String getPreviousCompany2_reasonForRelieving() {
//		return previousCompany2_reasonForRelieving;
//	}
//	public void setPreviousCompany2_reasonForRelieving(String previousCompany2_reasonForRelieving) {
//		this.previousCompany2_reasonForRelieving = previousCompany2_reasonForRelieving;
//	}
//	public String getPreviousCompany3_name() {
//		return previousCompany3_name;
//	}
//	public void setPreviousCompany3_name(String previousCompany3_name) {
//		this.previousCompany3_name = previousCompany3_name;
//	}
//	public String getPreviousCompany3_designation() {
//		return previousCompany3_designation;
//	}
//	public void setPreviousCompany3_designation(String previousCompany3_designation) {
//		this.previousCompany3_designation = previousCompany3_designation;
//	}
//	public Date getPreviousCompany3_joiningDate() {
//		return previousCompany3_joiningDate;
//	}
//	public void setPreviousCompany3_joiningDate(Date previousCompany3_joiningDate) {
//		this.previousCompany3_joiningDate = previousCompany3_joiningDate;
//	}
//	public Date getPreviousCompany3_relievingDate() {
//		return previousCompany3_relievingDate;
//	}
//	public void setPreviousCompany3_relievingDate(Date previousCompany3_relievingDate) {
//		this.previousCompany3_relievingDate = previousCompany3_relievingDate;
//	}
//	public String getPreviousCompany3_employeeId() {
//		return previousCompany3_employeeId;
//	}
//	public void setPreviousCompany3_employeeId(String previousCompany3_employeeId) {
//		this.previousCompany3_employeeId = previousCompany3_employeeId;
//	}
//	public Double getPreviousCompany3_grossSalary() {
//		return previousCompany3_grossSalary;
//	}
//	public void setPreviousCompany3_grossSalary(Double previousCompany3_grossSalary) {
//		this.previousCompany3_grossSalary = previousCompany3_grossSalary;
//	}
//	public String getPreviousCompany3_typeOfEmployment() {
//		return previousCompany3_typeOfEmployment;
//	}
//	public void setPreviousCompany3_typeOfEmployment(String previousCompany3_typeOfEmployment) {
//		this.previousCompany3_typeOfEmployment = previousCompany3_typeOfEmployment;
//	}
//	public String getPreviousCompany3_reasonForRelieving() {
//		return previousCompany3_reasonForRelieving;
//	}
//	public void setPreviousCompany3_reasonForRelieving(String previousCompany3_reasonForRelieving) {
//		this.previousCompany3_reasonForRelieving = previousCompany3_reasonForRelieving;
//	}
//	public String getUpdatedBy() {
//		return updatedBy;
//	}
//	public void setUpdatedBy(String updatedBy) {
//		this.updatedBy = updatedBy;
//	}
//	public Date getUpdatedOn() {
//		return updatedOn;
//	}
//	public void setUpdatedOn(Date updatedOn) {
//		this.updatedOn = updatedOn;
//	}
//	public boolean isEmployeeStatus() {
//		return employeeStatus;
//	}
//	public void setEmployeeStatus(boolean employeeStatus) {
//		this.employeeStatus = employeeStatus;
//	}
//	public String getReporting_manager() {
//		return reporting_manager;
//	}
//	public void setReporting_manager(String reporting_manager) {
//		this.reporting_manager = reporting_manager;
//	}
//	public static long getSerialversionuid() {
//		return serialVersionUID;
//	}
//	public Intern() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	public Intern(String employeeId, String departmentName, String onboardingId, String designationName,
//			Date dateOfJoining, String firstName, String middleName, String lastName, String email,
//			String primaryPhoneNumber, String secondaryPhoneNumber, String yearsOfExperience, Date dateOfBirth,
//			String bloodGroup, String gender, String maritalStatus, String permanentAdress, String permanentState,
//			String permanentCountry, String permanentPincode, String currentAdress, String currentState,
//			String currentCountry, String currentPincode, String postgraduationBoardOfUniversity,
//			String postgraduationInstituteName, String postgraduationInstituteCity, String postgraduationCourseName,
//			Year postgraduationJoiningYear, Year postgraduationPassedYear, String postgraduationGrade,
//			String graduationBoardOfUniversity, String graduationInstituteName, String graduationInstituteCity,
//			String graduationCourseName, Year graduationJoiningYear, Year graduationPassedYear, String graduationGrade,
//			String intermediateBoardOfUniversity, String intermediateInstituteName, String intermediateInstituteCity,
//			String intermediateCourseName, Year intermediateJoiningYear, Year intermediatePassedYear,
//			String intermediateGrade, String sscBoardOfUniversity, String sscInstituteName, String sscInstituteCity,
//			String sscCourseName, Year sscJoiningYear, Year sscPassedYear, String sscGrade, String previousCompany1_name,
//			String previousCompany1_designation, Date previousCompany1_joiningDate, Date previousCompany1_relievingDate,
//			String previousCompany1_employeeId, Double previousCompany1_grossSalary,
//			String previousCompany1_typeOfEmployment, String previousCompany1_reasonForRelieving,
//			String previousCompany2_name, String previousCompany2_designation, Date previousCompany2_joiningDate,
//			Date previousCompany2_relievingDate, String previousCompany2_employeeId, Double previousCompany2_grossSalary,
//			String previousCompany2_typeOfEmployment, String previousCompany2_reasonForRelieving,
//			String previousCompany3_name, String previousCompany3_designation, Date previousCompany3_joiningDate,
//			Date previousCompany3_relievingDate, String previousCompany3_employeeId, Double previousCompany3_grossSalary,
//			String previousCompany3_typeOfEmployment, String previousCompany3_reasonForRelieving, String updatedBy,
//			Date updatedOn, boolean employeeStatus, String reporting_manager) {
//		super();
//		this.employeeId = employeeId;
//		this.departmentName = departmentName;
//		this.onboardingId = onboardingId;
//		this.designationName = designationName;
//		this.dateOfJoining = dateOfJoining;
//		this.firstName = firstName;
//		this.middleName = middleName;
//		this.lastName = lastName;
//		this.email = email;
//		this.primaryPhoneNumber = primaryPhoneNumber;
//		this.secondaryPhoneNumber = secondaryPhoneNumber;
//		this.yearsOfExperience = yearsOfExperience;
//		this.dateOfBirth = dateOfBirth;
//		this.bloodGroup = bloodGroup;
//		this.gender = gender;
//		this.maritalStatus = maritalStatus;
//		this.permanentAdress = permanentAdress;
//		this.permanentState = permanentState;
//		this.permanentCountry = permanentCountry;
//		this.permanentPincode = permanentPincode;
//		this.currentAdress = currentAdress;
//		this.currentState = currentState;
//		this.currentCountry = currentCountry;
//		this.currentPincode = currentPincode;
//		this.postgraduationBoardOfUniversity = postgraduationBoardOfUniversity;
//		this.postgraduationInstituteName = postgraduationInstituteName;
//		this.postgraduationInstituteCity = postgraduationInstituteCity;
//		this.postgraduationCourseName = postgraduationCourseName;
//		this.postgraduationJoiningYear = postgraduationJoiningYear;
//		this.postgraduationPassedYear = postgraduationPassedYear;
//		this.postgraduationGrade = postgraduationGrade;
//		this.graduationBoardOfUniversity = graduationBoardOfUniversity;
//		this.graduationInstituteName = graduationInstituteName;
//		this.graduationInstituteCity = graduationInstituteCity;
//		this.graduationCourseName = graduationCourseName;
//		this.graduationJoiningYear = graduationJoiningYear;
//		this.graduationPassedYear = graduationPassedYear;
//		this.graduationGrade = graduationGrade;
//		this.intermediateBoardOfUniversity = intermediateBoardOfUniversity;
//		this.intermediateInstituteName = intermediateInstituteName;
//		this.intermediateInstituteCity = intermediateInstituteCity;
//		this.intermediateCourseName = intermediateCourseName;
//		this.intermediateJoiningYear = intermediateJoiningYear;
//		this.intermediatePassedYear = intermediatePassedYear;
//		this.intermediateGrade = intermediateGrade;
//		this.sscBoardOfUniversity = sscBoardOfUniversity;
//		this.sscInstituteName = sscInstituteName;
//		this.sscInstituteCity = sscInstituteCity;
//		this.sscCourseName = sscCourseName;
//		this.sscJoiningYear = sscJoiningYear;
//		this.sscPassedYear = sscPassedYear;
//		this.sscGrade = sscGrade;
//		this.previousCompany1_name = previousCompany1_name;
//		this.previousCompany1_designation = previousCompany1_designation;
//		this.previousCompany1_joiningDate = previousCompany1_joiningDate;
//		this.previousCompany1_relievingDate = previousCompany1_relievingDate;
//		this.previousCompany1_employeeId = previousCompany1_employeeId;
//		this.previousCompany1_grossSalary = previousCompany1_grossSalary;
//		this.previousCompany1_typeOfEmployment = previousCompany1_typeOfEmployment;
//		this.previousCompany1_reasonForRelieving = previousCompany1_reasonForRelieving;
//		this.previousCompany2_name = previousCompany2_name;
//		this.previousCompany2_designation = previousCompany2_designation;
//		this.previousCompany2_joiningDate = previousCompany2_joiningDate;
//		this.previousCompany2_relievingDate = previousCompany2_relievingDate;
//		this.previousCompany2_employeeId = previousCompany2_employeeId;
//		this.previousCompany2_grossSalary = previousCompany2_grossSalary;
//		this.previousCompany2_typeOfEmployment = previousCompany2_typeOfEmployment;
//		this.previousCompany2_reasonForRelieving = previousCompany2_reasonForRelieving;
//		this.previousCompany3_name = previousCompany3_name;
//		this.previousCompany3_designation = previousCompany3_designation;
//		this.previousCompany3_joiningDate = previousCompany3_joiningDate;
//		this.previousCompany3_relievingDate = previousCompany3_relievingDate;
//		this.previousCompany3_employeeId = previousCompany3_employeeId;
//		this.previousCompany3_grossSalary = previousCompany3_grossSalary;
//		this.previousCompany3_typeOfEmployment = previousCompany3_typeOfEmployment;
//		this.previousCompany3_reasonForRelieving = previousCompany3_reasonForRelieving;
//		this.updatedBy = updatedBy;
//		this.updatedOn = updatedOn;
//		this.employeeStatus = employeeStatus;
//		this.reporting_manager = reporting_manager;
//	}

}
