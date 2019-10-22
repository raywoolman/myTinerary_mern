import {combineReducers} from 'react';
import citiesReducer from './citiesReducer';
const rootReducer = combineReducers({cities: citiesReducer});

export default rootReducer;