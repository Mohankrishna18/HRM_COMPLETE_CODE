package com.arshaa.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.arshaa.responses.ApiResponse;



@RestControllerAdvice
public class GlobalExceptionHandler {
//sandhya changes
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> resourceNotFountExceptionHandler(ResourceNotFoundException exception){
		String message=exception.getMessage();
		ApiResponse apiRes=new ApiResponse(message,false);
		return new ResponseEntity<>(apiRes,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(DataAlreadyExists.class)
	public ResponseEntity<ApiResponse> resourceDatAlreadyExists(DataAlreadyExists exception){
		String message=exception.getMessage();
		ApiResponse apiRes=new ApiResponse(message,false);
		return new ResponseEntity<>(apiRes,HttpStatus.NOT_FOUND);
	}
	
	
}
