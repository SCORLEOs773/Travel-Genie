import "../Filter.css";
import { useFilter } from "../../../context";
const numbers = ["1", "2", "3", "4", "5"];

export const Rating = () => {

    const { traveloRating, filterDispatch } = useFilter();

    const handleRatingClick = (number) => {
        filterDispatch({
            type: "RATING",
            payload: number
        })
    }

    return (
        <div className="filter-container">
            <span className="filter-label">Star Rating</span>
            <div className="d-flex align-center gap">
                {
                    numbers.map(number => <span key={number} value={number} class={`span-label room-count star d-flex align-center justify-center cursor-pointer on-hover ${Number(number) === traveloRating ? "selected" : ""}`} onClick={() => handleRatingClick(number)}>{number} &Up</span>)
                }
            </div>
        </div>
    )
}