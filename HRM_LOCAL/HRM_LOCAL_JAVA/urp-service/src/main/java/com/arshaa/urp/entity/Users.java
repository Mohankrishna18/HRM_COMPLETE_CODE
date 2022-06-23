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
    private String roleName;
   
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
    public String getRoleName() {
    return roleName;
    }
    public void setRoleName(String roleName) {
    this.roleName = roleName;
    }
    public Users(int uId, String userName, String employeeId, String updatedBy, String roleName) {
    super();
    this.uId = uId;
    this.userName = userName;
    this.employeeId = employeeId;
    this.updatedBy = updatedBy;
    this.roleName = roleName;
    }
    public Users() {
    super();
    // TODO Auto-generated constructor stub
    }
    }

