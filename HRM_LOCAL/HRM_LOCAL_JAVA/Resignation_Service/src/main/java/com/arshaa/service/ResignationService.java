package com.arshaa.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.arshaa.entity.Resignation;

public interface ResignationService  
{
	public Resignation createResignation(Resignation resignation);
	public List<Resignation> getByStatus(String status);
	public Resignation modifyResignationStatus(Resignation resignation, String employeeId, String userType);
	public Resignation rejectResignation(Resignation resignation, String employeeId, String userType);
	public List<Resignation> getStatusByEmployeeId(String employeeId);
	public Date getNoticeDateByResignationDate(Date resignationDate, String employeeId);

}
