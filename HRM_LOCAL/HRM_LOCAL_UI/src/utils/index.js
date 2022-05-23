import { intersection } from "lodash";

export function isLoggedIn() {
  let isLoggedIn = false;
  let userStatus = sessionStorage.getItem("userdata");
  userStatus = JSON.parse(userStatus);
  console.log("use status is" + userStatus);
  if (userStatus) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  return isLoggedIn; //return true if login is succesful
}

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes) {
	//1: Identify what is the role of person who is loggedin
	let allowedRoutes, permissionsArray;
	let loggedInUserType = 	JSON.parse(sessionStorage.getItem('userdata')).data.userType;
	//2: now identify which routes are allowed for this usetype
	
	allowedRoutes = routes.filter((route) => {
		let permissionsArray = route.permission;
		return permissionsArray.includes(loggedInUserType);
	})
	return allowedRoutes;
}
