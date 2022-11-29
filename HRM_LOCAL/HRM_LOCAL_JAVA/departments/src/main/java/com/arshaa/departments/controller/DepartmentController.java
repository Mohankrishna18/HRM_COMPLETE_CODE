package com.arshaa.departments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.arshaa.departments.entity.Departmentmaster;
import com.arshaa.departments.model.EmployeeName;
import com.arshaa.departments.repository.DepartmentInterface;
import com.arshaa.departments.service.DepartmentService;

@RequestMapping("/dept")
@RestController
@CrossOrigin("*")
public class DepartmentController {

	@Autowired
	private DepartmentInterface repo;
	@Autowired
	private DepartmentService serv;
	@Autowired
	@Lazy
	private RestTemplate template;
	
	@PostMapping("/postDepartmentMaster")
	public ResponseEntity saveData(@RequestBody Departmentmaster newDepartmentMaster) {
		return serv.saveData(newDepartmentMaster);
	}

//get call
	@GetMapping("/getAllDepartments")
	public List<Departmentmaster> getAllDepartments() {
		return repo.findAll();
	}

	@PutMapping("/update/{departmentId}")
	public Departmentmaster updateDepartmentById(@PathVariable Integer departmentId,
			@RequestBody Departmentmaster newDepartmentMaster) {
	      String mUrl="http://empService/emp/getEmployeeNameByEmployeeId/";
		EmployeeName name=template.getForObject(mUrl+newDepartmentMaster.getBusinessUnitHead(), EmployeeName.class);
		Departmentmaster dm = repo.findByDepartmentId(departmentId);
		dm.setDepartmentName(newDepartmentMaster.getDepartmentName());
		dm.setBusinessUnitHead(newDepartmentMaster.getBusinessUnitHead());
		dm.setBusinessUnitHeadName(name.getEmployeeName());
		return repo.save(dm);
	}

	@DeleteMapping("/deleteDepartment/{departmentId}")
	public String deleteDepartmentById(@PathVariable Integer departmentId) {
		Departmentmaster dm = repo.findByDepartmentId(departmentId);
		repo.delete(dm);
		return "Deleted Successfully";
	}
	
	@GetMapping("/getDepartmentIdByName/{departmentName}")
	public int getDepartmentIdByDepartmentName(@PathVariable String departmentName) {
     return serv.getDepartmentIdByDepartmentName(departmentName);

	}
	
	@GetMapping("/getDepartmentNameById/{departmentId}")
	public String getDepartmentNameById(@PathVariable int departmentId)
	{
		Departmentmaster dm = repo.findByDepartmentId(departmentId);
		return dm.getDepartmentName();
	}
	
	@GetMapping("/getDepartmentIdByBusinessUnitName/{departmentName}")
    public ResponseEntity getDepartmentIdByBusinessUnitName(@PathVariable String departmentName) {
     return serv.getBUHIDfromDepartmentName(departmentName);
   }
	
    @GetMapping("/getBuheadNameByBusinessUnitName/{departmentName}")
    public ResponseEntity getBuheadByDepartmentName(@PathVariable String departmentName) {
     return serv.getBuheadNameByDepartmentName(departmentName);
   }
        
    @GetMapping("/getBuheadEmployeeIdByBusinessUnitName/{departmentName}")
    public ResponseEntity getBuheadEmployeeIdByDepartmentName(@PathVariable String departmentName) {
     return serv.getBuheadIdByDepartmentName(departmentName);
   }
    @GetMapping("/matchEmpNameToDeptHead/{businessUnitHeadName}")
    public ResponseEntity getDeptHeadbyMatchingEmpName(@PathVariable String businessUnitHeadName) {
        return serv.getBuheadNameByEmployeeName(businessUnitHeadName);
    }
    
    //changes for dept in HR
    @GetMapping("/getDepartmentsNameById/{departmentName}")
	public String getDepartmentNameById(@PathVariable String departmentName)
	{
		Departmentmaster dm = repo.findByDepartmentName(departmentName);
		return dm.getDepartmentName();
	}
   
}