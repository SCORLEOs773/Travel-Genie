export const getHotelsByCancellation = (hotels, isCancelable) => {
    if (isCancelable === "Any"){
        return hotels
    }
    const filteredHotels = hotels.filter(hotel => hotel.isCancelable === isCancelable);
    return filteredHotels;
}