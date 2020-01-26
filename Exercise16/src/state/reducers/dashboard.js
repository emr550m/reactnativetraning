var initialState = {
    title: "App Name",
    items: [{
        key: 1,
        image: 'http://tapsmart.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/pull-to-refresh.png',
        title: "Pull To get List",
        description: "Please pull to get items."
    }],
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