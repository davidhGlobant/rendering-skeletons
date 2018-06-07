const initialState = [{},{},{},{},{},{},{},{},{}]


const photos = (state = initialState, action) => {
    let newState = Object.assign([], state)
    switch (action.type) {
        case 'LOAD_PHOTOS':
            newState = action.data
            return newState
        case 'CLEAR_PHOTOS':
            newState = initialState
            return newState
        default:
            return state;
    }
}

export default photos