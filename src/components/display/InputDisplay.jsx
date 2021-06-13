import React from 'react';
import {useSelector} from "react-redux";

const InputDisplay = (props) => {

    const inputDisplay = useSelector(state => state.inputDisplay)
    console.log('inputDisplay',inputDisplay)
    return (
        <div id={'inputDisplay'}>
            {inputDisplay}
        </div>
    );
}

export default InputDisplay;