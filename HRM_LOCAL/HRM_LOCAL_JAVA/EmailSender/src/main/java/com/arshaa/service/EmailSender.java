package com.arshaa.service;
import  com.arshaa.common.* ;

import java.net.URL;
import java.util.Date;
import java.util.Map;
import java.util.Properties;

import javax.annotation.Resource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import javax.mail.Message.RecipientType;
import javax.mail.Authenticator;


import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.common.Model;
import com.arshaa.emailmodels.MainEmailTemplate;
import com.ctc.wstx.api.EmptyElementHandler.HtmlEmptyElementHandler;

import ch.qos.logback.core.util.Loader;



@Service
public class EmailSender {
	
	String auth = "true";
	String startTls = "true";
	
	String port = "465";
	String host =  "mail.arshaa.com:465:1";
	String to = "sandhya.bandaru@arshaa.com";//change accordingly  
    String username = "info@arshaa.com";
    String password= "jFm5Ewm69mzzKKC";
    
	
	
	@Autowired(required = true)
	private JavaMailSender mailSender;
	
	MimeMessage message ;
	
	public ResponseEntity mail(MainEmailTemplate uModel) {
		
		Model m = new Model ();

		try{    
		  Properties props = new Properties();    
          props.put("mail.smtp.host", "smtp.office365.com");    
          props.put("mail.smtp.socketFactory.port", "587");    
          props.put("mail.smtp.socketFactory.class",    
                    "javax.net.ssl.SSLSocketFactory");    
          props.put("mail.smtp.auth", "true");    
          props.put("mail.smtp.port", "587");  
          props.put("mail.smtp.starttls.enable", "true"); //TLS
          username = "info@arshaa.com";
          password = "MRsnbk143";
              System.out.println("message before session object..line no 134....");
              System.out.println("username "+ username + "password " + password);
              
//	      Session session = Session.getDefaultInstance(props,  
//	    		    new javax.mail.Authenticator() {  
//	    		      protected PasswordAuthentication getPasswordAuthentication() {  
//	    		    return new PasswordAuthentication(usernamePublic,password);  
//	    		      }  
//	    		    });
           // Authenticating
              Authenticator auth = new Authenticator() {
  				protected PasswordAuthentication getPasswordAuthentication() {
  					return new PasswordAuthentication(username, password);
  				}
              };
	      
	       
           // creating session
              Session session = Session.getInstance(props, auth);
	        
           // create mimemessage
              
  			  message = new MimeMessage(session); 
	          
  			  
  			 String sub;
  			 String text;
	        
//           String email_type="ONBOARDAPPROVE";
  			 String type=uModel.getEmailType();
	          switch(type) {
	          case "ONBOARDAPPROVE":
	        	   sub="Onboard Approve Confirmation";
                   text=OnboardApproveText(uModel);
 	        	  sendEmail(uModel,sub,text);
 	             break;

	          case "REGISTRATION_CONFIRMATION":
	        	   sub="Form Submission Confirmation";
	        	   text=registrationSubmissionText(uModel);
	        	  sendEmail(uModel,sub,text);
	              break;

	          case "TAA_APPROVAL":
	        	  sub="Taa Approval confirmation";
	        	  text=taaApprovalText(uModel);
 	        	  sendEmail(uModel,sub,text);
 	             break;
	          case "TAG_APPROVAL":
	        	  sub="Tag Approval confirmation";
	        	  text=tagApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO_APPROVAL":
	        	  sub="PMO Approval Confirmation";
	        	  text=pmoApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "CEO_APPROVAL":
	        	  sub="CEO Approval Confirmation";
	        	  text=ceoApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "HR_APPROVAL":
	        	  sub="HR Approval Confirm";
	        	  text=hrApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO":
	        	  sub="PMO Assign";
	        	  text=pmoAssignText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "IT_TEAM":
	        	  sub="IT Team Cofirm";
	        	  text=itTeamText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "ADMIN":
	        	  sub="Admin confrim";
	        	  text=adminText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "TAG_HEAD_REJECT":
	        	  sub="Tag Head Rejected";
	        	  text=tagHeadReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO_REJECT":
	        	  sub="PMO Rejected";
	        	  text=pmoReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "CEO_REJECT":
	        	  sub="CEO Rejected";
	        	  text=ceoReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;

 	        	  default:
 	        		  System.out.println("default switch case");
	          }
   return new ResponseEntity(Map.of("Message","Sent successfully"),HttpStatus.OK);
	   
	       }catch (MessagingException mex) {mex.printStackTrace();
	       m.setMsg(mex.getMessage());
	       m.setStatus(false);
	       return new ResponseEntity(m,HttpStatus.OK);

	       }  
	    }  
	
	private String pmoAssignText(MainEmailTemplate uModel) {
		String text="PMO Assign "+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String adminText(MainEmailTemplate uModel) {
		String text="Admin Approved "+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String itTeamText(MainEmailTemplate uModel) {
		String text="IT Team Approve"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String hrApprovalText(MainEmailTemplate uModel) {
		String text="HR Approve"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String ceoReject(MainEmailTemplate uModel) {
		String text="CEO Rejected"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private String pmoReject(MainEmailTemplate uModel) {
		String text="PMO Rejected"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private String tagHeadReject(MainEmailTemplate uModel) {
		String text="TAG Head Rejected"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}
	
	
	private String ceoApprovalText(MainEmailTemplate uModel) {
		String text="CEO was Approved successfully"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");

	
				return text;
	}


	private String pmoApprovalText(MainEmailTemplate uModel) {
		String text="PMO was Approved successfully"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private String tagApprovalText(MainEmailTemplate uModel) {
		String text = "Tag was Approved successfully"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private String taaApprovalText(MainEmailTemplate uModel) {
        String text="Tag Member approved successfully"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private void sendEmail(MainEmailTemplate uModel, String subject,String text) throws AddressException, MessagingException {
		message.setFrom(new InternetAddress(username));  
        message.addRecipient(Message.RecipientType.TO,new InternetAddress(uModel.getMap().get("email"))); 
        message.setSubject(subject);  
        message.setText(text);  
        Transport.send(message);
	}
	
	public String registrationSubmissionText(MainEmailTemplate uModel)
	{
		String text="Completed form submission successfully, you can check those details in the below link : "+uModel.getMap().get("LOGIN_LINK") +"\n"+"\n"+"Regards"+"\n"+uModel.getMap().get("employeeName")+".";
		return text;
	}
	
	public String OnboardApproveText(MainEmailTemplate uModel)
	{
		String text="Hi "+uModel.getMap().get("employeeName")+"\n"+"Welcome to Arshaa Technologies"+"\n"+"Your Onboard was Approved, Please login with your Email-ID and Password as we mentioned here, These are your credentials Email-ID:-"+uModel.getMap().get("email")+" Password:-"+uModel.getMap().get("password")+"\n"+"\n"+"Link to login : http://15.206.247.212:5000/"+"\n"+"Kindly fill your details in Edit My Profile."+"\n"+"\n"+"Regards,"+"\n"+"Recuiter Team"+"\n"+"Arshaa Technology Pvt. Ltd.";
		return text;
	}
	



}
