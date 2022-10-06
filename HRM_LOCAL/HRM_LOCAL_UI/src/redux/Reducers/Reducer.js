import { combineReducers } from "redux";
import {UserAccessReducer} from "./UserAccessReducer";
const reducers = combineReducers({
    roles:UserAccessReducer,
});
export default reducers;