import * as actionType from '../actions/actionTypes'

const POST_NEW_USER = 'POST_NEW_USER';

const initState = {
  itineraries: [],
  error: {},
  isLoading: true,
  userDetails: {}
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case POST_NEW_USER:
            return {
                ...state,
                isLoading: false,
                userDetails: action.userDetails
            }
    }
}