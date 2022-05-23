import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../../Uri'

function FormToAddRole(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
  const notify=()=>toast.success("Role added successfully");

  const inputRef = useRef(null);

  const initialValues ={
    roleName: input
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    notify();
    e.preventDefault();
    console.log(e)
    const res = axios.post('/user/addRole',initialValues)
      
      // roleName: input.data
      
    .then(res=>{
      console.log(res.data);
    })
    window.location.reload()
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a Role'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add Role
          </button>
        </>
      )}
    </form>
  );
}

export default FormToAddRole;