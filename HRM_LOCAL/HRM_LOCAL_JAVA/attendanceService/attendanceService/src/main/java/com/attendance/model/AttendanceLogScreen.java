package com.attendance.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class AttendanceLogScreen {
    private String employeeId;
    private String employeeFirstName;
    private String employeeMiddleName;
    private String employeeLastName;
    @JsonFormat(pattern = "HH:mm:ss", timezone = "IST")
    private java.util.Date punchin = new java.util.Date(System.currentTimeMillis());
    @JsonFormat(pattern = "dd-MM-yyyy", timezone = "IST")
    private java.util.Date punchinDate = new java.util.Date(System.currentTimeMillis());    
    private String punchout;


    public String getEmployeeId() {
        return employeeId;
    }
    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }
    public String getEmployeeFirstName() {
        return employeeFirstName;
    }
    public void setEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
    }
    public String getEmployeeMiddleName() {
        return employeeMiddleName;
    }
    public void setEmployeeMiddleName(String employeeMiddleName) {
        this.employeeMiddleName = employeeMiddleName;
    }
    public String getEmployeeLastName() {
        return employeeLastName;
    }
    public void setEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
    }
    public java.util.Date getPunchin() {
        return punchin;
    }
    public void setPunchin(java.util.Date punchin) {
        this.punchin = punchin;
    }
    public java.util.Date getPunchinDate() {
        return punchinDate;
    }
    public void setPunchinDate(java.util.Date punchinDate) {
        this.punchinDate = punchinDate;
    }
    public String getPunchout() {
        return punchout;
    }
    public void setPunchout(String punchout) {
        this.punchout = punchout;
    }
    public AttendanceLogScreen(String employeeId, String employeeFirstName, String employeeMiddleName,
            String employeeLastName, Date punchin, Date punchinDate, String punchout) {
        super();
        this.employeeId = employeeId;
        this.employeeFirstName = employeeFirstName;
        this.employeeMiddleName = employeeMiddleName;
        this.employeeLastName = employeeLastName;
        this.punchin = punchin;
        this.punchinDate = punchinDate;
        this.punchout = punchout;
    }
    public AttendanceLogScreen() {
        super();
        // TODO Auto-generated constructor stub
    }




}