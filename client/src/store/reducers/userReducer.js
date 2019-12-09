import * as actionType from '../actions/actionTypes'

const initState = {
  error: {},
  isLoading: true,
  userDetails: {}
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionType.CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        userDetails: action.userDetails,
        isLoading: false
      }
    case actionType.CREATE_NEW_USER_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false

      }
      default: 
      return state;
  }
}

export default userReducer;