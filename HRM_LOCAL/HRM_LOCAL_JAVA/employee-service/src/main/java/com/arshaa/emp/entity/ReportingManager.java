package com.arshaa.emp.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="reportingManagerMaster")
public class ReportingManager { 
@Column
private String reportingmanager;
@Column
private String projectManager;
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int reportingmanagerid;
@Column
private String employeeId; 
public String getReportingmanager() {
return reportingmanager;
} 
public void setReportingmanager(String reportingmanager) {
this.reportingmanager = reportingmanager;
} 
public int getReportingmanagerid() {
return reportingmanagerid;
}
public void setReportingmanagerid(int reportingmanagerid) {
this.reportingmanagerid = reportingmanagerid;
} 
public String getEmployeeId() {
return employeeId;
}
public void setEmployeeId(String employeeId) {
this.employeeId = employeeId;
} public ReportingManager() {
// TODO Auto-generated constructor stub
} 
public ReportingManager(String reportingmanager,String projectManager, int reportingmanagerid, String employeeId) {
super();
this.reportingmanager = reportingmanager;
this.reportingmanagerid = reportingmanagerid;
this.projectManager = projectManager;
this.employeeId = employeeId;
}
}

