import {
    ADD_BOOK,
    FETCH_BOOKS,
} from "../actionTypes"

const initialState = {
    listOfBooks: []
}

export const bookReducer = (state = initialState, action) => {
    console.log(`TaskReducer receiver action: ${action.type} with payload ${JSON.stringify(action.payload)}`);

    switch (action.type){
        case FETCH_BOOKS: {
            return {
                ...state,
                listOfBooks: action.payload
            }
        }
        case ADD_BOOK: {
            return state
        }
        default: {
            return state
        }
    }
}