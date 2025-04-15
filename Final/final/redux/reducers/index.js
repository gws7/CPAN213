import { combineReducers } from 'redux';
import { flightReducer } from './flightReducer';

export const rootReducer = combineReducers({
    flights: flightReducer
});
