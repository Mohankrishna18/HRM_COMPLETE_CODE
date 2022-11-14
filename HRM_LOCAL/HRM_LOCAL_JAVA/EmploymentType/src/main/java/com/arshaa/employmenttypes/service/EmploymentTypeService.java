package com.arshaa.employmenttypes.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.employmenttypes.entity.EmploymentType;
import com.arshaa.employmenttypes.model.EmploymentTypeResponse;
import com.arshaa.employmenttypes.repository.EmploymentTypeRepository;

@Service
public class EmploymentTypeService implements EmploymentTypeInterface{

    @Autowired(required = true)
    private EmploymentTypeRepository emptyrepo;

    // To Add Employement Types
    public ResponseEntity addEmploymentType(EmploymentType newEmploymentType) {
        EmploymentTypeResponse etr = new EmploymentTypeResponse<>();
        try {
            String noSpaces = newEmploymentType.getEmploymentTypeName().replaceAll("\\s", "");
            List<EmploymentType> exitsting  = emptyrepo.findAll();
            List<String> edited = exitsting.stream().map(e -> e.getEmploymentTypeName().replaceAll("\\s", "").toLowerCase()).collect(Collectors.toList());
            boolean conatins = edited.contains(noSpaces);
            if (conatins) {
                throw new Exception("Employement Type already exists");
            }
            EmploymentType newDataEmploymentType = emptyrepo.save(newEmploymentType);
            etr.setStatus(true);
            etr.setMessage("Employment Type is added");
            etr.setData(newDataEmploymentType);
            return new ResponseEntity(etr, HttpStatus.OK);
        } catch (Exception e) {

            etr.setStatus(false);
            etr.setMessage(e.getMessage());
            return new ResponseEntity(etr, HttpStatus.BAD_REQUEST);
        }
    }

    // To Get Employement Types

    public ResponseEntity getAllEmploymentType() {
        EmploymentTypeResponse etr = new EmploymentTypeResponse<>();
        try {

            List<EmploymentType> newDataEmploymentType = emptyrepo.findAll();
            etr.setStatus(true);
            etr.setMessage("Data Fetching");
            etr.setData(newDataEmploymentType);
            return new ResponseEntity(etr, HttpStatus.OK);
        } catch (Exception e) {
//TODO: handle exception

            etr.setStatus(false);
            etr.setMessage(e.getMessage());
            return new ResponseEntity(etr, HttpStatus.OK);
        }
    }

    // To Update the Employement Types

   
    @Override
    public ResponseEntity updateEmploymentTypeById(int employmentTypeId, EmploymentType newupdateType) {
        EmploymentTypeResponse etr = new EmploymentTypeResponse<>();
        try {
            EmploymentType updateEmp = emptyrepo.getById(employmentTypeId);
            updateEmp.setEmploymentTypeName(newupdateType.getEmploymentTypeName());

            EmploymentType latestEmployment = emptyrepo.save(updateEmp);
            System.out.println(latestEmployment);

            etr.setStatus(true);
            etr.setMessage("Data added successfully");
            etr.setData(latestEmployment);

            return new ResponseEntity(etr, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception

            etr.setStatus(false);
            etr.setMessage(e.getMessage());
            return new ResponseEntity(etr, HttpStatus.OK);
        }

    }

    @Override
    public ResponseEntity deleteEmploymentType(int employmentTypeId) {
        EmploymentTypeResponse etr = new EmploymentTypeResponse<>();
        try {
            EmploymentType delEmp = emptyrepo.getById(employmentTypeId);
            emptyrepo.delete(delEmp);
            etr.setStatus(true);
            etr.setMessage("Deleted successfully");
            return new ResponseEntity(etr, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception

            etr.setStatus(false);
            etr.setMessage(e.getMessage());
            return new ResponseEntity(etr, HttpStatus.OK);
        }
    }

}