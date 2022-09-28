export const wishlistReducer = (state, { type, payload }) => {
    switch(type){
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.some(hotel => hotel.id === payload.id) ? state.wishlist : [...state.wishlist, payload]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlist: state.wishlist.filter(hotel => hotel.id !== payload.id)
            }
        default:
            return state
    }
}