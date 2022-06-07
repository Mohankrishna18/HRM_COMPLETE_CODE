package com.arshaa.emp.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.engine.query.spi.ReturnMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.multipart.MultipartFile;



import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.entity.EmployeeProfile;
import com.arshaa.emp.entity.Intern;
import com.arshaa.emp.entity.Onboarding;
import com.arshaa.emp.entity.ReportingManager;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.ReportingManagerMain;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.OnboardRepository;
import com.arshaa.emp.service.EmployeeProfileService;
import com.arshaa.emp.service.MainService;
import com.arshaa.emp.service.ReportingManagerService;

import com.arshaa.emp.model.ResponseMessage;
import com.arshaa.emp.model.ResponseFile;
import com.google.common.net.HttpHeaders;


@RestController
@RequestMapping("/emp")
public class MainController {

	@Autowired
	OnboardRepository onrepo;
	@Autowired
	EmployeeMasterRepository emRepo;
	@Autowired
	MainService serv;
	@Autowired
	ReportingManagerService eserv;

	@Autowired
	EmployeeProfileService epServ;

	@PostMapping("/createNewPotentialEmployee")
	public ResponseEntity onBoardUser(@RequestBody Onboarding newOnboard) {
		return serv.onBoardUser(newOnboard);
	}

	@GetMapping("/waitingForApprovelStatus")
	public ResponseEntity<Onboarding> waitingForApprovelStatus() {
		return serv.waitingForApprovelStatus();
	}

	@PutMapping("/updateApprovStatus/{onboardingId}")
	public ResponseEntity updateApprovStatus(@PathVariable String onboardingId,
			@RequestBody HrApprovalStatus newOnboard) {
		return serv.updateApprovStatus(onboardingId, newOnboard);
	}

// @PostMapping("/createNewPotentialEmployee")
// public void addEmployee(@RequestBody EmployeeMaster newEmployee)
// {
// emRepo.save(newEmployee);
// }
	@GetMapping("/getEmployeeDataByEmployeeId/{employeeId}")
	public ResponseEntity getEmployeeDataByEmployeeId(@PathVariable String employeeId) {
		return serv.getEmployeeDataByEmployeeId(employeeId);
	}

	@PutMapping("/updateEmployeeDataByEmployeeId/{employeeId}")
	public ResponseEntity updateEmployeeDataByEmployeeId(@PathVariable String employeeId,
			@RequestBody EmployeeMaster empMaster) {
		return serv.updateEmployeeDataByEmployeeId(employeeId, empMaster);
	}

// Get Api to get All Employees Data
	@GetMapping("/getAllEmployeeMasterData")
	public ResponseEntity<EmployeeMaster> getALLData() {
		return serv.getALLData();
	}

	@PostMapping("/createNewEmployee")
	public ResponseEntity addEmployee(@RequestBody EmployeeMaster newEmployee) {

		return serv.addEmployee(newEmployee);
	}

	@PutMapping("/updatedOnbordingDataById/{onboardingId}")
	public ResponseEntity updateOnboradEmployeeBydOnboardId(@PathVariable String onboardingId,
			@RequestBody Onboarding newOnboard) {
		return serv.updateOnboradEmployeeBydOnboardId(onboardingId, newOnboard);
	}

	@GetMapping("/getApprovedData")
	public ResponseEntity getApprovedData() {
		return serv.getApprovedData();
	}

	@PutMapping("/updateDesignationName/{employeeId}")
	public ResponseEntity updateDesignationName(@PathVariable String employeeId, @RequestBody DesignationName name) {
		return serv.updateDesignationName(employeeId, name);
	}

	@PostMapping("/reportingmanager")
	public ResponseEntity addReportingManager(@RequestBody ReportingManager newRepotingmanager) {
		return eserv.addReportingManager(newRepotingmanager);
	}

	@GetMapping("/getreportingmanager")
	public ResponseEntity getReportingManager() {
		return eserv.getReportingManager();
	}

	@GetMapping("/getEmployeesDataForReportingManager/{reportingManager}")
	public ResponseEntity<ReportingManagerMain> getDataByReportingManager(@PathVariable String reportingManager) {
		Optional<List<EmployeeMaster>> em = emRepo.getEmployeeMasterByReportingManager(reportingManager);
		ReportingManagerMain main = new ReportingManagerMain();
//main.setDesignation(em.get().get)
		return new ResponseEntity(em, HttpStatus.OK);
	}


	@GetMapping("/getEmployeeNameByEmployeeId/{employeeId}")
	public ResponseEntity getEmployeeNameByEmployeeId(@PathVariable String employeeId) {

		return serv.getEmployeeNameByEmployeeId(employeeId);

	@GetMapping("/getEmployeeNameByEmployeeId/{employeeId}")
	public ResponseEntity getEmployeeNameByEmployeeId(@PathVariable String employeeId) {

		return serv.getEmployeeNameByEmployeeId(employeeId);
	}

	@GetMapping("/getReportingManagerByEmployeeId/{employeeId}")
	public ResponseEntity getReportingManagerByEmployeeId(@PathVariable String employeeId) {

		return serv.getReportingManagerByEmployeeId(employeeId);

	}

	@GetMapping("/getEmployeeIds")
	public ResponseEntity getEmployeeId() {
		return serv.getEmployeeId();
	}
// @PostMapping("/createId")
// public String createId(@RequestBody Intern intern)
// {
// return intern.getEmployeeId();
// }

// EmployeeProfile API's
	@PostMapping("/upload/{employeeId}")
	public ResponseEntity<ResponseMessage> uploadFile(@PathVariable String employeeId,
			@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			epServ.store(file, employeeId);
			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Can't able to upload file" + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}

//	@GetMapping("/files")
//	public ResponseEntity<List<ResponseFile>> getListFiles() {
//		List<ResponseFile> files = epServ.getAllFiles().map(dbFile -> {
//			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/emp/")
//					.path("/files/").path(dbFile.getEmployeeId()).toUriString();
//			return new ResponseFile(dbFile.getName(), fileDownloadUri, dbFile.getType(), dbFile.getData().length);
//		}).collect(Collectors.toList());
//		return ResponseEntity.status(HttpStatus.OK).body(files);
//	}

	// @GetMapping("/files/{id}")
	// public ResponseEntity<byte[]> getFile(@PathVariable String id) {
	// UploadFile fileDB = storageService.getFile(id);
	// return ResponseEntity.ok()
	// .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" +
	// fileDB.getName() + "\"")
	// .body(fileDB.getData);
	// }
	@GetMapping("/files/{employeeId}")
	public ResponseEntity<ResponseFile> getFilebyID(@PathVariable String employeeId) {
		try {
			EmployeeProfile fileDB = epServ.getFileByID(employeeId);
//			String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/emp/")
//					.path("/getImage/").path(fileDB.getEmployeeId()).toUriString();
			ResponseFile file = new ResponseFile();
			file.setUrl(fileDB.getData());
			file.setName(fileDB.getName());
			file.setType(fileDB.getType());
			file.setSize(fileDB.getData().length);
			return new ResponseEntity<ResponseFile>(file, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(e.getMessage(), HttpStatus.OK);
		}
	}

	@GetMapping("/getImage/{id}")
	public ResponseEntity<byte[]> getFile(@PathVariable String id) {
		EmployeeProfile fileDB = epServ.getFileByID(id);
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
				.body(fileDB.getData());
	}

}