export const filterReducer = (state, { type, payload }) => {
    switch (type) {

        case "FILTER_MODAL":
            return {
                ...state,
                isFilterModalOpen: !state.isFilterModalOpen
            }

        case "MINIMUM_PRICE":
            return {
                ...state,
                priceRange: [Math.min(payload.newValue[0], payload.priceRange[1] - payload.minDifference), payload.priceRange[1]]
            }

        case "MAXIMUM_PRICE":
            return {
                ...state,
                priceRange: [payload.priceRange[0], Math.max(payload.newValue[1], payload.priceRange[0] + payload.minDifference)]
            }

        case "BEDROOMS":
            return {
                ...state,
                noOfBedrooms: Number(payload)
            }

        case "BEDS":
            return {
                ...state,
                noOfBeds: Number(payload)
            }

        case "BATHROOMS":
            return {
                ...state,
                noOfBathrooms: Number(payload)
            }

        case "PROPERTY_TYPE":
            return {
                ...state,
                propertyType: payload
            }

        case "RATING":
            return {
                ...state,
                traveloRating: Number(payload)
            }

        case "CANCEL_HOTEL":
            return {
                ...state,
                isCancelable: payload
            }

        case "APPLY":
            return state

        case "CANCEL_FILTER":
            return {
                ...state,
                noOfBathrooms: "Any",
                noOfBedrooms: "Any",
                noOfBeds: "Any",
                propertyType: "Any",
                traveloRating: "1",
                isCancelable: true,
                priceRange: [200, 15000]
            }
            
        default:
            return state
    }
}