package com.arshaa.leads.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="leadHistory")
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id ;
	
	
	private int leadId;
	private String comment;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
@Temporal(TemporalType.TIMESTAMP)
private java.util.Date date = new java.util.Date(System.currentTimeMillis());




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLeadId() {
		return leadId;
	}

	public void setLeadId(int leadId) {
		this.leadId = leadId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Comment(int id, int leadId, String comment, Date date) {
		super();
		this.id = id;
		this.leadId = leadId;
		this.comment = comment;
		this.date = date;
	}

	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
