import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialState = {
    isAuthModalOpen: false,
    name: "",
    number: "",
    email: "",
    password: "",
}

const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {

    const [{ isAuthModalOpen, name, number, email, password }, authDispatch] = useReducer(authReducer, initialState);
    
    return (
        <AuthContext.Provider value={{ isAuthModalOpen, name, number, email, password, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }