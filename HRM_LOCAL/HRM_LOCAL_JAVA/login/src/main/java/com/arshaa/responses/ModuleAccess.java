package com.arshaa.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ModuleAccess {

	private int roleId;
	private int moduleId;
	private boolean selected;
	private String moduleName;
//	private PermissionsModel permissons;
	private boolean editAccess;
	private boolean viewAccess;
	private boolean deleteAccess;
}
