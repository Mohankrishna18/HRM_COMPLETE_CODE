package com.arshaa.leads.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.arshaa.leads.entity.Leads;

@Repository
public interface LeadRepository extends JpaRepository<Leads, Integer>{
	
	Leads findByid(Integer id);
	List<Leads> getLeadsByStatus(String status);
}
