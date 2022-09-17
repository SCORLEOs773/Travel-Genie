import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/category-reducer";

const initalState = {
    hotelCategory: "National Parks",
    isDestinationModalOpen: false,
    checkInDate: "",
    checkOutDate: ""
}

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [{ hotelCategory, isDestinationModalOpen, checkInDate, checkOutDate }, categoryDispatch] = useReducer(categoryReducer, initalState);

    return (
        <CategoryContext.Provider value={{hotelCategory, isDestinationModalOpen, checkInDate, checkOutDate, categoryDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider }