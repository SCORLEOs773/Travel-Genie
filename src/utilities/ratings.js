export const getHotelsByRating = (hotels, rating) => {
    const filteredHotels = hotels.filter(hotel => hotel.rating >= rating);
    return filteredHotels;
}