package com.arshaa.emp.service;

import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.emp.emailModel.LeavesCount;
import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.model.EmployeeLeavesData;
import com.arshaa.emp.repository.EmployeeMasterRepository;
@Service
public class LeaveService {
	@Autowired
	EmployeeMasterRepository emRepo;
	@Autowired
	@Lazy
    @LoadBalanced
	private RestTemplate template;
	
	public static final String leaveURL = "http://leaveservice/leave/getcountLeavesByMonthofApplyingLeaves/";
	public static final String holidayURL = "http://holidayService/holiday/getHolidaysCountByYearAndMonth/";
	
	public List<EmployeeLeavesData> getEmployeeLeavesData(int month,int year,String dept)
	{
		List<EmployeeMaster> getEmployees=emRepo.getBydepartmentName(dept);
		List<EmployeeLeavesData>getLeavesList=new ArrayList<>();
		getEmployees.stream().forEach(e->{
			EmployeeLeavesData getLeaves=new EmployeeLeavesData();
			 			LeavesCount leaveCount=template.getForObject(leaveURL+month+"/"+year+"/L/"+dept+"/"+e.getEmployeeId(), LeavesCount.class);
			 			LeavesCount holidayCount=template.getForObject(holidayURL+year+"/"+month, LeavesCount.class);
			System.out.println(holidayCount.getCount());
				getLeaves.setTotalDaysAbsent(leaveCount.getCount());

			LeavesCount wfhCount=template.getForObject(leaveURL+month+"/"+year+"/W/"+dept+"/"+e.getEmployeeId(), LeavesCount.class);
			getLeaves.setEmployeeId(e.getEmployeeId());
			getLeaves.setEmployeeName(e.getFirstName()+e.getLastName());
			getLeaves.setWfhCount(wfhCount.getCount());
			YearMonth yearMonthObject = YearMonth.of(year, month);
			int daysInMonth = yearMonthObject.lengthOfMonth();
	        int presentCount=daysInMonth-(leaveCount.getCount()+holidayCount.getHolidayCount());
	        getLeaves.setTotalDaysPresent(presentCount);
	        getLeavesList.add(getLeaves);
		});
		return getLeavesList;
	}
	public LeavesCount getCount(int month,int year,String dept)
	{
		LeavesCount leaveCount=template.getForObject(leaveURL+month+"/"+year+"/L/"+dept+"/ATPL00050", LeavesCount.class);
return leaveCount;
	}
	
}
