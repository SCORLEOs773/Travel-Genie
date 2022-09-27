import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initalState = {
    isFilterModalOpen: false,
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    traveloRating: "1",
    isCancelable: true,
    priceRange: [200, 15000]
}

const FilterContext = createContext(initalState);

const FilterProvider = ({children}) => {

    const [{ isFilterModalOpen, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, priceRange, traveloRating, isCancelable }, filterDispatch] = useReducer(filterReducer, initalState);

    return (
        <FilterContext.Provider value={{ isFilterModalOpen, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, priceRange, traveloRating, isCancelable, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider }