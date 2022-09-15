import { Navbar, Categories, TravelCard } from "../../components";
import { categories, hotels } from "../../db/";
import { useCategory } from "../../components/context/category-context";
import "./Home.css";

export const Home = () => {

    const { hotelCategory } = useCategory();

    const handleScroll = e => {
        console.log(e.target.scrollHeight)
      };

    return (
        <div onScroll={handleScroll}>
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