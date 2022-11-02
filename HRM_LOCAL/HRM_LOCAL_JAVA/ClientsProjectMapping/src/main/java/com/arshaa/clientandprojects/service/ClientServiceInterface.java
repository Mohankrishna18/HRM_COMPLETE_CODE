package com.arshaa.clientandprojects.service;

import org.springframework.http.ResponseEntity;

import com.arshaa.clientandprojects.entity.Clients;

public interface ClientServiceInterface {

	public ResponseEntity addClient(Clients newClients);

	public ResponseEntity getAllClient();

	public ResponseEntity updateClientById(int clientId, Clients newClientUpdate);

	public ResponseEntity deleteClient(int clientId);
	
	
}
