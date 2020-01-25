var initialState = {
    username: "user@user.com",
    password: "123456",
}
export function login(state = initialState, action) {
    switch (action.type) {
        case "SET_USERNAME":
            return Object.assign({}, state, {
                username: action.username
            })
        case "SET_PASSWORD":
            return Object.assign({}, state, {
                password: action.password
            })
        default:
            return state
    }
}