export const checkHotelInWishlist = (hotels, id) => {
    const isHotelInWishlist = hotels.some(hotel => hotel.id === id);
    return isHotelInWishlist
}