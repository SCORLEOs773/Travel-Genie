import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../../reducer/category-reducer";

const initalState = {
    hotelCategory: "National Parks"
}

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    
    const [{hotelCategory}, categoryDispatch] = useReducer(categoryReducer, initalState);

    return (
        <CategoryContext.Provider value={{hotelCategory, categoryDispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider }