export const authReducer = (state, {type, payload}) => {
    switch(type){
        case "SHOW_AUTH_MODAL":
            return {
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen
            }
        case "MOBILE_NUMBER":
            return {
                ...state,
                number: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        case "SHOW_DROP_DOWN_OPTIONS":
            return {
                ...state,
                isDropDownModalOpen: !state.isDropDownModalOpen
            }
        default:
            return state
    }
}