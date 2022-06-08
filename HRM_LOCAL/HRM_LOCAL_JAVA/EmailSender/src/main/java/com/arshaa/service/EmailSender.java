package com.arshaa.service;

import java.util.Date;
import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ctc.wstx.api.EmptyElementHandler.HtmlEmptyElementHandler;

@Service
public class EmailSender {
	@Autowired(required = true)
	private JavaMailSender mailSender;// public void sendEmail(int id,String userName,String email,String
										// password,String employeeId)
// {
//
//
//
// SimpleMailMessage msg = new SimpleMailMessage();
//
// msg.setTo(email);
// msg.setSubject("You are onboarded successfully to the SRI LAKSHMI HEAVEN'S PG");
// msg.setText("Hello "+userName+","+" Welcome to SRI LAKSHMI HEAVEN'S PG." +"\n"+"\n"+ "You are checked in to the PG successfully with the below details :"+"\n"+"\n"+
// "Employee Id: "+employeeId+"\n"+"\n");
//
// mailSender.send(msg);
//
//
//   
//
// }

	public void postMail() {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo("muralikrishna.miriyala@arshaa.com");
		mail.setSubject("This is the test email");
		mail.setText("This is the message from spring boot");
		mailSender.send(mail);
	}

	public void sendEmail(String Name, String userName, String email, String password, String employeeId) {
		// TODO Auto-generated method stub
				SimpleMailMessage msg = new SimpleMailMessage();
				msg.setTo(email);
				msg.setSubject("Welcome Onboard");
				

				msg.setText("Hello " + Name + "," + "\n"+ "Welcome to Arshaa Technologies." + "\n" + "\n"
						+ "Please login with your username and password as we mentioned here, These are your credentials  Employee Id : " +employeeId+  " Password: " +password + "\n" + "\n" 
						+ "\n" + "Link to login: http://10.10.10.167"+ "\n"+
						"Kindly fill your details in Employee Profile, It doesn't take much time to fill the details please complete it by End of the Day" +"\n"+"\n"+" Note: After login, you need reset your password" +"\n"+"\n"+"Regards,"+"\n"+"Team Hr"+"\n"+"Arshaa Technologies PvtLtd");
				
				
				mailSender.send(msg);
				
			}

	
//	public void sentEmail(String Name,  String email) {
//		// TODO Auto-generated method stub
//				SimpleMailMessage msg = new SimpleMailMessage();
//				msg.setTo(email);
//				msg.setSubject("Congratulations");
//				
//
//				msg.setText("Hello " + Name + "," + " Welcome to Arshaa Technologies." + "\n" + "\n"
//						+ "Please login with your username and password as we mentioned here, These are your credentials  UserName: "+userName+" Password: "+password + "\n" + "\n" + "Employee Id: "
//						+ employeeId + "\n" + "Link to login: http://65.1.40.113"+ "\n"+
//						"Kindly fill your details in Employee Profile, It does't take much time to fill the details complete it by End of the Day" +"\n"+"\n"+" Note: After login, You need reset your password" +"\n"+"\n"+"Regards,"+"\n"+"Team Hr"+"\n"+"Arshaa Technologies PvtLtd");
//				
//				
//				mailSender.send(msg);
//				
//			}
}
