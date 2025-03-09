import { CONVERT_TEMP } from "./actionTypes";

export const convertTemp = (value) => ({
    type: CONVERT_TEMP,
    payload: value
})