import { useNavigate } from "react-router-dom";
import { DateSelector } from "../index";
import "./SearchStayWithDate.css";
import { useCategory } from "../../context/category-context";
import { hotels } from "../../db";

export const SearchStayWithDate = () => {

    const { categoryDispatch, noOfGuests, destination, hotelCategory, isSearchResultOpen } = useCategory();

    const navigate = useNavigate();

    const handleGuestChange = (e) => {
        categoryDispatch({
            type: "GUEST_COUNT",
            payload: e.target.value
        })
    }

    const handleDestinationChange = e => {
        categoryDispatch({
            type: "DESTINATION",
            payload: e.target.value
        })
    }

    const handleDestinationFocus = () => {
        categoryDispatch({
            type: "SHOW_SEARCH_RESULT"
        })
    }

    const handleSearchClick = () => {
        categoryDispatch({
            type: "CHANGE_DESTINATION_MODAL_STATUS"
        })
        if (destination.length > 0) {
            navigate(`/hotels/${destination}`);
        }
    }

    const handleSearchResultClick = (address) => {
        categoryDispatch({
            type: "DESTINATION",
            payload: address
        })
    }

    const filteredSearchResult = hotels.categories[hotelCategory].filter(({ address, city, state, country }) => address.toLowerCase().includes(destination.toLowerCase()) || state.toLowerCase().includes(destination.toLowerCase()) || city.toLowerCase().includes(destination.toLowerCase()) || country.toLowerCase().includes(destination.toLowerCase()));

    return (
        <div className="destination-container">
            <div className="d-flex align-center justify-center destination-options">
                <div className="location-search loc-container">
                    <label className="label">Where</label>
                    <input className="search-dest input" value={destination} placeholder="Search destination" autoFocus onChange={handleDestinationChange} onFocus={handleDestinationFocus} />
                </div>
                <div className="checkin loc-container">
                    <label className="label">Check in</label>
                    <DateSelector placeholder="Add dates" checkType="in" />
                </div>
                <div className="checkout loc-container">
                    <label className="label">Check out</label>
                    <DateSelector placeholder="Add dates" checkType="out" />
                </div>
                <div className="guest loc-container">
                    <label className="label">No. of Guests</label>
                    <input className="search-dest input" type="number" placeholder="Add guests" value={noOfGuests} onChange={handleGuestChange} />
                </div>
                <div className="search-con d-flex align-center cursor" onClick={handleSearchClick}>
                    <span className="material-icons-outlined cursor-pointer">
                        search
                    </span>
                    Search
                </div>
            </div>
            <div className="search-result-container">
                {
                    isSearchResultOpen && filteredSearchResult && filteredSearchResult.length > 0 && filteredSearchResult.map(({ address, city, state }) => <p onClick={() => handleSearchResultClick(address)} className="p cursor-pointer">{address}, {city}</p>)
                }
            </div>
        </div>
    )
}