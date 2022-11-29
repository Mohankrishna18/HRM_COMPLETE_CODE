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
          password = "MRsnbk143@Ca7$";
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
	        	  sub="Need Your Approval";
	        	  text=taaApprovalText(uModel);
 	        	  sendEmail(uModel,sub,text);
 	             break;
	          case "TAG_APPROVAL":
	        	  sub="Need Your Approval";
	        	  text=tagApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO_APPROVAL":
	        	  sub="Need Your Approval";
	        	  text=pmoApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "CEO_APPROVAL":
	        	  sub="Congratulations on your offer from Arshaa Technologies";
	        	  text=ceoApprovalText(uModel);
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
	          case "HR_APPROVAL":
	        	  sub="Welcome Onboard";
	        	  text=hrApprovalText(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "LEAVE_APPLY":
	        	  sub="Leave Request";
	        	  text=leaveApplied(uModel);
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
	        	  
	          case "IRM_APPROVED":
	        	  sub="IRM Approved";
	        	  text=irmApproved(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "IRM_REJECTED":
	        	  sub="IRM Rejected";
	        	  text=irmReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;	
	          case "SRM_APPROVED":
	        	  sub="SRM Approved";
	        	  text=srmApproved(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "SRM_REJECTED":
	        	  sub="SRM Rejected";
	        	  text=srmReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;		  
	          case "CEO_REJECT":
	        	  sub="CEO Rejected";
	        	  text=ceoReject(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "RESIGNATION_APPLY":
	        	  sub="Resignation Applied";
	        	  text=applyResignation(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "IRM_RESIGN_APPROVED":
	        	  sub="Resignation was Approved by IRM";
	        	  text=approveResignByIRM(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "SRM_RESIGN_APPROVED":
	        	  sub="Resignation was Approved by SRM";
	        	  text=approveResignBySRM(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO_RESIGN_APPROVED":
	        	  sub="Resignation was Approved by PMO";
	        	  text=approveResignByPMO(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "HR_RESIGN_APPROVED":
	        	  sub="Resignation was Approved by HR";
	        	  text=approveResignByHR(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "IRM_RESIGN_REJECT":
	        	  sub="Resignation was Reject by IRM";
	        	  text=rejectResignByIRM(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "SRM_RESIGN_REJECT":
	        	  sub="Resignation was Reject by SRM";
	        	  text=rejectResignBySRM(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "PMO_RESIGN_REJECT":
	        	  sub="Resignation was Reject by PMO";
	        	  text=rejectResignByPMO(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "HR_RESIGN_REJECT":
	        	  sub="Resignation was Reject by HR";
	        	  text=rejectResignByHR(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "REQUISTION_APPLY":
	        	  sub="Requistion was applied";
	        	  text=applyRequistion(uModel);
	        	  sendEmail(uModel,sub,text);
	        	  break;
	          case "BUH_RESIGN_APPROVED":
	        	  sub="Requistion was approved by buhead";
	        	  text=approveRequistionByBuhead(uModel);
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
	
	private String approveRequistionByBuhead(MainEmailTemplate uModel) {
		String text="Requistion was approved"+"\n"+"\n"+"Regards,"+"\n"+"Murali";
		return text;
	}

	private String applyRequistion(MainEmailTemplate uModel) {
		String text="Requistion was applied"+"\n"+"\n"+"Regards,"+"\n"+"Murali";
		return text;
	}

	private String rejectResignByHR(MainEmailTemplate uModel) {
		String text="Resignation was Reject by HR"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String rejectResignByPMO(MainEmailTemplate uModel) {
		String text="Resignation was Reject by PMO"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String rejectResignBySRM(MainEmailTemplate uModel) {
		String text="Resignation was Reject by SRM"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String rejectResignByIRM(MainEmailTemplate uModel) {
		String text="Resignation was Reject by IRM"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String approveResignByHR(MainEmailTemplate uModel) {
		String text="Resignation was Approved by HR"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String approveResignByPMO(MainEmailTemplate uModel) {
		String text="Resignation was Approved by PMO"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String approveResignBySRM(MainEmailTemplate uModel) {
		String text="Resignation was Approved by SRM"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String approveResignByIRM(MainEmailTemplate uModel) {
		String text="Resignation was Approved by IRM"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String applyResignation(MainEmailTemplate uModel) {
		String text="Resignation was applied"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String srmReject(MainEmailTemplate uModel) {
		String text="SRM Approved  your leave"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String srmApproved(MainEmailTemplate uModel) {
		String text="SRM Rejected  your leave"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String irmApproved(MainEmailTemplate uModel) {
		String text="IRM Approved  your leave"+"\n"+"\n"+"Regards,"+"\n";
		return text;
	}

	private String irmReject(MainEmailTemplate uModel) {

		String text="IRM Rejected your leave"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}

	private String leaveApplied(MainEmailTemplate uModel) {
		String text="Hi Sir"+"\n"+"\n"+"Hope You doing well.  I would like to have a leave on these days from "+uModel.getMap().get("fromDate")+" to "+uModel.getMap().get("toDate")+"\n"+"\n"+"\n"+"1) Employee ID :  "+uModel.getMap().get("employeeId")+"\n"+"2) Employee Name :  "+uModel.getMap().get("name")+"\n"+"3) From Date :  "+uModel.getMap().get("fromDate")+"\n"+"4) To Date :  "+uModel.getMap().get("toDate")+"\n"+"5) Leave Reason :  "+uModel.getMap().get("reason")+"\n"+"\n"+"Please Grant me Leave."+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
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
		String text="Hello "+uModel.getMap().get("employeeName")+"\n"+"\n"+"Welcome to Arshaa Technologies."+"\n"+"\n"+"Please login with your Employee-ID and password as we mentioned here, There are your credentials Employee-ID : "+uModel.getMap().get("employeeId")+" and Password :"+uModel.getMap().get("password")+"\n"+"\n"+"Link to login : http://15.206.247.212:3000/"+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
		return text;
	}
	
	
	private String ceoReject(MainEmailTemplate uModel) {
		String text="CEO Rejected"+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
		return text;
	}


	private String pmoReject(MainEmailTemplate uModel) {
		String text="PMO Rejected"+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
		return text;
	}


	private String tagHeadReject(MainEmailTemplate uModel) {
		String text="TAG Head Rejected"+"\n"+"\n"+"Regards,"+"\n"+uModel.getMap().get("employeeName");
		return text;
	}


	private String ceoApprovalText(MainEmailTemplate uModel) {
		String text="Hi "+uModel.getMap().get("employeeName")+"\n"+"\n"+"\n"+"Welcome to Arshaa Technologies"+"\n"+"\n"+"\n"+"We are glad to infrom on the joining date of yours at Arshaa Technologies on "+uModel.getMap().get("dateOfJoining")+"\n"+"\n"+"\n"+"As per the discussion with me, please find the below documents to be carried on your Day of joining."+"\n"+"\n"+"\n"+"1] Offer letter."+"\n"+"2] Pan and Aadhar Copies (ID Proof)."+"\n"+"3] Educational Documents."+"\n"+"4] Hike Letter."+"\n"+"5] Form-16."+"\n"+"6] Resignation Copy"+"\n"+"\n"+"\n"+"Venue Details :-"+"\n"+"Reporting Time - 10:00 AM"+"\n"+"Reporting Address -Arshaa Technologies, SALARPURIA SATTVA KNOWLEDGE CITY, "+"\n"+"Level 1, 2A&2B Octave Block, Parcel 4, Rai Durg, "+"\n"+"Hyderabad, Telangana-500081"+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";

	
				return text;
	}


	private String pmoApprovalText(MainEmailTemplate uModel) {
		String text="Hai Sir"+"\n"+"\n"+"Need your approval in onboarding the candidate."+"\n"+"\n"+"Candidate Name -"+uModel.getMap().get("employeeName")+"\n"+"\n"+"Please verify the candidate details."+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
		return text;
	}


	private String tagApprovalText(MainEmailTemplate uModel) {
		String text="Hai Sir"+"\n"+"\n"+"Need your approval in onboarding the candidate."+"\n"+"\n"+"Candidate Name -"+uModel.getMap().get("employeeName")+"\n"+"\n"+"Please verify the candidate details."+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
		return text;
	}


	private String taaApprovalText(MainEmailTemplate uModel) {
        String text="Hai Sir"+"\n"+"\n"+"Need your approval in onboarding the candidate."+"\n"+"\n"+"Candidate Name -"+uModel.getMap().get("employeeName")+"\n"+"\n"+"Please verify the candidate details."+"\n"+"\n"+"Regards,"+"\n"+"Team Arshaa";
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
		String text="All Details are submitted successfully, Please Check those details in the below link : "+uModel.getMap().get("LOGIN_LINK") +"\n"+"\n"+"Regards"+"\n"+uModel.getMap().get("employeeName")+".";
		return text;
	}
	
	public String OnboardApproveText(MainEmailTemplate uModel)
	{
		String text="Hi "+uModel.getMap().get("employeeName")+"\n"+"Welcome to Arshaa Technologies"+"\n"+"Your Onboard was Approved, Please login with your Email-ID and Password as we mentioned here, These are your credentials Email-ID:-"+uModel.getMap().get("email")+" Password:-"+uModel.getMap().get("password")+"\n"+"\n"+"Link to login : http://15.206.247.212:5000/"+"\n"+"Kindly fill your details in Edit My Profile."+"\n"+"\n"+"Regards,"+"\n"+"Recuiter Team"+"\n"+"Arshaa Technology Pvt. Ltd.";
		return text;
	}



}
