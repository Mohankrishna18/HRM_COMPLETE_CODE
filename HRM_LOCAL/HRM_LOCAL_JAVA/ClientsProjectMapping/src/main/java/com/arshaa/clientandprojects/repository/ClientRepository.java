package com.arshaa.clientandprojects.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.Clients;

@Repository
public interface ClientRepository extends JpaRepository<Clients, Integer> {

	Clients findByClientId(Integer id);
	boolean existsByClientNameOrEmail(String clientName, String email);
	Clients getClientNameByClientId(int clientId);
	
}