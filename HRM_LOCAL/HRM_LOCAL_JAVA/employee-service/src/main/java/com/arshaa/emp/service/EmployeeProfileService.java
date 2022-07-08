package com.arshaa.emp.service;



import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
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
public int Lossofpayservice (String employeeId) {



    EmployeeMaster  e1 = new EmployeeMaster();
    EmployeeMaster n  = ee.getById(employeeId) ;
    LocalDate localDate = LocalDate.now();
    //Date  doj =e1.getDateOfJoining();

    Date doj = new Date();
    doj=e1.getDateOfJoining();

    Instant instant = n.getDateOfJoining().toInstant();
    ZonedDateTime zdt = instant.atZone(ZoneId.systemDefault());
    LocalDate date= zdt.toLocalDate();



      int companyProvidedLeave = 1;//
     // int employeeLeaveTakenInThisMonth = 7;

     // int leaveDifference = companyProvidedLeave-employeeLeaveTakenInThisMonth;
//      int lossOfPay = 0;
//      if(leaveDifference<0){
//          lossOfPay = Math.abs(leaveDifference);
//          companyProvidedLeave = 0;
//      }else{
//          companyProvidedLeave = leaveDifference;//5
//      }

      Period age = Period.between(date, localDate);    
      int monthsBetween = age.getMonths()+1;
      System.out.println(monthsBetween);
      if(monthsBetween<=6)
      {
          companyProvidedLeave = monthsBetween ;//5+1=6
      }else{
         companyProvidedLeave = monthsBetween + 2;
      }

   
//      int a=monthsBetween+companyProvidedLeave;
    return companyProvidedLeave;


}



public EmployeeProfile store(MultipartFile file, String employeeId) throws IOException {
String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//String employeeId1=employeeId;
//EmployeeProfile FileDB = new EmployeeProfile();
EmployeeProfile newFile = new EmployeeProfile();
newFile.setData(file.getBytes());
newFile.setEmployeeId(employeeId);
newFile.setName(fileName);
newFile.setType(file.getContentType());
return epRepo.save(newFile);
}



public EmployeeProfile getFile(String id) {
return epRepo.findById(id).get();
}



public EmployeeProfile getFileByID(String id) {
return epRepo.findByEmployeeId(id);
}



public Stream<EmployeeProfile> getAllFiles() {
return epRepo.findAll().stream();
}
}