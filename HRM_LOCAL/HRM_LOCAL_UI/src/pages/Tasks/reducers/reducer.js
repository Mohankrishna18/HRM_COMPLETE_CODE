import { ADD_TASK, GET_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/TaskAction";

const initialState = {
  taskList: [],
  list: [],
  DELETE_TASK:true,
  status:false
};

export const todoReducer1 = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TASK:
      return { ...state, list: action.info };
      case GET_TASK:
        console.log(action.payload)
        return { ...state, taskList: action.payload,status:action.status };
      case UPDATE_TASK:
        console.log(action.status)
        return { ...state, taskList: action.info,status:action.status };
      case DELETE_TASK:
        return { ...state, taskList: action.payload };
    default:
        return state;
  }
};
