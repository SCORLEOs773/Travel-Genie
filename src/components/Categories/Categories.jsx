import { useState } from "react";
import { useCategory } from "../../context/category-context";
import "./Categories.css";

export const Categories = ({ categories }) => {
    
    const [categoryLimit, setCategoryLimit] = useState(0);

    const { categoryDispatch, hotelCategory } = useCategory();

    const categoriesToShow = categories.slice(categoryLimit, categoryLimit > categories.length ? categories.length : categoryLimit + 11);

    const handleShowMoreRightClick = () => {
        setCategoryLimit(prev => prev + 11);
    }

    const handleShowMoreLeftClick = () => {
        setCategoryLimit(prev => prev - 11);
    }

    const handleCategoryClick = (category) => {
        categoryDispatch({
            type: "CATEGORY",
            payload: category
        })
    }

    return (
                <section className="categories d-flex align-center justify-center gap-large cursor-pointer">
                    {
                        categoryLimit >= 11 ? (
                            <button className="button cursor" onClick={handleShowMoreLeftClick}>
                                <span class="material-icons-outlined">
                                    chevron_left
                                </span>
                            </button>
                        ) : ""
                    }
                    {
                        categoriesToShow && categoriesToShow.map(({id, category}) => <span className={`${category === hotelCategory ? "border-bottom" : ""} `} key={id} onClick={() => handleCategoryClick(category)}>{category}</span>)
                    }
                    {
                        categoryLimit + 11 < categories.length ? (
                            <button className="button cursor" onClick={handleShowMoreRightClick}>
                                <span className="material-icons-outlined">
                                    chevron_right
                                </span>
                            </button>
                        ) : ""
                    }
                </section>
    )
}