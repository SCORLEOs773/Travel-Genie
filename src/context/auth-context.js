import { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer";

const initialState = {
    isAuthModalOpen: false,
    isDropDownModalOpen: false,
    name: "",
    number: "",
    email: "",
    password: "",
}

const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [{ isAuthModalOpen, isDropDownModalOpen, name, number, email, password }, authDispatch] = useReducer(authReducer, initialState);

    const [token, setToken] = useState();

    const loginHandler = (number, password) => {
        localStorage.setItem("token", "12345");
        console.log({ number, password })
        setToken("12345");
        authDispatch({
            type: "SHOW_AUTH_MODAL"
        })
        navigate("/");
    }

    const logoutHanlder = () => {
        localStorage.clear();
        setToken("");
        navigate("/");
    }
    
    return (
        <AuthContext.Provider value={{ isAuthModalOpen, isDropDownModalOpen, name, number, email, password, token, loginHandler, logoutHanlder, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }