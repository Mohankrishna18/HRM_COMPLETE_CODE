package com.recruitmenttracker.modal;

import java.util.Date;

import javax.persistence.Column;

public class EmployeeReq {
    
    private String requisitionId;
    private String jobTitle;
    private String description;
    private String rrfStatus;
    private String rrfCat;
    private String technology;
    private String pocname;
    private String role;
    private String workflowStatus;
    private int positions;
    private String pSkills;
    private String sSkills;
    private String workLocation;
    private float workingHours;
    private String empType;
    private String qualification;
    private float yoe;
    private float rate;
    private String projectName;
    private String clientName;
    private String departmentName;
    private String raisedBy;
    private String raisedOn;
    private String textAreaDesc;
    private String comments;
    private String employeeId;
    private String reqType1;
    private String reqType2;
    private String reqType3;
    private String allocType;
    private Date requestInitiatedDate;
    private Date resourceRequiredDate;
    private Date requestClosedDate;
    private int ageing;

    private String buheadId;

    private String buheadName;
    private String pmoheadId;

    private String pmoheadName;

    private String buheadApprove;

    private String pmoheadApprove;

    private String buheadReject;

    private String pmoheadReject;

    private Date buheadApprovedOn;

    private Date pmoheadApprovedOn;

    private String buheadApprovedBy;

    private String pmoheadApprovedBy;

    public String getRequisitionId() {
        return requisitionId;
    }

    public void setRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRrfStatus() {
        return rrfStatus;
    }

    public void setRrfStatus(String rrfStatus) {
        this.rrfStatus = rrfStatus;
    }

    public String getRrfCat() {
        return rrfCat;
    }

    public void setRrfCat(String rrfCat) {
        this.rrfCat = rrfCat;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getPocname() {
        return pocname;
    }

    public void setPocname(String pocname) {
        this.pocname = pocname;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getWorkflowStatus() {
        return workflowStatus;
    }

    public void setWorkflowStatus(String workflowStatus) {
        this.workflowStatus = workflowStatus;
    }

    public int getPositions() {
        return positions;
    }

    public void setPositions(int positions) {
        this.positions = positions;
    }

    public String getpSkills() {
        return pSkills;
    }

    public void setpSkills(String pSkills) {
        this.pSkills = pSkills;
    }

    public String getsSkills() {
        return sSkills;
    }

    public void setsSkills(String sSkills) {
        this.sSkills = sSkills;
    }

    public String getWorkLocation() {
        return workLocation;
    }

    public void setWorkLocation(String workLocation) {
        this.workLocation = workLocation;
    }

    public float getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(float workingHours) {
        this.workingHours = workingHours;
    }

    public String getEmpType() {
        return empType;
    }

    public void setEmpType(String empType) {
        this.empType = empType;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public float getYoe() {
        return yoe;
    }

    public void setYoe(float yoe) {
        this.yoe = yoe;
    }

    public float getRate() {
        return rate;
    }

    public void setRate(float rate) {
        this.rate = rate;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getRaisedBy() {
        return raisedBy;
    }

    public void setRaisedBy(String raisedBy) {
        this.raisedBy = raisedBy;
    }

    public String getRaisedOn() {
        return raisedOn;
    }

    public void setRaisedOn(String raisedOn) {
        this.raisedOn = raisedOn;
    }

    public String getTextAreaDesc() {
        return textAreaDesc;
    }

    public void setTextAreaDesc(String textAreaDesc) {
        this.textAreaDesc = textAreaDesc;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getReqType1() {
        return reqType1;
    }

    public void setReqType1(String reqType1) {
        this.reqType1 = reqType1;
    }

    public String getReqType2() {
        return reqType2;
    }

    public void setReqType2(String reqType2) {
        this.reqType2 = reqType2;
    }

    public String getReqType3() {
        return reqType3;
    }

    public void setReqType3(String reqType3) {
        this.reqType3 = reqType3;
    }

    public String getAllocType() {
        return allocType;
    }

    public void setAllocType(String allocType) {
        this.allocType = allocType;
    }

    public Date getRequestInitiatedDate() {
        return requestInitiatedDate;
    }

    public void setRequestInitiatedDate(Date requestInitiatedDate) {
        this.requestInitiatedDate = requestInitiatedDate;
    }

    public Date getResourceRequiredDate() {
        return resourceRequiredDate;
    }

    public void setResourceRequiredDate(Date resourceRequiredDate) {
        this.resourceRequiredDate = resourceRequiredDate;
    }

    public Date getRequestClosedDate() {
        return requestClosedDate;
    }

    public void setRequestClosedDate(Date requestClosedDate) {
        this.requestClosedDate = requestClosedDate;
    }

    public int getAgeing() {
        return ageing;
    }

    public void setAgeing(int ageing) {
        this.ageing = ageing;
    }

    public String getBuheadId() {
        return buheadId;
    }

    public void setBuheadId(String buheadId) {
        this.buheadId = buheadId;
    }

    public String getBuheadName() {
        return buheadName;
    }

    public void setBuheadName(String buheadName) {
        this.buheadName = buheadName;
    }

    public String getPmoheadId() {
        return pmoheadId;
    }

    public void setPmoheadId(String pmoheadId) {
        this.pmoheadId = pmoheadId;
    }

    public String getPmoheadName() {
        return pmoheadName;
    }

    public void setPmoheadName(String pmoheadName) {
        this.pmoheadName = pmoheadName;
    }

    public String getBuheadApprove() {
        return buheadApprove;
    }

    public void setBuheadApprove(String buheadApprove) {
        this.buheadApprove = buheadApprove;
    }

    public String getPmoheadApprove() {
        return pmoheadApprove;
    }

    public void setPmoheadApprove(String pmoheadApprove) {
        this.pmoheadApprove = pmoheadApprove;
    }

    public String getBuheadReject() {
        return buheadReject;
    }

    public void setBuheadReject(String buheadReject) {
        this.buheadReject = buheadReject;
    }

    public String getPmoheadReject() {
        return pmoheadReject;
    }

    public void setPmoheadReject(String pmoheadReject) {
        this.pmoheadReject = pmoheadReject;
    }

    public Date getBuheadApprovedOn() {
        return buheadApprovedOn;
    }

    public void setBuheadApprovedOn(Date buheadApprovedOn) {
        this.buheadApprovedOn = buheadApprovedOn;
    }

    public Date getPmoheadApprovedOn() {
        return pmoheadApprovedOn;
    }

    public void setPmoheadApprovedOn(Date pmoheadApprovedOn) {
        this.pmoheadApprovedOn = pmoheadApprovedOn;
    }

    public String getBuheadApprovedBy() {
        return buheadApprovedBy;
    }

    public void setBuheadApprovedBy(String buheadApprovedBy) {
        this.buheadApprovedBy = buheadApprovedBy;
    }

    public String getPmoheadApprovedBy() {
        return pmoheadApprovedBy;
    }

    public void setPmoheadApprovedBy(String pmoheadApprovedBy) {
        this.pmoheadApprovedBy = pmoheadApprovedBy;
    }

    
}
