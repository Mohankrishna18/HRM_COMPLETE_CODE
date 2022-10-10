export const CREATE_ROLE_ACTION = "CREATEROLE_ACTION";
export const UPDATE_ROLE_ACTION = "UPDATE_ROLE_ACTION";
export const DELETE_ROLE_ACTION = "DELETE_ROLE_ACTION";
export const GET_ROLE_ACTION = "GET_ROLE_ACTION";
export const GET_MODULE_ACTION = "GET_MODULE_ACTION";
export const CREATE_MODULE_ACTION = "CREATE_MODULE_ACTION";
export const DELETE_MODULE_ACTION = "DELETE_MODULE_ACTION"; 
export const GET_ROLE_MODULE_ACCESS_ACTION = "GET_ROLE_MODULE_ACCESS_ACTION";
export const GET_ACTIVE_ROLE_ACTION="GET_ACTIVE_ROLE_ACTION";
export const UPDATE_ROLE_MODULEACTION="UPDATE_ROLE_MODULEACTION";
export const CREATE_ROLE_MODULE_ACTION="CREATE_ROLE_MODULE_ACTION";
import axios from "../../../src/Uri";
export const createRole = (roles) =>(dispatch) => {
  axios
    .post("/login/createRole", roles)
    .then((response) =>{
      dispatch(getRole())
    console.log(response.data)})
    .catch((error) => {
      console.log(error);
    });
  type: CREATE_ROLE_ACTION;
  payload: roles;
};

export const updateRole = (id, roles) =>(dispatch) =>  {
  axios
    .put(`/login/updateRoleByRoleId/${id}`, roles)
    .then((response) => {
      console.log(response.data)
      dispatch(getRole());
    })
    .catch((error) => {
      console.log(error);
    });
  type: UPDATE_ROLE_ACTION;
  payload: roles;
};

export const deleteRole = (id) =>(dispatch)=> {
  axios
    .delete(`/login/deleteRoleById/${id}`)
    .then((response) =>{
      dispatch(getRole())
      console.log(response.data)
    } )
    .catch((error) => {
      console.log(error);
    });
  type: DELETE_ROLE_ACTION;
  // payload: roles;
};

export const getRole = (roles) => (dispatch) => {
 axios.get(`/login/getAllRoles`).then((response) => { 
    // console.log(response.data.data);
    dispatch({ type: GET_ROLE_ACTION, payload: response.data });
  }).catch((err) => {
      console.log(err.data);
    });
};

export const getRoleModuleAccess=(roleId)=>(dispatch)=>{

  axios.get(`/login/getRoleModuleAccessByRoleId/${roleId}`).then((response)=>{
    // console.log(response.data.modules);
    dispatch({ type: GET_ROLE_MODULE_ACCESS_ACTION, payload: response.data.modules });

  }).catch((err) => {
    console.log(err.data);
  });
};

export const getModuleAction=()=>(dispatch)=>{
  axios.get(`/login/getAllModules`).then((response)=>{
    // console.log(response.data);
    dispatch({ type: GET_MODULE_ACTION, payload: response.data });

  }).catch((err) => {
    console.log(err.data);
  });
};

export const getActiveRole=(roleId)=>(dispatch)=>{
  dispatch({ type: GET_ACTIVE_ROLE_ACTION, payload: roleId });
console.log(roleId);
}


export const createRMA=(roleModule)=>(dispatch)=>{
  

console.log(roleModule)

    axios
    .post(`/login/createAllModuleAccess`,roleModule)
    .then((response) =>{
console.log(response.data)
   dispatch(getModuleAction);
        dispatch({type:CREATE_ROLE_MODULE_ACTION,payload:response.data})
    console.log(response.data)})
    .catch((error) => {
      console.log(error);
    });
 
}

export const deleteRMA=(roles)=>(dispatch)=>{
  console.log(roles)
}

export const updateRoleModuleAccess = (id, roles) =>(dispatch) =>  {
  axios
    .put(`/login/updateRoleModule/${id}`, roles)
    .then((response) => {
      console.log(response.data)
      dispatch(getRole());
    })
    .catch((error) => {
      console.log(error);
    });
  type: UPDATE_ROLE_ACTION;
  payload: roles;
};
