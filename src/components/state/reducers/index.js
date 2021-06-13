import {combineReducers} from "redux";
import keysReducer from "./keysReducer";
import inputDisplayReducer from "./inputDisplayReducer";
import answerDisplayReducer from "./answerDisplayReducer";


const reducers = combineReducers({
    keys : keysReducer,
    inputDisplay : inputDisplayReducer,
    answerDisplay : answerDisplayReducer,
})

export default reducers;