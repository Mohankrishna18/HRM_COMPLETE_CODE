package com.arshaa.model;



import java.util.Date;



import javax.persistence.Column;



public class UsersByReportingManager {



private String employeeId;



private String leaveType;



private Date fromDate;



private Date toDate;




private int numberOfDays;




private String leaveReason;

private String managerApproval;
private String Name;
private int employeeleaveId;
public String getEmployeeId() {
return employeeId;
}
public void setEmployeeId(String employeeId) {
this.employeeId = employeeId;
}
public String getLeaveType() {
return leaveType;
}
public void setLeaveType(String leaveType) {
this.leaveType = leaveType;
}
public Date getFromDate() {
return fromDate;
}
public void setFromDate(Date fromDate) {
this.fromDate = fromDate;
}
public Date getToDate() {
return toDate;
}
public void setToDate(Date toDate) {
this.toDate = toDate;
}
public int getNumberOfDays() {
return numberOfDays;
}
public void setNumberOfDays(int numberOfDays) {
this.numberOfDays = numberOfDays;
}
public String getLeaveReason() {
return leaveReason;
}
public void setLeaveReason(String leaveReason) {
this.leaveReason = leaveReason;
}
public String getName() {
return Name;
}
public void setName(String name) {
Name = name;
}
public String getManagerApproval() {
	return managerApproval;
}
public void setManagerApproval(String managerApproval) {
	this.managerApproval = managerApproval;
}
public int getEmployeeleaveId() {
	return employeeleaveId;
}
public void setEmployeeleaveId(int employeeleaveId) {
	this.employeeleaveId = employeeleaveId;
}


}