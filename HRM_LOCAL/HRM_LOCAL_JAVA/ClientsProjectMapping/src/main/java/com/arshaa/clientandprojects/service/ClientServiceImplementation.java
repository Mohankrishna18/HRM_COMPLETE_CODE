package com.arshaa.clientandprojects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.arshaa.clientandprojects.entity.Clients;
import com.arshaa.clientandprojects.model.ClientResponse;
import com.arshaa.clientandprojects.repository.ClientRepository;

@Service
public class ClientServiceImplementation implements ClientServiceInterface {

	@Autowired(required = true)
	private ClientRepository clientRepo;
	

	
	// To Add Clients
		public ResponseEntity addClient(Clients newClients) {
			ClientResponse cr = new ClientResponse<>();
			try {
				Clients newClientData = clientRepo.save(newClients);
				cr.setStatus(true);
				cr.setMessage("Data added successfully");
				cr.setData(newClientData);
				return new ResponseEntity(cr, HttpStatus.OK);
			} catch (Exception e) {

				cr.setStatus(false);
				cr.setMessage(e.getMessage());
				return new ResponseEntity(cr, HttpStatus.OK);
			}
		}


		// To Get the Clients

		public ResponseEntity getAllClient() {
			ClientResponse cr = new ClientResponse<>();
			try {

				List<Clients> newClientData = clientRepo.findAll();
				cr.setStatus(true);
				cr.setMessage("Data Fetching");
				cr.setData(newClientData);
				return new ResponseEntity(cr, HttpStatus.OK);
			} catch (Exception e) {


				cr.setStatus(false);
				cr.setMessage(e.getMessage());
				return new ResponseEntity(cr, HttpStatus.OK);
			}
		}
		
		

		// To Update the Client

		
		@Override
		public ResponseEntity updateClientById(int clientId, Clients newClientUpdate) {
			ClientResponse cr = new ClientResponse<>();
			try {
				Clients updateClient = clientRepo.getById(clientId);
				updateClient.setClientName(newClientUpdate.getClientName());
				updateClient.setStartDate(newClientUpdate.getStartDate());
				updateClient.setEndDate(newClientUpdate.getEndDate());
				updateClient.setLocation(newClientUpdate.getLocation());
				updateClient.setAddress(newClientUpdate.getAddress());

				Clients latestClient = clientRepo.save(updateClient);
				System.out.println(latestClient);

				cr.setStatus(true);
				cr.setMessage("Data added successfully");
				cr.setData(latestClient);

				return new ResponseEntity(cr, HttpStatus.OK);
			} catch (Exception e) {
				// TODO: handle exception

				cr.setStatus(false);
				cr.setMessage(e.getMessage());
				return new ResponseEntity(cr, HttpStatus.OK);
			}

		}




		// To Delete the Client

		@Override
			public ResponseEntity deleteClient(int clientId) {
				ClientResponse cr = new ClientResponse<>();
				try {
					Clients deleteClient = clientRepo.getById(clientId);
					clientRepo.delete(deleteClient);
					cr.setStatus(true);
					cr.setMessage("Deleted successfully");
					return new ResponseEntity(cr, HttpStatus.OK);
				} catch (Exception e) {
					// TODO: handle exception

					cr.setStatus(false);
					cr.setMessage(e.getMessage());
					return new ResponseEntity(cr, HttpStatus.OK);
				}
			}

	
}
