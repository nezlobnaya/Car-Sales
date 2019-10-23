import { combineReducers } from 'redux';
import additionalPrice from './additionalPrice';
import car from './car';
import additionalFeatures from './additionalFeatures';


export default combineReducers({additionalPrice, car, additionalFeatures});