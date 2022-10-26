package com.arshaa.documentUpload_Service.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="requisitionDocuments")
public class RequisitionFiles {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int requisitionApprovalId;
	private String employeeId;
	private String documentTitle;
	private String documentUrl;
	private Long rrfId;
	
	public Long getRrfId() {
		return rrfId;
	}
	public void setRrfId(Long rrfId) {
		this.rrfId = rrfId;
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
	public RequisitionFiles(int requisitionApprovalId, String employeeId, String documentTitle, String documnentUrl) {
		super();
		this.requisitionApprovalId = requisitionApprovalId;
		this.employeeId = employeeId;
		this.documentTitle = documentTitle;
		this.documentUrl = documentUrl;
	}
	public RequisitionFiles() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
