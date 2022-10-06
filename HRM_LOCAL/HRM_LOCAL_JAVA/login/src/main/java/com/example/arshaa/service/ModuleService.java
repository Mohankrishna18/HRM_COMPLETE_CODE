package com.example.arshaa.service;

import java.util.List;

import com.arshaa.responses.ModuleAccess;
import com.example.arshaa.entity.Modules;

public interface ModuleService {

	public Modules createModule(Modules module);
	public Modules updateModule(Modules module,int moduleId);
	public Modules getModuleById(int moduleId);
	public void deleteModuleById(int moduleId);
	public List<ModuleAccess> getAllModules();
	}
