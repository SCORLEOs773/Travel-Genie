import "./AuthModal.css";
import { useState } from "react"
import { AuthLogin, AuthSignup } from "../index";
import { useAuth } from "../../context";

export const AuthModal = () => {

    const { authDispatch } = useAuth();

    const [selectedTab, setSelectedTab] = useState("login");

    const handleLoginClick = () => {
        setSelectedTab("login");
    }

    const handleSignupClick = () => {
        setSelectedTab("signup");
    }

    const handleCloseClick = () => {
        setSelectedTab("close");
        authDispatch({
            type: "SHOW_AUTH_MODAL"
        })
    }

    return (
        <div className="auth-modal-container fixed">
            <div className="auth-modal d-flex direction-column shadow absolute right-0">
                <div className="d-flex align-center shadow">
                    <button className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab === "login" ? "btn-auth-selected" : ""}`} onClick={handleLoginClick}>Login</button>
                    <button className={`button btn-auth grow-shrink-basis cursor-pointer ${selectedTab === "signup" ? "btn-auth-selected" : ""}`} onClick={handleSignupClick}>Sign up</button>
                    <button className={`button btn-auth btn-close cursor-pointer d-flex align-center justify-center ${selectedTab === "close" ? "btn-auth-selected" : ""}`} onClick={handleCloseClick}>
                        <span class="material-icons-outlined">
                            close
                        </span>
                    </button>
                </div>
                <div>
                    {
                        selectedTab === "login" ? (
                            <AuthLogin />
                        ) : selectedTab === "signup" ? (
                            <AuthSignup />
                        ) : ""
                    }
                </div>
            </div>
        </div>


    )
}