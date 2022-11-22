package com.arshaa.emp.service;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
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
	public static final String leaveURLL = "http://leaveservice/leave/getcountLeavesByMonthofApplyingLeaveswithoutDept/";

	Calendar startCal = Calendar.getInstance();

	public List<EmployeeLeavesData> getEmployeeLeavesData(int month, int year, String dept) {
		List<EmployeeMaster> getEmployees = emRepo.getBydepartmentName(dept);
		List<EmployeeLeavesData> getLeavesList = new ArrayList<>();
		getEmployees.stream().forEach(e -> {

			EmployeeLeavesData getLeaves = new EmployeeLeavesData();
			if (e.getStatus().equalsIgnoreCase("active")) {
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				if (currentDate.isAfter(instDateOfJoin)) {
					LeavesCount leaveCount = template.getForObject(
							leaveURL + month + "/" + year + "/L/" + dept + "/" + e.getEmployeeId(), LeavesCount.class);
					LeavesCount holidayCount = template.getForObject(holidayURL + year + "/" + month,
							LeavesCount.class);
					System.out.println(holidayCount.getCount());
					getLeaves.setTotalDaysAbsent(leaveCount.getCount());

					LeavesCount wfhCount = template.getForObject(
							leaveURL + month + "/" + year + "/W/" + dept + "/" + e.getEmployeeId(), LeavesCount.class);
					getLeaves.setEmployeeId(e.getEmployeeId());
					getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
					getLeaves.setWfhCount(wfhCount.getCount());
					YearMonth yearMonthObject = YearMonth.of(year, month);
					int daysInMonth = yearMonthObject.lengthOfMonth();
					int presentCount = daysInMonth
							- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
					int workingDays = daysInMonth - (holidayCount.getHolidayCount() + weekendCount(year, month));// for
																													// wd
					getLeaves.setTotalDaysPresent(presentCount);
					getLeaves.setTotalDays(daysInMonth);// tDP
					getLeaves.setTotalWorkingDays(workingDays);// TWD
					getLeaves.setHolidays(holidayCount.getHolidayCount());// TH
					getLeavesList.add(getLeaves);
				}
			}  if (e.getStatus().equalsIgnoreCase("InActive")) {
				LocalDate currentDateForE = LocalDate.now();
//				LocalDate currentDateForE =LocalDate.of(2022, 11, 1);    
				//Local Date to Sql Date .
				 java.sql.Date currentCheckdate = java.sql.Date.valueOf(currentDateForE); // Magic happens here!
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				Calendar calendar = new GregorianCalendar();
				calendar.setTime(e.getExitDate());
				int exitYear = calendar.get(Calendar.YEAR);
				//Add one to month {0 - 11}
				int exitMonth = calendar.get(Calendar.MONTH) + 1;
				
System.out.println("year"+exitYear+""+year+"month"+exitMonth+""+month);
				if(exitYear >= year && exitMonth >= month){

//						if (currentDate.isAfter(instDateOfJoin) && e.getExitDate().after(currentCheckdate)) {
							LeavesCount leaveCount = template.getForObject(
									leaveURL + month + "/" + year + "/L/" + dept + "/" + e.getEmployeeId(), LeavesCount.class);
							LeavesCount holidayCount = template.getForObject(holidayURL + year + "/" + month,
									LeavesCount.class);
							System.out.println(holidayCount.getCount());
							getLeaves.setTotalDaysAbsent(leaveCount.getCount());

							LeavesCount wfhCount = template.getForObject(
									leaveURL + month + "/" + year + "/W/" + dept + "/" + e.getEmployeeId(), LeavesCount.class);
							getLeaves.setEmployeeId(e.getEmployeeId());
							getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
							getLeaves.setWfhCount(wfhCount.getCount());
							YearMonth yearMonthObject = YearMonth.of(year, month);
							int day = calendar.get(Calendar.DAY_OF_MONTH);

							System.out.println("Days"+day);
							LocalDate startDate =LocalDate.of(exitYear,exitMonth,1); 
							LocalDate endDate =LocalDate.of(exitYear,exitMonth,day); 

							long workingdaysWithoutWeakEnd= days(startDate,endDate);
//							int workingCountDays= this.addDaysSkippingWeekends(lcd,day);
							 int workingCountDays=(int)workingdaysWithoutWeakEnd;
							System.out.println(" working days"+workingCountDays);
							int daysInMonth = yearMonthObject.lengthOfMonth();
							int presentCount = daysInMonth
									- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
							int workingDays = daysInMonth - (holidayCount.getHolidayCount() + weekendCount(year, month));// for
												if(exitMonth == month) {
													getLeaves.setTotalDaysPresent(workingCountDays);	
												}
												else
												{
													getLeaves.setTotalDaysPresent(presentCount);
												}
													// wd
							getLeaves.setTotalDays(daysInMonth);// tDP
							getLeaves.setTotalWorkingDays(workingDays);// TWD
							getLeaves.setHolidays(holidayCount.getHolidayCount());// TH
							getLeavesList.add(getLeaves);
//						}
						
				}
			

			}

		});
		return getLeavesList;
	}

	public static int addDaysSkippingWeekends(LocalDate date, int days) {
	    LocalDate result = date;
	    int addedDays = 0;
	    while (addedDays < days) {
	        result = result.plusDays(1);
	        if (!(result.getDayOfWeek() == DayOfWeek.SATURDAY || result.getDayOfWeek() == DayOfWeek.SUNDAY)) {
	            ++addedDays;
	            
	        }
	    }
	    return addedDays;
	}
	
	static long days(LocalDate start, LocalDate end){
		java.sql.Date startCheckdate = java.sql.Date.valueOf(start);
		java.sql.Date endCheckdate = java.sql.Date.valueOf(end);

	    //Ignore argument check

	    Calendar c1 = Calendar.getInstance();
	    c1.setTime(startCheckdate);
	    int w1 = c1.get(Calendar.DAY_OF_WEEK);
	    c1.add(Calendar.DAY_OF_WEEK, -w1);

	    Calendar c2 = Calendar.getInstance();
	    c2.setTime(endCheckdate);
	    int w2 = c2.get(Calendar.DAY_OF_WEEK);
	    c2.add(Calendar.DAY_OF_WEEK, -w2);

	    //end Saturday to start Saturday 
	    long days = (c2.getTimeInMillis()-c1.getTimeInMillis())/(1000*60*60*24);
	    long daysWithoutWeekendDays = days-(days*2/7);

	    // Adjust days to add on (w2) and days to subtract (w1) so that Saturday
	    // and Sunday are not included
	    if (w1 == Calendar.SUNDAY && w2 != Calendar.SATURDAY) {
	        w1 = Calendar.MONDAY;
	    } else if (w1 == Calendar.SATURDAY && w2 != Calendar.SUNDAY) {
	        w1 = Calendar.FRIDAY;
	    } 

	    if (w2 == Calendar.SUNDAY) {
	        w2 = Calendar.MONDAY;
	    } else if (w2 == Calendar.SATURDAY) {
	        w2 = Calendar.FRIDAY;
	    }

	    return daysWithoutWeekendDays-w1+w2;
	}
	
	
	
	public LeavesCount getCount(int month, int year, String dept) {
		LeavesCount leaveCount = template.getForObject(leaveURL + month + "/" + year + "/L/" + dept + "/ATPL00050",
				LeavesCount.class);
		return leaveCount;
	}

	public int weekendCount(int year, int month) {
		Calendar calendar = Calendar.getInstance();
		calendar.set(year, month - 1, 1);
		int daysInMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		int cnt = 0;
		for (int i = 1; i <= daysInMonth; i++) {
			calendar.set(year, month - 1, i);
			int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
			if (dayOfWeek == Calendar.SUNDAY || dayOfWeek == Calendar.SATURDAY) {
				cnt++;
			}
		}
		return cnt;
	}

	public List<EmployeeLeavesData> getEmployeeLeavesDataWithoutDept(int month, int year) {
		List<EmployeeMaster> getEmployees = emRepo.findAll();
		List<EmployeeLeavesData> getLeavesList = new ArrayList<>();
		getEmployees.stream().forEach(e -> {

			EmployeeLeavesData getLeaves = new EmployeeLeavesData();
			if (e.getStatus().equalsIgnoreCase("active")) {
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				if (currentDate.isAfter(instDateOfJoin)) {
					LeavesCount leaveCount = template.getForObject(
							leaveURLL + month + "/" + year + "/L/" + "/" + e.getEmployeeId(), LeavesCount.class);
					LeavesCount holidayCount = template.getForObject(holidayURL + year + "/" + month,
							LeavesCount.class);
					System.out.println(holidayCount.getCount());
					getLeaves.setTotalDaysAbsent(leaveCount.getCount());

					LeavesCount wfhCount = template.getForObject(
							leaveURLL + month + "/" + year + "/W/" + "/" + e.getEmployeeId(), LeavesCount.class);
					getLeaves.setEmployeeId(e.getEmployeeId());
					getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
					getLeaves.setWfhCount(wfhCount.getCount());
					YearMonth yearMonthObject = YearMonth.of(year, month);
					int daysInMonth = yearMonthObject.lengthOfMonth();
					int presentCount = daysInMonth
							- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
					int workingDays = daysInMonth - (holidayCount.getHolidayCount() + weekendCount(year, month));// for
																													// wd
					getLeaves.setTotalDaysPresent(presentCount);
					getLeaves.setTotalDays(daysInMonth);// tDP
					getLeaves.setTotalWorkingDays(workingDays);// TWD
					getLeaves.setHolidays(holidayCount.getHolidayCount());// TH
					getLeavesList.add(getLeaves);
				}
			}  if (e.getStatus().equalsIgnoreCase("InActive")) {
				LocalDate currentDateForE = LocalDate.now();
//				LocalDate currentDateForE =LocalDate.of(2022, 11, 1);    
				//Local Date to Sql Date .
				 java.sql.Date currentCheckdate = java.sql.Date.valueOf(currentDateForE); // Magic happens here!
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				Calendar calendar = new GregorianCalendar();
				calendar.setTime(e.getExitDate());
				int exitYear = calendar.get(Calendar.YEAR);
				//Add one to month {0 - 11}
				int exitMonth = calendar.get(Calendar.MONTH) + 1;
				
System.out.println("year"+exitYear+""+year+"month"+exitMonth+""+month);
				if(exitYear >= year && exitMonth >= month){

//						if (currentDate.isAfter(instDateOfJoin) && e.getExitDate().after(currentCheckdate)) {
							LeavesCount leaveCount = template.getForObject(
									leaveURLL + month + "/" + year + "/L/" + "/" + e.getEmployeeId(), LeavesCount.class);
							LeavesCount holidayCount = template.getForObject(holidayURL + year + "/" + month,
									LeavesCount.class);
							System.out.println(holidayCount.getCount());
							getLeaves.setTotalDaysAbsent(leaveCount.getCount());

							LeavesCount wfhCount = template.getForObject(
									leaveURLL + month + "/" + year + "/W/" + "/" + e.getEmployeeId(), LeavesCount.class);
							getLeaves.setEmployeeId(e.getEmployeeId());
							getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
							getLeaves.setWfhCount(wfhCount.getCount());
							YearMonth yearMonthObject = YearMonth.of(year, month);
							int day = calendar.get(Calendar.DAY_OF_MONTH);

							System.out.println("Days"+day);
							LocalDate startDate =LocalDate.of(exitYear,exitMonth,1); 
							LocalDate endDate =LocalDate.of(exitYear,exitMonth,day); 

							long workingdaysWithoutWeakEnd= days(startDate,endDate);
//							int workingCountDays= this.addDaysSkippingWeekends(lcd,day);
							 int workingCountDays=(int)workingdaysWithoutWeakEnd;
							System.out.println(" working days"+workingCountDays);
							int daysInMonth = yearMonthObject.lengthOfMonth();
							int presentCount = daysInMonth
									- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
							int workingDays = daysInMonth - (holidayCount.getHolidayCount() + weekendCount(year, month));// for
												if(exitMonth == month) {
													getLeaves.setTotalDaysPresent(workingCountDays);	
												}
												else
												{
													getLeaves.setTotalDaysPresent(presentCount);
												}
													// wd
							getLeaves.setTotalDays(daysInMonth);// tDP
							getLeaves.setTotalWorkingDays(workingDays);// TWD
							getLeaves.setHolidays(holidayCount.getHolidayCount());// TH
							getLeavesList.add(getLeaves);
//						}
						
				}
			

			}

		});
		return getLeavesList;
}
}