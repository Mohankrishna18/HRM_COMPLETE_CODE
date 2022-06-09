package com.arshaa.urp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.urp.entity.Rolesmaster;



@Repository
public interface RoleRepository extends JpaRepository<Rolesmaster, Integer>{
	
}
