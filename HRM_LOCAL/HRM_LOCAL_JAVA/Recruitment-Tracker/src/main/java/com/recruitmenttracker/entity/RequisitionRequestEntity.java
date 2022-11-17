package com.recruitmenttracker.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "requisition_requests")
public class RequisitionRequestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long rrfId;

    @Column
    private String requisitionId;

    public String getRequisitionId() {
        return requisitionId;
    }

    public void setRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
    }

    @Column(length = 80)
    private String jobTitle;
    @Column(length = 700)
    private String description;
    
    @Column
    private String rrfStatus;
    @Column
    private String businessUnitHeadName;
    @Column
    private String rrfCat;
    @Column
    private String technology;
    @Column
    private String pocname;
    @Column
    private String role;
    @Column
    private String workflowStatus;
    @Column
    private int positions;
    @Column
    private String pSkills;
    @Column
    private String sSkills;
    @Column
    private String workLocation;
    @Column
    private float workingHours;
    @Column
    private String empType;
    @Column
    private String qualification;
    @Column
    private float yoe;
    @Column
    private float rate;
    @Column
    private String projectName;
    @Column
    private String clientName;
    @Column
    private String departmentName;
    @Column
    private String raisedBy;
    @Column
    private String raisedOn;
    @Column
    private String textAreaDesc;
    @Column
    private String comments;
    @Column
    private String employeeId;
    @Column
    private String reqType1;
    @Column
    private String reqType2;
    @Column
    private String reqType3;
    @Column
    private String allocType;
    @Column
    private Date requestInitiatedDate;
    @Column
    private Date resourceRequiredDate;
    @Column
    private Date requestClosedDate;
    @Column
    private int ageing;
    @Column 
    private String priority;
    @Column 
    private String interviewPanel1;
    @Column
    private String interviewPanel2;
    @Column 
    private String hrPanel;
    
    // GSDR Changes

   

    @Column
    private String buheadId;
    @Column
    private String buheadName;
    @Column
    private String pmoheadId;
    @Column
    private String pmoheadName;
    @Column
    private String buheadApprove;
    @Column
    private String pmoheadApprove;
    @Column
    private String buheadReject;
    @Column
    private String pmoheadReject;
    @Column
    private Date buheadApprovedOn;
    @Column
    private Date pmoheadApprovedOn;
    @Column
    private String buheadApprovedBy;
    @Column
    private String pmoheadApprovedBy;

    
    public int getAgeing() {
        return ageing;
    }

    public void setAgeing(int ageing) {
        this.ageing = ageing;
    }
    
    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public long getRrfId() {
        return rrfId;
    }

    public void setRrfId(long rrfId) {
        this.rrfId = rrfId;
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

    public String getBusinessUnitHeadName() {
        return businessUnitHeadName;
    }

    public void setBusinessUnitHeadName(String businessUnitHeadName) {
        this.businessUnitHeadName = businessUnitHeadName;
    }

    
   

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

   

    public String getInterviewPanel1() {
        return interviewPanel1;
    }

    public void setInterviewPanel1(String interviewPanel1) {
        this.interviewPanel1 = interviewPanel1;
    }

    public String getInterviewPanel2() {
        return interviewPanel2;
    }

    public void setInterviewPanel2(String interviewPanel2) {
        this.interviewPanel2 = interviewPanel2;
    }

    public String getHrPanel() {
        return hrPanel;
    }

    public void setHrPanel(String hrPanel) {
        this.hrPanel = hrPanel;
    }

    public RequisitionRequestEntity(long rrfId, String requisitionId, String jobTitle, String description,
            String rrfStatus, String businessUnitHeadName, String rrfCat, String technology, String pocname,
            String role, String workflowStatus, int positions, String pSkills, String sSkills, String workLocation,
            float workingHours, String empType, String qualification, float yoe, float rate, String projectName,
            String clientName, String departmentName, String raisedBy, String raisedOn, String textAreaDesc,
            String comments, String employeeId, String reqType1, String reqType2, String reqType3, String allocType,
            Date requestInitiatedDate, Date resourceRequiredDate, Date requestClosedDate, int ageing, String priority,
            String interviewPanel1, String interviewPanel2, String hrPanel, String buheadId, String buheadName,
            String pmoheadId, String pmoheadName, String buheadApprove, String pmoheadApprove, String buheadReject,
            String pmoheadReject, Date buheadApprovedOn, Date pmoheadApprovedOn, String buheadApprovedBy,
            String pmoheadApprovedBy) {
        super();
        this.rrfId = rrfId;
        this.requisitionId = requisitionId;
        this.jobTitle = jobTitle;
        this.description = description;
        this.rrfStatus = rrfStatus;
        this.businessUnitHeadName = businessUnitHeadName;
        this.rrfCat = rrfCat;
        this.technology = technology;
        this.pocname = pocname;
        this.role = role;
        this.workflowStatus = workflowStatus;
        this.positions = positions;
        this.pSkills = pSkills;
        this.sSkills = sSkills;
        this.workLocation = workLocation;
        this.workingHours = workingHours;
        this.empType = empType;
        this.qualification = qualification;
        this.yoe = yoe;
        this.rate = rate;
        this.projectName = projectName;
        this.clientName = clientName;
        this.departmentName = departmentName;
        this.raisedBy = raisedBy;
        this.raisedOn = raisedOn;
        this.textAreaDesc = textAreaDesc;
        this.comments = comments;
        this.employeeId = employeeId;
        this.reqType1 = reqType1;
        this.reqType2 = reqType2;
        this.reqType3 = reqType3;
        this.allocType = allocType;
        this.requestInitiatedDate = requestInitiatedDate;
        this.resourceRequiredDate = resourceRequiredDate;
        this.requestClosedDate = requestClosedDate;
        this.ageing = ageing;
        this.priority = priority;
        this.interviewPanel1 = interviewPanel1;
        this.interviewPanel2 = interviewPanel2;
        this.hrPanel = hrPanel;
        this.buheadId = buheadId;
        this.buheadName = buheadName;
        this.pmoheadId = pmoheadId;
        this.pmoheadName = pmoheadName;
        this.buheadApprove = buheadApprove;
        this.pmoheadApprove = pmoheadApprove;
        this.buheadReject = buheadReject;
        this.pmoheadReject = pmoheadReject;
        this.buheadApprovedOn = buheadApprovedOn;
        this.pmoheadApprovedOn = pmoheadApprovedOn;
        this.buheadApprovedBy = buheadApprovedBy;
        this.pmoheadApprovedBy = pmoheadApprovedBy;
    }

    public RequisitionRequestEntity() {
        super();
        // TODO Auto-generated constructor stub
    }

}
