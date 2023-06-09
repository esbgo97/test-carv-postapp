export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"

export const LOADING = "LOADING"

export const SHOW_ALERT = "SHOW_ALERT"
export const HIDE_ALERT = "HIDE_ALERT"


export interface SignInAction {
    type: typeof SIGN_IN;
    payload: Credential;
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
    payload: boolean;
}

export interface LoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

export interface ShowAlertAction {
    type: typeof SHOW_ALERT;
    payload: Credential;
}

export interface HideAlertAction {
    type: typeof HIDE_ALERT;
    payload: boolean;
}

export type AuthActions = SignInAction | SignOutAction;
export type MainActions = LoadingAction | ShowAlertAction | HideAlertAction;