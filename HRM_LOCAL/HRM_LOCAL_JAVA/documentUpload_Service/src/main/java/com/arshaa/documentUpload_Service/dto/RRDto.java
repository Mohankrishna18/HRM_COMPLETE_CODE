package com.arshaa.documentUpload_Service.dto;

import java.util.Date;

public class RRDto {

	private long rrfId;
	private String fileName;
	private Date addedDate;
	private String url;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
}
