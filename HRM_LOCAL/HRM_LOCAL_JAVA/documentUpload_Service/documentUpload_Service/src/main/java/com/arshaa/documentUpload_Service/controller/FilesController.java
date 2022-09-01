package com.arshaa.documentUpload_Service.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.arshaa.documentUpload_Service.configFile.PostServiceConstants;
import com.arshaa.documentUpload_Service.dto.PostDto;
import com.arshaa.documentUpload_Service.message.ResponseMessage;
import com.arshaa.documentUpload_Service.payloads.PostResponse;
import com.arshaa.documentUpload_Service.payloads.UserApiResponse;
import com.arshaa.documentUpload_Service.service.FilePostService;
import com.arshaa.documentUpload_Service.service.PostService;






@RestController
@RequestMapping("/api")
//@CrossOrigin("http://localhost:8081")
public class FilesController {

	@Autowired
	PostService pservice ;
	
	@Autowired
	private FilePostService fileService ;
	
//	@Value("${project.image}")
	private String path="C:\\ArshaaDocuments\\";
	
	
	
	
	//Posting Documents By Employee Id .
		@PostMapping("/post/image/{employeeId}")
		public ResponseEntity<PostDto> uploadImage(
				@RequestParam("image") MultipartFile image,@PathVariable String employeeId
				) throws Exception{
			PostDto postDto =new PostDto();
String name=image.getOriginalFilename();
if(name.substring(name.lastIndexOf(".")).equalsIgnoreCase("pdf"))

{	
			String fileName = this.fileService.uploadImage(path+employeeId, image);
			postDto.setImageName(fileName);
			postDto.setEmployeeId(employeeId);
			postDto.setUrl("http://localhost:6065/api/get/image/"+fileName+"/"+employeeId);
		PostDto updatePost =	this.pservice.createPost(postDto);
			
			return new ResponseEntity<PostDto>(updatePost , HttpStatus.OK);
		
	
		}
		else {
			return new ResponseEntity(Map.of("Message","Only pdf formats accepts"),HttpStatus.OK);

		}
		}
		//Getting Documents By Image Name and EmployeeId.
		@GetMapping(value = "/get/image/{imageName}/{employeeId}" )
		public void downloadImage (@PathVariable("imageName") String imageName ,@PathVariable String employeeId,
		HttpServletResponse response) throws IOException {
			InputStream resource = this.fileService.getResource(path+employeeId, imageName);
			response.setContentType(MediaType.ALL_VALUE);
	         response.setHeader("Content-disposition","attachment; filename=\""+imageName+"\"");

		ServletOutputStream url=response.getOutputStream();
			StreamUtils.copy(resource, response.getOutputStream());
		}
		
		//Get Post By id .
		@GetMapping("/getPost/{postId}")
		public ResponseEntity<PostDto> getPostById(@PathVariable Integer postId){
		PostDto postDto =	this.pservice.getPostById(postId);
		return new ResponseEntity<PostDto>(postDto, HttpStatus.OK);
		}
	
//		@GetMapping("/downloadFile/{imageName}/{employeeId}")
//	    public ResponseEntity<Resource> downloadFile(@PathVariable("imageName") String imageName,@PathVariable String employeeId, HttpServletRequest request) throws FileNotFoundException {
//	        // Load file as Resource
//			InputStream resource =  this.fileService.getResource(path+employeeId, imageName);
//
//	        // Try to determine file's content type
//	        String contentType = null;
//	        try {
//
//	            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
//	        } catch (IOException ex) {
//	            return new ResponseEntity("Could not determine file type.",HttpStatus.OK);
//	        }
//
//	        // Fallback to the default content type if type could not be determined
//	        if(contentType == null) {
//	            contentType = "application/octet-stream";
//	        }
//
//	        return ResponseEntity.ok()
//	                .contentType(MediaType.parseMediaType(contentType))
//	                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
//	                .body(resource);
//	    }

		
		
	
		/*       The below code was for future          */
	
//	
//	//Get By Users 
//	@GetMapping("/usersPost/{userId}")
//	public ResponseEntity<List<PostDto>> getPostByUsers(@PathVariable Integer userId){
//	List<PostDto> posts = this.pservice.getPostByUsers(userId)	;
//	return new ResponseEntity<List<PostDto>>(posts, HttpStatus.OK);
//	}
	
	//Get All Post .
	//public ResponseEntity<List<PostDto>> getAllPost
	//localhost:8095/api/getAllPost?pageNumber=1&pageSize=3.
	//localhost:8095/api/getAllPost?pageNumber=1&pageSize=3&sortBy=postId
	//localhost:8095/api/getAllPost?pageNumber=1&pageSize=3&sortBy=postId&sortDir=desc
	
	@GetMapping("/getAllPost")
	public ResponseEntity<PostResponse> getAllPost(
			@RequestParam(value="pageNumber",defaultValue=PostServiceConstants.PAGE_NUMBER, required=false) Integer pageNumber,
			@RequestParam(value="pageSize",defaultValue=PostServiceConstants.PAGE_SIZE, required=false) Integer pageSize ,
			@RequestParam(value="sortBy" , defaultValue=PostServiceConstants.SORT_BY , required= false) String sortBy,
			@RequestParam(value = "sortDir" , defaultValue=PostServiceConstants.SORT_DIR, required= false)String sortDir
			){
//		List<PostDto> allPost = this.pservice.getAllPost(pageNumber , pageSize);
//		return new ResponseEntity<List<PostDto>>(allPost,HttpStatus.OK);
		PostResponse postResponse = this.pservice.getAllPost(pageNumber, pageSize,sortBy, sortDir);
	return new ResponseEntity<PostResponse>(postResponse , HttpStatus.OK);
		
	}
	
	//Delete post By id ;
	@DeleteMapping("/delete/{postId}")
	public UserApiResponse deletePost(@PathVariable Integer postId) {
		this.pservice.deletePost(postId);
		
		return new UserApiResponse("Post is successfully deleted" , true);
		
	}
	
//	//Updating Post By postId .
//	@PutMapping("/update/{postId}")
//	public ResponseEntity<PostDto> updatePost(@RequestBody PostDto postDto ,@PathVariable Integer postId) {
//	PostDto pdto =	this.pservice.updatePost(postDto, postId);
//	
//		
//		return new ResponseEntity<PostDto>(pdto , HttpStatus.OK);
//		
//	}
	
	
	
	
	
	
	//Getting data by keyWord .
	@GetMapping("/post/search/{keyword}")
	public ResponseEntity<List<PostDto>>  searchPostByTitle(
			@PathVariable("keyword") String keyword){
		List<PostDto> result = this.pservice.searchPosts(keyword);
		return new ResponseEntity<List<PostDto>>(result , HttpStatus.OK);
	}
	

}
