package com.arshaa.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "leaveMaster")
public class LeaveMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String employeeId;
	private Integer leaveBalance;
	private Integer totalLeaves;
	private Integer appliedLeaves;
	private Integer usedLeaves;

	public LeaveMaster() {
		super();
	}

	public LeaveMaster(Integer id, String employeeId, Integer leaveBalance, Integer totalLeaves, Integer appliedLeaves,
			Integer usedLeaves) {
		super();
		this.id = id;
		this.employeeId = employeeId;
		this.leaveBalance = leaveBalance;
		this.totalLeaves = totalLeaves;
		this.appliedLeaves = appliedLeaves;
		this.usedLeaves = usedLeaves;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public Integer getLeaveBalance() {
		return leaveBalance;
	}

	public void setLeaveBalance(Integer leaveBalance) {
		this.leaveBalance = leaveBalance;
	}

	public Integer getTotalLeaves() {
		return totalLeaves;
	}

	public void setTotalLeaves(Integer totalLeaves) {
		this.totalLeaves = totalLeaves;
	}

	public Integer getAppliedLeaves() {
		return appliedLeaves;
	}

	public void setAppliedLeaves(Integer appliedLeaves) {
		this.appliedLeaves = appliedLeaves;
	}

	public Integer getUsedLeaves() {
		return usedLeaves;
	}

	public void setUsedLeaves(Integer usedLeaves) {
		this.usedLeaves = usedLeaves;
	}

	@Override
	public String toString() {
		return "leaveMaster [id=" + id + ", employeeId=" + employeeId + ", leaveBalance=" + leaveBalance
				+ ", totalLeaves=" + totalLeaves + ", appliedLeaves=" + appliedLeaves + ", usedLeaves=" + usedLeaves
				+ "]";
	}

}


