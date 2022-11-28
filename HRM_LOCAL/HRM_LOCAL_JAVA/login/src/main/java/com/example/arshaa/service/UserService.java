package com.example.arshaa.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.arshaa.entity.EmployeeLogin;
import com.example.arshaa.entity.OnBoardingEmployeeLogin;
import com.example.arshaa.model.GetMail;
import com.example.arshaa.model.PreOnboard;
import com.example.arshaa.model.ResetPassword;
import com.example.arshaa.model.Response;
import com.example.arshaa.model.UserModel;
import com.example.arshaa.model.UserServiceEmail;
import com.example.arshaa.repository.EmailRepository;
import com.example.arshaa.repository.UserRepository;

@Service
public class UserService {
	@Autowired(required = true)
	private UserRepository repository;

	@Autowired(required = true)
	private EmailRepository repo;

	public ResponseEntity updatePasswordByUsername(ResetPassword reset) {
		Response response=new Response();
		try {
			System.out.println(reset.getOldPassword());
			EmployeeLogin returnedUser = repository.findByPassword(reset.getOldPassword());

			if (!Objects.isNull(returnedUser)) {

//				if (returnedUser.getPassword().equals(reset.getOldPassword())) {
//					// Date cpDate = new Date(reset.getChangePasswordDate().getTime());
//					// returnedUser.setPassword(returnedUser.getPassword());
//					// reset.setChangePasswordDate(cpDate);
//					returnedUser.setPassword(reset.getConformNewPassword());
//					repository.save(returnedUser);
//					return new ResponseEntity(returnedUser, HttpStatus.OK);
//				} else {
//					return new ResponseEntity("Enter valid UserName", HttpStatus.OK);
//				}
				returnedUser.setPassword(reset.getConfirmNewPassword());
				System.out.println(reset.getConfirmNewPassword());
				repository.save(returnedUser);
				response.setStatus(true);
				response.setMessage("Password reset successfull");
				response.setData(returnedUser);
				return new ResponseEntity(response, HttpStatus.OK);
			} else {
				response.setStatus(false);
				response.setMessage("Enter Valid Old Password");
				return new ResponseEntity(response, HttpStatus.OK);
			}
		} catch (Exception e) {
			response.setStatus(true);
			response.setMessage("Something went wrong");
			return new ResponseEntity(response, HttpStatus.OK);
		}
	}

	public ResponseEntity<UserModel> getUsersByEmployeeId(String employeeId, String password) {
		Response<UserModel> response = new Response<UserModel>();
		// List<User> dataUser=userRepo.findAll();
		UserModel um = new UserModel();
		try {
			Optional<EmployeeLogin> user = repository.getByEmployeeId(employeeId);

			if (user.isPresent()) {
				if (user.get().getUserStatus().equalsIgnoreCase("active")) {
					if (user.get().getPassword().equals(password)) {

						EmployeeLogin u = repository.getById(user.get().getEmployeeloginId());
						u.setFlag(true);
						repository.save(u);
						response.setStatus(true);
						response.setMessage("Login Success");
						if (response.isStatus() == true) {
							EmployeeLogin user1 = repository.findByEmployeeId(employeeId);
							um.setEmployeeId(user1.getEmployeeId());
							um.setUserType(user1.getUserType());
						}
						response.setData(um);
						return new ResponseEntity(response, HttpStatus.OK);
					}

					else {
						response.setStatus(false);
						response.setMessage("Invalid Mail or Password");
						return new ResponseEntity(response, HttpStatus.OK);
					}
				} else {
					response.setStatus(false);
					response.setMessage("Login Expired");
					return new ResponseEntity(response, HttpStatus.OK);
				}

			} else {
				response.setStatus(false);
				response.setMessage("Enter valid emailId");
				return new ResponseEntity(response, HttpStatus.OK);
			}
		} catch (Exception e) {
			response.setStatus(false);
			response.setMessage("Something went wrong please try again");
			return new ResponseEntity(response, HttpStatus.OK);
		}
	}

	public void saveUsers(EmployeeLogin user) {
		try {
			// user.setFlag(true);
			user.setUserStatus("Active");
			repository.save(user);
			new ResponseEntity("User Added Successfully", HttpStatus.OK);
		} catch (Exception e) {
			new ResponseEntity(e.getMessage(), HttpStatus.OK);
		}

	}

	public void addUsers(OnBoardingEmployeeLogin user) {
		try {
			// user.setFlag(true);

			repo.save(user);
			new ResponseEntity("User Added Successfully", HttpStatus.OK);
		} catch (Exception e) {
			new ResponseEntity(e.getMessage(), HttpStatus.OK);
		}

	}

	// changes by MURALI MIRIYALA

	public String makeLoginsInActive(String employeeId) {
		EmployeeLogin emp = repository.findByEmployeeId(employeeId);
		emp.setUserStatus("InActive");
		repository.save(emp);
		return "Success";
	}

	public ResponseEntity<PreOnboard> getUsersByEmailId(String email, String password) {
		Response<PreOnboard> response = new Response<PreOnboard>();
		// List<User> dataUser=userRepo.findAll();
		PreOnboard um = new PreOnboard();
		try {
			Optional<OnBoardingEmployeeLogin> user = repo.getByEmail(email);

			if (user.isPresent()) {
				if (user.get().getPassword().equals(password)) {

					response.setStatus(true);
					response.setMessage("Login Success");
					if (response.isStatus() == true) {
						OnBoardingEmployeeLogin u = repo.getById(user.get().getOnboardingemployeeloginId());
						um.setUserType(u.getUserType());
						um.setEmail(u.getEmail());
						um.setOnboardingId(u.getOnboardingId());
					}
					response.setData(um);
					return new ResponseEntity(response, HttpStatus.OK);
				}

				else {
					response.setStatus(false);
					response.setMessage("Invalid Mail or Password");
					return new ResponseEntity(response, HttpStatus.OK);
				}

			} else {
				response.setStatus(false);
				response.setMessage("Enter valid emailId");
				return new ResponseEntity(response, HttpStatus.OK);
			}
		} catch (Exception e) {
			response.setStatus(false);
			response.setMessage("Something went wrong please try again");
			return new ResponseEntity(response, HttpStatus.OK);
		}
	}

	public EmployeeLogin findByUserType(@PathVariable String userType) {
		EmployeeLogin empLogin = repository.findByUserType(userType);
		return empLogin;
	}

	public EmployeeLogin findByEmail(@PathVariable String email) {
		EmployeeLogin empEmail = repository.findByEmail(email);
		return empEmail;
	}

	public UserServiceEmail findByTypeOfUser(@PathVariable String userType) {
		List<EmployeeLogin> eLogin = repository.findEmployeeLoginByUserType(userType);
		UserServiceEmail getEmail = new UserServiceEmail();
		List<GetMail> mails = new ArrayList<>();
		eLogin.forEach(e -> {
			GetMail email = new GetMail();
			email.setEmail(e.getEmail());
			mails.add(email);
			getEmail.setMails(mails);
		});

		return getEmail;
	}

}
