const listReducerDefaultState = [];

const listReducer = (state = listReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'SET_ITEMS':
            return action.payload
        case 'REMOVE_ITEM':
            return state.filter( current => current.id !== action.payload)
        case 'BOOK_ITEM':
            return state.map( current => {
                if(current.id === action.payload.id) {
                    return {...action.payload}
                } else return current
            })
        default:
            return state
    }
}

export default listReducer;