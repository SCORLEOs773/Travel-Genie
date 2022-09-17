import "./HostAndHotelDetails.css";

export const HostAndHotelDetails = ({singleHotel}) => {

    const { numberOfBathrooms, numberOfBeds, numberOfguest } = singleHotel;

    return (
        <div className="hotel-details-container">
            <div className="host-details">
                <p className="host-name p">
                    Hosted by Daleep
                </p>
                <span className="span">{numberOfguest} guests. 1 bedroom. {numberOfBeds} bed. {numberOfBathrooms} bathroom. </span>
            </div>
            <div className="key-features host-details">
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap"><span class="apps material-icons-outlined">
                        apps
                    </span>Dedicated Workspace</p>
                    <span className="span">A common area with wifi that is  well suited for working</span>
                </div>
                <div className="gutter-bottom-small">
                    <p className="p d-flex align-center gap"><span class="apps material-icons-outlined">
                        apps
                    </span>Great Location</p>
                    <span className="span">80% of recent guests gave the location a 5-star rating</span>
                </div>
                <p className="p d-flex align-center gap"><span class="apps material-icons-outlined">
                    apps
                </span>Free cancellation before 7 days of booking</p>
            </div>
            <div className="amenities-container host-details">
                <p className="p amenities">What this place offers</p>
                <div className="d-flex gap-xxl">
                    <div className="d-flex direction-column">
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Kitchen</span>
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Free parking on premises</span>
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Dedicated Workspace</span>

                    </div>
                    <div className="d-flex direction-column">
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Wifi</span>
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Washing Machine</span>
                        <span className="span d-flex align-center gap"><span class="apps material-icons-outlined">
                            apps
                        </span>Patio or Balcony</span>
                    </div>

                </div>
            </div>
            {/* <div className="facilities host-details">
                <p className="p amenities">What this place offers</p>
                <div className="d-flex direction-column gap">
                    <span className="span d-flex align-center gap"><span class="material-icons-outlined">
                        apps
                    </span>Kitchen</span>
                    <span className="span d-flex align-center gap"><span class="material-icons-outlined">
                        apps
                    </span>Free parking on premises</span>
                </div>
            </div> */}
        </div>
    )
}