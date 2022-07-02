package com.arshaa.urp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

//import com.arshaa.entity.Permissions;
import com.arshaa.urp.entity.Modulemaster;
import com.arshaa.urp.entity.RoleModuleMap;
import com.arshaa.urp.entity.Rolesmaster;
import com.arshaa.urp.entity.Users;
import com.arshaa.urp.model.EmployeeName;
import com.arshaa.urp.model.Response;
import com.arshaa.urp.repository.ModuleMasterRepo;
//import com.arshaa.urp.repository.PermissionRepo;
import com.arshaa.urp.repository.RoleModuleRepository;
import com.arshaa.urp.repository.RoleRepository;
import com.arshaa.urp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	RoleRepository rRepo;
	@Autowired
	ModuleMasterRepo mRepo;
	@Autowired
	UserRepository uRepo;
	
	@Autowired
	@Lazy
	private RestTemplate template;
//@Autowired
//PermissionRepo pRepo;
	@Autowired
	RoleModuleRepository rmRepo;

	public ResponseEntity addRole(Rolesmaster newRole) {
		Response r = new Response<>();
		try {
			java.sql.Date tSqlDate = new java.sql.Date(newRole.getUpdatedOn().getTime());

			newRole.setUpdatedOn(tSqlDate);
			newRole.setRoleStatus(true);
			Rolesmaster newDataRolesmaster = rRepo.save(newRole);
			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(newDataRolesmaster);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getRoles() {
		Response r = new Response<>();
		try {

			List<Rolesmaster> newDataRolesmaster = rRepo.findAll();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newDataRolesmaster);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity updateRoleById(Integer roleId, Rolesmaster newRolemaster) {
		Response r = new Response<>();
		try {
			Rolesmaster master1 = rRepo.getById(roleId);
			master1.setRoleName(newRolemaster.getRoleName());
			master1.setRoleStatus(newRolemaster.isRoleStatus());
			master1.setUpdatedBy(newRolemaster.getUpdatedBy());
			master1.setUpdatedOn(newRolemaster.getUpdatedOn());
			master1.setPermission1(newRolemaster.getPermission1());
			master1.setPermission2(newRolemaster.getPermission2());
			master1.setPermission3(newRolemaster.getPermission3());
			master1.setPermission4(newRolemaster.getPermission4());
			master1.setPermission5(newRolemaster.getPermission5());
			master1.setPermission6(newRolemaster.getPermission6());
			master1.setPermission7(newRolemaster.getPermission7());
			master1.setPermission8(newRolemaster.getPermission8());
			master1.setPermission9(newRolemaster.getPermission9());
			master1.setPermission10(newRolemaster.getPermission10());

			Rolesmaster updatedmaster1 = rRepo.save(master1);
			System.out.println(updatedmaster1);

			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(updatedmaster1);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity DeleteRoleData(Integer roleId) {
		Response r = new Response<>();
		try {
			Rolesmaster master2 = rRepo.getById(roleId);

			rRepo.delete(master2);
			r.setStatus(true);
			r.setMessage("Deleted successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity addModule(Modulemaster newModule) {
		Response r = new Response<>();
		try {

			java.sql.Date tSqlDate = new java.sql.Date(newModule.getUpdatedOn().getTime());
			newModule.setUpdatedOn(tSqlDate);
			newModule.setModuleStatus(true);
			Modulemaster module = mRepo.save(newModule);

			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(module);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getModuleData() {
		Response r = new Response<>();
		try {

			List<Modulemaster> newModulemaster = mRepo.findAll();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newModulemaster);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	// Update Module By Module Id

	public ResponseEntity updateModuleBymoduleID(int moduleId, Modulemaster newModulemaster) {

		Response r = new Response<>();

		try {

			Modulemaster master = mRepo.getById(moduleId);
			master.setModuleName(newModulemaster.getModuleName());
			master.setModuleStatus(newModulemaster.isModuleStatus());
			Modulemaster updatedModule = mRepo.save(master);
			r.setStatus(true);
			r.setMessage("Updated Succesfully");
			r.setData(updatedModule);
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	// Delete Module By Module ID
	public ResponseEntity DeleteModuleDataByModuleID(int moduleId) {
		Response r = new Response<>();
		try {
			Modulemaster master = mRepo.getById(moduleId);
			mRepo.delete(master);
			r.setStatus(true);
			r.setMessage("Deleted successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity updateModuleById(int moduleId, Modulemaster newModulemaster) {
		Response r = new Response<>();
		try {

			RoleModuleMap rmp = rmRepo.getById(moduleId);
			int id = rmp.getModuleId();
			Modulemaster master = mRepo.getById(id);
			master.setModuleName(newModulemaster.getModuleName());
			master.setModuleStatus(newModulemaster.isModuleStatus());
			master.setUpdatedBy(newModulemaster.getUpdatedBy());
			master.setUpdatedOn(newModulemaster.getUpdatedOn());

			Modulemaster updatedmaster = mRepo.save(master);
			System.out.println(updatedmaster);
			r.setStatus(true);
			r.setMessage("updated successfully");
			return new ResponseEntity(r, HttpStatus.OK);

		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity DeleteModuleData(int moduleId) {
		Response r = new Response<>();
		try {
			RoleModuleMap rmp = rmRepo.getById(moduleId);
			int id = rmp.getModuleId();
			Modulemaster master = mRepo.getById(id);

			mRepo.delete(master);
			r.setStatus(true);
			r.setMessage("Deleted successfully");	
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity addUser(Users newuser) {
        String url="http://empService/emp/getEmployeeNameByEmployeeId/";

        Response r = new Response<>();
        try {
            EmployeeName name=template.getForObject(url+newuser.getEmployeeId(), EmployeeName.class);
            newuser.setUserName(name.getEmployeeName());
            if(uRepo.existsByEmployeeId(newuser.getEmployeeId())==true)
            {
                r.setStatus(true);
                r.setMessage("EmployeeId is already exist");
                return new ResponseEntity(r,HttpStatus.OK);
            }

            else {

                Users newUser1=uRepo.save(newuser);
                r.setStatus(true);
                r.setMessage("User added Successfull");
                r.setData(newUser1);

                return new ResponseEntity(r,HttpStatus.OK);
            }

        } catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity getUsersData() {
		Response r = new Response<>();
		try {

			List<Users> newUser = uRepo.findAll();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(newUser);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity updateUserById(String employeeId, Users updateUser) {
		Response r = new Response<>();

		try {

			Users u = uRepo.getByEmployeeId(employeeId);
			u.setEmployeeId(updateUser.getEmployeeId());
			u.setUpdatedBy(updateUser.getUpdatedBy());
			u.setRoleName(updateUser.getRoleName());
			u.setUserName(updateUser.getUserName());
			Users upUsers = uRepo.save(u);
			r.setStatus(true);
			r.setMessage("Updated successfully");
			r.setData(upUsers);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception
			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);

		}

	}

	public ResponseEntity deleteById(String employeeId) {
		Response r = new Response<>();
		try {
			Users user = uRepo.getByEmployeeId(employeeId);
			uRepo.delete(user);
			r.setStatus(true);
			r.setMessage("Deleted Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception
			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);

		}

	}

	public ResponseEntity mapRoleModule(RoleModuleMap newRM) {
		Response r = new Response<>();
		try {

			RoleModuleMap newData = rmRepo.save(newRM);
			r.setStatus(true);
			r.setMessage("Data added successfully");
			r.setData(newData);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage(e.getMessage());
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public ResponseEntity deleteByrMMId(int rMMId) {
		Response r = new Response<>();
		try {
			RoleModuleMap newData = rmRepo.getById(rMMId);
			rmRepo.delete(newData);
			r.setStatus(true);
			r.setMessage("Deleted Successfully");
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);

		}

	}

	public ResponseEntity getRoleById(int roleId) {
		Response r = new Response<>();
		try {
			Rolesmaster getRole = rRepo.getById(roleId);
			r.setStatus(true);
			r.setMessage("Data fetching");
			r.setData(getRole);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);

		}
	}

	public ResponseEntity getRoleModuleData() {
		Response r = new Response<>();
		try {

			List<RoleModuleMap> getRoleModulemaster = rmRepo.findAll();
			r.setStatus(true);
			r.setMessage("Data Fetching");
			r.setData(getRoleModulemaster);
			return new ResponseEntity(r, HttpStatus.OK);
		} catch (Exception e) {
// TODO: handle exception

			r.setStatus(false);
			r.setMessage("Server Error");
			return new ResponseEntity(r, HttpStatus.OK);
		}
	}

	public UserService() {
// TODO Auto-generated constructor stub
	}

// public ResponseEntity addPermission(Permissions newpermission) {
// Response pResponse = new Response<>();
// try {
//
// java.sql.Date tSqlDate = new java.sql.Date(newpermission.getUpdatedOn().getTime());
// newpermission.setUpdatedOn(tSqlDate);
//
// Permissions newDataRolesmaster=pRepo.save(newpermission);
// pResponse.setStatus(true);
// pResponse.setMessage("Data added successfully");
// pResponse.setData(newDataRolesmaster);
// return new ResponseEntity(pResponse,HttpStatus.OK);
// }
// catch (Exception e) {
// // TODO: handle exception
//
// pResponse.setStatus(false);
// pResponse.setMessage(e.getMessage());
// return new ResponseEntity(pResponse,HttpStatus.OK);
// }
//
//
// }
//// public ResponseEntity getPerMissions()
//// {
// Response pResponse=new Response<>();
// try {
//
//
// List<Permissions> newPermission=pRepo.findAll();
// pResponse.setStatus(true);
// pResponse.setMessage("Data Fetching");
// pResponse.setData(newPermission);
// return new ResponseEntity(pResponse,HttpStatus.OK);
// }
// catch (Exception e) {
// // TODO: handle exception
//
// pResponse.setStatus(false);
// pResponse.setMessage(e.getMessage());
// return new ResponseEntity(pResponse,HttpStatus.OK);
// }
// }
// public ResponseEntity updatePermission(int pId, Permissions updatePermission)
// {
// Response pResponse=new Response<>();
//
// try {
//
// Permissions u=pRepo.getById(pId);
// u.setUserId(updatePermission.getUserId());
// u.setUpdatedBy(updatePermission.getRoleId());
// u.setModuleId(updatePermission.getModuleId());
// u.setUpdatedOn(updatePermission.getUpdatedOn());
// u.setUpdatedBy(updatePermission.getUpdatedBy());
// u.setRead(updatePermission.isRead());
// u.setWrite(updatePermission.isWrite());
// u.setCreate(updatePermission.isCreate());
// u.setDelete(updatePermission.isDelete());
// u.setImports(updatePermission.isImports());
// u.setExport(updatePermission.isExport());
// Permissions upUsers=pRepo.save(u);
// pResponse.setStatus(true);
// pResponse.setMessage("Updated successfully");
// pResponse.setData(upUsers);
// return new ResponseEntity(pResponse,HttpStatus.OK);
// }
// catch (Exception e) {
// // TODO: handle exception
// pResponse.setStatus(false);
// pResponse.setMessage("Server Error");
// return new ResponseEntity(pResponse,HttpStatus.OK);
//
// }
//
// }
// public ResponseEntity deletePermission(int uId)
// {
// Response r=new Response<>();
// try {
// Permissions user=pRepo.getById(uId);
// pRepo.delete(user);
// r.setStatus(true);
// r.setMessage("Deleted Successfully");
// return new ResponseEntity(r,HttpStatus.OK);
// }
// catch (Exception e) {
// // TODO: handle exception
// r.setStatus(false);
// r.setMessage("Server Error");
// return new ResponseEntity(r,HttpStatus.OK);
//
// }
//
// }
}