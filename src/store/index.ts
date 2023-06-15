import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { mainReducer } from "./reducers/mainReducer";
import { postReducer } from "./reducers/postReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  posts: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
