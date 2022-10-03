import { useNavigate } from "react-router-dom";
import "./FinalPrice.css";
import { DateSelector } from "../DateSelector/DateSelector";
import { useCategory } from "../../context/category-context";

export const FinalPrice = ({ singleHotel }) => {

    const navigate = useNavigate();

    const { id, price, rating } = singleHotel;

    const { noOfGuests, checkInDate, checkOutDate, categoryDispatch } = useCategory();

    const numberOfNights = checkInDate && checkOutDate ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24) : 0;

    const handleReserveClick = () => {
        navigate(`/book/stay/${id}`)
    }

    const handleGuestChange = (e) => {
        categoryDispatch({
            type: "GUEST_COUNT",
            payload: e.target.value
        })
    }

    return (
        <div className="price-details-container shadow d-flex direction-column gap">
            <div className="price-rating d-flex align-center justify-space-between">
                <p className=""><span className="font-bold fs-large">₹{price}</span> night</p>
                <span className="rating d-flex align-center">
                    <span class="material-icons-outlined">
                        star
                    </span>
                    {rating}
                </span>
            </div>
            <div className="d-flex direction-column">
                <div class="grid-container-two-col selected-dates">
                    <div className="checkin loc-container">
                        <label className="label">Check in</label>
                        <DateSelector placeholder="Add dates" checkType="in" />
                    </div>
                    <div className="checkout loc-container">
                        <label className="label">Check out</label>
                        <DateSelector placeholder="Add dates" checkType="out" />
                    </div>
                </div>
                <div>
                    <div className="date gutter-sm">
                        <p className="span">GUESTS</p>
                        {
                            noOfGuests <= 0 ? (
                                <input className="guest-count-input" type="number" placeholder="Add guests" value={noOfGuests} onChange={handleGuestChange}/>
                            ) : (
                                <span className="span">{noOfGuests} guests</span>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div>
                <button className="button btn-primary btn-reserve cursor" disabled={checkInDate && checkOutDate && noOfGuests > 0 ? false : true} onClick={handleReserveClick}>Reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Rs. {price} x {numberOfNights} nights</span>
                    <span className="span">Rs. {price * numberOfNights}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Service fee</span>
                    <span className="span">Rs. 150</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Total</span>
                    <span className="span">Rs. {price * numberOfNights + 150}</span>
                </div>
            </div>
        </div>
    )
}