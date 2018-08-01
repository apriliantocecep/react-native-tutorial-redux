import { INCREMENT, DECREMENT, SET_RANGE } from "../actions/Types";

const initialState = {
    counter: 0,
    range: 0
}

export default counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                counter: state.counter + 1
            })

        case DECREMENT:
            return Object.assign({}, state, {
                counter: state.counter - 1
            })

        case SET_RANGE:
            return Object.assign({}, state, {
                range: state.range
            })
        default:
            return state
    }
}