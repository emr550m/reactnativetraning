var initialState = {
    page2Var1: "App Name",
    page2Var2: "",
}
export function page2(state = initialState, action) {
    switch (action.type) {
        case "SET_PAGE2_VAR1":
            return Object.assign({}, state, {
                page2Var1: action.page1Var1
            })
        case "SET_PAGE2_VAR2":
            return Object.assign({}, state, {
                page2Var2: action.page1Var2
            })
        default:
            return state
    }
}