import { PostState } from "../../models/states";
import { LOAD_POST, LOAD_POSTS, PostActions } from "../types/posts";

const initialState: PostState = {
  posts: [],
  post: null,
};

export const postReducer = (
  state: PostState = initialState,
  action: PostActions
) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case LOAD_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};
