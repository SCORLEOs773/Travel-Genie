export const authReducer = (state, {type, payload}) => {
    switch(type){
        case "SHOW_AUTH_MODAL":
            return {
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen
            }
        default:
            return state
    }
}