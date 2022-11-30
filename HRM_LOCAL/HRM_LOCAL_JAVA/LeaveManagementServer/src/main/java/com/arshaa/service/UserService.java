package com.arshaa.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import com.arshaa.model.DepartmentName;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.client.RestTemplate;


import com.arshaa.entity.BetweenDates;
import com.arshaa.entity.EntitledLeaves;
import com.arshaa.entity.LeaveMaster;
import com.arshaa.model.UserModel;
import com.arshaa.entity.User;
import com.arshaa.mapper.UserMapper;
import com.arshaa.model.AllEmployeesForHr;
import com.arshaa.model.EmailModel;
import com.arshaa.model.EmailTemplate;
import com.arshaa.model.EmployeeName;
import com.arshaa.model.GetIrmId;
import com.arshaa.model.GetSrmId;
import com.arshaa.model.LeaveBalanceModel;
import com.arshaa.model.LeavesDataForHr;
import com.arshaa.model.StoreDatesList;
import com.arshaa.model.UsersByIrm;
import com.arshaa.repository.BetweenDatesRepo;
import com.arshaa.repository.LeaveMasterRepository;
import com.arshaa.repository.UserRepository;
import com.arshaa.repository.leaveEntitlementRepository;

@Service
@Transactional
public class UserService {
	@Autowired
	private UserRepository repository;
	@Autowired
	private leaveEntitlementRepository repo;
	@Autowired
	@Lazy
	private RestTemplate template;

	@Autowired
	private BetweenDatesRepo bro;

	 @Autowired
	 private LeaveMasterRepository leee;
	@Autowired
	private UserMapper userMapper;

	public static final String preEmailURL = "http://emailService/mail/sendmail";
	public static final String getEmailByEmployeeIdURL="http://loginservice/login/getEmployeeEmailByEmployeeId/";

