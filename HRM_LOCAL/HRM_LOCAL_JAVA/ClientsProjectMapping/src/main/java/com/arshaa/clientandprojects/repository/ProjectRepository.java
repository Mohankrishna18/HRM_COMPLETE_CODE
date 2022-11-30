package com.arshaa.clientandprojects.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.Projects;

@Repository
public interface ProjectRepository extends JpaRepository<Projects,Integer> {

	Projects findByProjectId(Integer id);
	
	Optional<Projects> findByProjectName(String projectName);
	
	// Madhu Changes
		List<Projects> getActiveProjectsByEmployeeId(String employeeId);
		
		List<Projects> getAllByStatus(String status);
		
		List<Projects> getActiveProjectsBybuhId(String buhId);

		List<Projects> getProjectsByClientId(int clientId);
		List<Projects> getProjectsByClientName(String clientName);
		List<Projects> getProjectsByEmployeeId(String employeeId);
}
