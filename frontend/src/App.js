import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import NewCar from "./pages/NewCar";
import UsedCar from "./pages/UsedCar";
import SellCar from "./pages/SellCar";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-car" element={<NewCar />} />
          <Route path="/used-car" element={<UsedCar />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
