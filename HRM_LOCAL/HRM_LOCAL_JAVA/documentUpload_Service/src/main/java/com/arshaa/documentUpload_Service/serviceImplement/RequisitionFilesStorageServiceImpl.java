package com.arshaa.documentUpload_Service.serviceImplement;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class RequisitionFilesStorageServiceImpl implements RequisitionFilesStorageService{
	
	private final Path root = Paths.get("uploads") 	;

	@Override
	public void saveRequisition(String documentPath, MultipartFile file) throws IOException {
		String finalPath = documentPath+File.separator+file.getOriginalFilename();
		File f = new File(documentPath);
		if(!f.exists()) {
			f.mkdir();
		}
		Files.copy(file.getInputStream(), Paths.get(finalPath));
		
	}

	@Override
	public void init() {
		try {
		      Files.createDirectory(root);
		    } catch (IOException e) {
		      throw new RuntimeException("Could not initialize folder for upload!");
		    }
		
	}

	@Override
	public Stream<Path> loadAll() {
		try {
		      return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
		    } catch (IOException e) {
		      throw new RuntimeException("Could not load the files!");
		    }
	}

	
}
