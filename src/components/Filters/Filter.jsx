import { FreeCancel, Rating, RoomsAndBeds, PropertyType, PriceRange } from "./index"
import "./Filter.css";
import { useFilter } from "../../context";

export const Filter = () => {

    const { filterDispatch } = useFilter();

    const handleCancelClick = () => {
        filterDispatch({
            type: "CANCEL_FILTER"
        })    
    }

    const handleApplyClick = () => {
        filterDispatch({
            type: "FILTER_MODAL"
        })
    }

    const handleFilterCloseClick = () => {
        filterDispatch({
            type: "CANCEL_FILTER"
        }) 
        filterDispatch({
            type: "FILTER_MODAL"
        })
    }

    return (
        <div className="filter-modal">
            <div className="filter-page shadow">
            <div className="d-flex align-center space-between">
                <span className="filter-label">Filters</span>
                <button className="button btn-auth btn-close cursor-pointer d-flex align-center justify-center" onClick={handleFilterCloseClick}>
                    <span class="material-icons-outlined">
                        close
                    </span>
                </button>
            </div>
            <PriceRange />
            <RoomsAndBeds />
            <PropertyType />
            <Rating />
            <FreeCancel />
            <div className="cta d-flex align-center space-between">
                <button className="button btn-link-primary cursor" onClick={handleCancelClick}>Clear All</button>
                <button className="button btn-primary btn-apply cursor" onClick={handleApplyClick}>Apply</button>
            </div>
        </div>
        </div>
        
    )
}