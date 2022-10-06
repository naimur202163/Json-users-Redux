import { combineReducers } from "redux";
import { userReducers } from "./userReducer";

export const reducers = combineReducers({
  users: userReducers,
});
