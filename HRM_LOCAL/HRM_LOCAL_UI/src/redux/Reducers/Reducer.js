import { combineReducers } from "redux";
import {UserAccessReducer} from "./UserAccessReducer";
import { todoReducer1 } from "../../pages/Tasks/reducers/reducer";
const reducers = combineReducers({
    roles:UserAccessReducer,
    todos:todoReducer1
});
export default reducers;