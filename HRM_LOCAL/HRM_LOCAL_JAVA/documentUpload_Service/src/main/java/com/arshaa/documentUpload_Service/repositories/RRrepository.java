package com.arshaa.documentUpload_Service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.documentUpload_Service.entity.RequisitionRequest;

@Repository
public interface RRrepository extends JpaRepository<RequisitionRequest, Long>{

	boolean existsByTitleAndRrfId(String title, long rrfId);

	RequisitionRequest getByTitleAndRrfId(String title, long rrfId);

}
