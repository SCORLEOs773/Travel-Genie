import "./Navbar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useCategory } from "../../context/category-context";
import { SearchStayWithDate } from "../index";

export const Navbar = ({route}) => {

    const { categoryDispatch, isDestinationModalOpen, destination, checkInDate, checkOutDate, noOfGuests } = useCategory();
    console.log("from navbar -", {isDestinationModalOpen})

    const handleDestinationAndDateClick = () => {
        categoryDispatch({
            type: "OPEN_DESTINATION_MODAL"
        })
    }

    

    return (
        <header className="heading d-flex align-center gutter-0">
            <h1 className="heading-1">
                <a className="link" href="/">TravelO</a>
            </h1>
            {
                !isDestinationModalOpen && (route === "home" || route === "search") ? (
                    <div className="form-container shadow d-flex align-center cursor-pointer" onClick={handleDestinationAndDateClick}>
                        <span className="form-option">{destination || "Anywhere"} </span>
                        <span className="border-right-1px"></span>
                        <span className="form-option">{checkInDate && checkOutDate ? `${checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short"})} - ${checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short"})}` : "Any week"} </span>
                        <span className="border-right-1px"></span>
                        <span className="form-option add-guest">{noOfGuests || "Add Guest"}</span>
                        <span className="search material-icons-outlined cursor-pointer">
                            search
                        </span>
                    </div>
                ) : !isDestinationModalOpen && route === "single-hotel" ? (
                    <div className="form-container shadow d-flex align-center gap-96px cursor-pointer" onClick={handleDestinationAndDateClick}>
                        <span className="form-option opacity-50">Start your search</span>
                        <span className="search material-icons-outlined cursor-pointer">
                            search  
                        </span>
                    </div>
                ) : (<SearchStayWithDate />)
            }

            <nav className="nav d-flex align-center cursor-pointer">
                <span class="material-icons-outlined profile-option menu">
                    menu
                </span>
                <span class="material-icons-outlined profile-option person">
                    person_2
                </span>
            </nav>
        </header>
    )
}