export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export interface SignInAction {
  type: typeof SIGN_IN;
  payload: Credential;
}

export interface SignOutAction {
  type: typeof SIGN_OUT;
  payload: boolean;
}

export type AuthActions = SignInAction | SignOutAction;