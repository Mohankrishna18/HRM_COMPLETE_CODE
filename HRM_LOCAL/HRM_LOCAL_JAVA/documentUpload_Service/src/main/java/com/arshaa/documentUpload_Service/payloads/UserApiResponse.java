package com.arshaa.documentUpload_Service.payloads;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class UserApiResponse {
	
	private String messege ;
	private boolean success ;
	public String getMessege() {
		return messege;
	}
	public void setMessege(String messege) {
		this.messege = messege;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public UserApiResponse(String messege, boolean success) {
		super();
		this.messege = messege;
		this.success = success;
	}
	public UserApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

}
