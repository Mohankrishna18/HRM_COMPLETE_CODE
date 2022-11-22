package com.arshaa.emp.model;

import java.util.Date;

public class ResignationModel {

	private String srm;
	private String irm;
	private String buh;
	private String departmentName;
    private Date confirmationDate;
    private Date exitDate;
    private String resignedReason;

	private Date resignationDate;

    
	
	public String getResignedReason() {
		return resignedReason;
	}
	public void setResignedReason(String resignedReason) {
		this.resignedReason = resignedReason;
	}
	public Date getResignationDate() {
		return resignationDate;
	}
	public void setResignationDate(Date resignationDate) {
		this.resignationDate = resignationDate;
	}
	public Date getExitDate() {
		return exitDate;
	}
	public void setExitDate(Date exitDate) {
		this.exitDate = exitDate;
	}
	public Date getConfirmationDate() {
		return confirmationDate;
	}
	public void setConfirmationDate(Date confirmationDate) {
		this.confirmationDate = confirmationDate;
	}
	public String getSrm() {
		return srm;
	}
	public void setSrm(String srm) {
		this.srm = srm;
	}
	public String getIrm() {
		return irm;
	}
	public void setIrm(String irm) {
		this.irm = irm;
	}
	public String getBuh() {
		return buh;
	}
	public void setBuh(String buh) {
		this.buh = buh;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	
	
}
