import { useState } from "react";
import { useCategory, useFilter } from "../../context";
import "./Categories.css";

export const Categories = ({ categories }) => {

    const [categoryLimit, setCategoryLimit] = useState(0);

    const { categoryDispatch, hotelCategory } = useCategory();

    const { filterDispatch } = useFilter();

    const categoriesToShow = categories.slice(categoryLimit + 10 > categories.length ? categories.length - 10 : categoryLimit, categoryLimit > categories.length ? categories.length : categoryLimit + 10);

    const handleShowMoreRightClick = () => {
        setCategoryLimit(prev => prev + 10);
    }

    const handleShowMoreLeftClick = () => {
        setCategoryLimit(prev => prev - 10);
    }

    const handleCategoryClick = (category) => {
        categoryDispatch({
            type: "CATEGORY",
            payload: category
        })
    }

    const handleFilterClick = () => {
        filterDispatch({
            type: "FILTER_MODAL"
        })
    }

    return (
        <section className="categories d-flex align-center gap-large cursor-pointer">
            {
                categoryLimit >= 10 ? (
                    <button className="button btn-category btn-left cursor-pointer d-flex align-center justify-center absolute" onClick={handleShowMoreLeftClick}>
                        <span class="material-icons-outlined">
                            chevron_left
                        </span>
                    </button>
                ) : ""
            }
            {
                categoriesToShow && categoriesToShow.map(({ id, category }) => <span className={`${category === hotelCategory ? "border-bottom" : ""} `} key={id} onClick={() => handleCategoryClick(category)}>{category}</span>)
            }
            {
                categoryLimit + 10 < categories.length ? (
                    <button className="button btn-category btn-right cursor-pointer d-flex align-center justify-center fixed" onClick={handleShowMoreRightClick}>
                        <span className="material-icons-outlined">
                            chevron_right
                        </span>
                    </button>
                ) : ""
            }
            <div>
                <button className="button btn-filter d-flex align-center gap-small fixed cursor-pointer" onClick={handleFilterClick}>
                    <span class="material-icons-outlined">
                        filter_alt
                    </span>
                    Filter</button>
            </div>
        </section>
    )
}