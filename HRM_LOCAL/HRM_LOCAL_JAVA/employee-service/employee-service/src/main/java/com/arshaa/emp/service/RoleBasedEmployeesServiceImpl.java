package com.arshaa.emp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.emp.entity.EmployeeMaster;
import com.arshaa.emp.model.Response;
import com.arshaa.emp.repository.EmployeeMasterRepository;

@Service
public class RoleBasedEmployeesServiceImpl implements RoleBasedEmployeesService{

	@Autowired
	EmployeeMasterRepository emRepo;
	@Override
	public ResponseEntity getRoleBasedEmployeesByEmployeeId(String employeeId) {
		Response res=new Response();
        try {
    		List<EmployeeMaster> srmData= emRepo.getEmployeeMasterBySrm(employeeId);
    		List<EmployeeMaster> irmData= emRepo.getEmployeeMasterByIrm(employeeId);
    		List<EmployeeMaster> buhData= emRepo.getEmployeeMasterByBuh(employeeId);


        		if(!srmData.isEmpty())
        		{
        			res.setStatus(true);
        		res.setMessage("Data Fetching");
        		res.setData(srmData);
        		return new ResponseEntity(res,HttpStatus.OK);	
        		}
        		else if(!irmData.isEmpty())
        		{
        			res.setStatus(true);
            		res.setMessage("Data Fetching");
            		res.setData(irmData);
            		return new ResponseEntity(res,HttpStatus.OK);
        		}
        		else if(!buhData.isEmpty())
        		{
        			res.setStatus(true);
            		res.setMessage("Data Fetching");
            		res.setData(buhData);
            		return new ResponseEntity(res,HttpStatus.OK);
        		}
        		else {
        			res.setStatus(false);
            		res.setMessage("Data Not Found");
            		return new ResponseEntity(res,HttpStatus.OK);
        		}      		
        }
        catch(Exception e)
        {
        	res.setStatus(false);
    		res.setMessage("Something went wrong");
    		return new ResponseEntity(res,HttpStatus.OK);
        }

	}
	
		

}
