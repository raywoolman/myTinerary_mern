import * as actionType from '../actions/actionTypes'

export function fetchingItineraries() {
  return {type: FETCH_ITINERARIES}
}

export function fetchCitiesSuccess(itineraries) {
  return ({type: FETCH_ITINERARIES_SUCCESS, itineraries})
}

export function fetchItinerariesFail(error) {
  return ({type: FETCH_ITINERARIES_FAIL, error})
}

export function fetchItineraries() {
  return dispatch => {
    dispatch(fetchingItineraries())
    fetch("itineraries/all")
      .then(r => r.json())
      .then(json => {
        dispatch(fetchCitiesSuccess(json))
      })
      .catch(err => {
        dispatch(fetchItinerariesFail(err))
      })
  }
}