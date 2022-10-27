import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import  {applyMiddleware } from 'redux';
import { createStore } from "redux";
import reducers from '../redux/Reducers/Reducer';
import logger from "redux-logger";
import { todoReducer1 } from '../pages/Tasks/reducers/reducer';

import {UserAccessReducer} from './Reducers/UserAccessReducer';
const middlewares = [logger];

 const store=configureStore({
    reducer: {
        roles:UserAccessReducer,
        todos:todoReducer1
    }

 },applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 export default store;


