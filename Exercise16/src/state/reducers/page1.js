var initialState = {
    page1Var1: "App Name",
    page1Var2: "",
}
export function page1(state = initialState, action) {
    switch (action.type) {
        case "SET_PAGE1_VAR1":
            return Object.assign({}, state, {
                page1Var1: action.page1Var1
            })
        case "SET_PAGE1_VAR2":
            return Object.assign({}, state, {
                page1Var2: action.page1Var2
            })
        default:
            return state
    }
}