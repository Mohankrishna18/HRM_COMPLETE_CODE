import { createSlice } from '@reduxjs/toolkit';

const getInitialRole = () => {
  // getting todo list
  const localRoleList = window.localStorage.getItem('roleList');
  // if todo list is not empty
  if (localRoleList) {
    return JSON.parse(localRoleList);
  }
  window.localStorage.setItem('roleList', []);
  return [];
};

const initialValue = {
  filterStatus: 'all',
  roleList: getInitialRole(),
};

export const roleSlice = createSlice({
  name: 'role',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.roleList.push(action.payload);
      const roleList = window.localStorage.getItem('roleList');
      if (roleList) {
        const roleListArr = JSON.parse(roleList);
        roleListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('roleList', JSON.stringify(roleListArr));
      } else {
        window.localStorage.setItem(
          'roleList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateTodo: (state, action) => {
      const roleList = window.localStorage.getItem('roleList');
      if (roleList) {
        const roleListArr = JSON.parse(roleList);
        roleListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem('roleList', JSON.stringify(roleListArr));
        state.roleList = [...roleListArr];
      }
    },
    deleteTodo: (state, action) => {
      const roleList = window.localStorage.getItem('roleList');
      if (roleList) {
        const roleListArr = JSON.parse(roleList);
        roleListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            roleListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('roleList', JSON.stringify(roleListArr));
        state.roleList = roleListArr;
      }
    },
    updateFilterStatus1: (state, action) => {
      state.filterStatus = action.payload;
    },
    
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus1, toggleTodo } =
  roleSlice.actions;
export default roleSlice.reducer;
