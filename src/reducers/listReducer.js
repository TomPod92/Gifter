const listReducerDefaultState = [];

const listReducer = (state = listReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return state.filter( current => current.id !== action.payload)
        default:
            return state
    }
}

export default listReducer;