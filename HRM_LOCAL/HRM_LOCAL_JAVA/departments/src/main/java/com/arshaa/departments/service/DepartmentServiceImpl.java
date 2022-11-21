package com.arshaa.departments.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.departments.entity.Departmentmaster;
import com.arshaa.departments.model.BuheadName;
import com.arshaa.departments.model.BusinessUnitResponse;
import com.arshaa.departments.model.DepartmentResponse;
import com.arshaa.departments.model.EmployeeName;
import com.arshaa.departments.repository.DepartmentInterface;


@Service
public class DepartmentServiceImpl  implements DepartmentService{

	@Autowired
	DepartmentInterface repository;
	
	@Autowired
	@Lazy
	private RestTemplate template;


	@Override
	public ResponseEntity saveData(Departmentmaster newDepartmentMaster) {
      String mUrl="http://empService/emp/getEmployeeNameByEmployeeId/";
		List <DepartmentResponse> response=new ArrayList<>();	
		DepartmentResponse d=new DepartmentResponse();
		EmployeeName name=template.getForObject(mUrl+newDepartmentMaster.getBusinessUnitHead(), EmployeeName.class);
		newDepartmentMaster.setBusinessUnitHeadName(name.getEmployeeName());
		Departmentmaster data=repository.save(newDepartmentMaster);
		d.setStatus(true);
		d.setMessage("Successfully added");
		return new ResponseEntity(d,HttpStatus.OK);
	}

	@Override
	public int getDepartmentIdByDepartmentName(String departmentName) {

				Departmentmaster getDep=repository.getByDepartmentName(departmentName);
				
				
			return (getDep.getDepartmentId());
	}
	
	@Override
    public ResponseEntity getBUHIDfromDepartmentName(String departmentName) {
        BusinessUnitResponse res= new BusinessUnitResponse<>();
        try {
            Departmentmaster departmentsData = repository.getByDepartmentName(departmentName);
            if(!departmentsData.equals(null))
            {
                res.setStatus(true);
                res.setMessage("Data Fetching");
                res.setData(departmentsData.getBusinessUnitHead());
                return new ResponseEntity(res,HttpStatus.OK);
            }
            else {
                res.setStatus(false);
                res.setMessage("Data Not Found");
                return new ResponseEntity(res,HttpStatus.OK);
            }
        }
        catch(Exception e){
            res.setStatus(false);
            res.setMessage("Something went wrong");
            return new ResponseEntity(res,HttpStatus.OK);
        }
        
    }
	
	@Override
    public ResponseEntity getBuheadNameByDepartmentName(String departmentName) {
        BuheadName res = new BuheadName();
        try {
            Departmentmaster dData = repository.getByDepartmentName(departmentName);
            if(!dData.equals(null)) {
                res.setStatus(true);
                res.setMessage("Data Fetching");
                res.setBusinessUnitHeadName(dData.getBusinessUnitHeadName());
                return new ResponseEntity(res, HttpStatus.OK);
            }
            else {
                res.setStatus(false);
                res.setMessage("Data Not Found");
                return new ResponseEntity(res,HttpStatus.OK);
            }
        }
        catch(Exception e){
            res.setStatus(false);
            res.setMessage("Something went wrong");
            return new ResponseEntity(res,HttpStatus.OK);
        }
    }
	@Override
	public ResponseEntity getBuheadIdByDepartmentName(String departmentName) {
		 BuheadName res = new BuheadName();
	        try {
	            Departmentmaster dData = repository.getByDepartmentName(departmentName);
	            if(!dData.equals(null)) {
	                res.setStatus(true);
	                res.setMessage("Data Fetching");
	                res.setBusinessUnitHeadName(dData.getBusinessUnitHead());
	                return new ResponseEntity(res, HttpStatus.OK);
	            }
	            else {
	                res.setStatus(false);
	                res.setMessage("Data Not Found");
	                return new ResponseEntity(res,HttpStatus.OK);
	            }
	        }
	        catch(Exception e){
	            res.setStatus(false);
	            res.setMessage("Something went wrong");
	            return new ResponseEntity(res,HttpStatus.OK);
	        }
	}
    @Override
    public ResponseEntity getBuheadNameByEmployeeName(String employeeName) {
        String matchUrl = "http://empService/emp/getEmployeeNameByEmployeeId/";
        BuheadName bn=new BuheadName();
        try {
            List<Departmentmaster> getDataa = repository.findAll();
            getDataa.forEach(d->{
                if(d.getBusinessUnitHeadName().equalsIgnoreCase(employeeName))
                {
                    bn.setStatus(true);
                    bn.setMessage("Data Fetching");
                    bn.setBusinessUnitHeadName(d.getBusinessUnitHeadName());  
                }
                else {
                    bn.setStatus(false);
                    bn.setMessage("Data Not Found");
                }
            });
        } catch (Exception e) {
            bn.setStatus(false);
            bn.setMessage("Data Not Found");
        }
        return new ResponseEntity(bn,HttpStatus.OK);
        
    }
}


