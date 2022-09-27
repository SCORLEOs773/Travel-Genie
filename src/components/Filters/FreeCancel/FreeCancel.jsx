import "./FreeCancel.css";
import { useFilter } from "../../../context";

export const FreeCancel = () => {

    const { isCancelable, filterDispatch } = useFilter();

    const handleCancelChange = (event) => {
        filterDispatch({
            type: "CANCEL_HOTEL",
            payload: event.target.checked
        })
    }

    return (
        <div className="filter-container">
            <div className="d-flex align-center gap-xxl">
                <span className="filter-label">Free Cancelation</span>
                <label className="switch">
                    <input type="checkbox" value={isCancelable} onChange={handleCancelChange} checked={isCancelable} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}