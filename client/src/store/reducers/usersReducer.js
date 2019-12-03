import * as actionType from '../actions/actionTypes'

const POST_NEW_USER = 'POST_NEW_USER';

const initState = {
  error: {},
  isLoading: true,
  userDetails: {}
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        userDetails: action.userDetails,
        isLoading: false
      }
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false

      }
  }
}