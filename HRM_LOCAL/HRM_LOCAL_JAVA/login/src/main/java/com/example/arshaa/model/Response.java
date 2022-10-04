package com.example.arshaa.model;

public class Response<T> {

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
		
		public Response() {

		}
		
		public Response(T data, String message,boolean status) {
			super();
			this.status = status;
			this.message = message;
			this.data = data;
		}
		
}