	public UserModel findById(int employeeleaveId) {

		Optional<User> u = repository.findById(employeeleaveId);
		return userMapper.getUserModel(u.orElse(new User()));
	}

// public Optional<User> findByemployeeId(String employeeId) {
// return repository.getAllUserByemployeeId(employeeId);
//
// } 
//public List<BetweenDates> save(User user) {
//	try
//
//	{
//		List<BetweenDates>bdatesList=new ArrayList<>();
//		GetIrm al = template.getForObject(
//				"http://empService/emp/getIrmByEmployeeId/" + user.getEmployeeId(),
//				GetIrm.class);
//		
//		
//		user.setIrm(al.getIrm());
//		user.setLeaveStatus("pending");
////		user.setManagerApproval("pending");
//		
//		 User savedUser= repository.save(user);
//		
//		 List<StoreDatesList> u = getDaysBetweenDates(user.getFromDate(), user.getToDate());
////		 bro.saveAll(u);
//		 u.forEach(e->{
//			 BetweenDates d = new BetweenDates();
//			 d.setEmployeeId(savedUser.getEmployeeId());
//			 d.setEmployeeleaveId(savedUser.getEmployeeleaveId());
//			 d.setAppliedDate(e.getBetWeenDates());
//			 BetweenDates bd= bro.save(d);
//			 bdatesList.add(bd);
//		 
////			 Date date1;
////			try {
////				date1 = new SimpleDateFormat("dd/MM/yyyy").parse(date);
////				 d.setAppliedDate(date1);
////				 BetweenDates bd= bro.save(d);
////				 bdatesList.add(bd);
////			} catch (ParseException e1) {
////				// TODO Auto-generated catch block
////				e1.printStackTrace();
////			}
////			
//		 });
//		 
//		return bdatesList;
//		
//		 
//
//	}catch(
//	Exception e)
//	{
//		e.getMessage();
//	}return null;
//}
	public List<BetweenDates> save(User user) {

		String OnboardUrl = "http://loginservice/login/getEmployeeByUserType/";
//		String empUrl = "http://empService/emp/getEmployeeNameByEmployeeId/";

		try

		{
//			EmailModel email = template.getForObject(OnboardUrl + "irm", EmailModel.class);
//			EmailModel emp = template.getForObject(empUrl + user.getEmployeeId(), EmailModel.class);
//
//			EmailTemplate mailTemp = new EmailTemplate();
//			Map<String, String> map = new HashMap();
//
//			map.put("employeeName", emp.getEmployeeName());
////			map.put("email",hrApp.getEmail());
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
//			mailTemp.setMap(map);
//			mailTemp.setEmailType("LEAVE_APPLY");

//			rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//			rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

//			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

			List<BetweenDates> bdatesList = new ArrayList<>();
			GetIrmId al = template.getForObject("http://empService/emp/getIrmByEmployeeId/" + user.getEmployeeId(),
					GetIrmId.class);
			GetSrmId as = template.getForObject("http://empService/emp/getSrmByEmployeeId/" + user.getEmployeeId(),
					GetSrmId.class);
			EmployeeName en = template.getForObject(
					"http://empService/emp/getEmployeeNameByEmployeeId/" + user.getEmployeeId(), EmployeeName.class);
			DepartmentName dn = template.getForObject(
					"http://empService/emp/getDepartmentNameByEmployeeId/" + user.getEmployeeId(),
					DepartmentName.class);
			java.sql.Date tSqlDate = new java.sql.Date(user.getSubmittedDate().getTime());
			user.setSubmittedDate(tSqlDate);

			user.setIrmId(al.getIrmId());
			user.setSrmId(as.getSrmId());
			user.setLeaveStatus("pending");
//			user.setManagerApproval("pending");
			user.setSubmittedDate(tSqlDate);
			user.setLeaveOrwfh(user.getLeaveOrwfh());
			user.setEmployeeName(en.getEmployeeName());
			user.setDepartmentName(dn.getDepartmentName());

			User savedUser = repository.save(user);
			System.out.println(savedUser.getFromDate()+"savedUser FROM");
			System.out.println(savedUser.getToDate()+"savedUser TO");
			DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");  
			String strDate = dateFormat.format(user.getFromDate());
			System.out.println(strDate+"Coverted frOM");
			String convetToDate=dateFormat.format(savedUser.getToDate());
					String email=template.getForObject(getEmailByEmployeeIdURL+al.getIrmId(), String.class);
          EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();

			mailTemp.setEmailType("LEAVE_APPLY");
			map.put("employeeName", "Team Arshaa");
			map.put("employeeId", user.getEmployeeId());
			map.put("name", user.getEmployeeName());
			 
			map.put("fromDate",strDate );
			
			String toDate = dateFormat.format(user.getToDate()); 
			map.put("toDate", convetToDate);
			String number = String.valueOf(user.getNumberOfDays());
			map.put("NoOfDays", number);
			map.put("reason", user.getLeaveReason());
			
			
			
			
			map.put("email", email);
//			map.put("email", "muralikrishna.miriyala@arshaa.com");
			mailTemp.setMap(map);
			template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
			List<StoreDatesList> u = getDaysBetweenDates(user.getFromDate(), user.getToDate());
//			 bro.saveAll(u);
			u.forEach(e -> {
				BetweenDates d = new BetweenDates();
				d.setEmployeeId(savedUser.getEmployeeId());
				d.setEmployeeleaveId(savedUser.getEmployeeleaveId());
				d.setAppliedDate(e.getBetWeenDates());
				d.setLeaveOrwfh(savedUser.getLeaveOrwfh());
				d.setDepartmentName(savedUser.getDepartmentName());
				d.setLeaveStatus(savedUser.getLeaveStatus());
				BetweenDates bd = bro.save(d);
				bdatesList.add(bd);

//				 Date date1;
//				try {
//					date1 = new SimpleDateFormat("dd/MM/yyyy").parse(date);
//					 d.setAppliedDate(date1);
//					 BetweenDates bd= bro.save(d);
//					 bdatesList.add(bd);
//				} catch (ParseException e1) {
//					// TODO Auto-generated catch block
//					e1.printStackTrace();
//				}
//				
			});

			return bdatesList;

		} catch (Exception e) {
			e.getMessage();
		}
		return null;
	}

