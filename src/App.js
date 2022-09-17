import { Routes, Route } from "react-router-dom";
import { Home, SingleHotel } from "./pages"
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotel/:hotelId" element={<SingleHotel />} />
      </Routes>
    </div>
  );
}

export default App;
