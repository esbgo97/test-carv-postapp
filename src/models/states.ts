import { User } from "./auth";
import { Post } from "./main";

export interface AuthState {
  user: User | null;
  authenticated: boolean;
}

export interface AlertState {
  open: boolean;
  type: string;
  title: string | null;
  text: string;
}

export interface MainState {
  loading: boolean;
  alert: AlertState;
}

export interface PostState {
  posts: Post[];
  post: Post | null;
}
