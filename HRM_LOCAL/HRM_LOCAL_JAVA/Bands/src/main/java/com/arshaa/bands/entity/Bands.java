package com.arshaa.bands.entity;

import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;

@Entity(name = "bands")
public class Bands {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bandId;

	@Column
	private String bandName;

	public Bands() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bands(int bandId, String bandName) {
		super();
		this.bandId = bandId;
		this.bandName = bandName;
	}

	public int getBandId() {
		return bandId;
	}

	public void setBandId(int bandId) {
		this.bandId = bandId;
	}

	public String getBandName() {
		return bandName;
	}

	public void setBandName(String bandName) {
		this.bandName = bandName;
	}

}
