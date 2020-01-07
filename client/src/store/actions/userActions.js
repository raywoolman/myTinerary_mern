import axios from 'axios'
import * as actions from './actionTypes'

export function newUserRequest() {
  return {type: actions.CREATE_NEW_USER_REQUEST}
}

export function newUserSuccess(userDetails) {
  return {type: actions.CREATE_NEW_USER_SUCCESS, userDetails}
}
export function newUserFail(error) {
  return {type: actions.CREATE_NEW_USER_FAIL, error}
}

export function addNewUser(userDetails) {
  const {name, email, password} = userDetails;
  return async dispatch => {
    try {
      const response = await axios.post('/user/add', {name, email, password});
      console.log(response.data)
      dispatch(newUserSuccess(response.data))
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("error.response: ", error.response)
        console.log("error.response.data: ", error.response.data)
        if (error.response.data.errors) {
          dispatch(newUserFail(error.response.data.errors))
        } else {
          dispatch(newUserFail(error.response.data))
        }
      } else {
        dispatch(newUserFail(error))
      }
    }
  }
};