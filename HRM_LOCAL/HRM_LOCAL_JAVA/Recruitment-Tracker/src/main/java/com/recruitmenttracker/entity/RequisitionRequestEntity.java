package com.recruitmenttracker.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity(name = "requisition_requests")
public class RequisitionRequestEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long rrfId;
	@Column(length=80)
	private String jobTitle;
	@Column(length=700)
	private String description;
	
	@Column
	private String rrfStatus;
	@Column
	private String rrfCat;
	@Column
	private String technology;
	@Column
	private String pocname;
	@Column
	private String role;
	@Column
	private String workflowStatus;
	@Column
	private int positions;
	@Column
	private String pSkills;
	@Column 
	private String sSkills;
	@Column
	private String workLocation;
	@Column
	private float workingHours;
	@Column
	private String empType;
	@Column
	private String qualification;
	@Column
	private float yoe;
	@Column
	private float rate;
	@Column
	private String projectName;
	@Column
	private String clientName;
	@Column
	private String departmentName;
	@Column
	private String raisedBy;
	@Column 
	private String raisedOn;
	@Column
	private String textAreaDesc;
	@Column
	private String comments;
	public long getRrfId() {
		return rrfId;
	}
	public void setRrfId(long rrfId) {
		this.rrfId = rrfId;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getRrfStatus() {
		return rrfStatus;
	}
	public void setRrfStatus(String rrfStatus) {
		this.rrfStatus = rrfStatus;
	}
	public String getRrfCat() {
		return rrfCat;
	}
	public void setRrfCat(String rrfCat) {
		this.rrfCat = rrfCat;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	public String getPocname() {
		return pocname;
	}
	public void setPocname(String pocname) {
		this.pocname = pocname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getWorkflowStatus() {
		return workflowStatus;
	}
	public void setWorkflowStatus(String workflowStatus) {
		this.workflowStatus = workflowStatus;
	}
	public int getPositions() {
		return positions;
	}
	public void setPositions(int positions) {
		this.positions = positions;
	}
	public String getpSkills() {
		return pSkills;
	}
	public void setpSkills(String pSkills) {
		this.pSkills = pSkills;
	}
	public String getsSkills() {
		return sSkills;
	}
	public void setsSkills(String sSkills) {
		this.sSkills = sSkills;
	}
	public String getWorkLocation() {
		return workLocation;
	}
	public void setWorkLocation(String workLocation) {
		this.workLocation = workLocation;
	}
	public float getWorkingHours() {
		return workingHours;
	}
	public void setWorkingHours(float workingHours) {
		this.workingHours = workingHours;
	}
	public String getEmpType() {
		return empType;
	}
	public void setEmpType(String empType) {
		this.empType = empType;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public float getYoe() {
		return yoe;
	}
	public void setYoe(float yoe) {
		this.yoe = yoe;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getRaisedBy() {
		return raisedBy;
	}
	public void setRaisedBy(String raisedBy) {
		this.raisedBy = raisedBy;
	}
	public String getRaisedOn() {
		return raisedOn;
	}
	public void setRaisedOn(String raisedOn) {
		this.raisedOn = raisedOn;
	}
	public String getTextAreaDesc() {
		return textAreaDesc;
	}
	public void setTextAreaDesc(String textAreaDesc) {
		this.textAreaDesc = textAreaDesc;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public RequisitionRequestEntity(long rrfId, String jobTitle, String description, int primaryContact,
			String rrfStatus, String rrfCat, String technology, String pocname, String role, String workflowStatus,
			int positions, String pSkills, String sSkills, String workLocation, float workingHours, String empType,
			String qualification, float yoe, float rate, String projectName, String clientName, String departmentName,
			String raisedBy, String raisedOn, String textAreaDesc, String comments) {
		super();
		this.rrfId = rrfId;
		this.jobTitle = jobTitle;
		this.description = description;
		
		this.rrfStatus = rrfStatus;
		this.rrfCat = rrfCat;
		this.technology = technology;
		this.pocname = pocname;
		this.role = role;
		this.workflowStatus = workflowStatus;
		this.positions = positions;
		this.pSkills = pSkills;
		this.sSkills = sSkills;
		this.workLocation = workLocation;
		this.workingHours = workingHours;
		this.empType = empType;
		this.qualification = qualification;
		this.yoe = yoe;
		this.rate = rate;
		this.projectName = projectName;
		this.clientName = clientName;
		this.departmentName = departmentName;
		this.raisedBy = raisedBy;
		this.raisedOn = raisedOn;
		this.textAreaDesc = textAreaDesc;
		this.comments = comments;
	}
	public RequisitionRequestEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
