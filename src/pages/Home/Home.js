import { Navbar, Categories, TravelCard } from "../../components";
import { categories, hotels } from "../../db/";
import { useCategory } from "../../context/category-context";
import "./Home.css";

export const Home = () => {

    const { hotelCategory, isDestinationModalOpen } = useCategory();

    console.log({isDestinationModalOpen})

    return (
        <div>
            <Navbar />
            <Categories categories={categories}/>
            <section className="hotels d-flex align-center wrap gap-xxl">
            {
                hotels.categories[hotelCategory]?.map(hotel => <TravelCard key={hotel.id} hotel={hotel} />)
            }
            </section>
            
        </div>
    )
}