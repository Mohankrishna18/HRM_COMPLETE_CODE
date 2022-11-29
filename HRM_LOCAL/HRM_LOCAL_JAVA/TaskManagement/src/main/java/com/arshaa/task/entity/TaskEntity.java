package com.arshaa.task.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Task")
public class TaskEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int taskId;
	
	private String description;

	private String projectName;
	private Date plannedStartDate;
	private String priority;
	private String status;
	private String taskTitle;
	private String taskType;
	private Date plannedEndDate;
	private String userId;
	private String userStory;
	private Date assignDate;
	private int projectId;
	private String assignedTo;
	private String employeeName;
	private String employeeId;
    @GeneratedValue(strategy=GenerationType.AUTO)
    private double sumOfActual;
    private double actualHours=0.0;
    private double remainingHours=0.0;
   private double estimatedHours;
   private String complexity;
public int getTaskId() {
	return taskId;
}
public void setTaskId(int taskId) {
	this.taskId = taskId;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getProjectName() {
	return projectName;
}
public void setProjectName(String projectName) {
	this.projectName = projectName;
}
public Date getPlannedStartDate() {
	return plannedStartDate;
}
public void setPlannedStartDate(Date plannedStartDate) {
	this.plannedStartDate = plannedStartDate;
}
public String getPriority() {
	return priority;
}
public void setPriority(String priority) {
	this.priority = priority;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getTaskTitle() {
	return taskTitle;
}
public void setTaskTitle(String taskTitle) {
	this.taskTitle = taskTitle;
}
public String getTaskType() {
	return taskType;
}
public void setTaskType(String taskType) {
	this.taskType = taskType;
}
public Date getPlannedEndDate() {
	return plannedEndDate;
}
public void setPlannedEndDate(Date plannedEndDate) {
	this.plannedEndDate = plannedEndDate;
}
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}
public String getUserStory() {
	return userStory;
}
public void setUserStory(String userStory) {
	this.userStory = userStory;
}
public Date getAssignDate() {
	return assignDate;
}
public void setAssignDate(Date assignDate) {
	this.assignDate = assignDate;
}
public int getProjectId() {
	return projectId;
}
public void setProjectId(int projectId) {
	this.projectId = projectId;
}
public String getAssignedTo() {
	return assignedTo;
}
public void setAssignedTo(String assignedTo) {
	this.assignedTo = assignedTo;
}
public String getEmployeeName() {
	return employeeName;
}
public void setEmployeeName(String employeeName) {
	this.employeeName = employeeName;
}
public String getEmployeeId() {
	return employeeId;
}
public void setEmployeeId(String employeeId) {
	this.employeeId = employeeId;
}
public double getSumOfActual() {
	return sumOfActual;
}
public void setSumOfActual(double sumOfActual) {
	this.sumOfActual = sumOfActual;
}
public double getActualHours() {
	return actualHours;
}
public void setActualHours(double actualHours) {
	this.actualHours = actualHours;
}
public double getRemainingHours() {
	return remainingHours;
}
public void setRemainingHours(double remainingHours) {
	this.remainingHours = remainingHours;
}
public double getEstimatedHours() {
	return estimatedHours;
}
public void setEstimatedHours(double estimatedHours) {
	this.estimatedHours = estimatedHours;
}
public String getComplexity() {
	return complexity;
}
public void setComplexity(String complexity) {
	this.complexity = complexity;
}
public TaskEntity(int taskId, String description, String projectName, Date plannedStartDate, String priority,
		String status, String taskTitle, String taskType, Date plannedEndDate, String userId, String userStory,
		Date assignDate, int projectId, String assignedTo, String employeeName, String employeeId, double sumOfActual,
		double actualHours, double remainingHours, double estimatedHours, String complexity) {
	super();
	this.taskId = taskId;
	this.description = description;
	this.projectName = projectName;
	this.plannedStartDate = plannedStartDate;
	this.priority = priority;
	this.status = status;
	this.taskTitle = taskTitle;
	this.taskType = taskType;
	this.plannedEndDate = plannedEndDate;
	this.userId = userId;
	this.userStory = userStory;
	this.assignDate = assignDate;
	this.projectId = projectId;
	this.assignedTo = assignedTo;
	this.employeeName = employeeName;
	this.employeeId = employeeId;
	this.sumOfActual = sumOfActual;
	this.actualHours = actualHours;
	this.remainingHours = remainingHours;
	this.estimatedHours = estimatedHours;
	this.complexity = complexity;
}
public TaskEntity() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "TaskEntity [taskId=" + taskId + ", description=" + description + ", projectName=" + projectName
			+ ", plannedStartDate=" + plannedStartDate + ", priority=" + priority + ", status=" + status
			+ ", taskTitle=" + taskTitle + ", taskType=" + taskType + ", plannedEndDate=" + plannedEndDate + ", userId="
			+ userId + ", userStory=" + userStory + ", assignDate=" + assignDate + ", projectId=" + projectId
			+ ", assignedTo=" + assignedTo + ", employeeName=" + employeeName + ", employeeId=" + employeeId
			+ ", sumOfActual=" + sumOfActual + ", actualHours=" + actualHours + ", remainingHours=" + remainingHours
			+ ", estimatedHours=" + estimatedHours + ", complexity=" + complexity + "]";
}

   
   
}
