var initialState = {
    title: "App Name",
    items: [],
}
export function dashboard(state = initialState, action) {
    switch (action.type) {
        case "SET_ITEMS":
            return Object.assign({}, state, {
                items: action.items
            })
        case "SET_TITLE":
            return Object.assign({}, state, {
                title: action.title
            })
        default:
            return state
    }
}