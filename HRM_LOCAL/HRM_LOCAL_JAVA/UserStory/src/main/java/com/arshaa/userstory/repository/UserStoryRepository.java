package com.arshaa.userstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.arshaa.userstory.entity.UserStory;

public interface UserStoryRepository extends JpaRepository<UserStory,Integer>{

	UserStory findBystoryId(Integer id);
}