	public ResponseEntity findAll() {
		String url = "http://empService/emp/getEmployeeNameByEmployeeId/";
		List<AllEmployeesForHr> getList = new ArrayList<>();
		try {
			List<User> u = repository.findAll();
			UserModel s = new UserModel();
			u.forEach(g -> {
				AllEmployeesForHr ae = new AllEmployeesForHr();
				ae.setEmployeeId(g.getEmployeeId());
				ae.setLeaveType(g.getLeaveType());
				ae.setFromDate(g.getFromDate());
				ae.setToDate(g.getToDate());
				ae.setNumberOfDays(g.getNumberOfDays());
				ae.setLeaveReason(g.getLeaveReason());
				ae.setManagerApproval(g.getManagerApproval());
				ae.setLeaveStatus(g.getLeaveStatus());
				ae.setEmployeeleaveId(g.getEmployeeleaveId());
				EmployeeName al = template.getForObject(
						"http://empService/emp/getEmployeeNameByEmployeeId/" + g.getEmployeeId(), EmployeeName.class);
				ae.setName(al.getEmployeeName());
				getList.add(ae);
			});
			return new ResponseEntity(getList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);
		}
	}

//try {
//// TODO Auto-generated method stub
//return repository.findAll();
//} catch (Exception e) {
//e.getMessage();
//}
//return findAll();
//}

	public List<User> findByemployeeId(String employeeId) {
		try {
// TODO Auto-generated method stub
			return (List<User>) repository.findByemployeeId(employeeId);
		} catch (Exception e) {
			e.getMessage();
		}
		return findByemployeeId(employeeId);
	}

	public User UpdateUsers(User user, Integer employeeleaveId) {
		try {
			User u = repository.findById(employeeleaveId).get();
			user.getEmployeeleaveId();
			u.getToDate();
			u.getLeaveReason();
			user.getLeaveStatus();
			user.getNumberOfDays();
			u.setHrApproval(user.getHrApproval());
			u.setLeaveStatus(user.getLeaveStatus());
			u.setRejectReason(user.getRejectReason());
			u.setManagersRejectReason(user.getManagersRejectReason());
			u.setIrmApproveReason(user.getIrmApproveReason());
			u.setSrmApproveReason(user.getSrmApproveReason());
//u.setLeaveReason(user.getLeaveReason()); u.setRejectReason(user.getRejectReason());

//u.setEmployeeId(user.getEmployeeId());
//u.setFromDate(user.getFromDate());
//u.setToDate(user.getToDate());
// u.setNumberOfDays(user.getNumberOfDays());
//u.setLeaveType(user.getLeaveType());
			return repository.save(u);
		} catch (Exception e) {
			e.getMessage();
		}
		return user;
	}

