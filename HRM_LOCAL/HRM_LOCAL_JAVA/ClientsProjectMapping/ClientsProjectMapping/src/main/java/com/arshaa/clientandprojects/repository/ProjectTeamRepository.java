package com.arshaa.clientandprojects.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.clientandprojects.entity.ProjectTeamMaster;
import com.arshaa.clientandprojects.entity.Projects;


@Repository
public interface ProjectTeamRepository extends JpaRepository<ProjectTeamMaster,Integer> {

	ProjectTeamMaster findByemployeeprojectId(Integer id);
}
