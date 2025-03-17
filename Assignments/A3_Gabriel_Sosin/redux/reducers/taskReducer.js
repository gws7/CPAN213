import { ADD_BOOKING, DELETE_BOOKING } from "../actionTypes";

const initialState = {
    bookings: []
}

export const taskReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, 
                    ...action.payload,
                ]
            }
        
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(booking => 
                    !(booking.roomNumber === action.payload.roomNumber &&
                    booking.studentId === action.payload.studentId)
                )
            }
    
        default:
            return state
    }
}