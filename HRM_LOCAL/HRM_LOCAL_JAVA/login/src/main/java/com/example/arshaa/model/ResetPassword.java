package com.example.arshaa.model;

public class ResetPassword 
{
	private String oldPassword;
	private String newPassword;
	private String conformNewPassword;
	// @Temporal(TemporalType.DATE)
	// private Date changePasswordDate = new Date(System.currentTimeMillis());
	//


	// public Date getChangePasswordDate() {
	// return changePasswordDate;
	// }
	// public void setChangePasswordDate(Date changePasswordDate) {
	// this.changePasswordDate = changePasswordDate;
	// }
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
	public String getConformNewPassword() {
	return conformNewPassword;
	}
	public void setConformNewPassword(String conformNewPassword) {
	this.conformNewPassword = conformNewPassword;
	}

	public ResetPassword(String oldPassword, String newPassword, String conformNewPassword) {
	super();
	this.oldPassword = oldPassword;
	this.newPassword = newPassword;
	this.conformNewPassword = conformNewPassword;
	}
	public ResetPassword() {
	super();
	// TODO Auto-generated constructor stub
	}
}
