import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBooking = (booking) => ({
    type: ADD_BOOKING,
    payload: [booking]
})

export const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    payload: bookingId
})
