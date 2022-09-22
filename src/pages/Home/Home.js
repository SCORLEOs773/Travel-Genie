import { Navbar, Categories, TravelCard, AuthModal } from "../../components";
import { categories, hotels } from "../../db/";
import { Fragment, useCallback, useEffect } from "react";
import { useCategory, useAuth } from "../../context";
import "./Home.css";

export const Home = () => {

    const { isAuthModalOpen } = useAuth();

    const { hotelCategory, categoryDispatch, isDestinationModalOpen } = useCategory();

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



    return (
        <Fragment>
            <div className="home-container">
                <Navbar route="home" />
                <Categories categories={categories} />
                <section className="hotels d-flex align-center wrap gap-xxl">
                    {
                        hotels.categories[hotelCategory]?.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
                    }
                </section>
            </div>
            {
                isAuthModalOpen &&
                    <AuthModal />
            }
        </Fragment>

    )
}