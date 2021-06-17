import React from 'react';
import {useSelector} from "react-redux";

const AnswerDisplay = (props) => {

    const answer = useSelector(state =>state.answerDisplay)

    console.log('answer', answer)

    return (
        <div id={'answerDisplay'}>
            {answer}
        </div>
    );
}

export default AnswerDisplay;