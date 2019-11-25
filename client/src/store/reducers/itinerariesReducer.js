import * as actionType from '../actions/actionTypes'

const initState = {
  itineraries: [],
  error: {},
  isLoading: true
}

const itinerariesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.FETCH_ITINERARIES_SUCCESS:
      return {
        ...state,
        itineraries: action.itineraries,
        error: {},
        isLoading: false
      };
    case actionType.FETCH_ITINERARIES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case actionType.FETCH_ITINERARIES:
      return {
        ...state,
        error: {},
        isLoading: true
      }
    default:
      return state;
  }
}

export default itinerariesReducer