import { Post } from "../../models/main";

export const LOAD_POSTS = "LOAD_POSTS";
export const CREATE_POST = "CREATE_POST";
export const LOAD_POST = "LOAD_POST";
export const ADD_COMMENT = "LOAD_POST";

export interface LoadPostsAction {
  type: typeof LOAD_POSTS;
  payload: Post[];
}

export interface LoadPostAction {
  type: typeof LOAD_POST;
  payload: Post;
}

export interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

export interface AddCommentAction {
  type: typeof CREATE_POST;
  payload: Comment;
}

export type PostActions =
  | AddCommentAction
  | LoadPostsAction
  | LoadPostAction
  | CreatePostAction;
