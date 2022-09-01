package com.arshaa.documentUpload_Service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.arshaa.documentUpload_Service.payloads.UserApiResponse;


@RestControllerAdvice
public class GlobalExceptionHandler {
	
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<UserApiResponse> resourceNotFoundException(ResourceNotFoundException ex)
	{
		String messege = ex.getMessage();
		UserApiResponse userResponse = new UserApiResponse();
		return new ResponseEntity<UserApiResponse>(userResponse, HttpStatus.NOT_FOUND);
		
		
	}

}
