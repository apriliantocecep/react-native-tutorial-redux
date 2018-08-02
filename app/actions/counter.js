import { INCREMENT, DECREMENT, SET_RANGE, RESET_COUNTER } from "./Types";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const setRange = (range) => {
    return {
        type: SET_RANGE,
        range
    }
}

export const resetCounter = () => {
    return {
        type: RESET_COUNTER
    }
}