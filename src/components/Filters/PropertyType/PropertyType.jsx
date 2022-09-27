import { useFilter } from "../../../context"

const propertyTypes = ["House", "Guest House", "Flat", "Hotel"]

export const PropertyType = () => {

    const { propertyType, filterDispatch } = useFilter();

    const handlePropertyClick = (propertyType) => {
        filterDispatch({
            type: "PROPERTY_TYPE",
            payload: propertyType
        })
    }

    return (
        <div className="filter-container">
            <span className="filter-label">Property Type</span>
            <div className="d-flex gap-xxl">
                {
                    propertyTypes.map(property => <span key={property} className={`span-label property-type cursor-pointer align-center justify-center on-hover ${propertyType === property ? "selected" : ""}`} onClick={() => handlePropertyClick(property)}>{property}</span>)
                }
            </div>
        </div>
    )
}