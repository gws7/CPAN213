import { FETCH_FLIGHTS, ADD_TO_FAVORITES } from '../actionTypes';

const initialState = {
    flights: [],
    favorites: []
};

export const flightReducer = (state = initialState, action) => {
    console.log(`FlightReducer received action: ${action.type} with payload ${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case FETCH_FLIGHTS: {
            return {
                ...state,
                flights: action.payload
            };
        }
        case ADD_TO_FAVORITES: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        }
        default: {
            return state;
        }
    }
}; 