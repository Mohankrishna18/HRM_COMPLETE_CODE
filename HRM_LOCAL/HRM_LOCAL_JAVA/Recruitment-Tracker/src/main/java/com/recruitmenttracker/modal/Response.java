package com.recruitmenttracker.modal;

public class Response <T>{

	private boolean status;
	private String message;
	private T data;
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	

	
	public Response(boolean status, String message,T data) {
		super();
		this.status = status;
		this.message = message;
		this.data = data;
	}
	

	public Response() {
		// TODO Auto-generated constructor stub
	}

}
