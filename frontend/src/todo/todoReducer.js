const INITIAL_STATE = {
    description: 'Ler livro', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.value }
        case 'TODO_SEARCHED':
            return console.log(action.value.data)    
        // return { ...state, list: action.value.data }
        default:
            return state
    }
}