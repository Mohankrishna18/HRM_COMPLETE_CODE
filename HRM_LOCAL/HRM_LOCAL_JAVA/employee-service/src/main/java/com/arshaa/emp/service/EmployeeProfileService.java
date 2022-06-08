package com.arshaa.emp.service;



import java.io.IOException;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.arshaa.emp.entity.EmployeeProfile;
import com.arshaa.emp.repository.EmployeeProfileRepository;



@Service
public class EmployeeProfileService {
@Autowired
EmployeeProfileRepository epRepo;



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