package com.arshaa.documentUpload_Service.service;

import java.util.List;

import com.arshaa.documentUpload_Service.dto.PostDto;
import com.arshaa.documentUpload_Service.payloads.PostResponse;

public interface PostService {
	
	PostDto createPost(PostDto postDto );
	  
	  void deletePost(Integer postId);
	  
	 PostResponse getAllPost(Integer pageNumber , Integer pageSize , String sortBy , String sortDir) ;
	  //List<PostDto> getAllPost(Integer pageNumber , Integer pageSize);
	  
	  PostDto getPostById(Integer postId);
	  
	  //Get all Post by Users .
	//  List<PostDto> getPostByUsers(Integer userId);
	  
	  //Search By keyword .
	  List<PostDto> searchPosts(String keyword);

}
