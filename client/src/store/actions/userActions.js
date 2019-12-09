/* eslint-disable */
import axios from 'axios'
import * as actionType from '../actions/actionTypes'
const {check, validationResult} = require('express-validator');

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
  check('email').isEmail()
  // check(userDetails.password).isLength({min: 5, max: 32})
  const errors = validationResult(userDetails)
  console.log(errors)
  return dispatch => {
    dispatch(newUserRequest())
    axios.post('/user/add', [
      check('email').isEmail(),
      check('password').isLength({min: 5, max: 32})
    ], {
      email: email,
      name: name,
      password: password
    }).then(response => {
      dispatch(newUserSuccess(response))
    }),
    error => dispatch(newUserFail(error))
  }
}