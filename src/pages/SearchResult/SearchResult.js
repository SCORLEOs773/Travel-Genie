import { Fragment } from "react";
import { useCategory } from "../../context/category-context"
import { Navbar, TravelCard } from "../../components";
import { hotels } from "../../db";


export const SearchResult = () => {

    const { destination, hotelCategory } = useCategory();
    const filteredHotelList = hotels.categories?.[hotelCategory].filter(hotel => hotel.city.toLowerCase() === destination.toLowerCase() || hotel.address.toLowerCase() === destination.toLowerCase() || hotel.state.toLowerCase() === destination.toLowerCase())

    return (
        <Fragment>
            <Navbar route="search"/>
            <section className="hotels d-flex align-center wrap gap-xxl">
                {
                    filteredHotelList && filteredHotelList.length > 0 ? filteredHotelList.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />) : (<p>Nothing Found</p>)
                }
            </section>
        </Fragment>
    )
}