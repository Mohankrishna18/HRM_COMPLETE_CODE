package com.arshaa.documentUpload_Service.service;

import com.arshaa.documentUpload_Service.dto.PostDto;
import com.arshaa.documentUpload_Service.dto.RRDto;

public interface RRService {
 
	RRDto addRRDoc(RRDto rrDto);
	RRDto getRRDocByRrfId(Long rrfId);
}
