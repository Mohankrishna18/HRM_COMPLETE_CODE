package com.example.arshaa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.arshaa.entity.EmployeeLogin;
import com.example.arshaa.entity.OnBoardingEmployeeLogin;

@Repository
public interface EmailRepository extends JpaRepository<OnBoardingEmployeeLogin,Integer> {

	Optional<OnBoardingEmployeeLogin> getByEmail(String email);
}
