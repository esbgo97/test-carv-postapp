import { Dispatch } from "redux";
import { Post } from "../../models/main";
import { CREATE_POST } from "../types/posts";
import { LOAD_POST, LOAD_POSTS } from "../types/posts";
import {
  ADD_COMMENT,
  GET_POSTS,
  GET_POST_BY_ID,
  SAVE_POST,
} from "../../services/PostsService";

export const loadPosts = () => {
  return async (dispatch: Dispatch) => {
    const resp = await GET_POSTS();
    if (resp != null) {
      dispatch({ type: LOAD_POSTS, payload: resp });
    }
  };
};

export const createPost = (post: Post) => {
  return async function (dispatch: Dispatch) {
    const resp = await SAVE_POST(post);
    dispatch({ type: CREATE_POST, payload: resp });
  };
};

export const loadPost = (postId: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await GET_POST_BY_ID(postId);
    dispatch({ type: LOAD_POST, payload: resp });
  };
};

export const addComment = (postId: string, comment: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await ADD_COMMENT(postId, comment);
    // dispatch({type })
    console.log({ resp });
  };
};
