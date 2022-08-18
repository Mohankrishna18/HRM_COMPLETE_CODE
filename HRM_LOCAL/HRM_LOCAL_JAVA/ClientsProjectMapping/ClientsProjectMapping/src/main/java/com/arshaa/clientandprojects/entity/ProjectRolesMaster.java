package com.arshaa.clientandprojects.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

	@Entity(name = "projectrolesmaster")
	public class ProjectRolesMaster {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Integer prmasterId;
		
		@Column
		private String projectRolesName;
		
		@Column
		private String status;	
		
		public Integer getPrmasterId() {
			return prmasterId;
		}

		public void setPrmasterId(Integer prmasterId) {
			this.prmasterId = prmasterId;
		}

		public String getprojectRolesName() {
			return projectRolesName;
		}

		public void set(String projectRolesName) {
			this.projectRolesName = projectRolesName;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public ProjectRolesMaster(Integer prmasterId, String projectRolesName, String status) {
			super();
			this.prmasterId = prmasterId;
			this.projectRolesName = projectRolesName;
			this.status = status;
		}

		public ProjectRolesMaster() {
			super();
			// TODO Auto-generated constructor stub
		}

		
	}

