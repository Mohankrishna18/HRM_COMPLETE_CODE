package com.arshaa.documentUpload_Service.serviceImplement;


import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.arshaa.documentUpload_Service.dto.PostDto;
import com.arshaa.documentUpload_Service.entity.Post;
import com.arshaa.documentUpload_Service.exception.ResourceNotFoundException;
import com.arshaa.documentUpload_Service.payloads.PostResponse;
import com.arshaa.documentUpload_Service.repositories.PostRepository;
import com.arshaa.documentUpload_Service.service.PostService;

@Service
public class PostServiceImpl implements PostService  {

		@Autowired
		PostRepository postRepo ;
		
		@Autowired
		private ModelMapper mMapper ;
		

		@Override
		public PostDto createPost(PostDto postDto) {
		Post post=new Post();
		Post updatePost;
		if(!postRepo.existsByTitleAndEmployeeId(postDto.getTitle(),postDto.getEmployeeId()))
		{
			post.setAddedDate(new Date());
			post.setImageName(postDto.getImageName());
			post.setEmployeeId(postDto.getEmployeeId());
			post.setTitle(postDto.getTitle());
			 updatePost = this.postRepo.save(post);
		}
		else {
			Post updatedPost=postRepo.getByTitleAndEmployeeId(postDto.getTitle(), postDto.getEmployeeId());
			updatedPost.setImageName(postDto.getImageName());
			 updatePost = this.postRepo.save(updatedPost);

		}
		
		PostDto pDto=this.mMapper.map(updatePost, PostDto.class);
		pDto.setUrl(postDto.getUrl());
		return pDto;
		
		}

		@Override
		public void deletePost(Integer postId) {
		Post post =	this.postRepo.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post" , "post id " , postId));
		this.postRepo.delete(post);
		}

		@Override
		public PostResponse getAllPost(Integer pageNumber , Integer pageSize , String sortBy ,String  sortDir) {
		
			Sort sort = null ;
			if(sortDir.equalsIgnoreCase("desc")) {
				sort = Sort.by(sortBy).descending();
			}else
			{
				sort = Sort.by(sortBy).ascending();
			}
		//public List<PostDto> getAllPost(Integer pageNumber , Integer pageSize) 
		Pageable p = PageRequest.of(pageNumber, pageSize ,sort);
		Page<Post> pagePost = this.postRepo.findAll(p);
		List<Post> allPost = pagePost.getContent();
		List<PostDto>  postDtos  = allPost.stream().map((post) -> this.mMapper.map(post, PostDto.class))
				.collect(Collectors.toList());
		
//			List<Post> allPost = this.postRepo.findAll();
//		List<PostDto>  postDtos  = allPost.stream().map((post) -> this.mMapper.map(post, PostDto.class))
//				.collect(Collectors.toList());
			//return postDtos ;
		PostResponse  pResponse  = new PostResponse();
		
		pResponse.setContent(postDtos);
		pResponse.setPageNumber(pagePost.getNumber());
		pResponse.setPageSize(pagePost.getSize());
		pResponse.setTotalElements(pagePost.getTotalElements());
		pResponse.setTotalPages(pagePost.getTotalPages());
		pResponse.setLastPage(pagePost.isLast());
		
		return pResponse ;
		
		}

		@Override
		public PostDto getPostById(Integer postId) {
		Post post = 	this.postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post","post id",postId));
		return this.mMapper.map(post , PostDto.class);
		}

//		@Override
//		public List<PostDto> getPostByUsers(Integer userId) {
//		Users user = this.uRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("Users","User id", userId));
//			List<Post> posts = this.postRepo.findAllByUsers(user);
//		List<PostDto> postDtos = posts.stream().map((post)-> this.mMapper.map(post,PostDto.class)).collect(Collectors.toList());
//		return postDtos ;
//		}

		@Override
		public List<PostDto> searchPosts(String keyword) {
			List<Post> posts = this.postRepo.searchByTitle("%"+keyword+"%");
		List<PostDto> postdtos = posts.stream().map((post) -> this.mMapper.map(post,PostDto.class)).collect(Collectors.toList());
			return postdtos ;
			
		}

}
