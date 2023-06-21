import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getFirestore} from "redux-firestore"
import { authReducer } from "./reducers/authReducer";
import { mainReducer } from "./reducers/mainReducer";
import { postReducer } from "./reducers/postReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  posts: postReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({
    
    getFirestore
  }))
);
