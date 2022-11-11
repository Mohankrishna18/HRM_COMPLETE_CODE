package com.arshaa.employmenttypes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.arshaa.employmenttypes.entity.EmploymentType;

@Repository
public interface EmploymentTypeRepository extends JpaRepository<EmploymentType,Integer> {

    EmploymentType findByEmploymentTypeName(String employmentTypeName);

}