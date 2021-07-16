import { RecruiterActionTypes } from "./types";
import Cookies from "js-cookie";

const authCookies = Cookies.get("AUTH") || JSON.stringify({});

const INITIAL_STATE = {
  loginLoading: false,
  user: null,
  token: null,
  loginError: null,
  ...JSON.parse(authCookies),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecruiterActionTypes.LOGIN_START:
      return {
        ...state,
        loginError: null,
        loginLoading: true,
      };
    case RecruiterActionTypes.LOGIN_SUCCESS:
      Cookies.set(
        "AUTH",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        loginLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case RecruiterActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload.error,
      };
    case RecruiterActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }
    default:
      return state;
  }
};

export default reducer;
