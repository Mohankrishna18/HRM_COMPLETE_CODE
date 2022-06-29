package com.arshaa.bands.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.bands.entity.Bands;

public interface BandsInterface {

	public ResponseEntity addBands(Bands newBands);
	public ResponseEntity getBands();
	public ResponseEntity updateBandsById(int bandId, Bands newBands);
	public ResponseEntity deleteBands(int bandId);
}