	public User UpdateManagerUsers(User user, Integer employeeleaveId, String userType) {
		try {
			 String url = "http://empService/emp/leavespermonth/";
			User u = repository.findById(employeeleaveId).get();
			user.getEmployeeleaveId();
			u.getToDate();
			u.getLeaveReason();
			user.getLeaveStatus();
			user.getNumberOfDays();
			u.setLeaveStatus(user.getLeaveStatus());
			u.setRejectReason(user.getRejectReason());
			u.setManagersRejectReason(user.getManagersRejectReason());
			u.setIrmApproveReason(user.getIrmApproveReason());
			u.setSrmApproveReason(user.getSrmApproveReason());

			User savedU = repository.save(u);
			List<BetweenDates> bdates=bro.findByEmployeeleaveIdAndEmployeeId(savedU.getEmployeeleaveId(),savedU.getEmployeeId());

            bdates.forEach(e->{

                e.setLeaveStatus(savedU.getLeaveStatus());

                  bro.save(e);

            });
        	EmailTemplate mailTemp = new EmailTemplate();
			Map<String, String> map = new HashMap();
			EmployeeName al = template.getForObject(
					"http://empService/emp/getEmployeeNameByEmployeeId/" + u.getEmployeeId(), EmployeeName.class);
			String email=template.getForObject(getEmailByEmployeeIdURL+u.getEmployeeId(), String.class);
//			System.out.println("HELLO........"+userType);
			
			switch (userType) {
			case "irm":
				

				map.put("employeeName", "Team Arshaa");
//				map.put("email",hrApp.getEmail());
				map.put("email",email);
				mailTemp.setMap(map);
				if (user.getLeaveStatus().equalsIgnoreCase("Approved")) {
					mailTemp.setEmailType("IRM_APPROVED");
				} else {
					mailTemp.setEmailType("IRM_REJECTED");
				}

				template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
				break;
			case "pmohead":
//				EmailTemplate mailTemp = new EmailTemplate();
				map.put("employeeName","Team Arshaa");
				map.put("email",email);
//				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				if (user.getLeaveStatus().equalsIgnoreCase("Approved")) {
					mailTemp.setEmailType("SRM_APPROVED");
				} else {
					mailTemp.setEmailType("SRM_REJECTED");
				}

				template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
				break;
			case "srm":
//				EmailTemplate mailTemp = new EmailTemplate();
				map.put("employeeName", "Team Arshaa");
				map.put("email",email);
//				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				if (user.getLeaveStatus().equalsIgnoreCase("Approved")) {
					mailTemp.setEmailType("SRM_APPROVED");
				} else {
					mailTemp.setEmailType("SRM_REJECTED");
				}

				template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);
				break;
			default:
				break;
			}
			if (savedU.getLeaveStatus().equals("Approved") &&( savedU.getLeaveOrwfh().equals("L"))) {
                System.out.println("HELLO........"+userType+savedU.getLeaveStatus());

               LeaveMaster m = leee.findByEmployeeId(savedU.getEmployeeId());
            //    m.setEmployeeId(u.getEmployeeId());
               
                Integer totalLeaves =  template.getForObject(url + u.getEmployeeId(), Integer.class);
                System.out.println(totalLeaves);
                int temp = Objects.isNull(m.getUsedLeaves()) ? 0 : m.getUsedLeaves();
                m.setLeaveBalance(totalLeaves - (temp + savedU.getNumberOfDays()));
                m.setUsedLeaves(savedU.getNumberOfDays() + temp);
                            
                m.setTotalLeaves(totalLeaves);

              leee.save(m);

           

		
			return savedU;
			} else {
                System.out.println("no data");
            }
		} catch (Exception e) {
			e.getMessage();
		}
		return user;
	}

