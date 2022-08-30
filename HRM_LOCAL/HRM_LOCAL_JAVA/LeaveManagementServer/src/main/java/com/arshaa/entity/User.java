package com.arshaa.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "employeeleaves")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeleaveId;
	@Column
	private String employeeId;
	@Column
	private String leaveType;
	@Column
	private Date fromDate;
	@Column
	private Date toDate;
	@Column
	private int numberOfDays;
	@Column
	private String leaveReason;
	@Column
	private String updatedBy;
	@Column
	private Date updatedOn;
	@Column
	private String leaveStatus;
	@Column
	private String reportingManager;
	@Column
	private String rejectReason;
	@Column
	private String managersRejectReason;
	@Column
	private String irm;
	@Column
	private String srm;
	@Column
	private String buh;
	
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	@Temporal(TemporalType.DATE)
	private java.util.Date submittedDate = new java.util.Date(System.currentTimeMillis());
	
	public Date getSubmittedDate() {
		return submittedDate;
	}

	public void setSubmittedDate(Date submittedDate) {
		this.submittedDate = submittedDate;
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

	public User(int employeeleaveId, String employeeId, String leaveType, Date fromDate, Date toDate, int numberOfDays,
			String leaveReason, String updatedBy, Date updatedOn, String leaveStatus, String reportingManager,
			String rejectReason, String managersRejectReason, String managerApproval, String hrApproval) {
		super();
		this.employeeleaveId = employeeleaveId;
		this.employeeId = employeeId;
		this.leaveType = leaveType;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.numberOfDays = numberOfDays;
		this.leaveReason = leaveReason;
		this.updatedBy = updatedBy;
		this.updatedOn = updatedOn;
		this.leaveStatus = leaveStatus;
		this.reportingManager = reportingManager;
		this.rejectReason = rejectReason;
		this.managersRejectReason = managersRejectReason;
		this.managerApproval = managerApproval;
		this.hrApproval = hrApproval;
	}

	public String getManagersRejectReason() {
		return managersRejectReason;
	}

	public void setManagersRejectReason(String managersRejectReason) {
		this.managersRejectReason = managersRejectReason;
	}



	@Column
	private String managerApproval;
	@Column
	private String hrApproval;

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

	

	public User() {
		super();
// TODO Auto-generated constructor stub
	}
}
