package com.arshaa.departments.model;

public class BuheadName {

    private boolean status;
    private String message;
   
    private String businessUnitHeadName;
    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    public String getBusinessUnitHeadName() {
        return businessUnitHeadName;
    }
    public void setBusinessUnitHeadName(String businessUnitHeadName) {
        this.businessUnitHeadName = businessUnitHeadName;
    }
    
    
}
