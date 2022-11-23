package com.arshaa.emailModel;

import java.util.Date;

public class ResignationModel {

	private String srm;
	private String irm;
	private String buh;
	private String departmentName;
	private String businessUnitHeadName;
    private Date confirmationDate;
    private String resignedReason;
    private Date exitDate;

	private Date resignationDate;

	
	
	public Date getExitDate() {
		return exitDate;
	}
	public void setExitDate(Date exitDate) {
		this.exitDate = exitDate;
	}
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
	public String getBusinessUnitHeadName() {
		return businessUnitHeadName;
	}
	public void setBusinessUnitHeadName(String businessUnitHeadName) {
		this.businessUnitHeadName = businessUnitHeadName;
	}
	
	
}
