package com.arshaa.emailmodels;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class OnboardApprove {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		
		private String name;
		
		private String userName;
		
		private String email;
		
		private String password;
		private String employeeId;
		public static final String email_type="ONBOARDAPPROVE";
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(String employeeId) {
			this.employeeId = employeeId;
		}
		public static String getEmailType() {
			return email_type;
		}
		
		
}
