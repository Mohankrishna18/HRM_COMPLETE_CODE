package com.arshaa.designation.model;

public class DesignationModal {
	
	private int designationId;
	private String designationName;
	private String departmentName;
	private int departmentId;
	public int getDesignationId() {
		return designationId;
	}
	public void setDesignationId(int designationId) {
		this.designationId = designationId;
	}
	public String getDesignationName() {
		return designationName;
	}
	public void setDesignationName(String designationName) {
		this.designationName = designationName;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public int getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}
	public DesignationModal(int designationId, String designationName, String departmentName, int departmentId) {
		super();
		this.designationId = designationId;
		this.designationName = designationName;
		this.departmentName = departmentName;
		this.departmentId = departmentId;
	}
	public DesignationModal() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
