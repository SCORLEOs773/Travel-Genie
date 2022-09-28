import { Routes, Route } from "react-router-dom";
import { Home, SingleHotel, SearchResult, Wishlist } from "./pages";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:hotelId" element={<SingleHotel />} />
        <Route path="/hotels/:hotel" element={<SearchResult />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
