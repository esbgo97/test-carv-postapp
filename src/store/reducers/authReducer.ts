import { AuthState } from "../../models/states";
import { SIGN_IN, SIGN_OUT, AuthActions } from "../types/auth";

const initialState: AuthState = {
  user: null,
  authenticated: false,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
) => {
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
    default:
      return state;
  }
};
