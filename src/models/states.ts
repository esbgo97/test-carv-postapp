import { User } from "./auth";

export interface AuthState {
  user: User | null;
  authenticated: boolean;
}

export interface AlertState {
    open:boolean;
    type:string;
    title:string | null;
    text:string;    
}

export interface MainState {
    loading:boolean;
    auth:AuthState;
    alert:AlertState;
}
