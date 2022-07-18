package com.arshaa.clientandprojects.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arshaa.clientandprojects.entity.Projects;

public interface ProjectRepository extends JpaRepository<Projects,Integer> {

	Projects findByProjectId(Integer id);
}
