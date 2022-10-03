package com.arshaa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.util.FileCopyUtils; 
 
@SpringBootApplication(exclude = BatchAutoConfiguration.class)
@EnableEurekaClient
public class EmailSenderApplication implements CommandLineRunner {

	
	@Autowired
	ResourceLoader resourceLoader;
	
	 final Logger LOGGER = LoggerFactory.getLogger(getClass());
	 
	
	 
	 
	public static void main(String[] args) {
		SpringApplication.run(EmailSenderApplication.class, args);
	}
	
	@Bean
	@LoadBalanced	
	 public RestTemplate restTemplate() {
	        return new RestTemplate();
	    }

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	
	      System.out.println("-----------------"
		      		+ "from here mail Propertease file is going to open 🤣🤣❤😍😒💖💋-");
		 Resource resource = resourceLoader.getResource("classpath:application.properties");
//		 Resource resource1 = resourceLoader.getResource("classpath:application.properties");
		  InputStream inputStream = resource.getInputStream();
//		  InputStream inputStream1 = resource1.getInputStream();
		 
		  try
		  {
		      byte[] bdata = FileCopyUtils.copyToByteArray(inputStream);
		      String data = new String(bdata, StandardCharsets.UTF_8);
		      LOGGER.info(data);
		      
//		      System.out.println("-----------------"
//		      		+ "from here mail Propertease file is going to open 🤣🤣❤😍😒💖💋-");
//		      byte[] bdata1 = FileCopyUtils.copyToByteArray(inputStream1);
//		      String data1 = new String(bdata, StandardCharsets.UTF_8);
//		      LOGGER.info(data1);
		  } 
		  catch (IOException e) 
		  {
		    LOGGER.error("IOException", e);
		  }
	}
	

}
