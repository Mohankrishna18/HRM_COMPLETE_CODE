package com.arshaa.employmenttypes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity(name = "employmenttype")
public class EmploymentType {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employmentTypeId;
	@Column
	private String employmentTypeName;
	public int getEmploymentTypeId() {
		return employmentTypeId;
	}
	public void setEmploymentTypeId(int employmentTypeId) {
		this.employmentTypeId = employmentTypeId;
	}
	public String getEmploymentTypeName() {
		return employmentTypeName;
	}
	public void setEmploymentTypeName(String employmentTypeName) {
		this.employmentTypeName = employmentTypeName;
	}
	public EmploymentType(int employmentTypeId, String employmentTypeName) {
		super();
		this.employmentTypeId = employmentTypeId;
		this.employmentTypeName = employmentTypeName;
	}
	public EmploymentType() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}