// this logic will give employees related to particular manager-->Chandrika
	public ResponseEntity getUserByIrm(String irmId) {
//		try {
//			List<User> u = repository.findUserByReportingManager(reportingManager);
//			return new ResponseEntity(u, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity("Something went wrong", HttpStatus.OK);
//		}
		String url = "http://empService/emp/getEmployeeNameByEmployeeId/";
		List<UsersByIrm> getList = new ArrayList<>();
		try {
			List<User> u = repository.findUserByIrmId(irmId);
			UserModel s = new UserModel();
//			LocalDateTime now = LocalDateTime.now();
//			LocalDate currentDate = LocalDate.of(2022, 8, 29);
////			 Date date=new Date(2022, 8, 12);
//			Date date = new Date(System.currentTimeMillis());
//			u.stream().filter(user -> date.before(getValidateDat(user.getSubmittedDate()))).forEach(g -> {
//				System.out.println("Current Date" + date + "5 days after" + getValidateDat(g.getSubmittedDate()));
//
//				UsersByIrm usrm = new UsersByIrm();
//				usrm.setEmployeeId(g.getEmployeeId());
//				usrm.setLeaveType(g.getLeaveType());
//				usrm.setFromDate(g.getFromDate());
//				usrm.setToDate(g.getToDate());
//				usrm.setNumberOfDays(g.getNumberOfDays());
//				usrm.setLeaveReason(g.getLeaveReason());
//				usrm.setManagerApproval(g.getManagerApproval());
//				usrm.setEmployeeleaveId(g.getEmployeeleaveId());
//				usrm.setLeaveStatus(g.getLeaveStatus());
//				usrm.setLeaveOrwfh(g.getLeaveOrwfh());
//				EmployeeName al = template.getForObject(url + g.getEmployeeId(), EmployeeName.class);
//				usrm.setName(al.getEmployeeName());
//				getList.add(usrm);
//			});

			u.forEach(g -> {
				UsersByIrm usrm = new UsersByIrm();
				usrm.setEmployeeId(g.getEmployeeId());
				usrm.setLeaveType(g.getLeaveType());
				usrm.setFromDate(g.getFromDate());
				usrm.setToDate(g.getToDate());
				usrm.setNumberOfDays(g.getNumberOfDays());
				usrm.setLeaveReason(g.getLeaveReason());
				usrm.setManagerApproval(g.getManagerApproval());
				usrm.setEmployeeleaveId(g.getEmployeeleaveId());
				usrm.setLeaveStatus(g.getLeaveStatus());
				usrm.setLeaveOrwfh(g.getLeaveOrwfh());
				EmployeeName al = template.getForObject(url + g.getEmployeeId(), EmployeeName.class);
				usrm.setName(al.getEmployeeName());
				getList.add(usrm);
			});
			return new ResponseEntity(getList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);

		}

	}

	public ResponseEntity getUserBySrm(String srmId) {
//		try {
//			List<User> u = repository.findUserByReportingManager(reportingManager);
//			return new ResponseEntity(u, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity("Something went wrong", HttpStatus.OK);
//		}
		String OnboardUrl = "http://loginservice/login/getEmployeeDataByUserType/";
		String url = "http://empService/emp/getEmployeeNameByEmployeeId/";
		List<UsersByIrm> getList = new ArrayList<>();
		try {
			List<User> u = repository.findUserBySrmId(srmId);
			UserModel s = new UserModel();
//			 LocalDate currentDate =LocalDate.of(2022, 8, 29);
//			 Date date=new Date(2022, 8, 12);
			Date date = new Date(System.currentTimeMillis());
			u.stream().filter(user -> date.after(getValidateDat(user.getSubmittedDate()))).forEach(g -> {
				System.out.println("Current Date" + date + "5 days after" + getValidateDat(g.getSubmittedDate()));

				EmailModel email = template.getForObject(OnboardUrl + "srm", EmailModel.class);
				EmailModel emp = template.getForObject(url + g.getEmployeeId(), EmailModel.class);

				EmailTemplate mailTemp = new EmailTemplate();
				Map<String, String> map = new HashMap();

				map.put("employeeName", emp.getEmployeeName());
//				map.put("email",hrApp.getEmail());
				map.put("email", "muralikrishna.miriyala@arshaa.com");
				mailTemp.setMap(map);
				mailTemp.setEmailType("LEAVE_APPLY");

//				rConfirm.setEmployeeName(getOnboarding.getFirstName()+getOnboarding.getLastName());
//				rConfirm.setEmail("muralikrishna.miriyala@arshaa.com");

//				template.postForObject(preEmailURL, mailTemp, EmailTemplate.class);

				UsersByIrm usrm = new UsersByIrm();
				usrm.setEmployeeId(g.getEmployeeId());
				usrm.setLeaveType(g.getLeaveType());
				usrm.setFromDate(g.getFromDate());
				usrm.setToDate(g.getToDate());
				usrm.setNumberOfDays(g.getNumberOfDays());
				usrm.setLeaveReason(g.getLeaveReason());
				usrm.setManagerApproval(g.getManagerApproval());
				usrm.setEmployeeleaveId(g.getEmployeeleaveId());
				usrm.setLeaveStatus(g.getLeaveStatus());
				usrm.setLeaveOrwfh(g.getLeaveOrwfh());
				EmployeeName al = template.getForObject(url + g.getEmployeeId(), EmployeeName.class);
				usrm.setName(al.getEmployeeName());
				getList.add(usrm);
			});
			return new ResponseEntity(getList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);

		}

	}

	private Date getValidateDat(Date date) {

		java.util.Date m = date;
		java.sql.Date ms = new java.sql.Date(m.getTime());
		Calendar cal = Calendar.getInstance();
		cal.setTime(m);
		cal.add(Calendar.DATE, 6);
		m = cal.getTime();
		System.out.println("PresentDate" + date + "after5days" + m);
		return m;
	}

	public EntitledLeaves save(EntitledLeaves entitledleaves) {
// TODO Auto-generated method stub
		return repo.save(entitledleaves);
	}

	private List<EntitledLeaves> findAllleaveTypes() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	public Optional<EntitledLeaves> findByleaveType(String leaveType) {
		// TODO Auto-generated method stub
		return repo.findByleaveType(leaveType);
	}

	public EntitledLeaves UpdateLeaveType(EntitledLeaves entitledleaves, Integer leaveId) {
		try {
			EntitledLeaves l = repo.findByleaveId(leaveId);
			l.getLeaveType();
			l.getNoOfDays();
			entitledleaves.getLeaveType();
			entitledleaves.getNoOfDays();
			l.setLeaveType(entitledleaves.getLeaveType());
			l.setNoOfDays(entitledleaves.getNoOfDays());
			// u.setLeaveReason(user.getLeaveReason());//u.setEmployeeId(user.getEmployeeId());
			// u.setFromDate(user.getFromDate());
			// u.setToDate(user.getToDate());
			// u.setNumberOfDays(user.getNumberOfDays());
			// u.setLeaveType(user.getLeaveType());
			return repo.save(l);
		} catch (Exception e) {
			e.getMessage();
		}
		return entitledleaves;
	}

