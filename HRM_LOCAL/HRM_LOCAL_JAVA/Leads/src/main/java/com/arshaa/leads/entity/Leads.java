package com.arshaa.leads.entity;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="leads")
public class Leads {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String leadName;
	private String status;
	private String companyName;
	private String companyPhoneNumber;
	private String companyEmail;
	private String companyCountry;
	private String companyAddress;
	private Date startDate;
	private Date endDate;
	private String sourceName;
	private String sourceEmail;
	private String SourcePhoneNumber;
	private String leadNotes;
	private String leadTrackingNotes;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLeadName() {
		return leadName;
	}
	public void setLeadName(String leadName) {
		this.leadName = leadName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyPhoneNumber() {
		return companyPhoneNumber;
	}
	public void setCompanyPhoneNumber(String companyPhoneNumber) {
		this.companyPhoneNumber = companyPhoneNumber;
	}
	public String getCompanyEmail() {
		return companyEmail;
	}
	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}
	public String getCompanyCountry() {
		return companyCountry;
	}
	public void setCompanyCountry(String companyCountry) {
		this.companyCountry = companyCountry;
	}
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getSourceName() {
		return sourceName;
	}
	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}
	public String getSourceEmail() {
		return sourceEmail;
	}
	public void setSourceEmail(String sourceEmail) {
		this.sourceEmail = sourceEmail;
	}
	public String getSourcePhoneNumber() {
		return SourcePhoneNumber;
	}
	public void setSourcePhoneNumber(String sourcePhoneNumber) {
		SourcePhoneNumber = sourcePhoneNumber;
	}
	public String getLeadNotes() {
		return leadNotes;
	}
	public void setLeadNotes(String leadNotes) {
		this.leadNotes = leadNotes;
	}
	public String getLeadTrackingNotes() {
		return leadTrackingNotes;
	}
	public void setLeadTrackingNotes(String leadTrackingNotes) {
		this.leadTrackingNotes = leadTrackingNotes;
	}
	public Leads(int id, String leadName, String status, String companyName, String companyPhoneNumber,
			String companyEmail, String companyCountry, String companyAddress, Date startDate, Date endDate,
			String sourceName, String sourceEmail, String sourcePhoneNumber, String leadNotes,
			String leadTrackingNotes) {
		super();
		this.id = id;
		this.leadName = leadName;
		this.status = status;
		this.companyName = companyName;
		this.companyPhoneNumber = companyPhoneNumber;
		this.companyEmail = companyEmail;
		this.companyCountry = companyCountry;
		this.companyAddress = companyAddress;
		this.startDate = startDate;
		this.endDate = endDate;
		this.sourceName = sourceName;
		this.sourceEmail = sourceEmail;
		SourcePhoneNumber = sourcePhoneNumber;
		this.leadNotes = leadNotes;
		this.leadTrackingNotes = leadTrackingNotes;
	}
	public Leads() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
