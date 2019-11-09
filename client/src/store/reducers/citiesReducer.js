import * as actionType from '../actions/actionTypes'

const initState = {
  cities: [],
  error: {},
  isLoading: true
}

const citiesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.cities,
        error: {},
        isLoading: false
      };

    case actionType.FETCH_CITIES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      case actionType.FETCH_CITIES:
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