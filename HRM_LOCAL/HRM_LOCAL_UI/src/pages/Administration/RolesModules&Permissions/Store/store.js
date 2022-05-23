import { configureStore } from '@reduxjs/toolkit';
import roleSlice from '../slices/roleSlice';
import todoReducer from '../slices/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    role: roleSlice
  },
});
