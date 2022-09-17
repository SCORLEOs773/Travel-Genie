import "./FinalPrice.css";

export const FinalPrice = ({singleHotel}) => {

    const { price, rating, numberOfguest } = singleHotel;

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
                <div class="grid-container-two-col">
                    <div class="date d-flex direction-column align-center">
                        <p className="span">CHECK-IN</p>
                        <span className="span">20/10/2022</span>
                    </div>
                    <div class="date d-flex direction-column align-center">
                        <p className="span">CHECK-OUT</p>
                        <span className="span">20/10/2022</span>
                    </div>
                </div>
                <div>
                    <div className="date gutter-sm">
                        <p className="span">GUESTS</p>
                        <span className="span">{numberOfguest} guests</span>
                    </div>
                </div>
            </div>
            <div>
                <button className="button btn-primary btn-reserve">Reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Rs. {price} x 2 nights</span>
                    <span className="span">Rs. 5xxx</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Service fee</span>
                    <span className="span">Rs. 150</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Total</span>
                    <span className="span">Rs. 5xxx</span>
                </div>
            </div>
        </div>
    )
}