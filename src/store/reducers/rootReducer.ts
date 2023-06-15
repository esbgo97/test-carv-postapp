import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { mainReducer } from "./mainReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  posts: postReducer,
});
