package com.arshaa.model;

import java.util.Date;

import org.springframework.stereotype.Component;
@Component
public class UserModel {
	private int employeeleaveId;
	private String employeeId;
	private String leaveType;
	private Date fromDate;
	private Date toDate;
	private int numberOfDays;
	private String leaveReason;
	private String updatedBy;
	private Date updatedOn;
	private String leaveStatus;
	private String reportingManager;
	private String rejectReason;
	private String managersRejectReason;
	private String irmId;
	private String srmId;
	private String buhId;
	private String irmApproveReason;
	private String srmApproveReason;
	private java.util.Date submittedDate = new java.util.Date(System.currentTimeMillis());
	private String managerApproval;
	private String hrApproval;
	private String leaveOrwfh;
	public int getEmployeeleaveId() {
		return employeeleaveId;
	}
	public void setEmployeeleaveId(int employeeleaveId) {
		this.employeeleaveId = employeeleaveId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getLeaveType() {
		return leaveType;
	}
	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
	public int getNumberOfDays() {
		return numberOfDays;
	}
	public void setNumberOfDays(int numberOfDays) {
		this.numberOfDays = numberOfDays;
	}
	public String getLeaveReason() {
		return leaveReason;
	}
	public void setLeaveReason(String leaveReason) {
		this.leaveReason = leaveReason;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	public String getLeaveStatus() {
		return leaveStatus;
	}
	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	public String getRejectReason() {
		return rejectReason;
	}
	public void setRejectReason(String rejectReason) {
		this.rejectReason = rejectReason;
	}
	public String getManagersRejectReason() {
		return managersRejectReason;
	}
	public void setManagersRejectReason(String managersRejectReason) {
		this.managersRejectReason = managersRejectReason;
	}
	public String getIrmId() {
		return irmId;
	}
	public void setIrmId(String irmId) {
		this.irmId = irmId;
	}
	public String getSrmId() {
		return srmId;
	}
	public void setSrmId(String srmId) {
		this.srmId = srmId;
	}
	public String getBuhId() {
		return buhId;
	}
	public void setBuhId(String buhId) {
		this.buhId = buhId;
	}
	public String getIrmApproveReason() {
		return irmApproveReason;
	}
	public void setIrmApproveReason(String irmApproveReason) {
		this.irmApproveReason = irmApproveReason;
	}
	public String getSrmApproveReason() {
		return srmApproveReason;
	}
	public void setSrmApproveReason(String srmApproveReason) {
		this.srmApproveReason = srmApproveReason;
	}
	public java.util.Date getSubmittedDate() {
		return submittedDate;
	}
	public void setSubmittedDate(java.util.Date submittedDate) {
		this.submittedDate = submittedDate;
	}
	public String getManagerApproval() {
		return managerApproval;
	}
	public void setManagerApproval(String managerApproval) {
		this.managerApproval = managerApproval;
	}
	public String getHrApproval() {
		return hrApproval;
	}
	public void setHrApproval(String hrApproval) {
		this.hrApproval = hrApproval;
	}
	public String getLeaveOrwfh() {
		return leaveOrwfh;
	}
	public void setLeaveOrwfh(String leaveOrwfh) {
		this.leaveOrwfh = leaveOrwfh;
	}

}
