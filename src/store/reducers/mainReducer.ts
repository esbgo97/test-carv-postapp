import { MainState } from "../../models/states";
import { HIDE_ALERT, LOADING, MainActions, SHOW_ALERT } from "../types/main";

const initialState: MainState = {
  loading: false,
  alert: {
    open: false,
    type: "",
    title: null,
    text: "",
  },
};

export const mainReducer = (
  state: MainState = initialState,
  action: MainActions
) => {
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
    default:
      return state;
  }
};
