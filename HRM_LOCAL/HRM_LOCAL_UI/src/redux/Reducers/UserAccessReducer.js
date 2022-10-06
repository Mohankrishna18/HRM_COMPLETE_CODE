import {
  CREATE_ROLE_ACTION,
  UPDATE_ROLE_ACTION,
  DELETE_ROLE_ACTION,
  GET_ROLE_ACTION,
  GET_ROLE_MODULE_ACCESS_ACTION,
  GET_MODULE_ACTION,
  GET_ACTIVE_ROLE_ACTION,
  CREATE_ROLE_MODULE_ACTION,
} from "../actions/UserAccessActions";

const initialState = {
  roleList: [],
  userAccessList: [],
  moduleList: [],
  rolemoduleCreation:false,
  role:0,
};

export const UserAccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROLE_ACTION:
      return { ...state, roleList: action.payload };
    case UPDATE_ROLE_ACTION:
      return { ...state, roleList: action.payload };
    case GET_ROLE_ACTION:
      console.log(action.payload);
      return { ...state, roleList: action.payload };
    case DELETE_ROLE_ACTION:
      return { ...state, roleList: action.payload };
    case GET_ROLE_MODULE_ACCESS_ACTION:
      return { ...state, userAccessList: action.payload };
    case GET_MODULE_ACTION:
        return { ...state, moduleList: action.payload };  
    case GET_ACTIVE_ROLE_ACTION:
        return { ...state, role: action.payload };    
    case CREATE_ROLE_MODULE_ACTION:
      return {...state,rolemoduleCreation:action.payload.status} ;   
    default:
      return state;
  }
};
