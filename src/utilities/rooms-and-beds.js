export const getHotelsByRoomsAndBeds = (hotels, noOfBathrooms, noOfBedrooms, noOfBeds) => {
    if (noOfBathrooms === "Any" || noOfBedrooms === "Any" || noOfBeds === "Any"){
        return hotels
    }
    const filteredHotels = hotels.filter(({ numberOfBathrooms, numberOfBeds, numberOfBedrooms }) => numberOfBathrooms === noOfBathrooms || numberOfBedrooms === noOfBedrooms || numberOfBeds === noOfBeds);
    return filteredHotels;
}