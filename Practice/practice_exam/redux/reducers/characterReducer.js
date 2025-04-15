import { FETCH_CHARACTERS, ADD_TO_FAVORITES } from '../actionTypes';

const initialState = {
    listOfCharacters: [],
    favorites: []
};

export const characterReducer = (state = initialState, action) => {
    console.log(`CharacterReducer received action: ${action.type} with payload ${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case FETCH_CHARACTERS: {
            return {
                ...state,
                listOfCharacters: action.payload
            };
        }
        case ADD_TO_FAVORITES: {
            // Check if character is already in favorites
            const isAlreadyFavorite = state.favorites.some(fav => fav.characterId === action.payload.characterId);
            
            if (isAlreadyFavorite) {
                return state;
            }
            
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