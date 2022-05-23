import React, { useState, useEffect} from 'react';
import FormToAddRole from './FormToAddRole';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import axios from '../../../../Uri';

const Role = ({ roles, completeRole, removeRole, updateRole }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [dataVal, setDataVal] = useState([]);

  useEffect(() => {
 
    axios.get("/user/getAllRoles")
      .then((res) => {
        // setInput('');
        
        console.log(res.data.data);
        setDataVal(res.data.data)
        // .catch((err) => console.log(err));
        
      })

  }, []);

  const submitUpdate = value => {
    updateRole(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <FormToAddRole edit={edit} onSubmit={submitUpdate} />;
  }

  return dataVal.map((role, index) => (
    
    <div
      className={role.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={role.id} onClick={() => completeRole(role.id)}>
        {role.roleName}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeRole(role.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: role.id, value: role.roleName })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Role;