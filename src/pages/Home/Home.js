import InfiniteScroll from 'react-infinite-scroll-component';
import { Navbar, Categories, TravelCard, AuthModal, Filter, DropDown, LoaderSmall } from "../../components";
import { categories, hotels } from "../../db/";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useCategory, useAuth, useFilter } from "../../context";
import { getHotelsByCancellation, getHotelsByPrice, getHotelsByPropertyType, getHotelsByRating, getHotelsByRoomsAndBeds } from "../../utilities";
import "./Home.css";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    const [tetsArray, setTestArray] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(16);

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
        setTestArray(hotels.categories[hotelCategory].slice(0, 16))
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [])

    const fetchMoreData = () => {
        if (tetsArray.length >= 33) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setTestArray(tetsArray.concat(hotels.categories[hotelCategory].slice(currentIndex, currentIndex + 16)));
            setCurrentIndex(currentIndex += 16);
        }, 1000);
    };

    console.log("Test Array", tetsArray);

    const filteredHotelsByPrice = getHotelsByPrice(tetsArray, priceRange);
    const filteredHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds,)
    const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByRoomsAndBeds, propertyType);
    const filteredHotelsByRatings = getHotelsByRating(filteredHotelsByPropertyType, traveloRating);
    const filteredHotelsByCancellation = getHotelsByCancellation(filteredHotelsByRatings, isCancelable);

    return (
        <Fragment>
            <div className="home-container">
                <Navbar route="home" />
                <Categories categories={categories} />
                <InfiniteScroll
                    dataLength={tetsArray.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h3 style={{ textAlign: 'center', margin: "2rem 0" }}>Loading...............</h3>}
                    endMessage={
                        <p style={{ textAlign: 'center', margin: "2rem 0" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <section className="hotels d-flex align-center wrap gap-xxl">
                        {
                            filteredHotelsByCancellation && filteredHotelsByCancellation.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
                        }
                    </section>
                </InfiniteScroll>

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