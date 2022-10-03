import { Routes, Route } from "react-router-dom";
import { Home, SingleHotel, SearchResult, Wishlist, ConfirmBooking, Order } from "./pages";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:hotelId" element={<SingleHotel />} />
        <Route path="/hotels/:hotel" element={<SearchResult />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/book/stay/:stayId" element={<ConfirmBooking />} /> 
        <Route path="/book/stay/success" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
