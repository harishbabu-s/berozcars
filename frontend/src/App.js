import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import FindCars from "./pages/FindCars";
import BuyUsedCar from "./pages/BuyUsedCar";
import SellMyCar from "./pages/SellMyCar";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-cars" element={<FindCars />} />
          <Route path="/buy-used-car" element={<BuyUsedCar />} />
          <Route path="/sell-my-car" element={<SellMyCar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
