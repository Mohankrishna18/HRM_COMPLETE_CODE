package com.example.arshaa.model;

public class ResetPassword 
{
	private String employeeId;
	private String oldPassword;
	private String newPassword;
	private String confirmNewPassword;
	// @Temporal(TemporalType.DATE)
	// private Date changePasswordDate = new Date(System.currentTimeMillis());
	//
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getConfirmNewPassword() {
		return confirmNewPassword;
	}
	public void setConfirmNewPassword(String confirmNewPassword) {
		this.confirmNewPassword = confirmNewPassword;
	}
	public ResetPassword(String employeeId, String oldPassword, String newPassword, String confirmNewPassword) {
		super();
		this.employeeId = employeeId;
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
		this.confirmNewPassword = confirmNewPassword;
	}
	public ResetPassword() {
		super();
		// TODO Auto-generated constructor stub
	}


	// public Date getChangePasswordDate() {
	// return changePasswordDate;
	// }
	// public void setChangePasswordDate(Date changePasswordDate) {
	// this.changePasswordDate = changePasswordDate;
	// }
	
	}
