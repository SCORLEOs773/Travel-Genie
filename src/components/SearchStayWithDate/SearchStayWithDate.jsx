import { DateSelector } from "../index";
import "./SearchStayWithDate.css";

export const SearchStayWithDate = () => {
    return (
        <div className="d-flex align-center justify-center destination-container">
            <div className="location-search loc-container">
                <label className="label">Where</label>
                <input className="search-dest input" placeholder="Search destination" autoFocus/>
            </div>
            <div className="checkin loc-container">
                <label className="label">Check in</label>
                <DateSelector placeholder="Add dates" checkType="in"/>
            </div>
            <div className="checkout loc-container">
                <label className="label">Check out</label>
                <DateSelector placeholder="Add dates" checkType="out"/>
            </div>
            <div className="guest loc-container">
                <label className="label">Who</label>
                <input className="search-dest input" type="number" placeholder="Add guests" />
            </div>
            <div className="search-con d-flex align-center">
                <span className="material-icons-outlined cursor-pointer">
                    search
                </span>
                Search
            </div>
        </div>
    )
}