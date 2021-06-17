import React from 'react';
import classNames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from '../state'

const Key = ({keypad}) => {

    const dispatch = useDispatch()
    const {
        inputAction,
        clearAction,
        answerAction,
        checkDecimalAction,
        resultAction
    } = bindActionCreators(actionCreators, dispatch)
    const inputValue = useSelector(state => state.inputDisplay)
    const checkDecimal = useSelector(state => state.check)


    return (

        <div
            className={classNames(keypad.class[0], keypad.class[1])}
            id={keypad.id}
            onClick={() => {

                try {

                    if (keypad.key === 'AC' || inputValue === 'ERROR') {
                        clearAction()
                        checkDecimalAction(false)
                    } else if (keypad.key === '=') {
                        // eslint-disable-next-line no-eval
                        answerAction(`${inputValue} = ${eval(inputValue)}`)
                        // eslint-disable-next-line no-eval
                        resultAction(eval(inputValue))
                        checkDecimalAction(true)
                    } else if (keypad.key === '.') {

                        if (inputValue.endsWith('.')) {
                            inputAction('')
                            console.log('endsWith', keypad.key)
                        } else if (checkDecimal === true) {
                            inputAction('')
                        } else {
                            inputAction(keypad.key)
                            checkDecimalAction(true)
                            console.log('decimal', keypad.key)
                        }

                    } else if (keypad.class[0].includes('operator')) {
                        checkDecimalAction(false)
                        inputAction(keypad.key)
                    } else if (inputValue.length > 100) {
                        alert(`Digit Limit Reached : ${inputValue.length - 1}`)
                    } else {
                        inputAction(keypad.key)
                        return console.log('key clicked', keypad.key)

                    }

                } catch (e) {
                    clearAction()
                    inputAction('ERROR')
                }


                /*console.log('hey')
                console.log('inputValue',inputValue)
                console.log('checkDecimal', checkDecimal)*/

            }


            }
           >
               {keypad.key}
           </div>




        );



}

export default Key;