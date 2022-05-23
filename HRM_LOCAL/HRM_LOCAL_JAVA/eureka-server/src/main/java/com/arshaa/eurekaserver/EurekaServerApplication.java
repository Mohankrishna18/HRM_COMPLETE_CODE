package com.arshaa.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	//it is a main method
	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}
	

}
