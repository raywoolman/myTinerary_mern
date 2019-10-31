import * as actionTypes from '../actions/actionTypes'

const initState = {
  cities: [],
  error: {},
  isLoading: true
}

const citiesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.cities,
        error: {},
        isLoading: false
      };

    case actionTypes.FETCH_CITIES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      case actionTypes.FETCH_CITIES:
          return {
              ...state,
              error: {},
              isLoading: true
          }
      default:
          return state;
  }
}

export default citiesReducer