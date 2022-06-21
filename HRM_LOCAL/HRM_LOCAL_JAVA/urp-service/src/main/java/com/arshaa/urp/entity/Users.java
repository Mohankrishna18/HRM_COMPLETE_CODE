package com.arshaa.urp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name="users")
public class Users {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int uId;
    @Column
	private String userName;
    @Column
	private String employeeId;
    @Column
	private String updatedBy;
    private String userType;
   
    public int getuId() {
    return uId;
    }
    public void setuId(int uId) {
    this.uId = uId;
    }
    public String getUserName() {
    return userName;
    }
    public void setUserName(String userName) {
    this.userName = userName;
    }
    public String getEmployeeId() {
    return employeeId;
    }
    public void setEmployeeId(String employeeId) {
    this.employeeId = employeeId;
    }
    public String getUpdatedBy() {
    return updatedBy;
    }
    public void setUpdatedBy(String updatedBy) {
    this.updatedBy = updatedBy;
    }
    public String getUserType() {
    return userType;
    }
    public void setUserType(String userType) {
    this.userType = userType;
    }
    public Users(int uId, String userName, String employeeId, String updatedBy, String userType) {
    super();
    this.uId = uId;
    this.userName = userName;
    this.employeeId = employeeId;
    this.updatedBy = updatedBy;
    this.userType = userType;
    }
    public Users() {
    super();
    // TODO Auto-generated constructor stub
    }
    }

