import { combineReducers } from "redux";
import counter from "./counter";

const reducers = combineReducers({
    counterattack: counter
})

export default reducers;