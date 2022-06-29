package com.arshaa.bands.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arshaa.bands.entity.Bands;
import com.arshaa.bands.service.BandsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;

@RequestMapping("/bands")
@RestController
@CrossOrigin("*")
public class BandsController {

	@Autowired(required=true)
	private BandsInterface bandServ;
	
	@PostMapping("/addBands")
	public ResponseEntity addBands(@RequestBody Bands newBands) {
		return bandServ.addBands(newBands);
	}
	
	@GetMapping("/getAllBands")
	public ResponseEntity getBands() {
		return bandServ.getBands();
	}
	
	@PutMapping("/updateBandById/{bandId}")
	public ResponseEntity updateBandsById(@PathVariable int bandId,@RequestBody Bands newBands) {
		return bandServ.updateBandsById(bandId,newBands);
	}
	
	@DeleteMapping("/deleteBand/{bandId}")
	public ResponseEntity deleteBands(@PathVariable int bandId) {
		return bandServ.deleteBands(bandId);
	}
	
}
