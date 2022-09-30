package com.arshaa.emp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class EmployeeProfile {

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	private String name;
	private String type;
	@Lob
	private byte[] data;
	private String onboardingId;
	private String employeeId;

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public String getOnboardingId() {
		return onboardingId;
	}

	public void setOnboardingId(String onboardingId) {
		this.onboardingId = onboardingId;
	}

	public EmployeeProfile(String id, String name, String type, byte[] data, String onboardingId, String employeeId) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.data = data;
		this.onboardingId = onboardingId;
		this.employeeId = employeeId;
	}

	public EmployeeProfile() {
		super();
// TODO Auto-generated constructor stub
	}

}