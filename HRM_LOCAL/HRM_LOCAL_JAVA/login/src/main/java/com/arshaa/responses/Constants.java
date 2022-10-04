package com.arshaa.responses;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Component
public class Constants {

	public static final String CREATED="Created successfully";
	public static final String UPDATED="Updated successfully";
	public static final String DELETED="Deleted successfully";
	public static final String FETCHING="Data fetching";

	
}
