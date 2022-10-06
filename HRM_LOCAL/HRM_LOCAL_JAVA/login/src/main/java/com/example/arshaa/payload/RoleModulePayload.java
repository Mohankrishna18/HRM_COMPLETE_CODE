package com.example.arshaa.payload;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RoleModulePayload {

	private int rmAccessId;
	private int roleId;
	private int moduleId;
	private boolean status;
//	@Column(name="edit_access")
//	private boolean edit;
//	@Column(name="delete_access")
//	private boolean delete;
//	@Column(name="view_access")
//	private boolean view;
//	@Column(name="created_by",length = 20)
//	private String createdBy;
}
