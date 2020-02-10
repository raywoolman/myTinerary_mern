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
export const register = ({
  name,
  email,
  password,
  confirmPassword
}) => dispatch => {
  //headers
  const config = {
    headers: {
      "content-type": "application/json"
    }
  };

  //req body
  const body = JSON.stringify({ name, email, password, confirmPassword });

  axios
    .post("/user/add", body, config)
    .then(res =>
      dispatch({
        type: actions.REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response.data.id === "FIELD_VALIDATION_ERRORS") {
        dispatch(
          returnErrors(err.response.data, err.response.status, "FIELD_VALIDATION_ERRORS")
        );
      } else {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
      }
      dispatch({
        type: actions.REGISTER_FAIL
      });
    });
};

//Login user
export const login = ({ email, password }) => dispatch => {
  //headers
  const config = {
    headers: {
      "content-type": "application/json"
    }
  };

  //req body
  const body = JSON.stringify({ email, password });

  axios
    .post("/user/login", body, config)
    .then(res =>
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: actions.LOGIN_FAIL
      });
    });
};

// Logout user
export const logout = () => {
  return {
    type: actions.LOGOUT_SUCCESS
  };
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
