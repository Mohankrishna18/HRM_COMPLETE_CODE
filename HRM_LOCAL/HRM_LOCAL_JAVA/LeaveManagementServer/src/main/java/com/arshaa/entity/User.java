
package com.arshaa.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
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

	public User(int employeeleaveId, String employeeId, String leaveType, Date fromDate, Date toDate, int numberOfDays,
			String leaveReason, String updatedBy, Date updatedOn, String leaveStatus, String reportingManager,
			String rejectReason, String managerApproval, String hrApproval) {
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
		this.managerApproval = managerApproval;
		this.hrApproval = hrApproval;
	}

	public User() {
		super();
// TODO Auto-generated constructor stub
	}
}
