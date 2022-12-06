package com.arshaa.model;

import java.util.List;

public class Response {

	private boolean status;
	private String message;
	private List<Holidaymanagement> data;
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
	public List<Holidaymanagement> getData() {
		return data;
	}
	public void setData(List<Holidaymanagement> data) {
		this.data = data;
	}
	
	
}
