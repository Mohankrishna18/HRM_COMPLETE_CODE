package com.arshaa.documentUpload_Service;

import java.io.File;

import javax.annotation.Resource;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.arshaa.documentUpload_Service.model.FileInfo;


@SpringBootApplication
@EnableEurekaClient
public class DocumentUploadServiceApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(DocumentUploadServiceApplication.class, args);
		
		File f = new File("C:\\ArshaaDocuments");
		if(!f.exists()) {
			f.mkdir() ;
		}
	}

	@Bean
	public ModelMapper  modelMapper()
	{
		return new ModelMapper();
	}
	
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
