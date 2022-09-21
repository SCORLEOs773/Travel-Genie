import { Navbar, Categories, TravelCard } from "../../components";
import { categories, hotels } from "../../db/";
import { Fragment, useEffect } from "react";
import { useCategory } from "../../context/category-context";
import "./Home.css";

export const Home = () => {

    const { hotelCategory, categoryDispatch, isDestinationModalOpen } = useCategory();
    console.log("from home", { isDestinationModalOpen })

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
    }, [handleScroll])



    return (
        <Fragment>
            <Navbar route="home" />
            <Categories categories={categories} />
            <section className="hotels d-flex align-center wrap gap-xxl">
                {
                    hotels.categories[hotelCategory]?.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
                }
            </section>
        </Fragment>
    )
}