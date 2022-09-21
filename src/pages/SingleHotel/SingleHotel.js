import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../../db/hotels";
import { useCategory } from "../../context/category-context";

import { Navbar, FinalPrice, HostAndHotelDetails, HotelImages } from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {

    const { hotelId } = useParams();
    const { hotelCategory, categoryDispatch, isDestinationModalOpen } = useCategory();

    const handleScroll = () => {
        if (window.scrollY > 30 && !isDestinationModalOpen){
            categoryDispatch({
                type: "CHANGE_DESTINATION_MODAL_STATUS"
            })
        }
    }

    useEffect(() => {   
        window.addEventListener("scroll", handleScroll);
        return () => 
           window.removeEventListener("scroll", handleScroll); 
      }, [])
   
    const singleHotel = hotels.categories[hotelCategory].find(hotel => hotel.id === hotelId);
    console.log({singleHotel});

    return (
        <Fragment>
            <Navbar route="single-hotel"/>
            <main className="main">
                <HotelImages singleHotel={singleHotel} />
                <div className="d-flex ">
                    <HostAndHotelDetails singleHotel={singleHotel} />
                    <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
        </Fragment>
    )
}