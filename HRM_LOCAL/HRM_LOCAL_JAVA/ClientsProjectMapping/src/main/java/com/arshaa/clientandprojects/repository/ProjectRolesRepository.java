package com.arshaa.clientandprojects.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.ProjectRolesMaster;
import com.arshaa.clientandprojects.entity.ProjectTeamMaster;


@Repository
public interface ProjectRolesRepository extends JpaRepository<ProjectRolesMaster,Integer> {

	ProjectRolesMaster findByprmasterId(Integer id);
	
}
