import { Fragment } from "react"
import "./HotelImages.css";

export const HotelImages = ({singleHotel}) => {

    const { name, country, image, imageArr } = singleHotel;

    return (
        <Fragment>
            <div className="hotel-name-address">
                    {name}, {country}
                </div>
                <div className="hotel-images-container d-flex gap-small">
                    <div className="primary-img-container">
                        <img src={image} className="hotel-img primary-img" alt="hotel-img" />
                    </div>
                    <div className="d-flex gap-small wrap">
                        {
                            imageArr.map(img => <img src={img} className="hotel-img" alt="hotel-img" />)
                        }
                    </div>
                </div>
        </Fragment>
    )
}