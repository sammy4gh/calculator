import React from 'react';
import InputDisplay from "./InputDisplay";
import AnswerDisplay from "./AnswerDisplay";

const Display = (props) => {
    return (
        <div id={'display'}>
            <AnswerDisplay/>
            <InputDisplay/>
        </div>
    );
}

export default Display;
