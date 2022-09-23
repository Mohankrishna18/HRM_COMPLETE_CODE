package com.arshaa.userstory.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "userstorymaster")
public class UserStory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer storyId;
	@Column
	private String storyTitle;
	@Column
	private Integer projectId;
	@Column
	private String projectName;
	@Column
	private String acceptanceCriteria;
	@Column
	private String role;
	@Column
	private String goal;
	@Column
	private String priority;
	@Column
	private String reason;
	@Column
	private String assignedTo;
	@Column
	private String estimatedHours;
	@Column
	private String actualHours;
	@Column
	private String remainingHours;
	@Column
	private Date startDate;
	@Column
	private Date endDate;
	@Column
	private String status;
	private String updatedBy;
	@Column
	private Date assignedDate;

	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());

	@Override
	public String toString() {
		return "UserStory [storyId=" + storyId + ", storyTitle=" + storyTitle + ", projectId=" + projectId
				+ ", projecName=" + projectName + ", acceptanceCriteria=" + acceptanceCriteria + ", role=" + role
				+ ", goal=" + goal + ", priority=" + priority + ", reason=" + reason + ", assignedTo=" + assignedTo
				+ ", estimatedHours=" + estimatedHours + ", actualHours=" + actualHours + ", remainingHours="
				+ remainingHours + ", startDate=" + startDate + ", endDate=" + endDate + ", status=" + status
				+ ", updatedBy=" + updatedBy + ", assignedDate=" + assignedDate + ", updatedOn=" + updatedOn + "]";
	}

	public Integer getStoryId() {
		return storyId;
	}

	public void setStoryId(Integer storyId) {
		this.storyId = storyId;
	}

	public String getStoryTitle() {
		return storyTitle;
	}

	public void setStoryTitle(String storyTitle) {
		this.storyTitle = storyTitle;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projecName) {
		this.projectName = projecName;
	}

	public String getAcceptanceCriteria() {
		return acceptanceCriteria;
	}

	public void setAcceptanceCriteria(String acceptanceCriteria) {
		this.acceptanceCriteria = acceptanceCriteria;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

	public String getEstimatedHours() {
		return estimatedHours;
	}

	public void setEstimatedHours(String estimatedHours) {
		this.estimatedHours = estimatedHours;
	}

	public String getActualHours() {
		return actualHours;
	}

	public void setActualHours(String actualHours) {
		this.actualHours = actualHours;
	}

	public String getRemainingHours() {
		return remainingHours;
	}

	public void setRemainingHours(String remainingHours) {
		this.remainingHours = remainingHours;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getAssignedDate() {
		return assignedDate;
	}

	public void setAssignedDate(Date assignedDate) {
		this.assignedDate = assignedDate;
	}

	public java.util.Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(java.util.Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public UserStory() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserStory(Integer storyId, String storyTitle, Integer projectId, String projectName, String acceptanceCriteria,
			String role, String goal, String priority, String reason, String assignedTo, String estimatedHours,
			String actualHours, String remainingHours, Date startDate, Date endDate, String status, String updatedBy,
			Date assignedDate, Date updatedOn) {
		super();
		this.storyId = storyId;
		this.storyTitle = storyTitle;
		this.projectId = projectId;
		this.projectName = projectName;
		this.acceptanceCriteria = acceptanceCriteria;
		this.role = role;
		this.goal = goal;
		this.priority = priority;
		this.reason = reason;
		this.assignedTo = assignedTo;
		this.estimatedHours = estimatedHours;
		this.actualHours = actualHours;
		this.remainingHours = remainingHours;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.updatedBy = updatedBy;
		this.assignedDate = assignedDate;
		this.updatedOn = updatedOn;
	}
	
	

}
