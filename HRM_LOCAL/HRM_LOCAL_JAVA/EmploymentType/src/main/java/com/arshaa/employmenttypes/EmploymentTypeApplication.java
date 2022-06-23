package com.arshaa.employmenttypes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class EmploymentTypeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmploymentTypeApplication.class, args);
	}

}
