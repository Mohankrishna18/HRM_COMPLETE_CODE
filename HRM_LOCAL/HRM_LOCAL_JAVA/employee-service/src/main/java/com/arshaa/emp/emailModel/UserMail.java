package com.arshaa.emp.emailModel;

import java.util.ArrayList;
import java.util.List;


public class UserMail {
	List<MailGet> mails=new ArrayList<>();

	public List<MailGet> getMails() {
		return mails;
	}

	public void setMails(List<MailGet> mails) {
		this.mails = mails;
	}

}
