import { INCREMENT, DECREMENT, SET_RANGE, RESET_COUNTER } from "../actions/Types";

const initialState = {
    counter: 0,
    range: 1
}

export default counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                counter: state.counter + state.range,
                range: state.range
            })

        case DECREMENT:
            return Object.assign({}, state, {
                counter: state.counter - state.range,
                range: state.range
            })

        case SET_RANGE:
            return Object.assign({}, state, {
                range: action.range
            })

        case RESET_COUNTER:
            return Object.assign({}, state, {
                counter: 0
            })
        default:
            return state
    }
}