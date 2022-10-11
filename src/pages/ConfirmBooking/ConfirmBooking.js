import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ConfirmBooking.css";
import { useCategory } from "../../context"
import { hotels } from "../../db";
import logo from "../../assets/TravelO.png";

export const ConfirmBooking = () => {

    const { checkInDate, checkOutDate, noOfGuests, hotelCategory } = useCategory();
    const numberOfNights = checkInDate && checkOutDate ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24) : 0;

    const urlParams = useParams();
    const { stayId } = urlParams;

    const navigate = useNavigate();

    const filteredHotel = hotels.categories[hotelCategory].filter(hotel => hotel.id === stayId);
    const [confirmedHotel] = filteredHotel;

    const { image, name, address, state, rating, price } = confirmedHotel;

    const totalPayableAmount = price * numberOfNights + 150;

    const loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src= src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
  
    const displayRazorpay = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
        if(!response){
          console.log(
              {message: "Razorpay SDK failed to load"})
        }
  
        const options = {
          key: "rzp_test_VSdp7X3K39GwBK",
          amount: totalPayableAmount * 100,
          curreny: "INR",
          name: "TravelO",
          email: "prakash@gmail.com",
          contact: "9876543210",
          description: "Thank you for booking with us.",
          image: logo,
  
          handler: ({payment_id}) => {
              navigate("/book/stay/success")
          },
          prefill: {
            name: "Prakash Sakari",
            email: "praksh@gmail.com",
            contact: "9876543210",
          }
        }
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <Fragment>
            <header className="heading d-flex align-center gutter-0">
                <h1 className="heading-1">
                    <a className="link" href="/">TravelO</a>
                </h1>
            </header>
            <main className="main d-flex justify-center">
                <div className="d-flex direction-column gap-medium final-details-container">
                    <h2>Trip Details</h2>
                    <div className="dates-and-guests d-flex direction-column gap-medium">
                        <h3>Your Trip</h3>
                        <div>
                            <p>Dates</p>
                            <span>{checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })} - {checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })}</span>
                        </div>
                        <div>
                            <p>Guests</p>
                            <span>{noOfGuests > 1 ? `${noOfGuests} guests` : `${noOfGuests} guest`}</span>
                        </div>
                    </div>
                    <div className="d-flex direction-column gap-small">
                        <h3>Pay with</h3>
                        <div className="payment-option">Razorpay</div>
                    </div>
                    <div>
                        <button className="button btn-primary btn-reserve cursor btn-pay" onClick={displayRazorpay}>
                            Confirm booking
                        </button>
                    </div>
                </div>
                <div className="d-flex direction-column gap-large final-details">
                    <div className="d-flex gap-small">
                        <img className="image" src={image} alt={name}/>
                        <div className="d-flex direction-column">
                            <div className="d-flex direction-column grow-shrink-basis">
                                <span>{name}</span>
                                <span>{address}, {state}</span>
                            </div>
                            <div className="rating-container">
                                <span className="rating d-flex align-center">
                                    <span class="material-icons-outlined">
                                        star
                                    </span>
                                    {rating}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="tag">
                        Your booking is protected by <strong className="strong">TravelO</strong>cover
                    </div>
                    <div className="price-detail-container">
                        <div className="price-distribution d-flex direction-column">
                            <h3>Price details</h3>
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
                                <span className="span">Rs. {totalPayableAmount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}