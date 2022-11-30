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
import com.arshaa.emp.model.AdditionalDetails;
import com.arshaa.emp.model.Address;
import com.arshaa.emp.model.AssignProjectName;
import com.arshaa.emp.model.DesignationName;
import com.arshaa.emp.model.EducationalDetails;
import com.arshaa.emp.model.EmployeeLeavesData;
import com.arshaa.emp.model.EmploymentDetails;
import com.arshaa.emp.model.Experience;
import com.arshaa.emp.model.HrApprovalStatus;
import com.arshaa.emp.model.PersonalDetails;
import com.arshaa.emp.model.ProbationEmployeeFeedBack;
import com.arshaa.emp.model.ReportingManagerMain;
import com.arshaa.emp.model.ResignationModel;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.model.ResponseFile;
import com.arshaa.emp.model.ResponseMessage;
import com.arshaa.emp.model.TermsAndConditions;
import com.arshaa.emp.repository.EmployeeMasterRepository;
import com.arshaa.emp.repository.OnboardRepository;
import com.arshaa.emp.service.EmployeeProfileService;
import com.arshaa.emp.service.LeaveService;
import com.arshaa.emp.service.MainService;
import com.arshaa.emp.service.ReportingManagerService;
import com.arshaa.emp.service.ResignationService;
import com.arshaa.emp.service.RoleBasedEmployeesServiceImpl;
import com.google.common.net.HttpHeaders;

@RestController
@RequestMapping("/emp")
public class MainController {

	@Autowired
	OnboardRepository onrepo;
	@Autowired(required=true)
	private EmployeeMasterRepository emRepo;
	@Autowired
	MainService serv;
	@Autowired
	ReportingManagerService eserv;
	@Autowired
	EmployeeProfileService epServ;
	@Autowired
	LeaveService lServ;
	//changes by murali miriyala	
	@Autowired
	ResignationService resignationServ;
	@Autowired
    RoleBasedEmployeesServiceImpl roleBasedServ;

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
	
	//getting onboarded employee details for pre onboarding
	@GetMapping("/getEmployeeDataByOnboardingId/{onboardingId}")
	public ResponseEntity getOnboardingDataByOnboardingId(@PathVariable String onboardingId) {
		return serv.getOnboardingDataByOnboardingId(onboardingId);
	}
	
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

	@GetMapping("/getRejectedData")
	public ResponseEntity getRejectedData() {
		return serv.getRejectedData();
	}
	
	@GetMapping("/getApprovedOnboardedData")
	public ResponseEntity getOnboardedApprovedData() {
		return serv.getOnboardedApprovedData();
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

	}

