var initialState = {
    isLoggedIn: false, 
}
export function app(state = initialState, action) {
    switch (action.type) {
        case "SET_LOGGEDIN":
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            })  
        default:
            return state
    }
}