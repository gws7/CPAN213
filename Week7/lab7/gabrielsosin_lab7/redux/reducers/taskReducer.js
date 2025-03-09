import { CONVERT_TEMP } from "../actionTypes";

const initialState = {
    value: 0
}

export const taskReducer = (state=initialState, action) => {
    switch (action.type) {
        case CONVERT_TEMP: 
            
            return {
                ...state,
                value: (action.payload*9/5)+32
            }
    
        default:
            return { ...state }
    }
}