package com.arshaa.responses;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PermissionsModel {

	private boolean editAccess;
	private boolean viewAccess;
	private boolean deleteAccess;
}
