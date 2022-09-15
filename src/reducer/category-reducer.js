export const categoryReducer = (state, {type, payload}) => {
    switch (type){
        case "CATEGORY":
            return {
                ...state,
                hotelCategory: payload
            }
        default:
            return state
    }
}