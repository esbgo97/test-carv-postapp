import { ThunkAction } from "redux-thunk";
import { RegisterData, User } from "../models/auth";
import { MainState } from "../models/states";
import { SignInAction } from "./types";
import AuthService from "../services/AuthService";

export const signup = (
  data: RegisterData,
  onError: () => void
): ThunkAction<void, MainState, null, SignInAction> => {
  return async (dispatch) => {
    try {
      const resp = await new AuthService().Register(data);
      if (resp != null && resp.user) {
        const user :User= {
            id: resp.user.uid,
            name: data.name,
            email: data.email,
            createAt: new Date(),
        }
        
      }
    } catch (err) {}
  };
};
