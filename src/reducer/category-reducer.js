export const categoryReducer = (state, {type, payload}) => {
    switch (type){
        case "CATEGORY":
            return {
                ...state,
                hotelCategory: payload
            }

        case "OPEN_DESTINATION_MODAL":
            return {
                ...state,
                isDestinationModalOpen: !state.isDestinationModalOpen
            }
        case "CHECK_IN":
            return {
                ...state,
                checkInDate: payload
            }
        case "CHECK_OUT":
            return {
                ...state,
                checkOutDate: payload
            }
        default:
            return state
    }
}