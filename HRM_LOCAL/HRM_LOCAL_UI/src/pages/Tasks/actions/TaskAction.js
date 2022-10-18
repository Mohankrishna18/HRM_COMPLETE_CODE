import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const GET_TASK = 'GET_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK ='DELETE_TASK';
export const GET_PROJECT ='GET_PROJECT'

export const addTodo = (data) =>(dispatch) =>{
  console.log(data);
  axios
    .post('http://localhost:6065/task/createNewTask', data)
    .then((res) => {
      console.log(res);
      dispatch(getTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getTodo = () => (dispatch) => {
 
  axios.get("http://localhost:6065/task/getTasks")
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: GET_TASK, payload:res.data.data,status:res.data.status });
      console.log("hello")
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateTodo =(data,id) =>(dispatch)=>{
  console.log(data)
axios.put(`http://localhost:6065/task/updateTask/${id}`,data)
  .then((res) => {
    console.log(res);
    dispatch({ type:UPDATE_TASK ,status:res.data.status });
   
  })
  .catch((err) => {
    console.log(err);
  });
}
export const deleteTodo =(id) =>{
  axios.delete(`http://localhost:6065/task/deleteTask/${id}`)
  .then((res) => {
    console.log(res);
   
  })
  .catch((err) => {
    console.log(err);
  });
}

//changes on 15-10-22
export const getAllProjects = () => (dispatch) => {
 
  axios.get("/clientProjectMapping/getAllProjects")
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: GET_PROJECT, payload:res.data.data });
    console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};