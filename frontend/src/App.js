import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import NewCar from "./pages/NewCar";
import UsedCar from "./pages/UsedCar";
import SellCar from "./pages/SellCar";
import Profile from "./pages/Profile";

function App() {
  // const location = useLocation();

  return (
    <Router>
      <div>
        <Navbar />
        <CSSTransition classNames="fade" timeout={2000}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-car" element={<NewCar />} />
            <Route path="/used-car" element={<UsedCar />} />
            <Route path="/sell-car" element={<SellCar />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </CSSTransition>
      </div>
    </Router>
  );
}

export default App;
