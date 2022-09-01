package com.arshaa.documentUpload_Service;

import javax.annotation.Resource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.arshaa.documentUpload_Service.model.FileInfo;
import com.arshaa.documentUpload_Service.service.FilesStorageService;

@SpringBootApplication
@EnableEurekaClient
public class DocumentUploadServiceApplication {

	
	@Resource
	  FilesStorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(DocumentUploadServiceApplication.class, args);
	}
	
	FileInfo obj=new FileInfo();
	
	
	  public void run(String... arg) throws Exception {
	    storageService.deleteAll(obj.getOnboardingId());
	    storageService.init(obj.getOnboardingId());
	  }
	  
	  @Bean
	  @LoadBalanced
	    public RestTemplate restTemplate() {
	        return new RestTemplate();
	    }

}
