package com.arshaa.documentUpload_Service.service;

import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FilesStorageService {
	 public void init(String employeeId);
//	 public void save(String id, Path root);
  public Resource load(String filename,String employeeId);

  public void deleteAll(String employeeId);

  public Stream<Path> loadAll(String employeeId);
  public void save(MultipartFile file, Path root);
}