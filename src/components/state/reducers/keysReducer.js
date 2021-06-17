

const keys =[
    {
        class: ['ac', 'first-section'],
        id: 'clear',
        key: 'AC'
    },
    {
        class:['operator', 'first-section'],
        id:'divide',
        key: "/"
    },

    {
        class: ['operator', 'first-section'],
        id:'multiply',
        key: '*'
    },
    {
        class:['num','second-section'],
        id:'seven',
        key:'7'
    },
    {
        class:['num','second-section'],
        id:'eight',
        key:'8'
    },
    {
        class:['num','second-section'],
        id:'nine',
        key:'9'
    },
    {
        class:['operator', 'second-section'],
        id:'subtract',
        key:"-"
    },
    {
        class:['num', 'second-section'],
        id:'four',
        key:'4'
    },
    {
        class:['num','second-section'],
        id:'five',
        key:'5'
    },
    {
        class:['num', 'second-section'],
        id:'six',
        key:'6'
    },
    {
        class:['operator', 'second-section'],
        id:'add',
        key: "+"
    },

     {
         class:['num', 'third-section'],
         id:'one',
        key:'1'
    },
     {
         class:['num', 'third-section'],
         id:'two',
        key:'2'
    },
     {
         class:['num', 'third-section'],
        id:'three',
        key:'3'
    },
    {   class:['num', 'fourth-section'],
        id:'zero',
        key:'0'
    },
    {   class:['num', 'fourth'],
        id:'decimal',
        key:'.'
    },
    {
        class: ['equal', 'fifth-section'],
        id: 'equals',
        key: '='
    },

]

export const keysReducer = (state = keys, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const checkOperators = (state = false, action) => {
    switch (action.type) {
        case 'check':
            return action.payload
        default:
            return state;
    }
}


