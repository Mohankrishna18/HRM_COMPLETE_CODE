package com.arshaa.clientandprojects.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.Projects;

@Repository
public interface ProjectRepository extends JpaRepository<Projects,Integer> {

	Projects findByProjectId(Integer id);
	
	Optional<Projects> findByProjectName(String projectName);
}
