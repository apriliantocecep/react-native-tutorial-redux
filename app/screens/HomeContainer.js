import { connect } from "react-redux";

import { increment, decrement, setRange } from "../actions/counter";

import Home from "./Home";

const mapStateToProps = (state) => {
    const { counter, range } = state.counterattack

    return {
        counter,
        range
    }
}

const mapDispatchToProps = (dispatch) => ({
    increaseCounter: () => dispatch(increment()),
    decreaseCounter: () => dispatch(decrement()),
    setRangeCounter: (range) => dispatch(setRange(range))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);