import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../Filter.css";
import { useFilter } from "../../../context";

function valuetext(value) {
    return `${value}`;
}

const minDifference = 500;

export const PriceRange = () => {

    const { priceRange, filterDispatch } = useFilter();

    const handlePriceRangeChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            filterDispatch({
                type: "MINIMUM_PRICE",
                payload: {
                    newValue, priceRange, minDifference
                }
            })
        } else {
            filterDispatch({
                type: "MAXIMUM_PRICE",
                payload: {
                    newValue, priceRange, minDifference
                }
            })
        }
    };

    return (
        <div className="filter-container">
            <span className="filter-label">Price Range</span>
            <Box>
                <Slider sx={{ color: "#ff6525" }}
                    className="pricerange"
                    getAriaLabel={() => "Minimum difference"}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    min={100}
                    max={25000}
                    disableSwap
                />
            </Box>
        </div>

    );
}
