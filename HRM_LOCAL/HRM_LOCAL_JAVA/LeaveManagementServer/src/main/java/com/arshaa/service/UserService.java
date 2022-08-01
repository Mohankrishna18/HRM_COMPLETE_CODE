package com.arshaa.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
import com.arshaa.entity.User;
import com.arshaa.model.AllEmployeesForHr;
import com.arshaa.model.EmployeeName;
import com.arshaa.model.GetReportingManager;
import com.arshaa.model.StoreDatesList;
import com.arshaa.model.UsersByReportingManager;
import com.arshaa.repository.BetweenDatesRepo;
import com.arshaa.repository.UserRepository;
import com.arshaa.repository.leaveEntitlementRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
	@Autowired
	private leaveEntitlementRepository repo;
	@Autowired
	@Lazy
	private RestTemplate template;
	
	@Autowired
	private BetweenDatesRepo bro ;

	public Optional<User> findById(int employeeleaveId) {

try {
return repository.findById(employeeleaveId);
} catch (Exception e) {
e.getMessage();
}
return findById(employeeleaveId);



}
// public Optional<User> findByemployeeId(String employeeId) {
// return repository.getAllUserByemployeeId(employeeId);
//
// } 
public List<BetweenDates> save(User user) {
	try

	{
		List<BetweenDates>bdatesList=new ArrayList<>();
		GetReportingManager al = template.getForObject(
				"http://empService/emp/getReportingManagerByEmployeeId/" + user.getEmployeeId(),
				GetReportingManager.class);
		
		
		user.setReportingManager(al.getReportingmanager());
		user.setLeaveStatus("pending");
		user.setManagerApproval("pending");
		
		 User savedUser= repository.save(user);
		
		 List<StoreDatesList> u = getDaysBetweenDates(user.getFromDate(), user.getToDate());
//		 bro.saveAll(u);
		 u.forEach(e->{
			 BetweenDates d = new BetweenDates();
			 d.setEmployeeId(savedUser.getEmployeeId());
			 d.setAppliedDate(e.getBetWeenDates());
			 d.setEmployeeleaveId(savedUser.getEmployeeleaveId());
			 BetweenDates bd= bro.save(d);
			 bdatesList.add(bd);
		 
//			 Date date1;
//			try {
//				date1 = new SimpleDateFormat("dd/MM/yyyy").parse(date);
//				 d.setAppliedDate(date1);
//				 BetweenDates bd= bro.save(d);
//				 bdatesList.add(bd);
//			} catch (ParseException e1) {
//				// TODO Auto-generated catch block
//				e1.printStackTrace();
//			}
//			
		 });
		 
		return bdatesList;
		
		 

	}catch(
	Exception e)
	{
		e.getMessage();
	}return null;
}

	public ResponseEntity findAll() {
		String url="http://empService/emp/getEmployeeNameByEmployeeId/";
		List<AllEmployeesForHr> getList=new ArrayList<>();
		try {
			List<User> u = repository.findAll();
			User s=new User();
			u.forEach(g->{
				AllEmployeesForHr ae=new AllEmployeesForHr();
				ae.setEmployeeId(g.getEmployeeId());
				ae.setLeaveType(g.getLeaveType());
				ae.setFromDate(g.getFromDate());
				ae.setToDate(g.getToDate());
				ae.setNumberOfDays(g.getNumberOfDays());
				ae.setLeaveReason(g.getLeaveReason()); 
				ae.setManagerApproval(g.getManagerApproval());
				ae.setLeaveStatus(g.getLeaveStatus());
				ae.setEmployeeleaveId(g.getEmployeeleaveId());
				EmployeeName al=template.getForObject("http://empService/emp/getEmployeeNameByEmployeeId/" + g.getEmployeeId(),EmployeeName.class);
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

	public User UpdateManagerUsers(User user, Integer employeeleaveId) {
		try {
			User u = repository.findById(employeeleaveId).get();
			user.getEmployeeleaveId();
			u.getToDate();
			u.getLeaveReason();
			user.getManagerApproval();
			user.getNumberOfDays();
			u.setManagerApproval(user.getManagerApproval());
//u.setLeaveReason(user.getLeaveReason()); 
      u.setRejectReason(user.getRejectReason());
//      user.getManagersRejectReason();
      u.setManagersRejectReason(user.getManagersRejectReason());

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

// this logic will give employees related to particular manager-->Chandrika
	public ResponseEntity getUserByReportingManager(String reportingManager) {
//		try {
//			List<User> u = repository.findUserByReportingManager(reportingManager);
//			return new ResponseEntity(u, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity("Something went wrong", HttpStatus.OK);
//		}
		String url="http://empService/emp/getEmployeeNameByEmployeeId/";
		List<UsersByReportingManager> getList=new ArrayList<>();
		try {
			List<User> u = repository.findUserByReportingManager(reportingManager);
			User s=new User();
			u.forEach(g->{
				UsersByReportingManager usrm=new UsersByReportingManager();
				usrm.setEmployeeId(g.getEmployeeId());
				usrm.setLeaveType(g.getLeaveType());
				usrm.setFromDate(g.getFromDate());
				usrm.setToDate(g.getToDate());
				usrm.setNumberOfDays(g.getNumberOfDays());
				usrm.setLeaveReason(g.getLeaveReason()); 
				usrm.setManagerApproval(g.getManagerApproval());
				usrm.setEmployeeleaveId(g.getEmployeeleaveId());
				usrm.setLeaveStatus(g.getLeaveStatus());
				EmployeeName al=template.getForObject("http://empService/emp/getEmployeeNameByEmployeeId/" + g.getEmployeeId(),EmployeeName.class);
                usrm.setName(al.getEmployeeName());
                getList.add(usrm);
			});
			return new ResponseEntity(getList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity("Something went wrong", HttpStatus.OK);

		}

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
		//u.setLeaveReason(user.getLeaveReason());//u.setEmployeeId(user.getEmployeeId());
		//u.setFromDate(user.getFromDate());
		//u.setToDate(user.getToDate());
		// u.setNumberOfDays(user.getNumberOfDays());
		//u.setLeaveType(user.getLeaveType());
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
	public List<StoreDatesList> getDaysBetweenDates(Date startDate, Date endDate){
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
           ArrayList<Date> dates = new ArrayList<Date>();
           List<StoreDatesList> getBTDates=new ArrayList<>();
           Calendar cal1 = Calendar.getInstance();
           System.out.println(cal1);
            cal1.setTime(startDate);
//            cal1.add(Calendar.DATE,1);
           Calendar cal2 = Calendar.getInstance();
           cal2.setTime(endDate);
//           cal2.add(Calendar.DATE, 1);

           while(cal1.before(cal2) || cal1.equals(cal2))
           {
        	   StoreDatesList sd=new StoreDatesList();
        	   Date d=cal1.getTime();
        	   System.out.println(d);
        	   DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        	   String strDate = dateFormat.format(d);
        	   sd.setBetWeenDates(strDate);
        	   getBTDates.add(sd);
               dates.add(cal1.getTime());
               System.out.println(strDate);
          cal1.add(Calendar.DATE,1);
           }
           return getBTDates;
       }
	
}


