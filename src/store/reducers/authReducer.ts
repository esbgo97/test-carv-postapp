import { AuthState, MainState } from "../../models/states";
import {
  SIGN_IN,
  SIGN_OUT,
  LOADING,
  SHOW_ALERT,
  HIDE_ALERT,
  SignInAction,
  SignOutAction,
  LoadingAction,
  ShowAlertAction,
  HideAlertAction,
  AuthActions,
  MainActions,
} from "../types";

const initialState: MainState = {
  auth: {
    user: null,
    authenticated: false,
  },
  loading:false,
  alert: {
    open: false,
    type: "",
    title: null,
    text: "",
  },
};

export const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        authenticate: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticate: false,
      };
  }
};

export const mainReducer = (state: MainState, action: MainActions) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          ...action.payload,
          open: true,
        },
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: {
          open: false,
          title: null,
          text: "",
        },
      };
  }
};
