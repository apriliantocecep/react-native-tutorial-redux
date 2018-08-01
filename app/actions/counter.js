import { INCREMENT, DECREMENT, SET_RANGE } from "./Types";

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