import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/category-reducer";

const initalState = {
    hotelCategory: "National Parks",
    isDestinationModalOpen: false,
    checkInDate: null,
    checkOutDate: null,
    noOfGuests: 0,
    destination: "",
    isSearchResultOpen: true
}

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [{ hotelCategory, isDestinationModalOpen, checkInDate, checkOutDate, noOfGuests, destination, isSearchResultOpen }, categoryDispatch] = useReducer(categoryReducer, initalState);

    return (
        <CategoryContext.Provider value={{hotelCategory, isDestinationModalOpen, checkInDate, checkOutDate, noOfGuests, destination, isSearchResultOpen, categoryDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider }