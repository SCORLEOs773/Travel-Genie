import DatePicker from "react-datepicker";
import "./DateSelector.css";
import { useCategory } from "../../context/category-context";

export const DateSelector = ({placeholder, checkType}) => {

    const { checkInDate, checkOutDate,  categoryDispatch} = useCategory();

    const handleDateChange = (date) => {
        categoryDispatch({
            type: checkType === "in" ? "CHECK_IN" : "CHECK_OUT",
            payload: date
        })
    }

    const handleDateFocus = () => {
        categoryDispatch({
            type: "DATE_FOCUS"
        })
    }

    return (
        <DatePicker
            className="search-dest input"
            selected={checkType === "in" ? checkInDate : checkOutDate}
            onChange={date => handleDateChange(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText={placeholder}
            closeOnScroll={true}
            minDate={new Date()}
            onFocus={handleDateFocus}
        />
    )
}