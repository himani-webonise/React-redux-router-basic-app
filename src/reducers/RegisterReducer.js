export default function registerReducer(state={}, action) {
    debugger;
    switch(action.type) {
        case 'REGISTER':
        debugger;
            return {
                message: alert(action.message)
            }
        default:
            return state
    }
}