	@GetMapping("/getReportingManagerByEmployeeId/{employeeId}")
	public ResponseEntity getReportingManagerByEmployeeId(@PathVariable String employeeId) {

		return serv.getReportingManagerByEmployeeId(employeeId);
	}
	@GetMapping("/getEmployeeIdByReportingmanager/{projectManager}")
    public ResponseEntity getEmployeeIdByReportingManager(@PathVariable String projectManager) {
        
        return eserv.getEmployeeIdByReprtingManager(projectManager);
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

// Employee Profile API's

// EmployeeProfile API's
	@PostMapping("/upload/{onboardingId}")
    public ResponseEntity<ResponseMessage> uploadFile(@PathVariable String onboardingId,
            @RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            epServ.store(file, onboardingId);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Can't able to upload file" + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }



// @GetMapping("/files")
// public ResponseEntity<List<ResponseFile>> getListFiles() {
// List<ResponseFile> files = epServ.getAllFiles().map(dbFile -> {
// String fileDownloadUri =
// ServletUriComponentsBuilder.fromCurrentContextPath().path("/emp/")
// .path("/files/").path(dbFile.getEmployeeId()).toUriString();
// return new ResponseFile(dbFile.getName(), fileDownloadUri, dbFile.getType(),
// dbFile.getData().length);
// }).collect(Collectors.toList());
// return ResponseEntity.status(HttpStatus.OK).body(files);
// }

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
    
    @GetMapping("/file/{onboardingId}")
    public ResponseEntity<ResponseFile> getFileByOnboardingID(@PathVariable String onboardingId) {
        try {
            EmployeeProfile profile = epServ.getFileByOnboardingID(onboardingId);
            ResponseFile file = new ResponseFile();
            file.setUrl(profile.getData());
            file.setName(profile.getName());
            file.setType(profile.getType());
            file.setSize(profile.getData().length);
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
    
	@GetMapping("/leavespermonth/{employeeId}")
    int Lossofpayservice( @PathVariable String employeeId ) {

      return   epServ.Lossofpayservice(employeeId);

    }
	//get calls for edit my profile tabs
		@GetMapping("/getPersonalDetails/{employeeId}")
		public ResponseEntity getPersonalDetailsByEmployeeId(@PathVariable String employeeId) {
			return serv.getPersonalDetailsByEmployeeId(employeeId);
		}
		
		@GetMapping("/getAddress/{employeeId}")
		public ResponseEntity getAddressByEmployeeId(@PathVariable String employeeId) {
			return serv.getAddressByEmployeeId(employeeId);
		}
		
		@GetMapping("/getAdditionalDetails/{employeeId}")
		public ResponseEntity getAdditionalDetailsByEmployeeId(@PathVariable String employeeId) {
			return serv.getAdditionalDetailsByEmployeeId(employeeId);
		}
		
		@GetMapping("/getEmploymentDetails/{employeeId}")
		public ResponseEntity getEmploymentDetailsByEmployeeId(@PathVariable String employeeId) {
			return serv.getEmploymentDetailsByEmployeeId(employeeId);
		}
		
		@GetMapping("/getEducationDetails/{employeeId}")
		public ResponseEntity getEducationalDetailsByEmployeeId(@PathVariable String employeeId) {
			return serv.getEducationalDetailsByEmployeeId(employeeId);
		}
		
		@GetMapping("/getExperienceDetails/{employeeId}")
		public ResponseEntity getExperienceByEmployeeId(@PathVariable String employeeId) {
			return serv.getExperienceByEmployeeId(employeeId);
		}
		
	//put calls for editmyprofile tabs
		@PutMapping("/updatePersonalDetails/{employeeId}")
		public ResponseEntity updatePersonalDetailsByEmployeeId(@PathVariable String employeeId,
				@RequestBody PersonalDetails pd) {
			return serv.updatePersonalDetailsByEmployeeId(pd, employeeId);
		}
		
		@PutMapping("/updateAddress/{employeeId}")
		public ResponseEntity updateAddressByEmployeeId(@PathVariable String employeeId,
				@RequestBody Address ad) {
			return serv.updateAddressByEmployeeId(ad, employeeId);
		}
		
		@PutMapping("/updateAdditionalDetails/{employeeId}")
		public ResponseEntity updateAdditionalDetailsByEmployeeId(@PathVariable String employeeId,
				@RequestBody AdditionalDetails add) {
			return serv.updateAdditionalDetailsByEmployeeId(add, employeeId);
		}
		
		@PutMapping("/updateEmploymentDetails/{employeeId}")
		public ResponseEntity updateEmploymentDetailsByEmployeeId(@PathVariable String employeeId,
				@RequestBody EmploymentDetails empd) {
			return serv.updateEmploymentDetailsByEmployeeId(empd, employeeId);
		}
		
		@PutMapping("/updateEducationalDetails/{employeeId}")
		public ResponseEntity updateEducationalDetailsByEmployeeId(@PathVariable String employeeId,
				@RequestBody EducationalDetails education) {
			return serv.updateEducationalDetailsByEmployeeId(education, employeeId);
		}
		
		@PutMapping("/updateExperience/{employeeId}")
		public ResponseEntity updateExperienceByEmployeeId(@PathVariable String employeeId,
				@RequestBody Experience exp) {
			return serv.updateExperienceByEmployeeId(exp, employeeId);
		}
		
		

		// Onboarding updating EditMy Profile Api calls
		@PutMapping("/updatePersonalDetailsInPreOnboarding/{onboardingId}")
		public ResponseEntity updatePersonalDetailsByOnboardingId(@PathVariable String onboardingId,
				@RequestBody PersonalDetails pd) {
			return serv.updatePersonalDetailsByOnboardId(pd, onboardingId);
		}
		
		@PutMapping("/updateAddressInPreOnboarding/{onboardingId}")
		public ResponseEntity updateAddressByOnboardingId(@PathVariable String onboardingId,
				@RequestBody Address ad) {
			return serv.updateAddressByOnboardId(ad, onboardingId);
		}
		
		@PutMapping("/updateAdditionalDetailsInPreOnboarding/{onboardingId}")
		public ResponseEntity updateAdditionalDetailsByOnboardingId(@PathVariable String onboardingId,
				@RequestBody AdditionalDetails add) {
			return serv.updateAdditionalDetailsByOnboardId(add, onboardingId);
		}
		
		@PutMapping("/updateEmploymentDetailss/{onboardingId}")
		public ResponseEntity updateEmploymentDetailsByOnboardingId(@PathVariable String onboardingId,
				@RequestBody EmploymentDetails empd) {
			return serv.updateEmploymentDetailsByOnboardId(empd, onboardingId);
		}
		

		@PutMapping("/updateEmpdDetails/{onboardingId}")
		public ResponseEntity employmentDetailsUpdate(@PathVariable String onboardingId,
				@RequestBody EmploymentDetails emps) {
			return serv.EmploymentDetailsByOnboardId(emps, onboardingId);
		}
		
		@PutMapping("/updateEducationalDetailsInPreOnboarding/{onboardingId}")
		public ResponseEntity updateEducationalDetailsByOnboardingId(@PathVariable String onboardingId,
				@RequestBody EducationalDetails education) {
			return serv.updateEducationalDetailsByOnboardId(education, onboardingId);
		}
		
		@PutMapping("/updateExperienceInPreOnboarding/{onboardingId}")
		public ResponseEntity updateExperienceByOnboardingId(@PathVariable String onboardingId,
				@RequestBody Experience exp) {
			return serv.updateExperienceByOnboardId(exp, onboardingId);
		}
// User Client Project Management get api calls
		
		@GetMapping("/getUserClientDetailsbyEmployeeId/{employeeId}")
		public ResponseEntity getUserProjectDataByEmployeeId(@PathVariable String employeeId) {
			return serv.getPersonalDetailsByEmployeeId(employeeId);
		}
		
		@GetMapping("/getUserClientDetailsbyOnboardingId/{onboardingId}")
		public ResponseEntity getUserProjectDataByOnboardingId(@PathVariable String onboardingId) {
			return serv.getUserProjectDataByOnboardingId(onboardingId);
		}
		
		
		@GetMapping("/getUsersNamesByBand")
		public ResponseEntity getUsersNamesByBand() {
         return serv.getUsersNamesByBand();
		}
		@GetMapping("/getDetailsforPMOApprovalByOnboardingStatus/{onboardingStatus}")
		public ResponseEntity getDetailsforPMOByonboardingStatus(@PathVariable String onboardingStatus) {
			return serv.getDetailsforPMOByonboardingStatus(onboardingStatus);
		}
		
		//percentage calculation
		@GetMapping("/getnullvaluescount/{onboardingId}")
		public double findNullvaluescount(@PathVariable String onboardingId) {
			
			double count= onrepo.findcountofnullvalues(onboardingId);
			return (count*100)/40;
//			return count;
		}
		@PutMapping("/updateRejectStatus/{onboardingId}")
		public ResponseEntity updateReject(@PathVariable String onboardingId,@RequestBody HrApprovalStatus newOnboard) {
			return serv.updateReject(onboardingId, newOnboard);
		}

		@GetMapping("/getIrmByEmployeeId/{employeeId}")
		public ResponseEntity getIrmByEmployeeId(@PathVariable String employeeId) {


			return serv.getIrmIdByEmployeeId(employeeId);
		}
		@GetMapping("/getSrmByEmployeeId/{employeeId}")
		public ResponseEntity getSrmByEmployeeId(@PathVariable String employeeId) {


			return serv.getSrmIdByEmployeeId(employeeId);
		}
//      Get calls for employees under Roles
        
        @GetMapping("/getRoleBasedEmployeesByEmployeeId/{employeeId}")
        public ResponseEntity getRoleBasedEmployeesByEmployeeId( @PathVariable String employeeId) {
             return roleBasedServ.getRoleBasedEmployeesByEmployeeId(employeeId);
        }
        
        @GetMapping("/getEmployeeIdByName/{fullName}")
    	public String getEmployeeIdByName(@PathVariable String fullName) {
    		return serv.getEmployeeIdByName(fullName);

    	}
        @PutMapping("/updateTAAHeadApproval/{onboardingId}")
        public ResponseEntity updateTAAHeadApproval(@PathVariable String onboardingId,
    			@RequestBody HrApprovalStatus newOnboard) {
    		return serv.updateTAAHeadApproval(onboardingId, newOnboard);
    	}
        @PutMapping("/updatePMOApproval/{onboardingId}")
        public ResponseEntity updatePMOApproval(@PathVariable String onboardingId,
    			@RequestBody HrApprovalStatus newOnboard) {
    		return serv.updatePMOApproval(onboardingId, newOnboard);
    	}
        @PutMapping("/updateTAAApproval/{onboardingId}")
        public ResponseEntity updateTAAApproval(@PathVariable String onboardingId,
    			@RequestBody HrApprovalStatus newOnboard) {
    		return serv.updateTAAApproval(onboardingId, newOnboard);
    	}
        @PutMapping("/updateCEOApproval/{onboardingId}")
        public ResponseEntity updateCEOApproval(@PathVariable String onboardingId,
    			@RequestBody HrApprovalStatus newOnboard) {
    		return serv.updateCEOApproval(onboardingId, newOnboard);
    	}
        @GetMapping("/getEmployeesByOnboardingStatus/{onboardingStatus}")
		public ResponseEntity getEmployeesByOnboardingStatus(@PathVariable String onboardingStatus) {

        	
			return serv.getEmployeesByOnboardingStatus(onboardingStatus);
		}
        @PutMapping("/updateHrStatus/{employeeId}")
        public ResponseEntity getByOnboardingStatus(@PathVariable String employeeId,
        		@RequestBody EmployeeMaster newStatus) {
    		return serv.getByOnboardingStatus(employeeId,newStatus);
    	}
        //to update irm,srm,etc filds in employee master after hr approve
        @PutMapping("/updateEmploymentDetailsInPMO/{employeeId}")
		public ResponseEntity updateEmploymentDetailsInPMO(@PathVariable String employeeId,@RequestBody EmploymentDetails newEmp) {
			return serv.updateEmploymentDetailsInPMOByEmployeeId(employeeId, newEmp);
		}
        
        @GetMapping("/getData")
        public List<Onboarding> getData()
        {
            System.out.println(onrepo.findOnboardingCountWithParticularMonth());
        return onrepo.findOnboardingCountWithParticularMonth();
        }
        
        @GetMapping("/getDataByDATE")
        public List<Onboarding> getDataByDate()
        {
            System.out.println(onrepo.findOnboardingCountWithParticularDate());
        return onrepo.findOnboardingCountWithParticularDate();
        }
        
        @GetMapping("/getEmployeesByDepartment/{departmentName}")
		public ResponseEntity getByDepartment(@PathVariable String departmentName) {
			return serv.getByDepartment(departmentName);
		}
        @GetMapping("/getEmployeeNameDepDesByEmployeeId/{employeeId}")

        public ResponseEntity getEmployeeNameDepDesByEmployeeId(@PathVariable String employeeId) {

            return serv.getEmployeeNameDepDesByEmployeeId(employeeId);



        }
        @GetMapping("/getDepartmentNameByEmployeeId/{employeeId}")
    	public ResponseEntity getDepartmentNameByEmployeeId(@PathVariable String employeeId) {
    		return serv.getDepartmentNameByEmployeeId(employeeId);

    	}
        @GetMapping("/getEmployeeLeavesData/{month}/{year}/{dept}")
    	public ResponseEntity getEmployeeLeavesData(@PathVariable int month,@PathVariable int year,@PathVariable String dept)
    	{
        	try
        	{
    		return new ResponseEntity<>(lServ.getEmployeeLeavesData(month, year, dept),HttpStatus.OK);
        	}
        	
        	catch(Exception e)
        	{
        		return new ResponseEntity(e.getMessage(),HttpStatus.OK);

        	}
    	}
        
      //Divya changes
        @GetMapping("/getEmployeeFullNameByEmployeeId/{employeeId}")
        public String getEmployeeFullNameByEmployeeId(@PathVariable("employeeId") String employeeId) {
        	return serv.getEmployeeFullName(employeeId);   
        	}
        // //get weekends count
        // @GetMapping("/getweekends/{year}/{month}")
        // public int  getWeekendsByMonth(@PathVariable int year ,@PathVariable int month) {
        // 	return lServ.weekendCount(year, month);
        // }
        
        
        @PostMapping("/uploads/{employeeId}")
        public ResponseEntity<ResponseMessage> uploadFile1(@PathVariable String employeeId,
                @RequestParam("file") MultipartFile file) {
            String message = "";
            try {
                epServ.store1(file, employeeId);
                message = "Uploaded the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Can't able to upload file" + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }
        
        @PutMapping("/update/{employeeId}")
        public ResponseEntity<ResponseMessage> updateFile(@PathVariable String employeeId,
                @RequestParam("file") MultipartFile file) {
            String message = "";
            try {
                epServ.update(file, employeeId);
                message = "Updated the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Can't able to update a file" + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }

      //get call to get employees by status Active/InActive
        @GetMapping("/getActiveEmployees/{status}")
        public ResponseEntity getActiveEmployeesByStatus(@PathVariable String status) {
            return serv.getActiveEmployeesByStatus(status);
        }
        @GetMapping("/getEmployeeLeavesDatawithoutDept/{month}/{year}")
        public ResponseEntity getEmployeeLeavesDataWithoutDept(@PathVariable int month,@PathVariable int year)
        {
        	
            try
            {
            return new ResponseEntity<>(lServ.getEmployeeLeavesDataWithoutDept(month, year),HttpStatus.OK);
            }
            
            catch(Exception e)
            {
                return new ResponseEntity(e.getMessage(),HttpStatus.OK);
            }

            }
        
        
        //Murali miriyala resignation changes
        
        @GetMapping("/getResignationInfoByEmployeeeId/{employeeId}")
        public ResignationModel getResignationInfoByEmployeeeId( @PathVariable String employeeId)
        {
        	return resignationServ.getResignationInfoByEmployeeeId(employeeId);
        }
        @GetMapping("/getDateOfJoiningByEmployeeId/{employeeId}")
    	public ResponseEntity getDateOfJoiningByEmployeeId(@PathVariable String employeeId) {
    		return serv.getDateOfJoiningByEmployeeId(employeeId);

    	}
        
        @PutMapping("/probationEmployeeFeedBack/{employeeId}")
        public ResponseEntity probationEmployeeFeedBack(@PathVariable String employeeId,
    			@RequestBody ProbationEmployeeFeedBack prb) {
    		return serv.probationEmployeeFeedBack(employeeId, prb);
    	}
        
        
        @PutMapping("/updateEmployeeAfterResignApply/{employeeId}")
        public ResponseEntity updateEmployeeAfterResignApply(@PathVariable String employeeId,@RequestBody ResignationModel rmodel)
        {
        	return new ResponseEntity(resignationServ.updateEmployeeAfterResignApply(employeeId, rmodel),HttpStatus.OK);
        }
        
        @PutMapping("/updateEmployeeAfterResignConfirmed/{employeeId}")
        public ResponseEntity updateEmployeeAfterResignConfirmed(@PathVariable String employeeId,@RequestBody ResignationModel rmodel)
        {
        	return new ResponseEntity(resignationServ.updateEmployeeAfterResignConfirmed(employeeId, rmodel),HttpStatus.OK);
        }
        
        //changes
        @GetMapping("/employeesToDisplayByTheirProjectAllocation/{projectName}")
        public List<EmployeeMaster> employeesToDisplayByTheirProjectAllocation(@PathVariable("projectName") String projectName){
        	return serv.employeesToDisplayByTheirProjectAllocation(projectName);
        }
        
        @PostMapping("/saveProjectAllocationPercentAfterMapping/{employeeId}")
        public Boolean saveProjectAllocationPercentAfterMapping(@PathVariable("employeeId") String employeeId, @RequestBody AssignProjectName apn) {
        	return serv.saveProjectAllocationPercentAfterMapping(employeeId, apn);
        }
        
        @PutMapping("/updateTermsAndConditiions/{onboardingId}")
        public ResponseEntity updateTermsAndConditions(@PathVariable String onboardingId,
                @RequestBody TermsAndConditions terms) {
            return serv.updateTermsAndConditions(onboardingId, terms);
        }


        @PostMapping("/updateProjectAllocationPercentAfterMapping/{employeeId}")
        public ResponseEntity<AssignProjectName> updateProjectAllocationPercentAfterMapping(@PathVariable("employeeId") String employeeId, @RequestBody AssignProjectName apn) {
        	AssignProjectName ap = serv.updateProjectAllocationPercentAfterMapping(employeeId,apn);
        	
        	 return new ResponseEntity(ap, HttpStatus.OK);
        }
        
        @GetMapping("/getProjectAllocationByEmployeeId/{employeeId}")
        public Integer getProjectAllocationByEmployeeId(@PathVariable("employeeId") String employeeId ) {
			return serv.getProjectAllocationByEmployeeId(employeeId);
        	
        }
}
