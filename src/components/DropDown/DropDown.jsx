import { useNavigate } from "react-router-dom";
import { useAuth, useCategory } from "../../context";
import "./DropDown.css";

export const DropDown = () => {

    const navigate = useNavigate();

    const { authDispatch, logoutHanlder } = useAuth();

    const { categoryDispatch } = useCategory();

    const handleWishlistClick = () => {
        authDispatch({
            type: "SHOW_DROP_DOWN_OPTIONS"
        })
        navigate("/wishlist");
    }

    const handleLogoutClick = () => {
        logoutHanlder();
        authDispatch({
            type: "SHOW_DROP_DOWN_OPTIONS"
        })
        categoryDispatch({
            type: "CLEAR_CATEGORY"
        })
    }

    return (
        <div className="drop-down-container shadow d-flex direction-column absolute">
            <span className="option-span wishlist-span cursor-pointer d-flex align-center gap-small" onClick={handleWishlistClick}><span class="material-icons-outlined">
                favorite_border
            </span>
                Wishlist
            </span>
            <span className="option-span logout cursor-pointer d-flex align-center gap-small" onClick={handleLogoutClick}>
                <span class="material-icons-outlined">
                    logout
                </span>
                Logout</span>
        </div>
    )
}