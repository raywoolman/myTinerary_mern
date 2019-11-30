import * as actionType from '../actions/actionTypes'

export function fetchingItineraries() {
  return {type: actionType.FETCH_ITINERARIES}
}

export function fetchItinerariesSuccess(itineraries) {
  return ({type: actionType.FETCH_ITINERARIES_SUCCESS, itineraries})
}

export function fetchItinerariesFail(error) {
  return ({type: actionType.FETCH_ITINERARIES_FAIL, error})
}

export function fetchItineraries(cityId) {
  console.log(cityId)
  return dispatch => {
    dispatch(fetchingItineraries())
    fetch("itineraries/"+cityId)
      .then(r => r.json())
      .then(json => {
        dispatch(fetchItinerariesSuccess(json))
      })
      .catch(err => {
        dispatch(fetchItinerariesFail(err))
      })
  }
}