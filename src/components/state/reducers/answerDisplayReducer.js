const answerDisplayReducer =(state='0', action)=>{
    switch (action.type) {
        case 'answer':
            return action.payload
        case 'clear':
            return action.payload
        default:
            return state;
    }
}

export default answerDisplayReducer;