package com.arshaa.emp.service;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Objects;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.EmployeeProfile;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.EmployeeProfileRepository;

@Service
public class EmployeeProfileService {
	@Autowired
	EmployeeProfileRepository epRepo;

	@Autowired
	EmployeeMasterRepository ee;

	private String onboardingId;

	public int Lossofpayservice(String employeeId) {
	    EmployeeMaster e1 = new EmployeeMaster();
	    EmployeeMaster n = ee.getById(employeeId);
	    LocalDate localDate = LocalDate.now();
	    // Date doj =e1.getDateOfJoining();

	    Date doj = new Date();
	    Date pcd = new Date();
	    doj = n.getDateOfJoining();
	    pcd  = n.getConfirmationDate();

	    Instant instant = n.getDateOfJoining().toInstant();
	    ZonedDateTime zdt = instant.atZone(ZoneId.systemDefault());
	    LocalDate date = zdt.toLocalDate();

	    int companyProvidedLeave = 1;//

	    Period age = Period.between(date, localDate);
	    int years = age.getYears();
	    int monthsBetween = age.getMonths() ;
	    int result=(monthsBetween+years*12);
	    System.out.println(result);

	    int temp1 = 0;
	    if(isJoinedCurrentYear(doj)) {
	        if(Objects.nonNull(pcd) && isPermanent(pcd) && isJoinedBeforeMidOfMonth(doj)) {
	            Period period = Period.between(date,pcd.toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
	            temp1 = period.getMonths() + (period.getYears()*12);
	        } else {
	        	if(isJoinedBeforeMidOfMonth(doj)) {
	        	    temp1 = result+1;
	        	} else {
	        	    if (Objects.nonNull(pcd) && isPermanent(pcd)) {
	        	        Period period = Period.between(date, pcd.toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
	        	        temp1 = (period.getMonths() + (period.getYears() * 12));
	        	    } else {
	        	        temp1 = result;
	        	    }
	        }
	        }
	    } else {
	        if(Objects.nonNull(pcd) && isPermanent(pcd) && isJoinedBeforeMidOfMonth(doj)) {
	            result++;
	            Period period = Period.between(date,pcd.toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
	            temp1 = (period.getMonths() + (period.getYears()*12))+1;
	        } else {
	        	if(isJoinedBeforeMidOfMonth(doj)) {
	        	    temp1 = result+1;
	        	} else {
	        	    if (Objects.nonNull(pcd) && isPermanent(pcd)) {
	        	        Period period = Period.between(date, pcd.toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
	        	        temp1 = (period.getMonths() + (period.getYears() * 12));
	        	    } else {
	        	        temp1 = result;
	        	    }
	        	}
	            
	        }
	    }

	    int temp2 = (result - temp1) > 0 ? (result - temp1) : 0;
	    return ((temp1 * 1) + (temp2 * 2));

	    /*int temp1=0;
	    if(Objects.nonNull(pcd)) {
	        Period period = Period.between(date,pcd.toInstant().atZone(ZoneId.systemDefault()).toLocalDate());
	        temp1 = (period.getMonths() + (period.getYears()*12))+1;
	    }
	    int temp2 = result - temp1;
	    int temp3 = (temp1 * 1) + (temp2 * 2);*/


	    /*if (result <= 6 ) {
	        companyProvidedLeave = result;// 5+1=6
	    }
	    else if(result >=6 && pcd == null) {

	        companyProvidedLeave = result;
	    }
	    else {
	        Instant instant1 = n.getConfirmationDate().toInstant();
	        ZonedDateTime zdt1 = instant.atZone(ZoneId.systemDefault());
	        LocalDate date1 = zdt.toLocalDate();
	        Period ctg =Period.between(date, date1);
	        int monthsBetween1 = (age.getMonths()+(age.getYears()*12)) + 1;

	        System.out.println(monthsBetween1);
	        companyProvidedLeave = monthsBetween1+ 2;
	        //companyProvidedLeave = result+ 2;
	    }

	    return companyProvidedLeave;*/
	}
	public Boolean isJoinedCurrentYear(Date joiningDate) {
	    ZonedDateTime zd = ZonedDateTime.now();
	    ZonedDateTime join = joiningDate.toInstant().atZone(ZoneId.systemDefault());
	    return (zd.getYear() == join.getYear());

	}

	public Boolean isJoinedBeforeMidOfMonth(Date joiningDate) {
	    ZonedDateTime join = joiningDate.toInstant().atZone(ZoneId.systemDefault());
	    return (join.getDayOfMonth() <= 15);
	}

	public Boolean isJoinedSameMonth(Date joinedDate) {
	    ZonedDateTime zd = ZonedDateTime.now();
	    ZonedDateTime join = joinedDate.toInstant().atZone(ZoneId.systemDefault());
	    return (zd.getMonthValue() == join.getMonthValue());
	}
	public Boolean isPermanent(Date conformationDate) {
	    ZonedDateTime join = conformationDate.toInstant().atZone(ZoneId.systemDefault());
	    ZonedDateTime zd = ZonedDateTime.now();
	    return zd.isAfter(join);
	}

	public EmployeeProfile store(MultipartFile file, String onboardingId) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//String employeeId1=employeeId;
//EmployeeProfile FileDB = new EmployeeProfile();
        EmployeeProfile newFile = new EmployeeProfile();
        newFile.setData(file.getBytes());
        newFile.setOnboardingId(onboardingId);
        newFile.setName(fileName);
        newFile.setType(file.getContentType());
        return epRepo.save(newFile);
    }
    
    public EmployeeProfile store1(MultipartFile file, String employeeId) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//String employeeId1=employeeId;
//EmployeeProfile FileDB = new EmployeeProfile();
        EmployeeProfile newFile = new EmployeeProfile();
        newFile.setData(file.getBytes());
        newFile.setName(fileName);
        newFile.setType(file.getContentType());
        newFile.setEmployeeId(employeeId);
        return epRepo.save(newFile);
    }
    
    public EmployeeProfile update(MultipartFile file, String employeeId) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        
//        EmployeeProfile newFile = new EmployeeProfile();
//       
//        emp.setName(newFile.getName());
//        emp.setData(newFile.getData());
//        emp.setType(newFile.getType());
        EmployeeProfile emp = epRepo.findByEmployeeId(employeeId);
//        EmployeeProfile newFile = new EmployeeProfile();
        emp.setData(file.getBytes());
        emp.setName(fileName);
        emp.setType(file.getContentType());
//        newFile.setEmployeeId(employeeId);
        return epRepo.save(emp);
    }



   public EmployeeProfile getFile(String id) {
        return epRepo.findById(id).get();
    }



   public EmployeeProfile getFileByID(String id) {
        return epRepo.findByEmployeeId(id);
    }



   public EmployeeProfile getFileByOnboardingID(String onboardingId) {
        return epRepo.findByOnboardingId(onboardingId);
    }



   public Stream<EmployeeProfile> getAllFiles() {
        return epRepo.findAll().stream();
    }
}
