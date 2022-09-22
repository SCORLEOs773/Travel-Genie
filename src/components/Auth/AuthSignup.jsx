import "./Auth.css";

export const AuthSignup = () => {
    return (
        <div className="auth-container">
            <form>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Mobile Number <span className="asterisk">*</span> </label>
                    <input className="auth-input" placeholder="Enter Mobile Number" maxLength="10" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Name <span className="asterisk">*</span> </label>
                    <input className="auth-input" required placeholder="Enter Name" />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Email <span className="asterisk">*</span> </label>
                    <input className="auth-input" type="email" required placeholder="Enter Email" />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span> </label>
                    <input className="auth-input" type="password" placeholder="Enter Password" required />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Confirm Password <span className="asterisk">*</span> </label>
                    <input className="auth-input" type="password" placeholder="Enter Password" required />
                </div>
                <div>
                    <button className="button btn-primary btn-verify cursor">Submit</button>
                </div>
            </form>
        </div>
    )
}