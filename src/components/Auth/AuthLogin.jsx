import { useAuth } from "../../context";
import "./Auth.css";

export const AuthLogin = () => {

    const { authDispatch, loginHandler } = useAuth();

    const handleMobileNumberChange = (event) => {
        authDispatch({
            type: "MOBILE_NUMBER",
            payload: event.target.value
        })
    }

    const handlePasswordChange = (event) => {
        authDispatch({
            type: "PASSWORD",
            payload: event.target.value
        })
    }

    const handleTestCredentialsClick = () => {
        loginHandler("1234567890", "Prakash@123");
    }

    return (
        <div className="auth-container">
            <form>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Mobile Number <span className="asterisk">*</span> </label>
                    <input className="auth-input" placeholder="Enter Mobile Number" maxLength="10" required onChange={handleMobileNumberChange}/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span> </label>
                    <input className="auth-input" type="password" placeholder="Enter Password" required onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className="button btn-primary btn-verify cursor">Verify</button>
                </div>
            </form>
            <div className="cta">
                <button className="button btn-outline-primary cursor-pointer" onClick={handleTestCredentialsClick}>Login with Test Credentials</button>
            </div>
            <div className="d-flex align-center">
                <div className="hr-line"></div>
                <span>or</span>
                <div className="hr-line"></div>
            </div>
            <div className="cta">
                <button className="button btn-outline-primary btn-gmail cursor-pointer">Login with Gmail</button>
            </div>
        </div>
    )
}