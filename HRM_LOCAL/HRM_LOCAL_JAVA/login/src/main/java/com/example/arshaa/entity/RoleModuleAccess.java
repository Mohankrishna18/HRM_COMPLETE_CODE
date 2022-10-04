package com.example.arshaa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@ToString
public class RoleModuleAccess {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rmAccessId;
	private int roleId;
	private int moduleId;
	private boolean moduleStatus;
	@Column(name="edit_access")
	private boolean editAccess;
	@Column(name="delete_access")
	private boolean deleteAccess;
	@Column(name="view_access")
	private boolean viewAccess;
	@Column(name="created_by",length = 20)
	private String createdBy;
	
}
