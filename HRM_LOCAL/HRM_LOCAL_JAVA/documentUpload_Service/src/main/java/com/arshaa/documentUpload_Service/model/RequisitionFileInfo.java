package com.arshaa.documentUpload_Service.model;

public class RequisitionFileInfo {

	private int requisitionApprovalId;
	private String employeeId;
	private String documentTitle;
	private String documentUrl;
	
	public RequisitionFileInfo(String documentTitle, String documentUrl) {
		this.documentTitle= documentTitle;
		this.documentUrl= documentUrl;
	}
	public int getRequisitionApprovalId() {
		return requisitionApprovalId;
	}
	public void setRequisitionApprovalId(int requisitionApprovalId) {
		this.requisitionApprovalId = requisitionApprovalId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getDocumentTitle() {
		return documentTitle;
	}
	public void setDocumentTitle(String documentTitle) {
		this.documentTitle = documentTitle;
	}
	public String getDocumentUrl() {
		return documentUrl;
	}
	public void setDocumentUrl(String documentUrl) {
		this.documentUrl = documentUrl;
	}
	
	
	
}
