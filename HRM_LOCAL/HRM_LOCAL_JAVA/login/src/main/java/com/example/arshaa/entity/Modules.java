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

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name="ModuleMaster")
public class Modules {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int moduleId;
	@Column(name="module_name",length = 150)
	private String moduleName;
	@Column(name="module_status",length = 5)
	private boolean moduleStatus;
	
}
