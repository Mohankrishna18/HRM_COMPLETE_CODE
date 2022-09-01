package com.arshaa.emp.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.UUID;
import java.nio.file.*;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.io.Files;

@Service
public class FileServiceImpl implements FileService{

	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {

		//File name
		String name=file.getOriginalFilename();
		
		//random name generate file
		String randomId=UUID.randomUUID().toString();
		String fileName1=randomId.concat(name.substring(name.lastIndexOf(".")));
		//File Path
		String filePath=path+File.separator ;
		
		//create folder if not created
		File f=new File(path);
		if(!f.exists())
		{
			f.mkdir();
		}
		//file copy
	//	Files.copy(file.getInputStream(), Paths.get(filePath));
		 //Files.copy(file.getInputStream(), Paths.get(path));
		return name;
	}

	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}
