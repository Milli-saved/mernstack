import { RecruiterActionTypes } from "./types";
import axios from "axios";

//Login actions
export const loginStart = () => ({
  type: RecruiterActionTypes.LOGIN_START,
});

export const loginSuccess = (user, token) => ({
  type: RecruiterActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});
export const loginError = (error) => ({
  type: RecruiterActionTypes.LOGIN_ERROR,
  error: error,
});

export const logOut = () => ({
  type: RecruiterActionTypes.LOGOUT,
});

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginStart());
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response);
      dispatch(loginSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
};

///SIGNUP

export const signupStart = () => ({
  type: RecruiterActionTypes.SIGNUP_START,
});

export const signupSuccess = (user, token) => ({
  type: RecruiterActionTypes.SIGNUP_SUCCESS,
  payload: {
    token,
    user,
  },
});
export const signupError = (error) => ({
  type: RecruiterActionTypes.SIGNUP_ERROR,
  error: error,
});

export const signUpAsync = (
  firstName,
  lastName,
  phone,
  address,
  email,
  password,
  company
) => {
  return async (dispatch, getState) => {
    dispatch(signUpStart());
    try {
      const response = await axios.post(`http://localhost:3000/signup`, {
        firstName,
        lastName,
        phone,
        address,
        email,
        password,
        company,
      });
      dispatch(signUpSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(signUpError(err));
    }
  };
};
