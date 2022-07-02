package com.attendance.entity;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name = "employeeattendance")
public class AttendanceLog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeattendanceId;
    @Column
    private String employeeId;
    private String employeeFirstName;
    private String employeeMiddleName;
    private String employeeLastName;
    @Column(name="punch_in")
    @JsonFormat(pattern = "HH:mm:ss", timezone = "IST")
    @Temporal(TemporalType.TIME)
    private java.util.Date punchin = new java.util.Date(System.currentTimeMillis());
    // @Temporal(TemporalType.TIMESTAMP)

    @Column(name="date")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
    @Temporal(TemporalType.DATE)
    private java.util.Date punchinDate = new java.util.Date(System.currentTimeMillis());    
    @Column(name="punch_out")
    private String punchout;

    private boolean status;

    private Time duration;

    public java.util.Date getPunchinDate() {
        return punchinDate;
    }

    public void setPunchinDate(java.util.Date punchinDate) {
        this.punchinDate = punchinDate;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getEmployeeattendanceId() {
        return employeeattendanceId;
    }

    public void setEmployeeattendanceId(int employeeattendanceId) {
        this.employeeattendanceId = employeeattendanceId;
    }

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

    public java.util.Date getPunchIn() {
        return punchin;
    }

    public void setPunchIn(java.util.Date punchIn) {
        this.punchin = punchIn;
    }

    

    public java.util.Date getPunchin() {
        return punchin;
    }

    public void setPunchin(java.util.Date punchin) {
        this.punchin = punchin;
    }

    
    public String getPunchout() {
        return punchout;
    }

    public void setPunchout(String punchout) {
        this.punchout = punchout;

    }


    public AttendanceLog(int employeeattendanceId, String employeeId, String employeeFirstName,
            String employeeMiddleName, String employeeLastName, Date punchin, Date punchinDate, String punchout,
            boolean status, Time duration) {
        super();
        this.employeeattendanceId = employeeattendanceId;
        this.employeeId = employeeId;
        this.employeeFirstName = employeeFirstName;
        this.employeeMiddleName = employeeMiddleName;
        this.employeeLastName = employeeLastName;
        this.punchin = punchin;
        this.punchinDate = punchinDate;
        this.punchout = punchout;
        this.status = status;
        this.duration = duration;
    }

    public AttendanceLog() {
        super();

    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time tim) {
        this.duration = tim;
    }

    
}