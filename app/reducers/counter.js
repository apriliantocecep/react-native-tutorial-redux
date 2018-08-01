import { INCREMENT, DECREMENT } from "../actions/Types";

const initialState = {
    counter: 0
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
        default:
            return state
    }
}