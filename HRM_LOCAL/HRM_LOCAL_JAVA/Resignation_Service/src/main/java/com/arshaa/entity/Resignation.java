package com.arshaa.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name="Resignation")
public class Resignation 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int resignationId;
	@Column
	private String employeeId;
	@Column
	private String resigningEmployee;
	@Column
	private String departmentName;
	@Column
	private String reason;
	@Column
	private Date exitDate;
	@Column
	private Date resignationDate;
	@Column
	private String irmApprove;
	@Column
	private String srmApprove;
	@Column
	private String pmoApprove;
	@Column
	private String hrApprove;
	@Column
	private String irmReject;
	@Column
	private String srmReject;
	@Column
	private String pmoReject;
	@Column
	private String hrReject;
	@Column
	private String status;
	public int getResignationId() {
		return resignationId;
	}
	public void setResignationId(int resignationId) {
		this.resignationId = resignationId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getResigningEmployee() {
		return resigningEmployee;
	}
	public void setResigningEmployee(String resigningEmployee) {
		this.resigningEmployee = resigningEmployee;
	}

	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}

	public Date getResignationDate() {
		return resignationDate;
	}
	public void setResignationDate(Date resignationDate) {
		this.resignationDate = resignationDate;
	}
	public String getIrmApprove() {
		return irmApprove;
	}
	public void setIrmApprove(String irmApprove) {
		this.irmApprove = irmApprove;
	}
	public String getSrmApprove() {
		return srmApprove;
	}
	public void setSrmApprove(String srmApprove) {
		this.srmApprove = srmApprove;
	}
	public String getPmoApprove() {
		return pmoApprove;
	}
	public void setPmoApprove(String pmoApprove) {
		this.pmoApprove = pmoApprove;
	}
	public String getHrApprove() {
		return hrApprove;
	}
	public void setHrApprove(String hrApprove) {
		this.hrApprove = hrApprove;
	}
	public String getIrmReject() {
		return irmReject;
	}
	public void setIrmReject(String irmReject) {
		this.irmReject = irmReject;
	}
	public String getSrmReject() {
		return srmReject;
	}
	public void setSrmReject(String srmReject) {
		this.srmReject = srmReject;
	}
	public String getPmoReject() {
		return pmoReject;
	}
	public void setPmoReject(String pmoReject) {
		this.pmoReject = pmoReject;
	}
	public String getHrReject() {
		return hrReject;
	}
	public void setHrReject(String hrReject) {
		this.hrReject = hrReject;
	}
	
}
