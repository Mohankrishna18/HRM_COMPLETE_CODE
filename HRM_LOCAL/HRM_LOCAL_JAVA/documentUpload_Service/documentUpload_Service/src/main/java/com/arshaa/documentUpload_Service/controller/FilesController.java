package com.arshaa.documentUpload_Service.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.arshaa.documentUpload_Service.message.ResponseMessage;
import com.arshaa.documentUpload_Service.service.FilesStorageService;





@Controller
@RequestMapping("/documentUpload")
//@CrossOrigin("http://localhost:8081")
public class FilesController {

@Autowired
FilesStorageService storageService;

@PostMapping("/uploadFile/{onboardingId}")
public ResponseEntity<ResponseMessage> uploadFile(@PathVariable String onboardingId, @RequestParam("file") MultipartFile file) throws IOException {
  String message = "";
	final Path root = Paths.get(onboardingId);
  try {
//  	final Path root = Paths.get(id);
  	System.out.print(Files.exists(root));
  	System.out.println(root);

  	if(!Files.exists(root))
  	{
  		Files.createDirectory(root);
    	  	 Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));  	  	
  	}
  	else {
  		 Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
   	  	storageService.save(file,root);

  	}
	
    message = "Uploaded the file successfully: " + file.getOriginalFilename();
    return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
  } catch (Exception e) {
    message = e.getMessage()+ "Could not upload the file: " + file.getOriginalFilename() + "!";
    return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
  }
}

//@RequestMapping(value = "/upload/local", method = RequestMethod.POST)
//public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile file) {
//    try {
//        File path = new File("C:\\temp\\images\\" + file.getOriginalFilename());
//        path.createNewFile();
//        FileOutputStream output = new FileOutputStream(path);
//        output.write(file.getBytes());
//        output.close();
//        return new ResponseEntity<>("File is uploaded successfully!", HttpStatus.OK);
//    } catch (Exception e) {
//        return new ResponseEntity<>(e.getMessage(), HttpStatus.MULTI_STATUS);
//    }
//}
//


//@GetMapping("/files")
//public ResponseEntity<List<FileInfo>> getListFiles() {
//  List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
//    String filename = path.getFileName().toString();
//    String url = MvcUriComponentsBuilder
//        .fromMethodName(FilesController.class, "getFile", path.getFileName().toString()).build().toString();
//
//    return new FileInfo(filename, url);
//  }).collect(Collectors.toList());
//
//  return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
//}
//
//@GetMapping("/files/{filename:.+}")
//public ResponseEntity<Resource> getFile(@PathVariable String filename) {
//  Resource file = storageService.load(filename);
//  return ResponseEntity.ok()
//      .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
//}


//Save the uploaded file to this folder
private static String UPLOADED_FOLDER = "C:/temp//";

@GetMapping("/")
public String index() {
    return "upload";
}

@PostMapping("/upload") // //new annotation since 4.3
public String singleFileUpload(@RequestParam("id") String id,
                               @RequestParam("file") MultipartFile file,
                               RedirectAttributes redirectAttributes) {

    if (file.isEmpty()) {
        redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
        return "redirect:uploadStatus";
    }


    try
    {
        Long userId;
        byte[] bytes = file.getBytes();
        String filename =file.getOriginalFilename();
        int pos=filename.lastIndexOf(".");
        System.out.println(pos);
        if (pos>0)
        {
            filename=filename.substring(0, pos);
        }
        System.out.println(id);
        File folder=new File(id);
        System.out.println(folder);
        folder.mkdir();


        Path path = Paths.get("C:\temp\\"+filename+"\\"+ file.getOriginalFilename());
        System.out.println(UPLOADED_FOLDER);
        Files.write(path, bytes);




        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded '" + file.getOriginalFilename() + "'");
    } 
    catch (IOException e) {
        e.printStackTrace();
    }
    return "redirect:/uploadStatus";
    }


}
