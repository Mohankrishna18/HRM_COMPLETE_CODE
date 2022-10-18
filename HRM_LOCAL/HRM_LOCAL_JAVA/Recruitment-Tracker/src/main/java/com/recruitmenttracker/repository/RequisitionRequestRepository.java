package com.recruitmenttracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.recruitmenttracker.entity.RequisitionRequestEntity;
@Repository
public interface RequisitionRequestRepository extends JpaRepository<RequisitionRequestEntity, Long>{
	List<RequisitionRequestEntity> findByRrfStatus(String rrfStatus);

}
