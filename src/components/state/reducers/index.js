import {combineReducers} from "redux";
import {checkOperators, keysReducer} from "./keysReducer";
import inputDisplayReducer from "./inputDisplayReducer";
import answerDisplayReducer from "./answerDisplayReducer";


const reducers = combineReducers({
    keys: keysReducer,
    check: checkOperators,
    inputDisplay: inputDisplayReducer,
    answerDisplay: answerDisplayReducer,
})

export default reducers;