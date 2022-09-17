import "./Navbar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useCategory } from "../../context/category-context";
import { SearchStayWithDate } from "../index";

export const Navbar = () => {

    const { categoryDispatch, isDestinationModalOpen } = useCategory();

    const handleDestinationAndDateClick = () => {
        categoryDispatch({
            type: "OPEN_DESTINATION_MODAL"
        })
    }

    return (
        <header className="heading d-flex align-center gutter-0">
            <h1 className="heading-1">
                <a className="link" href="/">Travel</a>
            </h1>
            {
                !isDestinationModalOpen ? (
                    <div className="form-container shadow d-flex align-center cursor-pointer" onClick={handleDestinationAndDateClick}>
                        <span className="form-option">Anywhere</span>
                        <span className="border-right-1px"></span>
                        <span className="form-option">Any week</span>
                        <span className="border-right-1px"></span>
                        <span className="form-option add-guest">Add Guest</span>
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