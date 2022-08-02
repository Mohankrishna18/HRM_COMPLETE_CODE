package com.arshaa.urp.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;//import com.arshaa.entity.Permissions;
import com.arshaa.urp.entity.Modulemaster;
import com.arshaa.urp.entity.RoleModuleMap;
import com.arshaa.urp.entity.Rolesmaster;
import com.arshaa.urp.entity.Users;
import com.arshaa.urp.model.Response;
import com.arshaa.urp.repository.RoleRepository;
import com.arshaa.urp.service.UserService;

@RequestMapping("/user")
@RestController
public class Controller {
	@Autowired
	RoleRepository repo;
	@Autowired
	UserService serv;

	/*
	 * API TO ADD ROLE http://localhost:8989/user/addRole PAYLOAD: {
	 * "roleName":"CEO", "updatedBy":1 }
	 */
	@PostMapping("/addRole")
	public ResponseEntity addRole(@RequestBody Rolesmaster newRole) {
		return serv.addRole(newRole);
	}

	/*
	 * API TO GET ALL ROLES http://localhost:8989/user/getAllRoles
	 */
	@GetMapping("/getAllRoles")
	public ResponseEntity getAllRoles() {
		return serv.getRoles();
	}
	@PutMapping("/UpdateRoleId/{roleId}")
	public ResponseEntity updateRoleById(@PathVariable int roleId,@RequestBody Rolesmaster newRolemaster) {

		return serv.updateRoleById(roleId, newRolemaster);
	}
	@DeleteMapping("/deleteRoleData/{roleId}")
	public ResponseEntity DeleteRoleData(@PathVariable int roleId) {
		return serv.DeleteRoleData(roleId);
	}

	/*
	 * API TO ADD MODULE http://localhost:8989/user/addRole PAYLOAD: {
	 * "moduleName":"create", "updatedBy":1 }
	 */
	@PostMapping("/addModule")
	public ResponseEntity addModule(@RequestBody Modulemaster newModule) {
		return serv.addModule(newModule);
	}

	/*
	 * http://localhost:8989/user/getModuleData
	 */
	@GetMapping("/getModuleData")
	public ResponseEntity getModuleData() {
		return serv.getModuleData();
	}

	@PutMapping("/updateModuleById/{moduleId}")
	public ResponseEntity updateModuleById(@PathVariable int moduleId, @RequestBody Modulemaster newModulemaster) {
		return serv.updateModuleById(moduleId, newModulemaster);
	}

	@DeleteMapping("/deleteModuleData/{moduleId}")
	public ResponseEntity DeleteModuleData(@PathVariable int moduleId) {
		return serv.DeleteModuleData(moduleId);
	}

	/*
	 * API TO ADD USERS http://localhost:8989/user/addUser PAYLOAD: {
	 * "userName":"Sandhya", "employeeId":1, "updatedBy":1 }
	 */
	@PostMapping("/addUser")
	public ResponseEntity addUser(@RequestBody Users newuser) {
		return serv.addUser(newuser);
	} /*
		 * http://localhost:8989/user/getUsersData
		 */

	@GetMapping("/getUsersData")
	public ResponseEntity getUsersData() {
		return serv.getUsersData();
	}

	@PutMapping("/updateUserById/{employeeId}")
	public ResponseEntity updateUserById(@PathVariable String employeeId, @RequestBody Users updateUser) {
		return serv.updateUserById(employeeId, updateUser);
	}

	@DeleteMapping("/deleteUserById/{employeeId}")
	public ResponseEntity deleteById(@PathVariable String employeeId) {
		return serv.deleteById(employeeId);
	}

	/*
	 * POST API TO MAP A ROLE TO THE ACCESSSABLE MODULESS
	 * http://localhost:8989/user/mapRoleModule PAYLOAD: { "moduleId":1, "roleId":1
	 * }
	 *
	 */
	@PostMapping("/mapRoleModule")
	public ResponseEntity mapRoleModule(@RequestBody RoleModuleMap newRM) {
		return serv.mapRoleModule(newRM);
	}

	/*
	 * DELETE API TO DELETE ROLE ACCESS BY RMMID
	 */
	@DeleteMapping("/deleteByrMMId")
	public ResponseEntity deleteByrMMId(@RequestParam int rMMId) {
		return serv.deleteByrMMId(rMMId);
	} /*
		 * GET API TO GET THE ACCESSABLE MODULES OF THE ROLES
		 */

	@GetMapping("/getAccessableRoleModules")
	public ResponseEntity getRoleModuleData() {
		return serv.getRoleModuleData();
	}

	@GetMapping("/getRoleByRoleId/{roleId}")
	public Optional<Rolesmaster> getRoleById(@PathVariable int roleId) {
		return repo.findById(roleId);
	}

	@PutMapping("/UpdateModuleById/{moduleId}")
	public ResponseEntity updateModuleBymoduleID(@PathVariable int moduleId,@RequestBody Modulemaster newModulemaster) {

		return serv.updateModuleBymoduleID(moduleId, newModulemaster);
	}
	
	@DeleteMapping("/DeleteModuleDataByModuleID/{moduleId}")
	public ResponseEntity DeleteModuleDataByModuleID(@PathVariable int moduleId ) {

		return serv.DeleteModuleDataByModuleID(moduleId);
	}
	
	
	
//	@PostMapping("/addPermission")
//	public ResponseEntity addPermission(@RequestBody Permissions newpermission)
//	{
//		return serv.addPermission(newpermission);
//	}
//	@GetMapping("/getPermissions")
//	public ResponseEntity getPerMissions()
//	{
//		return serv.getPerMissions();
//	}
//	
//	@PutMapping("/updatePermissionById/{Id}")
//	public ResponseEntity updatePermission( @PathVariable int uId,@RequestBody Permissions permission) {
//		return serv.updatePermission(uId, permission);
//	}
//	@DeleteMapping("deletePermissionById/{id}")
//	public ResponseEntity deleteByPermiision(int uId) {
//		return serv.deletePermission(uId);
//	}
// @PostMapping("/addPermission")
// public ResponseEntity addPermission(@RequestBody Permissions newpermission)
// {
// return serv.addPermission(newpermission);
// }
// @GetMapping("/getPermissions")
// public ResponseEntity getPerMissions()
// {
// return serv.getPerMissions();
// }
//
// @PutMapping("/updatePermissionById/{Id}")
// public ResponseEntity updatePermission( @PathVariable int uId,@RequestBody Permissions permission) {
// return serv.updatePermission(uId, permission);
// }
// @DeleteMapping("deletePermissionById/{id}")
// public ResponseEntity deleteByPermiision(int uId) {
// return serv.deletePermission(uId);
// }
}
