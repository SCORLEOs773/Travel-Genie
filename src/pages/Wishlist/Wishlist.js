import { Fragment } from "react";
import { Navbar, TravelCard } from "../../components";
import { useWishlist } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {

    const { wishlist } = useWishlist();

    return (
        <Fragment>
            <Navbar route="wishlist" />
            <div className="wishlist-page">
                <h2 className="heading-2">Wishlist</h2>
                <section className="wishlisted-hotel d-flex align-center wrap gap-xxl">
                    {
                        wishlist && wishlist.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
                    }
                </section>
            </div>

        </Fragment>
    )
}