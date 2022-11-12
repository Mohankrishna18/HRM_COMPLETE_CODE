package com.arshaa.bands.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.arshaa.bands.entity.Bands;
import com.arshaa.bands.model.BandsResponse;
import com.arshaa.bands.repository.BandsRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BandsService implements BandsInterface{

    @Autowired(required=true)
    private BandsRepository bandsrepo;
   
    // To Add Bands
   
    public ResponseEntity addBands(Bands newBands) {
        BandsResponse br = new BandsResponse<>();
        try{
            Optional<Bands> updateBand = bandsrepo.findByBandName(newBands.getBandName());
            if (updateBand.isPresent()) {
//              br.setStatus(false);
//              br.setMessage("Bands Added Exits");
//              return new ResponseEntity(br,HttpStatus.NOT_ACCEPTABLE);
                throw new Exception("Bands Already Exits");
            }
            Bands newBandsData=bandsrepo.save(newBands);
            br.setStatus(true);
            br.setMessage("Band Added Successfully");
            br.setData(newBandsData);
            return new ResponseEntity(br,HttpStatus.OK);
            }catch(Exception e){

            br.setStatus(false);
            br.setMessage(e.getMessage());
            return new ResponseEntity(br,HttpStatus.NOT_ACCEPTABLE);
            }
    }
   
    // To Get Bands

        public ResponseEntity getBands() {
            BandsResponse br = new BandsResponse<>();
            try {

                List<Bands> newBandsData = bandsrepo.findAll();
                br.setStatus(true);
                br.setMessage(" Bands Data Fetching");
                br.setData(newBandsData);
                return new ResponseEntity(br, HttpStatus.OK);
            } catch (Exception e) {
    //TODO: handle exception

                br.setStatus(false);
                br.setMessage(e.getMessage());
                return new ResponseEntity(br, HttpStatus.OK);
            }
        }
       
        // To Update the Bands

       
        @Override
        public ResponseEntity updateBandsById(int bandId, Bands newBands) {
            BandsResponse br = new BandsResponse<>();
            try {
                Bands updateBand = bandsrepo.findById(bandId).get();
                updateBand.setBandName(newBands.getBandName());

                Bands latestBand = bandsrepo.save(updateBand);
                System.out.println(latestBand);

                br.setStatus(true);
                br.setMessage("Band Data updated successfully");
                br.setData(latestBand);

                return new ResponseEntity(br, HttpStatus.OK);
            } catch (Exception e) {
                // TODO: handle exception

                br.setStatus(false);
                br.setMessage(e.getMessage());
                return new ResponseEntity(br, HttpStatus.OK);
            }

        }
       
        // To Delete the Bands

        @Override
        public ResponseEntity deleteBands(int bandId) {
            BandsResponse br = new BandsResponse<>();
            try {
                Bands delBands = bandsrepo.getById(bandId);
                bandsrepo.delete(delBands);
                br.setStatus(true);
                br.setMessage(" Band Deleted successfully");
                return new ResponseEntity(br, HttpStatus.OK);
            } catch (Exception e) {
                // TODO: handle exception

                br.setStatus(false);
                br.setMessage(e.getMessage());
                return new ResponseEntity(br, HttpStatus.OK);
            }
        }

   
}