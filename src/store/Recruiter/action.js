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
  error,
});

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginStart);
    try {
      const response = await axios.post("http://localhost:3500/signin", {
        email,
        password,
      });
      // console.log(response.data)
      if(response.data.error){
        console.log("an error has occured.")
        dispatch(loginError(response.data.error))
      }
      dispatch(loginSuccess(response.data.user, response.data.token));
      console.log("correct", response.data)
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};
