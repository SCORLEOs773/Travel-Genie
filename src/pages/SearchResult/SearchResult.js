import { Fragment } from "react";
import { Navbar, TravelCard, Filter, AuthModal } from "../../components";
import { hotels } from "../../db";
import { useFilter, useAuth, useCategory } from "../../context";
import { getHotelsByCancellation, getHotelsByPrice, getHotelsByPropertyType, getHotelsByRating, getHotelsByRoomsAndBeds} from "../../utilities";
import "./SearchResult.css";

export const SearchResult = () => {

    const { destination, hotelCategory } = useCategory();

    const { isAuthModalOpen } = useAuth();

    const { isFilterModalOpen, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, priceRange, traveloRating, isCancelable, filterDispatch } = useFilter();

    const handleFilterClick = () => {
        filterDispatch({
            type: "FILTER_MODAL"
        })
    }

    const filteredHotelList = hotels.categories?.[hotelCategory].filter(hotel => hotel.city.toLowerCase() === destination.toLowerCase() || hotel.address.toLowerCase() === destination.toLowerCase() || hotel.state.toLowerCase() === destination.toLowerCase());
    const filteredHotelsByPrice = getHotelsByPrice(filteredHotelList, priceRange);
    const filteredHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds,)
    const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByRoomsAndBeds   , propertyType);
    const filteredHotelsByRatings = getHotelsByRating(filteredHotelsByPropertyType, traveloRating);
    const filteredHotelsByCancellation = getHotelsByCancellation(filteredHotelsByRatings, isCancelable);


    return (
        <Fragment>
            <Navbar route="search"/>
            <div>
                <button className="button btn-filter position d-flex align-center gap-small fixed cursor" onClick={handleFilterClick}>
                    <span class="material-icons-outlined">
                        filter_alt
                    </span>
                    Filter</button>
            </div>
            <section className="hotels d-flex align-center wrap gap-xxl">
                {
                    filteredHotelsByCancellation && filteredHotelsByCancellation.length > 0 ? filteredHotelsByCancellation.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />) : (<p>Nothing Found</p>)
                }
            </section>
            {
                isAuthModalOpen &&
                    <AuthModal />
            }
            {
                isFilterModalOpen && <Filter />
            }
        </Fragment>
    )
}