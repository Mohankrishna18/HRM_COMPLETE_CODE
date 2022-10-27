package com.arshaa.documentUpload_Service.serviceImplement;

import java.util.Date;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshaa.documentUpload_Service.dto.PostDto;
import com.arshaa.documentUpload_Service.dto.RRDto;
import com.arshaa.documentUpload_Service.entity.Post;
import com.arshaa.documentUpload_Service.entity.RequisitionRequest;
import com.arshaa.documentUpload_Service.exception.ResourceNotFoundException;
import com.arshaa.documentUpload_Service.repositories.RRrepository;
import com.arshaa.documentUpload_Service.service.RRService;

@Service
public class RRServiceImpl implements RRService{

	@Autowired
	RRrepository rrRepo;
	
	@Autowired
	private ModelMapper mMapper;
	
	@Override
	public RRDto addRRDoc(RRDto rrDto) {
		RequisitionRequest rr=new RequisitionRequest();
		RequisitionRequest updateRR;
		if(!rrRepo.existsByTitleAndRrfId(rrDto.getTitle(),rrDto.getRrfId()))
		{
			rr.setAddedDate(new Date());
			rr.setFileName(rrDto.getFileName());
			rr.setEmployeeId(rrDto.getEmployeeId());
			rr.setTitle(rrDto.getTitle());
			updateRR = this.rrRepo.save(rr);
		}
		else {
			RequisitionRequest updatedRR = rrRepo.getByTitleAndRrfId(rrDto.getTitle(),rrDto.getRrfId());
			updatedRR.setFileName(rrDto.getFileName());
			updateRR = this.rrRepo.save(updatedRR);
		}
		RRDto rDto=this.mMapper.map(updateRR, RRDto.class);
		rDto.setUrl(rrDto.getUrl());
		return rDto;
	}

	@Override
	public RRDto getRRDocByRrfId(Long rrfId) {
		RequisitionRequest rr= this.rrRepo.findById(rrfId).orElseThrow(()-> new ResourceNotFoundException("RequisitionRequest", "rrf id", rrfId));
		return this.mMapper.map(rr, RRDto.class);
	}

}
