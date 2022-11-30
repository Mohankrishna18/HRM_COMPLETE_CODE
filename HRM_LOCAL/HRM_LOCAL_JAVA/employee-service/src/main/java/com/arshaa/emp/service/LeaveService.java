package com.arshaa.emp.service;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
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
	public static final String holidayCountBtwDatesURL = "http://holidayService/holiday/findHolidaysCountBetWeenTwoDates/";
	public static final String leaveCountBtwDatesURL="http://leaveservice/leave/findLeavesCountBetWeenTwoDates/";
	Calendar startCal = Calendar.getInstance();

	public List<EmployeeLeavesData> getEmployeeLeavesData(int month, int year, String dept) {
//		List<EmployeeMaster> getEmployees = emRepo.getBydepartmentName(dept);
		List<EmployeeMaster> getEmployees = getRequiredEmployees(month, year, dept);
		List<EmployeeLeavesData> getLeavesList = new ArrayList<>();
		getEmployees.stream().forEach(e -> {

			EmployeeLeavesData getLeaves = new EmployeeLeavesData();
			if(e.getStatus().equalsIgnoreCase("active")) {
				LeavesCount wfhCount = template.getForObject(
						leaveURL + month + "/" + year + "/W/" + dept + "/" + e.getEmployeeId(), LeavesCount.class);

				getLeaves.setEmployeeId(e.getEmployeeId());
				getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
				getLeaves.setWfhCount(wfhCount.getCount());

				int presentDays = 0;
				int workingDays = 0;
				int holidayCount = 0;
				int leaveCount = 0;
				
					
				if(isEmployeeJoinedSameMonth(e.getDateOfJoining(), month, year) && isCurrentYear(year)) {
					ZonedDateTime join = e.getDateOfJoining().toInstant().atZone(ZoneId.systemDefault());
					LocalDate lastDayOfMonth  = null;
					String begindate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(join);
					String lastDay = "";
					if(isCurrentMonth(month)) {
						lastDayOfMonth = LocalDate.now();
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					} else {
						lastDayOfMonth = LocalDate.parse(begindate).with(TemporalAdjusters.lastDayOfMonth());
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					}
					
					workingDays = (int) (days(join.toLocalDate(), lastDayOfMonth));
					holidayCount = template.getForObject(holidayCountBtwDatesURL + begindate + "/" + lastDay, Integer.class);
					leaveCount = template.getForObject(leaveCountBtwDatesURL+e.getEmployeeId()+"/"+begindate+"/"+lastDay, Integer.class);
					presentDays = workingDays - (leaveCount + holidayCount);
					if (isEmployeeJoinedLastDayOfMonth(e.getDateOfJoining(),month, year)) {
						presentDays = 1;
						workingDays = 1;
						holidayCount = 0;
						leaveCount = 0;
					}
				} else {
					LocalDate today = LocalDate.of(year,month,1);
					LocalDate monthStart = today.withDayOfMonth(1);
					LocalDate lastDayOfMonth  = null;
					String begindate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(monthStart);
					String lastDay = "";
					
					if(isCurrentMonth(month)) {
						lastDayOfMonth = LocalDate.now();
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					} else {
						lastDayOfMonth = today.withDayOfMonth(today.lengthOfMonth());
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					}
					
					workingDays = (int) (days(monthStart, lastDayOfMonth));
					holidayCount = template.getForObject(holidayCountBtwDatesURL + begindate + "/" + lastDay, Integer.class);
					leaveCount = template.getForObject(leaveCountBtwDatesURL+e.getEmployeeId()+"/"+begindate+"/"+lastDay, Integer.class);
					presentDays = workingDays - (leaveCount + holidayCount);
				}
				
				getLeaves.setTotalDaysPresent(presentDays);
				YearMonth yearMonthObject = YearMonth.of(year, month);
				int daysInMonth = yearMonthObject.lengthOfMonth();
				getLeaves.setTotalDays(daysInMonth);// tDP
				getLeaves.setTotalWorkingDays(workingDays);// TWD
				getLeaves.setHolidays(holidayCount);// TH
				getLeaves.setTotalDaysAbsent(leaveCount);
				getLeavesList.add(getLeaves);
			}
			
			
			if (e.getStatus().equalsIgnoreCase("InActive")) {
				LocalDate currentDateForE = LocalDate.now();
//				LocalDate currentDateForE =LocalDate.of(2022, 11, 1);    
				// Local Date to Sql Date .
				java.sql.Date currentCheckdate = java.sql.Date.valueOf(currentDateForE); // Magic happens here!
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				Calendar calendar = new GregorianCalendar();
				calendar.setTime(e.getExitDate());
				int exitYear = calendar.get(Calendar.YEAR);
				// Add one to month {0 - 11}
				int exitMonth = calendar.get(Calendar.MONTH) + 1;

				System.out.println("year" + exitYear + "" + year + "month" + exitMonth + "" + month);
				if (exitYear >= year && exitMonth >= month) {

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

					System.out.println("Days" + day);
					LocalDate startDate = LocalDate.of(exitYear, exitMonth, 1);
					LocalDate endDate = LocalDate.of(exitYear, exitMonth, day);

					long workingdaysWithoutWeakEnd = days(startDate, endDate);
//							int workingCountDays= this.addDaysSkippingWeekends(lcd,day);
					int workingCountDays = (int) workingdaysWithoutWeakEnd;
					System.out.println(" working days" + workingCountDays);
					int daysInMonth = yearMonthObject.lengthOfMonth();
					int presentCount = daysInMonth
							- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
					int workingDays = daysInMonth - (holidayCount.getHolidayCount() + weekendCount(year, month));// for
					if (exitMonth == month) {
						getLeaves.setTotalDaysPresent(workingCountDays);
					} else {
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

	static long days(LocalDate start, LocalDate end) {
		java.sql.Date startCheckdate = java.sql.Date.valueOf(start);
		java.sql.Date endCheckdate = java.sql.Date.valueOf(end);

		// Ignore argument check

		Calendar c1 = Calendar.getInstance();
		c1.setTime(startCheckdate);
		int w1 = c1.get(Calendar.DAY_OF_WEEK);
		c1.add(Calendar.DAY_OF_WEEK, -w1);

		Calendar c2 = Calendar.getInstance();
		c2.setTime(endCheckdate);
		int w2 = c2.get(Calendar.DAY_OF_WEEK);
		c2.add(Calendar.DAY_OF_WEEK, -w2);

		// end Saturday to start Saturday
		long days = (c2.getTimeInMillis() - c1.getTimeInMillis()) / (1000 * 60 * 60 * 24);
		long daysWithoutWeekendDays = days - (days * 2 / 7);

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

		return daysWithoutWeekendDays - w1 + w2;
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
	
	public Boolean isEmployeeJoinedSameMonth(Date joiningDate, int month, int year) {
		LocalDate today = LocalDate.of(year,month,1);		
		Instant monthBeginDate = Date.from(today.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()).toInstant();

		return monthBeginDate.isBefore(joiningDate.toInstant());
	}
	
	public Boolean isEmployeeJoinedLastDayOfMonth(Date joiningDate, int month, int year) {
		LocalDate today = LocalDate.of(year,month,1);
//		today.lengthOfMonth(); //last day
//		today.getMonthValue(); //month value
		
		ZonedDateTime join = joiningDate.toInstant().atZone(ZoneId.systemDefault());
//		join.getDayOfMonth();
//		join.getMonthValue();

		return (join.getDayOfMonth() == today.lengthOfMonth()) && (today.getMonthValue() == join.getMonthValue());
	}
	
	public Boolean isCurrentYear(int year) {
		ZonedDateTime zd = ZonedDateTime.now();
		return zd.getYear() == year ? Boolean.TRUE : Boolean.FALSE;
	}
	
	public Boolean isCurrentMonth(int month) {
		ZonedDateTime zd = ZonedDateTime.now();
		return zd.getMonthValue() == month ? Boolean.TRUE : Boolean.FALSE;
	}
	
	public Boolean isEmployeeExitMonth(Date start, Date end) {
		
		//todo
		
		return true;
	}
	

	public List<EmployeeMaster> getRequiredEmployees(int month,int year, String dept)
    {
        LocalDate today = LocalDate.of(year,month,1);
        LocalDate lastDayOfMonth = today.withDayOfMonth(today.lengthOfMonth());
        Date date = Date.from(lastDayOfMonth.atStartOfDay(ZoneId.systemDefault()).toInstant());
        //String lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
        
        if("ALL".equals(dept))
        	return emRepo.findByDateOfJoiningBefore(date);
        else
        	return emRepo.findByDateOfJoiningBeforeAndDepartmentName(date,dept);
         
    }
	public List<EmployeeLeavesData> getEmployeeLeavesDataWithoutDept(int month, int year) {
		//List<EmployeeMaster> getEmployees = emRepo.findAll();
		List<EmployeeMaster> getEmployees = getRequiredEmployees(month, year, "ALL");

		List<EmployeeLeavesData> getLeavesList = new ArrayList<>();

		getEmployees.stream().forEach(e -> {

			EmployeeLeavesData getLeaves = new EmployeeLeavesData();
						
			if(e.getStatus().equalsIgnoreCase("active")) {
				LeavesCount wfhCount = template.getForObject(
						leaveURLL + month + "/" + year + "/W/" + "/" + e.getEmployeeId(), LeavesCount.class);

				getLeaves.setEmployeeId(e.getEmployeeId());
				getLeaves.setEmployeeName(e.getFirstName() + e.getLastName());
				getLeaves.setWfhCount(wfhCount.getCount());

				int presentDays = 0;
				int workingDays = 0;
				int holidayCount = 0;
				int leaveCount = 0;
				
					
				if(isEmployeeJoinedSameMonth(e.getDateOfJoining(), month, year) && isCurrentYear(year)) {
					ZonedDateTime join = e.getDateOfJoining().toInstant().atZone(ZoneId.systemDefault());
					LocalDate lastDayOfMonth  = null;
					String begindate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(join);
					String lastDay = "";
					if(isCurrentMonth(month)) {
						lastDayOfMonth = LocalDate.now();
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					} else {
						lastDayOfMonth = LocalDate.parse(begindate).with(TemporalAdjusters.lastDayOfMonth());
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					}
					
					workingDays = (int) (days(join.toLocalDate(), lastDayOfMonth));
					holidayCount = template.getForObject(holidayCountBtwDatesURL + begindate + "/" + lastDay, Integer.class);
					leaveCount = template.getForObject(leaveCountBtwDatesURL+e.getEmployeeId()+"/"+begindate+"/"+lastDay, Integer.class);
					presentDays = workingDays - (leaveCount + holidayCount);
					if (isEmployeeJoinedLastDayOfMonth(e.getDateOfJoining(),month, year)) {
						presentDays = 1;
						workingDays = 1;
						holidayCount = 0;
						leaveCount = 0;
					}
				} else {
					LocalDate today = LocalDate.of(year,month,1);
					LocalDate monthStart = today.withDayOfMonth(1);
					LocalDate lastDayOfMonth  = null;
					String begindate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(monthStart);
					String lastDay = "";
					
					if(isCurrentMonth(month)) {
						lastDayOfMonth = LocalDate.now();
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					} else {
						lastDayOfMonth = today.withDayOfMonth(today.lengthOfMonth());
						lastDay = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(lastDayOfMonth);
					}
					
					workingDays = (int) (days(monthStart, lastDayOfMonth));
					holidayCount = template.getForObject(holidayCountBtwDatesURL + begindate + "/" + lastDay, Integer.class);
					leaveCount = template.getForObject(leaveCountBtwDatesURL+e.getEmployeeId()+"/"+begindate+"/"+lastDay, Integer.class);
					presentDays = workingDays - (leaveCount + holidayCount);
				}
				
				getLeaves.setTotalDaysPresent(presentDays);
				YearMonth yearMonthObject = YearMonth.of(year, month);
				int daysInMonth = yearMonthObject.lengthOfMonth();
				getLeaves.setTotalDays(daysInMonth);// tDP
				getLeaves.setTotalWorkingDays(workingDays);// TWD
				getLeaves.setHolidays(holidayCount);// TH
				getLeaves.setTotalDaysAbsent(leaveCount);
				getLeavesList.add(getLeaves);
			}
			
			
			if (e.getStatus().equalsIgnoreCase("InActive")) {
				LocalDate currentDateForE = LocalDate.now();
//				LocalDate currentDateForE =LocalDate.of(2022, 11, 1);    
				// Local Date to Sql Date .
				java.sql.Date currentCheckdate = java.sql.Date.valueOf(currentDateForE); // Magic happens here!
				Instant currentDate = Instant.now();
				Instant instDateOfJoin = e.getDateOfJoining().toInstant();
				Calendar calendar = new GregorianCalendar();
				calendar.setTime(e.getExitDate());
				int exitYear = calendar.get(Calendar.YEAR);
				// Add one to month {0 - 11}
				int exitMonth = calendar.get(Calendar.MONTH) + 1;

				System.out.println("year" + exitYear + "" + year + "month" + exitMonth + "" + month);
				if (exitYear >= year && exitMonth >= month) {

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

					System.out.println("Days" + day);
					LocalDate startDate = LocalDate.of(exitYear, exitMonth, 1);
					LocalDate endDate = LocalDate.of(exitYear, exitMonth, day);

					long workingdaysWithoutWeakEnd = days(startDate, endDate);
//							int workingCountDays= this.addDaysSkippingWeekends(lcd,day);

					int totalPresentDays = 0;
					int holidaysCount = 0;
					int workingCountDays = (int) workingdaysWithoutWeakEnd;
					System.out.println(" working days" + workingCountDays);
					int daysInMonth = yearMonthObject.lengthOfMonth();

					if (exitMonth == month) {

						totalPresentDays = workingCountDays;
						ZonedDateTime instExitDate = e.getExitDate().toInstant().atZone(ZoneId.systemDefault());

						String enddate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(instExitDate);

						LocalDate firstDayOfMonth = LocalDate.parse(enddate).with(TemporalAdjusters.firstDayOfMonth());
						String firstDayOfMonth2 = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(firstDayOfMonth);

						System.out.println("lastDayOfMonth" + firstDayOfMonth2);
						int count = template.getForObject(holidayCountBtwDatesURL + firstDayOfMonth2 + "/" + enddate,
								Integer.class);
						System.out.println("lastDayOfMonthCount" + count);

						holidaysCount = count;
					} else {
						int presentCount = daysInMonth
								- (leaveCount.getCount() + holidayCount.getHolidayCount() + weekendCount(year, month));
						totalPresentDays = presentCount;
						holidaysCount = holidayCount.getHolidayCount();
					}

					int workingDays = daysInMonth - (holidaysCount + weekendCount(year, month));// for
					// wd
					getLeaves.setTotalDaysPresent(totalPresentDays);
					getLeaves.setTotalDays(daysInMonth);// tDP
					getLeaves.setTotalWorkingDays(workingDays);// TWD
					getLeaves.setHolidays(holidaysCount);// TH
					getLeavesList.add(getLeaves);
//						}

				}

			}

		});
		return getLeavesList;
	}
}