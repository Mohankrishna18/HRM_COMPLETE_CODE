package com.arshaa.documentUpload_Service.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.arshaa.documentUpload_Service.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {


	
//	List<Post>  findAllByUsers(Users users );
	
	@Query(value = "select p.* from Post p where p.title like %:key% " , nativeQuery = true)
	List<Post>  searchByTitle(@Param("key") String title);
	Post getImageNameByTitleAndEmployeeId(String title,String employeeId);
	Post getByTitleAndEmployeeId(String title,String employeeId);

	Boolean existsByTitle(String title);
	boolean existsByTitleAndEmployeeId(String title,String employeeId);
	
	//%keywords% = key 
}
