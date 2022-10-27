package com.arshaa.documentUpload_Service.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RRDocuments")
public class RequisitionRequest {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long rrfId;
	private String fileName;
	private Date addedDate;
	private String title;
	private String employeeId;
	
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public long getRrfId() {
		return rrfId;
	}
	public void setRrfId(long rrfId) {
		this.rrfId = rrfId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public Date getAddedDate() {
		return addedDate;
	}
	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public RequisitionRequest(long rrfId, String fileName, Date addedDate, String title, String employeeId) {
		super();
		this.rrfId = rrfId;
		this.fileName = fileName;
		this.addedDate = addedDate;
		this.title = title;
		this.employeeId = employeeId;
	}
	public RequisitionRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
