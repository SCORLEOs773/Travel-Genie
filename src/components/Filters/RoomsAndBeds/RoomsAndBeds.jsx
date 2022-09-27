import "../Filter.css"
import { useFilter } from "../../../context";

const numbers = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {

    const { noOfBathrooms, noOfBedrooms, noOfBeds, filterDispatch } = useFilter();

    const handleBedroomsClick = (number) => {
        filterDispatch({
            type: "BEDROOMS",
            payload: number
        })
    }

    const handleBedsClick = (number) => {
        filterDispatch({
            type: "BEDS",
            payload: number
        })
    }

    const handleBathroomsClick = (number) => {
        filterDispatch({
            type: "BATHROOMS",
            payload: number
        })
    }

    return (
        <div className="filter-container">
            <span className="filter-label">Rooms And Beds</span>
            <div className="d-flex align-center gap-large">
                <div className="d-flex direction-column gap ">
                    <span className="span-label">Bedrooms</span>
                    <span className="span-label beds">Beds</span>
                    <span className="span-label">Bathrooms</span>
                </div>
                <div className="d-flex direction-column gap">
                    <div>
                    {
                        numbers.map(number => <span key={number} className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBedrooms === Number(number) ? "selected": ""}`} onClick={() => handleBedroomsClick(number)}>{number}</span>)
                    }
                    </div>
                    <div>
                    {
                        numbers.map(number => <span key={number} className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBeds === Number(number) ? "selected": ""}`} onClick={() => handleBedsClick(number)}>{number}</span>)
                    }
                    </div>
                    <div>
                    {
                        numbers.map(number => <span key={number} className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBathrooms === Number(number) ? "selected": ""}`} onClick={() => handleBathroomsClick(number)}>{number}</span>)
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}