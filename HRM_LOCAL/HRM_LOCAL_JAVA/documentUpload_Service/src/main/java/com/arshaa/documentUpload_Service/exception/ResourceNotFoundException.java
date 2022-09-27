package com.arshaa.documentUpload_Service.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ResourceNotFoundException extends RuntimeException {

	String recourceName ;
	String fieldName  ;
	long fieldValue ;
	public ResourceNotFoundException(String recourceName, String fieldName, long fieldValue) {
		super(String.format("%s not found with %s : %s",recourceName ,fieldName , fieldValue));
		this.recourceName = recourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}


}
