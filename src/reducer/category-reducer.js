export const categoryReducer = (state, { type, payload }) => {
    switch (type) {
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

        case "CHANGE_DESTINATION_MODAL_STATUS":
            return {
                ...state,
                isDestinationModalOpen: false
            }

        case "DESTINATION":
            return {
                ...state,
                destination: payload
            }

        case "CHECK_IN":
            return {
                ...state,
                checkInDate: payload,
                checkOutDate: state.checkOutDate && state.checkOutDate.getDate() <= payload.getDate() ? "" : state.checkOutDate
            }

        case "CHECK_OUT":
            return {
                ...state,
                checkOutDate: state.checkInDate && state.checkInDate.getDate() >= payload.getDate() ? "" : payload,
                checkInDate: state.checkInDate && state.checkInDate.getDate() >= payload.getDate() ? payload : state.checkInDate
            }

        case "GUEST_COUNT":
            return {
                ...state,
                noOfGuests: payload
            }

        case "DATE_FOCUS":
            return {
                ...state,
                isSearchResultOpen: false
            }

        case "SHOW_SEARCH_RESULT":
            return {
                ...state,
                isSearchResultOpen: true
            }
        case "CLEAR_CATEGORY":
            return {
                ...state,
                hotelCategory: "National Parks",
                isDestinationModalOpen: false,
                checkInDate: null,
                checkOutDate: null,
                noOfGuests: 0,
                destination: "",
                isSearchResultOpen: true
            }

        default:
            return state
    }
}