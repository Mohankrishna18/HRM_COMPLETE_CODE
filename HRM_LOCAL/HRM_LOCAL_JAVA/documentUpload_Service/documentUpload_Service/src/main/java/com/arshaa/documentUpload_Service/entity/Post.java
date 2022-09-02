package com.arshaa.documentUpload_Service.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="documents")
public class Post {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int postId ;
	private String imageName ;
	private Date addedDate ;
	private String employeeId;
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public Date getAddedDate() {
		return addedDate;
	}
	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public Post(int postId, String imageName, Date addedDate, String employeeId) {
		super();
		this.postId = postId;
		this.imageName = imageName;
		this.addedDate = addedDate;
		this.employeeId = employeeId;
	}
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
