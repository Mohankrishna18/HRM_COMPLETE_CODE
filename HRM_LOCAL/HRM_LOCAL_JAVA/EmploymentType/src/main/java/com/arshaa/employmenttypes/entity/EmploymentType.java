package com.arshaa.employmenttypes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employmenttype")
public class EmploymentType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer employmentTypeId;
    private String employmentTypeName;

    public Integer getEmploymentTypeId() {
        return employmentTypeId;
    }

    public void setEmploymentTypeId(Integer employmentTypeId) {
        this.employmentTypeId = employmentTypeId;
    }

    public String getEmploymentTypeName() {
        return employmentTypeName;
    }

    public void setEmploymentTypeName(String employmentTypeName) {
        this.employmentTypeName = employmentTypeName;
    }

    public EmploymentType(Integer employmentTypeId, String employmentTypeName) {
        super();
        this.employmentTypeId = employmentTypeId;
        this.employmentTypeName = employmentTypeName;
    }

    public EmploymentType() {

    }

}