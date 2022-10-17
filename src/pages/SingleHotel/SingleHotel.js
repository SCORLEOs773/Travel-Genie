import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../../db/hotels";
import { useCategory, useAuth } from "../../context";
import { AuthModal, DropDown } from "../../components";

import { Navbar, FinalPrice, HostAndHotelDetails, HotelImages } from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {

    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();

    const { hotelId } = useParams();
    const { categoryDispatch, isDestinationModalOpen } = useCategory();

    const handleScroll = () => {
        if (window.scrollY > 30 && !isDestinationModalOpen) {
            categoryDispatch({
                type: "CHANGE_DESTINATION_MODAL_STATUS"
            })
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    })

    const singleHotel = hotels.data.find(hotel => hotel.id === hotelId);

    return (
        <Fragment>
            <Navbar route="single-hotel" />
            <main className="main-page">
                <HotelImages singleHotel={singleHotel} />
                <div className="d-flex ">
                    <HostAndHotelDetails singleHotel={singleHotel} />
                    <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
            {
                isDropDownModalOpen && <DropDown />
            }
            {
                isAuthModalOpen &&
                <AuthModal />
            }
        </Fragment>
    )
}