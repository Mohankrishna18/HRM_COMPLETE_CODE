package com.arshaa.clientandprojects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.entity.Projects;

@Repository
public interface ProjectTeamRepository extends JpaRepository<ProjectTeamMaster, Integer> {

	ProjectTeamMaster findByemployeeprojectId(Integer id);
	
	List<ProjectTeamMaster> findAllByProjectId(Integer projectId);


	// Madhu Changes
	ProjectTeamMaster findByEmployeeId(String employeeId);

	List<ProjectTeamMaster> findAllByEmployeeId(String employeeId);

	List<ProjectTeamMaster> findAllByEmployeeIdAndStatus(String employeeId,String status);

	List<ProjectTeamMaster> getAllProjectsByEmployeeId(String employeeId);

}
