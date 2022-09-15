import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="heading d-flex align-center gutter-0">
            <h1 className="heading-1">
                <a className="link" href="/">Travel</a>
            </h1>
            <div className="form-container shadow d-flex align-center cursor-pointer">
                <span className="form-option">Anywhere</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any week</span>
                <span className="border-right-1px"></span>
                <span className="form-option add-guest">Add Guest</span>
                <span className="search material-icons-outlined cursor-pointer">
                    search
                </span>
            </div>
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