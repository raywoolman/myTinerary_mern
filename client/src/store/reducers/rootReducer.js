import {combineReducers} from 'react';
import citiesReduer from './citiesReducer';
const rootReducer = combineReducers({cities: citiesReduer});
export default rootReducer;