/* eslint-disable */
import axios from 'axios'
import * as actionType from '../actions/actionTypes'

export function newUserRequest() {
  return {type: actionType.CREATE_NEW_USER_REQUEST}
}

export function newUserSuccess(userDetails) {
  return {type: actionType.CREATE_NEW_USER_SUCCESS, userDetails}
}
export function newUserFail(error) {
  return {type: actionType.CREATE_NEW_USER_FAIL, error}
}

export function addNewUser(userDetails) {
  const {name, email, password} = userDetails
  return dispatch => {
    dispatch(newUserRequest())
    axios
      .post('/user/add', {
      email: email,
      name: name,
      password: password
    })
      .then(res => {
        dispatch(newUserSuccess(res))
      })
      .catch(error => dispatch(newUserFail(error)))
  }
}