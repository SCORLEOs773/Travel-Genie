import InfiniteScroll from 'react-infinite-scroll-component';
import { Navbar, Categories, TravelCard, AuthModal, Filter, DropDown } from "../../components";
import { categories, hotels } from "../../db/";
import { Fragment, useEffect, useState } from "react";
import { useCategory, useAuth, useFilter } from "../../context";
import { getHotelsByCancellation, getHotelsByPrice, getHotelsByPropertyType, getHotelsByRating, getHotelsByRoomsAndBeds } from "../../utilities";
import "./Home.css";

export const Home = () => {

    const [hasMore, setHasMore] = useState(true);
    const [testArray, setTestArray] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(16);

    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();

    const { hotelCategory, categoryDispatch, isDestinationModalOpen } = useCategory();

    const { isFilterModalOpen, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, priceRange, traveloRating, isCancelable } = useFilter();

    const handleScroll = () => {
        if (window.scrollY > 30 && !isDestinationModalOpen) {
            categoryDispatch({
                type: "CHANGE_DESTINATION_MODAL_STATUS"
            })
        }
    }

    const hotelsToShow = hotels.data.filter(hotel => hotel.category === hotelCategory);

    useEffect(() => {
        setTestArray(hotelsToShow ? hotelsToShow.slice(0, 16) : [])
    }, [])

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    })

    const fetchMoreData = () => {
        if (testArray.length >= hotelsToShow.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            if (hotelsToShow && hotelsToShow.length > 0) {
                setTestArray(testArray.concat(hotelsToShow.slice(currentIndex, currentIndex + 16)));
                setCurrentIndex(currentIndex += 16);
            } else {
                setTestArray([])
            }
        }, 1000);
    };

    console.log("Hotel Category", hotelCategory);
    console.log("Test Array", testArray);

    const filteredHotelsByPrice = getHotelsByPrice(testArray, priceRange);
    const filteredHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds,)
    const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByRoomsAndBeds, propertyType);
    const filteredHotelsByRatings = getHotelsByRating(filteredHotelsByPropertyType, traveloRating);
    const filteredHotelsByCancellation = getHotelsByCancellation(filteredHotelsByRatings, isCancelable);

    return (
        <Fragment>
            <div className="home-container">
                <Navbar route="home" />
                <Categories categories={categories} />
                {
                    testArray && testArray.length > 0 ? (
                        <InfiniteScroll
                            dataLength={testArray.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={testArray.length > 0 && <h3 style={{ textAlign: 'center', margin: "2rem 0" }}>Loading...............</h3>}
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
                    ) : (
                        <h2>Nothing found</h2>
                    )
                }

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