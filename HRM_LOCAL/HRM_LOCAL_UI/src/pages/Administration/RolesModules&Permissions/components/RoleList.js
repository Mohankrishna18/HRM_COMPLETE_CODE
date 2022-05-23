import React, { useState } from 'react';
import FormToAddRole from './FormToAddRole';
import Role from './Role';


function RoleList() {
  const [roles, setRoles] = useState([]);


  const addRole = role => {
    if (!role.text || /^\s*$/.test(role.text)) {
      return;
    }

    const newRoles = [role, ...roles];

    setRoles(newRoles);
    console.log(...roles);
  };

  const updateRole = (roleId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setRoles(prev => prev.map(item => (item.id === roleId ? newValue : item)));
  };

  const removeRole = id => {
    const removedArr = [...roles].filter(role => role.id !== id);

    setRoles(removedArr);
  };

  const completeRole = id => {
    let updatedRoles = roles.map(role => {
      if (role.id === id) {
        role.isComplete = !role.isComplete;
      }
      return role;
    });
    setRoles(updatedRoles);
  };

  return (
    <>
  
      <FormToAddRole onSubmit={addRole} />
      <Role
        roles={roles}
        completeRole={completeRole}
        removeRole={removeRole}
        updateRole={updateRole}
      />
    </>
  );
}

export default RoleList;