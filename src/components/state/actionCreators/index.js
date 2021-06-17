export const inputAction = (input) => {
    return (dispatch) => {
        dispatch({
            type: 'input',
            payload: input,
        })
    }
}

export const clearAction = () => {
    return (dispatch) => {
        dispatch({
            type: 'clear',
            payload: '0'
        })
    }
}

export const answerAction = (answer) => {
    return (dispatch) => {
        dispatch({
            type: 'answer',
            payload: answer
        })
    }
}
export const checkDecimalAction = (bool) => {
    return (dispatch) => {
        dispatch({
            type: 'check',
            payload: bool
        })
    }
}
export const resultAction = (result) => {
    return (dispatch) => {
        dispatch({
            type: 'result',
            payload: result
        })
    }
}
