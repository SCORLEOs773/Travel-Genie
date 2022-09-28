import { Navbar, Categories, TravelCard, AuthModal, Filter, DropDown } from "../../components";
import { categories, hotels } from "../../db/";
import { Fragment, useCallback, useEffect } from "react";
import { useCategory, useAuth, useFilter } from "../../context";
import { getHotelsByCancellation, getHotelsByPrice, getHotelsByPropertyType, getHotelsByRating, getHotelsByRoomsAndBeds} from "../../utilities";
import "./Home.css";

export const Home = () => {

    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();

    const { hotelCategory, categoryDispatch, isDestinationModalOpen } = useCategory();

    const { isFilterModalOpen, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, priceRange, traveloRating, isCancelable } = useFilter();

    const handleScroll = useCallback(() => {
        if (window.scrollY > 30 && !isDestinationModalOpen) {
            categoryDispatch({
                type: "CHANGE_DESTINATION_MODAL_STATUS"
            })
        }
    }, [isDestinationModalOpen])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [])

    const filteredHotelsByPrice = getHotelsByPrice(hotels.categories[hotelCategory], priceRange);
    const filteredHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds,)
    const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByRoomsAndBeds   , propertyType);
    const filteredHotelsByRatings = getHotelsByRating(filteredHotelsByPropertyType, traveloRating);
    const filteredHotelsByCancellation = getHotelsByCancellation(filteredHotelsByRatings, isCancelable);

    return (
        <Fragment>
            <div className="home-container">
                <Navbar route="home" />
                <Categories categories={categories} />
                <section className="hotels d-flex align-center wrap gap-xxl">
                    {
                        filteredHotelsByCancellation && filteredHotelsByCancellation.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
                    }
                </section>
            </div>
            {
                isDropDownModalOpen && <DropDown />
            }
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