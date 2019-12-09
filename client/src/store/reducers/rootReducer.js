import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer, users: userReducer});

export default rootReducer;