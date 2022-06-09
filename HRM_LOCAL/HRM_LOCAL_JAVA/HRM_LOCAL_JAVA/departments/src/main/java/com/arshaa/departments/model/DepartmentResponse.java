package com.arshaa.departments.model;

import java.util.ArrayList;
import java.util.List;

import com.arshaa.departments.entity.Departmentmaster;

public class DepartmentResponse<T> {

	private boolean status;
	private String message;
	private List<T> department=new ArrayList<>();
	public DepartmentResponse() {
		// TODO Auto-generated constructor stub
	}
	public boolean isStatus() {
		return status;
	}
	public List<T> getDepartment() {
		return department;
	}
	public void setDepartment(List<T> department) {
		this.department = department;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	

}
