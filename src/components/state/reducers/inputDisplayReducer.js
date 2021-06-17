const inputDisplayReducer =(state='0', action)=>{
switch (action.type) {
    case 'input':
        return state === '0' ? (state = '') + action.payload : state += action.payload
    case 'result':
        return action.payload
    case 'clear':
        return action.payload
    default:
        return state;
}
}

export default inputDisplayReducer;