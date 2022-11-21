package com.example.arshaa.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="employeelogin")
public class EmployeeLogin 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int employeeloginId;
	private String employeeId;
	private String userName;
	private String email;
	private String password;
	private Boolean flag;
	private String password1;
	private String password2;
	private String password3;
	private Date changePasswordDate;
	private Boolean updatedBy;
	private String userType;
	

	private String userStatus;
	
	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}
	public String getUserStatus() {
		return userStatus;
	}

	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	@Temporal(TemporalType.DATE)
	private java.util.Date updatedOn = new java.util.Date(System.currentTimeMillis());
	
	
	public int getEmployeeloginId() {
		return employeeloginId;
	}
	public void setEmployeeloginId(int employeeloginId) {
		this.employeeloginId = employeeloginId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getFlag() {
		return flag;
	}
	public void setFlag(Boolean flag) {
		this.flag = flag;
	}
	public String getPassword1() {
		return password1;
	}
	public void setPassword1(String password1) {
		this.password1 = password1;
	}
	public String getPassword2() {
		return password2;
	}
	public void setPassword2(String password2) {
		this.password2 = password2;
	}
	public String getPassword3() {
		return password3;
	}
	public void setPassword3(String password3) {
		this.password3 = password3;
	}
	public Date getChangePasswordDate() {
		return changePasswordDate;
	}
	public void setChangePasswordDate(Date changePasswordDate) {
		this.changePasswordDate = changePasswordDate;
	}
	public Boolean getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(Boolean updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	
	public EmployeeLogin(int employeeloginId, String employeeId, String userName, String email, String password,
			Boolean flag, String password1, String password2, String password3, Date changePasswordDate,
			Boolean updatedBy, String userType, Date updatedOn) {
		super();
		this.employeeloginId = employeeloginId;
		this.employeeId = employeeId;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.flag = flag;
		this.password1 = password1;
		this.password2 = password2;
		this.password3 = password3;
		this.changePasswordDate = changePasswordDate;
		this.updatedBy = updatedBy;
		this.userType = userType;
		this.updatedOn = updatedOn;
	}
	public EmployeeLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


}
