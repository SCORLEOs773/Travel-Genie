import { useNavigate } from "react-router-dom";
import check from "../../assets/check.png";
import { useCategory, useFilter } from "../../context";
import "./Order.css";

export const Order = () => {

    const navigate = useNavigate();

    const { categoryDispatch } = useCategory();
    const { filterDispatch } = useFilter();

    const handleConitnueShoppingClick = () => {
        categoryDispatch({
            type: "CLEAR_CATEGORY"
        })
        filterDispatch({
            type: "CANCEL_FILTER"
        })
        navigate("/")
    }

    return (
        <div className="order-container d-flex direction-column align-center justify-center gap ">
            <img className="image" src={check} alt="success"/>
            <span className="heading-2">Stay Booked Successfully</span>
            <button className="button btn-primary cursor" onClick={handleConitnueShoppingClick}>Continue Booking</button>
        </div>
    )
}