import axios from "axios";
import * as actions from "../actions/actionTypes";
import { returnErrors } from "./errorActions";

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

//Register user
export const register = ({ name, email, password }) => dispatch => {
  
  //headers
  const config = {
    headers: {
      "content-type": "application/json"
    }
  };

  //req body
  const body = JSON.stringify({ name, email, password });

  axios.post('/user/add', body, config)
    .then(res => dispatch({
      type: actions.REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      console.log(err);
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: actions.REGISTER_FAIL
      })
    })
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
};
