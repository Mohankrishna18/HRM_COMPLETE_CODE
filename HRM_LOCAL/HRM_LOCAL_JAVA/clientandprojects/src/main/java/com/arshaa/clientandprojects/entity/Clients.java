package com.arshaa.clientandprojects.entity;

import java.util.Date;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="clientmaster")
public class Clients {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Integer clientId;
	@Column
private String clientName;
	@Column
private Date startDate;
	@Column
private Date endDate;
	@Column
private boolean status;
	@Column
private String location;
	@Column
private String  address;
@Temporal(TemporalType.DATE)
private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
@Column
private  String updatedBy;


public Integer getClientId() {
	return clientId;
}
public void setClientId(Integer clientId) {
	this.clientId = clientId;
}
public String getClientName() {
	return clientName;
}
public void setClientName(String clientName) {
	this.clientName = clientName;
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
public boolean isStatus() {
	return status;
}
public void setStatus(boolean status) {
	this.status = status;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public java.util.Date getUpdatedOn() {
	return updatedOn;
}
public void setUpdatedOn(java.util.Date updatedOn) {
	this.updatedOn = updatedOn;
}
public String getUpdatedBy() {
	return updatedBy;
}
public void setUpdatedBy(String updatedBy) {
	this.updatedBy = updatedBy;
}
public Clients(Integer clientId, String clientName, Date startDate, Date endDate, boolean status, String location,
		String address, Date updatedOn, String updatedBy) {
	super();
	this.clientId = clientId;
	this.clientName = clientName;
	this.startDate = startDate;
	this.endDate = endDate;
	this.status = status;
	this.location = location;
	this.address = address;
	this.updatedOn = updatedOn;
	this.updatedBy = updatedBy;
}
public Clients() {
	super();
	// TODO Auto-generated constructor stub
}
}
