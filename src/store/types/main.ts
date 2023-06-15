
export const LOADING = "LOADING";

export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";


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

export type MainActions = LoadingAction | ShowAlertAction | HideAlertAction;
