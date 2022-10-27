package com.arshaa.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class DataAlreadyExists extends RuntimeException {

	String resourceName;
	String fieldName;
	String fieldValue;
	int roleId;
	int moduleId;
	public DataAlreadyExists(String resourceName,int roleId,int moduleId)
	{
		super(String.format("%s data already exits with role Id: %s  and moduleId: %s ", resourceName, roleId, moduleId));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
}
