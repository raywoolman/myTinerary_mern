import axios from "axios";
import * as actions from "../actions/actionTypes";
import {returnErrors} from './errorActions'

//check token & load user
export const loadUser = () => (dispatch, getState) => {
    
  // User loading
  dispatch({ type: actions.USER_LOADING });

  axios
    .get("user/verify", tokenConfig(getState))
    .then(res => dispatch({ type: actions.USER_LOADED, payload: res.data }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: actions.AUTH_ERROR });
    });
};

//setup config/headers and token

export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}