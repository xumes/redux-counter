const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return { ...state, count: state.count + action.value }
        case 'DEC':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
    return state
}

export default counterReducer