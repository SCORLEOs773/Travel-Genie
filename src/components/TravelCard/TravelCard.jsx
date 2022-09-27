import { useNavigate } from "react-router-dom";
import { checkHotelInWishlist } from "../../utilities"
import "./TravelCard.css";

export const TravelCard = ({ hotel }) => {

    const { id, name, image, address, country, rating, price } = hotel;

    const navigate = useNavigate();

    const handleSelectHotelClick = () => {
        navigate(`/hotel/${id}`)
    }

    const handleWishlistClick = () => {
        console.log("clicked");
    }

    return (
        <div className="relative">
            <div className="travelcard-container shadow cursor-pointer " onClick={handleSelectHotelClick}>
                <img className="img" src={image} alt="" />
                <div className="travelcard-details d-flex align-center">
                    <span className="location">{address}, {country}</span>
                    <span className="rating d-flex align-center">
                        <span class="material-icons-outlined">
                            star
                        </span>
                        {rating}
                    </span>
                </div>
                <p className="hotel-name">{name}</p>
                <p className="price-details"><span className="price">₹{price}</span> night</p>
            </div >
            <div className="wishlist">
                <button className={`button btn-wishlist d-flex align-center justify-center absolute`} onClick={handleWishlistClick}>
                    <span class="material-icons favorite cursor">
                        favorite
                    </span>
                </button>
            </div>
        </div>

    )
}