package com.arshaa.documentUpload_Service.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FilesStorageServiceImpl implements FilesStorageService {

	@Override
	public void init(String employeeId) {
		// TODO Auto-generated method stub
		
	}



	@Override
	public Resource load(String filename, String employeeId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAll(String employeeId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Stream<Path> loadAll(String employeeId) {
		// TODO Auto-generated method stub
		return null;
	}

////	String empId="OBD00121";
//	private Path root = Paths.get("OBD00121");
//
//
//@Override
//  public void init(String employeeId) {
//    try {
//    	final Path root=Paths.get(employeeId);
//        Files.createDirectory(root);
//    } catch (IOException e) {
//      throw new RuntimeException("Could not initialize folder for upload!");
//    }
//  }
//
  @Override
  public void save(MultipartFile file, Path root) {
    try {    
	Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
    } catch (Exception e) {
      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
    }
  }
//
//  @Override
//  public Resource load(String filename, String employeeId) {
//    try {
//    	Path root=Paths.get(employeeId);
//
//      Path file = root.resolve(filename);
//      Resource resource = new UrlResource(file.toUri());
//
//      if (resource.exists() || resource.isReadable()) {
//        return resource;
//      } else {
//        throw new RuntimeException("Could not read the file!");
//      }
//    } catch (MalformedURLException e) {
//      throw new RuntimeException("Error: " + e.getMessage());
//    }
//  }
//
//  @Override
//  public void deleteAll(String employeeId) {
//  	Path root=Paths.get(employeeId);
//    FileSystemUtils.deleteRecursively(root.toFile());
//  }
//
//  @Override
//  public Stream<Path> loadAll(String employeeId) {
//    try {
//      	Path root=Paths.get(employeeId);
//      return Files.walk(root, 1).filter(path -> !path.equals(root)).map(root::relativize);
//    } catch (IOException e) {
//      throw new RuntimeException("Could not load the files!");
//    }
//  }

}

