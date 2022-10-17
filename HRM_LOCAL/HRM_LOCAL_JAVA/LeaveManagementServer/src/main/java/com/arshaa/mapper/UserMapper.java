package com.arshaa.mapper;


import org.springframework.stereotype.Component;

import com.arshaa.entity.User;
import com.arshaa.model.UserModel;

@Component
public class UserMapper {
public UserModel getUserModel(User u) {
	UserModel userModel = new UserModel();
	userModel.setEmployeeleaveId(u.getEmployeeleaveId());
	userModel.setEmployeeId(u.getEmployeeId());
	userModel.setLeaveType(u.getLeaveType());
	userModel.setFromDate(u.getFromDate());
	userModel.setToDate(u.getToDate());
	userModel.setNumberOfDays(u.getNumberOfDays());
	userModel.setLeaveReason(u.getLeaveReason());
	userModel.setUpdatedBy(u.getUpdatedBy());
	userModel.setUpdatedOn(u.getUpdatedOn());
	userModel.setLeaveStatus(u.getLeaveStatus());
	userModel.setReportingManager(u.getReportingManager());
	userModel.setRejectReason(u.getRejectReason());
	userModel.setManagersRejectReason(u.getManagersRejectReason());
	userModel.setIrmId(u.getIrmId());
	userModel.setSrmId(u.getSrmId());
	userModel.setBuhId(u.getBuhId());
	userModel.setIrmApproveReason(u.getIrmApproveReason());
	userModel.setSrmApproveReason(u.getSrmApproveReason());
	userModel.setManagerApproval(u.getManagerApproval());
	userModel.setHrApproval(u.getHrApproval());
	userModel.setLeaveOrwfh(u.getLeaveOrwfh());
	return userModel;
}
}