// Written by Sri Divya
	public List<User> findByLeaveStatus(String leaveStatus) {
		try {
// TODO Auto-generated method stub
			return (List<User>) repository.findByLeaveStatus(leaveStatus);
		} catch (Exception e) {
			e.getMessage();
		}
		return repository.findByLeaveStatus(leaveStatus);
	}

	public List<StoreDatesList> getDaysBetweenDates(Date startDate, Date endDate) {
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		ArrayList<Date> dates = new ArrayList<Date>();
		List<StoreDatesList> getBTDates = new ArrayList<>();
		Calendar cal1 = Calendar.getInstance();
		System.out.println(cal1);
		cal1.setTime(startDate);
//            cal1.add(Calendar.DATE,1);
		Calendar cal2 = Calendar.getInstance();
		cal2.setTime(endDate);
//           cal2.add(Calendar.DATE, 1);

		while (cal1.before(cal2) || cal1.equals(cal2)) {
			StoreDatesList sd = new StoreDatesList();
			Date d = cal1.getTime();
			System.out.println(d);
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			String strDate = dateFormat.format(d);
			sd.setBetWeenDates(strDate);
			getBTDates.add(sd);
			dates.add(cal1.getTime());
			System.out.println(strDate);
			cal1.add(Calendar.DATE, 1);
		}
		return getBTDates;
	}

	public int findEmployeePendingLeavesCountByLeaveStatus(String leaveStatus) {
		try {
//						return repository.findEmployeePendingLeavesCountByLeaveStatus(leaveStatus).size();
			return repository.findByLeaveStatus(leaveStatus).size();

		} catch (Exception e) {
			e.getMessage();
			return 0;
		}
	}

	public List<LeavesDataForHr> findEmployeeLeavesLeaveStatusByLeaveStatus(String leaveStatus) {
		String url = "http://empService/emp/getEmployeeNameDepDesByEmployeeId/";
		List<LeavesDataForHr> getList = new ArrayList<>();
		try {
//						return repository.findEmployeePendingLeavesCountByLeaveStatus(leaveStatus).size();
			List<User> u = repository.findEmployeeLeavesLeaveStatusByLeaveStatus(leaveStatus);
			u.stream().forEach(e -> {
				LeavesDataForHr ldh = new LeavesDataForHr();
				LeavesDataForHr ldata = template.getForObject(url + e.getEmployeeId(), LeavesDataForHr.class);
				ldh.setDepartmentName(ldata.getDepartmentName());
				ldh.setDesignationName(ldata.getDesignationName());
				ldh.setFirstName(ldata.getFirstName());
				ldh.setEmployeeId(e.getEmployeeId());
				ldh.setLeaveReason(e.getLeaveReason());
				ldh.setNumberOfDays(e.getNumberOfDays());

				getList.add(ldh);
			});
			return getList;

		} catch (Exception e) {
			e.getMessage();
			return null;
		}
	}

	public int findEmployeeWFHCountByLeaveOrwfhAndEmployeeId(String leaveOrwfh, String employeeId) {
		try {
//			return repository.findEmployeePendingLeavesCountByLeaveStatus(leaveStatus).size();
			return repository.findByleaveOrwfhAndEmployeeId(leaveOrwfh, employeeId).size();

		} catch (Exception e) {
			e.getMessage();
			return 0;
		}

	}

	public List<User> findByEmployeeIdAndLeaveOrwfh(String employeeId, String leaveOrwfh) {
		try {
// TODO Auto-generated method stub
			return (List<User>) repository.findByEmployeeIdAndLeaveOrwfh(employeeId, leaveOrwfh);
		} catch (Exception e) {
			e.getMessage();
		}
		return findByEmployeeIdAndLeaveOrwfh(employeeId, leaveOrwfh);
	}

	public List<User> findLeavesByLeaveStatusAndEmployeeId(String leaveStatus, String employeeId) {
		try {
			// TODO Auto-generated method stub
			return repository.findByLeaveStatusAndEmployeeId(leaveStatus, employeeId);
		} catch (Exception e) {

			e.getMessage();
			return null;
		}
//					return findLeavesByLeaveStatusAndEmployeeId(leaveStatus, employeeId);
	}

	public List<String> getMonthsForEmployeeLeaves(String employeeId) {

		List<BetweenDates> getAllBetweenDates = bro.findByEmployeeId(employeeId);
		List<String> splitMonth = new ArrayList();
		getAllBetweenDates.forEach(date -> {
			String appliedDateString = date.getAppliedDate();
			String[] splittedDate = appliedDateString.split("-");
			splitMonth.add(splittedDate[1]);
		});
		return splitMonth;
	}
	
	
	 public List<LeaveMaster> listAll() {
	        return leee.findAll();
	    }
	 
	 public LeaveMaster get(String employeeId) {
	        return leee.findByEmployeeId(employeeId);
	    }
//	 public LeaveMaster get(String employeeId) {
//	        return leee.findByemployeeId(employeeId);
//	    }
	     
	    public void save(LeaveMaster leaveMaster) {
	    	leee.save(leaveMaster);
	    }
	    
	  //Update Leave Balance for an Employee
	    public LeaveBalanceModel updateLeaveBalnce(LeaveBalanceModel leavebalance,String employeeId) {
	    	try {
	    		LeaveMaster lb = leee.findByEmployeeId(employeeId);
	    		lb.setLeaveBalance(leavebalance.getLeaveBalance());
	    		leee.save(lb);
	    		
	    		return leavebalance;
	    	
	    	}
	    	catch (Exception e) {
				e.getMessage();
			}
	    	return leavebalance;
	  }
	       
}


