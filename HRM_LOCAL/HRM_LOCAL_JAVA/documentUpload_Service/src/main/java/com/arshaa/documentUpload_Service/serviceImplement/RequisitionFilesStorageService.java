package com.arshaa.documentUpload_Service.serviceImplement;

import java.io.IOException;
import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.web.multipart.MultipartFile;

public interface RequisitionFilesStorageService {

	public void saveRequisition(String path, MultipartFile file) throws IOException;
	
	public void init();
	
	public Stream<Path> loadAll();
}
