package com.arshaa.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "leaveentitlement")
public class EntitledLeaves {






@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int leaveId;






public EntitledLeaves(int leaveId) {
super();
this.leaveId = leaveId;
}



public int getLeaveId() {
return leaveId;
}



public void setLeaveId(int leaveId) {
this.leaveId = leaveId;
}



private String leaveType;

public EntitledLeaves() {
super();
// TODO Auto-generated constructor stub
}



public String getLeaveType() {
return leaveType;
}



public void setLeaveType(String leaveType) {
this.leaveType = leaveType;
}



public int getNoOfDays() {
return noOfDays;
}



public void setNoOfDays(int noOfDays) {
this.noOfDays = noOfDays;
}



public EntitledLeaves(String leaveType, int noOfDays) {
super();
this.leaveType = leaveType;
this.noOfDays = noOfDays;
}



@Column
private int noOfDays;




}